/**
 * Cloudflare Images URL helpers.
 *
 * Two delivery modes (2026 Images docs):
 * 1. R2 + Worker transformations — `/cdn-cgi/image/<opts>/<key>`
 *    https://developers.cloudflare.com/images/optimization/features/
 * 2. Hosted Images (paid) — `https://imagedelivery.net/<hash>/<id>/<variant>`
 *
 * Vercel remains the app origin (gray-cloud DNS). This module only builds
 * URLs for the separate images host so we never proxy the Next.js site.
 */

export const DEFAULT_IMAGE_QUALITY = 75;
export const MAX_TRANSFORM_WIDTH = 3840;

export const IMAGE_FIT_MODES = [
  "scale-down",
  "contain",
  "cover",
  "crop",
  "pad",
] as const;

export const IMAGE_FORMATS = ["auto", "avif", "webp", "jpeg", "png"] as const;

export type ImageFitMode = (typeof IMAGE_FIT_MODES)[number];
export type ImageFormat = (typeof IMAGE_FORMATS)[number];

export type CloudflareImageTransform = {
  width?: number;
  height?: number;
  quality?: number;
  format?: ImageFormat;
  fit?: ImageFitMode;
};

export type CloudflareImageDeliveryConfig = {
  /** Worker or custom domain origin, e.g. https://images.heritagestonebridge.com */
  baseUrl?: string;
  /** Hosted Images account hash (paid plan) */
  accountHash?: string;
};

export type ParsedImageRequest = {
  key: string;
  transform: CloudflareImageTransform | null;
};

const IMAGE_KEY_PATTERN =
  /^(?:Image|images)\/[A-Za-z0-9._/-]+\.(?:jpe?g|png|gif|webp|avif|svg)$/i;

const FIT_SET = new Set<string>(IMAGE_FIT_MODES);
const FORMAT_SET = new Set<string>(IMAGE_FORMATS);

export function clampQuality(quality: number | undefined): number {
  const value = quality ?? DEFAULT_IMAGE_QUALITY;
  if (!Number.isFinite(value)) return DEFAULT_IMAGE_QUALITY;
  return Math.min(100, Math.max(1, Math.round(value)));
}

export function clampWidth(width: number | undefined): number | undefined {
  if (width === undefined || !Number.isFinite(width) || width <= 0) {
    return undefined;
  }
  return Math.min(MAX_TRANSFORM_WIDTH, Math.round(width));
}

export function isLocalImagePath(src: string): boolean {
  return src.startsWith("/") && !src.startsWith("//");
}

export function toR2ObjectKey(src: string): string {
  return src.replace(/^\/+/, "");
}

export function isSafeImageKey(key: string): boolean {
  if (!key || key.includes("..") || key.startsWith("/") || key.includes("\\")) {
    return false;
  }
  return IMAGE_KEY_PATTERN.test(key);
}

export function isSvgKey(key: string): boolean {
  return key.toLowerCase().endsWith(".svg");
}

function isImageFitMode(value: string): value is ImageFitMode {
  return FIT_SET.has(value);
}

function isImageFormat(value: string): value is ImageFormat {
  return FORMAT_SET.has(value);
}

export function parseTransformOptions(
  options: string,
): CloudflareImageTransform {
  const transform: CloudflareImageTransform = {};

  for (const part of options.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const name = trimmed.slice(0, eq).trim().toLowerCase();
    const raw = trimmed.slice(eq + 1).trim();

    switch (name) {
      case "width":
      case "w":
        transform.width = clampWidth(Number.parseInt(raw, 10));
        break;
      case "height":
      case "h": {
        const height = Number.parseInt(raw, 10);
        if (Number.isFinite(height) && height > 0) {
          transform.height = Math.round(height);
        }
        break;
      }
      case "quality":
      case "q":
        transform.quality = clampQuality(Number.parseInt(raw, 10));
        break;
      case "format":
      case "f":
        if (isImageFormat(raw.toLowerCase())) {
          transform.format = raw.toLowerCase() as ImageFormat;
        }
        break;
      case "fit":
        if (isImageFitMode(raw.toLowerCase())) {
          transform.fit = raw.toLowerCase() as ImageFitMode;
        }
        break;
      default:
        break;
    }
  }

  return transform;
}

export function serializeTransformOptions(
  options: CloudflareImageTransform,
): string {
  const parts: string[] = [];
  const width = clampWidth(options.width);
  if (width) parts.push(`width=${width}`);
  if (options.height && options.height > 0) {
    parts.push(`height=${Math.round(options.height)}`);
  }
  parts.push(`quality=${clampQuality(options.quality)}`);
  parts.push(`format=${options.format ?? "auto"}`);
  parts.push(`fit=${options.fit ?? "scale-down"}`);
  return parts.join(",");
}

/**
 * Parse a Worker request path.
 * Transformed: /cdn-cgi/image/width=800,quality=75,format=auto/images/hero/x.webp
 * Original:    /images/hero/x.webp
 */
export function parseCloudflareImageRequest(
  pathname: string,
): ParsedImageRequest | null {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const normalized = decoded.startsWith("/") ? decoded : `/${decoded}`;
  const prefix = "/cdn-cgi/image/";

  if (normalized.startsWith(prefix)) {
    const rest = normalized.slice(prefix.length);
    const slash = rest.indexOf("/");
    if (slash <= 0) return null;
    const key = rest.slice(slash + 1);
    if (!isSafeImageKey(key)) return null;
    return {
      key,
      transform: parseTransformOptions(rest.slice(0, slash)),
    };
  }

  const key = normalized.slice(1);
  if (!isSafeImageKey(key)) return null;
  return { key, transform: null };
}

export function mergeQueryTransform(
  base: CloudflareImageTransform | null,
  searchParams: URLSearchParams,
): CloudflareImageTransform | null {
  const fromQuery = parseTransformOptions(
    [
      searchParams.get("width") || searchParams.get("w")
        ? `width=${searchParams.get("width") || searchParams.get("w")}`
        : "",
      searchParams.get("height") || searchParams.get("h")
        ? `height=${searchParams.get("height") || searchParams.get("h")}`
        : "",
      searchParams.get("quality") || searchParams.get("q")
        ? `quality=${searchParams.get("quality") || searchParams.get("q")}`
        : "",
      searchParams.get("format") || searchParams.get("f")
        ? `format=${searchParams.get("format") || searchParams.get("f")}`
        : "",
      searchParams.get("fit") ? `fit=${searchParams.get("fit")}` : "",
    ]
      .filter(Boolean)
      .join(","),
  );

  const hasQuery =
    fromQuery.width !== undefined ||
    fromQuery.height !== undefined ||
    fromQuery.quality !== undefined ||
    fromQuery.format !== undefined ||
    fromQuery.fit !== undefined;

  if (!hasQuery) return base;
  return { ...(base ?? {}), ...fromQuery };
}

export type OutputImageMime =
  | "image/avif"
  | "image/webp"
  | "image/jpeg"
  | "image/png";

export function negotiateOutputFormat(
  format: ImageFormat | undefined,
  acceptHeader: string,
  key: string,
): OutputImageMime {
  const resolved = format ?? "auto";

  if (resolved !== "auto") {
    switch (resolved) {
      case "avif":
        return "image/avif";
      case "webp":
        return "image/webp";
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      default: {
        const _exhaustive: never = resolved;
        return _exhaustive;
      }
    }
  }

  if (/image\/avif/i.test(acceptHeader)) return "image/avif";
  if (/image\/webp/i.test(acceptHeader)) return "image/webp";
  if (/\.png$/i.test(key)) return "image/png";
  return "image/jpeg";
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, "");
}

/**
 * Build a delivery URL for next/image or metadata.
 * Absolute http(s) sources pass through (no open-proxy).
 */
export function buildCloudflareImageUrl(
  src: string,
  options: CloudflareImageTransform,
  config: CloudflareImageDeliveryConfig,
): string {
  if (/^https?:\/\//i.test(src) || src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }

  const key = toR2ObjectKey(src);
  const quality = clampQuality(options.quality);
  const width = clampWidth(options.width);
  const format = options.format ?? "auto";
  const fit = options.fit ?? "scale-down";

  if (config.accountHash) {
    const variant = [
      width ? `w=${width}` : "",
      `q=${quality}`,
      `format=${format}`,
      fit !== "scale-down" ? `fit=${fit}` : "",
    ]
      .filter(Boolean)
      .join(",");
    return `https://imagedelivery.net/${config.accountHash}/${key}/${variant}`;
  }

  if (config.baseUrl) {
    const transform = serializeTransformOptions({
      width,
      height: options.height,
      quality,
      format,
      fit,
    });
    return `${normalizeBaseUrl(config.baseUrl)}/cdn-cgi/image/${transform}/${key}`;
  }

  return src.startsWith("/") ? src : `/${src}`;
}

export function isCloudflareImageLoaderEnabled(
  config: CloudflareImageDeliveryConfig,
): boolean {
  return Boolean(config.baseUrl || config.accountHash);
}
