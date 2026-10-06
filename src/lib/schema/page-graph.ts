import {
  areaServed,
  business,
  openingHoursSpecification,
  postalAddress,
  schemaOpeningHours,
} from "~/config/business";
import { community } from "~/config/community";

/**
 * Schema templates for every page.
 *
 * One edit here updates the graph on the whole site. Page templates pick a
 * WebPage subtype from the URL. The agent, the community, and the linked
 * places stay the same entities (@id) so the graph does not drift.
 *
 * Google, October 2026: LocalBusiness rich results need name and address.
 * RealEstateAgent is the specific type. Do not emit aggregateRating.
 * FAQ rich results were removed in May 2026, so this template does not add
 * FAQPage. Visible Q&A pages keep their own matching FAQ script.
 */

const ORIGIN = "https://heritagestonebridge.com";
const AGENT_ID = `${ORIGIN}/#localbusiness`;
const PERSON_ID = `${ORIGIN}/#dr-jan-duffy`;
const COMMUNITY_ID = `${ORIGIN}/#community`;
const WEBSITE_ID = `${ORIGIN}/#website`;
const LAS_VEGAS_ID = `${ORIGIN}/#las-vegas`;
const NEVADA_ID = `${ORIGIN}/#nevada`;
const SUMMERLIN_ID = `${ORIGIN}/#summerlin`;

const PORTRAIT =
  "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/fc4911a4-7842-470b-a54d-4589039a2a00/tablet";
const CLUBHOUSE =
  "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/34bde918-5f0a-4479-c146-d7914daee500/desktop";

const PLACES = [
  {
    "@type": "City",
    "@id": LAS_VEGAS_ID,
    name: "Las Vegas",
    sameAs: ["https://en.wikipedia.org/wiki/Las_Vegas", "https://www.wikidata.org/wiki/Q23768"],
  },
  {
    "@type": "State",
    "@id": NEVADA_ID,
    name: "Nevada",
    sameAs: ["https://en.wikipedia.org/wiki/Nevada"],
  },
  {
    "@type": "Place",
    "@id": SUMMERLIN_ID,
    name: "Summerlin",
    sameAs: ["https://en.wikipedia.org/wiki/Summerlin,_Nevada"],
    containedInPlace: { "@id": LAS_VEGAS_ID },
  },
];

function pageKind(pathname: string): "ProfilePage" | "ContactPage" | "WebPage" {
  if (pathname.startsWith("/about")) return "ProfilePage";
  if (pathname.startsWith("/contact")) return "ContactPage";
  return "WebPage";
}

function pageName(pathname: string): string {
  if (pathname === "/") return "Heritage at Stonebridge";
  const slug = pathname.split("/").filter(Boolean).pop() ?? "Page";
  return slug
    .split("-")
    .map((word) => (word.length === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
}

function agentNode() {
  return {
    "@type": "RealEstateAgent",
    "@id": AGENT_ID,
    name: business.name,
    alternateName: [...business.alternateName],
    description: business.description,
    url: business.website,
    telephone: business.telephone,
    email: business.email,
    image: PORTRAIT,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.mapsUrl,
    openingHours: schemaOpeningHours,
    openingHoursSpecification,
    areaServed,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair accessible parking lot",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair accessible entrance",
        value: true,
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      identifier: business.license,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.telephone,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: business.telephone,
        contactType: "sales",
        url: business.smsHref,
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: business.broker,
    },
    employee: { "@id": PERSON_ID },
    knowsAbout: { "@id": COMMUNITY_ID },
  };
}

function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Dr. Jan Duffy",
    jobTitle: "Real Estate Agent",
    telephone: business.telephone,
    email: business.email,
    image: PORTRAIT,
    url: `${ORIGIN}/about/`,
    worksFor: { "@id": AGENT_ID },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      identifier: business.license,
    },
  };
}

function communityNode() {
  return {
    "@type": "ApartmentComplex",
    "@id": COMMUNITY_ID,
    name: "Heritage at Stonebridge",
    url: "https://www.heritageatstonebridge.org/",
    description:
      "Lennar's guard-gated 55+ community in Summerlin West. The clubhouse is the HOA building, not the real estate office.",
    telephone: "+1-725-204-7908",
    image: CLUBHOUSE,
    address: {
      "@type": "PostalAddress",
      streetAddress: community.clubhouseStreet,
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89138",
      addressCountry: "US",
    },
    numberOfAccommodationUnits: community.homes,
    containedInPlace: { "@id": SUMMERLIN_ID },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Staffed gate", value: true },
      { "@type": "LocationFeatureSpecification", name: "Swimming pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fitness center", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pickleball court", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bocce court", value: true },
    ],
  };
}

function toCanonicalHref(href: string): string {
  try {
    const url = new URL(href);
    url.protocol = "https:";
    url.hostname = "heritagestonebridge.com";
    url.port = "";
    url.search = "";
    url.hash = "";
    if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
      url.pathname = `${url.pathname}/`;
    }
    return url.href;
  } catch {
    return `${ORIGIN}/`;
  }
}

/** JSON-LD for the current URL. The title is the page's document title, so a copy change updates the graph. */
export function pageSchemaGraph(href: string, pageTitle?: string): string {
  const canonical = toCanonicalHref(href);
  const url = new URL(canonical);
  const pathname = url.pathname;
  const name = pageTitle?.trim() || pageName(pathname);
  const kind = pageKind(pathname);
  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
  ];
  if (pathname !== "/") {
    crumbs.push({ "@type": "ListItem", position: 2, name, item: canonical });
  }

  const webpage: Record<string, unknown> = {
    "@type": kind,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": kind === "ProfilePage" ? PERSON_ID : AGENT_ID },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    primaryImageOfPage: pathname === "/about/" ? PORTRAIT : CLUBHOUSE,
    publisher: { "@id": AGENT_ID },
  };
  if (kind === "ProfilePage") {
    webpage.mainEntity = { "@id": PERSON_ID };
  }
  if (kind === "ContactPage") {
    webpage.mainEntity = { "@id": AGENT_ID };
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${ORIGIN}/`,
        name: business.name,
        publisher: { "@id": AGENT_ID },
      },
      agentNode(),
      personNode(),
      communityNode(),
      ...PLACES,
      webpage,
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: crumbs,
      },
    ],
  };

  return JSON.stringify(graph);
}
