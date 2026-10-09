import { describe, it, expect } from "vitest";
import { generateWeeklyPosts } from "./generate-weekly-posts";
import { runNapAudit } from "./nap-audit";
import { GBP_ADVISOR } from "./advisor-decisions";
import { gbpShortDescription } from "@/lib/gbp-schema";

describe("GBP weekly generator", () => {
  it("produces advisor-defined post count", () => {
    const pack = generateWeeklyPosts(new Date("2026-06-24T12:00:00Z"));
    expect(pack.posts).toHaveLength(GBP_ADVISOR.decisions.postsPerWeek);
    expect(pack.weekLabel).toMatch(/^\d{4}-W\d{2}$/);
  });

  it("rotates posts across weeks", () => {
    const a = generateWeeklyPosts(new Date("2026-06-01T12:00:00Z"));
    const b = generateWeeklyPosts(new Date("2026-06-15T12:00:00Z"));
    const aIds = a.posts.map((p) => p.id).join(",");
    const bIds = b.posts.map((p) => p.id).join(",");
    expect(aIds).not.toBe(bIds);
  });
});

describe("GBP NAP audit", () => {
  it("passes with current site NAP", () => {
    const result = runNapAudit(process.cwd());
    expect(result.passed).toBe(true);
  });

  it("keeps short description within 750 chars", () => {
    expect(gbpShortDescription.length).toBeLessThanOrEqual(750);
  });
});
