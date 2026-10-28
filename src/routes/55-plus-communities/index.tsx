import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { community } from "~/config/community";

const pageTitle = "55+ community in Summerlin West: Heritage at Stonebridge";
const pageLede =
  "Heritage at Stonebridge is a guard-gated, age-qualified 55+ Lennar community of 421 homes in Summerlin West, Las Vegas, NV 89138. Under the federal rule for 55+ housing, at least 80 percent of occupied homes must have one resident who is 55 or older. Occupancy is subject to the association's governing documents and applicable law.";

export default component$(() => {
  return (
    <>
      <CampaignHero eyebrow="Las Vegas, NV 89138" title={pageTitle} lede={pageLede}>
        <a
          href="/heritage-at-stonebridge-homes-for-sale/"
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Homes for sale
        </a>
        <a
          href={business.telephoneHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Call {business.telephoneDisplay}
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />
      <section class="bg-white py-16 text-hsb-text">
        <div class="mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">How the 55+ rule works here</h2>
          <p class="mt-4">
            Heritage at Stonebridge is age-qualified 55+. The federal housing-for-older-persons rule
            requires at least 80 percent of occupied homes to have one resident who is 55 or older.
            The association's own occupancy rules are in the recorded documents. Confirm those
            documents before you write an offer.
          </p>
          <p class="mt-4">
            <a class="text-hsb-primary underline" href="/questions/">
              Age, guest, and pet questions
            </a>
          </p>
        </div>
      </section>
      <section class="bg-hsb-sand py-16 text-hsb-text">
        <div class="mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">The homes</h2>
          <p class="mt-4">
            Lennar built {community.homes} single-story homes in nine floor plans. The collections
            are Cromwell, Stirling, and Evander. Live prices are on the MLS listing for each
            address. This page does not publish a starting price.
          </p>
          <ul class="mt-6 space-y-3">
            <li>
              <a class="text-hsb-primary underline" href="/floor-plans/">
                Floor plans
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/heritage-at-stonebridge-homes-for-sale/">
                Homes for sale in Heritage at Stonebridge
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="bg-white py-16 text-hsb-text">
        <div class="mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">Clubhouse and HOA</h2>
          <p class="mt-4">
            The clubhouse has heated pools,
            a lap pool, a spa, a fitness center, pickleball, and bocce. Visitors check in at the
            staffed gate. The monthly assessment is in the resale package for the home you are
            buying.
          </p>
          <ul class="mt-6 space-y-3">
            <li>
              <a class="text-hsb-primary underline" href="/amenities/">
                Clubhouse and amenities
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/hoa-fees/">
                HOA fees
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/55-and-over-communities-summerlin-las-vegas/">
                55+ communities in Summerlin
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "55+ Community in Summerlin West | Heritage at Stonebridge | Dr. Jan Duffy",
  meta: [
    { name: "description", content: pageLede },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageLede },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/55-plus-communities/" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/55-plus-communities/" }],
};
