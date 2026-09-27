import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface RealScoutPremiumWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  title?: string;
  subtitle?: string;
}

export const RealScoutPremiumWidget = component$<RealScoutPremiumWidgetProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = "700000",
    priceMax = "1200000",
    title = "Premium Estate Homes",
    subtitle = "Exclusive Luxury Properties",
  }) => {
    const isClient = useSignal(false);
    const isVisible = useSignal(false);

    useVisibleTask$(() => {
      if (typeof window === "undefined") return;

      isClient.value = true;

      // Wait for RealScout script to load
      const checkRealScout = () => {
        if (customElements?.get("realscout-office-listings")) {
          isVisible.value = true;
        } else {
          setTimeout(checkRealScout, 100);
        }
      };

      // Start checking after a short delay
      setTimeout(checkRealScout, 1000);

      // Intersection Observer for scroll animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true;
            }
          });
        },
        { threshold: 0.1 }
      );

      const element = document.querySelector("[data-premium-widget]");
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    });

    if (!isClient.value) {
      return (
        <section class="py-16 bg-gray-900">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-white mb-4">{title}</h2>
              <p class="text-lg text-gray-300">{subtitle}</p>
            </div>
            <div class="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 min-h-[400px] flex items-center justify-center">
              <div class="text-center text-gray-400">
                <div class="text-lg font-semibold mb-2">Loading Premium Estates...</div>
                <div class="text-sm">Heritage at Stonebridge</div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section class="py-16 bg-gray-900" data-premium-widget>
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <div
              class={`transition-all duration-1000 transform ${
                isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 class="text-3xl font-bold text-white mb-4">{title}</h2>
              <p class="text-lg text-gray-300">{subtitle}</p>
              <div class="mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            </div>
          </div>

          <div
            class={`transition-all duration-1000 delay-300 transform ${
              isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div class="bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-700 overflow-hidden">
              <div class="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white">
                <h3 class="text-xl font-bold mb-2">Estate Collection</h3>
                <p class="text-gray-300">
                  Ultra-luxury homes ${parseInt(priceMin).toLocaleString()} - $
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
        </div>
      </section>
    );
  }
);
