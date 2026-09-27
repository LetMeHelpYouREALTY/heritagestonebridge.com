import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface RealScoutStickyWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  title?: string;
  subtitle?: string;
}

export const RealScoutStickyWidget = component$<RealScoutStickyWidgetProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = "600000",
    priceMax = "900000",
    title = "Exclusive Listings",
    subtitle = "Schedule Private Tour",
  }) => {
    const isVisible = useSignal(false);
    const isExpanded = useSignal(false);

    useVisibleTask$(() => {
      // Show sticky panel after 5 seconds (reduced from 15 seconds for better visibility)
      const timer = setTimeout(() => {
        isVisible.value = true;
      }, 5000);

      return () => clearTimeout(timer);
    });

    return (
      <div
        class={`fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
          isVisible.value ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div class="bg-white rounded-2xl shadow-2xl border-2 border-yellow-400 overflow-hidden w-80 max-h-[600px]">
          {/* Header */}
          <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-gray-900">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-bold">{title}</h3>
                <p class="text-sm text-gray-800">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick$={() => (isExpanded.value = !isExpanded.value)}
                class="text-gray-800 hover:text-gray-600 transition-colors"
                aria-label={isExpanded.value ? "Collapse listings" : "Expand listings"}
              >
                <svg
                  class={`w-5 h-5 transition-transform ${isExpanded.value ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div
            class={`transition-all duration-300 ${
              isExpanded.value ? "max-h-[500px]" : "max-h-0 overflow-hidden"
            }`}
          >
            <div class="p-4">
              <div class="text-center mb-4">
                <div class="text-sm font-semibold text-gray-700 mb-2">
                  ${parseInt(priceMin).toLocaleString()} - ${parseInt(priceMax).toLocaleString()}
                </div>
                <div class="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
              </div>

              <div class="min-h-[300px] mb-4">
                <realscout-office-listings
                  agent-encoded-id={agentEncodedId}
                  sort-order={sortOrder}
                  listing-status={listingStatus}
                  property-types={propertyTypes}
                  price-min={priceMin}
                  price-max={priceMax}
                  class="w-full"
                />
              </div>

              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener"
                class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg inline-block text-center"
              >
                Schedule Private Tour
              </a>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick$={() => (isVisible.value = false)}
            class="absolute -top-2 -left-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
            aria-label="Close sticky panel"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
);
