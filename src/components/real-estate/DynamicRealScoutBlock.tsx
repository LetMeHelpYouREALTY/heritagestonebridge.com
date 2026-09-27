import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { RealScoutContentBlock } from "../../types/real-estate-content";
import { RealScoutAdvancedSearch } from "./RealScoutAdvancedSearch";
import { RealScoutHomeValue } from "./RealScoutHomeValue";
import { RealScoutOfficeListings } from "./RealScoutOfficeListings";
import { RealScoutSimpleSearch } from "./RealScoutSimpleSearch";

export interface DynamicRealScoutBlockProps {
  block: RealScoutContentBlock;
}

export const DynamicRealScoutBlock = component$<DynamicRealScoutBlockProps>(({ block }) => {
  useVisibleTask$(({ track }) => {
    track(() => block.agentEncodedId);

    if (typeof window === "undefined") return;

    // Ensure RealScout script is loaded for all widget types
    const widgetTypes = [
      "realscout-simple-search",
      "realscout-advanced-search",
      "realscout-home-value",
      "realscout-office-listings",
    ];

    const checkRealScoutLoaded = () => {
      return widgetTypes.some((type) => window.customElements?.get(type));
    };

    const waitForRealScout = () => {
      if (checkRealScoutLoaded()) {
        return;
      }
      setTimeout(waitForRealScout, 100);
    };

    waitForRealScout();
  });

  const containerClasses = [
    "realscout-widget-container",
    block.className || "",
    block.layout?.shadow ? "shadow-lg" : "shadow-md",
    block.layout?.backgroundColor ? `bg-${block.layout.backgroundColor}` : "bg-white",
    block.layout?.borderRadius ? `rounded-${block.layout.borderRadius}` : "rounded-lg",
    block.layout?.height ? `min-h-[${block.layout.height}]` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderWidget = () => {
    const commonProps = {
      agentEncodedId: block.agentEncodedId,
      className: block.layout?.height ? `min-h-[${block.layout.height}]` : "",
    };

    switch (block.type) {
      case "simple-search":
        return <RealScoutSimpleSearch {...commonProps} />;

      case "advanced-search":
        return <RealScoutAdvancedSearch {...commonProps} />;

      case "home-value":
        return <RealScoutHomeValue {...commonProps} />;

      case "office-listings":
        return (
          <RealScoutOfficeListings
            {...commonProps}
            sortOrder={block.widgetProps?.sortOrder}
            listingStatus={block.widgetProps?.listingStatus}
            propertyTypes={block.widgetProps?.propertyTypes}
            priceMin={block.widgetProps?.priceMin}
            priceMax={block.widgetProps?.priceMax}
          />
        );

      default:
        return <div>Unknown widget type: {block.type}</div>;
    }
  };

  return (
    <div class={containerClasses}>
      {/* Custom Header */}
      <div class="mb-6">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">{block.title}</h3>
        <p class="text-gray-600 mb-4">{block.description}</p>

        {/* Features List */}
        {block.content?.features && (
          <ul class="flex flex-wrap gap-2 mb-4">
            {block.content.features.map((feature, index) => (
              <li
                key={`feature-${index}-${feature.slice(0, 10)}`}
                class="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
              >
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Badges */}
        {block.content?.badges && (
          <div class="flex flex-wrap gap-2 mb-4">
            {block.content.badges.map((badge, index) => (
              <span
                key={`badge-${index}-${badge.slice(0, 10)}`}
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Widget */}
      {renderWidget()}

      {/* Custom CTA */}
      {block.content?.ctaText && block.content?.ctaLink && (
        <div class="mt-6 text-center">
          <a
            href={block.content.ctaLink}
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {block.content.ctaText}
          </a>
        </div>
      )}
    </div>
  );
});
