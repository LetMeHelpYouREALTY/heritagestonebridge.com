import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AmenityGrid } from "~/components/community/AmenityGrid";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { RealScoutSimpleSearch } from "~/components/real-estate/RealScoutSimpleSearch";
import { business } from "~/config/business";
import { COMMUNITY_SOURCE, COMMUNITY_VERIFIED, REALSCOUT_AGENT_ID, community, faqJsonLd } from "~/config/community";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

const faqs = [
  {
    question: "Who can buy in Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is a 55+ community in Summerlin West, Las Vegas, 89138. Ask Dr. Jan Duffy to confirm the age rule in the current HOA documents before you write an offer.",
  },
  {
    question: "Can children or grandchildren visit or stay overnight?",
    answer:
      "Guest and visitor rules come from the HOA, and this site does not publish them. Ask the clubhouse or read the current HOA rules before you plan a long stay.",
  },
  {
    question: "Are pets allowed in Heritage at Stonebridge?",
    answer:
      "Pet rules are set in the HOA documents. Confirm the current limits there before you buy.",
  },
  {
    question: "Is the community guard-gated?",
    answer:
      "Yes. The community site describes a staffed gatehouse with round-the-clock access control. Visitors check in. It is not a shared gate code.",
  },
  {
    question: "Where is the clubhouse?",
    answer: `The HOA clubhouse is at ${community.clubhouseDisplay}. Clubhouse phone ${community.clubhousePhoneDisplay}. Hours posted on the community site: ${community.clubhouseHours}. That address is the association building, not Dr. Jan Duffy's office.`,
  },
  {
    question: "How do I start a tour with Dr. Jan Duffy?",
    answer: `Call or text ${business.telephoneDisplay}. Office hours are ${business.hoursDisplay}. Office address: ${business.addressDisplay}.`,
  },
] as const;

const faqScript = faqJsonLd(faqs);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Buyer guide · Summerlin West 89138"
        title="Buy a home in Heritage at Stonebridge"
        lede="421 Lennar homes. Staffed gate. A clubhouse with pools, fitness, pickleball, and bocce. I will tour the house with you and check the HOA before you offer."
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
          Text Dr. Jan
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3">
          <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p class="font-display text-4xl text-hsb-primary">{community.homes}</p>
            <p class="mt-2 text-sm uppercase tracking-wide text-hsb-muted">Homes</p>
          </div>
          <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p class="font-display text-4xl text-hsb-primary">{community.amenityCountLabel}</p>
            <p class="mt-2 text-sm uppercase tracking-wide text-hsb-muted">Amenities</p>
          </div>
          <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p class="font-display text-4xl text-hsb-primary">{community.sunnyDaysLabel}</p>
            <p class="mt-2 text-sm uppercase tracking-wide text-hsb-muted">Sunny days a year</p>
          </div>
        </div>
        <p class="mx-auto mt-6 max-w-3xl px-4 text-center text-sm text-hsb-muted">
          Counts published on the community site on {COMMUNITY_VERIFIED}.{" "}
          <a class="underline" href={COMMUNITY_SOURCE}>
            heritageatstonebridge.org
          </a>
        </p>
      </section>

      <section class="bg-hsb-cream pb-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What the community includes</h2>
          <p class="mt-3 max-w-2xl text-hsb-text">
            Downtown Summerlin, the Summerlin Library, and Red Rock Canyon National Conservation Area
            are the nearby stops buyers ask about first.
          </p>
          <div class="mt-8">
            <AmenityGrid />
          </div>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">How a purchase works with me</h2>
          <ol class="mt-8 space-y-4 text-hsb-text">
            <li>1. Search the live MLS, then tell me which floor plan you want to walk.</li>
            <li>2. I book the tour and register visitors at the staffed gate.</li>
            <li>3. We read the HOA documents in Connect before the offer.</li>
            <li>4. The offer uses sold comps from Heritage at Stonebridge, not a valley average.</li>
          </ol>
          <div class="mt-10">
            <RealScoutSimpleSearch agentEncodedId={REALSCOUT_AGENT_ID} />
          </div>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Buyer questions</h2>
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
  title: "Buy a Home in Heritage at Stonebridge | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Buy in Heritage at Stonebridge, Summerlin West 89138. 421 guard-gated 55+ homes, clubhouse, pools, and pickleball. Call Dr. Jan Duffy at (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Buy a home in Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "Guard-gated 55+ Lennar homes in 89138. Tour with Dr. Jan Duffy. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/buy-heritage-at-stonebridge",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/buy-heritage-at-stonebridge",
    },
  ],
};
