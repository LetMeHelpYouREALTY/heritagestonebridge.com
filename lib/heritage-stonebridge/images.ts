import type { HeritageImage } from "./types";

const BASE = "/images/heritage";

/** Original Heritage at Stonebridge photographs generated for this site (Aug 2026). */
export const HERITAGE_IMAGES = {
  overview: {
    src: `${BASE}/h1-heritage-overview.webp`,
    alt: "Staffed gatehouse and desert landscaping at Heritage at Stonebridge in Summerlin West 89138",
  },
  floorPlans: {
    src: `${BASE}/h1-floor-plans-overview.webp`,
    alt: "Single-story Heritage at Stonebridge elevations from the Cromwell, Stirling, and Evander collections",
  },
  openHouses: {
    src: `${BASE}/h1-open-houses.webp`,
    alt: "Open house at a single-story Heritage at Stonebridge home in Summerlin West",
  },
  pickleball: {
    src: `${BASE}/h1-pickleball-courts.webp`,
    alt: "Six lighted pickleball courts at Heritage at Stonebridge in Summerlin West",
  },
  recentSales: {
    src: `${BASE}/h1-recent-sales.webp`,
    alt: "Single-story Heritage at Stonebridge home prepared for closing in Summerlin West",
  },
  reviews: {
    src: `${BASE}/h1-client-reviews.webp`,
    alt: "Consultation office used for Heritage at Stonebridge buyer and seller meetings",
  },
  cromwell: {
    src: `${BASE}/h2-cromwell-collection.webp`,
    alt: "Cromwell collection cottage elevation at Heritage at Stonebridge with a private side yard",
  },
  stirling: {
    src: `${BASE}/h2-stirling-collection.webp`,
    alt: "Stirling collection single-story elevation at Heritage at Stonebridge with a three-car garage",
  },
  evander: {
    src: `${BASE}/h2-evander-collection.webp`,
    alt: "Evander collection residence at Heritage at Stonebridge with a Next Gen suite wing",
  },
  clubhouse: {
    src: `${BASE}/h2-clubhouse-lounge.webp`,
    alt: "Clubhouse lounge with fireplace in the 8,000 sq. ft. amenity building at Heritage at Stonebridge",
  },
  pool: {
    src: `${BASE}/h2-resort-pool.webp`,
    alt: "Resort-style pool and heated lap pool at Heritage at Stonebridge",
  },
  bocce: {
    src: `${BASE}/h2-bocce-courts.webp`,
    alt: "Three bocce ball courts beside the recreation lawn at Heritage at Stonebridge",
  },
  fitness: {
    src: `${BASE}/h2-fitness-center.webp`,
    alt: "Fitness center at Heritage at Stonebridge with cardio machines and free weights",
  },
  nextGen: {
    src: `${BASE}/h3-next-gen-suite.webp`,
    alt: "Lennar Next Gen suite living area with a kitchenette in the Everly plan at Heritage at Stonebridge",
  },
} as const satisfies Record<string, HeritageImage>;

type MatchOptions = {
  /** When true, return undefined unless the heading names a specific subject. */
  requireSpecific?: boolean;
};

/**
 * Map an H1–H3 string to an original Heritage photo.
 * Headings come from Parallel Search (Aug 27, 2026): Heritage Overview,
 * Heritage Collections, Cromwell / Stirling / Evander, pickleball, clubhouse.
 */
export function matchHeritageImage(
  text: string,
  options: MatchOptions = {},
): HeritageImage | undefined {
  const t = text.toLowerCase();

  if (/pickleball/.test(t)) return HERITAGE_IMAGES.pickleball;
  if (/bocce/.test(t)) return HERITAGE_IMAGES.bocce;
  if (/\bpool|aquatic|spa\b/.test(t)) return HERITAGE_IMAGES.pool;
  if (/fitness|locker/.test(t)) return HERITAGE_IMAGES.fitness;
  if (/clubhouse|amenit/.test(t)) return HERITAGE_IMAGES.clubhouse;
  if (/cromwell|carson|claremont|connery/.test(t))
    return HERITAGE_IMAGES.cromwell;
  if (/stirling|sawyer|sidney|sloan/.test(t)) return HERITAGE_IMAGES.stirling;
  if (/next gen|everly/.test(t)) return HERITAGE_IMAGES.nextGen;
  if (/evander|ethan|elizabeth/.test(t)) return HERITAGE_IMAGES.evander;
  if (/open house|showing/.test(t)) return HERITAGE_IMAGES.openHouses;
  if (/review/.test(t)) return HERITAGE_IMAGES.reviews;
  if (/sold|recent sale|closing|valuation/.test(t))
    return HERITAGE_IMAGES.recentSales;
  if (/collection|floor plan|homes for sale|listing|model/.test(t)) {
    return HERITAGE_IMAGES.floorPlans;
  }
  if (
    /gate|overview|community|location|downtown|summerlin|guard|about/.test(t)
  ) {
    return HERITAGE_IMAGES.overview;
  }

  if (options.requireSpecific) return undefined;
  return HERITAGE_IMAGES.overview;
}
