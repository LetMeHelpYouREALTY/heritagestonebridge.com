import { component$ } from "@builder.io/qwik";

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
              <realscout-office-listings
                agent-encoded-id={agentEncodedId}
                sort-order={sortOrder}
                listing-status={listingStatus}
                property-types={propertyTypes}
                price-min={priceMin}
                price-max={priceMax}
                class="w-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);
