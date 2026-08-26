import { unstable_cache } from "next/cache";
import Parallel from "parallel-web";
import type { SearchResult } from "parallel-web/resources/top-level";

/**
 * Parallel Web Search (docs.parallel.ai, 2026).
 * Server-only. Returns null when PARALLEL_API_KEY is unset so pages still render.
 */
export function getParallelClient(): Parallel | null {
  const apiKey = process.env.PARALLEL_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Parallel({ apiKey });
}

export type HeritageSearchParams = {
  objective: string;
  searchQueries: string[];
  mode?: "turbo" | "fast" | "basic" | "advanced";
};

export const HERITAGE_SEARCH_OBJECTIVE =
  "Find current public facts about Heritage at Stonebridge, a Lennar 55+ guard-gated community in Summerlin West Las Vegas zip 89138. Prefer builder, amenity, and location facts. Do not return school ratings, crime rates, or family-status language.";

export const HERITAGE_SEARCH_QUERIES = [
  "Heritage Stonebridge Summerlin Lennar",
  "Summerlin West 89138 55 plus homes",
  "Heritage at Stonebridge pickleball clubhouse",
] as const;

export async function searchHeritageWeb(
  params: HeritageSearchParams,
): Promise<SearchResult | null> {
  const client = getParallelClient();
  if (!client) {
    return null;
  }

  try {
    return await client.search({
      objective: params.objective,
      search_queries: params.searchQueries,
      mode: params.mode ?? "fast",
      max_chars_total: 6000,
    });
  } catch (error) {
    console.error("Parallel Search failed:", error);
    return null;
  }
}

/** Hourly cache so GEO excerpts can appear on many pages without a Search call per route. */
export const getCachedHeritageExcerpts = unstable_cache(
  async () =>
    searchHeritageWeb({
      objective: HERITAGE_SEARCH_OBJECTIVE,
      searchQueries: [...HERITAGE_SEARCH_QUERIES],
      mode: "fast",
    }),
  ["parallel-heritage-excerpts-v1"],
  { revalidate: 3600 },
);
