/**
 * Facts published on https://www.heritageatstonebridge.org/ as of 2026-09-27.
 * The clubhouse address is the HOA building. Dr. Jan Duffy's Google Business
 * Profile address stays in ~/config/business.ts and must not be swapped.
 *
 * Listing address and price are UNKNOWN until the seller's MLS sheet is live.
 */
export const COMMUNITY_SOURCE = "https://www.heritageatstonebridge.org/";
export const COMMUNITY_VERIFIED = "2026-09-27";

export const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

export const community = {
  homes: 421,
  amenityCountLabel: "15+",
  sunnyDaysLabel: "300+",
  clubhouseStreet: "930 Silverfir Ct",
  clubhouseDisplay: "930 Silverfir Ct, Las Vegas, NV 89138",
  clubhousePhoneDisplay: "(725) 204-7908",
  clubhousePhoneHref: "tel:+17252047908",
  clubhouseHours: "Monday–Sunday, 7:00 AM–7:00 PM",
  connectUrl: "https://heritagestonebridge.connectresident.com/",
  recdeskUrl: "https://heritage.recdesk.com",
  quickpassUrl: "https://www.quickpass.us/sign-in/",
  facebookGroupUrl: "https://www.facebook.com/groups/heritageatstonebridgehoa",
} as const;

export function faqJsonLd(questions: ReadonlyArray<{ question: string; answer: string }>) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; item: string }>,
) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  });
}

/** Default social preview image (1200×630 hero). */
export const DEFAULT_OG_IMAGE =
  "https://heritagestonebridge.com/images/heritage-stonebridge-hero.webp";

export const communityAmenities = [
  {
    title: "Heated pools",
    detail: "Pools, a hot tub, and shaded cabanas sit at the clubhouse.",
  },
  {
    title: "Fitness center",
    detail: "Equipment, group classes, and a fitness studio are on site.",
  },
  {
    title: "Grand clubhouse",
    detail: "Lounge, kitchen, and meeting rooms look toward the Strip and Red Rock.",
  },
  {
    title: "Pickleball and bocce",
    detail: "Courts are inside the community, next to the clubhouse.",
  },
  {
    title: "Walking paths",
    detail: "Paths run through desert landscaping with mountain views.",
  },
  {
    title: "Staffed gate",
    detail: "A gatehouse checks visitors. Access is not a shared code.",
  },
] as const;
