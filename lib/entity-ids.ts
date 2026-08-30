import { getSiteUrl } from "@/lib/site-url";

export function organizationId(): string {
  return `${getSiteUrl()}/#organization`;
}

/** Stable @id for the Heritage at Stonebridge Place / ResidentialComplex entity. */
export function heritageCommunityId(): string {
  return `${getSiteUrl()}/community#heritage-at-stonebridge`;
}
