/**
 * Cloudflare Worker: R2 image storage + Images binding transforms.
 *
 * Serves originals from R2 and optimized variants via the Images binding.
 * Does not sit in front of the Vercel origin — attach a custom domain
 * such as images.heritagestonebridge.com, or use workers.dev.
 *
 * Docs (2026): https://developers.cloudflare.com/images/optimization/binding/
 */

import {
  isSafeImageKey,
  isSvgKey,
  mergeQueryTransform,
  negotiateOutputFormat,
  parseCloudflareImageRequest,
  type ImageFitMode,
} from "../lib/cloudflare-images";

export interface Env {
  IMAGES_BUCKET: R2Bucket;
  IMAGES: ImagesBinding;
  /** Set to "false" in local wrangler when the Images binding is unavailable. */
  IMAGES_TRANSFORM?: string;
}

const CACHE_CONTROL = "public, max-age=31536000, immutable";
const ALLOWED_METHODS = "GET, HEAD, OPTIONS";

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": ALLOWED_METHODS,
  "Access-Control-Allow-Headers": "Accept, Content-Type",
  "Access-Control-Max-Age": "86400",
};

function jsonError(status: number, message: string): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}

function withCommonHeaders(
  response: Response,
  extra?: Record<string, string>,
): Response {
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", CACHE_CONTROL);
  headers.set("CDN-Cache-Control", CACHE_CONTROL);
  headers.set("X-Content-Type-Options", "nosniff");
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      headers.set(key, value);
    }
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function contentTypeForKey(key: string, fallback: string): string {
  const lower = key.toLowerCase();
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".avif")) return "image/avif";
  if (lower.endsWith(".gif")) return "image/gif";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  return fallback;
}

function transformsEnabled(env: Env): boolean {
  return env.IMAGES_TRANSFORM !== "false" && env.IMAGES_TRANSFORM !== "0";
}

function originalResponse(
  object: R2ObjectBody,
  key: string,
  method: string,
  extra?: Record<string, string>,
): Response {
  const body = method === "HEAD" ? null : object.body;
  return withCommonHeaders(
    new Response(body, {
      status: 200,
      headers: {
        "Content-Type":
          object.httpMetadata?.contentType ||
          contentTypeForKey(key, "application/octet-stream"),
        ETag: object.httpEtag,
      },
    }),
    extra,
  );
}

function cacheKeyFor(request: Request, formatHint: string): Request {
  const url = new URL(request.url);
  url.searchParams.set("cf-out", formatHint);
  return new Request(url.toString(), {
    method: "GET",
    headers: request.headers,
  });
}

const worker = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return jsonError(405, "Method not allowed");
    }

    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/health") {
      return new Response(JSON.stringify({ ok: true, service: "images" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...CORS_HEADERS,
        },
      });
    }

    const parsed = parseCloudflareImageRequest(url.pathname);
    if (!parsed || !isSafeImageKey(parsed.key)) {
      return jsonError(400, "Invalid image path");
    }

    const transform = mergeQueryTransform(parsed.transform, url.searchParams);
    const accept = request.headers.get("Accept") || "";
    const negotiatedFormat = transform
      ? negotiateOutputFormat(transform.format, accept, parsed.key)
      : null;
    const cacheHint =
      negotiatedFormat ??
      contentTypeForKey(parsed.key, "application/octet-stream");

    const cache = caches.default;
    const cacheKey = cacheKeyFor(request, cacheHint);
    const cached = await cache.match(cacheKey);
    if (cached) {
      const hit = withCommonHeaders(cached, { "CF-Cache-Status": "HIT" });
      if (request.method === "HEAD") {
        return new Response(null, { status: hit.status, headers: hit.headers });
      }
      return hit;
    }

    const object = await env.IMAGES_BUCKET.get(parsed.key);
    if (!object) {
      return jsonError(404, "Image not found");
    }

    if (!transform || isSvgKey(parsed.key) || !transformsEnabled(env)) {
      const original = originalResponse(object, parsed.key, request.method, {
        "CF-Cache-Status": "MISS",
        "X-Image-Transform":
          transform && !isSvgKey(parsed.key) ? "skipped" : "none",
      });
      if (request.method !== "HEAD") {
        ctx.waitUntil(cache.put(cacheKey, original.clone()));
      }
      return original;
    }

    if (!object.body || !negotiatedFormat) {
      return jsonError(502, "Empty image object");
    }

    try {
      const fit: ImageFitMode = transform.fit ?? "scale-down";
      const result = await env.IMAGES.input(object.body)
        .transform({
          width: transform.width,
          height: transform.height,
          fit,
        })
        .output({
          format: negotiatedFormat,
          quality: transform.quality ?? 75,
        });

      const transformed = result.response();
      const response = withCommonHeaders(transformed, {
        "CF-Cache-Status": "MISS",
        Vary: "Accept",
        "X-Image-Transform": "ok",
      });

      if (request.method === "HEAD") {
        return new Response(null, {
          status: response.status,
          headers: response.headers,
        });
      }

      ctx.waitUntil(cache.put(cacheKey, response.clone()));
      return response;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Transform failed";
      console.error("Images transform error", parsed.key, message);
      const fallbackObject = await env.IMAGES_BUCKET.get(parsed.key);
      if (!fallbackObject) {
        return jsonError(502, "Image transform failed");
      }
      return originalResponse(fallbackObject, parsed.key, request.method, {
        "CF-Cache-Status": "MISS",
        "X-Image-Transform": "fallback",
      });
    }
  },
};

export default worker;
