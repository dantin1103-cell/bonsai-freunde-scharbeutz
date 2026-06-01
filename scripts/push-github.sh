#!/bin/bash
# Privates Repo unter dantin1103-cell anlegen und pushen
set -e
cd "$(dirname "$0")/.."

if ! gh auth status >/dev/null 2>&1; then
  echo "→ Bitte zuerst anmelden: gh auth login"
  exit 1
fi

echo "→ Erstelle privates Repository und pushe …"
gh repo create bonsai-freunde-scharbeutz \
  --private \
  --source=. \
  --remote=origin \
  --push \
  --description "Community-Website Bonsai Freunde Scharbeutz"

echo ""
echo "✓ Fertig: https://github.com/dantin1103-cell/bonsai-freunde-scharbeutz"
