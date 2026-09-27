import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { ListingProps } from "../../types/real-estate";
import { ContactAgent } from "./ContactAgent";
import { FavoriteButton } from "./FavoriteButton";
import { PropertyDetails } from "./PropertyDetails";
import { PropertyImage } from "./PropertyImage";

export interface PropertyCardProps {
  listing: ListingProps;
  showContactForm?: boolean;
}

export const PropertyCard = component$<PropertyCardProps>(
  ({ listing, showContactForm = false }) => {
    const isFavorited = useSignal(false);
    const contactFormVisible = useSignal(showContactForm);
    const imageLoaded = useSignal(false);

    // Track property views for analytics
    useVisibleTask$(() => {
      // Analytics tracking
      if (window?.gtag) {
        window.gtag("event", "property_view", {
          property_id: listing.mls,
          property_price: listing.price,
          property_location: `${listing.address.city}, ${listing.address.state}`,
        });
      }
    });

    return (
      <article
        class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
        data-mls={listing.mls}
      >
        <div class="relative overflow-hidden h-60">
          <PropertyImage
            src={listing.photos[0]}
            alt={`${listing.address.street} - ${listing.beds} bed, ${listing.baths} bath`}
            onLoad$={() => {
              imageLoaded.value = true;
            }}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            mls={listing.mls}
            onToggle$={() => {
              isFavorited.value = !isFavorited.value;
            }}
          />
          {listing.status === "pending" && (
            <div class="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-800">
              Pending
            </div>
          )}
          {listing.status === "sold" && (
            <div class="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
              Sold
            </div>
          )}
        </div>

        <PropertyDetails listing={listing} />

        <div class="p-4 flex gap-3">
          <ContactAgent
            agent={listing.agent}
            property={listing}
            isVisible={contactFormVisible}
            onToggle$={() => {
              contactFormVisible.value = !contactFormVisible.value;
            }}
          />
          <button
            type="button"
            class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick$={() => {
              // Navigate to property details page
              window.location.href = `/property/${listing.mls}`;
            }}
          >
            View Details
          </button>
        </div>
      </article>
    );
  }
);
