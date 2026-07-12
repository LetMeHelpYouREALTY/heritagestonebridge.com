import type { HeritagePageContent } from "./types";
import { HERITAGE_COMMUNITY, HERITAGE_FAQS } from "./data";

const baseTitle = (page: string) =>
  `${page} | Heritage at Stonebridge Summerlin | Dr. Jan Duffy`;

function crumbs(...items: { name: string; url: string }[]) {
  return [{ name: "Home", url: "/" }, ...items];
}

export const communityPage: HeritagePageContent = {
  slug: "/community",
  metadata: {
    title: baseTitle("Heritage at Stonebridge Community Guide"),
    description:
      "Lennar-built guard-gated 55+ community in Summerlin West. 421 homes, nine floor plans, resort amenities. Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "Community", url: "/community" }),
  badge: "Guard-Gated Summerlin 55+",
  h1: "Heritage at Stonebridge Community",
  subtitle:
    "Lennar's boutique 55+ neighborhood in Summerlin West — staff guard-gated security, modern floor plans, and walkable Summerlin living.",
  includeCommunitySchema: true,
  lastUpdated: "June 2026",
  sections: [
    {
      type: "stats",
      heading: "Heritage at Stonebridge at a Glance",
      stats: [
        { value: String(HERITAGE_COMMUNITY.homeCount), label: "Single-Family Homes" },
        { value: HERITAGE_COMMUNITY.postalCode, label: "Zip Code" },
        { value: "55+", label: "Age-Restricted" },
        { value: "Guard-Gated", label: "Staffed Entry" },
      ],
    },
    {
      type: "prose",
      heading: "About the Neighborhood",
      paragraphs: [
        `<strong>${HERITAGE_COMMUNITY.name}</strong> is a Lennar-built active adult community in ${HERITAGE_COMMUNITY.masterPlan}, completed in ${HERITAGE_COMMUNITY.yearCompleted} with ${HERITAGE_COMMUNITY.homeCount} single-family residences across ${HERITAGE_COMMUNITY.floorPlanCount} floor plans in ${HERITAGE_COMMUNITY.collections} collections.`,
        `Homes range from ${HERITAGE_COMMUNITY.sqFtRange} sq. ft. with ${HERITAGE_COMMUNITY.bedroomRange} bedrooms and ${HERITAGE_COMMUNITY.garageRange} garages. Standard finishes include quartz counters, stainless appliances, raised-panel cabinetry, and smart-home automation.`,
        `Unlike sprawling 7,000+ home 55+ developments, Heritage offers a tighter neighborhood scale with genuine guard-gated privacy — while still sitting minutes from Downtown Summerlin, Red Rock Canyon, and championship golf.`,
      ],
    },
    {
      type: "checklist",
      heading: "Why Buyers Choose Heritage",
      items: [
        {
          title: "Staff guard-gated entry",
          description:
            "Visitor verification and manned gates — not just a shared keypad code.",
        },
        {
          title: "Newer Lennar construction",
          description:
            "Built from 2021–2025 with contemporary open plans and included upgrades.",
        },
        {
          title: "Summerlin West address",
          description:
            "89138 location with Red Rock views, retail access, and strong resale demand.",
        },
        {
          title: "Active clubhouse lifestyle",
          description:
            "Fitness, pools, pickleball, bocce, trails, and organized social programming.",
        },
      ],
    },
    {
      type: "links",
      heading: "Explore Heritage Stonebridge",
      links: [
        { href: "/homes-for-sale", label: "Homes for Sale" },
        { href: "/amenities", label: "Amenities" },
        { href: "/floor-plans", label: "Floor Plans" },
        { href: "/hoa-fees", label: "HOA & Fees" },
        { href: "/location", label: "Location & Map" },
        { href: "/guard-gated-living", label: "Guard-Gated Living" },
      ],
    },
  ],
  faqs: [...HERITAGE_FAQS],
};

export const amenitiesPage: HeritagePageContent = {
  slug: "/amenities",
  metadata: {
    title: baseTitle("Amenities & Clubhouse"),
    description:
      "8,000 sq. ft. clubhouse, fitness center, pools, pickleball, bocce, and trails at Heritage at Stonebridge — Summerlin's Lennar 55+ community.",
  },
  breadcrumbs: crumbs({ name: "Amenities", url: "/amenities" }),
  badge: "Resort-Style 55+ Amenities",
  h1: "Heritage at Stonebridge Amenities",
  subtitle: `An ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq. ft. clubhouse anchors fitness, aquatics, and social life in Summerlin West.`,
  lastUpdated: "June 2026",
  sections: [
    {
      type: "grid",
      heading: "Clubhouse & Wellness",
      cards: [
        {
          title: "Clubhouse",
          items: [
            "Lounge with fireplace",
            "Multi-purpose meeting room",
            "Showcase kitchen for events",
            "Terrace with outdoor firepit",
          ],
        },
        {
          title: "Fitness & Aquatics",
          items: [
            "State-of-the-art fitness center",
            "Men's and women's locker rooms",
            "Resort-style pool and spa",
            "Heated outdoor lap pool",
          ],
        },
        {
          title: "Outdoor Recreation",
          items: [
            "Six lighted pickleball courts",
            "Three bocce ball courts",
            "Walking trails",
            "Picnic area and park space",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Low-Maintenance Living",
      paragraphs: [
        "Heritage at Stonebridge is designed for lock-and-leave convenience. Exterior maintenance, common-area landscaping, and amenity upkeep are handled through the HOA — so residents focus on travel, family, and clubhouse activities instead of yard work.",
        "Organized clubs, holiday events, and interest groups keep the community social without the scale of mega-developments where it's easy to get lost in the crowd.",
      ],
    },
  ],
};

export const floorPlansPage: HeritagePageContent = {
  slug: "/floor-plans",
  metadata: {
    title: baseTitle("Floor Plans & Home Collections"),
    description:
      "Nine Lennar floor plans from 1,232–2,873 sq. ft. at Heritage at Stonebridge. 2–4 beds, smart-home features, optional RV garage.",
  },
  breadcrumbs: crumbs({ name: "Floor Plans", url: "/floor-plans" }),
  h1: "Heritage at Stonebridge Floor Plans",
  subtitle: `${HERITAGE_COMMUNITY.floorPlanCount} plans in ${HERITAGE_COMMUNITY.collections} Lennar collections — single-story and two-story options for 55+ buyers.`,
  lastUpdated: "June 2026",
  sections: [
    {
      type: "stats",
      heading: "Plan Overview",
      stats: [
        { value: HERITAGE_COMMUNITY.sqFtRange, label: "Sq. Ft. Range" },
        { value: HERITAGE_COMMUNITY.bedroomRange, label: "Bedrooms" },
        { value: HERITAGE_COMMUNITY.bathroomRange, label: "Bathrooms" },
        { value: HERITAGE_COMMUNITY.garageRange, label: "Garage Options" },
      ],
    },
    {
      type: "prose",
      heading: "Lennar Everything's Included",
      paragraphs: [
        "Every Heritage at Stonebridge home ships with Lennar's Everything's Included package: quartz countertops, stainless steel appliances, raised-panel cabinetry, and smart-home automation — not costly à la carte upgrades.",
        "Collections span attached and detached single-family layouts. Select plans include RV garages for buyers who want golf carts, boats, or extra storage without leaving the community.",
        "For current availability, elevations, and lot premiums, search live MLS inventory or request a curated list from Dr. Jan Duffy.",
      ],
    },
  ],
};

export const hoaFeesPage: HeritagePageContent = {
  slug: "/hoa-fees",
  metadata: {
    title: baseTitle("HOA Fees & Assessments"),
    description:
      "Understand HOA costs at Heritage at Stonebridge — what's covered, how fees compare to larger 55+ communities, and questions to ask before you buy.",
  },
  breadcrumbs: crumbs({ name: "HOA & Fees", url: "/hoa-fees" }),
  h1: "HOA Fees at Heritage at Stonebridge",
  subtitle:
    "Heritage carries a leaner amenity footprint than golf-course mega-communities — often translating to lower carrying costs.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "What HOA Typically Covers",
      paragraphs: [
        `At Heritage at Stonebridge, HOA dues generally fund guard-gate staffing, clubhouse and pool operations, landscape maintenance for common areas, and reserve contributions. ${HERITAGE_COMMUNITY.hoaRange}`,
        "Because Heritage does not subsidize a private 18-hole golf course inside the gates, monthly assessments are often lower than Sun City Summerlin or Trilogy — while still delivering pickleball, fitness, and aquatics.",
      ],
    },
    {
      type: "checklist",
      heading: "Due Diligence Checklist",
      items: [
        {
          title: "Request resale package",
          description: "Review CC&Rs, budget, reserves, and any pending special assessments.",
        },
        {
          title: "Compare total carrying cost",
          description: "Add HOA + insurance + utilities vs. your current home.",
        },
        {
          title: "Confirm age-restriction compliance",
          description: "Verify household meets 55+ occupancy rules before closing.",
        },
        {
          title: "Ask about gate and amenity hours",
          description: "Align expectations for visitors, rentals, and clubhouse access.",
        },
      ],
    },
  ],
};

export const locationPage: HeritagePageContent = {
  slug: "/location",
  metadata: {
    title: baseTitle("Location & Summerlin Map"),
    description:
      "Heritage at Stonebridge in Summerlin West (89138) — near Downtown Summerlin, Red Rock Canyon, TPC Las Vegas, and medical services.",
  },
  breadcrumbs: crumbs({ name: "Location", url: "/location" }),
  h1: "Heritage at Stonebridge Location",
  subtitle: "Northwest Las Vegas in Summerlin West — zip code 89138 with mountain views and city convenience.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "grid",
      heading: "Nearby Landmarks",
      cards: [
        {
          title: "Downtown Summerlin",
          items: ["Shopping, dining, and entertainment minutes from the community gate."],
        },
        {
          title: "Red Rock Canyon",
          items: ["Hiking, scenic drives, and outdoor recreation to the west."],
        },
        {
          title: "Golf & Recreation",
          items: ["TPC Las Vegas and pay-as-you-play courses without mandatory golf HOA."],
        },
      ],
    },
    {
      type: "prose",
      heading: "Summerlin West Advantages",
      paragraphs: [
        "Heritage sits in the mature, amenity-rich portion of Summerlin — not the outer edges of the valley. Residents reach Downtown Summerlin's 125+ shops and restaurants in minutes, Red Rock Canyon for hiking and scenic drives, and multiple pay-as-you-play golf courses without mandatory golf HOA tiers.",
        "Medical campuses, grocers, and professional services cluster along Charleston and Rampart corridors, making day-to-day errands straightforward for full-time and seasonal residents.",
      ],
    },
  ],
};

export const buyingGuidePage: HeritagePageContent = {
  slug: "/buying-guide",
  metadata: {
    title: baseTitle("Buying Guide"),
    description:
      "Step-by-step guide to buying in Heritage at Stonebridge — financing, HOA review, tours, and Summerlin 55+ market timing.",
  },
  breadcrumbs: crumbs({ name: "Buying Guide", url: "/buying-guide" }),
  h1: "Buying in Heritage at Stonebridge",
  subtitle: "A focused playbook for 55+ buyers comparing guard-gated Summerlin communities.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "checklist",
      heading: "Buyer Roadmap",
      items: [
        {
          title: "1. Clarify lifestyle priorities",
          description:
            "Guard-gated privacy vs. mega-clubhouse scale; single-story vs. loft plans; budget inclusive of HOA.",
        },
        {
          title: "2. Review live MLS inventory",
          description:
            "Search Heritage at Stonebridge listings and set alerts for new resales or remaining builder inventory.",
        },
        {
          title: "3. Tour the community",
          description:
            "Walk the clubhouse, pools, and courts — visit at different times to feel gate flow and noise levels.",
        },
        {
          title: "4. Complete HOA due diligence",
          description: "Read governing documents and confirm no surprises in reserves or litigation.",
        },
        {
          title: "5. Make a competitive offer",
          description:
            "Summerlin 55+ homes can move quickly — align financing or cash proof with your offer timeline.",
        },
      ],
    },
    {
      type: "links",
      heading: "Helpful Resources",
      links: [
        { href: "/homes-for-sale", label: "Current Listings" },
        { href: "/vs-sun-city-summerlin", label: "Compare Sun City Summerlin" },
        { href: "/vs-trilogy-summerlin", label: "Compare Trilogy Summerlin" },
        { href: "/downsizing", label: "Downsizing Guide" },
      ],
    },
  ],
};

export const sellingGuidePage: HeritagePageContent = {
  slug: "/selling-guide",
  metadata: {
    title: baseTitle("Selling Guide"),
    description:
      "Sell your Heritage at Stonebridge home with hyperlocal pricing, staging for 55+ buyers, and Berkshire Hathaway marketing reach.",
  },
  breadcrumbs: crumbs({ name: "Selling Guide", url: "/selling-guide" }),
  h1: "Selling in Heritage at Stonebridge",
  subtitle: "Position your Lennar home against newer Summerlin 55+ inventory and established resale competitors.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Heritage Seller Strategy",
      paragraphs: [
        "Buyers comparing Heritage at Stonebridge weigh guard-gated security, Lennar finish level, and proximity to Downtown Summerlin. Your marketing should highlight upgraded smart-home features, pickleball-ready lifestyle, and any premium lots with mountain sightlines.",
        "Dr. Jan Duffy provides pricing analysis against recent 89138 closings, professional photography, and syndication through Berkshire Hathaway HomeServices Nevada Properties — with follow-up handled through Follow Up Boss for consistent communication.",
      ],
    },
    {
      type: "links",
      heading: "Seller Tools",
      links: [
        { href: "/home-valuation", label: "Request Home Valuation" },
        { href: "/market-update", label: "Summerlin Market Update" },
        { href: "/contact", label: "Schedule Listing Consultation" },
      ],
    },
  ],
};

export const downsizingPage: HeritagePageContent = {
  slug: "/downsizing",
  metadata: {
    title: baseTitle("Downsizing to 55+ Living"),
    description:
      "Downsize into Heritage at Stonebridge — rightsizing floor plans, HOA vs. maintenance trade-offs, and timing your Summerlin move.",
  },
  breadcrumbs: crumbs({ name: "Downsizing", url: "/downsizing" }),
  h1: "Downsizing to Heritage at Stonebridge",
  subtitle: "Trade maintenance-heavy homes for guard-gated 55+ living without leaving Summerlin's top amenities.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Rightsizing in Summerlin",
      paragraphs: [
        "Downsizing isn't only about square footage — it's about reducing yard work, simplifying security, and placing social life within walking or golf-cart distance of neighbors who share your season of life.",
        `Heritage floor plans from ${HERITAGE_COMMUNITY.sqFtRange} sq. ft. let couples keep guest suites and hobby space while shedding two-story maintenance or oversized lots.`,
      ],
    },
    {
      type: "checklist",
      heading: "Downsizing Checklist",
      items: [
        {
          title: "Inventory what you will keep",
          description: "Garage and RV options on select plans matter for hobbies and travel gear.",
        },
        {
          title: "Model monthly carrying costs",
          description: "Compare HOA + utilities against your current property tax and upkeep.",
        },
        {
          title: "Plan a staggered move",
          description: "Coordinate listing, temporary housing, and gate access for movers.",
        },
      ],
    },
  ],
};

export const vsSunCityPage: HeritagePageContent = {
  slug: "/vs-sun-city-summerlin",
  metadata: {
    title: baseTitle("vs Sun City Summerlin"),
    description:
      "Heritage at Stonebridge vs Sun City Summerlin — guard-gated Lennar new build vs established mega 55+ with golf. Compare HOA, scale, and lifestyle.",
  },
  breadcrumbs: crumbs({ name: "vs Sun City Summerlin", url: "/vs-sun-city-summerlin" }),
  h1: "Heritage at Stonebridge vs Sun City Summerlin",
  subtitle: "Boutique guard-gated Lennar community vs. Las Vegas's largest 55+ neighborhood.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "comparison",
      heading: "Side-by-Side Comparison",
      otherLabel: "Sun City Summerlin",
      rows: [
        {
          label: "Scale",
          heritage: "~421 homes — intimate neighborhood",
          other: "7,000+ homes — mega community",
        },
        {
          label: "Security",
          heritage: "Staff guard-gated entry",
          other: "Gated with varied access points",
        },
        {
          label: "Housing stock",
          heritage: "Lennar builds 2021–2025",
          other: "Resales from multiple decades",
        },
        {
          label: "Golf",
          heritage: "No mandatory course HOA",
          other: "Three courses — golf-centric lifestyle",
        },
        {
          label: "Clubhouse",
          heritage: "8,000 sq. ft. modern amenity center",
          other: "Multiple large recreation centers",
        },
      ],
    },
    {
      type: "prose",
      heading: "Which Fits You?",
      paragraphs: [
        "Choose Heritage at Stonebridge if you want newer construction, guard-gated privacy, and lower golf-related carrying costs while staying in Summerlin.",
        "Choose Sun City Summerlin if you prioritize the valley's deepest 55+ social calendar, on-site golf, and decades of established clubs and resale inventory.",
      ],
    },
  ],
};

export const vsTrilogyPage: HeritagePageContent = {
  slug: "/vs-trilogy-summerlin",
  metadata: {
    title: baseTitle("vs Trilogy Summerlin"),
    description:
      "Compare Heritage at Stonebridge and Trilogy Summerlin — two Summerlin West 55+ options with different builders, amenities, and price points.",
  },
  breadcrumbs: crumbs({ name: "vs Trilogy Summerlin", url: "/vs-trilogy-summerlin" }),
  h1: "Heritage at Stonebridge vs Trilogy Summerlin",
  subtitle: "Lennar guard-gated living compared to Shea Homes' resort-style Trilogy at the top of Summerlin.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "comparison",
      heading: "Side-by-Side Comparison",
      otherLabel: "Trilogy Summerlin",
      rows: [
        {
          label: "Builder",
          heritage: "Lennar Homes",
          other: "Shea Homes",
        },
        {
          label: "Vibe",
          heritage: "Compact guard-gated enclave",
          other: "Large-scale resort amenities",
        },
        {
          label: "Price positioning",
          heritage: HERITAGE_COMMUNITY.priceRange,
          other: "Typically upper Summerlin 55+ price bands",
        },
        {
          label: "Amenity focus",
          heritage: "Pickleball, fitness, lap pool",
          other: "Spa, culinary studio, extensive programming",
        },
      ],
    },
  ],
};

export const lifestylePage: HeritagePageContent = {
  slug: "/lifestyle",
  metadata: {
    title: baseTitle("55+ Active Adult Lifestyle"),
    description:
      "Pickleball, fitness, social clubs, and lock-and-leave travel lifestyle at Heritage at Stonebridge in Summerlin.",
  },
  breadcrumbs: crumbs({ name: "55+ Lifestyle", url: "/lifestyle" }),
  h1: "Active Adult Lifestyle at Heritage",
  subtitle: "Fitness, pickleball, and neighborly scale — without giving up Summerlin's retail and outdoor access.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Everyday Rhythm",
      paragraphs: [
        "Morning lap pool or fitness classes, afternoon pickleball leagues, and evening terrace gatherings are typical Heritage rhythms. The community's size makes it easier to recognize faces at the clubhouse than in 7,000-home developments.",
        "When you travel, guard-gated access and HOA-maintained exteriors provide peace of mind — a core reason 55+ buyers choose Heritage over non-gated Summerlin subdivisions.",
      ],
    },
  ],
};

export const guardGatedPage: HeritagePageContent = {
  slug: "/guard-gated-living",
  metadata: {
    title: baseTitle("Guard-Gated 55+ Security"),
    description:
      "Staff guard-gated entry, visitor policies, and privacy benefits at Heritage at Stonebridge — Summerlin's Lennar 55+ community.",
  },
  breadcrumbs: crumbs({ name: "Guard-Gated Living", url: "/guard-gated-living" }),
  badge: "24/7 Staffed Gate",
  h1: "Guard-Gated Living at Heritage",
  subtitle: HERITAGE_COMMUNITY.security,
  lastUpdated: "June 2026",
  sections: [
    {
      type: "checklist",
      heading: "Security Features",
      items: [
        {
          title: "Manned entry",
          description: "Staff verifies visitors instead of sharing a community-wide keypad.",
        },
        {
          title: "Controlled access",
          description: "Delivery and guest flows follow HOA procedures — ask for current policy.",
        },
        {
          title: "Neighborhood scale",
          description: "421 homes means fewer through-traffic patterns than open Summerlin streets.",
        },
      ],
    },
  ],
};

export const downtownSummerlinPage: HeritagePageContent = {
  slug: "/downtown-summerlin",
  metadata: {
    title: baseTitle("Near Downtown Summerlin"),
    description:
      "Live minutes from Downtown Summerlin shopping, dining, and events while enjoying guard-gated 55+ privacy at Heritage at Stonebridge.",
  },
  breadcrumbs: crumbs({ name: "Downtown Summerlin", url: "/downtown-summerlin" }),
  h1: "Heritage & Downtown Summerlin",
  subtitle: "125+ shops, restaurants, and entertainment minutes from your guard-gated front gate.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Walkable Summerlin Retail",
      paragraphs: [
        "Downtown Summerlin anchors the master plan with national retailers, local restaurants, movie theaters, and seasonal events. Heritage residents pair quiet gated living with quick access to errands and nights out — without driving to the Strip for every dinner reservation.",
        "Red Rock Canyon remains a short drive west for hiking and visitors, making Heritage a strong base for active adults who want both city convenience and outdoor Nevada landscapes.",
      ],
    },
  ],
};

export const summerlin55Page: HeritagePageContent = {
  slug: "/summerlin-55-plus",
  metadata: {
    title: baseTitle("Summerlin 55+ Communities Guide"),
    description:
      "Compare Heritage at Stonebridge, Sun City Summerlin, Trilogy, and Regency — hyperlocal guide to Summerlin active adult real estate.",
  },
  breadcrumbs: crumbs({ name: "Summerlin 55+ Guide", url: "/summerlin-55-plus" }),
  h1: "Summerlin 55+ Communities Guide",
  subtitle: "How Heritage at Stonebridge fits among Summerlin's active adult neighborhoods.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "links",
      heading: "Compare Summerlin 55+ Options",
      links: [
        { href: "/community", label: "Heritage at Stonebridge Overview" },
        { href: "/vs-sun-city-summerlin", label: "vs Sun City Summerlin" },
        { href: "/vs-trilogy-summerlin", label: "vs Trilogy Summerlin" },
        { href: "/buying-guide", label: "Buying Guide" },
        { href: "/market-update", label: "Market Update" },
      ],
    },
    {
      type: "prose",
      heading: "Why Heritage Stands Out",
      paragraphs: [
        "Summerlin offers multiple 55+ choices — from golf-centric Sun City to resort-scale Trilogy and semi-custom Regency builds. Heritage at Stonebridge occupies a sweet spot: Lennar new construction, staff guard-gated security, and a compact 421-home footprint in zip 89138.",
        "Dr. Jan Duffy helps buyers tour multiple Summerlin 55+ communities in one day so you compare lifestyle, not just floor plans online.",
      ],
    },
  ],
};

export const marketUpdatePage: HeritagePageContent = {
  slug: "/market-update",
  metadata: {
    title: baseTitle("Market Update"),
    description:
      "Heritage at Stonebridge and Summerlin 55+ market trends — pricing, days on market, and buyer demand in 89138.",
  },
  breadcrumbs: crumbs({ name: "Market Update", url: "/market-update" }),
  h1: "Heritage at Stonebridge Market Update",
  subtitle:
    "Hyperlocal snapshot for Summerlin West 55+ buyers and sellers — verify figures against live MLS before offers.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Summerlin 55+ Demand",
      paragraphs: [
        "Heritage at Stonebridge benefits from limited inventory (421 total homes) and continued demand for guard-gated Lennar product near Downtown Summerlin. Recent MLS activity in 89138 shows active buyer interest in single-story and pickleball-oriented communities.",
        "Pricing varies by plan, elevation, and backing. Request a current comparable market analysis from Dr. Jan Duffy before listing or making an offer — this page is educational, not a live MLS feed.",
      ],
    },
    {
      type: "links",
      heading: "Related Tools",
      links: [
        { href: "/homes-for-sale", label: "Live Listings" },
        { href: "/home-valuation", label: "Home Valuation" },
        { href: "/selling-guide", label: "Selling Guide" },
      ],
    },
  ],
};

export const aboutPage: HeritagePageContent = {
  slug: "/about",
  metadata: {
    title: "Dr. Jan Duffy | Heritage at Stonebridge REALTOR®",
    description:
      "Dr. Jan Duffy, License S.0197614.LLC — Berkshire Hathaway HomeServices Nevada Properties. Heritage at Stonebridge & Summerlin 55+ specialist.",
  },
  breadcrumbs: crumbs({ name: "About", url: "/about" }),
  h1: "Dr. Jan Duffy — Heritage at Stonebridge Specialist",
  subtitle:
    "Berkshire Hathaway HomeServices Nevada Properties | License S.0197614.LLC | Summerlin 55+ guard-gated communities",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Hyperlocal Representation",
      paragraphs: [
        "Dr. Jan Duffy focuses on Heritage at Stonebridge and comparable Summerlin active adult communities — guiding buyers through guard-gate tours, HOA documents, and competitive offers, and helping sellers position Lennar homes against newer 55+ inventory.",
        "Lead capture flows through RealScout property search and Calendly consultations, with follow-up handled in Follow Up Boss for consistent communication.",
      ],
    },
    {
      type: "links",
      heading: "Work With Dr. Jan",
      links: [
        { href: "/contact", label: "Contact & Tour" },
        { href: "/google-business", label: "Google Business Profile" },
        { href: "/buying-guide", label: "Buying Guide" },
      ],
    },
  ],
};

export const faqPage: HeritagePageContent = {
  slug: "/faq",
  metadata: {
    title: baseTitle("FAQ"),
    description:
      "Frequently asked questions about Heritage at Stonebridge — age rules, HOA, amenities, pricing, and tours with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({ name: "FAQ", url: "/faq" }),
  h1: "Heritage at Stonebridge FAQ",
  subtitle: "Answers to common buyer and seller questions about Summerlin's Lennar 55+ guard-gated community.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "links",
      heading: "Deep-Dive Guides",
      links: [
        { href: "/community", label: "Community Overview" },
        { href: "/hoa-fees", label: "HOA & Fees" },
        { href: "/guard-gated-living", label: "Guard-Gated Security" },
        { href: "/summerlin-55-plus", label: "Summerlin 55+ Guide" },
      ],
    },
  ],
  faqs: [
    ...HERITAGE_FAQS,
    {
      question: "How does Heritage compare to Sun City Summerlin?",
      answer:
        "Heritage is smaller (~421 homes) with staff guard-gating and Lennar construction from 2021–2025. Sun City is a 7,000+ home community with extensive golf and decades of social infrastructure. See our comparison page for details.",
    },
    {
      question: "Can I schedule a private tour?",
      answer:
        "Yes. Call (702) 500-1942 or use the contact page to schedule a Calendly consultation and guard-gate tour with Dr. Jan Duffy.",
    },
  ],
};

export const homesForSalePage: HeritagePageContent = {
  slug: "/homes-for-sale",
  metadata: {
    title: baseTitle("MLS Listings — Heritage Stonebridge Homes for Sale"),
    description:
      "Live MLS search for Heritage at Stonebridge 55+ homes in Summerlin 89138. Guard-gated Lennar resales, tours, and listing alerts with Dr. Jan Duffy, BHHS.",
  },
  breadcrumbs: crumbs({ name: "Homes for Sale", url: "/homes-for-sale" }),
  h1: "Heritage at Stonebridge Homes for Sale",
  subtitle: "Live MLS search for 55+ guard-gated homes in Summerlin West — updated as new listings hit market.",
  lastUpdated: "June 2026",
  sections: [
    {
      type: "prose",
      heading: "Search Heritage Listings",
      paragraphs: [
        `Inventory includes resale homes and any remaining new-build opportunities in ${HERITAGE_COMMUNITY.name}. ${HERITAGE_COMMUNITY.priceRange}`,
        "Use the property search below to filter by beds, baths, and price — then call Dr. Jan Duffy for private tours and offer strategy inside the guard gate.",
      ],
    },
  ],
};
