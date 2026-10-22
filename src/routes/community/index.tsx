import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { community } from "~/config/community";

const pageTitle = "Heritage at Stonebridge in Summerlin West, 89138";
const pageLede =
  "Heritage at Stonebridge is a guard-gated, age-qualified 55+ Lennar community in Summerlin West, Las Vegas, NV 89138. It has 421 homes. The clubhouse is at 930 Silverfir Court. Occupancy is subject to the association's governing documents and applicable law.";

export default component$(() => {
  return (
    <>
      <CampaignHero eyebrow="Summerlin West · Las Vegas, NV 89138" title={pageTitle} lede={pageLede}>
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
          <h2 class="font-display text-3xl text-hsb-dark">Where Heritage at Stonebridge is</h2>
          <p class="mt-4">
            The community is in Summerlin West, zip code 89138. The HOA clubhouse is at{" "}
            {community.clubhouseDisplay}. That building is the association clubhouse, not Dr. Jan
            Duffy's office. Clubhouse phone {community.clubhousePhoneDisplay}. Hours posted on the
            community site: {community.clubhouseHours}.
          </p>
          <p class="mt-4">
            Homes are single-story Lennar plans behind a staffed gate. Visitors check in at the
            gate. Amenities at the clubhouse include heated pools, a lap pool, a spa, a fitness
            center, pickleball, and bocce.
          </p>
          <ul class="mt-8 space-y-3">
            <li>
              <a class="text-hsb-primary underline" href="/what-is-heritage-at-stonebridge/">
                What is Heritage at Stonebridge?
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/amenities/">
                Clubhouse and amenities
              </a>
            </li>
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
          </ul>
        </div>
      </section>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: `${pageTitle} | Dr. Jan Duffy`,
  meta: [
    {
      name: "description",
      content: pageLede,
    },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageLede },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/community/" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/community/" }],
};
