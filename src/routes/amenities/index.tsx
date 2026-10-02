import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AmenityGrid } from "~/components/community/AmenityGrid";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { business } from "~/config/business";
import { COMMUNITY_SOURCE, COMMUNITY_VERIFIED, community, faqJsonLd } from "~/config/community";

/**
 * Sources (checked 2026-10-02):
 * - Clubhouse size 8,000 sq ft, opening August 2021, pickleball and bocce:
 *   Howard Hughes "Summerlin 101 Active Adult and Senior Living" fact sheet, 2024-02-07.
 * - Address, phone, hours, pools, spa, fitness, staffed gate: heritageatstonebridge.org.
 * NOT verified, so not stated here: court counts, activities-director staffing, HOA dues.
 */
const HOWARD_HUGHES_SOURCE =
  "https://summerlin.com/wp-content/uploads/2024/04/Summerlin-101-Active-Adult-and-Senior-Living.pdf";

const faqs = [
  {
    question: "How big is the Heritage at Stonebridge clubhouse?",
    answer:
      "The clubhouse is 8,000 square feet, according to the Howard Hughes Summerlin fact sheet dated February 7, 2024.",
  },
  {
    question: "Where is the clubhouse and when is it open?",
    answer: `The HOA clubhouse is at ${community.clubhouseDisplay}. Clubhouse phone ${community.clubhousePhoneDisplay}. Hours posted on the community site: ${community.clubhouseHours}. Confirm hours with the clubhouse before you visit.`,
  },
  {
    question: "Does Heritage at Stonebridge have a pool?",
    answer:
      "Yes. The community site lists heated pools, a lap pool, and an outdoor spa at the clubhouse.",
  },
  {
    question: "Are there pickleball courts?",
    answer:
      "Yes. Pickleball and bocce courts sit inside the community next to the clubhouse. Ask the clubhouse for court times and reservations.",
  },
  {
    question: "Is there a golf course in Heritage at Stonebridge?",
    answer:
      "No golf course appears in the amenity lists published by the HOA or the developer. Buyers who want on-site golf usually compare Sun City Summerlin or Siena.",
  },
  {
    question: "Can I see the clubhouse before I buy?",
    answer: `Yes, on a tour. Visitors check in at the staffed gate. Call or text Dr. Jan Duffy at ${business.telephoneDisplay} to set one up.`,
  },
] as const;

const faqScript = faqJsonLd(faqs);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Clubhouse and amenities · Summerlin West 89138"
        title="Heritage at Stonebridge clubhouse and amenities"
        lede="An 8,000 square foot clubhouse, heated pools, a lap pool, fitness, pickleball, and bocce. All of it sits behind a staffed gate."
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
        <div class="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3">
          <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p class="font-display text-4xl text-hsb-primary">8,000</p>
            <p class="mt-2 text-sm uppercase tracking-wide text-hsb-muted">Clubhouse sq ft</p>
          </div>
          <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p class="font-display text-4xl text-hsb-primary">{community.homes}</p>
            <p class="mt-2 text-sm uppercase tracking-wide text-hsb-muted">Homes share it</p>
          </div>
          <div class="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p class="font-display text-4xl text-hsb-primary">2021</p>
            <p class="mt-2 text-sm uppercase tracking-wide text-hsb-muted">Community opened</p>
          </div>
        </div>
        <p class="mx-auto mt-6 max-w-3xl px-4 text-center text-sm text-hsb-muted">
          Clubhouse size and opening year from the{" "}
          <a class="underline" href={HOWARD_HUGHES_SOURCE}>
            Howard Hughes Summerlin fact sheet
          </a>
          , February 7, 2024. Home count from{" "}
          <a class="underline" href={COMMUNITY_SOURCE}>
            heritageatstonebridge.org
          </a>
          , checked {COMMUNITY_VERIFIED}.
        </p>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">The clubhouse</h2>
          <p class="mt-3 max-w-3xl text-hsb-text">
            The clubhouse is the center of the community. It holds a lounge, a kitchen, meeting
            rooms, and the fitness center. The pools, spa, and courts are right outside.
          </p>
          <dl class="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <dt class="text-sm uppercase tracking-wide text-hsb-muted">Address</dt>
              <dd class="mt-1 text-hsb-text">{community.clubhouseDisplay}</dd>
            </div>
            <div>
              <dt class="text-sm uppercase tracking-wide text-hsb-muted">Posted hours</dt>
              <dd class="mt-1 text-hsb-text">{community.clubhouseHours}</dd>
            </div>
            <div>
              <dt class="text-sm uppercase tracking-wide text-hsb-muted">Clubhouse phone</dt>
              <dd class="mt-1 text-hsb-text">
                <a class="underline" href={community.clubhousePhoneHref}>
                  {community.clubhousePhoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
          <p class="mt-6 max-w-3xl text-sm text-hsb-muted">
            That address is the association building, not Dr. Jan Duffy's office. Hours can change,
            so confirm with the clubhouse before you go.
          </p>
        </div>
      </section>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What residents use</h2>
          <p class="mt-3 max-w-2xl text-hsb-text">
            Everything below is inside the gate. The published amenity lists do not include a golf
            course.
          </p>
          <div class="mt-8">
            <AmenityGrid />
          </div>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What to check before you buy</h2>
          <ul class="mt-8 space-y-4 text-hsb-text">
            <li>
              Ask for the current HOA budget. It shows what your dues pay for at the clubhouse and
              the gate.
            </li>
            <li>Ask the clubhouse about guest rules for the pools and courts.</li>
            <li>Walk from the home you like to the clubhouse. Distance matters more than it looks on a map.</li>
            <li>
              Read the HOA documents with me before you write an offer.{" "}
              <a class="underline" href="/buy-heritage-at-stonebridge">
                Here is how a purchase works.
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Clubhouse and amenity questions</h2>
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
  title: "Heritage at Stonebridge Clubhouse & Amenities | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Heritage at Stonebridge amenities: 8,000 sq ft clubhouse, heated pools, lap pool, fitness, pickleball and bocce behind a staffed gate. Call (702) 789-6561.",
    },
    { property: "og:title", content: "Heritage at Stonebridge clubhouse and amenities" },
    {
      property: "og:description",
      content:
        "8,000 sq ft clubhouse, pools, fitness, pickleball and bocce in Summerlin West 89138. Tour with Dr. Jan Duffy. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/amenities" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/amenities" }],
};
