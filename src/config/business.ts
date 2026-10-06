/**
 * Google Business Profile NAP — single source of truth.
 * Keep visible text and LocalBusiness JSON-LD in exact lockstep with GBP.
 *
 * Verified 2026-09-27 via the Business Information API for
 * "Heritage Stonebridge | Homes By Dr. Jan Duffy" (place ChIJOdHQ97m_yIARlY1CLNq9RSY).
 * About text, categories, and service area confirmed from the profile on 2026-10-05.
 * Public panel the same night: Real estate agent, Crossbridge Dr, (702) 789-6561,
 * hours that close at 8:00 PM. No opening date, social profiles, or special hours are set.
 * Regular hours are 8:00 AM–8:00 PM all seven days.
 */
export const GBP_BUSINESS_NAME = "Heritage Stonebridge | Homes By Dr. Jan Duffy";

export const GBP_DESCRIPTION =
  "Dr. Jan Duffy has sold Las Vegas homes for 35 years and works Heritage at Stonebridge every week, Lennar's guard-gated 55+ community in Summerlin West (89138). Buying? She knows all nine floor plans, which lots and elevations resell best, and what comparable homes closed for, so your first offer is the right one. Selling? She prices from recent Heritage at Stonebridge sales, holds weekend open houses, and markets your home across her 50+ Las Vegas neighborhood websites and social pages, where Summerlin 55+ buyers are already looking. Expect a reply within the hour and straight answers on HOA fees, resales, and the clubhouse lifestyle. Ready to move into or out of Stonebridge Summerlin? Message or call for a current market snapshot.";

export const business = {
  name: GBP_BUSINESS_NAME,
  alternateName: [
    "Heritage at Stonebridge",
    "Heritage Stonebridge",
    "Homes By Dr. Jan Duffy",
    "Dr. Jan Duffy Real Estate",
  ],
  category: "Real estate agent",
  additionalCategory: "Real estate consultant",
  description: GBP_DESCRIPTION,
  telephone: "+1-702-789-6561",
  telephoneDisplay: "(702) 789-6561",
  telephoneHref: "tel:+17027896561",
  smsHref: "sms:+17027896561",
  email: "DrDuffySells@HeritageStonebridge.com",
  website: "https://heritagestonebridge.com/",
  canonicalUrl: "https://heritagestonebridge.com",
  placeId: "ChIJOdHQ97m_yIARlY1CLNq9RSY",
  license: "S.0197614.LLC",
  broker: "Berkshire Hathaway HomeServices Nevada Properties",
  streetAddress: "Crossbridge Dr",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89138",
  addressCountry: "US",
  addressDisplay: "Crossbridge Dr, Las Vegas, NV 89138",
  geo: {
    latitude: "36.1716",
    longitude: "-115.3384",
  },
  hoursDisplay: "Open daily, 8:00 AM–8:00 PM",
  hoursLines: [
    "Monday: 8:00 AM–8:00 PM",
    "Tuesday: 8:00 AM–8:00 PM",
    "Wednesday: 8:00 AM–8:00 PM",
    "Thursday: 8:00 AM–8:00 PM",
    "Friday: 8:00 AM–8:00 PM",
    "Saturday: 8:00 AM–8:00 PM",
    "Sunday: 8:00 AM–8:00 PM",
  ],
  mapsUrl: "https://maps.google.com/maps?cid=2757819091577376149",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=place_id:ChIJOdHQ97m_yIARlY1CLNq9RSY&output=embed",
  reviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJOdHQ97m_yIARlY1CLNq9RSY",
} as const;

/** Schema.org openingHours string. Matches the seven GBP regular-hour periods. */
export const schemaOpeningHours = "Mo-Su 08:00-20:00";

export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
] as const;

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.streetAddress,
  addressLocality: business.addressLocality,
  addressRegion: business.addressRegion,
  postalCode: business.postalCode,
  addressCountry: business.addressCountry,
} as const;

export const areaServed = [
  {
    "@type": "PostalCode",
    name: "89138",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  {
    "@type": "Place",
    name: "Summerlin West",
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": "https://heritagestonebridge.com/#localbusiness",
  name: business.name,
  alternateName: [...business.alternateName],
  description: business.description,
  url: business.website,
  telephone: business.telephone,
  email: business.email,
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
  image: "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/fc4911a4-7842-470b-a54d-4589039a2a00/tablet",
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
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    recognizedBy: {
      "@type": "Organization",
      name: "Nevada Real Estate Division",
    },
    identifier: business.license,
  },
  parentOrganization: {
    "@type": "Organization",
    name: business.broker,
  },
} as const;

export const LOCAL_BUSINESS_JSON_LD = JSON.stringify(localBusinessJsonLd);
