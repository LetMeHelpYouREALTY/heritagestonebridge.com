import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { community } from "~/config/community";

const pageTitle = "Heritage at Stonebridge homes for sale";
const pageLede =
  "Heritage at Stonebridge homes for sale are resale listings in the village of Stonebridge, Summerlin West, Las Vegas, NV 89138. Lennar built 421 single-story, age-qualified 55+ homes. The price and status are on the live MLS listing for each address.";

export default component$(() => {
  return (
    <>
      <CampaignHero eyebrow="Village of Stonebridge · Summerlin West 89138" title={pageTitle} lede={pageLede}>
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href="/floor-plans/"
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Floor plans
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />
      <section class="bg-white py-16 text-hsb-text">
        <div class="mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">What is for sale here</h2>
          <p class="mt-4">
            The listings below are the current Heritage at Stonebridge homes on the MLS. This page
            does not publish a starting price. Confirm the price, the status, and the seller
            disclosures on the listing before you write an offer.
          </p>
          <p class="mt-4">
            Lennar built nine floor plans in three collections. Cromwell is 1,232 to 1,422 square
            feet. Stirling is 1,747 to 2,236 square feet. Evander is 2,515 to 2,873 square feet.
            The homes are single-story. Occupancy is subject to the association's governing
            documents and applicable law.
          </p>
        </div>
      </section>
      <section class="bg-hsb-sand py-16 text-hsb-text">
        <div class="mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl text-hsb-dark">The community around the home</h2>
          <p class="mt-4">
            The clubhouse is at {community.clubhouseDisplay}. Amenities there include heated pools,
            a lap pool, a spa, a fitness center, pickleball, and bocce. Visitors check in at the
            staffed gate. The monthly assessment is in the resale package for the address you are
            buying.
          </p>
          <ul class="mt-6 space-y-3">
            <li>
              <a class="text-hsb-primary underline" href="/floor-plans/">
                Floor plans
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/hoa-fees/">
                HOA fees
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/community/">
                Village of Stonebridge
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
  title: "Heritage at Stonebridge Homes for Sale | Summerlin West 89138 | Dr. Jan Duffy",
  meta: [
    { name: "description", content: pageLede },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageLede },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale/",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale/",
    },
  ],
};
