import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { community } from "~/config/community";

const pageTitle = "Summerlin 55+ communities: Heritage at Stonebridge";
const pageLede =
  "Heritage at Stonebridge is an age-qualified 55+ community in Summerlin. It sits in the village of Stonebridge, Summerlin West, Las Vegas, NV 89138. Lennar built 421 guard-gated, single-story homes. Occupancy is subject to the association's governing documents and applicable law.";

export default component$(() => {
  return (
    <>
      <CampaignHero eyebrow="Summerlin · Las Vegas, NV 89138" title={pageTitle} lede={pageLede}>
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
          <h2 class="font-display text-3xl text-hsb-dark">Which Summerlin 55+ community is this?</h2>
          <p class="mt-4">
            This site covers Heritage at Stonebridge. Under the federal rule for 55+ housing, at
            least 80 percent of occupied homes must have one resident who is 55 or older. The
            association's own occupancy rules are in the recorded documents. Confirm those
            documents before you write an offer.
          </p>
          <p class="mt-4">
            The clubhouse is at {community.clubhouseDisplay}. Amenities there include heated pools,
            a lap pool, a spa, a fitness center, pickleball, and bocce. Visitors check in at the
            staffed gate.
          </p>
          <ul class="mt-6 space-y-3">
            <li>
              <a class="text-hsb-primary underline" href="/55-plus-communities/">
                55+ community details
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/heritage-at-stonebridge-homes-for-sale/">
                Homes for sale
              </a>
            </li>
            <li>
              <a class="text-hsb-primary underline" href="/questions/">
                Age and HOA questions
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
  title: "Summerlin 55+ Communities | Heritage at Stonebridge | Dr. Jan Duffy",
  meta: [
    { name: "description", content: pageLede },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageLede },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-and-over-communities-summerlin-las-vegas/",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/55-and-over-communities-summerlin-las-vegas/",
    },
  ],
};
