import { component$, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutSimpleSearchProps {
  agentEncodedId: string;
  className?: string;
}

export const RealScoutSimpleSearch = component$<RealScoutSimpleSearchProps>(
  ({ agentEncodedId, className = "" }) => {
    useVisibleTask$(({ track }) => {
      track(() => agentEncodedId);

      if (typeof window === "undefined") return;

      // Ensure RealScout script is loaded
      const checkRealScoutLoaded = () => {
        if (window.customElements?.get("realscout-simple-search")) {
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
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Find Your Dream Home</h3>
          <p class="text-gray-600">
            Search for properties in Heritage at Stonebridge and surrounding areas
          </p>
        </div>

        <realscout-simple-search
          agent-encoded-id={agentEncodedId}
          class="w-full"
        ></realscout-simple-search>
      </div>
    );
  }
);
