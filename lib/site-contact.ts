import { getSiteUrl } from "@/lib/site-url";

/**
 * NAP for heritagestonebridge.com ↔ its Google Business Profile.
 * Mirror any GBP dashboard changes here and in visible page copy.
 */
export const SITE_CONTACT = {
  businessName: "Heritage Stonebridge | Homes By Dr. Jan Duffy",
  agentName: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  phone: {
    display: "(702) 500-1942",
    tel: "+17025001942",
  },
  email: "DrDuffySells@HeritageStonebridge.com",
  address: {
    streetAddress: "Crossbridge Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89138",
    addressCountry: "US",
  },
  community: {
    name: "Heritage at Stonebridge",
    locality: "Summerlin",
    region: "NV",
    postalCode: "89138",
  },
  hours: {
    monday: "08:00-20:00",
    tuesday: "08:00-20:00",
    wednesday: "08:00-20:00",
    thursday: "08:00-20:00",
    friday: "08:00-20:00",
    saturday: "08:00-20:00",
    sunday: "08:00-20:00",
  },
  geo: {
    latitude: 36.1912,
    longitude: -115.3124,
  },
  url: getSiteUrl(),
} as const;
