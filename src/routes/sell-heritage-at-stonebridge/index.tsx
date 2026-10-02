import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { business } from "~/config/business";
import { community, faqJsonLd } from "~/config/community";

const faqs = [
  {
    question: "What price will my Heritage at Stonebridge home list for?",
    answer:
      "Dr. Jan Duffy does not quote a list price until the Heritage at Stonebridge sales are pulled. The price comes from this community, not a Las Vegas average. Call (702) 789-6561 to start that consult.",
  },
  {
    question: "How do buyers get through the gate for a showing?",
    answer:
      "The community uses QuickPass for visitor access. Guests can be pre-registered, and temporary gate codes can be issued for showings, contractors, and deliveries.",
  },
  {
    question: "Where are the HOA documents?",
    answer: `Owners use Connect for community updates, meeting minutes, financials, and governing documents. The clubhouse is at ${community.clubhouseDisplay}, phone ${community.clubhousePhoneDisplay}.`,
  },
  {
    question: "Who is the listing agent?",
    answer: `Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, Nevada license ${business.license}. Office: ${business.addressDisplay}. Phone ${business.telephoneDisplay}.`,
  },
] as const;

const faqScript = faqJsonLd(faqs);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Seller guide · Heritage at Stonebridge"
        title="Sell your home in Heritage at Stonebridge"
        lede="I price from sold homes inside this community. Showings check in at the staffed gate. You get one number for the listing: (702) 789-6561."
      >
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-accent px-6 py-3 text-center font-medium text-white hover:bg-hsb-accent-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href="/new-listing-heritage-at-stonebridge"
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Listing campaign page
        </a>
      </CampaignHero>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What I do before the sign goes up</h2>
          <ol class="mt-8 grid gap-6 md:grid-cols-2">
            <li class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="font-display text-2xl text-hsb-dark">1. Comps</h3>
              <p class="mt-3 text-hsb-text">
                Sold prices, days on market, and floor plan. No list price until that sheet is done.
              </p>
            </li>
            <li class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="font-display text-2xl text-hsb-dark">2. HOA file</h3>
              <p class="mt-3 text-hsb-text">
                Connect holds the governing documents buyers will ask for. I flag the items that
                change an offer.
              </p>
            </li>
            <li class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="font-display text-2xl text-hsb-dark">3. Gate plan</h3>
              <p class="mt-3 text-hsb-text">
                QuickPass pre-registers buyers. Temporary codes cover photographers and inspectors.
              </p>
            </li>
            <li class="rounded-2xl bg-white p-6 shadow-sm">
              <h3 class="font-display text-2xl text-hsb-dark">4. Launch</h3>
              <p class="mt-3 text-hsb-text">
                MLS, Google, and Facebook use the same listing page once the address and price are
                live.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Community tools owners already use</h2>
          <ul class="mt-6 space-y-3 text-hsb-text">
            <li>
              <a class="font-semibold text-hsb-primary underline" href={community.connectUrl}>
                Connect
              </a>{" "}
              for HOA documents and board updates.
            </li>
            <li>
              <a class="font-semibold text-hsb-primary underline" href={community.recdeskUrl}>
                RecDesk
              </a>{" "}
              for classes, events, and amenity guest passes.
            </li>
            <li>
              <a class="font-semibold text-hsb-primary underline" href={community.quickpassUrl}>
                QuickPass
              </a>{" "}
              for visitor check-in and temporary gate codes.
            </li>
          </ul>
          <p class="mt-6 text-sm text-hsb-muted">
            Clubhouse {community.clubhouseDisplay}. Association phone {community.clubhousePhoneDisplay}.
            Posted clubhouse hours: {community.clubhouseHours}. Dr. Jan Duffy's office remains{" "}
            {business.addressDisplay}, {business.telephoneDisplay}.
          </p>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Seller questions</h2>
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
  title: "Sell a Home in Heritage at Stonebridge | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Sell in Heritage at Stonebridge with Dr. Jan Duffy. Pricing from community comps, HOA documents, and staffed-gate showings. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Sell your Heritage at Stonebridge home",
    },
    {
      property: "og:description",
      content:
        "Listing prep for Heritage at Stonebridge in 89138. Call Dr. Jan Duffy at (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/sell-heritage-at-stonebridge",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/sell-heritage-at-stonebridge",
    },
  ],
};
