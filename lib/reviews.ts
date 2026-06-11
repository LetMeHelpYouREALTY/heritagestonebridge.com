import { SITE_CONTACT } from "@/lib/site-contact";

/** Matches this site's Google Business Profile for Maps search fallback. */
export const CANONICAL_NAP = {
  name: SITE_CONTACT.businessName,
  streetAddress: SITE_CONTACT.address.streetAddress,
  addressLocality: SITE_CONTACT.address.addressLocality,
  addressRegion: SITE_CONTACT.address.addressRegion,
  postalCode: SITE_CONTACT.address.postalCode,
  phone: SITE_CONTACT.phone.display,
} as const;

function encodeMapsQuery(): string {
  const { name, streetAddress, addressLocality, addressRegion, postalCode } =
    CANONICAL_NAP;
  return encodeURIComponent(
    `${name} ${streetAddress} ${addressLocality} ${addressRegion} ${postalCode}`,
  );
}

export function reviewsDisabled(): boolean {
  return process.env.NEXT_PUBLIC_GBP_REVIEWS_DISABLED === "true";
}

export function buildMapsSearchUrl(): string {
  const placeId = process.env.NEXT_PUBLIC_GBP_PLACE_ID;
  if (placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CANONICAL_NAP.name)}&query_place_id=${placeId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeMapsQuery()}`;
}

export function buildDirectionsUrl(): string {
  const placeId = process.env.NEXT_PUBLIC_GBP_PLACE_ID;
  if (placeId) {
    return `https://www.google.com/maps/dir/?api=1&destination_place_id=${placeId}`;
  }
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    CANONICAL_NAP;
  const destination = encodeURIComponent(
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function buildReviewsUrl(): string {
  return buildMapsSearchUrl();
}

export function buildWriteReviewUrl(): string {
  const writeReviewUrl = process.env.NEXT_PUBLIC_GBP_WRITEREVIEW_URL;
  if (writeReviewUrl) {
    return writeReviewUrl;
  }
  const placeId = process.env.NEXT_PUBLIC_GBP_PLACE_ID;
  if (placeId) {
    return `https://search.google.com/local/writereview?placeid=${placeId}`;
  }
  return buildMapsSearchUrl();
}

export function buildMapsEmbedUrl(): string {
  const placeId = process.env.NEXT_PUBLIC_GBP_PLACE_ID;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (placeId && apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;
  }

  const { streetAddress, addressLocality, addressRegion, postalCode } =
    CANONICAL_NAP;
  const q = encodeURIComponent(
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`,
  );
  return `https://maps.google.com/maps?q=${q}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
