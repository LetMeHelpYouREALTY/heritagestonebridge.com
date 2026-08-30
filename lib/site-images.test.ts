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
    expect(BEST_HERO_IMAGE.src).toBe(
      "/images/hero/hero-heritage-stonebridge.webp",
    );
    expect(
      getHeroImageForHeading(
        "Heritage at Stonebridge — Guard-Gated 55+ Summerlin",
      ).src,
    ).toBe(BEST_HERO_IMAGE.src);
  });

  it("matches section headings to amenity and location photos", () => {
    expect(
      getSectionImageForHeading("Guard-Gated Living at Heritage")?.src,
    ).toBe(SITE_IMAGES.guardGate.src);
    expect(getSectionImageForHeading("Clubhouse & Wellness")?.src).toBe(
      SITE_IMAGES.clubhouse.src,
    );
    expect(getSectionImageForHeading("Nearby Landmarks")?.src).toBe(
      SITE_IMAGES.downtown.src,
    );
    expect(getCardImageForHeading("Pickleball Courts").src).toBe(
      SITE_IMAGES.pickleball.src,
    );
  });

  it("maps 55+ hub headings to the lifestyle pool hero, not dusk pickleball", () => {
    expect(
      getHeroImageForHeading("Find Your Perfect 55+ Community in Las Vegas")
        .src,
    ).toBe(SITE_IMAGES.heroLifestyle.src);
    expect(getHeroImageForHeading("Sun City Summerlin Homes").src).toBe(
      SITE_IMAGES.heroLifestyle.src,
    );
  });

  it("builds SEO alts from the H1/H2 heading plus the scene description", () => {
    const image = getHeroImageForHeading("What's Your Las Vegas Home Worth?");
    expect(image.src).toBe(SITE_IMAGES.valuation.src);
    expect(image.alt).toMatch(/What's Your Las Vegas Home Worth/i);
    expect(image.alt).toMatch(/Summerlin/i);
  });

  it("gives Inspirada and Green Valley their own neighborhood photographs", () => {
    expect(getNeighborhoodImage("Inspirada").src).toBe(
      SITE_IMAGES.inspirada.src,
    );
    expect(getNeighborhoodImage("Green Valley").src).toBe(
      SITE_IMAGES.greenValley.src,
    );
  });

  it("maps neighborhood names to local photography", () => {
    expect(getNeighborhoodImage("The Ridges").src).toBe(SITE_IMAGES.ridges.src);
    expect(getNeighborhoodImage("Henderson").src).toBe(
      SITE_IMAGES.henderson.src,
    );
    expect(getNeighborhoodImage("Skye Canyon").src).toBe(
      SITE_IMAGES.northwest.src,
    );
  });
});
