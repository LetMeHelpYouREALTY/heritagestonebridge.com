import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ContactStrip } from "~/components/community/ContactStrip";
import { business } from "~/config/business";
import { faqJsonLd } from "~/config/community";
import { featuredListing, featuredListingFaqs } from "~/config/featured-listing";

const listing = featuredListing;
const faqScript = faqJsonLd(featuredListingFaqs);
const placeAddress = {
  "@type": "PostalAddress",
  streetAddress: listing.street,
  addressLocality: listing.city,
  addressRegion: listing.region,
  postalCode: listing.postalCode,
  addressCountry: "US",
};

const listingScript = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      name: `${listing.street}, ${listing.city}`,
      url: `https://heritagestonebridge.com${listing.path}`,
      datePosted: listing.listDate,
      description: listing.summary,
      image: listing.photos.map((photo) => photo.src),
      numberOfBedrooms: listing.beds,
      numberOfBathroomsTotal: listing.baths,
      floorSize: {
        "@type": "QuantitativeValue",
        value: 1234,
        unitCode: "FTK",
      },
      address: placeAddress,
      offers: {
        "@type": "Offer",
        price: listing.price,
        priceCurrency: "USD",
      },
    },
    ...listing.openHouses.map((openHouse) => ({
      "@type": "Event",
      name: `Open house at ${listing.street}`,
      startDate: openHouse.start,
      endDate: openHouse.end,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: listing.street,
        address: placeAddress,
      },
      organizer: {
        "@type": "RealEstateAgent",
        name: "Dr. Jan Duffy",
        telephone: business.telephone,
        url: "https://heritagestonebridge.com",
      },
    })),
  ],
});

const facts = [
  { label: "Plan", value: listing.plan },
  { label: "Stories", value: "1" },
  { label: "Year built", value: String(listing.yearBuilt) },
  { label: "Lot", value: `${listing.lotSqft} sq ft` },
  { label: "Garage", value: "2-car attached" },
  { label: "Kitchen", value: "Island, breakfast bar, quartz counters" },
  { label: "Patio", value: "Covered patio and porch, plus a paver patio" },
  {
    label: "Association fee",
    value: `$${listing.associationFeeMonthly}/month listed, $${listing.associationFeeTotalMonthly}/month total (${listing.associationName})`,
  },
  { label: "Annual tax", value: `$${listing.taxAnnualAmount.toLocaleString("en-US")} as listed` },
  {
    label: "Schools on the MLS record",
    value:
      "Billy & Rosemary Vassiliadis Elementary, Sig Rogich Middle School, Palo Verde High School. Assignment is set by the Clark County School District.",
  },
] as const;

export default component$(() => {
  const [hero, ...rest] = listing.photos;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <script type="application/ld+json" dangerouslySetInnerHTML={listingScript} />
      <article class="bg-white">
        {hero ? (
          <img
            src={hero.src}
            alt={hero.alt}
            width={1085}
            height={723}
            fetchPriority="high"
            sizes="100vw"
            class="aspect-[3/2] max-h-[70vh] w-full object-cover"
          />
        ) : null}
        <header class="bg-hsb-dark text-white">
          <div class="mx-auto max-w-6xl px-4 py-12">
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent-light">
              {listing.status} · {listing.plan}
            </p>
            <h1 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {listing.street}, {listing.city}, {listing.region} {listing.postalCode}
            </h1>
            <p class="mt-4 font-display text-4xl">{listing.priceDisplay}</p>
            <ul class="mt-4 text-lg text-hsb-sand">
              {listing.openHouses.map((openHouse) => (
                <li key={openHouse.start}>
                  Open house <time dateTime={openHouse.start}>{openHouse.label}</time>, {openHouse.time}
                </li>
              ))}
            </ul>
            <p class="mt-4 max-w-2xl text-lg text-hsb-sand">{listing.summary}</p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.telephoneHref}
                class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
              >
                Call {business.telephoneDisplay}
              </a>
              <a
                href={business.smsHref}
                class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
              >
                Text {business.telephoneDisplay}
              </a>
              <a
                href={listing.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
              >
                3D tour
              </a>
            </div>
          </div>
        </header>

        {rest.length > 0 ? (
          <ul class="grid grid-cols-2 gap-3 bg-hsb-cream p-3 md:grid-cols-4">
            {rest.map((photo) => (
              <li key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1085}
                  height={723}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  class="aspect-[3/2] w-full object-cover"
                />
              </li>
            ))}
          </ul>
        ) : null}

        <div class="mx-auto max-w-6xl px-4 py-16">
          <ul class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <li class="rounded-2xl border border-hsb-border p-4">
              <p class="font-display text-3xl text-hsb-dark">{listing.beds}</p>
              <p class="text-hsb-muted">Bedrooms</p>
            </li>
            <li class="rounded-2xl border border-hsb-border p-4">
              <p class="font-display text-3xl text-hsb-dark">{listing.baths}</p>
              <p class="text-hsb-muted">Baths</p>
            </li>
            <li class="rounded-2xl border border-hsb-border p-4">
              <p class="font-display text-3xl text-hsb-dark">{listing.sqft}</p>
              <p class="text-hsb-muted">Square feet</p>
            </li>
            <li class="rounded-2xl border border-hsb-border p-4">
              <p class="font-display text-3xl text-hsb-dark">{listing.lotSqft}</p>
              <p class="text-hsb-muted">Lot sq ft</p>
            </li>
          </ul>

          <section class="mt-12 rounded-3xl bg-hsb-cream p-8" aria-labelledby="open-houses">
            <h2 id="open-houses" class="font-display text-3xl text-hsb-dark">
              Open houses
            </h2>
            <ul class="mt-4 space-y-2 text-lg text-hsb-text">
              {listing.openHouses.map((openHouse) => (
                <li key={openHouse.start}>
                  <time dateTime={openHouse.start}>{openHouse.label}</time>, {openHouse.time}
                </li>
              ))}
            </ul>
          </section>

          <section class="mt-12" aria-labelledby="about-this-home">
            <h2 id="about-this-home" class="font-display text-3xl text-hsb-dark">
              About this home
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-hsb-text">
              Inside, the Lennar Claremont plan offers 2 bedrooms, 2 baths, and 1,234 square feet.
              The great room is open to an island kitchen with quartz counters, a breakfast bar, and
              a gas range. The primary bedroom is 11 by 12 with a walk-in closet. The second bedroom
              is 14 by 10. The living room is 21 by 12.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-hsb-text">
              Heritage at Stonebridge is a guard-gated, age-qualified 55+ community in Summerlin
              West. Occupancy is subject to the association&apos;s governing documents and applicable
              law. Amenities include a clubhouse, fitness center, heated lap pool, spa, pickleball
              courts, and bocce. The built-ins convey with the home.
            </p>
          </section>

          <section class="mt-12" aria-labelledby="home-facts">
            <h2 id="home-facts" class="font-display text-3xl text-hsb-dark">
              Home facts
            </h2>
            <dl class="mt-6 divide-y divide-hsb-border rounded-2xl border border-hsb-border">
              {facts.map((fact) => (
                <div key={fact.label} class="grid gap-1 p-4 sm:grid-cols-3">
                  <dt class="font-medium text-hsb-dark">{fact.label}</dt>
                  <dd class="text-hsb-text sm:col-span-2">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section class="mt-12" aria-labelledby="directions">
            <h2 id="directions" class="font-display text-3xl text-hsb-dark">
              Directions
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-hsb-text">
              From the 215 West, exit Hughes Park Drive East. Turn left onto West Charleston
              Boulevard, right onto North Sky Vista Drive, and left onto Crossbridge Drive. Turn
              left onto Heritage Heights Drive, then right to stay on Heritage Heights Drive. At the
              traffic circle, turn right onto Heritage Bend Drive. The home is on the right.
            </p>
          </section>

          <section class="mt-12" aria-labelledby="listing-questions">
            <h2 id="listing-questions" class="font-display text-3xl text-hsb-dark">
              Questions about this home
            </h2>
            <div class="mt-6 space-y-6">
              {featuredListingFaqs.map((item) => (
                <div key={item.question}>
                  <h3 class="font-display text-2xl text-hsb-dark">{item.question}</h3>
                  <p class="mt-2 text-hsb-text">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <p class="mt-10">
            <a
              href={listing.realscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-hsb-primary underline"
            >
              See all 24 photos on RealScout
            </a>
          </p>
          <p class="mt-6 text-sm leading-6 text-hsb-muted">
            Listing information courtesy of the Greater Las Vegas Association of Realtors (GLVAR).
            Copyright Greater Las Vegas Association of Realtors. All rights reserved. Information is
            deemed reliable but not guaranteed and should be independently verified. Listing offered
            by {listing.listingBrokerage}. MLS {listing.mlsNumber}. Checked {listing.checkedOn}.{" "}
            {business.name}. {business.addressDisplay}. {business.telephoneDisplay}. License{" "}
            {business.license}. {business.broker}.
          </p>
        </div>
      </article>
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "894 Heritage Bend Drive | $539,888 | Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content:
        "Lennar Claremont at 894 Heritage Bend Drive, Heritage at Stonebridge, 89138. 2 bed, 2 bath, 1,234 sq ft, listed at $539,888. Open house Oct 10–11. MLS 2825123. Call (702) 789-6561.",
    },
    {
      property: "og:title",
      content: "894 Heritage Bend Drive | $539,888",
    },
    {
      property: "og:description",
      content:
        "Open house Saturday 12–2 and Sunday 10–12. Lennar Claremont in Heritage at Stonebridge, Summerlin West. MLS 2825123.",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/new-listing-heritage-at-stonebridge",
    },
    {
      property: "og:image",
      content: featuredListing.photos[0]?.src ?? "",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/new-listing-heritage-at-stonebridge",
    },
  ],
};
