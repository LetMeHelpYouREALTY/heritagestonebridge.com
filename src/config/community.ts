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

/**
 * Community photos. Pages use Cloudflare Images. The same files are backed up in
 * public/images/community/. Uploaded 2026-10-06. requireSignedURLs is false.
 * Use tablet or desktop. Do not use these as stand-ins for MLS listing photos.
 */
const COMMUNITY_IMAGE_HOST = "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ";

export type CommunityImageVariant = "tablet" | "desktop" | "heroxl";

export function communityImage(id: string, variant: CommunityImageVariant = "tablet"): string {
  return `${COMMUNITY_IMAGE_HOST}/${id}/${variant}`;
}

export const communityPhotos = [
  {
    key: "clubhouse-exterior",
    id: "34bde918-5f0a-4479-c146-d7914daee500",
    file: "clubhouse-exterior.jpg",
    alt: "Clubhouse exterior at 930 Silverfir Court, Heritage at Stonebridge",
  },
  {
    key: "clubhouse-lounge",
    id: "840afa30-1f81-4760-6c7e-e28909708500",
    file: "clubhouse-lounge.jpg",
    alt: "Clubhouse lounge with a fireplace at Heritage at Stonebridge",
  },
  {
    key: "clubhouse-seating",
    id: "76da2422-49f7-4a4b-09b3-e994c01a4c00",
    file: "clubhouse-seating.jpg",
    alt: "Lounge seating inside the Heritage at Stonebridge clubhouse",
  },
  {
    key: "clubhouse-kitchen",
    id: "70953d30-bd3a-4e7f-677c-2300c03b2800",
    file: "clubhouse-kitchen.jpg",
    alt: "Kitchen island in the Heritage at Stonebridge clubhouse",
  },
  {
    key: "pool",
    id: "820d7b24-a4ec-418e-7005-b0d8edd46700",
    file: "pool.jpg",
    alt: "Resort pool and cabanas at the Heritage at Stonebridge clubhouse",
  },
  {
    key: "lap-pool",
    id: "41be8b77-eef6-4d98-9d5e-49c8e7b16c00",
    file: "lap-pool.jpg",
    alt: "Lap pool at the Heritage at Stonebridge clubhouse",
  },
  {
    key: "fitness",
    id: "c02b9764-3e69-40fa-a339-afb33d225e00",
    file: "fitness.jpg",
    alt: "Fitness center inside the Heritage at Stonebridge clubhouse",
  },
  {
    key: "pickleball",
    id: "af9e8895-da79-4b45-1cb8-70f4b3ea1400",
    file: "pickleball.jpg",
    alt: "Pickleball court at Heritage at Stonebridge",
  },
  {
    key: "bocce",
    id: "f79de194-d445-4c0f-4325-8df94c979a00",
    file: "bocce.jpg",
    alt: "Bocce court at Heritage at Stonebridge",
  },
  {
    key: "fire-pit",
    id: "1933a079-086a-4947-899c-493591188200",
    file: "fire-pit.jpg",
    alt: "Fire pit and lawn with mountain views at Heritage at Stonebridge",
  },
  {
    key: "gate",
    id: "58a792d0-6a72-4961-4a67-80dd24ece100",
    file: "gate.jpg",
    alt: "Staffed gate at Heritage at Stonebridge",
  },
  {
    key: "home-exterior",
    id: "00578e02-0441-451c-f78c-366f28196200",
    file: "home-exterior.jpg",
    alt: "Heritage at Stonebridge home exterior",
  },
] as const;

export type CommunityPhotoKey = (typeof communityPhotos)[number]["key"];

export function communityPhoto(key: CommunityPhotoKey) {
  const photo = communityPhotos.find((item) => item.key === key);
  if (!photo) {
    throw new Error(`Unknown community photo: ${key}`);
  }
  return photo;
}

/** Clubhouse exterior. Desktop variant, public, no signed URL. */
export const DEFAULT_OG_IMAGE = communityImage(
  "34bde918-5f0a-4479-c146-d7914daee500",
  "desktop",
);

export const communityAmenities = [
  {
    title: "Heated pools",
    detail: "Pools, a hot tub, and shaded cabanas sit at the clubhouse.",
    photo: "pool",
  },
  {
    title: "Fitness center",
    detail: "Equipment, group classes, and a fitness studio are on site.",
    photo: "fitness",
  },
  {
    title: "Grand clubhouse",
    detail: "Lounge, kitchen, and meeting rooms look toward the Strip and Red Rock.",
    photo: "clubhouse-exterior",
  },
  {
    title: "Pickleball and bocce",
    detail: "Courts are inside the community, next to the clubhouse.",
    photo: "pickleball",
  },
  {
    title: "Walking paths",
    detail: "Paths run through desert landscaping with mountain views.",
    photo: undefined,
  },
  {
    title: "Staffed gate",
    detail: "A gatehouse checks visitors. Access is not a shared code.",
    photo: "gate",
  },
] as const;
