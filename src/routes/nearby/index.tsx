import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ContactStrip } from "~/components/community/ContactStrip";
import { CampaignHero } from "~/components/community/CampaignHero";
import { business } from "~/config/business";
import { community, faqJsonLd } from "~/config/community";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

/**
 * Nearby places around the clubhouse. Google Maps supplies the pins.
 * Do not hardcode business names, ratings, or hours — those change.
 * Schools are omitted on purpose (fair-housing proxy).
 */
const NEAR = `${community.clubhouseDisplay}`;

const categories = [
  { id: "restaurants", label: "Restaurants", query: "restaurants" },
  { id: "parks", label: "Parks", query: "parks" },
  { id: "parking", label: "Parking", query: "parking" },
  { id: "grocery", label: "Grocery", query: "grocery stores" },
  { id: "coffee", label: "Coffee", query: "coffee" },
  { id: "pharmacy", label: "Pharmacy", query: "pharmacies" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

function mapEmbedSrc(query: string): string {
  const q = encodeURIComponent(`${query} near ${NEAR}`);
  return `https://maps.google.com/maps?q=${q}&z=14&output=embed`;
}

function mapSearchHref(query: string): string {
  const q = encodeURIComponent(`${query} near ${NEAR}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

const faqs = [
  {
    question: "What does the nearby amenity map show?",
    answer:
      "It shows Google Maps results for restaurants, parks, parking, grocery stores, coffee, and pharmacies near the Heritage at Stonebridge clubhouse at 930 Silverfir Ct, Las Vegas, NV 89138. The pins come from Google and can change.",
  },
  {
    question: "Are these amenities inside the community?",
    answer:
      "No. The map is the neighborhood around the clubhouse. Pools, fitness, pickleball, bocce, and the staffed gate are inside the community and are listed on the amenities page.",
  },
  {
    question: "Where is the map centered?",
    answer: `The search is centered on the HOA clubhouse at ${community.clubhouseDisplay}. Dr. Jan Duffy's office address is ${business.addressDisplay}.`,
  },
] as const;

const faqScript = faqJsonLd(faqs);

export default component$(() => {
  const active = useSignal<CategoryId>("restaurants");
  const selected = categories.find((item) => item.id === active.value) ?? categories[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Summerlin West · 89138"
        title="Nearby amenities around Heritage at Stonebridge"
        lede="Restaurants, parks, parking, grocery, coffee, and pharmacies near the clubhouse. Pick a category. The pins are Google's, and they change."
      >
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-accent px-6 py-3 text-center font-medium text-white hover:bg-hsb-accent-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href="/amenities/"
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Clubhouse amenities
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Places near 930 Silverfir Court</h2>
          <p class="mt-3 max-w-3xl text-hsb-text">
            The clubhouse is at {community.clubhouseDisplay}. Choose a place type to reload the
            map. Open the same search in Google Maps if you want directions.
          </p>

          <div class="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Nearby place types">
            {categories.map((item) => {
              const isSelected = item.id === selected.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  class={
                    isSelected
                      ? "rounded-full bg-hsb-primary px-4 py-2 text-sm font-medium text-white"
                      : "rounded-full border border-hsb-border px-4 py-2 text-sm font-medium text-hsb-primary hover:bg-hsb-sand"
                  }
                  onClick$={() => {
                    active.value = item.id;
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div class="mt-6 overflow-hidden rounded-2xl border border-hsb-border">
            <iframe
              title={`${selected.label} near Heritage at Stonebridge, 930 Silverfir Ct, Las Vegas`}
              src={mapEmbedSrc(selected.query)}
              class="h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p class="mt-4 text-sm text-hsb-muted">
            Results are loaded from Google Maps for “{selected.query} near {NEAR}”. Hours, names,
            and whether a place is open are not listed here.
          </p>
          <a
            class="mt-4 inline-block font-medium text-hsb-primary underline"
            href={mapSearchHref(selected.query)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open {selected.label.toLowerCase()} in Google Maps
          </a>
        </div>
      </section>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Inside the gate is a different list</h2>
          <p class="mt-3 max-w-3xl text-hsb-text">
            Heated pools, a lap pool, fitness, pickleball, bocce, and a staffed gate sit on the
            community site. Those are not the pins on this map.
          </p>
          <a
            href="/amenities/"
            class="mt-6 inline-block rounded-full bg-hsb-primary px-6 py-3 font-medium text-white hover:bg-hsb-primary-dark"
          >
            See clubhouse amenities
          </a>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Nearby amenity questions</h2>
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
  title: "Nearby Amenities | Heritage at Stonebridge | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Restaurants, parks, parking, grocery, coffee, and pharmacies near the Heritage at Stonebridge clubhouse at 930 Silverfir Ct, Las Vegas, NV 89138. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Nearby amenities around Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "Google Maps places near 930 Silverfir Ct in Summerlin West 89138. Clubhouse pools and courts are listed separately. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/nearby/" },
  ],
};
