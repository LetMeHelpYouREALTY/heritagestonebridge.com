import { getSiteUrl } from "@/lib/site-url";

/**
 * NAP for heritagestonebridge.com. Must match the Google Business Profile
 * exactly: name, Crossbridge Dr, (702) 789-6561, and the posted hours.
 */
export const GBP_DESCRIPTION =
  "Dr. Jan Duffy has sold Las Vegas homes for 35 years and works Heritage at Stonebridge every week, Lennar's guard-gated 55+ community in Summerlin West (89138). Buying? She knows all nine floor plans, which lots and elevations resell best, and what comparable homes closed for, so your first offer is the right one. Selling? She prices from recent Heritage at Stonebridge sales, holds weekend open houses, and markets your home across her 50+ Las Vegas neighborhood websites and social pages, where Summerlin 55+ buyers are already looking. Expect a reply within the hour and straight answers on HOA fees, resales, and the clubhouse lifestyle. Ready to move into or out of Stonebridge Summerlin? Message or call for a current market snapshot.";

export const SITE_CONTACT = {
  businessName: "Heritage Stonebridge | Homes By Dr. Jan Duffy",
  agentName: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  phone: {
    display: "(702) 789-6561",
    tel: "+17027896561",
    sms: "sms:+17027896561",
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
  /** 24-hour ranges. Sunday is Closed on the Google Business Profile. */
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:30",
    sunday: "Closed",
  },
  serviceAreas: ["Las Vegas, NV 89138", "Summerlin West, Las Vegas, NV"],
  categories: {
    primary: "Real estate agent",
    secondary: "Real estate consultant",
  },
  accessibility: [
    "Wheelchair accessible parking lot",
    "Wheelchair accessible entrance",
  ],
  geo: {
    latitude: 36.1912,
    longitude: -115.3124,
  },
  url: getSiteUrl(),
} as const;
