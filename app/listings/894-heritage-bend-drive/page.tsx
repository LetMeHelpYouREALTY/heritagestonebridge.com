import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { FeaturedListingDetail } from "@/components/heritage/FeaturedListing";
import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateRealEstateListingSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import { buildPageMetadata, canonicalUrl } from "@/lib/metadata";
import {
  FEATURED_LISTING,
  FEATURED_LISTING_FAQS,
} from "@/lib/heritage-stonebridge/featured-listing";
import { SITE_CONTACT } from "@/lib/site-contact";

const listing = FEATURED_LISTING;
const pagePath = listing.path;
const pageTitle = `${listing.address.street} | ${listing.priceDisplay} | Heritage at Stonebridge`;
const pageDescription = `Lennar Claremont at ${listing.address.street}, Heritage at Stonebridge, ${listing.address.zip}. ${listing.beds} bed, ${listing.baths} bath, ${listing.sqft.toLocaleString("en-US")} sq ft, listed at ${listing.priceDisplay}. Open house Oct 10–11. MLS ${listing.mlsNumber}.`;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function HeritageBendListingPage() {
  const listingUrl = canonicalUrl(pagePath);
  const placeAddress = {
    "@type": "PostalAddress",
    streetAddress: listing.address.street,
    addressLocality: listing.address.city,
    addressRegion: listing.address.state,
    postalCode: listing.address.zip,
    addressCountry: "US",
  };

  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Homes for Sale", url: "/homes-for-sale" },
      { name: listing.address.street, url: pagePath },
    ]),
    generateWebPageSchema({
      name: pageTitle,
      description: pageDescription,
      url: listingUrl,
      dateModified: "2026-10-08",
    }),
    generateRealEstateListingSchema({
      name: `${listing.address.street}, ${listing.address.city}`,
      description: listing.summary,
      price: listing.price,
      address: {
        street: listing.address.street,
        city: listing.address.city,
        state: listing.address.state,
        zip: listing.address.zip,
      },
      bedrooms: listing.beds,
      bathrooms: listing.baths,
      sqft: listing.sqft,
      images: listing.photos.map((photo) => photo.src),
      url: listingUrl,
    }),
    generateFAQSchema([...FEATURED_LISTING_FAQS]),
    ...listing.openHouses.map((openHouse) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: `Open house at ${listing.address.street}`,
      startDate: openHouse.start,
      endDate: openHouse.end,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: listing.address.street,
        address: placeAddress,
      },
      organizer: {
        "@type": "RealEstateAgent",
        name: SITE_CONTACT.agentName,
        telephone: SITE_CONTACT.phone.tel,
        url: canonicalUrl("/"),
      },
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: listingUrl,
      },
    })),
  );

  return (
    <>
      <SchemaScript schema={pageSchema} id="heritage-bend-listing-schema" />
      <Navbar />
      <main className="bg-white pb-16 pt-24 text-slate-900">
        <div className="container mx-auto px-4">
          <FeaturedListingDetail />
        </div>
      </main>
      <Footer />
    </>
  );
}
