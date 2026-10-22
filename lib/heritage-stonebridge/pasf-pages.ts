import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY } from "./data";
import type { HeritagePageContent } from "./types";

/**
 * Pages for Google "People also search for" queries around Heritage at Stonebridge.
 * Dollar amounts, review counts, and live inventory are omitted on purpose.
 * Confirm dues, rental rules, and pool status in the MLS and the resale package.
 */

const baseTitle = (page: string) =>
  `${page} | Heritage at Stonebridge Summerlin | Dr. Jan Duffy`;

function crumbs(...items: { name: string; url: string }[]) {
  return [{ name: "Home", url: "/" }, ...items];
}

const ageRule =
  "Heritage at Stonebridge is age-qualified 55+. At least one resident must be 55 or older. Occupancy is subject to the association's governing documents and applicable law.";

const agentLine = `${SITE_CONTACT.agentName}, REALTOR® (License ${SITE_CONTACT.license}), ${SITE_CONTACT.brokerage}. Call ${SITE_CONTACT.phone.display}.`;

const communityFacts = `${HERITAGE_COMMUNITY.name} is a Lennar community in ${HERITAGE_COMMUNITY.masterPlan}, Las Vegas, NV ${HERITAGE_COMMUNITY.postalCode}. It has ${HERITAGE_COMMUNITY.homeCount} single-family homes and ${HERITAGE_COMMUNITY.floorPlanCount} floor plans.`;

export const reviewsPage: HeritagePageContent = {
  slug: "/reviews",
  metadata: {
    title: baseTitle("Heritage Stonebridge Reviews"),
    description:
      "Where to read Heritage Stonebridge reviews on Google. Dr. Jan Duffy, BHHS Nevada Properties, serves Heritage at Stonebridge in Summerlin 89138.",
  },
  breadcrumbs: crumbs({ name: "Reviews", url: "/reviews" }),
  badge: "Google Business Profile",
  h1: "Heritage Stonebridge Reviews",
  subtitle:
    "Read reviews on the Google listing for this office. This page does not reprint or invent testimonials.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Where Heritage Stonebridge reviews live",
      paragraphs: [
        "Heritage Stonebridge reviews for this office are on Google, attached to the business profile for Heritage Stonebridge | Homes By Dr. Jan Duffy. Use the map card on this page to open reviews, write a review, or get directions.",
        "A review of the agent is not a review of the homeowners association, the builder, or a specific floor plan. Ask for the resale package when you want association documents, and use the MLS when you want a current list of homes.",
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/google-business", label: "Google Business Profile" },
        { href: "/homes-for-sale", label: "Heritage Stonebridge homes for sale" },
        { href: "/clubhouse", label: "Heritage at Stonebridge clubhouse" },
        { href: "/contact", label: "Schedule a tour" },
      ],
    },
  ],
  faqs: [
    {
      question: "Where can I read Heritage Stonebridge reviews?",
      answer:
        "Open the Google listing from the map on this page. Published star counts appear on the site only when the Google profile rating is connected. This page does not add its own score.",
    },
    {
      question: "Do Google reviews describe the HOA or the homes?",
      answer:
        "Most reviews describe the agent's service. For the association, read the resale package. For a home, read the MLS listing and the seller's disclosures.",
    },
  ],
};

export const homesForRentPage: HeritagePageContent = {
  slug: "/homes-for-rent",
  metadata: {
    title: baseTitle("Heritage at Stonebridge Homes for Rent"),
    description:
      "Heritage at Stonebridge homes for rent in Summerlin 89138. Leases follow the HOA documents and the 55+ age rule. Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "Homes for Rent", url: "/homes-for-rent" }),
  badge: "Summerlin 89138",
  h1: "Heritage at Stonebridge Homes for Rent",
  subtitle:
    "Heritage Stonebridge for rent means a lease inside the guard-gated Lennar community, not a valley-wide rental search.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "What a Heritage rental has to clear",
      paragraphs: [
        communityFacts,
        ageRule,
        "A lease also has to follow the association's rental rules. Those rules can cover minimum term, how many homes may be leased, and whether the board must approve the tenant. The resale package or the management company is the current source. This page does not publish a rental cap or a rent amount.",
        "When a Heritage home is offered for lease, it should appear in the MLS search below. An empty search means nothing is listed for rent right now. It does not mean rentals are banned.",
        agentLine,
      ],
    },
    {
      type: "checklist",
      heading: "Before you tour a rental",
      items: [
        {
          title: "Confirm the age rule",
          description:
            "At least one occupant must be 55 or older. The association's documents and applicable law control occupancy.",
        },
        {
          title: "Read the rental section of the CC&Rs",
          description:
            "Ask for the current rental cap, lease length, and application steps before you sign.",
        },
        {
          title: "Separate the community pool from a private pool",
          description:
            "The community has a pool, spa, and lap pool. A private pool is a listing-level fact.",
        },
        {
          title: "Budget the dues",
          description:
            "Ask whether the owner or the tenant pays the Heritage assessment and the Summerlin West master assessment.",
        },
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/homes-for-sale", label: "Heritage Stonebridge homes for sale" },
        { href: "/hoa", label: "Heritage at Stonebridge HOA" },
        { href: "/hoa-fees", label: "Heritage Stonebridge HOA fees" },
        { href: "/clubhouse", label: "Clubhouse and pool" },
      ],
    },
  ],
  faqs: [
    {
      question: "Are there Heritage Stonebridge homes for rent?",
      answer:
        "Only when an owner has a lease listed and the association allows it. Search the MLS module on this page and confirm the rental rules in the governing documents before you apply.",
    },
    {
      question: "Is Heritage Stonebridge for rent the same as Stonebridge village?",
      answer:
        "No. This page is the Lennar 55+ community inside the gate. Other Stonebridge addresses can sit outside Heritage and follow different rules.",
    },
  ],
};

export const hoaPage: HeritagePageContent = {
  slug: "/hoa",
  metadata: {
    title: baseTitle("Heritage at Stonebridge HOA"),
    description:
      "Heritage at Stonebridge HOA manages the gate, clubhouse, and common areas in Summerlin 89138. Dues are on the HOA fees page. Dr. Jan Duffy, BHHS.",
  },
  breadcrumbs: crumbs({ name: "HOA", url: "/hoa" }),
  badge: "Association, not the builder",
  h1: "Heritage at Stonebridge HOA",
  subtitle:
    "The homeowners association runs the gate and common areas. Lennar built the homes. They are not the same organization.",
  lastUpdated: "October 2026",
  includeCommunitySchema: true,
  sections: [
    {
      type: "prose",
      heading: "What the Heritage association covers",
      paragraphs: [
        "Heritage at Stonebridge Homeowners Association is the sub-association for this community. Owners also belong to the Summerlin West master association. Each can assess its own dues.",
        "Inside Heritage, the association is what funds staffed gate operations, the clubhouse, fitness and pool areas, common-area landscape, and reserves. The dollar amount changes. Read the current budget in the resale package instead of a blog figure.",
        `${ageRule} ${agentLine}`,
      ],
    },
    {
      type: "checklist",
      heading: "Documents to request",
      items: [
        {
          title: "CC&Rs and rules",
          description:
            "Age policy, leasing, exterior changes, parking, and clubhouse use.",
        },
        {
          title: "Budget and reserve study",
          description:
            "Regular dues, what they pay for, and any planned special assessment.",
        },
        {
          title: "Resale certificate",
          description:
            "Delinquencies, violations, and pending litigation tied to that home.",
        },
        {
          title: "Master-association statement",
          description:
            "The Summerlin West assessment is separate from the Heritage assessment.",
        },
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/hoa-fees", label: "Heritage Stonebridge HOA fees" },
        { href: "/clubhouse", label: "Heritage at Stonebridge clubhouse" },
        { href: "/guard-gated-living", label: "Guard-gated entry" },
        { href: "/homes-for-sale", label: "Homes for sale" },
      ],
    },
  ],
  faqs: [
    {
      question: "Who is the Heritage at Stonebridge HOA?",
      answer:
        "It is the homeowners association for the Lennar community inside the gate. It is not Lennar, not the Summerlin West master association, and not Stonebridge Hospitality.",
    },
    {
      question: "Where do I see Heritage Stonebridge HOA fees?",
      answer:
        "The current assessments are in the resale package. The HOA fees page explains what those bills usually cover and how to compare them.",
    },
  ],
};

export const homesForSaleNearPage: HeritagePageContent = {
  slug: "/homes-for-sale-near",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale Nearby"),
    description:
      "Heritage Stonebridge homes for sale near Downtown Summerlin and Red Rock Canyon. The community is in Summerlin West, Las Vegas 89138.",
  },
  breadcrumbs: crumbs({ name: "Homes for Sale Nearby", url: "/homes-for-sale-near" }),
  badge: "Summerlin West 89138",
  h1: "Heritage Stonebridge Homes for Sale Nearby",
  subtitle:
    "The homes are in Stonebridge village, Summerlin West. Nearby searches often mean the village, Downtown Summerlin, or Red Rock.",
  lastUpdated: "October 2026",
  includeCommunitySchema: true,
  sections: [
    {
      type: "prose",
      heading: "Where the community sits",
      paragraphs: [
        `${communityFacts} Staffed guard-gated entry is part of the community.`,
        "A search for Heritage Stonebridge homes for sale near this area should start inside the gate, then widen only if you want a different subdivision. The Paseos, the rest of Stonebridge, and other Summerlin villages are not the same HOA.",
        "Day-to-day errands use Downtown Summerlin, the Red Rock Canyon area, and the Charleston and Rampart corridors. Drive times change with traffic. This page does not publish a commute claim.",
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Nearby sale searches",
      links: [
        { href: "/homes-for-sale", label: "Heritage Stonebridge homes for sale" },
        { href: "/stonebridge-summerlin-homes", label: "Stonebridge Summerlin homes for sale" },
        { href: "/paseos-summerlin-homes", label: "Paseos Summerlin homes for sale" },
        { href: "/downtown-summerlin", label: "Downtown Summerlin" },
        { href: "/red-rock-canyon-communities", label: "Red Rock Canyon area" },
        { href: "/location", label: "Heritage at Stonebridge in Summerlin" },
      ],
    },
  ],
  faqs: [
    {
      question: "Heritage Stonebridge homes for sale near me — where is that?",
      answer:
        "The community is in Summerlin West, Las Vegas, Nevada 89138. Search Heritage listings first, then nearby Summerlin villages if you want a wider map.",
    },
  ],
};

export const zillowPage: HeritagePageContent = {
  slug: "/homes-for-sale-zillow",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale and Zillow"),
    description:
      "How Heritage Stonebridge homes for sale show up on Zillow versus the MLS. Search live Summerlin 89138 listings with Dr. Jan Duffy, BHHS.",
  },
  breadcrumbs: crumbs({ name: "Zillow and the MLS", url: "/homes-for-sale-zillow" }),
  h1: "Heritage Stonebridge Homes for Sale on Zillow",
  subtitle:
    "Zillow is a portal. The MLS is the list agents use to write offers. The two are not always in sync.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Why a Zillow search and the MLS can disagree",
      paragraphs: [
        "People looking up Heritage Stonebridge homes for sale on Zillow are usually trying to see what is active inside the gate. Zillow receives listing data from the MLS, then displays it on its own schedule. A home can be pending, back on market, or off market here before the portal matches.",
        "A Zestimate is Zillow's model. It is not an appraisal and it is not a Heritage comparable. Plan, lot, and upgrades inside a 421-home community move price in ways a valley-wide model misses.",
        "Use the search on this site for the MLS feed, then call for a tour. The guard gate still requires an appointment.",
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/homes-for-sale", label: "Heritage Stonebridge homes for sale" },
        { href: "/for-sale-by-owner", label: "For sale by owner" },
        { href: "/market-analysis", label: "Heritage market analysis" },
        { href: "/floor-plans", label: "Floor plans" },
      ],
    },
  ],
  faqs: [
    {
      question: "Are Heritage Stonebridge homes for sale on Zillow the full list?",
      answer:
        "Treat Zillow as a starting point. Confirm status, price, and subdivision in the MLS before you write an offer. For-sale-by-owner homes may not appear on either list.",
    },
  ],
};

export const fsboPage: HeritagePageContent = {
  slug: "/for-sale-by-owner",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale by Owner"),
    description:
      "Heritage Stonebridge homes for sale by owner still need gate access, Nevada disclosures, and the HOA resale package. Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "For Sale by Owner", url: "/for-sale-by-owner" }),
  h1: "Heritage Stonebridge Homes for Sale by Owner",
  subtitle:
    "An owner can sell without listing. The gate, the disclosures, and the association paperwork still apply.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "What changes when the seller is the owner",
      paragraphs: [
        "A Heritage Stonebridge home for sale by owner is still a home in an age-qualified, guard-gated community. Buyers need a way through the staffed gate. Inspectors and appraisers do too. Plan that access before you set a showing.",
        "Nevada seller disclosures and the HOA resale package are not optional extras. This page is not legal advice. A Nevada real estate attorney or the title company can confirm what your sale requires.",
        "Dr. Jan Duffy can list the home, or represent a buyer who wants to purchase an unlisted one. Either way, price it from Heritage comps, not from a portal estimate.",
        agentLine,
      ],
    },
    {
      type: "checklist",
      heading: "Owner checklist",
      items: [
        {
          title: "Gate access for buyers",
          description: "Staffed entry means a showing plan, not a code on a flyer.",
        },
        {
          title: "Resale package",
          description: "Order it early. Buyers will ask about dues, reserves, and rental rules.",
        },
        {
          title: "Disclosures",
          description: "Use the Nevada forms your title company or attorney specifies.",
        },
        {
          title: "Plan and price",
          description: `Heritage plans run ${HERITAGE_COMMUNITY.sqFtRange} sq. ft. Match comps to the plan, not to all of Summerlin.`,
        },
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/selling-guide", label: "Selling guide" },
        { href: "/home-valuation", label: "Home valuation" },
        { href: "/homes-for-sale", label: "MLS homes for sale" },
        { href: "/hoa", label: "Heritage at Stonebridge HOA" },
      ],
    },
  ],
  faqs: [
    {
      question: "Can I buy a Heritage Stonebridge home for sale by owner?",
      answer:
        "Yes, if the owner will sell and you can complete the association and disclosure steps. Call Dr. Jan Duffy if you want a buyer's agent on an unlisted home.",
    },
  ],
};

export const homesWithPoolPage: HeritagePageContent = {
  slug: "/homes-with-pool",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale with a Pool"),
    description:
      "Heritage Stonebridge homes for sale with a pool: community pool, spa, and lap pool are standard. A private pool must be confirmed on the listing.",
  },
  breadcrumbs: crumbs({ name: "Homes with a Pool", url: "/homes-with-pool" }),
  h1: "Heritage Stonebridge Homes for Sale with a Pool",
  subtitle:
    "Every Heritage owner shares the community aquatics. A private pool is a different question, home by home.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Community pool versus a pool on the lot",
      paragraphs: [
        "Heritage at Stonebridge includes a resort-style pool, a spa, and a heated lap pool at the clubhouse. Those are association amenities. They are not a private pool in the backyard.",
        "A search for Heritage Stonebridge homes for sale with a pool often mixes those two ideas. Read the listing remarks and the property fields. If the remarks are silent, ask. Do not assume a fenced yard includes a pool.",
        "The listing at 894 Heritage Bend Drive, a Lennar Claremont plan, is an example of a Heritage home with no private pool. Residents there use the community pool. That status is specific to that home as listed in October 2026.",
        `${ageRule} ${agentLine}`,
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/clubhouse", label: "Clubhouse, pool, and spa" },
        { href: "/homes-for-sale", label: "All Heritage homes for sale" },
        {
          href: "/stonebridge-summerlin-homes-with-pool",
          label: "Stonebridge Summerlin homes for sale with a pool",
        },
        { href: "/amenities", label: "Amenities" },
      ],
    },
  ],
  faqs: [
    {
      question: "Do Heritage Stonebridge homes for sale include a private pool?",
      answer:
        "The community pool, spa, and lap pool come with the association. A private pool is not standard. Confirm it on the individual listing and in the HOA rules before you write an offer.",
    },
  ],
};

export const clubhousePage: HeritagePageContent = {
  slug: "/clubhouse",
  metadata: {
    title: baseTitle("Heritage at Stonebridge Clubhouse"),
    description:
      "The Heritage at Stonebridge clubhouse is 8,000 sq. ft. with a lounge, fitness center, pool, spa, and lap pool in Summerlin 89138.",
  },
  breadcrumbs: crumbs({ name: "Clubhouse", url: "/clubhouse" }),
  badge: "8,000 sq. ft.",
  h1: "Heritage at Stonebridge Clubhouse",
  subtitle:
    "The clubhouse is for Heritage owners. It is not a public event hall and it is not Stonebridge Hospitality.",
  lastUpdated: "October 2026",
  includeCommunitySchema: true,
  sections: [
    {
      type: "grid",
      heading: "What is in the building",
      cards: [
        {
          title: "Social rooms",
          items: [
            "Lounge with a fireplace",
            "Meeting room",
            "Showcase kitchen for association events",
            "Terrace with an outdoor firepit",
          ],
        },
        {
          title: "Fitness and locker rooms",
          items: [
            "Fitness center",
            "Men's locker room",
            "Women's locker room",
          ],
        },
        {
          title: "Aquatics on the grounds",
          items: [
            "Resort-style pool",
            "Spa",
            "Heated lap pool",
            "Guest rules are in the HOA handbook",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Courts and paths outside the building",
      paragraphs: [
        "Six lighted pickleball courts, three bocce courts, walking paths, and a picnic area sit with the clubhouse grounds. Hours and guest limits are association rules. Read the current handbook before you promise a visitor access.",
        `${ageRule} ${agentLine}`,
      ],
    },
    {
      type: "links",
      heading: "Related Heritage searches",
      links: [
        { href: "/amenities", label: "Full amenity list" },
        { href: "/hoa", label: "Heritage at Stonebridge HOA" },
        { href: "/homes-with-pool", label: "Homes for sale and the pool" },
        { href: "/stonebridge-hospitality", label: "Stonebridge Hospitality is a different name" },
      ],
    },
  ],
  faqs: [
    {
      question: "Can anyone rent the Heritage at Stonebridge clubhouse?",
      answer:
        "Use of the rooms is an association privilege. The handbook sets who may reserve space, guest limits, and fees. It is not booked like a hotel.",
    },
  ],
};

export const stonebridgeSummerlinHomesPage: HeritagePageContent = {
  slug: "/stonebridge-summerlin-homes",
  metadata: {
    title: baseTitle("Stonebridge Summerlin Homes for Sale"),
    description:
      "Stonebridge Summerlin homes for sale include Heritage at Stonebridge and other addresses in the village. Confirm which HOA is on the listing. Las Vegas 89138.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Summerlin Homes",
    url: "/stonebridge-summerlin-homes",
  }),
  h1: "Stonebridge Summerlin Homes for Sale",
  subtitle:
    "Stonebridge is the Summerlin West village. Heritage at Stonebridge is the Lennar 55+ community inside it.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Village name versus the Heritage gate",
      paragraphs: [
        "A search for Stonebridge Summerlin homes for sale is wider than Heritage. Some listings use Stonebridge in the address or the subdivision name and sit outside the Heritage guard gate. Those homes do not automatically include the Heritage clubhouse or the Heritage age rule.",
        `${communityFacts} ${ageRule}`,
        "Match the legal subdivision on the MLS tax record before you compare prices. A Heritage comp is not a comp for every Stonebridge street.",
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Related searches",
      links: [
        { href: "/homes-for-sale", label: "Heritage at Stonebridge homes for sale" },
        {
          href: "/stonebridge-summerlin-homes-with-pool",
          label: "Stonebridge Summerlin homes for sale with a pool",
        },
        { href: "/paseos-summerlin-homes", label: "Paseos Summerlin homes for sale" },
        { href: "/summerlin-homes", label: "Summerlin homes" },
        { href: "/homes-for-sale-near", label: "Homes for sale nearby" },
      ],
    },
  ],
  faqs: [
    {
      question: "Are all Stonebridge Summerlin homes for sale in Heritage?",
      answer:
        "No. Heritage at Stonebridge is one community in the village. Read the subdivision and the HOA on each listing.",
    },
  ],
};

export const stonebridgePoolPage: HeritagePageContent = {
  slug: "/stonebridge-summerlin-homes-with-pool",
  metadata: {
    title: baseTitle("Stonebridge Summerlin Homes for Sale with a Pool"),
    description:
      "Stonebridge Summerlin homes for sale with a pool may be private pools outside the Heritage gate, or the Heritage community pool. Confirm the listing.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Homes with a Pool",
    url: "/stonebridge-summerlin-homes-with-pool",
  }),
  h1: "Stonebridge Summerlin Homes for Sale with a Pool",
  subtitle:
    "Inside Heritage, the pool most buyers mean is the clubhouse pool. Elsewhere in Stonebridge, a private pool is a lot feature.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Two different pool searches share one phrase",
      paragraphs: [
        "Stonebridge Summerlin homes for sale with a pool mixes village-wide listings with the Heritage amenity. Heritage owners share a resort-style pool, spa, and heated lap pool. That amenity does not mean the house has its own pool.",
        "A private pool on a Stonebridge street outside the Heritage gate is a different product and a different association. Filter the MLS for a private pool, then read the subdivision. Ask the HOA whether that lot is allowed to keep a pool before you treat it as a given.",
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Related searches",
      links: [
        { href: "/homes-with-pool", label: "Heritage Stonebridge homes for sale with a pool" },
        { href: "/stonebridge-summerlin-homes", label: "Stonebridge Summerlin homes for sale" },
        { href: "/clubhouse", label: "Heritage clubhouse pool" },
        { href: "/homes-for-sale", label: "Heritage homes for sale" },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I find Stonebridge Summerlin homes for sale with a private pool?",
      answer:
        "Search the MLS for a private pool and confirm the subdivision. Heritage listings should be checked separately, because the community pool is not a private pool.",
    },
  ],
};

export const paseosPage: HeritagePageContent = {
  slug: "/paseos-summerlin-homes",
  metadata: {
    title: baseTitle("Paseos Summerlin Homes for Sale"),
    description:
      "Paseos Summerlin homes for sale are in a different Summerlin neighborhood than Heritage at Stonebridge. Compare both in the MLS with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({ name: "Paseos Summerlin", url: "/paseos-summerlin-homes" }),
  h1: "Paseos Summerlin Homes for Sale",
  subtitle:
    "The Paseos is a Summerlin neighborhood. It is not Heritage at Stonebridge and it does not use the Heritage gate or clubhouse.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Paseos and Heritage are different searches",
      paragraphs: [
        "People move from a Heritage search to Paseos Summerlin homes for sale when they want a wider Summerlin map. The Paseos is its own neighborhood. A Paseos listing does not include Heritage's clubhouse, Heritage's staffed gate, or Heritage's age rule unless the listing says otherwise.",
        "This page does not publish Paseos prices, dues, or a home count. Those figures change and belong on the current MLS record. Use the search below for Summerlin inventory, and name the subdivision you want so the tour list stays accurate.",
        `${communityFacts} ${ageRule}`,
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Related Summerlin searches",
      links: [
        { href: "/homes-for-sale", label: "Heritage at Stonebridge homes for sale" },
        { href: "/summerlin-homes", label: "Summerlin homes for sale" },
        { href: "/stonebridge-summerlin-homes", label: "Stonebridge Summerlin homes for sale" },
        { href: "/homes-for-sale-near", label: "Homes for sale near Heritage" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is The Paseos part of Heritage at Stonebridge?",
      answer:
        "No. The Paseos is a separate Summerlin neighborhood. Heritage at Stonebridge is the Lennar 55+ community in Stonebridge village, zip 89138.",
    },
  ],
};

export const stonebridgeHospitalityPage: HeritagePageContent = {
  slug: "/stonebridge-hospitality",
  metadata: {
    title: baseTitle("Stonebridge Hospitality and This Community"),
    description:
      "Stonebridge Hospitality is a hotel company. It is not the Heritage at Stonebridge HOA or the clubhouse in Summerlin 89138.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Hospitality",
    url: "/stonebridge-hospitality",
  }),
  h1: "Stonebridge Hospitality",
  subtitle:
    "That name belongs to a hotel firm. It is not the association, the clubhouse, or the sales office for Heritage at Stonebridge.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Which Stonebridge you meant",
      paragraphs: [
        "Stonebridge Hospitality is a hotel ownership and management company. It does not operate Heritage at Stonebridge, and this site does not book its hotels.",
        "If you were looking for the clubhouse, start on the clubhouse page. Room use, the pool, and guest rules come from the Heritage at Stonebridge HOA handbook. If you were looking for homes, start with the MLS search.",
        `${communityFacts} ${agentLine}`,
      ],
    },
    {
      type: "links",
      heading: "If you meant the community",
      links: [
        { href: "/clubhouse", label: "Heritage at Stonebridge clubhouse" },
        { href: "/hoa", label: "Heritage at Stonebridge HOA" },
        { href: "/homes-for-sale", label: "Heritage homes for sale" },
        { href: "/contact", label: "Contact Dr. Jan Duffy" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Stonebridge Hospitality the Heritage at Stonebridge HOA?",
      answer:
        "No. Stonebridge Hospitality is a hotel company. The association for this Summerlin community is Heritage at Stonebridge Homeowners Association.",
    },
  ],
};

export const PASF_PAGES: HeritagePageContent[] = [
  reviewsPage,
  homesForRentPage,
  hoaPage,
  homesForSaleNearPage,
  zillowPage,
  fsboPage,
  homesWithPoolPage,
  clubhousePage,
  stonebridgeSummerlinHomesPage,
  stonebridgePoolPage,
  paseosPage,
  stonebridgeHospitalityPage,
];
