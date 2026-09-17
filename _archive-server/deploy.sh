#!/usr/bin/env bash
# Redéploie Aprende Español sur le Hetzner (build sur le box + Caddy déjà configuré).
# La base SQLite vit dans le volume Docker nommé "aprende_data" -> la progression
# est conservée à chaque redéploiement.
set -euo pipefail

HOST=root@77.42.35.123
DIR=/opt/aprende-espanol
PORT=3210

echo "→ envoi des fichiers..."
rsync -az --delete \
  --exclude node_modules --exclude data --exclude .git \
  --exclude .herenow --exclude '.DS_Store' --exclude '*.db*' \
  ./ "$HOST:$DIR/"

echo "→ build + restart du container (volume aprende_data conservé)..."
ssh "$HOST" "cd $DIR && docker build -t aprende-espanol:latest . \
  && docker rm -f aprende-espanol 2>/dev/null; \
  docker run -d --name aprende-espanol --restart unless-stopped \
    -p 127.0.0.1:${PORT}:3000 -v aprende_data:/data aprende-espanol:latest"

echo "→ vérification..."
sleep 3
curl -s -o /dev/null -w "HTTP %{http_code}\n" https://aprende.77-42-35-123.sslip.io/api/health
echo "OK → https://aprende.77-42-35-123.sslip.io"
