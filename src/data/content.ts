import { images } from "./images";

export const siteConfig = {
  name: "Bonsai Freunde Scharbeutz",
  tagline: "Gemeinschaft · Tradition · Leidenschaft",
  description:
    "Der Bonsai-Club an der Ostsee: Workshops, Austausch und die Kunst des lebenden Baums in Scharbeutz und Umgebung.",
  email: "kontakt@bonsai-freunde-scharbeutz.de",
  location: "Scharbeutz, Schleswig-Holstein",
  founded: 2008,
};

export const navLinks = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/galerie", label: "Galerie" },
  { href: "/forum", label: "Forum" },
  { href: "/events", label: "Events" },
  { href: "/mitglieder", label: "Mitglieder" },
];

export const forumCategories = [
  {
    slug: "anfaengerfragen",
    name: "Anfängerfragen",
    description: "Erste Schritte, Grundlagen und Tipps für Einsteiger",
    color: "bg-emerald-600/20 text-emerald-700 dark:text-emerald-300",
    threads: 142,
  },
  {
    slug: "pflege-gestaltung",
    name: "Pflege & Gestaltung",
    description: "Schnitt, Draht, Bewässerung und Formsprache",
    color: "bg-forest-600/20 text-forest-800 dark:text-forest-200",
    threads: 318,
  },
  {
    slug: "werkzeuge",
    name: "Werkzeuge",
    description: "Schere, Jinshi, Töpfe und Materialberatung",
    color: "bg-wood-500/20 text-wood-800 dark:text-wood-200",
    threads: 89,
  },
  {
    slug: "yamadori",
    name: "Yamadori",
    description: "Sammlung, Rechtliches und Entwicklung wilder Funde",
    color: "bg-stone-500/20 text-stone-700 dark:text-stone-300",
    threads: 56,
  },
  {
    slug: "ausstellungen",
    name: "Ausstellungen",
    description: "Shows, Bewertungen und Präsentation",
    color: "bg-amber-600/20 text-amber-800 dark:text-amber-200",
    threads: 74,
  },
  {
    slug: "workshops-treffen",
    name: "Workshops & Treffen",
    description: "Termine, Anmeldungen und Nachbesprechungen",
    color: "bg-teal-600/20 text-teal-800 dark:text-teal-200",
    threads: 203,
  },
  {
    slug: "baum-des-monats",
    name: "Baum des Monats",
    description: "Monatliche Highlights aus unserer Community",
    color: "bg-rose-600/20 text-rose-800 dark:text-rose-200",
    threads: 36,
  },
];

export const forumThreads = [
  {
    id: "1",
    title: "Ficus retusa – erste Formschnitte nach dem Kauf?",
    author: "Helga M.",
    avatar: "HM",
    category: "Anfängerfragen",
    replies: 24,
    likes: 18,
    time: "vor 2 Stunden",
    excerpt:
      "Mein erster Indoor-Bonsai wächst kräftig. Wann und wie viel darf ich beim ersten Schnitt wegnehmen?",
    pinned: false,
    hot: true,
  },
  {
    id: "2",
    title: "Überwinterung von Pinus mugo auf dem Balkon",
    author: "Thomas K.",
    avatar: "TK",
    category: "Pflege & Gestaltung",
    replies: 41,
    likes: 32,
    time: "vor 5 Stunden",
    excerpt:
      "Erfahrungen aus drei Wintern in Scharbeutz – Windschutz, Vlies und Bewässerung im Februar.",
    pinned: true,
    hot: false,
  },
  {
    id: "3",
    title: "Empfehlung: Jin-Werkzeug unter 80 €",
    author: "Markus W.",
    avatar: "MW",
    category: "Werkzeuge",
    replies: 17,
    likes: 45,
    time: "gestern",
    excerpt:
      "Vergleich zweier Sets aus Carbonstahl – was lohnt sich für gelegentliche Jin-Arbeit?",
    pinned: false,
    hot: true,
  },
  {
    id: "4",
    title: "Club-Treffen 14. Juni – Anmeldung & Mitbringliste",
    author: "Vorstand",
    avatar: "BF",
    category: "Workshops & Treffen",
    replies: 58,
    likes: 67,
    time: "vor 1 Tag",
    excerpt:
      "Sommer-Workshop im Vereinsgarten: Thema Nebari und Wurzelarbeit an Laubbäumen.",
    pinned: true,
    hot: false,
  },
  {
    id: "5",
    title: "Baum des Monats Mai: Eiche mit Nebelwald-Charakter",
    author: "Petra S.",
    avatar: "PS",
    category: "Baum des Monats",
    replies: 33,
    likes: 89,
    time: "vor 3 Tagen",
    excerpt:
      "15 Jahre Entwicklung aus Yamadori – Fotos der Stadien und meine Lektionen zum Totholz.",
    pinned: false,
    hot: true,
  },
];

export const popularTopics = [
  { tag: "Überwinterung", count: 128 },
  { tag: "Nebari", count: 94 },
  { tag: "Schädlinge", count: 76 },
  { tag: "Umtopfen", count: 71 },
  { tag: "Jin & Shari", count: 58 },
  { tag: "Düngung Frühjahr", count: 52 },
];

export const upcomingEvents = [
  {
    id: "e1",
    title: "Frühjahrs-Workshop: Formschnitt an Laubbäumen",
    date: "2026-06-14",
    time: "10:00 – 16:00",
    location: "Vereinsgarten Scharbeutz",
    spots: 12,
    spotsLeft: 4,
    image: images.events.workshopSpring,
    description:
      "Gemeinsame Arbeit an mitgebrachten Bäumen unter Anleitung erfahrener Mitglieder.",
  },
  {
    id: "e2",
    title: "Monatliches Club-Treffen & Baumberatung",
    date: "2026-05-28",
    time: "18:30 – 21:00",
    location: "Gemeinschaftsraum, Strandallee",
    spots: 30,
    spotsLeft: 18,
    image: images.events.clubMeeting,
    description:
      "Offener Abend für Mitglieder und Gäste – bringen Sie Fragen und Fotos mit.",
  },
  {
    id: "e3",
    title: "Exkursion: Bäume in japanischen Gärten (Hamburg)",
    date: "2026-07-05",
    time: "09:00 – 17:00",
    location: "Treffpunkt Scharbeutz Bahnhof",
    spots: 20,
    spotsLeft: 7,
    image: images.events.excursion,
    description:
      "Geführter Besuch mit Fokus auf Form, Balance und Jahreszeiten-Rhythmus.",
  },
];

export const galleryItems = [
  {
    id: "g1",
    title: "Kiefer im Morgennebel",
    category: "Outdoor Bonsai",
    image: images.gallery.outdoor01,
    artist: "Klaus R.",
  },
  {
    id: "g2",
    title: "Ficus am Fenster",
    category: "Indoor Bonsai",
    image: images.gallery.indoor01,
    artist: "Anna L.",
  },
  {
    id: "g3",
    title: "Erste Jin-Linien",
    category: "Beginner Trees",
    image: images.gallery.beginner01,
    artist: "Jonas P.",
  },
  {
    id: "g4",
    title: "Ausstellung 2025 – Best of Show",
    category: "Exhibition Trees",
    image: images.gallery.exhibition,
    artist: "Petra S.",
  },
  {
    id: "g5",
    title: "Wacholder nach Umtopfen",
    category: "Outdoor Bonsai",
    image: images.gallery.outdoor02,
    artist: "Thomas K.",
  },
  {
    id: "g6",
    title: "Zelkova – Herbstfärbung",
    category: "Exhibition Trees",
    image: images.gallery.treeMonth,
    artist: "Helga M.",
  },
  {
    id: "g7",
    title: "Laubbaum im Frühjahr",
    category: "Outdoor Bonsai",
    image: images.gallery.outdoor03,
    artist: "Markus W.",
  },
  {
    id: "g8",
    title: "Subtropisch auf der Fensterbank",
    category: "Indoor Bonsai",
    image: images.gallery.indoor02,
    artist: "Helga M.",
  },
  {
    id: "g9",
    title: "Erster Yamadori-Fund",
    category: "Beginner Trees",
    image: images.gallery.beginner02,
    artist: "Jonas P.",
  },
  {
    id: "g10",
    title: "Formschnitt-Dokumentation",
    category: "Indoor Bonsai",
    image: images.gallery.indoor03,
    artist: "Anna L.",
  },
  {
    id: "g11",
    title: "Stein und Moos",
    category: "Outdoor Bonsai",
    image: images.gallery.outdoor04,
    artist: "Klaus R.",
  },
  {
    id: "g12",
    title: "Club-Ausstellung Sommer",
    category: "Exhibition Trees",
    image: images.gallery.exhibition,
    artist: "Verein",
  },
];

export const testimonials = [
  {
    quote:
      "Hier habe ich nicht nur Technik gelernt, sondern Geduld. Die Atmosphäre ist ruhig, respektvoll – genau wie Bonsai selbst.",
    author: "Helga M.",
    role: "Mitglied seit 2019",
  },
  {
    quote:
      "Als Anfänger fühlte ich mich nie dumm. Jede Frage wird ernst genommen – das Forum und die Treffen ergänzen sich perfekt.",
    author: "Jonas P.",
    role: "Mitglied seit 2024",
  },
  {
    quote:
      "Die Workshops an der Ostsee sind etwas Besonderes: Wind, Licht und gemeinsame Konzentration am lebenden Baum.",
    author: "Thomas K.",
    role: "Vorstandsmitglied",
  },
];

export const teamMembers = [
  {
    name: "Petra Schneider",
    role: "1. Vorsitzende",
    bio: "Spezialisiert auf Laubbäume und Ausstellungsvorbereitung.",
    image: images.team.petra,
  },
  {
    name: "Klaus Reinhardt",
    role: "2. Vorsitzender",
    bio: "Yamadori-Sammler mit über 30 Jahren Erfahrung an der Ostsee.",
    image: images.team.klaus,
  },
  {
    name: "Anna Lehmann",
    role: "Workshop-Leitung",
    bio: "Gestaltung und Pflege – besonders Indoor- und subtropische Arten.",
    image: images.team.anna,
  },
  {
    name: "Markus Weber",
    role: "Forum & Digital",
    bio: "Betreut Community-Plattform und Nachwuchsförderung.",
    image: images.team.markus,
  },
];

export const timeline = [
  {
    year: "2008",
    title: "Gründung in Scharbeutz",
    description:
      "Acht Bonsai-Begeisterte treffen sich erstmals regelmäßig am Timmendorfer Strand.",
  },
  {
    year: "2012",
    title: "Erster öffentlicher Workshop",
    description:
      "Über 40 Teilnehmer – Beginn der offenen Treffen für Interessierte.",
  },
  {
    year: "2018",
    title: "Vereinsgarten",
    description:
      "Gemeinsamer Standort für Überwinterung, Übungsbäume und Club-Events.",
  },
  {
    year: "2024",
    title: "Digitale Community",
    description:
      "Forum und Mitgliederbereich – Austausch auch zwischen den Treffen.",
  },
];

export const communityHighlights = [
  {
    title: "127 aktive Mitglieder",
    description: "Von Einsteigern bis Meister-Gärtnern an der Ostsee",
    icon: "users",
  },
  {
    title: "24 Workshops pro Jahr",
    description: "Pflege, Gestaltung, Sammlung und Ausstellung",
    icon: "calendar",
  },
  {
    title: "Forum mit 900+ Themen",
    description: "Antworten meist innerhalb von 24 Stunden",
    icon: "message",
  },
  {
    title: "Baum des Monats",
    description: "Inspiration und Lernen aus echten Entwicklungen",
    icon: "tree",
  },
];

export const careTips = [
  {
    season: "Frühling",
    tip: "Erst düngen, wenn die Knospen schwellen – nicht zu früh nach der Ruhephase.",
  },
  {
    season: "Sommer",
    tip: "Morgens gießen, Mittagssonne bei empfindlichen Arten schattieren.",
  },
  {
    season: "Herbst",
    tip: "Letzter starker Schnitt vor der Winterruhe – Kraft für die Kälte reservieren.",
  },
  {
    season: "Winter",
    tip: "Substrate leicht feucht halten – Wind trocknet schneller als Frost.",
  },
];
