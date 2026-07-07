import type { HeritagePageContent } from "./types";
import { HERITAGE_COMMUNITY, HERITAGE_FAQS } from "./data";

const baseTitle = (page: string) =>
  `${page} | Heritage at Stonebridge Summerlin | Dr. Jan Duffy`;

function crumbs(...items: { name: string; url: string }[]) {
  return [{ name: "Home", url: "/" }, ...items];
}

const lasVegas55Links = [
  { href: "/community", label: "Heritage at Stonebridge Overview" },
  { href: "/summerlin-55-plus", label: "Summerlin 55+ Guide" },
  { href: "/vs-sun-city-summerlin", label: "vs Sun City Summerlin" },
  { href: "/vs-trilogy-summerlin", label: "vs Trilogy Summerlin" },
  { href: "/homes-for-sale", label: "Heritage Homes for Sale" },
  { href: "/contact", label: "Schedule a Tour" },
];

export const marketAnalysisPage: HeritagePageContent = {
  slug: "/market-analysis",
  metadata: {
    title: baseTitle("Heritage Stonebridge Market Analysis"),
    description:
      "Custom market analysis for Heritage at Stonebridge buyers and sellers in Summerlin 89138. Comparable sales, pricing trends, and CMA from Dr. Jan Duffy, BHHS.",
  },
  breadcrumbs: crumbs({ name: "Market Analysis", url: "/market-analysis" }),
  badge: "89138 Hyperlocal CMA",
  h1: "Heritage at Stonebridge Market Analysis",
  subtitle:
    "Neighborhood-level pricing, days on market, and resale comps — not valley-wide averages that mislead 55+ buyers.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "Why a Heritage-Specific Analysis Matters",
      paragraphs: [
        `With only ${HERITAGE_COMMUNITY.homeCount} homes in ${HERITAGE_COMMUNITY.name}, broad Las Vegas MLS reports rarely capture guard-gated Lennar resale dynamics in zip ${HERITAGE_COMMUNITY.postalCode}.`,
        "Dr. Jan Duffy prepares buyer and seller analyses using recent Heritage closings, active listings, and competing Summerlin 55+ inventory — so your offer or list price reflects what buyers actually pay at the gate.",
      ],
    },
    {
      type: "checklist",
      heading: "What's Included in a Market Analysis",
      items: [
        {
          title: "Recent Heritage comparables",
          description:
            "Closed sales by floor plan, elevation, and backing within the community and nearby 55+ neighborhoods.",
        },
        {
          title: "Active competition snapshot",
          description:
            "How current Heritage listings stack up against Sun City, Trilogy, and new Summerlin West resales.",
        },
        {
          title: "Days on market & absorption",
          description:
            "Pace of sales for single-story and pickleball-oriented plans buyers request most.",
        },
        {
          title: "HOA-adjusted carrying cost view",
          description:
            "Monthly ownership picture so out-of-state buyers compare apples to apples.",
        },
      ],
    },
    {
      type: "links",
      heading: "Related Market Resources",
      links: [
        { href: "/market-update", label: "Summerlin 55+ Market Update" },
        { href: "/market-reports", label: "Quarterly Market Reports" },
        { href: "/home-valuation", label: "Request Home Valuation" },
        { href: "/selling-guide", label: "Selling Guide" },
      ],
    },
  ],
  faqs: [
    {
      question: "How often should I refresh a Heritage market analysis?",
      answer:
        "Before any offer or listing decision — and quarterly if you are monitoring equity from out of state. Summerlin 55+ inventory can shift quickly in peak relocation seasons.",
    },
    {
      question: "Is this the same as a Zillow Zestimate?",
      answer:
        "No. A CMA uses live MLS sold data, plan-specific premiums, and guard-gated comparables Zillow cannot see inside the community.",
    },
  ],
};

export const marketReportsPage: HeritagePageContent = {
  slug: "/market-reports",
  metadata: {
    title: baseTitle("Summerlin 55+ Market Reports"),
    description:
      "Quarterly market reports for Heritage at Stonebridge and Summerlin West 55+ communities. Median prices, inventory, and buyer demand in 89138.",
  },
  breadcrumbs: crumbs({ name: "Market Reports", url: "/market-reports" }),
  h1: "Heritage Stonebridge Market Reports",
  subtitle:
    "Periodic snapshots of Summerlin West active adult real estate — with Heritage at Stonebridge as the anchor community.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "Summerlin 55+ Market at a Glance",
      paragraphs: [
        "Las Vegas relocation demand continues to favor master-planned Summerlin for healthcare access, outdoor recreation, and guard-gated 55+ options. Heritage at Stonebridge benefits from limited supply — only 421 homes total — which supports pricing resilience compared to larger valley subdivisions.",
        `${HERITAGE_COMMUNITY.priceRange} Figures shift with plan, lot, and season; request the latest MLS-backed report before making timing decisions.`,
      ],
    },
    {
      type: "stats",
      heading: "Heritage Market Context",
      stats: [
        { value: String(HERITAGE_COMMUNITY.homeCount), label: "Total Homes (Fixed Supply)" },
        { value: HERITAGE_COMMUNITY.postalCode, label: "Zip Code" },
        { value: "55+", label: "Age-Restricted" },
        { value: "2021–2025", label: "Lennar Build Years" },
      ],
    },
    {
      type: "links",
      heading: "Deeper Analysis Tools",
      links: [
        { href: "/market-analysis", label: "Custom Market Analysis" },
        { href: "/market-update", label: "Monthly Market Update" },
        { href: "/buying-guide", label: "Buying Guide" },
        { href: "/homes-for-sale", label: "Live Listings" },
      ],
    },
  ],
};

export const fiftyFivePlusCommunitiesLasVegasPage: HeritagePageContent = {
  slug: "/55-plus-communities-las-vegas",
  metadata: {
    title: baseTitle("55+ Communities Las Vegas Guide"),
    description:
      "Las Vegas 55+ communities compared — Heritage at Stonebridge, Sun City, Trilogy, Solera, and more. Guard-gated Lennar living in Summerlin 89138.",
  },
  breadcrumbs: crumbs({
    name: "55+ Communities Las Vegas",
    url: "/55-plus-communities-las-vegas",
  }),
  badge: "Las Vegas Active Adult",
  h1: "55+ Communities in Las Vegas",
  subtitle:
    "From Summerlin guard-gated enclaves to Henderson and North Las Vegas options — how Heritage at Stonebridge fits the valley's active adult map.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "grid",
      heading: "Major Las Vegas 55+ Destinations",
      cards: [
        {
          title: "Summerlin West",
          items: [
            "Heritage at Stonebridge — Lennar, guard-gated, 421 homes",
            "Sun City Summerlin — 7,000+ homes, golf-centric",
            "Trilogy Summerlin — Shea resort-scale amenities",
          ],
        },
        {
          title: "Henderson & Southeast",
          items: [
            "Sun City Anthem — established resale inventory",
            "Solera at Anthem — newer attached and detached plans",
          ],
        },
        {
          title: "North Las Vegas",
          items: [
            "Sun City Aliante — value-oriented 55+",
            "Del Webb Lake Las Vegas — waterfront lifestyle",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Why Buyers Start With Heritage",
      paragraphs: [
        "Heritage at Stonebridge occupies a rare niche: Lennar construction completed through 2025, staff guard-gated security, and a Summerlin West address minutes from Downtown Summerlin and Red Rock Canyon — without mandatory private golf HOA tiers.",
        "Dr. Jan Duffy tours multiple Las Vegas 55+ communities in one day so you compare lifestyle, not just online photos.",
      ],
    },
    {
      type: "links",
      heading: "Explore Las Vegas 55+ Options",
      links: lasVegas55Links,
    },
  ],
  faqs: [...HERITAGE_FAQS.slice(0, 4)],
};

export const activeAdultCommunitiesPage: HeritagePageContent = {
  slug: "/active-adult-communities",
  metadata: {
    title: baseTitle("Active Adult Communities Summerlin"),
    description:
      "Active adult communities near Heritage at Stonebridge — pickleball, fitness, guard-gated security, and lock-and-leave living in Summerlin 89138.",
  },
  breadcrumbs: crumbs({
    name: "Active Adult Communities",
    url: "/active-adult-communities",
  }),
  h1: "Active Adult Communities Near Heritage Stonebridge",
  subtitle:
    "55+ neighborhoods built for fitness, social clubs, and low-maintenance travel — anchored by Heritage's Lennar guard-gated enclave.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "checklist",
      heading: "What Active Adult Buyers Want",
      items: [
        {
          title: "Single-story or main-level living",
          description: `Heritage plans span ${HERITAGE_COMMUNITY.sqFtRange} sq. ft. with ${HERITAGE_COMMUNITY.bedroomRange} bedrooms.`,
        },
        {
          title: "Clubhouse fitness & pickleball",
          description:
            "Six lighted pickleball courts, lap pool, and 8,000 sq. ft. amenity center on site.",
        },
        {
          title: "Security beyond a keypad",
          description: HERITAGE_COMMUNITY.security,
        },
        {
          title: "Summerlin errands without Strip traffic",
          description:
            "Downtown Summerlin shopping, medical, and dining minutes from the gate.",
        },
      ],
    },
    {
      type: "links",
      heading: "Heritage Active Adult Resources",
      links: [
        { href: "/lifestyle", label: "55+ Lifestyle at Heritage" },
        { href: "/amenities", label: "Amenities & Clubhouse" },
        { href: "/active-adult-lifestyle-communities", label: "Lifestyle Communities Guide" },
        { href: "/buying-guide", label: "Buying Guide" },
      ],
    },
  ],
};

export const bestFiftyFivePlusCommunitiesPage: HeritagePageContent = {
  slug: "/best-55-plus-communities-las-vegas",
  metadata: {
    title: baseTitle("Best 55+ Communities Las Vegas"),
    description:
      "Best 55+ communities in Las Vegas for guard-gated security, new construction, and Summerlin location — featuring Heritage at Stonebridge.",
  },
  breadcrumbs: crumbs({
    name: "Best 55+ Communities",
    url: "/best-55-plus-communities-las-vegas",
  }),
  h1: "Best 55+ Communities in Las Vegas",
  subtitle:
    "Ranked by what relocation buyers ask for most: security, amenity fit, HOA value, and resale strength in Summerlin.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "comparison",
      heading: "Top Summerlin 55+ Choices",
      otherLabel: "Sun City Summerlin",
      rows: [
        {
          label: "Best for newer Lennar builds",
          heritage: "Heritage at Stonebridge — 2021–2025",
          other: "Mixed decades of resale stock",
        },
        {
          label: "Best for guard-gated privacy",
          heritage: "Staffed gate, 421-home scale",
          other: "Large gated community, varied access",
        },
        {
          label: "Best for golf-on-site",
          heritage: "Pay-as-you-play nearby; no course HOA",
          other: "Three on-site courses",
        },
        {
          label: "Best for boutique social scale",
          heritage: "Know your neighbors at the clubhouse",
          other: "Deep club calendar, bigger crowds",
        },
      ],
    },
    {
      type: "prose",
      heading: "Heritage at Stonebridge — Top Pick for Many Buyers",
      paragraphs: [
        "Buyers who want Lennar smart-home finishes, guard-gated entry, and a Summerlin West zip code without mega-community sprawl consistently shortlist Heritage at Stonebridge.",
        "Schedule side-by-side tours with Dr. Jan Duffy to validate which 'best' community matches your daily routine — not a generic internet list.",
      ],
    },
    {
      type: "links",
      heading: "Compare & Tour",
      links: lasVegas55Links,
    },
  ],
};

export const northwestLasVegasPage: HeritagePageContent = {
  slug: "/northwest-las-vegas",
  metadata: {
    title: baseTitle("Northwest Las Vegas Real Estate"),
    description:
      "Northwest Las Vegas homes and 55+ communities in Summerlin West. Heritage at Stonebridge guard-gated living in zip 89138 near Red Rock Canyon.",
  },
  breadcrumbs: crumbs({ name: "Northwest Las Vegas", url: "/northwest-las-vegas" }),
  badge: "Summerlin West 89138",
  h1: "Northwest Las Vegas Real Estate",
  subtitle:
    "Summerlin West and the 89138 corridor — where Heritage at Stonebridge pairs mountain views with city convenience.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "grid",
      heading: "Northwest Las Vegas Highlights",
      cards: [
        {
          title: "Summerlin Master Plan",
          items: [
            "Mature shopping, parks, and medical along Charleston & Rampart",
            "Downtown Summerlin retail and dining hub",
            "Strong resale demand for guard-gated 55+ product",
          ],
        },
        {
          title: "Outdoor Access",
          items: [
            "Red Rock Canyon National Conservation Area",
            "TPC Las Vegas and public golf options",
            "Trail systems and desert landscaping",
          ],
        },
        {
          title: "Heritage at Stonebridge",
          items: [
            "Lennar 55+ guard-gated community",
            `${HERITAGE_COMMUNITY.homeCount} homes, ${HERITAGE_COMMUNITY.floorPlanCount} floor plans`,
            "Pickleball, fitness, and lap pool on site",
          ],
        },
      ],
    },
    {
      type: "links",
      heading: "Northwest Las Vegas 55+ Resources",
      links: [
        { href: "/location", label: "Heritage Location & Map" },
        { href: "/red-rock-canyon-communities", label: "Red Rock Canyon Area" },
        { href: "/downtown-summerlin", label: "Near Downtown Summerlin" },
        { href: "/homes-for-sale", label: "Heritage Listings" },
      ],
    },
  ],
};

export const lasVegasRealEstatePage: HeritagePageContent = {
  slug: "/las-vegas-real-estate",
  metadata: {
    title: baseTitle("Las Vegas Real Estate — Summerlin 55+"),
    description:
      "Las Vegas real estate specialist for Heritage at Stonebridge and Summerlin 55+ moves. Buy, sell, and relocate with Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "Las Vegas Real Estate", url: "/las-vegas-real-estate" }),
  h1: "Las Vegas Real Estate — Heritage Stonebridge Focus",
  subtitle:
    "Hyperlocal representation for guard-gated 55+ buyers and sellers — not generic valley billboards.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "Las Vegas 55+ Real Estate Services",
      paragraphs: [
        "Las Vegas attracts retirees and semi-retirees from California, the Midwest, and Pacific Northwest seeking lower carrying costs, sunshine, and master-planned amenities. Heritage at Stonebridge sits in the sweet spot: Summerlin prestige, Lennar new-build quality, and guard-gated security.",
        "Dr. Jan Duffy guides buyers through gate tours, HOA resale packages, and competitive offers — and helps sellers position Lennar homes against Sun City and Trilogy resales with Berkshire Hathaway marketing reach.",
      ],
    },
    {
      type: "checklist",
      heading: "Realtor Services for Heritage Buyers & Sellers",
      items: [
        {
          title: "Private guard-gate tours",
          description: "Walk clubhouse, pools, and model comparable resales in one visit.",
        },
        {
          title: "MLS search & listing alerts",
          description: "RealScout-powered alerts when Heritage inventory hits market.",
        },
        {
          title: "Relocation coordination",
          description: "Virtual tours, temporary housing timing, and California equity moves.",
        },
        {
          title: "Seller CMA & staging guidance",
          description: "Price against 89138 closings — not outdated public estimates.",
        },
      ],
    },
    {
      type: "links",
      heading: "Start Your Las Vegas Move",
      links: [
        { href: "/buying-guide", label: "Buying Guide" },
        { href: "/selling-guide", label: "Selling Guide" },
        { href: "/summerlin-homes", label: "Summerlin Homes" },
        { href: "/contact", label: "Contact Dr. Jan" },
      ],
    },
  ],
};

export const redRockCanyonCommunitiesPage: HeritagePageContent = {
  slug: "/red-rock-canyon-communities",
  metadata: {
    title: baseTitle("Red Rock Canyon Area 55+ Communities"),
    description:
      "55+ communities near Red Rock Canyon and Summerlin West. Heritage at Stonebridge guard-gated homes with mountain views in 89138.",
  },
  breadcrumbs: crumbs({
    name: "Red Rock Canyon Communities",
    url: "/red-rock-canyon-communities",
  }),
  badge: "Red Rock Views",
  h1: "Red Rock Canyon Area Communities",
  subtitle:
    "Live west of the Strip with Red Rock Canyon at your doorstep — Heritage at Stonebridge in Summerlin West 89138.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "West Summerlin & Red Rock Lifestyle",
      paragraphs: [
        "Communities along the western Summerlin edge offer Red Rock Canyon views, desert trails, and cooler evening breezes compared to east-valley subdivisions. Heritage at Stonebridge places 55+ guard-gated living in this corridor — minutes from scenic drives and hiking without sacrificing Downtown Summerlin errands.",
        "Select Heritage lots and elevations capture mountain sightlines; ask Dr. Jan Duffy for current inventory with premium views.",
      ],
    },
    {
      type: "links",
      heading: "Explore West Summerlin 55+",
      links: [
        { href: "/location", label: "Heritage Location" },
        { href: "/northwest-las-vegas", label: "Northwest Las Vegas Guide" },
        { href: "/lifestyle", label: "Active Adult Lifestyle" },
        { href: "/homes-for-sale", label: "View Listings" },
      ],
    },
  ],
};

export const summerlinHomesPage: HeritagePageContent = {
  slug: "/summerlin-homes",
  metadata: {
    title: baseTitle("Summerlin Homes for Sale"),
    description:
      "Summerlin homes for sale with focus on Heritage at Stonebridge 55+ guard-gated listings in 89138. Search MLS with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({ name: "Summerlin Homes", url: "/summerlin-homes" }),
  h1: "Summerlin Homes for Sale",
  subtitle:
    "Search Summerlin West inventory — starting with Heritage at Stonebridge guard-gated 55+ resales and remaining new-build opportunities.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "Summerlin 55+ Inventory",
      paragraphs: [
        `Summerlin offers multiple age-qualified neighborhoods, but Heritage at Stonebridge stands out for Lennar construction (${HERITAGE_COMMUNITY.yearStarted}–${HERITAGE_COMMUNITY.yearCompleted}), staff guard-gating, and a fixed supply of ${HERITAGE_COMMUNITY.homeCount} homes.`,
        `${HERITAGE_COMMUNITY.priceRange} Use live MLS search below or call for off-market whisper inventory and coming-soon listings.`,
      ],
    },
    {
      type: "links",
      heading: "Summerlin Home Buyer Tools",
      links: [
        { href: "/homes-for-sale", label: "Heritage MLS Search" },
        { href: "/floor-plans", label: "Floor Plans" },
        { href: "/market-analysis", label: "Market Analysis" },
        { href: "/buying-guide", label: "Buying Guide" },
      ],
    },
  ],
};

export const activeAdultLifestyleCommunitiesPage: HeritagePageContent = {
  slug: "/active-adult-lifestyle-communities",
  metadata: {
    title: baseTitle("Active Adult Lifestyle Communities"),
    description:
      "Lifestyle-focused 55+ communities in Summerlin — pickleball, travel-friendly lock-and-leave living at Heritage at Stonebridge.",
  },
  breadcrumbs: crumbs({
    name: "Lifestyle Communities",
    url: "/active-adult-lifestyle-communities",
  }),
  h1: "Active Adult Lifestyle Communities",
  subtitle:
    "Fitness, pickleball leagues, and neighborly scale — how Heritage at Stonebridge delivers lifestyle without mega-community sprawl.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "Lifestyle-First 55+ Living",
      paragraphs: [
        "Active adult lifestyle communities prioritize how you spend Tuesday morning — lap pool, pickleball, book club — over square footage alone. Heritage at Stonebridge packs resort amenities into a 421-home guard-gated footprint so you recognize faces at the clubhouse.",
        "When you travel, HOA-maintained landscaping and staffed gate access protect your home — a core reason buyers choose Heritage over non-gated Summerlin streets.",
      ],
    },
    {
      type: "links",
      heading: "Lifestyle Resources",
      links: [
        { href: "/lifestyle", label: "Heritage 55+ Lifestyle" },
        { href: "/amenities", label: "Amenities Tour" },
        { href: "/active-adult-communities", label: "Active Adult Communities" },
        { href: "/guard-gated-living", label: "Guard-Gated Security" },
      ],
    },
  ],
};

export const newFiftyFivePlusCommunitiesPage: HeritagePageContent = {
  slug: "/new-55-plus-communities-las-vegas",
  metadata: {
    title: baseTitle("New 55+ Communities Las Vegas"),
    description:
      "New and newer 55+ communities in Las Vegas — Heritage at Stonebridge Lennar builds 2021–2025 in guard-gated Summerlin West.",
  },
  breadcrumbs: crumbs({
    name: "New 55+ Communities",
    url: "/new-55-plus-communities-las-vegas",
  }),
  badge: "Newer Construction",
  h1: "New 55+ Communities in Las Vegas",
  subtitle:
    "Lennar smart-home finishes and modern open floor plans — Heritage at Stonebridge among the valley's newest guard-gated 55+ options.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "stats",
      heading: "Heritage at Stonebridge — New Build Profile",
      stats: [
        { value: `${HERITAGE_COMMUNITY.yearStarted}–${HERITAGE_COMMUNITY.yearCompleted}`, label: "Build Years" },
        { value: HERITAGE_COMMUNITY.builder, label: "Builder" },
        { value: String(HERITAGE_COMMUNITY.floorPlanCount), label: "Floor Plans" },
        { value: "Guard-Gated", label: "Security" },
      ],
    },
    {
      type: "prose",
      heading: "New vs. Established 55+",
      paragraphs: [
        "Newer 55+ communities offer contemporary energy features, open kitchens, and smart-home automation — while established communities like Sun City Summerlin trade age for deeper social infrastructure and golf.",
        "Heritage buyers get Lennar's Everything's Included package (quartz, stainless, automation) plus Summerlin's newest guard-gated 55+ address. Remaining builder inventory, if any, moves fast — pair with resale tours for full picture.",
      ],
    },
    {
      type: "links",
      heading: "Tour New 55+ Options",
      links: [
        { href: "/floor-plans", label: "Heritage Floor Plans" },
        { href: "/homes-for-sale", label: "Current Listings" },
        { href: "/best-55-plus-communities-las-vegas", label: "Best 55+ Communities" },
        { href: "/contact", label: "Schedule Tour" },
      ],
    },
  ],
};

export const fiftyFivePlusCondosLasVegasPage: HeritagePageContent = {
  slug: "/55-plus-condos-las-vegas",
  metadata: {
    title: baseTitle("55+ Condos Las Vegas vs Heritage Townhomes"),
    description:
      "Las Vegas 55+ condos and attached homes compared to Heritage at Stonebridge single-family guard-gated living in Summerlin 89138.",
  },
  breadcrumbs: crumbs({
    name: "55+ Condos Las Vegas",
    url: "/55-plus-condos-las-vegas",
  }),
  h1: "55+ Condos in Las Vegas",
  subtitle:
    "Considering a condo or attached 55+ home? See how Heritage at Stonebridge single-family plans compare on space, HOA, and guard-gated privacy.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "comparison",
      heading: "Condos vs. Heritage Single-Family",
      otherLabel: "Typical 55+ Condo / Attached",
      rows: [
        {
          label: "Ownership",
          heritage: "Detached single-family with garage",
          other: "Often attached units with shared walls",
        },
        {
          label: "Outdoor space",
          heritage: "Private yard/patio on select plans",
          other: "Balcony or limited patio",
        },
        {
          label: "Security",
          heritage: "Staff guard-gated community entry",
          other: "Varies — often keypad or elevator only",
        },
        {
          label: "RV / golf cart storage",
          heritage: "Select plans with RV garage options",
          other: "Rare in mid-rise condo buildings",
        },
      ],
    },
    {
      type: "prose",
      heading: "When Heritage Beats a Condo",
      paragraphs: [
        "Buyers who need garage storage, guest suites, and guard-gated privacy often outgrow 55+ condo floor plans within a few showings. Heritage at Stonebridge offers single-family living at a mid-Summerlin price band — without high-rise elevator dependence.",
        "Dr. Jan Duffy can tour condo alternatives and Heritage resales the same day so you feel the difference in person.",
      ],
    },
    {
      type: "links",
      heading: "Compare Housing Types",
      links: [
        { href: "/floor-plans", label: "Heritage Floor Plans" },
        { href: "/hoa-fees", label: "HOA & Fees" },
        { href: "/buying-guide", label: "Buying Guide" },
        { href: "/homes-for-sale", label: "Search Listings" },
      ],
    },
  ],
};

/** All GSC 404 landing pages — used for sitemap and route registry */
export const HERITAGE_SEO_LANDING_PAGES: HeritagePageContent[] = [
  marketAnalysisPage,
  marketReportsPage,
  fiftyFivePlusCommunitiesLasVegasPage,
  activeAdultCommunitiesPage,
  bestFiftyFivePlusCommunitiesPage,
  northwestLasVegasPage,
  lasVegasRealEstatePage,
  redRockCanyonCommunitiesPage,
  summerlinHomesPage,
  activeAdultLifestyleCommunitiesPage,
  newFiftyFivePlusCommunitiesPage,
  fiftyFivePlusCondosLasVegasPage,
];
