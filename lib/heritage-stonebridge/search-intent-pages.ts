import type { HeritagePageContent } from "./types";
import { HERITAGE_COMMUNITY } from "./data";
import { SITE_CONTACT } from "@/lib/site-contact";
import { formatBusinessHoursShort } from "@/lib/hours";
import { buildMapsSearchUrl } from "@/lib/reviews";

function crumbs(...items: { name: string; url: string }[]) {
  return [{ name: "Home", url: "/" }, ...items];
}

export const reviewsPage: HeritagePageContent = {
  slug: "/reviews",
  metadata: {
    title: "Heritage Stonebridge Reviews | Dr. Jan Duffy",
    description: `Heritage Stonebridge reviews are the Google reviews for ${SITE_CONTACT.businessName}, Crossbridge Dr, Las Vegas, NV 89138. Call ${SITE_CONTACT.phone.display}.`,
  },
  breadcrumbs: crumbs({ name: "Reviews", url: "/reviews" }),
  badge: "Google Business Profile",
  h1: "Heritage Stonebridge Reviews",
  subtitle: `Read Google reviews for ${SITE_CONTACT.businessName}. This page does not publish made-up stars or quotes.`,
  lastUpdated: "September 2026",
  sections: [
    {
      type: "prose",
      heading: "Where the reviews live",
      paragraphs: [
        `Heritage Stonebridge reviews belong on the Google Business Profile for ${SITE_CONTACT.businessName}. The listing phone is ${SITE_CONTACT.phone.display}. The address is ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}.`,
        "Buyers usually ask about the staffed gate, the nine Lennar floor plans, HOA dues, and how offers are priced from recent Heritage closings. Those answers are on this site. The star rating is whatever Google shows today.",
      ],
    },
    {
      type: "links",
      heading: "Open the Google listing",
      links: [
        { href: buildMapsSearchUrl(), label: "Heritage Stonebridge on Google" },
        { href: "/google-business", label: "Business profile on this site" },
        { href: "/contact", label: "Contact Dr. Jan Duffy" },
      ],
    },
  ],
  faqs: [
    {
      question: "Does this website host Heritage Stonebridge reviews?",
      answer:
        "No. The reviews are on Google. This page points to that listing so the name, address, and phone stay the same in both places.",
    },
    {
      question: "Who is the agent on the Heritage Stonebridge listing?",
      answer: `${SITE_CONTACT.agentName}, license ${SITE_CONTACT.license}, ${SITE_CONTACT.brokerage}. Hours: ${formatBusinessHoursShort()}.`,
    },
  ],
};

export const homesForRentPage: HeritagePageContent = {
  slug: "/homes-for-rent",
  metadata: {
    title: "Heritage Stonebridge Homes for Rent | Summerlin 89138",
    description: `Heritage Stonebridge for rent means an owner lease inside the guard-gated 55+ community, not a builder rental program. Call ${SITE_CONTACT.phone.display} for current availability.`,
  },
  breadcrumbs: crumbs({ name: "Homes for Rent", url: "/homes-for-rent" }),
  badge: "Summerlin West 89138",
  h1: "Heritage Stonebridge Homes for Rent",
  subtitle:
    "Heritage Stonebridge for rent is an owner lease in Lennar’s guard-gated 55+ community. This site does not list a live rental inventory.",
  lastUpdated: "September 2026",
  sections: [
    {
      type: "prose",
      heading: "Heritage Stonebridge for rent",
      paragraphs: [
        `${HERITAGE_COMMUNITY.name} is an ownership neighborhood: ${HERITAGE_COMMUNITY.homeCount} single-family homes in Summerlin West, zip ${HERITAGE_COMMUNITY.postalCode}. Most people searching “Heritage Stonebridge for rent” or “Heritage Stonebridge homes for rent” want a lease, not a resale.`,
        "The May 2026 Heritage at Stonebridge clubhouse rules treat a tenant who occupies a home under a written lease on file with the HOA as a resident for amenity use, not as a guest. That is an amenity rule, not a promise that a specific home is for rent today.",
        `Minimum lease length and any rental cap are in the CC&Rs. Confirm those documents before you plan a short stay. Call ${SITE_CONTACT.phone.display} for homes owners are offering to lease right now.`,
      ],
    },
    {
      type: "links",
      heading: "If you want to buy instead",
      links: [
        { href: "/homes-for-sale", label: "Heritage Stonebridge homes for sale" },
        { href: "/hoa-fees", label: "Heritage at Stonebridge HOA" },
        { href: "/floor-plans", label: "Heritage Stonebridge floor plans" },
        { href: "/contact", label: "Ask about a current lease" },
      ],
    },
  ],
  faqs: [
    {
      question: "Does Heritage Stonebridge have homes for rent?",
      answer: `Sometimes an owner leases a home. There is no builder rental inventory on this site. Call ${SITE_CONTACT.phone.display} and ask what is available in 89138.`,
    },
    {
      question: "Can a renter use the Heritage clubhouse?",
      answer:
        "The May 2026 clubhouse rules say a tenant with a written lease on file with the HOA is not a guest for amenity use. The lease still has to satisfy the governing documents.",
    },
  ],
};

export const stonebridgeLasVegasPage: HeritagePageContent = {
  slug: "/stonebridge-las-vegas",
  metadata: {
    title: "Stonebridge Las Vegas | Heritage at Stonebridge 89138",
    description:
      "Stonebridge Las Vegas is the Summerlin West village that contains Heritage at Stonebridge, a guard-gated Lennar 55+ neighborhood on Crossbridge Dr, NV 89138.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Las Vegas",
    url: "/stonebridge-las-vegas",
  }),
  badge: "Summerlin West",
  h1: "Stonebridge Las Vegas",
  subtitle:
    "Stonebridge Las Vegas is a Summerlin West village in zip 89138. Heritage at Stonebridge is the Lennar 55+ neighborhood inside it.",
  lastUpdated: "September 2026",
  heroImage: "/images/neighborhoods/heritage-summerlin-west.webp",
  heroImageAlt:
    "Stonebridge village in Summerlin West Las Vegas 89138 with Heritage at Stonebridge rooftops and Red Rock Canyon",
  sections: [
    {
      type: "prose",
      heading: "Which Stonebridge is this?",
      paragraphs: [
        "People searching Stonebridge Las Vegas usually mean the Summerlin West village next to Red Rock Canyon, not a different Stonebridge in another city. Heritage at Stonebridge sits inside that village.",
        `The Google Business Profile for ${SITE_CONTACT.businessName} lists ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. Homes inside the gates use their own street names.`,
      ],
    },
    {
      type: "links",
      heading: "Related searches",
      links: [
        {
          href: "/community",
          label: "Heritage at Stonebridge Summerlin",
        },
        { href: "/stonebridge-village", label: "Stonebridge village guide" },
        { href: "/homes-for-sale", label: "Heritage Stonebridge homes for sale" },
        { href: "/crossbridge-drive", label: "Crossbridge Drive address" },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Stonebridge Las Vegas the same as Heritage at Stonebridge?",
      answer:
        "Stonebridge is the Summerlin village. Heritage at Stonebridge is the guard-gated 55+ Lennar neighborhood inside that village, in Las Vegas 89138.",
    },
  ],
};
