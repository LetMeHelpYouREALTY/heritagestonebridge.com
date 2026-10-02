import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { QuestionList } from "~/components/community/QuestionList";
import { business } from "~/config/business";
import { faqJsonLd } from "~/config/community";
import { homeQuestions } from "~/config/questions";

/**
 * Sources (checked 2026-10-02): nine plans in three collections and RV garages at select
 * homesites per the Howard Hughes Summerlin fact sheet (2024-02-07). Collection size ranges
 * match the homepage. Per-plan beds, baths, and garages are NOT verified, so not listed.
 */
const collections = [
  { name: "Cromwell", range: "1,232 to 1,422 sq ft", plans: "Carson, Claremont, Connery" },
  { name: "Stirling", range: "1,747 to 2,236 sq ft", plans: "Sawyer, Sidney, Sloan" },
  { name: "Evander", range: "2,515 to 2,873 sq ft", plans: "Ethan, Elizabeth, Everly" },
] as const;

const faqScript = faqJsonLd(homeQuestions);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Floor plans · Summerlin West 89138"
        title="Heritage at Stonebridge floor plans"
        lede="Lennar built nine single-story floor plans in three collections, from 1,232 to 2,873 square feet. Tell me the size you want and I will find the homes that match."
      >
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-accent px-6 py-3 text-center font-medium text-white hover:bg-hsb-accent-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href="/heritage-at-stonebridge-homes-for-sale"
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          See homes for sale
        </a>
      </CampaignHero>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Three collections, nine plans</h2>
          <div class="mt-8 grid gap-6 sm:grid-cols-3">
            {collections.map((item) => (
              <div key={item.name} class="rounded-2xl bg-white p-6 shadow-sm">
                <h3 class="font-display text-2xl text-hsb-dark">{item.name}</h3>
                <p class="mt-2 font-display text-xl text-hsb-primary">{item.range}</p>
                <p class="mt-3 text-sm uppercase tracking-wide text-hsb-muted">Plans</p>
                <p class="mt-1 text-hsb-text">{item.plans}</p>
              </div>
            ))}
          </div>
          <p class="mt-6 max-w-3xl text-sm text-hsb-muted">
            Sizes are published collection ranges. Bedroom, bath, and garage counts vary by plan
            and by the options the first owner chose. Confirm them on the listing and the plan
            sheet for the specific home.
          </p>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">How to pick a plan</h2>
          <ul class="mt-8 space-y-4 text-hsb-text">
            <li>Start with square footage. Cromwell is the smallest, Evander the largest.</li>
            <li>
              Ask about the garage. The developer's fact sheet notes RV garages at select
              homesites, so it depends on the lot.
            </li>
            <li>Walk more than one plan. Layout matters more than the number on paper.</li>
            <li>
              Check the walk to the clubhouse.{" "}
              <a class="underline" href="/amenities">
                See what the clubhouse includes.
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Floor plan and home questions</h2>
          <QuestionList items={homeQuestions} />
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage at Stonebridge Floor Plans | 9 Lennar Plans | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Heritage at Stonebridge floor plans: nine single-story Lennar plans in the Cromwell, Stirling and Evander collections, 1,232 to 2,873 sq ft. Call (702) 789-6561.",
    },
    { property: "og:title", content: "Heritage at Stonebridge floor plans" },
    {
      property: "og:description",
      content: "Nine single-story Lennar plans in three collections. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/floor-plans" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/floor-plans" }],
};
