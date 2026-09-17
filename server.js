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

// Progression par langue : espagnol = id du profil, chinois = "zh:" + id
function stateKey(req){ return (req.path.startsWith("/api/zh/") ? "zh:" : "") + req.params.profile; }
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

// CORS ouvert sur l'API (app perso) : permet l'import depuis l'ancienne version here.now.
app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.get("/api/health", (req, res) => {
  const n = db.prepare("SELECT COUNT(*) AS n FROM profile_meta").get().n;
  res.json({ ok: true, db: true, profiles: n });
});

// Import de la progression de l'ancienne version here.now (localStorage).
// Écrase l'état serveur sauf s'il a déjà été modifié par la nouvelle app (_ts).
app.post("/api/import", (req, res) => {
  const body = req.body || {};
  const list = Array.isArray(body.profiles) ? body.profiles : [];
  const states = (body.states && typeof body.states === "object") ? body.states : {};
  const result = { created: [], imported: [], skipped: [] };
  db.transaction(() => {
    for (const m of list) {
      const id = typeof m.id === "string" ? slugify(m.id) : "";
      const firstName = cleanName(m.firstName, 40);
      if (!id || firstName.length < 2) continue;
      if (!qMetaGet.get(id)) {
        const color = /^#[0-9a-f]{6}$/i.test(m.color || "") ? m.color : PALETTE[qMetaList.all().length % PALETTE.length];
        qMetaAdd.run(id, firstName, cleanName(m.lastName, 40), color, Date.now());
        result.created.push(id);
      }
    }
    for (const [id, st] of Object.entries(states)) {
      if (!isValidProfile(id) || typeof st !== "object" || st === null) continue;
      const row = qGet.get(id);
      const cur = row ? JSON.parse(row.state) : null;
      if (cur && cur._ts) { result.skipped.push(id); continue; }
      qUpsert.run(id, JSON.stringify(st), Date.now());
      result.imported.push(id);
    }
  })();
  res.json({ ok: true, ...result });
});

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
app.get(["/api/state/:profile", "/api/zh/state/:profile"], (req, res) => {
  const p = req.params.profile;
  if (!isValidProfile(p)) return res.status(404).json({ error: "unknown profile" });
  const row = qGet.get(stateKey(req));
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
  qUpsert.run(stateKey(req), JSON.stringify(state), Date.now());
  res.json({ ok: true });
}
app.put("/api/state/:profile", saveHandler);
app.post("/api/state/:profile", saveHandler);
app.put("/api/zh/state/:profile", saveHandler);
app.post("/api/zh/state/:profile", saveHandler);

// Front statique
// no-cache : le navigateur revalide à chaque fois (le service worker gère le hors-ligne)
app.use(express.static(path.join(__dirname, "public"), {
  extensions: ["html"],
  setHeaders: (res) => res.setHeader("Cache-Control", "no-cache"),
}));

// Sauvegarde quotidienne de la base (7 dernières gardées dans DATA_DIR/backups)
const BACKUP_DIR = path.join(DATA_DIR, "backups");
fs.mkdirSync(BACKUP_DIR, { recursive: true });
async function backupDb() {
  const file = path.join(BACKUP_DIR, `aprende-${new Date().toISOString().slice(0, 10)}.db`);
  try {
    await db.backup(file);
    const old = fs.readdirSync(BACKUP_DIR).filter(f => f.endsWith(".db")).sort().slice(0, -7);
    old.forEach(f => fs.unlinkSync(path.join(BACKUP_DIR, f)));
  } catch (e) { console.error("backup failed", e); }
}
backupDb();
setInterval(backupDb, 24 * 3600 * 1000);

app.listen(PORT, () => {
  console.log(`Aprende Español running on :${PORT} (data: ${DATA_DIR})`);
});
