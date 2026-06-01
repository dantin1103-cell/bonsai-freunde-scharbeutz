# Projekt auf GitHub hochladen

Der Code ist **lokal committed** (Branch `main`). Für GitHub fehlt nur noch deine Anmeldung.

## Variante A – GitHub CLI (empfohlen)

```bash
cd /Users/dennisweber/Bonsai

# 1. Einmalig bei GitHub anmelden (Browser öffnet sich)
gh auth login

# 2. Repository erstellen und Code hochladen
gh repo create bonsai-freunde-scharbeutz --private --source=. --remote=origin --push \
  --description "Community-Website für Bonsai Freunde Scharbeutz"
```

Öffentlich statt privat: `--public` statt `--private` verwenden.

## Variante B – Manuell auf github.com

1. Auf https://github.com/new ein neues Repository anlegen  
   - Name z. B. `bonsai-freunde-scharbeutz`  
   - **Kein** README, .gitignore oder License hinzufügen (existiert schon lokal)

2. Im Terminal:

```bash
cd /Users/dennisweber/Bonsai
git remote add origin https://github.com/DEIN-USERNAME/bonsai-freunde-scharbeutz.git
git push -u origin main
```

(`DEIN-USERNAME` durch deinen GitHub-Namen ersetzen.)

## Was nicht mit hochgeladen wird

Dank `.gitignore`: `node_modules`, `.next`, `.env.local` (Secrets).

## Bereits erledigt

- [x] Git-Repository mit vollständigem Projektstand
- [x] Commit: „Add Bonsai Freunde Scharbeutz community website“
