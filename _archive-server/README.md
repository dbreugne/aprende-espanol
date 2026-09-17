# Archive serveur (retiré le 2026-09-12)
Dylan a décidé de garder Aprende Español uniquement sur here.now (opaque-jubilee-z4j9), en localStorage.
Le déploiement Hetzner (container Docker + Caddy + volume aprende_data) a été supprimé ce jour.
- aprende-hetzner-2026-09-12.db : sauvegarde de la base SQLite prod avant suppression (profils dylan jour 7, rebecca).
- server.js / Dockerfile / deploy.sh / package.json : ancien backend Express + better-sqlite3.
- migrate.html : ancienne page d'import here.now → serveur.
Le front (public/index.html) garde un double mode : il bascule tout seul en localStorage quand /api/profiles ne répond pas.
