import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface RealScoutWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export const RealScoutWidget = component$<RealScoutWidgetProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = "500000",
    priceMax = "600000",
  }) => {
    const isClient = useSignal(false);
    const isReady = useSignal(false);

    useVisibleTask$(() => {
      if (typeof window === "undefined") return;

      isClient.value = true;

      if (typeof customElements === "undefined") return;

      // Simple check if element is already defined
      if (customElements.get("realscout-office-listings")) {
        isReady.value = true;
        return;
      }

      // Wait for the element to be defined
      customElements
        .whenDefined("realscout-office-listings")
        .then(() => {
          isReady.value = true;
        })
        .catch(() => {
          console.warn("RealScout widget failed to load");
        });
    });

    // Only render on client side to avoid SSR issues with custom elements
    if (!isClient.value) {
      return (
        <div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
          <div class="text-center text-gray-500">Loading property listings...</div>
        </div>
      );
    }

    return (
      <div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
        {isReady.value ? (
          <realscout-office-listings
            agent-encoded-id={agentEncodedId}
            sort-order={sortOrder}
            listing-status={listingStatus}
            property-types={propertyTypes}
            price-min={priceMin}
            price-max={priceMax}
            class="w-full"
          />
        ) : (
          <div class="text-center text-gray-500">Loading property listings...</div>
        )}
      </div>
    );
  }
);
