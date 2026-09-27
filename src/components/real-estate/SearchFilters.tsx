import { component$, useSignal } from "@builder.io/qwik";
import type { SearchFilters as SearchFiltersType } from "../../types/real-estate";

export interface SearchFiltersProps {
  filters: { value: SearchFiltersType };
  onFiltersChange$: (filters: SearchFiltersType) => void;
}

export const SearchFilters = component$<SearchFiltersProps>(({ filters, onFiltersChange$ }) => {
  const isExpanded = useSignal(false);

  const updateFilter = (key: keyof SearchFiltersType, value: string | number) => {
    const newFilters = { ...filters.value, [key]: value };
    onFiltersChange$(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: SearchFiltersType = {
      priceMin: 0,
      priceMax: 2000000,
      beds: 0,
      baths: 0,
      neighborhood: "",
      propertyType: "all",
      status: "for-sale",
    };
    onFiltersChange$(clearedFilters);
  };

  const propertyTypes = [
    { value: "all", label: "All Types" },
    { value: "house", label: "Single Family" },
    { value: "condo", label: "Condo" },
    { value: "townhouse", label: "Townhouse" },
  ];

  const statusOptions = [
    { value: "for-sale", label: "For Sale" },
    { value: "pending", label: "Pending" },
    { value: "sold", label: "Sold" },
    { value: "all", label: "All Status" },
  ];

  return (
    <div class="bg-white rounded-lg shadow-md border border-gray-200">
      <div class="p-4 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900">Search Filters</h3>
          <button
            type="button"
            class="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick$={() => {
              isExpanded.value = !isExpanded.value;
            }}
            aria-expanded={isExpanded.value}
            aria-label="Toggle filters"
          >
            <svg
              class={`w-5 h-5 transition-transform ${isExpanded.value ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Toggle filters"
            >
              <title>Toggle Filters</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class={`p-4 space-y-6 ${isExpanded.value ? "block" : "hidden"}`}>
        {/* Price Range */}
        <div class="space-y-2">
          <label for="price-range" class="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <div class="flex items-center space-x-4">
            <div class="flex-1">
              <label for="price-min" class="sr-only">
                Minimum Price
              </label>
              <input
                id="price-min"
                type="range"
                min="0"
                max="2000000"
                step="25000"
                value={filters.value.priceMin}
                onInput$={(e) => {
                  updateFilter("priceMin", parseInt((e.target as HTMLInputElement).value, 10));
                }}
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div class="flex-1">
              <label for="price-max" class="sr-only">
                Maximum Price
              </label>
              <input
                id="price-max"
                type="range"
                min="0"
                max="2000000"
                step="25000"
                value={filters.value.priceMax}
                onInput$={(e) => {
                  updateFilter("priceMax", parseInt((e.target as HTMLInputElement).value, 10));
                }}
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>${filters.value.priceMin.toLocaleString()}</span>
            <span>${filters.value.priceMax.toLocaleString()}</span>
          </div>
        </div>

        {/* Bedrooms */}
        <div class="space-y-2">
          <label for="bedrooms" class="block text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            value={filters.value.beds}
            onChange$={(e) => {
              updateFilter("beds", parseInt((e.target as HTMLSelectElement).value, 10));
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div class="space-y-2">
          <label for="bathrooms" class="block text-sm font-medium text-gray-700">
            Bathrooms
          </label>
          <select
            id="bathrooms"
            value={filters.value.baths}
            onChange$={(e) => {
              updateFilter("baths", parseInt((e.target as HTMLSelectElement).value, 10));
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

        {/* Property Type */}
        <fieldset class="space-y-2">
          <legend class="block text-sm font-medium text-gray-700">Property Type</legend>
          <div class="space-y-2">
            {propertyTypes.map((type) => (
              <label key={type.value} class="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  value={type.value}
                  checked={filters.value.propertyType === type.value}
                  onChange$={() => {
                    updateFilter("propertyType", type.value);
                  }}
                  class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-700">{type.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Status */}
        <fieldset class="space-y-2">
          <legend class="block text-sm font-medium text-gray-700">Status</legend>
          <div class="space-y-2">
            {statusOptions.map((status) => (
              <label key={status.value} class="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value={status.value}
                  checked={filters.value.status === status.value}
                  onChange$={() => {
                    updateFilter("status", status.value);
                  }}
                  class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-700">{status.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Neighborhood */}
        <div class="space-y-2">
          <label for="neighborhood" class="block text-sm font-medium text-gray-700">
            Neighborhood
          </label>
          <select
            id="neighborhood"
            value={filters.value.neighborhood}
            onChange$={(e) => {
              updateFilter("neighborhood", (e.target as HTMLSelectElement).value);
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Neighborhoods</option>
            <option value="downtown">Downtown</option>
            <option value="summerlin">Summerlin</option>
            <option value="henderson">Henderson</option>
            <option value="green-valley">Green Valley</option>
            <option value="anthem">Anthem</option>
          </select>
        </div>

        {/* Actions */}
        <div class="flex justify-between pt-4 border-t border-gray-200">
          <button
            type="button"
            class="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick$={clearFilters}
          >
            Clear All
          </button>
          <button
            type="button"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick$={() => {
              isExpanded.value = false;
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
});
