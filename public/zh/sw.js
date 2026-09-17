/* Xué Zhōngwén — service worker (mode avion)
   Toute l'app est mise en cache : elle marche sans réseau.
   /api/* n'est jamais mis en cache (la progression est gérée par l'app). */
const CACHE = "xue-v2";
const ASSETS = [
  "./", "index.html", "pinyin-pro.js?v=1", "zh.js?v=1", "curriculum.js?v=1", "lexique.js?v=1", "grammaire.js?v=1",
  "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k.startsWith("xue-")).map(k => caches.delete(k))))   // ne touche pas au cache de l'autre langue
      .then(() => self.clients.claim())
  );
});

// Réseau d'abord (pour recevoir les mises à jour), cache si pas de réseau ou trop lent.
function networkFirst(req) {
  return new Promise(resolve => {
    let done = false;
    const fallback = () => caches.match(req, { ignoreSearch: req.mode === "navigate" })
      .then(r => r || caches.match("index.html"))
      .then(r => { if (!done && r) { done = true; resolve(r); } });
    const timer = setTimeout(fallback, 3500);
    fetch(req).then(res => {
      clearTimeout(timer);
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      if (!done) { done = true; resolve(res); }
    }).catch(() => { clearTimeout(timer); fallback().then(() => { if (!done) { done = true; resolve(Response.error()); } }); });
  });
}

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin || url.pathname.startsWith("/api/")) return;
  e.respondWith(networkFirst(e.request));
});
