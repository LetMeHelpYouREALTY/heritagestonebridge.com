import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import { community } from "~/config/community";

const pageTitle = "What is Heritage at Stonebridge?";
const pageLede =
  "Heritage at Stonebridge is a guard-gated, age-qualified 55+ Lennar community of 421 homes in Summerlin West, Las Vegas, NV 89138. The clubhouse is at 930 Silverfir Court. Occupancy is subject to the association's governing documents and applicable law.";

const sections = [
  {
    heading: "Where is Heritage at Stonebridge?",
    body: "It is in Summerlin West, zip code 89138. The HOA clubhouse is at 930 Silverfir Court. That address is the association building, not Dr. Jan Duffy's office.",
    href: "/community/",
    label: "Community page",
  },
  {
    heading: "Are there homes for sale?",
    body: "Resale homes are listed on the MLS. The page below shows the current Heritage at Stonebridge listings. Price and status change, so confirm the live listing before you write an offer.",
    href: "/heritage-at-stonebridge-homes-for-sale/",
    label: "Homes for sale",
  },
  {
    heading: "What are the HOA fees?",
    body: "The monthly assessment is in the resale package for the home you are buying. This site does not publish a single HOA dollar amount, because the published figures do not match.",
    href: "/hoa-fees/",
    label: "HOA fees",
  },
  {
    heading: "What is in the clubhouse?",
    body: `The clubhouse is at ${community.clubhouseDisplay}. Amenities there include heated pools, a lap pool, a spa, a fitness center, pickleball, and bocce. Hours posted on the community site: ${community.clubhouseHours}.`,
    href: "/amenities/",
    label: "Clubhouse and amenities",
  },
] as const;

export default component$(() => {
  return (
    <>
      <CampaignHero eyebrow="Summerlin West · Las Vegas, NV 89138" title={pageTitle} lede={pageLede}>
        <a
          href="/questions/"
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          All questions
        </a>
        <a
          href={business.telephoneHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Call {business.telephoneDisplay}
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />
      {sections.map((section, index) => (
        <section key={section.heading} class={index % 2 === 0 ? "bg-white py-16" : "bg-hsb-sand py-16"}>
          <div class="mx-auto max-w-3xl px-4">
            <h2 class="font-display text-3xl text-hsb-dark">{section.heading}</h2>
            <p class="mt-4 text-hsb-text">{section.body}</p>
            <p class="mt-4">
              <a class="text-hsb-primary underline" href={section.href}>
                {section.label}
              </a>
            </p>
          </div>
        </section>
      ))}
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: `${pageTitle} | Summerlin West 89138 | Dr. Jan Duffy`,
  meta: [
    { name: "description", content: pageLede },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageLede },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/what-is-heritage-at-stonebridge/",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/what-is-heritage-at-stonebridge/",
    },
  ],
};
