/**
 * Lokale Bilder unter /public/images
 * Hero & Ausstellung: KI-generiert · Rest: Stock (Pexels/Unsplash)
 */
export const images = {
  hero: "/images/hero/main.jpg",
  heroFallback: "/images/hero/fallback.jpg",

  about: {
    garden: "/images/about/garden.jpg",
    detail: "/images/about/detail.jpg",
    workshop: "/images/about/workshop.jpg",
  },

  treeOfMonth: "/images/gallery/tree-month.jpg",

  gallery: {
    exhibition: "/images/gallery/exhibition-01.jpg",
    indoor01: "/images/gallery/indoor-01.jpg",
    indoor02: "/images/gallery/indoor-02.jpg",
    indoor03: "/images/gallery/indoor-03.jpg",
    outdoor01: "/images/gallery/outdoor-01.jpg",
    outdoor02: "/images/gallery/outdoor-02.jpg",
    outdoor03: "/images/gallery/outdoor-03.jpg",
    outdoor04: "/images/gallery/outdoor-04.jpg",
    beginner01: "/images/gallery/beginner-01.jpg",
    beginner02: "/images/gallery/beginner-02.jpg",
    treeMonth: "/images/gallery/tree-month.jpg",
  },

  events: {
    workshopSpring: "/images/events/workshop-spring.jpg",
    workshopGenerated: "/images/events/workshop-generated.jpg",
    clubMeeting: "/images/events/club-meeting.jpg",
    excursion: "/images/events/excursion.jpg",
  },

  members: {
    ficus: "/images/members/ficus.jpg",
    pine: "/images/members/pine.jpg",
  },

  team: {
    petra: "/images/team/petra.jpg",
    klaus: "/images/team/klaus.jpg",
    anna: "/images/team/anna.jpg",
    markus: "/images/team/markus.jpg",
  },
} as const;
