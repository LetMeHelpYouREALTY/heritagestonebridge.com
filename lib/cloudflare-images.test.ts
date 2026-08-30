import { afterEach, describe, expect, it } from "vitest";
import {
  accountHashFromDeliveryUrl,
  absolutePublicImageUrl,
  buildCloudflareImageUrl,
  buildCloudflareTransform,
  gitPathToImageId,
  isCloudflareImagesEnabled,
} from "./cloudflare-images";

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

describe("cloudflare-images", () => {
  it("stays off without both public env vars", () => {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
    expect(isCloudflareImagesEnabled()).toBe(false);

    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = "true";
    expect(isCloudflareImagesEnabled()).toBe(false);
  });

  it("turns on when enabled flag and account hash are set", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = "true";
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = "testhash";
    expect(isCloudflareImagesEnabled()).toBe(true);
  });

  it("maps git backup paths to custom image IDs", () => {
    expect(gitPathToImageId("/images/dr-jan-duffy.jpg")).toBe(
      "images/dr-jan-duffy.jpg",
    );
    expect(gitPathToImageId("Image/hero_bg_1.jpg")).toBe("Image/hero_bg_1.jpg");
  });

  it("builds path-segment transforms, not query strings", () => {
    expect(
      buildCloudflareTransform({ width: 800, quality: 85, format: "auto" }),
    ).toBe("w=800,q=85,f=auto");
  });

  it("rewrites git paths to imagedelivery.net when a hash is present", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = "testhash";
    expect(buildCloudflareImageUrl("/images/dr-jan-duffy.jpg", 800, 85)).toBe(
      "https://imagedelivery.net/testhash/images/dr-jan-duffy.jpg/w=800,q=85,f=auto",
    );
  });

  it("leaves remote URLs unchanged", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = "testhash";
    expect(buildCloudflareImageUrl("https://example.com/photo.jpg", 400)).toBe(
      "https://example.com/photo.jpg",
    );
  });

  it("builds origin URLs for git backups when Cloudflare is off", () => {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
    expect(absolutePublicImageUrl("/images/hero/heritage-stonebridge.webp")).toMatch(
      /\/images\/hero\/heritage-stonebridge\.webp$/,
    );
  });

  it("builds imagedelivery.net URLs when Cloudflare is on", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = "true";
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH = "testhash";
    expect(
      absolutePublicImageUrl("/images/hero/heritage-stonebridge.webp", 1200),
    ).toBe(
      "https://imagedelivery.net/testhash/images/hero/heritage-stonebridge.webp/w=1200,q=85,f=auto",
    );
  });

  it("extracts the account hash from a delivery URL", () => {
    expect(
      accountHashFromDeliveryUrl(
        "https://imagedelivery.net/Vi7wi5KSItxGFsWRG2Us6Q/images/foo.jpg/public",
      ),
    ).toBe("Vi7wi5KSItxGFsWRG2Us6Q");
  });
});
