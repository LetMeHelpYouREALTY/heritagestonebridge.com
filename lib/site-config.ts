import { SITE_CONTACT } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

// Site Configuration — heritagestonebridge.com

export const siteConfig = {
  name: "Heritage Stonebridge",
  fullName: SITE_CONTACT.businessName,
  tagline: "Heritage Stonebridge 55+ Real Estate in Summerlin",
  brandLine: SITE_CONTACT.businessName,
  brandName: "Berkshire Hathaway HomeServices",
  shortName: "BHHS",
  url: getSiteUrl(),
  description:
    "Heritage at Stonebridge and Summerlin 55+ active adult homes. Expert guidance from Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
};

export const agentInfo = {
  name: SITE_CONTACT.agentName,
  title: "REALTOR®",
  license: SITE_CONTACT.license,
  phone: SITE_CONTACT.phone.display,
  phoneFormatted: SITE_CONTACT.phone.display,
  phoneTel: SITE_CONTACT.phone.tel,
  email: SITE_CONTACT.email,
  brokerage: SITE_CONTACT.brokerage,
};

export const officeInfo = {
  name: SITE_CONTACT.brokerage,
  address: {
    street: SITE_CONTACT.address.streetAddress,
    city: SITE_CONTACT.address.addressLocality,
    state: SITE_CONTACT.address.addressRegion,
    zip: SITE_CONTACT.address.postalCode,
    full: `${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}`,
  },
  coordinates: {
    lat: SITE_CONTACT.geo.latitude,
    lng: SITE_CONTACT.geo.longitude,
  },
  phone: SITE_CONTACT.phone.display,
  phoneTel: SITE_CONTACT.phone.tel,
};

export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
};
