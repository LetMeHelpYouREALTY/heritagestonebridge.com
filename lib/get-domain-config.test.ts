import { describe, expect, it } from "vitest";
import { getPageDomainConfig } from "./get-domain-config";

describe("getPageDomainConfig", () => {
  it("resolves Heritage Stonebridge without reading request headers", async () => {
    const config = await getPageDomainConfig();
    expect(config.domain).toBe("heritagestonebridge.com");
    expect(config.pageType).toBe("55plus");
    expect(config.neighborhood).toMatch(/Heritage/i);
  });
});
