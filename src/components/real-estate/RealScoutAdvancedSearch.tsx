import { component$, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutAdvancedSearchProps {
  agentEncodedId: string;
  className?: string;
}

export const RealScoutAdvancedSearch = component$<RealScoutAdvancedSearchProps>(
  ({ agentEncodedId, className = "" }) => {
    useVisibleTask$(({ track }) => {
      track(() => agentEncodedId);

      if (typeof window === "undefined") return;

      // Ensure RealScout script is loaded
      const checkRealScoutLoaded = () => {
        if (window.customElements?.get("realscout-advanced-search")) {
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
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Advanced Property Search</h3>
          <p class="text-gray-600">
            Use our advanced search tools to find the perfect home with detailed filters
          </p>
        </div>

        <realscout-advanced-search
          agent-encoded-id={agentEncodedId}
          class="w-full"
        ></realscout-advanced-search>
      </div>
    );
  }
);
