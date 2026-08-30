/**
 * Schema.org Structured Data Generators for heritagestonebridge.com
 * Following Google Search Central structured data guidelines (2026).
 * JSON-LD, visible-content parity, most specific type, crawlable images.
 *
 * @see https://schema.org
 * @see https://developers.google.com/search/docs/appearance/structured-data
 * @see https://developers.google.com/search/docs/appearance/structured-data/sd-policies
 */

import { SITE_CONTACT } from "@/lib/site-contact";
import { siteConfig, agentInfo, officeInfo } from "./site-config";
import { openingHoursSpecification } from "./hours";
import { getGbpAggregateRating } from "./gbp-ratings";
import { absoluteAgentPhotoUrl } from "@/lib/agent-assets";
import { absolutePublicImageUrl } from "@/lib/cloudflare-images";
import { organizationId, heritageCommunityId } from "./entity-ids";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";

// ============================================================================
// Types
// ============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export interface NeighborhoodData {
  name: string;
  slug: string;
  description: string;
  medianPrice?: string;
  latitude?: number;
  longitude?: number;
  containedIn?: string;
}

export interface CommunityAmenity {
  name: string;
  description?: string;
}

export interface SeniorCommunityData {
  name: string;
  description: string;
  priceRange: string;
  numberOfHomes: number;
  yearBuilt?: string;
  amenities: CommunityAmenity[];
  latitude?: number;
  longitude?: number;
  hoaFees?: string;
  ageRestriction?: string;
}

// ============================================================================
// Constants
// ============================================================================

const BASE_URL = siteConfig.url;

// Social media profiles (to be updated with actual URLs)
export const socialProfiles = {
  facebook: "https://www.facebook.com/drjanduffy",
  instagram: "https://www.instagram.com/drjanduffy",
  linkedin: "https://www.linkedin.com/in/drjanduffy",
  tiktok: "https://www.tiktok.com/@drjanduffy",
  youtube: "https://www.youtube.com/@drjanduffy",
};

// ============================================================================
// Core Schema Generators
// ============================================================================

/**
 * Generate RealEstateAgent schema (LocalBusiness subtype)
 * Used site-wide in the root layout
 */
export function generateRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": organizationId(),
    name: SITE_CONTACT.businessName,
    alternateName: [
      "Heritage Stonebridge",
      "Heritage at Stonebridge",
      SITE_CONTACT.brokerage,
      "Berkshire Hathaway HomeServices",
    ],
    url: BASE_URL,
    logo: absoluteAgentPhotoUrl(800),
    image: absoluteAgentPhotoUrl(800),
    description: siteConfig.description,
    telephone: agentInfo.phoneTel,
    email: agentInfo.email,
    priceRange: "$385K - $10M+",
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: officeInfo.coordinates.lat,
      longitude: officeInfo.coordinates.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
      },
      {
        "@type": "City",
        name: "Henderson",
        sameAs: "https://en.wikipedia.org/wiki/Henderson,_Nevada",
      },
      {
        "@type": "Place",
        name: "Summerlin",
      },
      {
        "@type": "City",
        name: "North Las Vegas",
      },
      {
        "@type": "Place",
        name: "Green Valley",
      },
    ],
    openingHoursSpecification: openingHoursSpecification(),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      validIn: {
        "@type": "State",
        name: "Nevada",
      },
      identifier: agentInfo.license,
    },
    sameAs: Object.values(socialProfiles),
    knowsAbout: [
      { "@id": heritageCommunityId() },
      "Heritage at Stonebridge",
      "Summerlin West",
      "55+ active adult communities",
      "Las Vegas real estate",
      "Henderson homes",
      "Luxury homes",
      "New construction",
    ],
    parentOrganization: {
      "@type": "Organization",
      "@id": `${BASE_URL}#parent-organization`,
      name: "Berkshire Hathaway HomeServices Nevada Properties",
      url: "https://www.bfrre.com",
      parentOrganization: {
        "@type": "Organization",
        name: "Berkshire Hathaway HomeServices",
        url: "https://www.bhhs.com",
        sameAs: "https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices",
      },
    },
    ...(getGbpAggregateRating()
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: getGbpAggregateRating()!.ratingValue,
            reviewCount: getGbpAggregateRating()!.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
    slogan: "Your Berkshire Hathaway HomeServices expert in Las Vegas",
  };
}

/**
 * Generate Organization schema for BHHS brand
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}#parent-organization`,
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://www.bfrre.com",
    logo: `${BASE_URL}/favicon-32x32.png`,
    parentOrganization: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices",
      url: "https://www.bhhs.com",
      sameAs: [
        "https://en.wikipedia.org/wiki/Berkshire_Hathaway_HomeServices",
        "https://www.linkedin.com/company/berkshire-hathaway-homeservices/",
      ],
    },
  };
}

// ============================================================================
// Navigation Schema Generators
// ============================================================================

/**
 * Generate BreadcrumbList schema for navigation trails
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}#website`,
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
    publisher: {
      "@id": organizationId(),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/homes-for-sale?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================================
// Content Schema Generators
// ============================================================================

/**
 * ImageObject for crawlable, page-relevant photos (Google image guidelines).
 * URLs must be indexable; alt/caption must match visible content.
 * @see https://developers.google.com/search/docs/appearance/structured-data/sd-policies#images
 */
export function generateImageObjectSchema(image: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  const absolute = absolutePublicImageUrl(image.url, image.width ?? 1200);
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${absolute}#image`,
    url: absolute,
    contentUrl: absolute,
    caption: image.caption,
    name: image.caption,
    ...(image.width ? { width: image.width } : {}),
    ...(image.height ? { height: image.height } : {}),
    representativeOfPage: true,
  };
}

export function generateItemListSchema(list: {
  name: string;
  description?: string;
  items: { name: string; description: string; url?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: list.name,
    ...(list.description ? { description: list.description } : {}),
    numberOfItems: list.items.length,
    itemListElement: list.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      ...(item.url
        ? {
            url: item.url.startsWith("http")
              ? item.url
              : `${BASE_URL}${item.url}`,
          }
        : {}),
    })),
  };
}

/**
 * FAQPage markup for visible Q&A. Google Search Central: as of May 7, 2026
 * FAQ rich results no longer appear in Google Search. Markup remains valid
 * schema.org and is kept only when the same questions are visible on the page
 * (parity rule) so answer engines can parse the Q&A.
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 * @see https://developers.google.com/search/docs/appearance/structured-data/sd-policies
 */
export function generateFAQSchema(faqs: FAQItem[]) {
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

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating = 5,
  worstRating = 1,
) {
  return {
    "@type": "AggregateRating",
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: bestRating.toString(),
    worstRating: worstRating.toString(),
  };
}

/**
 * Generate Review schema for individual testimonials
 */
export function generateReviewSchema(reviews: ReviewItem[]) {
  const aggregate = getGbpAggregateRating();

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": organizationId(),
    name: SITE_CONTACT.businessName,
    ...(aggregate
      ? {
          aggregateRating: generateAggregateRatingSchema(
            Number.parseFloat(aggregate.ratingValue),
            Number.parseInt(aggregate.reviewCount, 10),
          ),
        }
      : {}),
    review: reviews.map((review) => ({
      "@type": "Review",
      itemReviewed: {
        "@type": "RealEstateAgent",
        "@id": organizationId(),
        name: SITE_CONTACT.businessName,
      },
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
      datePublished:
        review.datePublished || new Date().toISOString().split("T")[0],
    })),
  };
}

// ============================================================================
// Location Schema Generators
// ============================================================================

/**
 * Generate Place schema for neighborhoods
 */
export function generateNeighborhoodSchema(neighborhood: NeighborhoodData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${BASE_URL}/neighborhoods/${neighborhood.slug}#place`,
    name: `${neighborhood.name}, Las Vegas`,
    description: neighborhood.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: neighborhood.containedIn || "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  };

  if (neighborhood.latitude && neighborhood.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: neighborhood.latitude,
      longitude: neighborhood.longitude,
    };
  }

  if (neighborhood.containedIn) {
    schema.containedInPlace = {
      "@type": "City",
      name: neighborhood.containedIn,
      addressRegion: "NV",
    };
  }

  return schema;
}

/**
 * Generate Residence schema for 55+ communities
 * Uses ResidentialComplex with amenityFeature
 */
export function generateSeniorCommunitySchema(community: SeniorCommunityData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name: community.name,
    description: community.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    numberOfAccommodationUnits: community.numberOfHomes,
  };

  if (community.latitude && community.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: community.latitude,
      longitude: community.longitude,
    };
  }

  if (community.yearBuilt) {
    schema.yearBuilt = community.yearBuilt;
  }

  // Add amenity features
  if (community.amenities.length > 0) {
    schema.amenityFeature = community.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.name,
      value: true,
      ...(amenity.description && { description: amenity.description }),
    }));
  }

  // Add price range as offers
  if (community.priceRange) {
    schema.additionalProperty = [
      {
        "@type": "PropertyValue",
        name: "Price Range",
        value: community.priceRange,
      },
      {
        "@type": "PropertyValue",
        name: "Age Restriction",
        value: community.ageRestriction || "55+",
      },
    ];

    if (community.hoaFees) {
      (schema.additionalProperty as Array<Record<string, unknown>>).push({
        "@type": "PropertyValue",
        name: "HOA Fees",
        value: community.hoaFees,
      });
    }
  }

  return schema;
}

/**
 * Generate RealEstateListing schema for property pages
 */
export function generateRealEstateListingSchema(listing: {
  name: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  images?: string[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: listing.name,
    description: listing.description,
    url: listing.url.startsWith("http")
      ? listing.url
      : `${BASE_URL}${listing.url}`,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address.street,
      addressLocality: listing.address.city,
      addressRegion: listing.address.state,
      postalCode: listing.address.zip,
      addressCountry: "US",
    },
    ...(listing.bedrooms && { numberOfBedrooms: listing.bedrooms }),
    ...(listing.bathrooms && { numberOfBathroomsTotal: listing.bathrooms }),
    ...(listing.sqft && {
      floorSize: {
        "@type": "QuantitativeValue",
        value: listing.sqft,
        unitCode: "FTK",
      },
    }),
    ...(listing.images &&
      listing.images.length > 0 && {
        image: listing.images.map((img) =>
          img.startsWith("http") ? img : `${BASE_URL}${img}`,
        ),
      }),
  };
}

// ============================================================================
// Page-Specific Schema Generators
// ============================================================================

/**
 * Generate Service schema for services pages
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url.startsWith("http")
      ? service.url
      : `${BASE_URL}${service.url}`,
    provider: {
      "@id": organizationId(),
    },
    areaServed: service.areaServed || [
      "Las Vegas",
      "Henderson",
      "Summerlin",
      "North Las Vegas",
    ],
    serviceType: "Real Estate Services",
  };
}

/**
 * Generate WebPage schema
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  primaryImage?: { url: string; caption: string };
  /** Entity this page is primarily about (community Place, agent, etc.). */
  aboutId?: string;
}) {
  const url = page.url.startsWith("http") ? page.url : `${BASE_URL}${page.url}`;
  const image = page.primaryImage
    ? generateImageObjectSchema(page.primaryImage)
    : undefined;
  const { "@context": _ctx, ...imageNode } = image ?? {};

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: page.name,
    description: page.description,
    url,
    isPartOf: {
      "@id": `${BASE_URL}#website`,
    },
    about: {
      "@id": page.aboutId ?? organizationId(),
    },
    ...(image
      ? {
          primaryImageOfPage: { "@id": image["@id"] },
          image: imageNode,
        }
      : {}),
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    inLanguage: "en-US",
  };
}

/**
 * Place + ResidentialComplex for Heritage at Stonebridge.
 * Google Search Central (2026): JSON-LD, visible content only, consistent NAP.
 * There is no dedicated 55+ community rich result — this entity markup supports
 * local understanding and AI citation without inventing unsupported types.
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */
export function generateHeritageCommunitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Place", "ResidentialComplex"],
    "@id": heritageCommunityId(),
    name: HERITAGE_COMMUNITY.name,
    alternateName: HERITAGE_COMMUNITY.shortName,
    description: `${HERITAGE_COMMUNITY.name} is a Lennar-built, staff guard-gated 55+ community of ${HERITAGE_COMMUNITY.homeCount} single-story homes in ${HERITAGE_COMMUNITY.masterPlan}, Las Vegas, NV ${HERITAGE_COMMUNITY.postalCode}.`,
    url: `${BASE_URL}/community`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONTACT.address.streetAddress,
      addressLocality: HERITAGE_COMMUNITY.city,
      addressRegion: HERITAGE_COMMUNITY.region,
      postalCode: HERITAGE_COMMUNITY.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HERITAGE_COMMUNITY.geo.latitude,
      longitude: HERITAGE_COMMUNITY.geo.longitude,
    },
    containedInPlace: {
      "@type": "Place",
      name: HERITAGE_COMMUNITY.masterPlan,
      address: {
        "@type": "PostalAddress",
        addressLocality: HERITAGE_COMMUNITY.city,
        addressRegion: HERITAGE_COMMUNITY.region,
        postalCode: HERITAGE_COMMUNITY.postalCode,
        addressCountry: "US",
      },
    },
    numberOfAccommodationUnits: HERITAGE_COMMUNITY.homeCount,
    yearBuilt: String(HERITAGE_COMMUNITY.yearStarted),
    amenityFeature: HERITAGE_COMMUNITY.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Builder",
        value: HERITAGE_COMMUNITY.builder,
      },
      {
        "@type": "PropertyValue",
        name: "Age restriction",
        value: "55+",
      },
      {
        "@type": "PropertyValue",
        name: "Access",
        value: HERITAGE_COMMUNITY.security,
      },
      {
        "@type": "PropertyValue",
        name: "Home size range",
        value: `${HERITAGE_COMMUNITY.sqFtRange} sq. ft.`,
      },
    ],
    image: absolutePublicImageUrl("/images/hero/heritage-stonebridge.webp", 1920),
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Combine multiple schemas into a single JSON-LD script
 */
export function combineSchemas(...schemas: Record<string, unknown>[]) {
  if (schemas.length === 1) {
    return schemas[0];
  }
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((schema) => {
      // Remove @context from individual schemas when combining
      const { "@context": _, ...rest } = schema;
      return rest;
    }),
  };
}

/**
 * Convert schema object to JSON-LD string
 */
export function schemaToJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
