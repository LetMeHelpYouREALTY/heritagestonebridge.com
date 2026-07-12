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

export const fiftyFiveAndOverSummerlinPage: HeritagePageContent = {
  slug: "/55-and-over-communities-summerlin-las-vegas",
  metadata: {
    title: baseTitle("55 and Over Communities Summerlin Las Vegas"),
    description:
      "55 and over communities in Summerlin and Las Vegas — Heritage at Stonebridge guard-gated Lennar living, Sun City, Trilogy, and Summerlin West 55+ tours with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({
    name: "55+ Summerlin Las Vegas",
    url: "/55-and-over-communities-summerlin-las-vegas",
  }),
  badge: "Summerlin 55+ Specialist",
  h1: "55 and Over Communities in Summerlin & Las Vegas",
  subtitle:
    "Age-qualified neighborhoods from Heritage at Stonebridge in 89138 to Sun City and Trilogy — compared for buyers relocating to Las Vegas.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "grid",
      heading: "Summerlin 55+ Communities",
      cards: [
        {
          title: "Heritage at Stonebridge",
          items: [
            "Lennar guard-gated — 421 homes in Summerlin West",
            "Zip 89138 near Downtown Summerlin & Red Rock",
            "Pickleball, fitness, lap pool — no mandatory golf HOA",
          ],
        },
        {
          title: "Sun City Summerlin",
          items: [
            "7,000+ homes — valley's largest 55+ community",
            "Three golf courses and deep social calendar",
            "Established resale inventory across decades",
          ],
        },
        {
          title: "Trilogy Summerlin",
          items: [
            "Shea Homes resort-scale amenities",
            "Spa, culinary studio, extensive programming",
            "Upper Summerlin West price positioning",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Choosing Your Summerlin 55+ Home",
      paragraphs: [
        `Buyers searching "55 and over communities Summerlin Las Vegas" usually want three things: lock-and-leave maintenance, neighborly amenities, and a Summerlin address. ${HERITAGE_COMMUNITY.name} delivers Lennar smart-home finishes and staff guard-gating in a boutique ${HERITAGE_COMMUNITY.homeCount}-home footprint — minutes from Downtown Summerlin.`,
        "Dr. Jan Duffy schedules same-day tours across Heritage, Sun City, and Trilogy so you compare guard-gate flow, clubhouse energy, and HOA carrying costs before you write an offer.",
      ],
    },
    {
      type: "links",
      heading: "Summerlin 55+ Resources",
      links: [
        { href: "/community", label: "Heritage at Stonebridge" },
        { href: "/55-plus-communities", label: "All Las Vegas 55+ Communities" },
        { href: "/summerlin-55-plus", label: "Summerlin 55+ Guide" },
        { href: "/homes-for-sale", label: "Heritage Homes for Sale" },
        { href: "/contact", label: "Schedule Tours" },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the best 55 and over community in Summerlin?",
      answer:
        "It depends on priorities. Heritage at Stonebridge fits buyers wanting newer Lennar construction and staff guard-gating. Sun City Summerlin fits buyers wanting on-site golf and the deepest club calendar. Trilogy fits buyers wanting resort-scale Shea amenities.",
    },
    {
      question: "Where is Heritage at Stonebridge in Summerlin?",
      answer:
        "Heritage at Stonebridge is in Summerlin West, zip code 89138 — near Downtown Summerlin shopping, medical services, and Red Rock Canyon access.",
    },
  ],
};

export const hendersonRealEstatePage: HeritagePageContent = {
  slug: "/henderson-real-estate",
  metadata: {
    title: baseTitle("Henderson Real Estate & Summerlin 55+ Comparison"),
    description:
      "Henderson NV real estate guide for buyers comparing Green Valley, Anthem, and MacDonald Highlands to Heritage at Stonebridge in Summerlin West 89138.",
  },
  breadcrumbs: crumbs({ name: "Henderson Real Estate", url: "/henderson-real-estate" }),
  badge: "Henderson vs Summerlin",
  h1: "Henderson Real Estate Guide",
  subtitle:
    "Many 55+ buyers start in Henderson — then tour Heritage at Stonebridge for guard-gated Lennar living minutes from Downtown Summerlin.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "Why Henderson Buyers Tour Summerlin 55+",
      paragraphs: [
        "Henderson offers master-planned communities like Green Valley, Inspirada, and Anthem with strong resale depth. Buyers relocating from California often search Henderson first for lower property tax and healthcare access.",
        `${HERITAGE_COMMUNITY.name} in Summerlin West (${HERITAGE_COMMUNITY.postalCode}) appeals when Henderson shoppers want a newer Lennar build, staff guard-gating, and pickleball-forward amenities without a mandatory golf HOA — about 25 minutes from central Henderson.`,
      ],
    },
    {
      type: "grid",
      heading: "Henderson Areas Buyers Compare",
      cards: [
        {
          title: "Green Valley & Green Valley Ranch",
          items: [
            "Established resale inventory across decades",
            "Close to Henderson Hospital and dining corridors",
            "Mix of age-qualified and all-ages neighborhoods",
          ],
        },
        {
          title: "Anthem & Inspirada",
          items: [
            "Newer construction and builder incentives",
            "Henderson zip codes with strong schools by name",
            "Commute to Strip and airport from southeast valley",
          ],
        },
        {
          title: "Heritage at Stonebridge (Summerlin)",
          items: [
            "421-home Lennar 55+ guard-gated community",
            "89138 — Downtown Summerlin & Red Rock access",
            "Single-family plans from 1,232–2,873 sq ft",
          ],
        },
      ],
    },
    {
      type: "links",
      heading: "Compare Henderson & Summerlin",
      links: [
        { href: "/neighborhoods/henderson", label: "Henderson Neighborhood Guide" },
        { href: "/summerlin-homes", label: "Summerlin Homes" },
        { href: "/55-plus-communities-las-vegas", label: "Las Vegas 55+ Communities" },
        { href: "/homes-for-sale", label: "Heritage Listings" },
        { href: "/contact", label: "Schedule Tours" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Heritage at Stonebridge in Henderson?",
      answer:
        "No. Heritage at Stonebridge is in Summerlin West, Las Vegas zip code 89138. Many Henderson buyers tour it when comparing 55+ options across the valley.",
    },
    {
      question: "How far is Heritage from Henderson?",
      answer:
        "Drive time from central Henderson to Heritage at Stonebridge is typically 20–30 minutes depending on traffic — similar to commuting between Henderson and the Strip.",
    },
  ],
};

export const communityGuidesPage: HeritagePageContent = {
  slug: "/community-guides",
  metadata: {
    title: baseTitle("Las Vegas 55+ Community Guides"),
    description:
      "Community guides for Heritage at Stonebridge, Sun City Summerlin, Trilogy, and Las Vegas 55+ neighborhoods — floor plans, HOA, amenities, and tours.",
  },
  breadcrumbs: crumbs({ name: "Community Guides", url: "/community-guides" }),
  h1: "Las Vegas 55+ Community Guides",
  subtitle:
    "Deep-dive guides for active adult buyers — starting with Heritage at Stonebridge and expanding across Summerlin West.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "checklist",
      heading: "What's in Each Community Guide",
      items: [
        {
          title: "Age qualification & guard-gate rules",
          description:
            "HUD 55+ requirements, visitor policies, and rental restrictions before you write an offer.",
        },
        {
          title: "Floor plans & price bands",
          description:
            "Plan sizes, garage options, and recent MLS price context — not marketing brochures alone.",
        },
        {
          title: "HOA & monthly carrying costs",
          description:
            "Assessments, what's included, and how they compare to golf-course communities.",
        },
        {
          title: "Amenity walk-through",
          description:
            "Clubhouse, fitness, pools, pickleball, and social programming you'll use weekly.",
        },
      ],
    },
    {
      type: "links",
      heading: "Heritage & Summerlin 55+ Guides",
      links: [
        { href: "/community", label: "Heritage at Stonebridge Overview" },
        { href: "/floor-plans", label: "Heritage Floor Plans" },
        { href: "/summerlin-55-plus", label: "Summerlin 55+ Guide" },
        { href: "/55-plus-communities", label: "All 55+ Communities" },
        { href: "/vs-sun-city-summerlin", label: "Heritage vs Sun City" },
        { href: "/vs-trilogy-summerlin", label: "Heritage vs Trilogy" },
      ],
    },
    {
      type: "prose",
      heading: "Start With Heritage at Stonebridge",
      paragraphs: [
        `With only ${HERITAGE_COMMUNITY.homeCount} homes, ${HERITAGE_COMMUNITY.name} is the newest guard-gated Lennar 55+ address in Summerlin West. Our community guide covers ${HERITAGE_COMMUNITY.floorPlanCount} floor plans, ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq ft clubhouse amenities, and resale dynamics in zip ${HERITAGE_COMMUNITY.postalCode}.`,
        "Dr. Jan Duffy publishes updated guides as MLS inventory shifts — request the latest Heritage buyer packet before touring.",
      ],
    },
  ],
};

export const gatedCommunitiesPage: HeritagePageContent = {
  slug: "/gated-communities",
  metadata: {
    title: baseTitle("Guard-Gated 55+ Communities Las Vegas"),
    description:
      "Guard-gated 55+ communities in Las Vegas and Summerlin — Heritage at Stonebridge staff guard-gate, amenities, and how gated living compares to keypad entry.",
  },
  breadcrumbs: crumbs({ name: "Gated Communities", url: "/gated-communities" }),
  badge: "Staff Guard-Gated",
  h1: "Guard-Gated 55+ Communities in Las Vegas",
  subtitle:
    "Staff guard-gating changes how you receive guests, deliveries, and peace of mind — Heritage at Stonebridge is Summerlin West's newest Lennar example.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "comparison",
      heading: "Guard-Gated vs. Keypad Entry",
      otherLabel: "Typical Keypad / Automated Gate",
      rows: [
        {
          label: "Visitor verification",
          heritage: "Staff verifies guests at guard house",
          other: "Call box or resident app approval",
        },
        {
          label: "Delivery access",
          heritage: "Documented vendor and delivery protocols",
          other: "Varies — often shared gate codes",
        },
        {
          label: "After-hours security",
          heritage: "24/7 staffed gate with camera coverage",
          other: "Often unmanned overnight",
        },
        {
          label: "Resale perception",
          heritage: "Premium for verified entry in 55+ segment",
          other: "Depends on neighborhood age and HOA",
        },
      ],
    },
    {
      type: "prose",
      heading: "Heritage at Stonebridge Guard-Gate Experience",
      paragraphs: [
        `${HERITAGE_COMMUNITY.name} uses ${HERITAGE_COMMUNITY.security.toLowerCase()}. Residents get predictable visitor flow — important for out-of-state owners who rely on lock-and-leave travel.`,
        "Pair a guard-gate tour with our dedicated guard-gated living guide for HOA rules, amenity access, and how Heritage compares to larger Summerlin 55+ neighborhoods.",
      ],
    },
    {
      type: "links",
      heading: "Explore Gated 55+ Living",
      links: [
        { href: "/guard-gated-living", label: "Guard-Gated Living Guide" },
        { href: "/community", label: "Heritage Community" },
        { href: "/amenities", label: "Heritage Amenities" },
        { href: "/homes-for-sale", label: "Current Listings" },
      ],
    },
  ],
};

export const communityComparisonPage: HeritagePageContent = {
  slug: "/community-comparison",
  metadata: {
    title: baseTitle("55+ Community Comparison Las Vegas"),
    description:
      "Side-by-side comparison of Las Vegas 55+ communities — Heritage at Stonebridge vs Sun City Summerlin, Trilogy, Solera, and Del Webb options.",
  },
  breadcrumbs: crumbs({ name: "Community Comparison", url: "/community-comparison" }),
  h1: "Las Vegas 55+ Community Comparison",
  subtitle:
    "Compare guard-gating, golf HOA, build year, and inventory depth before you narrow to two neighborhoods for in-person tours.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "comparison",
      heading: "Heritage vs. Large-Scale 55+ Communities",
      otherLabel: "Sun City Summerlin (Example)",
      rows: [
        {
          label: "Home count",
          heritage: "421 homes — limited supply",
          other: "7,000+ homes — deep resale pool",
        },
        {
          label: "Builder / era",
          heritage: "Lennar 2021–2025 smart-home builds",
          other: "Multiple builders across decades",
        },
        {
          label: "Golf HOA",
          heritage: "No mandatory golf membership",
          other: "Three on-site golf courses",
        },
        {
          label: "Security",
          heritage: "Staff guard-gated entry",
          other: "Guard-gated with established gate culture",
        },
        {
          label: "Pickleball focus",
          heritage: "Six lighted pickleball courts",
          other: "Extensive courts across villages",
        },
      ],
    },
    {
      type: "links",
      heading: "Detailed Comparison Pages",
      links: [
        { href: "/vs-sun-city-summerlin", label: "Heritage vs Sun City Summerlin" },
        { href: "/vs-trilogy-summerlin", label: "Heritage vs Trilogy Summerlin" },
        { href: "/55-plus-communities/heritage-stonebridge", label: "Heritage Profile" },
        { href: "/55-plus-communities/sun-city-summerlin", label: "Sun City Profile" },
        { href: "/55-plus-communities/trilogy-summerlin", label: "Trilogy Profile" },
        { href: "/best-55-plus-communities-las-vegas", label: "Best 55+ Rankings" },
      ],
    },
    {
      type: "prose",
      heading: "Tour Two Communities Same Day",
      paragraphs: [
        "Spreadsheet comparisons only go so far. Dr. Jan Duffy schedules Heritage at Stonebridge plus one competing Summerlin 55+ community in a single appointment block — so you feel gate flow, clubhouse energy, and floor-plan fit back-to-back.",
      ],
    },
  ],
  faqs: HERITAGE_FAQS.slice(0, 2),
};

export const luxuryLivingGuidePage: HeritagePageContent = {
  slug: "/luxury-living-guide",
  metadata: {
    title: baseTitle("Luxury 55+ Living Guide Summerlin"),
    description:
      "Luxury 55+ living in Summerlin West — Heritage at Stonebridge Lennar collections, guard-gated amenities, and how upscale active adult compares across Las Vegas.",
  },
  breadcrumbs: crumbs({ name: "Luxury Living Guide", url: "/luxury-living-guide" }),
  badge: "Upscale Active Adult",
  h1: "Luxury 55+ Living in Summerlin",
  subtitle:
    "Upscale active adult living is about plan size, finish level, and amenity access — not just a price tag above valley median.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "stats",
      heading: "Heritage Luxury Positioning",
      stats: [
        { value: HERITAGE_COMMUNITY.sqFtRange.split("–")[1]?.trim() ?? "2,873", label: "Max Sq Ft Plans" },
        { value: "4-Car", label: "Garage Options" },
        { value: "RV", label: "Garage Plans Available" },
        { value: HERITAGE_COMMUNITY.priceRange.split("to")[1]?.trim() ?? "$850K+", label: "Upper Price Band" },
      ],
    },
    {
      type: "prose",
      heading: "What Luxury 55+ Buyers Expect",
      paragraphs: [
        "Luxury active adult buyers want single-story or main-floor-primary layouts, quartz and stainless Lennar finishes, smart-home automation, and club amenities they will use weekly — not unused golf memberships.",
        `${HERITAGE_COMMUNITY.name} delivers guard-gated privacy, ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq ft clubhouse programming, and Summerlin West address at ${HERITAGE_COMMUNITY.priceRange} — verify live MLS for your target plan.`,
      ],
    },
    {
      type: "links",
      heading: "Luxury Buyer Resources",
      links: [
        { href: "/floor-plans", label: "Heritage Floor Plans" },
        { href: "/amenities", label: "Clubhouse & Amenities" },
        { href: "/hoa-fees", label: "HOA & Carrying Costs" },
        { href: "/buyers/luxury-homes-las-vegas", label: "Luxury Homes Las Vegas" },
        { href: "/home-valuation", label: "Home Valuation" },
      ],
    },
  ],
};

export const neighborhoodInsightsPage: HeritagePageContent = {
  slug: "/neighborhood-insights",
  metadata: {
    title: baseTitle("Summerlin Neighborhood Insights 89138"),
    description:
      "Neighborhood insights for Heritage at Stonebridge and Summerlin West 89138 — commute times, amenities, resale trends, and 55+ buyer demand.",
  },
  breadcrumbs: crumbs({ name: "Neighborhood Insights", url: "/neighborhood-insights" }),
  h1: "Summerlin West Neighborhood Insights",
  subtitle:
    "Hyperlocal data for zip 89138 — where Heritage at Stonebridge sits in the Summerlin West resale and 55+ demand picture.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "89138 at a Glance",
      paragraphs: [
        "Summerlin West zip 89138 combines Red Rock Canyon access, Downtown Summerlin retail, and the valley's newest guard-gated 55+ addresses. Limited new supply supports pricing resilience compared to sprawling all-ages subdivisions.",
        `${HERITAGE_COMMUNITY.name} anchors 55+ demand in this pocket — ${HERITAGE_COMMUNITY.homeCount} homes total means every resale and new-build closing matters for neighborhood comps.`,
      ],
    },
    {
      type: "checklist",
      heading: "Insights We Track for Buyers",
      items: [
        {
          title: "Median days on market by plan",
          description:
            "How fast Heritage floor plans sell vs. nearby Summerlin 55+ inventory.",
        },
        {
          title: "New vs. resale premium",
          description:
            "Lennar remaining inventory vs. owner-resale pricing spreads.",
        },
        {
          title: "Relocation seasonality",
          description:
            "California and Pacific Northwest buyer surges by quarter.",
        },
        {
          title: "Amenity utilization trends",
          description:
            "Pickleball court demand and clubhouse programming shifts post-2024.",
        },
      ],
    },
    {
      type: "links",
      heading: "Deeper Local Data",
      links: [
        { href: "/market-analysis", label: "Custom Market Analysis" },
        { href: "/market-reports", label: "Market Reports" },
        { href: "/location", label: "Heritage Location" },
        { href: "/neighborhoods/summerlin", label: "Summerlin Neighborhood" },
        { href: "/red-rock-canyon-communities", label: "Red Rock Canyon Area" },
      ],
    },
  ],
};

export const firstTimeBuyersPage: HeritagePageContent = {
  slug: "/first-time-buyers",
  metadata: {
    title: baseTitle("First-Time 55+ Home Buyers Las Vegas"),
    description:
      "First-time home buyer guide for Las Vegas 55+ and active adult communities — financing, downsizing, and touring Heritage at Stonebridge in Summerlin 89138.",
  },
  breadcrumbs: crumbs({ name: "First-Time Buyers", url: "/first-time-buyers" }),
  badge: "55+ First Purchase",
  h1: "First-Time Home Buyers in Las Vegas",
  subtitle:
    "Buying your first home at 55+ is different — equity, timing, and community fit matter more than starter-home checklists.",
  lastUpdated: "July 2026",
  sections: [
    {
      type: "prose",
      heading: "First-Time Buying After 55",
      paragraphs: [
        "Many Heritage at Stonebridge buyers are first-time Las Vegas owners — relocating from out of state with sale proceeds from a longtime primary residence. The process emphasizes community selection, HOA literacy, and lock-and-leave readiness rather than maximum leverage.",
        "Dr. Jan Duffy walks buyers through age-qualified rules, guard-gate policies, and Lennar plan differences before financing — so you tour the right neighborhoods first.",
      ],
    },
    {
      type: "checklist",
      heading: "First-Time Buyer Steps",
      items: [
        {
          title: "Get pre-approved with 55+ timeline",
          description:
            "Align loan approval with your out-of-state home sale or retirement date.",
        },
        {
          title: "Tour two 55+ communities minimum",
          description:
            "Compare Heritage, Sun City, or Trilogy in one day to feel amenity differences.",
        },
        {
          title: "Review HOA & age rules in writing",
          description:
            "Understand guest policies, rental restrictions, and assessment history.",
        },
        {
          title: "Plan a post-close lock-and-leave test",
          description:
            "Confirm travel and seasonal absence workflows with guard-gate staff.",
        },
      ],
    },
    {
      type: "links",
      heading: "Buyer Resources",
      links: [
        { href: "/buying-guide", label: "Heritage Buying Guide" },
        { href: "/downsizing", label: "Downsizing Guide" },
        { href: "/buyers/first-time-buyers", label: "Full First-Time Buyer Guide" },
        { href: "/homes-for-sale", label: "Search Listings" },
        { href: "/contact", label: "Talk to Dr. Duffy" },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I use FHA or VA financing at Heritage at Stonebridge?",
      answer:
        "Financing depends on lender, plan, and current guidelines — many 55+ resale purchases use conventional loans. Get pre-approved and share your timeline before touring so we match you to eligible inventory.",
    },
    {
      question: "Do I have to sell my current home before buying in Las Vegas?",
      answer:
        "Not always. Bridge financing and contingent offers are common for relocators. Dr. Jan Duffy coordinates timing with your out-of-state agent when needed.",
    },
  ],
};

/** All GSC landing pages — used for sitemap and route registry */
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
  fiftyFiveAndOverSummerlinPage,
  hendersonRealEstatePage,
  communityGuidesPage,
  gatedCommunitiesPage,
  communityComparisonPage,
  luxuryLivingGuidePage,
  neighborhoodInsightsPage,
  firstTimeBuyersPage,
];
