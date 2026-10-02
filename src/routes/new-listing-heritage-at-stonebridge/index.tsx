import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AmenityGrid } from "~/components/community/AmenityGrid";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { business } from "~/config/business";
import { REALSCOUT_AGENT_ID, community, faqJsonLd } from "~/config/community";

const faqs = [
  {
    question: "What is the address and price of the new listing?",
    answer:
      "Not published yet. Address, beds, baths, square footage, and list price go up when the home is active in the MLS. Call or text (702) 789-6561 and Dr. Jan Duffy will send the sheet.",
  },
  {
    question: "Where is Heritage at Stonebridge?",
    answer: `Summerlin West, Las Vegas, Nevada 89138. The community has ${community.homes} homes. The HOA clubhouse is at ${community.clubhouseDisplay}.`,
  },
  {
    question: "Can I tour before the listing is public?",
    answer: `Yes, when the seller allows it. Call ${business.telephoneDisplay}. Visitors check in at the staffed gate.`,
  },
] as const;

const faqScript = faqJsonLd(faqs);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="New listing · Heritage at Stonebridge"
        title="A Heritage at Stonebridge home with Dr. Jan Duffy"
        lede="The address and list price are not on this page yet. They go on the MLS sheet first. Call (702) 789-6561 and I will send it."
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
          Text for the listing sheet
        </a>
      </CampaignHero>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <div class="rounded-2xl border border-hsb-border bg-white p-8">
            <h2 class="font-display text-3xl text-hsb-dark">Listing facts</h2>
            <dl class="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt class="text-sm uppercase tracking-wide text-hsb-muted">Address</dt>
                <dd class="mt-1 text-lg text-hsb-dark">Publishes with the MLS</dd>
              </div>
              <div>
                <dt class="text-sm uppercase tracking-wide text-hsb-muted">List price</dt>
                <dd class="mt-1 text-lg text-hsb-dark">Publishes with the MLS</dd>
              </div>
              <div>
                <dt class="text-sm uppercase tracking-wide text-hsb-muted">Community</dt>
                <dd class="mt-1 text-lg text-hsb-dark">Heritage at Stonebridge, 89138</dd>
              </div>
              <div>
                <dt class="text-sm uppercase tracking-wide text-hsb-muted">Listing agent</dt>
                <dd class="mt-1 text-lg text-hsb-dark">Dr. Jan Duffy, {business.telephoneDisplay}</dd>
              </div>
            </dl>
            <p class="mt-6 text-hsb-text">
              Call or text {business.telephoneDisplay} for the address, price, and a private tour.
              The number on the phone call matches the MLS sheet.
            </p>
          </div>
          <div class="mt-12">
            <h2 class="font-display text-3xl text-hsb-dark">The community around the house</h2>
            <div class="mt-8">
              <AmenityGrid />
            </div>
          </div>
          <div class="mt-12">
            <h2 class="font-display text-3xl text-hsb-dark">Other Heritage at Stonebridge homes</h2>
            <p class="mt-3 text-hsb-text">Live MLS inventory. Not a substitute for this listing's sheet.</p>
            <div class="mt-6">
              <RealScoutOfficeListingsWidget
                agentEncodedId={REALSCOUT_AGENT_ID}
                priceMin={400000}
                priceMax={1600000}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Listing questions</h2>
          <div class="mt-8 space-y-6">
            {faqs.map((item) => (
              <article key={item.question}>
                <h3 class="font-display text-2xl text-hsb-dark">{item.question}</h3>
                <p class="mt-2 text-hsb-text">{item.answer}</p>
              </article>
            ))}
          </div>
          <p class="mt-8">
            <a class="font-semibold text-hsb-primary underline" href="/buy-heritage-at-stonebridge">
              Buyer guide
            </a>
            <span class="mx-2 text-hsb-muted">·</span>
            <a class="font-semibold text-hsb-primary underline" href="/sell-heritage-at-stonebridge">
              Seller guide
            </a>
          </p>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "New Listing in Heritage at Stonebridge | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "New Heritage at Stonebridge listing with Dr. Jan Duffy in Summerlin West 89138. Address and price publish with the MLS. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Heritage at Stonebridge home with Dr. Jan Duffy",
    },
    {
      property: "og:description",
      content:
        "Guard-gated 55+ community in 89138. Call (702) 789-6561 for the listing sheet. Address and price follow the MLS.",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/new-listing-heritage-at-stonebridge",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/new-listing-heritage-at-stonebridge",
    },
  ],
};
