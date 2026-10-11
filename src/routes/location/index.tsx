import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { COMMUNITY_SOURCE, community, faqJsonLd } from "~/config/community";
import {
  formatMiles,
  type NamedPlace,
  NEARBY_PLACES_AS_OF,
  nearbyOutdoor,
  nearbyRestaurants,
  nearbySchools,
  nearbyServices,
} from "~/config/nearby-places";

const faqs = [
  {
    question: "Where is Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is a guard-gated 55+ Lennar community in the village of Stonebridge, Summerlin West, Las Vegas, ZIP 89138.",
  },
  {
    question: "Is the clubhouse Dr. Jan Duffy's office?",
    answer: `No. The HOA clubhouse is at ${community.clubhouseDisplay}, phone ${community.clubhousePhoneDisplay}. Dr. Jan Duffy's office is ${business.addressDisplay}, phone ${business.telephoneDisplay}. She is with ${business.broker}.`,
  },
  {
    question: "How far is Red Rock Canyon?",
    answer:
      "Red Rock Canyon National Conservation Area is listed at 4.2 miles. That figure is miles, not a drive time. Drive the route on a tour day.",
  },
] as const;

const faqScript = faqJsonLd(faqs);

const groups: ReadonlyArray<{ id: string; title: string; items: ReadonlyArray<NamedPlace> }> = [
  { id: "schools", title: "Nearby schools", items: nearbySchools },
  { id: "restaurants", title: "Local restaurants and stops", items: nearbyRestaurants },
  { id: "services", title: "Neighborhood services", items: nearbyServices },
  { id: "outdoor", title: "Outdoor", items: nearbyOutdoor },
];

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Summerlin West · Las Vegas 89138"
        title="Heritage at Stonebridge location"
        lede="The community sits in Stonebridge, Summerlin West. The HOA clubhouse is at 930 Silverfir Court. Dr. Jan Duffy's office is on Crossbridge Drive."
      >
        <a
          href="/heritage-at-stonebridge-homes-for-sale/"
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Homes for sale
        </a>
        <a
          href="/nearby/"
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Open the live map
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Two addresses, two jobs</h2>
          <div class="mt-8 grid gap-6 md:grid-cols-2">
            <article class="rounded-2xl border border-hsb-border p-6">
              <p class="text-sm uppercase tracking-wide text-hsb-muted">HOA clubhouse</p>
              <h3 class="mt-2 font-display text-2xl text-hsb-dark">Heritage at Stonebridge</h3>
              <p class="mt-3 text-hsb-text">{community.clubhouseDisplay}</p>
              <p class="mt-2 text-hsb-text">
                Clubhouse phone{" "}
                <a class="underline" href={community.clubhousePhoneHref}>
                  {community.clubhousePhoneDisplay}
                </a>
                . Hours posted on the community site: {community.clubhouseHours}.
              </p>
              <a
                class="mt-4 inline-block font-medium text-hsb-primary underline"
                href={COMMUNITY_SOURCE}
              >
                Official community site
              </a>
            </article>
            <article class="rounded-2xl border border-hsb-border p-6">
              <p class="text-sm uppercase tracking-wide text-hsb-muted">Real estate agent</p>
              <h3 class="mt-2 font-display text-2xl text-hsb-dark">{business.name}</h3>
              <p class="mt-3 text-hsb-text">{business.addressDisplay}</p>
              <p class="mt-2 text-hsb-text">
                {business.broker}. Nevada license {business.license}. {business.hoursDisplay}.
              </p>
              <a
                class="mt-4 inline-block font-medium text-hsb-primary underline"
                href={business.telephoneHref}
              >
                Call {business.telephoneDisplay}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Places and miles</h2>
          <p class="mt-3 max-w-3xl text-hsb-text">
            Distances below were supplied for Heritage at Stonebridge on {NEARBY_PLACES_AS_OF}. They
            are miles, not drive times. School rows are names only.
          </p>
          <div class="mt-10 grid gap-10 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.id} id={group.id}>
                <h3 class="font-display text-2xl text-hsb-dark">{group.title}</h3>
                <ul class="mt-4 space-y-3">
                  {group.items.map((place) => (
                    <li
                      key={`${group.title}-${place.name}-${place.miles ?? "name"}`}
                      class="flex items-baseline justify-between gap-4 border-b border-hsb-border pb-3"
                    >
                      <span class="text-hsb-text">{place.name}</span>
                      <span class="shrink-0 text-sm text-hsb-muted">
                        {place.miles === undefined ? "Nearby school" : formatMiles(place.miles)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p class="mt-8 text-sm text-hsb-muted">
            Two Olive Garden rows are listed because both distances were supplied, 8.4 miles and 2.5
            miles. Live pins for restaurants, parks, grocery, coffee, and pharmacies are on the
            nearby map.
          </p>
          <a class="mt-4 inline-block font-medium text-hsb-primary underline" href="/nearby/">
            Restaurants, parks, and parking on Google Maps
          </a>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-5xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Location questions</h2>
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
  title: "Heritage at Stonebridge Location | Summerlin West 89138",
  meta: [
    {
      name: "description",
      content:
        "Heritage at Stonebridge is in Stonebridge, Summerlin West, Las Vegas 89138. HOA clubhouse at 930 Silverfir Ct. Red Rock Canyon is listed at 4.2 miles. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "Heritage at Stonebridge location in Summerlin West",
    },
    {
      property: "og:description",
      content:
        "Clubhouse at 930 Silverfir Ct. Dr. Jan Duffy's office is on Crossbridge Dr. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/location/" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/location/" }],
};
