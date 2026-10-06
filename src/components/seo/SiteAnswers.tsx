import { component$ } from "@builder.io/qwik";
import { AgentPortrait } from "~/components/community/AgentPortrait";
import { business } from "~/config/business";
import { COMMUNITY_SOURCE } from "~/config/community";

const ORIGIN = "https://heritagestonebridge.com";

function page(path: string): string {
  if (path === "/") return `${ORIGIN}/`;
  return `${ORIGIN}${path.endsWith("/") ? path : `${path}/`}`;
}

const answers = [
  { href: page("/amenities"), label: "Clubhouse, pools, and courts at Heritage at Stonebridge" },
  { href: page("/nearby"), label: "Restaurants, parks, and parking near 930 Silverfir Court" },
  { href: page("/hoa-fees"), label: "HOA fees at Heritage at Stonebridge" },
  { href: page("/floor-plans"), label: "Heritage at Stonebridge floor plans" },
  { href: page("/questions"), label: "Questions about buying and selling in Heritage at Stonebridge" },
  { href: page("/buy-heritage-at-stonebridge"), label: "Buy a home in Heritage at Stonebridge" },
  { href: page("/sell-heritage-at-stonebridge"), label: "Sell a home in Heritage at Stonebridge" },
] as const;

const sources = [
  { href: COMMUNITY_SOURCE, label: "Heritage at Stonebridge community site" },
  { href: business.mapsUrl, label: "Google Business Profile map for Heritage Stonebridge" },
  {
    href: business.reviewsUrl,
    label: "Google reviews for Heritage Stonebridge | Homes By Dr. Jan Duffy",
  },
  { href: "https://www.nps.gov/redr/", label: "Red Rock Canyon National Conservation Area" },
  { href: "https://summerlin.com/", label: "Summerlin master plan" },
] as const;

/** Canonical answers and cited sources, rendered once on every page. */
export const SiteAnswers = component$(() => {
  return (
    <nav aria-label="Heritage at Stonebridge answers" class="border-t border-hsb-border bg-hsb-cream">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          <div class="flex items-center gap-4">
            <AgentPortrait size="md" />
            <h2 class="font-display text-2xl text-hsb-dark">Answers about this community</h2>
          </div>
          <ul class="mt-4 space-y-2">
            {answers.map((item) => (
              <li key={item.href}>
                <a class="text-hsb-primary underline underline-offset-2 hover:text-hsb-primary-dark" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 class="font-display text-2xl text-hsb-dark">Sources</h2>
          <ul class="mt-4 space-y-2">
            {sources.map((item) => (
              <li key={item.href}>
                <a
                  class="text-hsb-primary underline underline-offset-2 hover:text-hsb-primary-dark"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
});
