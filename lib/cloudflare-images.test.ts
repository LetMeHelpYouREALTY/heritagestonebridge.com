import { afterEach, describe, expect, it } from "vitest";
import cloudflareImageLoader from "@/lib/cloudflare-image-loader";
import {
  cloudflareDeliveryUrl,
  isCloudflareImagesEnabled,
  pathToImageId,
  variantForWidth,
} from "@/lib/cloudflare-images";

const ORIGINAL_ENABLED = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
const ORIGINAL_HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;

afterEach(() => {
  if (ORIGINAL_ENABLED === undefined) {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
  } else {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = ORIGINAL_ENABLED;
  }
  if (ORIGINAL_HASH === undefined) {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
  } else {
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = ORIGINAL_HASH;
  }
});

describe("Cloudflare Images IDs and variants", () => {
  it("maps git backup paths to custom image IDs", () => {
    expect(pathToImageId("/images/hero/hero-heritage-stonebridge.webp")).toBe(
      "images/hero/hero-heritage-stonebridge",
    );
    expect(pathToImageId("images/sections/section-pool.jpg")).toBe(
      "images/sections/section-pool",
    );
  });

  it("picks named variants for buyer/seller device widths", () => {
    expect(variantForWidth(390)).toBe("phone");
    expect(variantForWidth(640)).toBe("phone");
    expect(variantForWidth(800)).toBe("card");
    expect(variantForWidth(1024)).toBe("tablet");
    expect(variantForWidth(1920)).toBe("desktop");
  });

  it("keeps git paths when Cloudflare Images is not configured", () => {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
    expect(isCloudflareImagesEnabled()).toBe(false);
    expect(
      cloudflareDeliveryUrl("/images/hero/hero-lifestyle.webp", "phone"),
    ).toBe("/images/hero/hero-lifestyle.webp");
    expect(
      cloudflareImageLoader({
        src: "/images/hero/hero-lifestyle.webp",
        width: 640,
      }),
    ).toBe("/images/hero/hero-lifestyle.webp");
  });

  it("builds imagedelivery.net variant URLs, not query strings", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = "true";
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = "testhash";

    expect(isCloudflareImagesEnabled()).toBe(true);
    expect(
      cloudflareDeliveryUrl("/images/hero/hero-heritage-stonebridge.webp", "phone"),
    ).toBe(
      "https://imagedelivery.net/testhash/images/hero/hero-heritage-stonebridge/phone",
    );
    expect(
      cloudflareImageLoader({
        src: "/images/hero/hero-heritage-stonebridge.webp",
        width: 1920,
      }),
    ).toBe(
      "https://imagedelivery.net/testhash/images/hero/hero-heritage-stonebridge/desktop",
    );
    expect(
      cloudflareImageLoader({
        src: "/images/hero/hero-heritage-stonebridge.webp",
        width: 640,
      }),
    ).not.toMatch(/\?width=/);
  });
});
