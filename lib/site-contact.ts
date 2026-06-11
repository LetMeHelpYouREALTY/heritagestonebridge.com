import { getSiteUrl } from "@/lib/site-url";

/**
 * NAP for heritagestonebridge.com ↔ its Google Business Profile.
 * Mirror any GBP dashboard changes here and in visible page copy.
 */
export const SITE_CONTACT = {
  businessName: "Heritage at Stonebridge | Homes by Dr. Jan Duffy",
  agentName: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  phone: {
    display: "(702) 500-1942",
    tel: "+17025001942",
  },
  email: "homes@heritagestonebridge.com",
  address: {
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },
  community: {
    name: "Heritage at Stonebridge",
    locality: "Summerlin",
    region: "NV",
    postalCode: "89134",
  },
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },
  geo: {
    latitude: 36.1941,
    longitude: -115.2678,
  },
  url: getSiteUrl(),
} as const;
