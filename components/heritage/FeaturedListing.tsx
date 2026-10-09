import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Calendar, ExternalLink, Phone, Square } from "lucide-react";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { buildCalendlyUrl, CALENDLY_TOUR_URL } from "@/lib/calendly";
import {
  FEATURED_LISTING,
  FEATURED_LISTING_FAQS,
} from "@/lib/heritage-stonebridge/featured-listing";
import { SITE_CONTACT } from "@/lib/site-contact";

const tourUrl = buildCalendlyUrl(CALENDLY_TOUR_URL, {
  utmSource: "894-heritage-bend",
  utmCampaign: "open-house-2026-10",
});

function formatSqft(value: number): string {
  return value.toLocaleString("en-US");
}

function ListingPhoto({
  src,
  alt,
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover"
    />
  );
}

export function FeaturedListingCard() {
  const listing = FEATURED_LISTING;
  const photo = listing.photos[0];

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-2">
        <Link
          href={listing.path}
          className="relative block aspect-[4/3] overflow-hidden bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          {photo ? (
            <ListingPhoto
              src={photo.src}
              alt={photo.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : null}
        </Link>
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
            Open this weekend · {listing.status}
          </p>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              <Link href={listing.path} className="hover:text-purple-700">
                {listing.address.street}
              </Link>
            </h2>
            <p className="mt-1 text-slate-600">
              {listing.address.city}, {listing.address.state} {listing.address.zip} ·{" "}
              {listing.plan}
            </p>
          </div>
          <p className="text-3xl font-bold text-slate-900">{listing.priceDisplay}</p>
          <ul className="flex flex-wrap gap-4 text-sm text-slate-700">
            <li className="inline-flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-purple-600" aria-hidden="true" />
              {listing.beds} bedrooms
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-purple-600" aria-hidden="true" />
              {listing.baths} baths
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Square className="h-4 w-4 text-purple-600" aria-hidden="true" />
              {formatSqft(listing.sqft)} sq ft
            </li>
          </ul>
          <div className="rounded-lg bg-purple-50 p-4 text-sm text-slate-800">
            <p className="mb-2 inline-flex items-center gap-2 font-semibold text-slate-900">
              <Calendar className="h-4 w-4 text-purple-600" aria-hidden="true" />
              Open houses
            </p>
            <ul>
              {listing.openHouses.map((openHouse) => (
                <li key={openHouse.start}>
                  {openHouse.label}, {openHouse.time}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm leading-6 text-slate-700">{listing.summary}</p>
          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <Link
              href={listing.path}
              className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500"
            >
              View this home
            </Link>
            <a
              href={`tel:${SITE_CONTACT.phone.tel}`}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {SITE_CONTACT.phone.display}
            </a>
          </div>
          <p className="text-xs text-slate-500">
            MLS {listing.mlsNumber} · {listing.sourceName} · Checked {listing.checkedOn}
          </p>
        </div>
      </div>
    </article>
  );
}

export function FeaturedListingDetail() {
  const listing = FEATURED_LISTING;
  const [hero, ...rest] = listing.photos;
  const fullAddress = `${listing.address.street}, ${listing.address.city}, ${listing.address.state} ${listing.address.zip}`;

  return (
    <div className="mx-auto max-w-6xl">
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/homes-for-sale" className="hover:text-purple-700">
              Homes for Sale
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-900">{listing.address.street}</li>
        </ol>
      </nav>

      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-700">
            {listing.status} · {listing.plan}
          </p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{fullAddress}</h1>
        </div>
        <p className="text-3xl font-bold text-slate-900">{listing.priceDisplay}</p>
      </div>

      {hero ? (
        <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-2xl bg-slate-100">
          <ListingPhoto
            src={hero.src}
            alt={hero.alt}
            priority
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>
      ) : null}
      {rest.length > 0 ? (
        <ul className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {rest.map((photo) => (
            <li key={photo.src} className="relative aspect-[3/2] overflow-hidden rounded-xl bg-slate-100">
              <ListingPhoto src={photo.src} alt={photo.alt} sizes="(min-width: 768px) 25vw, 50vw" />
            </li>
          ))}
        </ul>
      ) : null}

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Bedrooms", value: String(listing.beds) },
              { label: "Baths", value: String(listing.baths) },
              { label: "Square feet", value: formatSqft(listing.sqft) },
              { label: "Lot", value: `${formatSqft(listing.lotSqft)} sf` },
            ].map((stat) => (
              <li key={stat.label} className="rounded-xl border border-slate-200 p-4">
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </li>
            ))}
          </ul>

          <section className="mb-10 rounded-xl bg-purple-50 p-6" aria-labelledby="open-houses">
            <h2 id="open-houses" className="mb-3 text-2xl font-bold text-slate-900">
              Open houses
            </h2>
            <ul className="space-y-2 text-slate-800">
              {listing.openHouses.map((openHouse) => (
                <li key={openHouse.start}>
                  <time dateTime={openHouse.start}>{openHouse.label}</time>, {openHouse.time}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="about-this-home">
            <h2 id="about-this-home" className="mb-4 text-2xl font-bold text-slate-900">
              About this home
            </h2>
            <p className="mb-4 text-slate-700">{listing.summary}</p>
            {listing.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mb-4 text-slate-700">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="mb-10" aria-labelledby="home-facts">
            <h2 id="home-facts" className="mb-4 text-2xl font-bold text-slate-900">
              Home facts
            </h2>
            <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200">
              {listing.facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-slate-900">{fact.label}</dt>
                  <dd className="text-slate-700 sm:col-span-2">{fact.value}</dd>
                </div>
              ))}
              <div className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-slate-900">Association fee</dt>
                <dd className="text-slate-700 sm:col-span-2">
                  ${listing.associationFeeMonthly}/month listed, ${listing.associationFeeTotalMonthly}
                  /month total ({listing.associationName}). Confirm the current assessment in the
                  resale package.
                </dd>
              </div>
              <div className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-slate-900">Annual tax</dt>
                <dd className="text-slate-700 sm:col-span-2">
                  ${listing.taxAnnualAmount.toLocaleString("en-US")} as listed on MLS{" "}
                  {listing.mlsNumber}
                </dd>
              </div>
              <div className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-slate-900">Parcel</dt>
                <dd className="text-slate-700 sm:col-span-2">{listing.parcelNumber}</dd>
              </div>
            </dl>
          </section>

          <section className="mb-10" aria-labelledby="directions">
            <h2 id="directions" className="mb-4 text-2xl font-bold text-slate-900">
              Directions
            </h2>
            <p className="text-slate-700">{listing.directions}</p>
          </section>

          <section className="mb-10" aria-labelledby="listing-questions">
            <h2 id="listing-questions" className="mb-4 text-2xl font-bold text-slate-900">
              Questions about this home
            </h2>
            <div className="space-y-4">
              {FEATURED_LISTING_FAQS.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-slate-50 p-5">
                  <h3 className="mb-2 font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-sm text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-xs leading-5 text-slate-500">{listing.disclaimer}</p>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Tour this home</h2>
            <p className="mt-2 text-sm text-slate-600">
              {SITE_CONTACT.agentName}, License {SITE_CONTACT.license}
            </p>
            <p className="mt-1 text-sm text-slate-600">{SITE_CONTACT.brokerage}</p>
            <p className="mt-3 text-sm text-slate-700">
              {SITE_CONTACT.businessName}
              <br />
              {SITE_CONTACT.address.streetAddress}, {SITE_CONTACT.address.addressLocality},{" "}
              {SITE_CONTACT.address.addressRegion} {SITE_CONTACT.address.postalCode}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONTACT.phone.tel}`}
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-500"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call {SITE_CONTACT.phone.display}
              </a>
              <CalendlyButton
                url={tourUrl}
                text="Schedule a tour"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              />
              <a
                href={listing.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                3D tour
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={listing.realscoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                All 24 photos
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
