import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { QuestionList } from "~/components/community/QuestionList";
import { business } from "~/config/business";
import { community, faqJsonLd } from "~/config/community";
import { comparisonQuestions } from "~/config/questions";

const rows = [
  {
    name: "Heritage at Stonebridge",
    detail: `${community.homes} single-story Lennar homes. Opened in 2021. Staffed gate. No golf course in the published amenity list.`,
  },
  {
    name: "Sun City Summerlin",
    detail: "A much larger Del Webb community with golf.",
  },
  {
    name: "Regency",
    detail: "A Toll Brothers community.",
  },
  {
    name: "Trilogy",
    detail: "A Shea Homes community of attached homes.",
  },
] as const;

const faqScript = faqJsonLd(comparisonQuestions);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Summerlin 55+"
        title="Heritage at Stonebridge compared with Sun City and Trilogy"
        lede="Heritage is the newer, smaller Lennar choice: 421 single-story homes, a staffed gate, and no golf course in its published amenities."
      >
        <a
          href="/heritage-at-stonebridge-homes-for-sale/"
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Heritage homes for sale
        </a>
        <a
          href={business.telephoneHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Call {business.telephoneDisplay}
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What each community is</h2>
          <p class="mt-3 max-w-3xl text-hsb-text">
            Tour more than one. This page does not rank them, and it does not print prices.
          </p>
          <div class="mt-8 grid gap-6 md:grid-cols-2">
            {rows.map((row) => (
              <article key={row.name} class="rounded-2xl border border-hsb-border p-6">
                <h3 class="font-display text-2xl text-hsb-dark">{row.name}</h3>
                <p class="mt-3 text-hsb-text">{row.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">How to use the comparison</h2>
          <QuestionList items={comparisonQuestions} />
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a class="font-medium text-hsb-primary underline" href="/amenities/">
              Heritage clubhouse and amenities
            </a>
            <a class="font-medium text-hsb-primary underline" href="/community/">
              Stonebridge village versus Heritage
            </a>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage vs Sun City Summerlin and Trilogy | 55+ Summerlin",
  meta: [
    {
      name: "description",
      content:
        "Heritage at Stonebridge is 421 single-story Lennar homes from 2021, with a staffed gate and no golf course in its published amenities. Sun City Summerlin is a larger Del Webb community with golf. Trilogy is Shea Homes attached homes. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Heritage vs Sun City Summerlin and Trilogy",
    },
    {
      property: "og:description",
      content:
        "421 Lennar homes, a staffed gate, and no on-site golf. Compare that with Sun City Summerlin and Trilogy. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/community-comparison/" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Heritage vs Sun City Summerlin and Trilogy",
    },
    {
      name: "twitter:description",
      content: "421 Lennar homes, a staffed gate, and no on-site golf. Call (702) 789-6561.",
    },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/community-comparison/" }],
};
