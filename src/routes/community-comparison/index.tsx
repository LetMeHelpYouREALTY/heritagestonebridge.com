import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { QuestionList } from "~/components/community/QuestionList";
import { business } from "~/config/business";
import { breadcrumbJsonLd, COMMUNITY_SOURCE, community, faqJsonLd } from "~/config/community";
import type { QA } from "~/config/questions";

/**
 * Sources checked 2026-10-22. Median list prices are Las Vegas REALTORS MLS figures as
 * published by the linked third-party pages on the dates shown. Re-check before quoting.
 * No HOA dollar figures on purpose: see the note in routes/hoa-fees.
 */
const VERIFIED = "October 22, 2026";

type Row = { label: string; heritage: string; sunCity: string; trilogy: string };

const rows: ReadonlyArray<Row> = [
  { label: "Builder", heritage: "Lennar", sunCity: "Del Webb", trilogy: "Shea Homes (Trilogy)" },
  { label: "First homes", heritage: "2021", sunCity: "1989", trilogy: "2021 (still building)" },
  {
    label: "Homes",
    heritage: `${community.homes}`,
    sunCity: "About 7,780",
    trilogy: "About 930 planned",
  },
  {
    label: "Location",
    heritage: "Summerlin West, 89138",
    sunCity: "North Summerlin, 89134 / 89144",
    trilogy: "Northwest Las Vegas, off US-95",
  },
  {
    label: "Entry",
    heritage: "Staffed gatehouse, 24/7",
    sunCity: "No guard gate",
    trilogy: "Gated",
  },
  {
    label: "Golf",
    heritage: "None on site",
    sunCity: "3 courses, paid separately from dues",
    trilogy: "None on site",
  },
  {
    label: "Home sizes",
    heritage: "1,232–2,873 sq ft, 9 plans",
    sunCity: "Mostly 1990s single-story",
    trilogy: "New single-story plans",
  },
  {
    label: "Median list price",
    heritage: "$539,888 (Oct 19)",
    sunCity: "$410,000 (Oct 19)",
    trilogy: "$625,000 (Oct 21)",
  },
];

const questions: ReadonlyArray<QA> = [
  {
    question: "Which of the three has a staffed gate?",
    answer:
      "Heritage at Stonebridge. Its community site lists a gatehouse staffed around the clock. Trilogy Sunstone is gated. Sun City Summerlin has no guard gate.",
  },
  {
    question: "Which one costs the least to buy into?",
    answer:
      "Sun City Summerlin, by median list price, because most of its homes date from the 1990s. Heritage and Trilogy Sunstone are newer, so asking prices start higher. The right comparison is price per square foot for the plan size you want.",
  },
  {
    question: "How do the HOA dues compare?",
    answer: `Each community bills dues differently, and amounts change with every budget. Sun City Summerlin runs one association, with golf billed separately. Heritage and Trilogy Sunstone layer a community association on top of a master association. Get the current statement for the exact home before you offer. Call or text ${business.telephoneDisplay}.`,
  },
  {
    question: "Is Trilogy Sunstone the same as Trilogy in Summerlin?",
    answer:
      "No. Trilogy in Summerlin is a smaller Shea community of attached homes. Trilogy Sunstone is a separate, larger Shea community in northwest Las Vegas.",
  },
];

const faqScript = faqJsonLd(questions);
const crumbScript = breadcrumbJsonLd([
  { name: "Home", item: "https://heritagestonebridge.com/" },
  { name: "Community comparison", item: "https://heritagestonebridge.com/community-comparison" },
]);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <script type="application/ld+json" dangerouslySetInnerHTML={crumbScript} />
      <CampaignHero
        eyebrow="55+ comparison · Updated October 2026"
        title="Heritage at Stonebridge vs. Sun City Summerlin vs. Trilogy Sunstone"
        lede="Three 55+ communities, three very different choices. Newer and compact, large with golf, or new and still building. Here are the facts side by side."
      >
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href={business.smsHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Text to tour all three
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Side by side</h2>
          <div class="mt-8 overflow-x-auto">
            <table class="w-full min-w-[640px] border-collapse text-left text-hsb-text">
              <thead>
                <tr class="border-b-2 border-hsb-dark">
                  <th class="py-3 pr-4 font-semibold"></th>
                  <th class="py-3 pr-4 font-semibold text-hsb-dark">Heritage at Stonebridge</th>
                  <th class="py-3 pr-4 font-semibold text-hsb-dark">Sun City Summerlin</th>
                  <th class="py-3 font-semibold text-hsb-dark">Trilogy Sunstone</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} class="border-b border-hsb-sand">
                    <th scope="row" class="py-3 pr-4 font-semibold text-hsb-dark">
                      {row.label}
                    </th>
                    <td class="py-3 pr-4">{row.heritage}</td>
                    <td class="py-3 pr-4">{row.sunCity}</td>
                    <td class="py-3">{row.trilogy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p class="mt-4 max-w-3xl text-sm text-hsb-muted">
            Median list prices are Las Vegas REALTORS MLS figures, 2026, as published by{" "}
            <a
              class="underline"
              href="https://www.vegasparadisehomes.com/summerlin/heritage-at-stonebridge/"
            >
              Vegas Paradise Homes
            </a>{" "}
            and{" "}
            <a class="underline" href="https://www.viphomes.vegas/sun-city-summerlin/">
              VIP Homes
            </a>
            . Heritage facts:{" "}
            <a class="underline" href={COMMUNITY_SOURCE}>
              heritageatstonebridge.org
            </a>
            . Sun City:{" "}
            <a class="underline" href="https://www.suncitysummerlin.com/">
              Sun City Summerlin Community Association
            </a>
            . Checked {VERIFIED}. Prices move weekly, so ask for today's numbers.
          </p>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Who each one fits</h2>
          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <article>
              <h3 class="font-display text-2xl text-hsb-dark">Heritage at Stonebridge</h3>
              <p class="mt-2 text-hsb-text">
                Newer single-story homes, a staffed gate, and an 8,000 sq ft clubhouse with six
                pickleball courts. Red Rock Canyon sits minutes west. No golf course on site.
              </p>
            </article>
            <article>
              <h3 class="font-display text-2xl text-hsb-dark">Sun City Summerlin</h3>
              <p class="mt-2 text-hsb-text">
                The largest choice, with three golf courses, four recreation centers, and a
                long-running club calendar. Homes are older, so plan for updates. No guard gate.
              </p>
            </article>
            <article>
              <h3 class="font-display text-2xl text-hsb-dark">Trilogy Sunstone</h3>
              <p class="mt-2 text-hsb-text">
                New construction still underway in northwest Las Vegas. Gated, with a resort-style
                club. Farther from Summerlin shopping and about 33 minutes to the south Strip.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Comparison questions</h2>
          <QuestionList items={questions} />
          <p class="mt-8 text-hsb-text">
            Next:{" "}
            <a class="underline" href="/hoa-fees">
              five HOA costs to confirm
            </a>{" "}
            and{" "}
            <a class="underline" href="/heritage-at-stonebridge-homes-for-sale">
              Heritage homes for sale now
            </a>
            .
          </p>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage at Stonebridge vs Sun City Summerlin vs Trilogy Sunstone | 55+ Comparison",
  meta: [
    {
      name: "description",
      content:
        "Compare Heritage at Stonebridge, Sun City Summerlin, and Trilogy Sunstone: builder, gate, golf, home sizes, and October 2026 median list prices. Call (702) 789-6561.",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Heritage at Stonebridge vs Sun City Summerlin vs Trilogy Sunstone",
    },
    {
      property: "og:description",
      content: "Three Las Vegas 55+ communities side by side: gate, golf, homes, and 2026 prices.",
    },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://heritagestonebridge.com/community-comparison" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/community-comparison" }],
};
