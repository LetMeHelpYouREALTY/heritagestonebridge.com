import { component$, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutHomeValueProps {
  agentEncodedId: string;
  className?: string;
}

export const RealScoutHomeValue = component$<RealScoutHomeValueProps>(
  ({ agentEncodedId, className = "" }) => {
    useVisibleTask$(({ track }) => {
      track(() => agentEncodedId);

      if (typeof window === "undefined") return;

      // Ensure RealScout script is loaded
      const checkRealScoutLoaded = () => {
        if (window.customElements?.get("realscout-home-value")) {
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
        if (typeof window !== "undefined") {
          setTimeout(waitForRealScout, 100);
        }
      };

      waitForRealScout();
    });

    return (
      <div class={`realscout-widget-container ${className || ""}`}>
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">What's Your Home Worth?</h3>
          <p class="text-gray-600">
            Get an instant home valuation and market analysis for your property
          </p>
        </div>

        <realscout-home-value
          agent-encoded-id={agentEncodedId}
          class="w-full"
        ></realscout-home-value>
      </div>
    );
  }
);
