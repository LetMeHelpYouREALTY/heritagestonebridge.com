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
  collectionNames: ["Cromwell", "Stirling", "Evander"] as const,
  plansByCollection: {
    Cromwell: ["Carson", "Claremont", "Connery"],
    Stirling: ["Sawyer", "Sloan", "Sidney"],
    Evander: ["Ethan", "Elizabeth", "Everly"],
  } as const,
  floorPlanCount: 9,
  sqFtRange: "1,232 – 2,873",
  bedroomRange: "2 – 4",
  bathroomRange: "2 – 3",
  garageRange: "2 – 4 car (select plans include RV garage)",
  priceRange:
    "Resale and new-build homes commonly list from the $500s to $850,000+ depending on plan, elevation, and upgrades (verify on current MLS).",
  hoaRange:
    "Monthly HOA typically falls in the low-to-mid $100s–$200s range; confirm current assessments with the HOA or listing agent.",
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
  {
    question:
      "Is Heritage at Stonebridge the same as Lennar Sandpiper or Mockingbird?",
    answer:
      "No. Sandpiper and Mockingbird are other Lennar collections in Summerlin West — not this 55+ community. Heritage at Stonebridge plans are Cromwell (Carson, Claremont, Connery), Stirling (Sawyer, Sloan, Sidney), and Evander (Ethan, Elizabeth, Everly). Select Evander plans include an RV garage. Heritage is zip 89138.",
  },
  {
    question:
      "Is Heritage at Stonebridge the same as Stonebridge Park or Heritage at Black Mountain Ranch?",
    answer:
      "No. Stonebridge is a Summerlin village; Heritage at Stonebridge is Lennar's 55+ guard-gated neighborhood inside it (89138). Heritage at Black Mountain Ranch is a different community. Addresses in zip 89135, including Stardust Drive, are not Heritage at Stonebridge.",
  },
] as const;
