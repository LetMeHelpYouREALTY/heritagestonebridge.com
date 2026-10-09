import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";
import { featuredListing } from "~/config/featured-listing";

/** Homepage card for the current Heritage resale. */
export const FeaturedListingCard = component$(() => {
  const listing = featuredListing;
  const photo = listing.photos[0];

  return (
    <section class="bg-hsb-cream py-16" aria-labelledby="featured-home">
      <div class="mx-auto max-w-7xl px-4">
        <article class="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div class="grid lg:grid-cols-2">
            <a href={listing.path} class="relative block min-h-72 bg-hsb-sand">
              {photo ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1085}
                  height={723}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  class="h-full w-full object-cover"
                />
              ) : null}
            </a>
            <div class="flex flex-col gap-4 p-8">
              <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent">
                Open this weekend · {listing.status}
              </p>
              <h2 id="featured-home" class="font-display text-4xl text-hsb-dark">
                <a href={listing.path}>{listing.street}</a>
              </h2>
              <p class="text-hsb-text">
                {listing.city}, {listing.region} {listing.postalCode} · {listing.plan}
              </p>
              <p class="font-display text-4xl text-hsb-dark">{listing.priceDisplay}</p>
              <p class="text-hsb-text">
                {listing.beds} bedrooms · {listing.baths} baths · {listing.sqft} sq ft
              </p>
              <ul class="rounded-2xl bg-hsb-cream p-4 text-hsb-text">
                {listing.openHouses.map((openHouse) => (
                  <li key={openHouse.start}>
                    <time dateTime={openHouse.start}>{openHouse.label}</time>, {openHouse.time}
                  </li>
                ))}
              </ul>
              <p class="text-hsb-text">{listing.summary}</p>
              <div class="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  href={listing.path}
                  class="rounded-full bg-hsb-primary px-6 py-3 text-center font-semibold text-white hover:bg-hsb-primary-dark"
                >
                  View this home
                </a>
                <a
                  href={business.telephoneHref}
                  class="rounded-full border border-hsb-border px-6 py-3 text-center font-semibold text-hsb-primary hover:bg-hsb-sand"
                >
                  Call {business.telephoneDisplay}
                </a>
              </div>
              <p class="text-sm text-hsb-muted">
                MLS {listing.mlsNumber} · {listing.sourceName} · Checked {listing.checkedOn}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
});
