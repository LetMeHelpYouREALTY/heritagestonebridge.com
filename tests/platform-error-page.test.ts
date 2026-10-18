import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const html = readFileSync(resolve(process.cwd(), "public/500.html"), "utf8");

describe("public/500.html platform error page", () => {
  it("embeds Vercel request and error tokens for support", () => {
    expect(html).toContain("::vercel:REQUEST_ID::");
    expect(html).toContain("::vercel:ERROR_CODE::");
  });

  it("stays static, branded, and noindexed with Heritage NAP", () => {
    expect(html).toContain('name="robots" content="noindex, nofollow"');
    expect(html).toContain("Heritage Stonebridge | Homes By Dr. Jan Duffy");
    expect(html).toContain("Crossbridge Dr, Las Vegas, NV 89138");
    expect(html).toContain("(702) 500-1942");
    expect(html).toContain("tel:+17025001942");
    expect(html).toContain("DrDuffySells@HeritageStonebridge.com");
    expect(html).not.toContain("next/image");
    expect(html).not.toContain("fetch(");
  });
});
