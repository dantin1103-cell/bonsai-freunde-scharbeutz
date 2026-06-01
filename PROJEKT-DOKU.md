# Bonsai Freunde Scharbeutz – Projektdokumentation

Stand: Mai 2026

## Überblick

Community-Website für den Bonsai-Club **Bonsai Freunde Scharbeutz** (Scharbeutz, Schleswig-Holstein).  
Sprache: Deutsch. Design: japanisch-minimalistisch, ruhige Grüntöne, Beige-Hintergründe.

## Tech-Stack

| Technologie | Version / Hinweis |
|-------------|-------------------|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Framer Motion | Animationen |
| next-themes | Hell/Dunkel-Modus |
| Supabase | vorbereitet, noch nicht angebunden |

## Projekt wiederherstellen

```bash
# 1. ZIP entpacken, in den Ordner wechseln
cd bonsai-freunde   # oder wie der Ordner heißt

# 2. Abhängigkeiten installieren
npm install

# 3. Entwicklungsserver starten (Port 3010)
npm run dev
```

Im Browser: **http://localhost:3010**

**Node.js:** Version 18+ (empfohlen: 20+ für neuere Next-Versionen).

## NPM-Skripte

| Befehl | Beschreibung |
|--------|--------------|
| `npm run dev` | Dev-Server auf Port **3010**, erreichbar im LAN (`0.0.0.0`) |
| `npm run build` | Produktions-Build |
| `npm run start` | Produktions-Server (nach `build`) |
| `npm run tunnel` | Cloudflare-Tunnel für externes Testen |
| `npm run share` | Hilfsskript: prüft Dev-Server, startet Tunnel |
| `npm run lint` | ESLint |

## Seitenstruktur

| Route | Inhalt |
|-------|--------|
| `/` | Startseite (Hero, Verein, Events, Galerie, Forum-Hinweis, …) |
| `/ueber-uns` | Geschichte, Team, Timeline |
| `/galerie` | Masonry-Galerie, Lightbox, Kategorien |
| `/forum` | Forum-UI (Platzhalter, Supabase-ready) |
| `/events` | Workshops & Treffen |
| `/mitglieder` | Mitgliederbereich (Platzhalter) |

## Wichtige Ordner

```
src/
  app/              # Seiten (Next.js App Router)
  components/       # UI, Layout, Home, Forum, Galerie
  data/
    content.ts      # Deutsche Texte, Events, Forum-Dummy
    images.ts       # Pfade zu /public/images
  lib/
    supabase/       # Supabase-Client (Platzhalter)
public/
  images/           # Alle Bonsai-Bilder (lokal)
```

## Bilder

- Liegen unter `public/images/` (Hero, Galerie, Events, Team, …).
- Einige Hero-/Galerie-Bilder wurden **KI-generiert**, Rest **Stock (Pexels)**.
- Pfade zentral in `src/data/images.ts` ändern.

## Supabase (optional, später)

1. `.env.local.example` nach `.env.local` kopieren  
2. `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_ANON_KEY` eintragen  
3. Auth und Forum-Datenbank anbinden (`src/lib/supabase/client.ts`)

## Extern testen

Siehe **TEILEN.md**:

- **Nicht** LocalTunnel (`loca.lt`) – Virus-Warnungen.
- **Cloudflare:** `npm run dev` + `npm run tunnel` → URL `https://….trycloudflare.com`
- `next.config.ts` enthält `allowedDevOrigins` für Tunnel-Domains.
- **Gleiches WLAN:** `http://<deine-IP>:3010`

## Design-Entscheidungen

- **Hero:** Kein Vollbild-Foto hinter der Navigation (Lesbarkeit). Text auf hellem Verlauf, Bild separat gerahmt.
- **Unterseiten:** PageHero mit optionalem kleinem Vorschaubild, kein Vollbild-Hintergrund.
- **Farben:** CSS-Variablen in `src/app/globals.css` (`--forest`, `--beige`, …).

## Bekannte Hinweise

- Port **3010** belegt absichtlich (andere Projekte oft auf 3000).
- Nach Änderung an `next.config.ts` Dev-Server neu starten.
- Tunnel-URLs sind **temporär** (bei jedem `npm run tunnel` neu).

## Nächste Schritte (Ideensammlung)

- [ ] Supabase Auth + echtes Forum
- [ ] Eigene Vereinsfotos statt Platzhalter
- [ ] Deployment auf Vercel (`npx vercel`)
- [ ] Impressum & Datenschutz mit echten Inhalten

## Kontakt / Verein (Platzhalter)

- E-Mail in `src/data/content.ts`: `kontakt@bonsai-freunde-scharbeutz.de`
- Ort: Scharbeutz, Schleswig-Holstein

---

*Backup erstellt zum Archivieren des Projektstands. `node_modules` und `.next` sind nicht im ZIP – nach dem Entpacken `npm install` ausführen.*
