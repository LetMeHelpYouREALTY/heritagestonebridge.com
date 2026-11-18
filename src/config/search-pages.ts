import { business } from "~/config/business";
import { community } from "~/config/community";

/**
 * Heritage search pages ported from the retired Next.js branch (2026-11-17).
 * Facts match ~/config/questions.ts. No community price range is published on purpose.
 */

export type SearchSection =
  | { type: "prose"; heading: string; paragraphs: string[] }
  | { type: "grid"; heading: string; cards: { title: string; items: string[] }[] }
  | { type: "checklist"; heading: string; items: { title: string; description: string }[] }
  | { type: "links"; heading: string; links: { href: string; label: string }[] };

export type SearchPage = {
  slug: string;
  metadata: { title: string; description: string };
  breadcrumbs: { name: string; url: string }[];
  badge?: string;
  h1: string;
  subtitle: string;
  sections: SearchSection[];
  faqs?: { question: string; answer: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  includeCommunitySchema?: boolean;
  lastUpdated?: string;
};

const SITE_CONTACT = {
  agentName: "Dr. Jan Duffy",
  license: business.license,
  brokerage: business.broker,
  phone: { display: business.telephoneDisplay },
};

const HERITAGE_COMMUNITY = {
  name: "Heritage at Stonebridge",
  masterPlan: "Summerlin West",
  postalCode: "89138",
  homeCount: community.homes,
  collections: 3,
  floorPlanCount: 9,
  sqFtRange: "1,232 – 2,873",
  bedroomRange: "2 – 4",
};

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

export const homesForRentPage: SearchPage = {
  slug: "/homes-for-rent/",
  metadata: {
    title: baseTitle("Heritage at Stonebridge Homes for Rent"),
    description:
      "Heritage at Stonebridge homes for rent in Summerlin 89138. Leases follow the HOA documents and the 55+ age rule. Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "Homes for Rent", url: "/homes-for-rent/" }),
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
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage Stonebridge homes for sale" },
        { href: "/hoa-fees/", label: "Heritage at Stonebridge HOA" },
        { href: "/hoa-fees/", label: "Heritage Stonebridge HOA fees" },
        { href: "/amenities/", label: "Clubhouse and pool" },
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

export const homesForSaleNearPage: SearchPage = {
  slug: "/homes-for-sale-near/",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale Nearby"),
    description:
      "Heritage Stonebridge homes for sale near Downtown Summerlin and Red Rock Canyon. The community is in Summerlin West, Las Vegas 89138.",
  },
  breadcrumbs: crumbs({ name: "Homes for Sale Nearby", url: "/homes-for-sale-near/" }),
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
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage Stonebridge homes for sale" },
        { href: "/homes-for-sale-stonebridge-summerlin/", label: "Stonebridge Summerlin homes for sale" },
        { href: "/paseos-summerlin-homes/", label: "Paseos Summerlin homes for sale" },
        { href: "/nearby/", label: "Downtown Summerlin" },
        { href: "/red-rock-canyon-communities/", label: "Red Rock Canyon area" },
        { href: "/nearby/", label: "Heritage at Stonebridge in Summerlin" },
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

export const zillowPage: SearchPage = {
  slug: "/homes-for-sale-zillow/",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale and Zillow"),
    description:
      "How Heritage Stonebridge homes for sale show up on Zillow versus the MLS. Search live Summerlin 89138 listings with Dr. Jan Duffy, BHHS.",
  },
  breadcrumbs: crumbs({ name: "Zillow and the MLS", url: "/homes-for-sale-zillow/" }),
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
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage Stonebridge homes for sale" },
        { href: "/for-sale-by-owner/", label: "For sale by owner" },
        { href: "/market-analysis/", label: "Heritage market analysis" },
        { href: "/floor-plans/", label: "Floor plans" },
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

export const fsboPage: SearchPage = {
  slug: "/for-sale-by-owner/",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale by Owner"),
    description:
      "Heritage Stonebridge homes for sale by owner still need gate access, Nevada disclosures, and the HOA resale package. Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "For Sale by Owner", url: "/for-sale-by-owner/" }),
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
        { href: "/home-selling-guide/", label: "Selling guide" },
        { href: "/sell-heritage-at-stonebridge/", label: "Home valuation" },
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "MLS homes for sale" },
        { href: "/hoa-fees/", label: "Heritage at Stonebridge HOA" },
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

export const homesWithPoolPage: SearchPage = {
  slug: "/homes-with-pool/",
  metadata: {
    title: baseTitle("Heritage Stonebridge Homes for Sale with a Pool"),
    description:
      "Heritage Stonebridge homes for sale with a pool: community pool, spa, and lap pool are standard. A private pool must be confirmed on the listing.",
  },
  breadcrumbs: crumbs({ name: "Homes with a Pool", url: "/homes-with-pool/" }),
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
        { href: "/amenities/", label: "Clubhouse, pool, and spa" },
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "All Heritage homes for sale" },
        {
          href: "/stonebridge-summerlin-homes-with-pool/",
          label: "Stonebridge Summerlin homes for sale with a pool",
        },
        { href: "/amenities/", label: "Amenities" },
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

export const stonebridgePoolPage: SearchPage = {
  slug: "/stonebridge-summerlin-homes-with-pool/",
  metadata: {
    title: baseTitle("Stonebridge Summerlin Homes for Sale with a Pool"),
    description:
      "Stonebridge Summerlin homes for sale with a pool may be private pools outside the Heritage gate, or the Heritage community pool. Confirm the listing.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Homes with a Pool",
    url: "/stonebridge-summerlin-homes-with-pool/",
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
        { href: "/homes-with-pool/", label: "Heritage Stonebridge homes for sale with a pool" },
        { href: "/homes-for-sale-stonebridge-summerlin/", label: "Stonebridge Summerlin homes for sale" },
        { href: "/amenities/", label: "Heritage clubhouse pool" },
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage homes for sale" },
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

export const paseosPage: SearchPage = {
  slug: "/paseos-summerlin-homes/",
  metadata: {
    title: baseTitle("Paseos Summerlin Homes for Sale"),
    description:
      "Paseos Summerlin homes for sale are in a different Summerlin neighborhood than Heritage at Stonebridge. Compare both in the MLS with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({ name: "Paseos Summerlin", url: "/paseos-summerlin-homes/" }),
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
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage at Stonebridge homes for sale" },
        { href: "/summerlin-homes/", label: "Summerlin homes for sale" },
        { href: "/homes-for-sale-stonebridge-summerlin/", label: "Stonebridge Summerlin homes for sale" },
        { href: "/homes-for-sale-near/", label: "Homes for sale near Heritage" },
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

export const stonebridgeHospitalityPage: SearchPage = {
  slug: "/stonebridge-hospitality/",
  metadata: {
    title: baseTitle("Stonebridge Hospitality and This Community"),
    description:
      "Stonebridge Hospitality is a hotel company. It is not the Heritage at Stonebridge HOA or the clubhouse in Summerlin 89138.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Hospitality",
    url: "/stonebridge-hospitality/",
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
        { href: "/amenities/", label: "Heritage at Stonebridge clubhouse" },
        { href: "/hoa-fees/", label: "Heritage at Stonebridge HOA" },
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage homes for sale" },
        { href: "/contact/", label: "Contact Dr. Jan Duffy" },
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

export const stonebridgeLasVegasPage: SearchPage = {
  slug: "/stonebridge-las-vegas/",
  metadata: {
    title: baseTitle("Stonebridge Las Vegas"),
    description:
      "Stonebridge Las Vegas is a Summerlin West village in zip 89138. Heritage at Stonebridge is the 55+ community inside it. Dr. Jan Duffy, BHHS Nevada Properties.",
  },
  breadcrumbs: crumbs({ name: "Stonebridge Las Vegas", url: "/stonebridge-las-vegas/" }),
  h1: "Stonebridge Las Vegas",
  subtitle:
    "In this search, Stonebridge is a village in Summerlin West, Las Vegas, Nevada 89138.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "Which Stonebridge this is",
      paragraphs: [
        "Stonebridge Las Vegas, for buyers looking at Summerlin, is the village along the west side of Summerlin. Heritage at Stonebridge sits inside that village. It is the Lennar age-qualified community with the staffed gate and its own clubhouse.",
        "The same word shows up on other places. Stonebridge Hospitality is a hotel company. Stone Bridge Learning Academy is a preschool at 1951 S Rainbow Blvd, Las Vegas, NV 89146. Stonebridge Park is the village park. None of those is the Heritage sales office.",
        `${communityFacts} ${ageRule} ${agentLine}`,
      ],
    },
    {
      type: "links",
      heading: "Stonebridge pages",
      links: [
        { href: "/homes-for-sale-stonebridge-summerlin/", label: "Stonebridge Summerlin homes for sale" },
        { href: "/stonebridge-summerlin-price/", label: "Stonebridge Summerlin price" },
        { href: "/floor-plans/", label: "Stonebridge Summerlin floor plans" },
        { href: "/stonebridge-park/", label: "Stonebridge Park" },
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage homes for sale" },
        { href: "/stonebridge-learning-academy/", label: "Stonebridge Learning Academy" },
        { href: "/stonebridge-hospitality/", label: "Stonebridge Hospitality" },
      ],
    },
  ],
  faqs: [
    {
      question: "Where is Stonebridge in Las Vegas?",
      answer:
        "The Summerlin village is in Summerlin West, zip 89138. Confirm the subdivision on each listing. Other Las Vegas businesses use Stonebridge or Stone Bridge in their names and are not this village.",
    },
  ],
};

export const stonebridgePricePage: SearchPage = {
  slug: "/stonebridge-summerlin-price/",
  metadata: {
    title: baseTitle("Stonebridge Summerlin Price"),
    description:
      "Stonebridge Summerlin price depends on the neighborhood and the plan. Heritage at Stonebridge listings are a separate set from the rest of the village. Confirm on the MLS.",
  },
  breadcrumbs: crumbs({ name: "Stonebridge Summerlin Price", url: "/stonebridge-summerlin-price/" }),
  h1: "Stonebridge Summerlin Price",
  subtitle:
    "There is no single Stonebridge price. Heritage and the other village neighborhoods do not sell as one product.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "How to read a Stonebridge price",
      paragraphs: [
        "A Stonebridge Summerlin price from a portal often blends guard-gated Heritage resales with other builders and other associations. Compare plan, lot, and subdivision before you treat two listings as comps.",
        "This page does not publish a village median or an average. Ask for a current MLS snapshot for the street you are considering.",
        agentLine,
      ],
    },
    {
      type: "links",
      heading: "Related searches",
      links: [
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage Stonebridge homes for sale" },
        { href: "/market-analysis/", label: "Heritage market analysis" },
        { href: "/homes-for-sale-stonebridge-summerlin/", label: "Stonebridge Summerlin homes for sale" },
        { href: "/hoa-fees/", label: "Heritage Stonebridge HOA fees" },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the Stonebridge Summerlin price?",
      answer:
        "It depends on which neighborhood and which plan. Heritage listings commonly need their own comps. Use the live MLS rather than a blended village average.",
    },
  ],
};

export const stonebridgeParkPage: SearchPage = {
  slug: "/stonebridge-park/",
  metadata: {
    title: baseTitle("Stonebridge Park"),
    description:
      "Stonebridge Park is the village park in Stonebridge, Summerlin West, Las Vegas 89138. It is not the Heritage clubhouse. Courts, playground, picnic areas, and trails.",
  },
  breadcrumbs: crumbs({ name: "Stonebridge Park", url: "/stonebridge-park/" }),
  h1: "Stonebridge Park",
  subtitle:
    "This is the Summerlin village park in Stonebridge, on Crossbridge Drive in Las Vegas 89138.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "What the park includes",
      paragraphs: [
        "Stonebridge Park opened in 2021 as the shared park for the Stonebridge village. Published descriptions include lighted soccer fields, a basketball court, pickleball courts, a playground, picnic areas, and a connection to the Summerlin trail system. Posted rules include a 10:30 p.m. closing. Check the sign at the park for the current hours.",
        "The park is not the Heritage at Stonebridge clubhouse. Heritage owners also have a separate clubhouse, pool, spa, and lap pool inside the gate. Park courts are not the same as the Heritage pickleball courts.",
        `${ageRule} ${agentLine}`,
      ],
    },
    {
      type: "links",
      heading: "Related pages",
      links: [
        { href: "/amenities/", label: "Heritage at Stonebridge clubhouse" },
        { href: "/amenities/", label: "Heritage amenities" },
        { href: "/stonebridge-las-vegas/", label: "Stonebridge Las Vegas" },
        { href: "/nearby/", label: "Heritage at Stonebridge in Summerlin" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Stonebridge Park inside Heritage at Stonebridge?",
      answer:
        "No. Stonebridge Park is the village park on Crossbridge Drive. The Heritage clubhouse and its pool are inside the guard-gated community.",
    },
  ],
};

export const stonebridgeLearningAcademyPage: SearchPage = {
  slug: "/stonebridge-learning-academy/",
  metadata: {
    title: baseTitle("Stonebridge Learning Academy"),
    description:
      "Stone Bridge Learning Academy is a preschool at 1951 S Rainbow Blvd, Las Vegas, NV 89146. It is not Heritage at Stonebridge in Summerlin 89138.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Learning Academy",
    url: "/stonebridge-learning-academy/",
  }),
  h1: "Stonebridge Learning Academy",
  subtitle:
    "The school uses the name Stone Bridge Learning Academy. It is in zip 89146, not in the Summerlin village.",
  lastUpdated: "October 2026",
  sections: [
    {
      type: "prose",
      heading: "This search is a school, not the village",
      paragraphs: [
        "Stone Bridge Learning Academy is an early learning program at 1951 S Rainbow Blvd, Las Vegas, NV 89146. Its site, stonebridgelasvegas.com, lists programs for ages six weeks through twelve and the phone 702-935-1792. That number is the school's, not this real estate office.",
        "The school is not inside Heritage at Stonebridge and it is not Stonebridge Park. Homes in the Summerlin village are in zip 89138.",
        `${communityFacts} ${agentLine}`,
      ],
    },
    {
      type: "links",
      heading: "If you meant the village",
      links: [
        { href: "/stonebridge-las-vegas/", label: "Stonebridge Las Vegas" },
        { href: "/stonebridge-park/", label: "Stonebridge Park" },
        { href: "/heritage-at-stonebridge-homes-for-sale/", label: "Heritage homes for sale" },
        { href: "/contact/", label: "Contact Dr. Jan Duffy" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Stonebridge Learning Academy in Heritage at Stonebridge?",
      answer:
        "No. Stone Bridge Learning Academy is at 1951 S Rainbow Blvd, Las Vegas, NV 89146. Heritage at Stonebridge is a 55+ community in Summerlin West, zip 89138.",
    },
  ],
};

export const SEARCH_PAGES: Record<string, SearchPage> = {
  [homesForRentPage.slug]: homesForRentPage,
  [homesForSaleNearPage.slug]: homesForSaleNearPage,
  [zillowPage.slug]: zillowPage,
  [fsboPage.slug]: fsboPage,
  [homesWithPoolPage.slug]: homesWithPoolPage,
  [stonebridgePoolPage.slug]: stonebridgePoolPage,
  [paseosPage.slug]: paseosPage,
  [stonebridgeHospitalityPage.slug]: stonebridgeHospitalityPage,
  [stonebridgeLasVegasPage.slug]: stonebridgeLasVegasPage,
  [stonebridgePricePage.slug]: stonebridgePricePage,
  [stonebridgeParkPage.slug]: stonebridgeParkPage,
  [stonebridgeLearningAcademyPage.slug]: stonebridgeLearningAcademyPage,
};
