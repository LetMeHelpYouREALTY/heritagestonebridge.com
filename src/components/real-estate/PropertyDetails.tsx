import { component$ } from "@builder.io/qwik";
import type { Address, ListingProps } from "../../types/real-estate";
import { PropertyPrice } from "./PropertyPrice";

export interface PropertyDetailsProps {
  listing: ListingProps;
}

export const PropertyDetails = component$<PropertyDetailsProps>(({ listing }) => {
  const formatSqft = (sqft: number) => {
    return sqft.toLocaleString();
  };

  const formatAddress = (address: Address) => {
    return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  };

  return (
    <div class="p-4 space-y-3">
      <div class="mb-2">
        <PropertyPrice
          price={listing.price}
          status={listing.status}
          pricePerSqft={Math.round(listing.price / listing.sqft)}
        />
      </div>

      <div class="border-t border-b border-gray-100 py-2">
        <div class="flex justify-between items-center">
          <div class="flex flex-col items-center">
            <span class="text-lg font-semibold text-gray-900">{listing.beds}</span>
            <span class="text-xs text-gray-500 uppercase tracking-wide">
              {listing.beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-lg font-semibold text-gray-900">{listing.baths}</span>
            <span class="text-xs text-gray-500 uppercase tracking-wide">
              {listing.baths === 1 ? "Bath" : "Baths"}
            </span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-lg font-semibold text-gray-900">{formatSqft(listing.sqft)}</span>
            <span class="text-xs text-gray-500 uppercase tracking-wide">Sq Ft</span>
          </div>
        </div>
      </div>

      <div class="space-y-1">
        <h3
          class="text-lg font-semibold text-gray-900 leading-tight line-clamp-1"
          title={formatAddress(listing.address)}
        >
          {listing.address.street}
        </h3>
        <p class="text-sm text-gray-600">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </p>
        {listing.address.neighborhood && (
          <p class="text-sm text-blue-600 font-medium">{listing.address.neighborhood}</p>
        )}
      </div>

      {listing.features && listing.features.length > 0 && (
        <div class="pt-2">
          <div class="flex flex-wrap gap-1">
            {listing.features.slice(0, 3).map((feature) => (
              <span key={feature} class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {feature}
              </span>
            ))}
            {listing.features.length > 3 && (
              <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                +{listing.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {listing.openHouse && (
        <div class="pt-2">
          <div class="bg-green-50 border border-green-200 rounded-lg p-3 space-y-1">
            <span class="text-green-800 font-semibold text-sm">Open House</span>
            <span class="text-green-700 text-sm block">
              {new Date(listing.openHouse.date).toLocaleDateString()}
            </span>
            <span class="text-green-600 text-xs">
              {listing.openHouse.startTime} - {listing.openHouse.endTime}
            </span>
          </div>
        </div>
      )}

      <div class="pt-2 border-t border-gray-100 flex items-center gap-2">
        <span class="text-xs text-gray-500 uppercase tracking-wide">MLS:</span>
        <span class="text-xs text-gray-700 font-mono">{listing.mls}</span>
      </div>
    </div>
  );
});
