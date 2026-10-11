import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { COMMUNITY_SOURCE, community, faqJsonLd } from "~/config/community";

const faqs = [
  {
    question: "Is Stonebridge the same thing as Heritage at Stonebridge?",
    answer: `No. Stonebridge is the Summerlin village. Heritage at Stonebridge is the guard-gated 55+ Lennar community inside that village: ${community.homes} single-story homes, a staffed gate, and a clubhouse at ${community.clubhouseDisplay}.`,
  },
  {
    question: "Who should I call about the HOA, and who should I call about a home?",
    answer: `HOA and clubhouse questions go to the community site and the clubhouse phone ${community.clubhousePhoneDisplay}. Homes for sale go through Dr. Jan Duffy at ${business.telephoneDisplay}, ${business.broker}, Nevada license ${business.license}.`,
  },
  {
    question: "Where do I see Lennar floor plans and current listings?",
    answer: `Lennar built nine plans in the Cromwell, Stirling, and Evander collections. Floor plans are on this site, and current MLS listings are on the homes-for-sale page. Lennar's own website is the builder. This site is the agent's.`,
  },
] as const;

const faqScript = faqJsonLd(faqs);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Stonebridge village · Summerlin West"
        title="Stonebridge and Heritage at Stonebridge"
        lede="Stonebridge is the village. Heritage at Stonebridge is the 55+ Lennar community inside it: 421 homes behind a staffed gate."
      >
        <a
          href="/heritage-at-stonebridge-homes-for-sale/"
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Homes for sale
        </a>
        <a
          href="/floor-plans/"
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Lennar floor plans
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What sits inside the village</h2>
          <p class="mt-4 max-w-3xl text-lg text-hsb-text">
            Searches for Stonebridge Summerlin and Stonebridge Las Vegas cover the whole village.
            Heritage at Stonebridge is one community in that village. It is not the master-plan
            site, and it is not Lennar's builder site.
          </p>
          <dl class="mt-8 grid gap-6 sm:grid-cols-3">
            <div class="rounded-2xl bg-hsb-cream p-6">
              <dt class="text-sm uppercase tracking-wide text-hsb-muted">Homes</dt>
              <dd class="mt-2 font-display text-3xl text-hsb-dark">{community.homes}</dd>
              <dd class="mt-2 text-hsb-text">Single-story Lennar homes, 55+.</dd>
            </div>
            <div class="rounded-2xl bg-hsb-cream p-6">
              <dt class="text-sm uppercase tracking-wide text-hsb-muted">Gate</dt>
              <dd class="mt-2 font-display text-3xl text-hsb-dark">Staffed</dd>
              <dd class="mt-2 text-hsb-text">Visitors check in. There is no shared gate code.</dd>
            </div>
            <div class="rounded-2xl bg-hsb-cream p-6">
              <dt class="text-sm uppercase tracking-wide text-hsb-muted">Clubhouse</dt>
              <dd class="mt-2 font-display text-3xl text-hsb-dark">930</dd>
              <dd class="mt-2 text-hsb-text">Silverfir Court. That building belongs to the HOA.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Who answers which question</h2>
          <ul class="mt-6 max-w-3xl space-y-4 text-hsb-text">
            <li>
              Clubhouse hours, gates, and resident accounts:{" "}
              <a class="underline" href={COMMUNITY_SOURCE}>
                heritageatstonebridge.org
              </a>{" "}
              and {community.clubhousePhoneDisplay}.
            </li>
            <li>
              Floor plans: the{" "}
              <a class="underline" href="/floor-plans/">
                Cromwell, Stirling, and Evander collections
              </a>
              .
            </li>
            <li>
              A home to buy or sell:{" "}
              <a class="underline" href="/heritage-at-stonebridge-homes-for-sale/">
                Heritage at Stonebridge homes for sale
              </a>{" "}
              with Dr. Jan Duffy, {business.broker}.
            </li>
            <li>
              Where it sits, and the mile list:{" "}
              <a class="underline" href="/location/">
                location and nearby places
              </a>
              .
            </li>
          </ul>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Stonebridge questions</h2>
          <div class="mt-8 space-y-6">
            {faqs.map((item) => (
              <article key={item.question}>
                <h3 class="font-display text-2xl text-hsb-dark">{item.question}</h3>
                <p class="mt-2 text-hsb-text">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "Stonebridge Summerlin | Heritage at Stonebridge Las Vegas",
  meta: [
    {
      name: "description",
      content:
        "Stonebridge is the Summerlin village. Heritage at Stonebridge is the 55+ Lennar community inside it: 421 homes, a staffed gate, clubhouse at 930 Silverfir Ct. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Stonebridge Summerlin and Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "The village and the 55+ Lennar community are not the same place. Homes for sale: call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/community/" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/community/" }],
};
