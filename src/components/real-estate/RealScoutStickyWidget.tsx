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
        class={`fixed bottom-6 right-4 z-30 hidden w-72 transition-all duration-500 md:block ${
          isVisible.value ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div class="max-h-[600px] overflow-hidden rounded-2xl border border-hsb-border bg-white shadow-lg">
          <div class="bg-hsb-dark p-4 text-white">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-display text-lg leading-tight">{title}</h3>
                <p class="mt-1 text-sm text-hsb-sand">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick$={() => (isExpanded.value = !isExpanded.value)}
                class="bg-transparent p-0 text-white"
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
                <div class="text-sm text-hsb-text mb-2">
                  ${parseInt(priceMin).toLocaleString()} – ${parseInt(priceMax).toLocaleString()}
                </div>
                <div class="mx-auto h-px w-12 bg-hsb-accent"></div>
              </div>

              <div class="min-h-[300px] mb-4">
                {isExpanded.value ? (
                  <realscout-office-listings
                    agent-encoded-id={agentEncodedId}
                    sort-order={sortOrder}
                    listing-status={listingStatus}
                    property-types={propertyTypes}
                    price-min={priceMin}
                    price-max={priceMax}
                    class="w-full"
                  />
                ) : null}
              </div>

              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener"
                class="inline-block w-full rounded-full bg-hsb-primary py-3 px-4 text-center text-sm font-medium text-white hover:bg-hsb-primary-dark"
              >
                Schedule Private Tour
              </a>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick$={() => (isVisible.value = false)}
            class="w-full border-t border-hsb-border bg-white py-2 text-xs uppercase tracking-[0.14em] text-hsb-muted hover:text-hsb-dark"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
);
