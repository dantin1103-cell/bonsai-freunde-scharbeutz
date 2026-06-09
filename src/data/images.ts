/**
 * Lokale Bilder unter /public/images
 * Hero & Ausstellung: KI-generiert · Rest: Stock (Pexels/Unsplash)
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const img = (path: string) => `${base}${path}`;

export const images = {
  hero: img("/images/hero/main.jpg"),
  heroFallback: img("/images/hero/fallback.jpg"),

  about: {
    garden: img("/images/about/garden.jpg"),
    detail: img("/images/about/detail.jpg"),
    workshop: img("/images/about/workshop.jpg"),
  },

  treeOfMonth: img("/images/gallery/tree-month.jpg"),

  gallery: {
    exhibition: img("/images/gallery/exhibition-01.jpg"),
    indoor01: img("/images/gallery/indoor-01.jpg"),
    indoor02: img("/images/gallery/indoor-02.jpg"),
    indoor03: img("/images/gallery/indoor-03.jpg"),
    outdoor01: img("/images/gallery/outdoor-01.jpg"),
    outdoor02: img("/images/gallery/outdoor-02.jpg"),
    outdoor03: img("/images/gallery/outdoor-03.jpg"),
    outdoor04: img("/images/gallery/outdoor-04.jpg"),
    beginner01: img("/images/gallery/beginner-01.jpg"),
    beginner02: img("/images/gallery/beginner-02.jpg"),
    treeMonth: img("/images/gallery/tree-month.jpg"),
  },

  events: {
    workshopSpring: img("/images/events/workshop-spring.jpg"),
    workshopGenerated: img("/images/events/workshop-generated.jpg"),
    clubMeeting: img("/images/events/club-meeting.jpg"),
    excursion: img("/images/events/excursion.jpg"),
  },

  members: {
    ficus: img("/images/members/ficus.jpg"),
    pine: img("/images/members/pine.jpg"),
  },

  team: {
    petra: img("/images/team/petra.jpg"),
    klaus: img("/images/team/klaus.jpg"),
    anna: img("/images/team/anna.jpg"),
    markus: img("/images/team/markus.jpg"),
  },
} as const;
