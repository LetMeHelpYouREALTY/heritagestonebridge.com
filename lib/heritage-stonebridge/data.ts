/**
 * Hyperlocal facts for Heritage at Stonebridge — Summerlin West 55+ community.
 * Sourced from Lennar community materials, local MLS community pages, and 2026 market listings.
 * Verify HOA fees and live pricing against current MLS before publishing claims.
 */
export const HERITAGE_COMMUNITY = {
  name: "Heritage at Stonebridge",
  shortName: "Heritage Stonebridge",
  builder: "Lennar Homes",
  masterPlan: "Summerlin West",
  city: "Las Vegas",
  region: "NV",
  postalCode: "89138",
  ageRequirement:
    "55+ active adult — at least one resident must be 55 or better (HUD 80% rule applies community-wide).",
  security: "Staff guard-gated entry with visitor verification",
  yearStarted: 2021,
  yearCompleted: 2025,
  homeCount: 421,
  collections: 3,
  floorPlanCount: 9,
  sqFtRange: "1,232 – 2,873",
  bedroomRange: "2 – 4",
  bathroomRange: "2 – 3",
  garageRange: "2 – 4 car (select plans include RV garage)",
  priceRange:
    "Resale and new-build homes commonly list from the $500s to $850,000+ depending on plan, elevation, and upgrades (verify on current MLS).",
  hoaRange:
    "Recent Summerlin West resales display about $410–$419 per month combined (Heritage association plus Summerlin master). Confirm the current schedule in the resale package — amounts vary by listing date.",
  clubhouseSqFt: 8000,
  amenities: [
    "8,000 sq. ft. clubhouse with lounge, fireplace, and showcase kitchen",
    "Fitness center with men's and women's locker rooms",
    "Resort-style pool, spa, and heated outdoor lap pool",
    "Six lighted pickleball courts and three bocce ball courts",
    "Walking trails, picnic area, and outdoor firepit terrace",
    "Lennar Everything's Included features: quartz counters, stainless appliances, smart-home automation",
  ],
  nearby: [
    "Downtown Summerlin shopping, dining, and entertainment",
    "Red Rock Canyon National Conservation Area",
    "TPC Las Vegas and pay-as-you-play golf options",
    "Summerlin hospitals, services, and Strip access",
  ],
  geo: {
    latitude: 36.1912,
    longitude: -115.3124,
  },
} as const;

export const HERITAGE_COLLECTIONS = [
  {
    slug: "cromwell",
    name: "Cromwell",
    href: "/floor-plans/cromwell",
    sqFtRange: "1,232 – 1,422",
    summary:
      "Entry single-story 2-bed / 2-bath plans with two-car garages and private side yards.",
    plans: [
      {
        name: "Carson",
        sqFt: "about 1,232–1,237 (sources differ — verify on the plan sheet)",
        beds: "2",
        baths: "2",
        garage: "2-car",
      },
      {
        name: "Claremont",
        sqFt: "1,237",
        beds: "2",
        baths: "2",
        garage: "2-car",
      },
      {
        name: "Connery",
        sqFt: "1,422",
        beds: "2",
        baths: "2",
        garage: "2-car",
      },
    ],
  },
  {
    slug: "stirling",
    name: "Stirling",
    href: "/floor-plans/stirling",
    sqFtRange: "1,747 – 2,236",
    summary:
      "Mid-size single-story plans with owner suites, walk-in closets, and two-car garages.",
    plans: [
      {
        name: "Sawyer",
        sqFt: "1,747",
        beds: "2",
        baths: "2",
        garage: "2-car",
      },
      {
        name: "Sidney",
        sqFt: "1,953",
        beds: "2–3",
        baths: "2",
        garage: "2-car",
      },
      {
        name: "Sloan",
        sqFt: "2,236",
        beds: "2–3",
        baths: "2",
        garage: "2-car",
      },
    ],
  },
  {
    slug: "evander",
    name: "Evander",
    href: "/floor-plans/evander",
    sqFtRange: "2,515 – 2,873",
    summary:
      "Largest single-story plans with three- to four-car garages; Everly adds a Next Gen suite.",
    plans: [
      {
        name: "Ethan",
        sqFt: "2,515",
        beds: "2–3",
        baths: "2.5–3",
        garage: "4-bay tandem",
      },
      {
        name: "Elizabeth",
        sqFt: "2,516",
        beds: "2–3",
        baths: "2.5–3",
        garage: "4-bay RV",
      },
      {
        name: "Everly",
        sqFt: "2,873",
        beds: "3",
        baths: "3",
        garage: "3-car + Next Gen suite",
      },
    ],
  },
] as const;

export const HERITAGE_FAQS = [
  {
    question: "What is Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is a Lennar-built, guard-gated 55+ active adult community in Summerlin West, Las Vegas (89138). The neighborhood includes 421 single-family homes across nine floor plans in three collections.",
  },
  {
    question: "What is the age requirement at Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is an age-restricted 55+ community. At least one resident in the household must be 55 or better, consistent with HUD guidelines for active adult communities.",
  },
  {
    question: "Is Heritage at Stonebridge guard-gated?",
    answer:
      "Yes. Heritage at Stonebridge uses staffed guard-gated access with visitor verification — a step beyond keypad-only gates at many Valley 55+ neighborhoods.",
  },
  {
    question: "What amenities does Heritage at Stonebridge offer?",
    answer:
      "Residents enjoy an 8,000 sq. ft. clubhouse, fitness center, resort-style pool and spa, heated lap pool, pickleball and bocce courts, walking trails, picnic areas, and organized social activities.",
  },
  {
    question: "How much do homes cost in Heritage at Stonebridge?",
    answer:
      "Pricing varies by plan, elevation, and resale vs. new inventory. Recent Summerlin 55+ market activity commonly places Heritage listings from the $500s to $850,000+. Request a current MLS snapshot for today's numbers.",
  },
  {
    question: "Who helps buyers and sellers in Heritage at Stonebridge?",
    answer:
      "Dr. Jan Duffy, REALTOR® (License S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties, specializes in Heritage at Stonebridge and Summerlin 55+ moves. Call (702) 500-1942 or schedule a consultation online.",
  },
] as const;
