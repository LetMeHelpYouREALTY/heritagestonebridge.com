import { component$, useSignal } from "@builder.io/qwik";

interface RealScoutHeroWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  title?: string;
  subtitle?: string;
}

export const RealScoutHeroWidget = component$<RealScoutHeroWidgetProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = "500000",
    priceMax = "800000",
    title = "Featured New Construction Homes",
    subtitle = "See What's Available Now",
  }) => {
    const showListings = useSignal(false);

    return (
      <section class="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p class="text-lg text-gray-600">{subtitle}</p>
            <div class="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div class="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h3 class="text-xl font-bold mb-2">New Construction Collection</h3>
              <p class="text-blue-100">
                Starting from ${parseInt(priceMin).toLocaleString()} - $
                {parseInt(priceMax).toLocaleString()}
              </p>
            </div>
            <div class="p-6">
              {showListings.value ? (
                <realscout-office-listings
                  agent-encoded-id={agentEncodedId}
                  sort-order={sortOrder}
                  listing-status={listingStatus}
                  property-types={propertyTypes}
                  price-min={priceMin}
                  price-max={priceMax}
                  class="w-full min-h-[400px]"
                />
              ) : (
                <div class="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
                  <p class="max-w-md text-gray-600">
                    Open the current for-sale list for Heritage at Stonebridge.
                  </p>
                  <button
                    type="button"
                    class="rounded-full bg-hsb-primary px-6 py-3 font-semibold text-white hover:bg-hsb-primary-dark"
                    onClick$={() => {
                      showListings.value = true;
                    }}
                  >
                    Show current listings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);
