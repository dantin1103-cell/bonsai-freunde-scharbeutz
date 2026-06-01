# Bonsai Freunde Scharbeutz

Moderne Community-Website für den Bonsai-Club in Scharbeutz — Next.js, Tailwind CSS, Framer Motion und Supabase-Vorbereitung.

## Features

- **Startseite** mit Hero, Vereinsinfo, Events, Galerie, Community, Baum des Monats, Testimonials, Pflege-Tipps, Newsletter
- **Über uns** — Geschichte, Philosophie, Team, Timeline
- **Galerie** — Masonry-Layout, Kategorien, Lightbox
- **Forum** — Kategorien, Threads, Suche, Sidebar (Supabase-ready)
- **Events** — Workshop-Karten und Kalenderübersicht
- **Mitgliederbereich** — Profil-Platzhalter, Bäume, Fortschritt, Badges
- Dark/Light Mode, scroll animations, sticky navigation, loading screen

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 3
- Framer Motion
- next-themes
- Supabase (Client vorbereitet)

## Entwicklung

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3010](http://localhost:3010)

**Extern testen:** siehe [TEILEN.md](./TEILEN.md) (`npm run tunnel` für einen öffentlichen Link).

**Vollständige Doku & Wiederherstellung:** [PROJEKT-DOKU.md](./PROJEKT-DOKU.md)

**Hinweis:** Das Projekt nutzt Next.js 15 und Tailwind CSS 3 — kompatibel mit Node.js 18. Für neuere Toolchains empfiehlt sich Node.js 20+.

## Supabase

Kopieren Sie `.env.local.example` nach `.env.local` und tragen Sie Ihre Supabase-URL und den Anon-Key ein.

## Projektstruktur

```
src/
├── app/              # Seiten (App Router)
├── components/
│   ├── home/         # Startseiten-Sektionen
│   ├── layout/       # Header, Footer, Logo, …
│   ├── forum/        # Forum-UI
│   ├── gallery/      # Galerie-Grid
│   ├── shared/       # PageHero, …
│   └── ui/           # Button, Card, Section, …
├── data/content.ts   # Deutsche Dummy-Inhalte
└── lib/              # Utils, Supabase
```

## Lizenz

Privates Vereinsprojekt.
