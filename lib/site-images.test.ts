import { describe, expect, it } from "vitest";
import {
  BEST_HERO_IMAGE,
  getCardImageForHeading,
  getHeroImageForHeading,
  getNeighborhoodImage,
  getSectionImageForHeading,
  SITE_IMAGES,
} from "@/lib/site-images";

describe("site-images heading matcher", () => {
  it("uses the Heritage photograph as the best homepage hero", () => {
    expect(BEST_HERO_IMAGE.src).toBe("/images/hero/hero-heritage-stonebridge.webp");
    expect(getHeroImageForHeading("Heritage at Stonebridge — Guard-Gated 55+ Summerlin").src).toBe(
      BEST_HERO_IMAGE.src,
    );
  });

  it("matches section headings to amenity and location photos", () => {
    expect(getSectionImageForHeading("Guard-Gated Living at Heritage")?.src).toBe(
      SITE_IMAGES.guardGate.src,
    );
    expect(getSectionImageForHeading("Clubhouse & Wellness")?.src).toBe(SITE_IMAGES.clubhouse.src);
    expect(getSectionImageForHeading("Nearby Landmarks")?.src).toBe(SITE_IMAGES.downtown.src);
    expect(getCardImageForHeading("Pickleball Courts").src).toBe(SITE_IMAGES.pickleball.src);
  });

  it("maps neighborhood names to local photography", () => {
    expect(getNeighborhoodImage("The Ridges").src).toBe(SITE_IMAGES.ridges.src);
    expect(getNeighborhoodImage("Henderson").src).toBe(SITE_IMAGES.henderson.src);
    expect(getNeighborhoodImage("Skye Canyon").src).toBe(SITE_IMAGES.northwest.src);
  });
});
