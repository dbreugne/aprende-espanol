/* ============================================================
   Aprende Español — serveur + base de données (SQLite)
   Sert le front statique + une API REST pour la progression
   de chaque profil (synchro multi-appareils).
   ============================================================ */
const express = require("express");
const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");
fs.mkdirSync(DATA_DIR, { recursive: true });

// --- Base de données ---
const db = new Database(path.join(DATA_DIR, "aprende.db"));
db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS profiles (
    id         TEXT PRIMARY KEY,
    state      TEXT NOT NULL DEFAULT '{}',
    updated_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS profile_meta (
    id         TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name  TEXT NOT NULL DEFAULT '',
    color      TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);
// Profils historiques (créés avant l'existence de profile_meta)
const qMetaSeed = db.prepare(`INSERT OR IGNORE INTO profile_meta (id, first_name, last_name, color, created_at) VALUES (?, ?, ?, ?, ?)`);
qMetaSeed.run("dylan",   "Dylan",   "", "#2f6fe8", 0);
qMetaSeed.run("rebecca", "Rebecca", "", "#e8542f", 0);
const qMetaGet  = db.prepare("SELECT id, first_name, last_name, color FROM profile_meta WHERE id = ?");
const qMetaList = db.prepare("SELECT id, first_name, last_name, color FROM profile_meta ORDER BY created_at ASC, first_name COLLATE NOCASE ASC");
const qMetaAdd  = db.prepare(`INSERT INTO profile_meta (id, first_name, last_name, color, created_at) VALUES (?, ?, ?, ?, ?)`);
const qGet    = db.prepare("SELECT state, updated_at FROM profiles WHERE id = ?");
const qUpsert = db.prepare(`
  INSERT INTO profiles (id, state, updated_at) VALUES (?, ?, ?)
  ON CONFLICT(id) DO UPDATE SET state = excluded.state, updated_at = excluded.updated_at
`);

// Profils autorisés = ceux présents dans profile_meta (côté serveur = source de vérité)
function isValidProfile(id) { return !!qMetaGet.get(id); }
function metaToJson(m) {
  return { id: m.id, firstName: m.first_name, lastName: m.last_name, color: m.color };
}
const PALETTE = ["#2f6fe8", "#e8542f", "#1fa66b", "#8b5cf6", "#e0a100", "#0ea5b7", "#d63384", "#f97316"];
function slugify(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function cleanName(v, max) {
  if (typeof v !== "string") return "";
  return v.trim().replace(/\s+/g, " ").slice(0, max);
}

// --- App ---
const app = express();
app.use(express.json({ limit: "4mb" }));

// CORS ouvert sur l'API (app perso, profils fixes) — permet la migration
// depuis l'ancien site here.now (origine différente) via la page migrate.html.
app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.get("/api/health", (req, res) => res.json({ ok: true, db: true }));

// Liste des profils
app.get("/api/profiles", (req, res) => {
  res.json({ profiles: qMetaList.all().map(metaToJson) });
});

// Créer un profil (prénom obligatoire, nom optionnel)
app.post("/api/profiles", (req, res) => {
  const firstName = cleanName(req.body && req.body.firstName, 40);
  const lastName  = cleanName(req.body && req.body.lastName, 40);
  if (firstName.length < 2) return res.status(400).json({ error: "Le prénom doit faire au moins 2 caractères." });
  const base = slugify(firstName + (lastName ? "-" + lastName : "")) || "profil";
  let id = base, n = 2;
  while (qMetaGet.get(id)) id = base + "-" + n++;
  // même prénom + nom déjà présent -> on refuse le doublon exact
  const dup = qMetaList.all().find(m =>
    m.first_name.toLowerCase() === firstName.toLowerCase() &&
    m.last_name.toLowerCase() === lastName.toLowerCase());
  if (dup) return res.status(409).json({ error: "Ce profil existe déjà.", profile: metaToJson(dup) });
  const color = PALETTE[qMetaList.all().length % PALETTE.length];
  qMetaAdd.run(id, firstName, lastName, color, Date.now());
  res.status(201).json({ profile: metaToJson(qMetaGet.get(id)) });
});

// Lire l'état d'un profil
app.get("/api/state/:profile", (req, res) => {
  const p = req.params.profile;
  if (!isValidProfile(p)) return res.status(404).json({ error: "unknown profile" });
  const row = qGet.get(p);
  res.json({
    profile: p,
    state: row ? JSON.parse(row.state) : null,
    updatedAt: row ? row.updated_at : null,
  });
});

// Sauvegarder l'état d'un profil (PUT normal, POST pour sendBeacon au départ de la page)
function saveHandler(req, res) {
  const p = req.params.profile;
  if (!isValidProfile(p)) return res.status(404).json({ error: "unknown profile" });
  const state = req.body && req.body.state;
  if (typeof state !== "object" || state === null) {
    return res.status(400).json({ error: "invalid state payload" });
  }
  qUpsert.run(p, JSON.stringify(state), Date.now());
  res.json({ ok: true });
}
app.put("/api/state/:profile", saveHandler);
app.post("/api/state/:profile", saveHandler);

// Front statique
app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

app.listen(PORT, () => {
  console.log(`Aprende Español running on :${PORT} (data: ${DATA_DIR})`);
});
