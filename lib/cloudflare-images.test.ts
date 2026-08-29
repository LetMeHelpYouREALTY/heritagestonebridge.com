import { describe, expect, it } from "vitest";
import {
  buildCloudflareImageUrl,
  clampQuality,
  isCloudflareImageLoaderEnabled,
  isSafeImageKey,
  mergeQueryTransform,
  negotiateOutputFormat,
  parseCloudflareImageRequest,
  serializeTransformOptions,
} from "./cloudflare-images";
import cloudflareImageLoader from "./cloudflare-image-loader";

describe("isSafeImageKey", () => {
  it("allows site image paths", () => {
    expect(isSafeImageKey("images/hero/hero_bg_1.webp")).toBe(true);
    expect(isSafeImageKey("Image/hero_bg_1.jpg")).toBe(true);
  });

  it("rejects traversal and non-image keys", () => {
    expect(isSafeImageKey("../secret.jpg")).toBe(false);
    expect(isSafeImageKey("images/hero/note.txt")).toBe(false);
    expect(isSafeImageKey("/images/hero/hero_bg_1.webp")).toBe(false);
  });
});

describe("parseCloudflareImageRequest", () => {
  it("parses cdn-cgi transform URLs", () => {
    const parsed = parseCloudflareImageRequest(
      "/cdn-cgi/image/width=800,quality=75,format=auto/images/hero/hero_bg_1.webp",
    );
    expect(parsed).toEqual({
      key: "images/hero/hero_bg_1.webp",
      transform: {
        width: 800,
        quality: 75,
        format: "auto",
      },
    });
  });

  it("parses original object paths", () => {
    const parsed = parseCloudflareImageRequest("/Image/person1.jpeg");
    expect(parsed).toEqual({ key: "Image/person1.jpeg", transform: null });
  });

  it("returns null for invalid paths", () => {
    expect(parseCloudflareImageRequest("/api/leads")).toBeNull();
    expect(parseCloudflareImageRequest("/cdn-cgi/image/width=800")).toBeNull();
  });
});

describe("serializeTransformOptions", () => {
  it("emits Cloudflare path options with defaults", () => {
    expect(serializeTransformOptions({ width: 640 })).toBe(
      "width=640,quality=75,format=auto,fit=scale-down",
    );
  });
});

describe("buildCloudflareImageUrl", () => {
  it("builds Worker transformation URLs", () => {
    expect(
      buildCloudflareImageUrl(
        "/images/hero/hero_bg_1.webp",
        { width: 800, quality: 70 },
        { baseUrl: "https://images.heritagestonebridge.com" },
      ),
    ).toBe(
      "https://images.heritagestonebridge.com/cdn-cgi/image/width=800,quality=70,format=auto,fit=scale-down/images/hero/hero_bg_1.webp",
    );
  });

  it("builds hosted Images flexible-variant URLs", () => {
    expect(
      buildCloudflareImageUrl(
        "/images/hero/hero_bg_1.webp",
        { width: 400, quality: 80 },
        { accountHash: "abcHASH" },
      ),
    ).toBe(
      "https://imagedelivery.net/abcHASH/images/hero/hero_bg_1.webp/w=400,q=80,format=auto",
    );
  });

  it("passes through remote URLs", () => {
    expect(
      buildCloudflareImageUrl(
        "https://em.realscout.com/photo.jpg",
        { width: 200 },
        { baseUrl: "https://images.heritagestonebridge.com" },
      ),
    ).toBe("https://em.realscout.com/photo.jpg");
  });

  it("returns local paths when Cloudflare is not configured", () => {
    expect(
      buildCloudflareImageUrl("/Image/hero_bg_1.jpg", { width: 800 }, {}),
    ).toBe("/Image/hero_bg_1.jpg");
  });
});

describe("negotiateOutputFormat", () => {
  it("prefers AVIF then WebP for format=auto", () => {
    expect(
      negotiateOutputFormat("auto", "image/avif,image/webp", "images/a.jpg"),
    ).toBe("image/avif");
    expect(negotiateOutputFormat("auto", "image/webp", "images/a.jpg")).toBe(
      "image/webp",
    );
  });

  it("keeps PNG when auto-negotiating without modern formats", () => {
    expect(negotiateOutputFormat("auto", "image/jpeg", "Image/story.png")).toBe(
      "image/png",
    );
  });
});

describe("mergeQueryTransform", () => {
  it("overlays query aliases onto path options", () => {
    const merged = mergeQueryTransform(
      { width: 800, format: "auto" },
      new URLSearchParams("q=60&f=webp"),
    );
    expect(merged).toMatchObject({ width: 800, quality: 60, format: "webp" });
  });
});

describe("clampQuality", () => {
  it("clamps to 1–100", () => {
    expect(clampQuality(0)).toBe(1);
    expect(clampQuality(250)).toBe(100);
    expect(clampQuality(undefined)).toBe(75);
  });
});

describe("cloudflareImageLoader", () => {
  it("uses the R2 worker URL from env", () => {
    const previous = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL;
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL =
      "https://heritagestonebridge-images.example.workers.dev";
    try {
      expect(
        cloudflareImageLoader({
          src: "/images/hero/hero-luxury.webp",
          width: 1200,
          quality: 75,
        }),
      ).toBe(
        "https://heritagestonebridge-images.example.workers.dev/cdn-cgi/image/width=1200,quality=75,format=auto,fit=scale-down/images/hero/hero-luxury.webp",
      );
    } finally {
      if (previous === undefined) {
        delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL;
      } else {
        process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL = previous;
      }
    }
  });
});

describe("isCloudflareImageLoaderEnabled", () => {
  it("is true when a delivery origin is set", () => {
    expect(
      isCloudflareImageLoaderEnabled({
        baseUrl: "https://images.heritagestonebridge.com",
      }),
    ).toBe(true);
    expect(isCloudflareImageLoaderEnabled({})).toBe(false);
  });
});
