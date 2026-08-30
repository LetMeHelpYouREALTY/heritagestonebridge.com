/**
 * Cloudflare Worker — image optimization.
 *
 * When Cloudflare Images is configured, git-backup paths are rewritten to
 * imagedelivery.net (2026 path-variant format). Otherwise origin is returned
 * with a long cache (git files are the backup).
 */

type ImageFit = "scale-down" | "contain" | "cover" | "crop" | "pad";

type ImageParams = {
  width?: number;
  height?: number;
  quality: number;
  format: string;
  fit: ImageFit;
};

function cfFit(fit: ImageFit): string {
  switch (fit) {
    case "scale-down":
      return "scale-down";
    case "contain":
      return "contain";
    case "cover":
      return "cover";
    case "crop":
      return "crop";
    case "pad":
      return "pad";
    default: {
      const _exhaustive: never = fit;
      return _exhaustive;
    }
  }
}

export default {
  async fetch(request: Request, env: Env, _ctx?: unknown): Promise<Response> {
    const url = new URL(request.url);

    if (!isImageRequest(url.pathname)) {
      return fetch(request);
    }

    const params = parseImageParams(url);
    const hash =
      env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH || env.CF_IMAGES_ACCOUNT_HASH;
    const imagesOn =
      env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true" ||
      Boolean(env.CF_IMAGES_URL);

    if (hash && imagesOn && !url.pathname.startsWith("/_next/image")) {
      const imageId = url.pathname.replace(/^\//, "");
      const parts = [
        params.width ? `w=${params.width}` : "",
        params.height ? `h=${params.height}` : "",
        `q=${params.quality}`,
        `f=${params.format}`,
        `fit=${cfFit(params.fit)}`,
      ].filter(Boolean);
      const delivery = `https://imagedelivery.net/${hash}/${imageId}/${parts.join(",")}`;
      const optimized = await fetch(delivery, {
        cf: { cacheTtl: 31536000, cacheEverything: true },
      });
      if (optimized.ok) {
        const response = new Response(optimized.body, optimized);
        response.headers.set(
          "Cache-Control",
          "public, max-age=31536000, immutable",
        );
        response.headers.set("Vary", "Accept");
        return response;
      }
      // Missing Cloudflare object → serve git backup from origin
    }

    const originalResponse = await fetch(request);
    const response = new Response(originalResponse.body, originalResponse);
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
    response.headers.set("Vary", "Accept");
    return response;
  },
};

function isImageRequest(pathname: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(pathname);
}

function parseImageParams(url: URL): ImageParams {
  const fitParam = url.searchParams.get("fit");
  const fit: ImageFit =
    fitParam === "contain" ||
    fitParam === "cover" ||
    fitParam === "crop" ||
    fitParam === "pad" ||
    fitParam === "scale-down"
      ? fitParam
      : "scale-down";

  return {
    width: url.searchParams.get("w")
      ? parseInt(url.searchParams.get("w")!, 10)
      : undefined,
    height: url.searchParams.get("h")
      ? parseInt(url.searchParams.get("h")!, 10)
      : undefined,
    quality: url.searchParams.get("q")
      ? parseInt(url.searchParams.get("q")!, 10)
      : 85,
    format: url.searchParams.get("f") || "auto",
    fit,
  };
}

type Env = {
  CF_IMAGES_URL?: string;
  CF_IMAGES_ACCOUNT_HASH?: string;
  NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH?: string;
  NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED?: string;
};
