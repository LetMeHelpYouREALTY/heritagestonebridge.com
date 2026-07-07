import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  CANONICAL_HOST,
  resolveLegacyRedirect,
} from "./lib/heritage-stonebridge/legacy-redirects";

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function canonicalRedirect(request: NextRequest, pathname: string): NextResponse {
  const useHttps =
    process.env.NODE_ENV === "production" ||
    request.headers.get("x-forwarded-proto") === "https";
  const protocol = useHttps ? "https:" : request.nextUrl.protocol;
  const port =
    process.env.NODE_ENV === "development" && request.nextUrl.port
      ? `:${request.nextUrl.port}`
      : "";
  const url = new URL(`${protocol}//${CANONICAL_HOST}${port}${pathname}`);
  return NextResponse.redirect(url, 308);
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const rawPath = request.nextUrl.pathname;
  const normalized = stripTrailingSlash(rawPath);

  // Malformed tel: link crawled as a path
  if (normalized === "/+17025001942") {
    return canonicalRedirect(request, "/contact");
  }

  const legacyTarget = resolveLegacyRedirect(normalized);
  const finalPath = legacyTarget ?? normalized;

  const proto = request.headers.get("x-forwarded-proto");
  const needsHttps =
    process.env.NODE_ENV === "production" &&
    proto === "http" &&
    host === CANONICAL_HOST;

  const needsRedirect =
    host === "heritagestonebridge.com" ||
    rawPath !== finalPath ||
    legacyTarget !== null ||
    needsHttps;

  if (needsRedirect) {
    return canonicalRedirect(request, finalPath);
  }

  const response = NextResponse.next();
  response.headers.set("x-domain", host);
  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all paths except static assets, API, and sitemap.xml output.
     * Include /sitemap (no extension) so it can redirect to /sitemap.xml in one hop.
     */
    "/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap\\.xml).*)",
  ],
};
