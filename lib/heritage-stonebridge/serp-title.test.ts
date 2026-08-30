import { describe, expect, it } from "vitest";
import { HERITAGE_MARKETING_PAGES } from "@/lib/heritage-stonebridge/pages";
import { HERITAGE_SEO_LANDING_PAGES } from "@/lib/heritage-stonebridge/seo-landing-pages";
import { SERP_TITLE_MAX_CHARS } from "@/lib/heritage-stonebridge/serp-title";
import type { HeritagePageContent } from "@/lib/heritage-stonebridge/types";

const LONG_BRAND_SUFFIX = "Heritage at Stonebridge Summerlin | Dr. Jan Duffy";

function pageTitle(page: HeritagePageContent): string {
  expect(typeof page.metadata.title).toBe("string");
  return page.metadata.title as string;
}

describe("SERP titles", () => {
  it("keeps marketing page titles under 60 characters without a duplicated brand suffix", () => {
    for (const page of HERITAGE_MARKETING_PAGES) {
      const title = pageTitle(page);
      expect(title.length, `${page.slug}: ${title}`).toBeLessThanOrEqual(
        SERP_TITLE_MAX_CHARS,
      );
      expect(title, page.slug).not.toContain(LONG_BRAND_SUFFIX);
    }
  });

  it("keeps SEO landing page titles under 60 characters without a duplicated brand suffix", () => {
    for (const page of HERITAGE_SEO_LANDING_PAGES) {
      const title = pageTitle(page);
      expect(title.length, `${page.slug}: ${title}`).toBeLessThanOrEqual(
        SERP_TITLE_MAX_CHARS,
      );
      expect(title, page.slug).not.toContain(LONG_BRAND_SUFFIX);
    }
  });

  it("front-loads high-impression query terms", () => {
    const bySlug = Object.fromEntries(
      [...HERITAGE_MARKETING_PAGES, ...HERITAGE_SEO_LANDING_PAGES].map(
        (page) => [page.slug, pageTitle(page)],
      ),
    );

    expect(bySlug["/homes-for-sale"]).toMatch(/Homes for Sale/i);
    expect(bySlug["/55-and-over-communities-summerlin-las-vegas"]).toMatch(
      /55 and Over Communities/i,
    );
    expect(bySlug["/summerlin-55-plus"]).toMatch(/Summerlin 55\+/);
    expect(bySlug["/vs-trilogy-summerlin"]).toMatch(/Trilogy in Summerlin/);
    expect(bySlug["/community-comparison"]).toMatch(/Compare Las Vegas 55\+/);
  });
});
