#!/bin/bash
set -e
cd "$(dirname "$0")/.."

echo "→ Baue statischen Export für GitHub Pages …"
GITHUB_PAGES=true npm run build
touch out/.nojekyll

echo "→ Deploye auf gh-pages Branch …"
cd out
rm -rf .git
git init -b gh-pages
git add -A
git commit -m "Deploy $(date +%Y-%m-%d_%H-%M)"
git push -f https://github.com/dantin1103-cell/bonsai-freunde-scharbeutz.git gh-pages

echo "✓ Fertig — Seite in 1–2 Min. unter:"
echo "  https://dantin1103-cell.github.io/bonsai-freunde-scharbeutz/"
