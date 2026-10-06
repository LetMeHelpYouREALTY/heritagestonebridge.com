import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { QuestionList } from "~/components/community/QuestionList";
import { business } from "~/config/business";
import { COMMUNITY_SOURCE, community, faqJsonLd } from "~/config/community";
import { hoaQuestions } from "~/config/questions";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

/**
 * No dues figure is published here on purpose (2026-10-02): no public source gives the
 * current assessment. Add a dated figure only from a current HOA statement.
 */
const faqScript = faqJsonLd(hoaQuestions);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="HOA fees · Summerlin West 89138"
        title="Heritage at Stonebridge HOA fees"
        lede="Dues change with each year's budget, so the right number is the one on the current HOA statement for the home you want. I will get it for you before you offer."
      >
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-accent px-6 py-3 text-center font-medium text-white hover:bg-hsb-accent-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href={business.smsHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Text for current dues
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What the HOA runs</h2>
          <p class="mt-3 max-w-3xl text-hsb-text">
            The community site describes a staffed gatehouse, the clubhouse, a fitness center,
            pools and a spa, and pickleball and bocce courts. The line-by-line list of what dues
            pay for is in the HOA's adopted budget.
          </p>
          <p class="mt-4 max-w-3xl text-sm text-hsb-muted">
            Source:{" "}
            <a class="underline" href={COMMUNITY_SOURCE}>
              heritageatstonebridge.org
            </a>
            . Owners reach HOA documents through the{" "}
            <a class="underline" href={community.connectUrl}>
              resident portal
            </a>
            .
          </p>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Five costs to confirm before you offer</h2>
          <ol class="mt-8 space-y-4 text-hsb-text">
            <li>1. Monthly Heritage at Stonebridge dues, from the current HOA statement.</li>
            <li>
              2. Any Summerlin West Community Association charge. Ask for a statement that lists
              every association on the parcel.
            </li>
            <li>3. Transfer, setup, or capital fees due at closing.</li>
            <li>4. Special assessments, pending or approved.</li>
            <li>5. Any improvement-district balance on the parcel record.</li>
          </ol>
          <p class="mt-6 max-w-3xl text-hsb-text">
            All five show up in the resale package and the parcel record during escrow. We read
            them together before your review period ends.
          </p>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">HOA fee questions</h2>
          <QuestionList items={hoaQuestions} />
          <p class="mt-8 text-hsb-text">
            Next: <a class="underline" href="/amenities">what the clubhouse includes</a> and{" "}
            <a class="underline" href="/buy-heritage-at-stonebridge">how a purchase works</a>.
          </p>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage at Stonebridge HOA Fees | What to Confirm | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Heritage at Stonebridge HOA fees: what dues cover, the Summerlin West master association, and five costs to confirm before you offer. Call (702) 789-6561.",
    },
    { property: "og:title", content: "Heritage at Stonebridge HOA fees" },
    {
      property: "og:description",
      content: "What dues cover and which costs to confirm before you buy. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/hoa-fees" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/hoa-fees" }],
};
