import { component$, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutOfficeListingsProps {
  agentEncodedId: string;
  sortOrder?: "STATUS_AND_SIGNIFICANT_CHANGE" | "PRICE_ASC" | "PRICE_DESC" | "DATE_DESC";
  listingStatus?: "For Sale" | "Pending" | "Sold" | "All";
  propertyTypes?: string; // e.g., "SFR,MF" for Single Family and Multi-Family
  priceMin?: number;
  priceMax?: number;
  className?: string;
}

export const RealScoutOfficeListings = component$<RealScoutOfficeListingsProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = 500000,
    priceMax = 600000,
    className = "",
  }) => {
    useVisibleTask$(({ track }) => {
      track(() => agentEncodedId);

      if (typeof window === "undefined") return;

      // Ensure RealScout script is loaded
      const checkRealScoutLoaded = () => {
        if (window.customElements?.get("realscout-office-listings")) {
          // Widget is ready
          return true;
        }
        return false;
      };

      // Wait for RealScout to load
      const waitForRealScout = () => {
        if (checkRealScoutLoaded()) {
          return;
        }

        // Check again in 100ms
        setTimeout(waitForRealScout, 100);
      };

      waitForRealScout();
    });

    return (
      <div class={`realscout-widget-container ${className || ""}`}>
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Available Properties</h3>
          <p class="text-gray-600">Discover our latest listings in Heritage at Stonebridge</p>
        </div>

        <realscout-office-listings
          agent-encoded-id={agentEncodedId}
          sort-order={sortOrder}
          listing-status={listingStatus}
          property-types={propertyTypes}
          price-min={priceMin}
          price-max={priceMax}
          class="w-full"
        ></realscout-office-listings>
      </div>
    );
  }
);

// RealScout widgets use standard customElements API
