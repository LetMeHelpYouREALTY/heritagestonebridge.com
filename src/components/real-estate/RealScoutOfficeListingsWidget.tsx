import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutOfficeListingsWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: number;
  priceMax?: number;
}

export const RealScoutOfficeListingsWidget = component$<RealScoutOfficeListingsWidgetProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = 500000,
    priceMax = 600000,
  }) => {
    const isScriptLoaded = useSignal(false);
    const hasError = useSignal(false);
    const errorMessage = useSignal("");

    useVisibleTask$(() => {
      if (typeof window === "undefined") return;

      let attempts = 0;
      const maxAttempts = 20; // 10 seconds total

      // Check if RealScout script is loaded
      const checkScript = () => {
        attempts++;
        
        if (window.customElements && window.customElements.get('realscout-office-listings')) {
          console.log('RealScout widget loaded successfully');
          isScriptLoaded.value = true;
        } else if (attempts < maxAttempts) {
          // Retry after a short delay
          setTimeout(checkScript, 500);
        } else {
          console.warn('RealScout widget failed to load after maximum attempts');
          hasError.value = true;
          errorMessage.value = 'RealScout widget is temporarily unavailable. Please refresh the page or contact us directly.';
        }
      };

      // Start checking after a brief delay
      setTimeout(checkScript, 1000);
    });

    return (
      <div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
        {hasError.value ? (
          <div class="text-center text-red-600 mb-4 p-4 bg-red-50 rounded-lg">
            <div class="font-semibold mb-2">⚠️ Widget Loading Error</div>
            <div class="text-sm mb-4">{errorMessage.value}</div>
            <button
              type="button"
              onClick$={() => window.location.reload()}
              class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        ) : !isScriptLoaded.value ? (
          <div class="text-center text-gray-500 mb-4">
            <div class="animate-pulse">Loading property listings...</div>
            <div class="text-xs text-gray-400 mt-2">Powered by RealScout MLS</div>
          </div>
        ) : (
          <realscout-office-listings
            agent-encoded-id={agentEncodedId}
            sort-order={sortOrder}
            listing-status={listingStatus}
            property-types={propertyTypes}
            price-min={priceMin}
            price-max={priceMax}
            class="w-full"
          ></realscout-office-listings>
        )}
      </div>
    );
  }
);
