import { NextRequest, NextResponse } from "next/server";
import { getCachedHeritageExcerpts } from "@/lib/parallel/client";
import { checkRateLimit, getClientId, getRateLimitHeaders, parallelSearchLimiter } from "@/lib/rate-limit";

/**
 * Public GEO helper: returns cached Heritage at Stonebridge excerpts from Parallel Search.
 * Does not accept arbitrary queries (prevents API-credit abuse). Key never leaves the server.
 */
export async function GET(request: NextRequest) {
  const limited = await checkRateLimit(parallelSearchLimiter, getClientId(request));
  if (!limited.success) {
    return NextResponse.json(
      { error: "Too many search requests. Try again shortly." },
      { status: 429, headers: getRateLimitHeaders(limited) },
    );
  }

  const result = await getCachedHeritageExcerpts();
  if (!result) {
    return NextResponse.json(
      {
        configured: Boolean(process.env.PARALLEL_API_KEY),
        results: [],
        message: "Parallel Search is not configured or returned no excerpts.",
      },
      { headers: getRateLimitHeaders(limited) },
    );
  }

  return NextResponse.json(
    {
      configured: true,
      search_id: result.search_id,
      results: result.results.slice(0, 5).map((hit) => ({
        url: hit.url,
        title: hit.title ?? hit.url,
        excerpt: hit.excerpts?.[0] ?? "",
      })),
    },
    { headers: getRateLimitHeaders(limited) },
  );
}
