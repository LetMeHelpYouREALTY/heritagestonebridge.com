import { GBP_DESCRIPTION, SITE_CONTACT } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";
import {
  HERITAGE_COMMUNITY,
  HERITAGE_FAQS,
} from "@/lib/heritage-stonebridge/data";
import {
  formatBusinessHoursShort,
  openingHoursSpecification,
} from "@/lib/hours";
import { getGbpAggregateRating } from "@/lib/gbp-ratings";
import { organizationId } from "@/lib/entity-ids";
import { absoluteAgentPhotoUrl } from "@/lib/agent-assets";

// Google Business Profile Schema Data — heritagestonebridge.com
// Supports GBP ranking factors: Relevance, Distance, Prominence

const siteUrl = getSiteUrl();

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: SITE_CONTACT.businessName,
  address: {
    ...SITE_CONTACT.address,
  },
  phone: {
    display: SITE_CONTACT.phone.display,
    tel: SITE_CONTACT.phone.tel,
  },
  email: SITE_CONTACT.email,
  url: siteUrl,

  // Business Details
  license: SITE_CONTACT.license,
  priceRange: "$$",

  // Hours - Match GBP exactly
  hours: SITE_CONTACT.hours,

  // Geo coordinates for distance ranking
  geo: SITE_CONTACT.geo,

  serviceAreas: [...SITE_CONTACT.serviceAreas],

  categories: {
    primary: SITE_CONTACT.categories.primary,
    secondary: [SITE_CONTACT.categories.secondary],
  },

  // Services — hyperlocal to Heritage Stonebridge / Summerlin 55+
  services: [
    {
      name: "Heritage at Stonebridge Buyer Representation",
      description:
        "Tours, offers, and negotiation for resale and new-build homes in this guard-gated 55+ community.",
    },
    {
      name: "Heritage at Stonebridge Seller Representation",
      description:
        "Pricing, marketing, and negotiation for listings in Summerlin West 89138.",
    },
    {
      name: "Summerlin 55+ Community Specialist",
      description:
        "Compare Heritage at Stonebridge with Sun City Summerlin, Trilogy, and other active-adult options.",
    },
    {
      name: "Guard-Gated Community Specialist",
      description:
        "Staffed gate access, visitor policies, and lifestyle fit for Heritage buyers.",
    },
    {
      name: "Downsizing Consultation",
      description:
        "Transition from a larger Las Vegas home to maintenance-friendly 55+ living in Summerlin West.",
    },
    {
      name: "Home Valuation / CMA",
      description:
        "Current market snapshot for Heritage at Stonebridge and nearby Summerlin 55+ resales.",
    },
    {
      name: "California Relocation to Las Vegas",
      description:
        "Help out-of-state buyers evaluate Nevada moves and Summerlin West neighborhoods.",
    },
    {
      name: "New Construction Buyer Representation",
      description:
        "Lennar and resale inventory guidance with buyer advocacy through closing.",
    },
    {
      name: "First-Time Buyer Guidance",
      description:
        "Financing overview, inspections, and contract education for 55+ purchasers.",
    },
  ],

  // Only attributes confirmed on the live Google Business Profile.
  attributes: {
    accessibility: [...SITE_CONTACT.accessibility],
  },

  // Social profiles for sameAs schema
  socialProfiles: [
    "https://www.facebook.com/drjanduffy",
    "https://www.instagram.com/drjanduffy",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.youtube.com/@drjanduffy",
    "https://twitter.com/drjanduffy",
  ],

};

/** GBP dashboard description (≤750 characters) + long-form sections for /google-business */
export const gbpShortDescription = GBP_DESCRIPTION;

export const gbpDescription = {
  whoWeAre: `Heritage Stonebridge | Homes By Dr. Jan Duffy is the local real estate office supporting buyers and sellers at Heritage at Stonebridge — Lennar's guard-gated 55+ community in Summerlin West, Las Vegas (${HERITAGE_COMMUNITY.postalCode}).

Dr. Jan Duffy, REALTOR® (License ${SITE_CONTACT.license}) with ${SITE_CONTACT.brokerage}, focuses on active-adult moves: downsizing, Nevada relocation, resale listings, and new-build opportunities inside Heritage's ${HERITAGE_COMMUNITY.homeCount} homes across ${HERITAGE_COMMUNITY.floorPlanCount} floor plans.

Community highlights include ${HERITAGE_COMMUNITY.security.toLowerCase()}, an ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq. ft. clubhouse, resort-style pool, pickleball, and quick access to Downtown Summerlin and Red Rock Canyon.`,

  whatWeDo: `Dr. Jan provides buyer and seller representation, comparative guidance versus larger 55+ options like Sun City Summerlin, HOA and lifestyle education, and pricing based on current MLS data — not pressure.

Search live inventory at ${siteUrl}/homes-for-sale, request a home valuation at ${siteUrl}/home-valuation, or schedule a consultation at ${siteUrl}/contact. Property-search leads flow through RealScout; appointments through Calendly — both connect to Dr. Jan's client follow-up workflow.

Every consultation is education-first: understand guard-gated access, age-restricted rules, monthly HOA context, and which Heritage collection fits your budget before you write an offer.`,

  whereWeServe: `Google Business Profile service area: ${SITE_CONTACT.serviceAreas.join("; ")}.

Office: ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. Hours: ${formatBusinessHoursShort()}.

Call ${SITE_CONTACT.phone.display}, email ${SITE_CONTACT.email}, or visit ${siteUrl} for community guides, floor plans, HOA overview, and side-by-side comparisons with other Summerlin active-adult neighborhoods.`,
};

// FAQ content aligned with site + GBP Q&A tab
export const gbpFAQs = [
  ...HERITAGE_FAQS,
  {
    question: "How does Heritage at Stonebridge compare to Sun City Summerlin?",
    answer:
      "Heritage is smaller (421 homes), Lennar-built, and staff guard-gated. Sun City Summerlin is larger with extensive golf and clubs. Dr. Jan helps you compare lifestyle, HOA, and resale fit — see heritagestonebridge.com/vs-sun-city-summerlin.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer: `Call or text ${SITE_CONTACT.phone.display}, email ${SITE_CONTACT.email}, or book online at ${siteUrl}/contact. Office visits at ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. ${formatBusinessHoursShort()}.`,
  },
  {
    question: "Does Dr. Jan help sellers in Heritage at Stonebridge?",
    answer: `Yes. Dr. Jan lists and markets homes in Heritage and other Summerlin 55+ communities with ${SITE_CONTACT.brokerage}. Visit ${siteUrl}/selling-guide to start.`,
  },
];

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  const aggregate = getGbpAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": organizationId(),
    name: businessInfo.name,
    image: absoluteAgentPhotoUrl(800),
    url: businessInfo.url,
    description: GBP_DESCRIPTION,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    amenityFeature: SITE_CONTACT.accessibility.map((name) => ({
      "@type": "LocationFeatureSpecification" as const,
      name,
      value: true,
    })),
    areaServed: businessInfo.serviceAreas.map((area) => {
      if (area.startsWith("Clark County")) {
        return { "@type": "AdministrativeArea", name: area };
      }
      if (area.includes("Summerlin")) {
        return { "@type": "Place", name: area };
      }
      return { "@type": "City", name: area };
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    ...(aggregate
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregate.ratingValue,
            reviewCount: aggregate.reviewCount,
            bestRating: "5",
          },
        }
      : {}),
    sameAs: businessInfo.socialProfiles,
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
