import { getCachedHeritageExcerpts } from "@/lib/parallel/client";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";

type ParallelHeritageBriefProps = {
  /** Unique H2 — include the page topic so extractors do not see a duplicated heading. */
  topic: string;
};

/**
 * Live Parallel Search excerpts for GEO (cited web snippets).
 * Falls back to verified community facts when PARALLEL_API_KEY is unset.
 */
export default async function ParallelHeritageBrief({ topic }: ParallelHeritageBriefProps) {
  const result = await getCachedHeritageExcerpts();
  const hits = result?.results?.slice(0, 3) ?? [];

  return (
    <section className="mb-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
        Cited web notes: {topic}
      </h2>
      <p className="aeo-answer text-slate-600 text-center max-w-3xl mx-auto mb-8">
        {HERITAGE_COMMUNITY.name} is a Lennar 55+ neighborhood of {HERITAGE_COMMUNITY.homeCount}{" "}
        homes in {HERITAGE_COMMUNITY.masterPlan} ({HERITAGE_COMMUNITY.postalCode}). Live MLS
        prices still beat any web snippet — use the listings widget on this site for today&apos;s
        inventory. Context dated August 2026.
      </p>
      {hits.length > 0 ? (
        <ul className="space-y-4">
          {hits.map((hit) => (
            <li key={hit.url} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-900 mb-2">
                <a
                  href={hit.url}
                  className="hover:text-blue-600"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {hit.title || hit.url}
                </a>
              </h3>
              {hit.excerpts?.[0] ? (
                <p className="text-sm text-slate-700 line-clamp-4">{hit.excerpts[0]}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : process.env.NODE_ENV === "development" ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600">
          Parallel Search is optional. Set <code>PARALLEL_API_KEY</code> to pull cited web
          excerpts here. Community facts still come from Lennar/MLS materials dated 2026.
        </div>
      ) : null}
    </section>
  );
}
