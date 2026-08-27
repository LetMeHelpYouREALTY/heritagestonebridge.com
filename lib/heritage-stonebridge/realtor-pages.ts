import type { HeritagePageContent } from "./types";
import { HERITAGE_COMMUNITY } from "./data";
import { HERITAGE_IMAGES } from "./images";
import { SITE_CONTACT } from "@/lib/site-contact";

const baseTitle = (page: string) =>
  `${page} | Heritage at Stonebridge Summerlin | Dr. Jan Duffy`;

function crumbs(...items: { name: string; url: string }[]) {
  return [{ name: "Home", url: "/" }, ...items];
}

/**
 * Realtor pages whose H1–H3 copy is drawn from Parallel Search (Aug 27, 2026)
 * of 55places, neighborhoodsinlasvegas.com, and current MLS listing pages.
 */
export const openHousesPage: HeritagePageContent = {
  slug: "/open-houses",
  metadata: {
    title: baseTitle("Open Houses"),
    description: `Heritage at Stonebridge open houses in Summerlin West 89138. Dr. Jan Duffy hosts private gate tours when public hours are not posted. Call ${SITE_CONTACT.phone.display}.`,
  },
  breadcrumbs: crumbs({ name: "Open Houses", url: "/open-houses" }),
  badge: "Weekend Showings",
  h1: "Heritage at Stonebridge Open Houses",
  subtitle:
    "Staff-gated 55+ showings in Summerlin West — confirm the current weekend list with Dr. Jan Duffy before you drive.",
  heroImage: HERITAGE_IMAGES.openHouses,
  lastUpdated: "August 2026",
  sections: [
    {
      type: "prose",
      heading: "Buying a Home at Heritage at Stonebridge Summerlin NV",
      image: HERITAGE_IMAGES.overview,
      paragraphs: [
        "Heritage at Stonebridge is a Lennar-built, staff-gated 55+ community in Summerlin West (89138). Public open-house hours change with listings — some resales host Saturday windows; others require a private appointment through the guard.",
        `As of a July 28, 2026 MLS snapshot for Heritage at Stonebridge, listing pages showed 8 homes, 82 average days on market, about $450.95 per sq. ft., and a $534,950 median list price. Verify every figure on live MLS before you write an offer.`,
      ],
    },
    {
      type: "checklist",
      heading: "How Gate Tours Work",
      items: [
        {
          title: "Call before you go",
          description: `Text or call ${SITE_CONTACT.phone.display} so the gate has your name and the listing address.`,
        },
        {
          title: "Bring ID",
          description:
            "Staff verifies visitors. A photo ID speeds check-in compared with keypad-only 55+ gates.",
        },
        {
          title: "Tour amenities the same day",
          description:
            "Pair the house with the 8,000 sq. ft. clubhouse, pickleball courts, and lap pool so you judge lifestyle, not just finishes.",
        },
      ],
    },
    {
      type: "links",
      heading: "Related Tools",
      links: [
        { href: "/homes-for-sale", label: "Live MLS Listings" },
        { href: "/contact", label: "Schedule a Private Showing" },
        { href: "/floor-plans", label: "Floor Plan Collections" },
      ],
    },
  ],
  faqs: [
    {
      question: "Are there weekly open houses at Heritage at Stonebridge?",
      answer:
        "It depends on the listing. Some 89138 resales hold weekend hours; others are appointment-only because of the staffed gate. Call Dr. Jan Duffy for this weekend’s list.",
    },
    {
      question: "Can I see the clubhouse during an open house?",
      answer:
        "Yes, when HOA access is arranged. Dr. Jan Duffy typically includes clubhouse, pool, and court walk-throughs with private tours.",
    },
  ],
};

export const reviewsPage: HeritagePageContent = {
  slug: "/reviews",
  metadata: {
    title: baseTitle("Client Reviews"),
    description: `Read Google reviews for Dr. Jan Duffy, Heritage at Stonebridge REALTOR® with ${SITE_CONTACT.brokerage}. Leave a review after your tour or closing.`,
  },
  breadcrumbs: crumbs({ name: "Reviews", url: "/reviews" }),
  badge: "Google Business Reviews",
  h1: "Heritage at Stonebridge Client Reviews",
  subtitle: `What buyers and sellers say about Dr. Jan Duffy’s 55+ work in Summerlin West — then leave a Google review that matches our NAP.`,
  heroImage: HERITAGE_IMAGES.reviews,
  lastUpdated: "August 2026",
  sections: [
    {
      type: "prose",
      heading: "Heritage at Stonebridge Real Estate Agents",
      paragraphs: [
        `Dr. Jan Duffy (License ${SITE_CONTACT.license}) with ${SITE_CONTACT.brokerage} focuses on Heritage at Stonebridge and nearby Summerlin 55+ communities. Reviews should describe the transaction — communication, tours, and paperwork — not protected-class traits of neighbors.`,
        "55places and other directories still show sparse review counts for the community itself. Google Business Profile reviews for the agent are the public record we keep current.",
      ],
    },
    {
      type: "checklist",
      heading: "What Clients Usually Mention",
      items: [
        {
          title: "Gate logistics",
          description:
            "Visitor lists, ID checks, and same-day clubhouse access for out-of-town buyers.",
        },
        {
          title: "Plan matching",
          description:
            "Carson through Everly collections — square footage, garage bays, and Next Gen suites.",
        },
        {
          title: "Offer timing",
          description:
            "Recent 89138 days-on-market and list-price context, verified on MLS before you bid.",
        },
      ],
    },
    {
      type: "links",
      heading: "Leave or Read a Review",
      links: [
        { href: "/google-business", label: "Google Business Profile & Map" },
        { href: "/about", label: "About Dr. Jan Duffy" },
        { href: "/contact", label: "Work With Dr. Jan" },
      ],
    },
  ],
};

export const recentSalesPage: HeritagePageContent = {
  slug: "/recent-sales",
  metadata: {
    title: baseTitle("Recent Sales"),
    description:
      "Recent Heritage at Stonebridge sales context for Summerlin 89138. Request a CMA from Dr. Jan Duffy — figures change with each closing.",
  },
  breadcrumbs: crumbs({ name: "Recent Sales", url: "/recent-sales" }),
  badge: "89138 Closings",
  h1: "Heritage at Stonebridge Recent Sales",
  subtitle:
    "Use solds, not list prices, to price a Lennar 55+ home. Ask for a current comparable market analysis before you list or offer.",
  heroImage: HERITAGE_IMAGES.recentSales,
  lastUpdated: "August 2026",
  sections: [
    {
      type: "stats",
      heading: "July 28, 2026 Listing Snapshot",
      image: HERITAGE_IMAGES.floorPlans,
      stats: [
        { value: "8", label: "Listed (snapshot)" },
        { value: "82", label: "Avg. DOM" },
        { value: "$450.95", label: "Avg. $/Sq.Ft." },
        { value: "$534,950", label: "Med. List Price" },
      ],
    },
    {
      type: "prose",
      heading: "How We Read Heritage Solds",
      paragraphs: [
        "Street names that appear on current listing pages include Tony Willis Ct, Heritage Heights Dr, Allister Fields Ln, Edinburgh Fields Ct, Belleforte Ln, and Regent Terrace Ln — all inside Summerlin Village 24 Parcel FGH / zip 89138. Individual asking prices on those pages ranged from the high $400s to $1.5 million; solds can differ.",
        "A CMA for Heritage should split Cromwell (≈1,232–1,422 sq. ft.), Stirling (≈1,747–2,236 sq. ft.), and Evander (≈2,515–2,873 sq. ft.) plans. Mixing collections distorts price-per-foot.",
        "This page is educational. Request a live MLS solds packet from Dr. Jan Duffy before you set a list price or write an offer.",
      ],
    },
    {
      type: "links",
      heading: "Seller Tools",
      links: [
        { href: "/home-valuation", label: "Request a Home Valuation" },
        { href: "/selling-guide", label: "Selling Guide" },
        { href: "/homes-for-sale", label: "Current Listings" },
      ],
    },
  ],
};

export const pickleballPage: HeritagePageContent = {
  slug: "/pickleball",
  metadata: {
    title: baseTitle("Pickleball Courts"),
    description:
      "Six lighted pickleball courts, bocce, and resort pools at Heritage at Stonebridge — Summerlin West 55+ amenities with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs(
    { name: "Amenities", url: "/amenities" },
    { name: "Pickleball", url: "/pickleball" },
  ),
  badge: "Six Lighted Courts",
  h1: "Pickleball at Heritage at Stonebridge",
  subtitle:
    "Six lighted pickleball courts, three bocce courts, and an 8,000 sq. ft. clubhouse — no mandatory golf HOA.",
  heroImage: HERITAGE_IMAGES.pickleball,
  lastUpdated: "August 2026",
  sections: [
    {
      type: "grid",
      heading: "Outdoor Recreation",
      image: HERITAGE_IMAGES.bocce,
      cards: [
        {
          title: "Pickleball",
          image: HERITAGE_IMAGES.pickleball,
          items: [
            "Six lighted outdoor courts",
            "League and drop-in play per HOA calendar",
            "Night lighting for desert evenings",
          ],
        },
        {
          title: "Bocce",
          image: HERITAGE_IMAGES.bocce,
          items: [
            "Three bocce ball courts",
            "Clubhouse steps from the courts",
            "Picnic area for after-play gatherings",
          ],
        },
        {
          title: "Pools",
          image: HERITAGE_IMAGES.pool,
          items: [
            "Resort-style pool and spa",
            "Heated outdoor lap pool",
            "Clubhouse terrace and firepit",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "Clubhouse Lifestyle",
      image: HERITAGE_IMAGES.clubhouse,
      paragraphs: [
        `The ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq. ft. clubhouse includes a lounge with fireplace, multi-purpose room, showcase kitchen, fitness center, and locker rooms. FirstService Residential manages the HOA.`,
        "Heritage does not carry a private 18-hole course inside the gates. Buyers who want golf typically add pay-as-you-play rounds at nearby Summerlin clubs instead of a golf-tier HOA.",
      ],
    },
  ],
};

export const privacyPolicyPage: HeritagePageContent = {
  slug: "/privacy-policy",
  metadata: {
    title: baseTitle("Privacy Policy"),
    description:
      "Privacy practices for heritagestonebridge.com — how Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties handle form, chat, and CRM data.",
  },
  breadcrumbs: crumbs({ name: "Privacy Policy", url: "/privacy-policy" }),
  h1: "Privacy Policy",
  subtitle: `${SITE_CONTACT.businessName} — Crossbridge Dr, Las Vegas, NV 89138. ${SITE_CONTACT.phone.display}.`,
  includeListings: false,
  lastUpdated: "August 2026",
  sections: [
    {
      type: "prose",
      heading: "Information We Collect",
      paragraphs: [
        "When you submit a form, start a chat, or book Calendly time, we collect the name, email, phone, and message you provide. Property-search activity on RealScout may create a client record that syncs to Follow Up Boss under that platform’s native integration.",
        `NAP for this site: ${SITE_CONTACT.businessName}, ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. Phone ${SITE_CONTACT.phone.display}. Email ${SITE_CONTACT.email}.`,
      ],
    },
    {
      type: "prose",
      heading: "How We Use It",
      paragraphs: [
        "We use contact details to answer inquiries, schedule tours, send listing alerts you request, and complete real-estate transactions. We do not sell your personal information.",
        "Third-party processors may include Follow Up Boss, RealScout, Calendly, Vercel analytics, and email or SMS tools required to deliver the service you asked for.",
      ],
    },
    {
      type: "prose",
      heading: "Your Choices",
      paragraphs: [
        `Email ${SITE_CONTACT.email} or call ${SITE_CONTACT.phone.display} to request a copy, correction, or deletion of CRM records we control, subject to Nevada record-keeping rules for licensed transactions.`,
        "This policy covers heritagestonebridge.com. Other Dr. Jan Duffy domains may publish their own notices.",
      ],
    },
  ],
};

export const fairHousingPage: HeritagePageContent = {
  slug: "/fair-housing",
  metadata: {
    title: baseTitle("Fair Housing"),
    description:
      "Fair Housing notice for Heritage at Stonebridge marketing. Dr. Jan Duffy and BHHS Nevada Properties follow federal and Nevada fair housing law.",
  },
  breadcrumbs: crumbs({ name: "Fair Housing", url: "/fair-housing" }),
  h1: "Fair Housing at Heritage at Stonebridge",
  subtitle:
    "We describe homes, amenities, square footage, and commute times — not people. 55+ occupancy follows HUD age-restricted housing rules.",
  includeListings: false,
  lastUpdated: "August 2026",
  sections: [
    {
      type: "prose",
      heading: "Equal Professional Service",
      paragraphs: [
        `${SITE_CONTACT.brokerage} and Dr. Jan Duffy (License ${SITE_CONTACT.license}) provide equal professional service without regard to race, color, religion, sex, handicap, familial status, national origin, or other classes protected by federal or Nevada law.`,
        "Heritage at Stonebridge is an age-restricted 55+ community. At least one resident must be 55 or better, consistent with HUD guidelines for housing for older persons. That age rule is a housing-program requirement, not a preference about other protected traits.",
      ],
    },
    {
      type: "checklist",
      heading: "How We Write About the Community",
      items: [
        {
          title: "Facts, not proxies",
          description:
            "We cite home counts, plan sizes, HOA scope, pickleball courts, and Downtown Summerlin drive times — not school quality or who “belongs” here.",
        },
        {
          title: "Occupancy documents",
          description:
            "Ask for current CC&Rs and age-verification procedures during due diligence. We do not interpret them as targeting any protected class besides the 55+ program.",
        },
        {
          title: "Report concerns",
          description: `Call ${SITE_CONTACT.phone.display} or email ${SITE_CONTACT.email} if any marketing on this site reads as exclusionary. We will correct it.`,
        },
      ],
    },
  ],
};

export const REALTOR_PAGES: HeritagePageContent[] = [
  openHousesPage,
  reviewsPage,
  recentSalesPage,
  pickleballPage,
  privacyPolicyPage,
  fairHousingPage,
];
