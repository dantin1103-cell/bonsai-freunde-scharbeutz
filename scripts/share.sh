#!/bin/bash
# Dev-Server + Cloudflare-Tunnel für externes Testen
set -e
cd "$(dirname "$0")/.."
PORT=3010

if ! curl -sf --max-time 2 "http://127.0.0.1:$PORT" >/dev/null; then
  echo "→ Starte Dev-Server auf Port $PORT …"
  npm run dev &
  DEV_PID=$!
  for i in $(seq 1 30); do
    if curl -sf --max-time 2 "http://127.0.0.1:$PORT" >/dev/null; then
      echo "✓ Dev-Server bereit"
      break
    fi
    sleep 1
  done
fi

if ! command -v cloudflared >/dev/null 2>&1; then
  echo "cloudflared fehlt. Installieren: brew install cloudflared"
  exit 1
fi

echo ""
echo "→ Tunnel starten (URL erscheint unten) …"
echo "  Wichtig: Beide Fenster offen lassen (Dev + Tunnel)"
echo ""
exec cloudflared tunnel --url "http://127.0.0.1:$PORT"
