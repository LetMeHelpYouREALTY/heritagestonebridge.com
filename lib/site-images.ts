/**
 * Photorealistic site imagery keyed to page and section headings.
 * Match H1/H2/H3 copy so every route gets a content-appropriate photo
 * without duplicating assets per page.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

export const SITE_IMAGES = {
  heroHeritage: {
    src: "/images/hero/hero-heritage-stonebridge.webp",
    alt: "Heritage at Stonebridge guard-gated 55+ community in Summerlin West with Red Rock Canyon views",
  },
  hero55plus: {
    src: "/images/hero/hero-55plus.webp",
    alt: "Active adults playing pickleball at a Summerlin 55+ community clubhouse",
  },
  heroLuxury: {
    src: "/images/hero/hero-luxury.webp",
    alt: "Luxury modern desert estate in Summerlin with Red Rock Canyon sunset views",
  },
  heroCommunity: {
    src: "/images/hero/hero-community.webp",
    alt: "Master-planned Summerlin neighborhood street with desert landscaping and mountain views",
  },
  heroSearch: {
    src: "/images/hero/hero-search.webp",
    alt: "Las Vegas Valley homes in Summerlin West looking toward the city at dusk",
  },
  heroLifestyle: {
    src: "/images/hero/hero-lifestyle.webp",
    alt: "Resort-style pool and spa at a Summerlin active adult clubhouse",
  },
  heroInvestment: {
    src: "/images/hero/hero-investment.webp",
    alt: "New-construction contemporary homes in the Las Vegas Valley",
  },
  guardGate: {
    src: "/images/sections/section-guard-gate.webp",
    alt: "Staffed guard-gated entrance at a Summerlin community",
  },
  clubhouse: {
    src: "/images/sections/section-clubhouse.webp",
    alt: "Modern Heritage at Stonebridge clubhouse lounge overlooking the pool",
  },
  pickleball: {
    src: "/images/sections/section-pickleball.webp",
    alt: "Lighted pickleball courts at a Summerlin 55+ community at dusk",
  },
  pool: {
    src: "/images/sections/section-pool.webp",
    alt: "Heated outdoor pool and spa at Heritage at Stonebridge amenities",
  },
  kitchen: {
    src: "/images/sections/section-kitchen.webp",
    alt: "Contemporary Lennar kitchen with quartz counters and stainless appliances",
  },
  living: {
    src: "/images/sections/section-living.webp",
    alt: "Open-concept great room in a single-story Summerlin 55+ home",
  },
  downtown: {
    src: "/images/sections/section-downtown-summerlin.webp",
    alt: "Downtown Summerlin shopping and dining promenade",
  },
  redRock: {
    src: "/images/sections/section-red-rock.webp",
    alt: "Red Rock Canyon sandstone formations west of Summerlin",
  },
  golf: {
    src: "/images/sections/section-golf.webp",
    alt: "Championship desert golf course in Summerlin with mountain views",
  },
  fitness: {
    src: "/images/sections/section-fitness.webp",
    alt: "Community fitness center overlooking a desert pool and mountains",
  },
  landscaping: {
    src: "/images/sections/section-landscaping.webp",
    alt: "HOA-maintained desert xeriscape and walking paths in Summerlin",
  },
  selling: {
    src: "/images/sections/section-selling.webp",
    alt: "Staged contemporary Summerlin home exterior prepared for listing",
  },
  buying: {
    src: "/images/sections/section-buying.webp",
    alt: "Buyers touring a bright single-story 55+ home in Summerlin",
  },
  consultation: {
    src: "/images/sections/section-consultation.webp",
    alt: "Real estate consultation with Las Vegas neighborhood maps and listings",
  },
  bocce: {
    src: "/images/sections/section-bocce.webp",
    alt: "Bocce courts and picnic park at a Summerlin 55+ community",
  },
  condo: {
    src: "/images/sections/section-condo.webp",
    alt: "Modern Las Vegas condominium building with desert mountain views",
  },
  ridges: {
    src: "/images/neighborhoods/neighborhood-ridges.webp",
    alt: "Luxury custom estates in The Ridges Summerlin",
  },
  henderson: {
    src: "/images/neighborhoods/neighborhood-henderson.webp",
    alt: "Henderson Nevada master-planned neighborhood with mountain views",
  },
  mountainsEdge: {
    src: "/images/neighborhoods/neighborhood-mountains-edge.webp",
    alt: "Mountains Edge community near Exploration Peak in southwest Las Vegas",
  },
  northwest: {
    src: "/images/neighborhoods/neighborhood-northwest.webp",
    alt: "Northwest Las Vegas master-planned homes with mountain views",
  },
  lake: {
    src: "/images/neighborhoods/neighborhood-lake.webp",
    alt: "Waterfront homes at Lake Las Vegas in Henderson",
  },
  propertyLuxury: {
    src: "/images/properties/property-luxury.webp",
    alt: "Modern luxury home for sale in Summerlin Las Vegas",
  },
  propertyFamily: {
    src: "/images/properties/property-family.webp",
    alt: "Single-story home for sale in Henderson Nevada",
  },
  propertyEstate: {
    src: "/images/properties/property-estate.webp",
    alt: "Elegant estate home for sale in Green Valley Henderson",
  },
} as const satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof SITE_IMAGES;

/** Best LCP hero — Heritage at Stonebridge community photograph. */
export const BEST_HERO_IMAGE: SiteImage = SITE_IMAGES.heroHeritage;

type HeadingRule = {
  pattern: RegExp;
  key: SiteImageKey;
};

/** More specific patterns first. */
const HEADING_RULES: HeadingRule[] = [
  { pattern: /heritage at stonebridge|heritage stonebridge/i, key: "heroHeritage" },
  { pattern: /the ridges|ridges summerlin|ultimate address|discerning/i, key: "ridges" },
  { pattern: /lake las vegas|del webb at lake|waterfront/i, key: "lake" },
  { pattern: /mountains.?edge|exploration peak/i, key: "mountainsEdge" },
  { pattern: /skye canyon|centennial hills|northwest las vegas|north las vegas|aliante/i, key: "northwest" },
  { pattern: /green valley|inspirada|henderson/i, key: "henderson" },
  { pattern: /southern highlands/i, key: "golf" },
  { pattern: /red rock/i, key: "redRock" },
  { pattern: /downtown summerlin|shopping, dining|retail/i, key: "downtown" },
  { pattern: /guard.?gat|security feature|manned entry|gated liv|gated communit/i, key: "guardGate" },
  { pattern: /pickleball/i, key: "pickleball" },
  { pattern: /bocce|picnic|outdoor recreation/i, key: "bocce" },
  { pattern: /clubhouse/i, key: "clubhouse" },
  { pattern: /fitness|wellness|aquatics|locker/i, key: "fitness" },
  { pattern: /pool|spa|amenit/i, key: "clubhouse" },
  { pattern: /floor plan|kitchen|everything.?s included|interior|quartz|great room/i, key: "kitchen" },
  { pattern: /plan overview|bedroom|garage option/i, key: "living" },
  { pattern: /hoa|fees|landscap|due diligence|carrying cost/i, key: "landscaping" },
  { pattern: /golf/i, key: "golf" },
  { pattern: /condo|high-rise|penthouse/i, key: "condo" },
  { pattern: /sun city|trilogy|solera|del webb|55\+|active adult|lifestyle/i, key: "hero55plus" },
  { pattern: /luxury|estate|macdonald/i, key: "heroLuxury" },
  { pattern: /new construction|investment|investor/i, key: "heroInvestment" },
  { pattern: /summerlin/i, key: "heroCommunity" },
  { pattern: /sell|valuation|worth|listing consultation|seller/i, key: "selling" },
  { pattern: /buy|roadmap|first.?time|pre-approv|tour properties|buyer/i, key: "buying" },
  { pattern: /market|pricing|cma|comparables|demand|insights|report/i, key: "heroSearch" },
  { pattern: /relocat|california|move-up|divorce|probate/i, key: "consultation" },
  { pattern: /contact|get in touch|office hours|schedule an appointment/i, key: "consultation" },
  { pattern: /about dr|hyperlocal representation|why choose/i, key: "consultation" },
  { pattern: /location|nearby landmark|summerlin west|map/i, key: "downtown" },
  { pattern: /downsiz|rightsiz|simplify/i, key: "living" },
  { pattern: /community|neighborhood|at a glance|why buyers|why heritage/i, key: "heroCommunity" },
  { pattern: /homes for sale|listings|search|mls/i, key: "heroSearch" },
  { pattern: /faq|question/i, key: "clubhouse" },
  { pattern: /las vegas/i, key: "heroSearch" },
]

const SKIP_SECTION_IMAGE = /helpful resources|related tools|deep-dive guides|seller tools|work with dr|explore heritage|compare summerlin 55|related market/i;

function matchHeading(heading: string): SiteImage | null {
  const text = heading.trim();
  if (!text) return null;
  for (const rule of HEADING_RULES) {
    if (rule.pattern.test(text)) {
      return SITE_IMAGES[rule.key];
    }
  }
  return null;
}

/** Hero photograph for a page H1. Falls back to the Heritage Stonebridge hero. */
export function getHeroImageForHeading(heading: string): SiteImage {
  return matchHeading(heading) ?? BEST_HERO_IMAGE;
}

/** Section photograph for an H2/H3. Returns null for navigation-only headings. */
export function getSectionImageForHeading(heading: string): SiteImage | null {
  if (SKIP_SECTION_IMAGE.test(heading)) return null;
  return matchHeading(heading) ?? SITE_IMAGES.heroCommunity;
}

export function getCardImageForHeading(heading: string): SiteImage {
  return matchHeading(heading) ?? SITE_IMAGES.heroCommunity;
}

export function getNeighborhoodImage(name: string): SiteImage {
  return matchHeading(name) ?? SITE_IMAGES.heroCommunity;
}
