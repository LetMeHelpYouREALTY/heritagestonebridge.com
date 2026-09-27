import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { PropertySearchResult } from "../../types/real-estate";
import { PropertyCard } from "./PropertyCard";

export interface PropertyGridProps {
  searchResult: PropertySearchResult;
  onLoadMore?: () => void;
  isLoading?: boolean;
}

export const PropertyGrid = component$<PropertyGridProps>(
  ({ searchResult, onLoadMore, isLoading = false }) => {
    const gridRef = useSignal<Element>();
    const isIntersecting = useSignal(false);

    // Intersection Observer for infinite scroll
    useVisibleTask$(({ track }) => {
      track(() => gridRef.value);

      if (!gridRef.value || typeof window === "undefined") return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          isIntersecting.value = entry.isIntersecting;

          if (entry.isIntersecting && onLoadMore && !isLoading) {
            onLoadMore();
          }
        },
        {
          threshold: 0.1,
          rootMargin: "100px",
        }
      );

      observer.observe(gridRef.value);

      return () => {
        observer.disconnect();
      };
    });

    if (searchResult.listings.length === 0 && !isLoading) {
      return (
        <div class="text-center py-16">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              class="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="No properties found"
            >
              <title>No Properties Found</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
          <p class="text-gray-600 mb-6">
            Try adjusting your search criteria to find more properties.
          </p>
        </div>
      );
    }

    return (
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-600">{searchResult.total} properties found</div>
          {searchResult.total > 0 && (
            <div class="text-sm text-gray-500">
              Page {searchResult.page} of {Math.ceil(searchResult.total / 20)}
            </div>
          )}
        </div>

        <div ref={gridRef} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResult.listings.map((listing) => (
            <div key={listing.mls} class="animate-fade-in">
              <PropertyCard listing={listing} />
            </div>
          ))}
        </div>

        {isLoading && (
          <div class="flex flex-col items-center justify-center py-8">
            <div class="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p class="text-gray-600">Loading more properties...</p>
          </div>
        )}

        {onLoadMore && searchResult.hasMore && !isLoading && (
          <div class="text-center pt-8">
            <button
              type="button"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick$={onLoadMore}
            >
              Load More Properties
            </button>
          </div>
        )}

        {!searchResult.hasMore && searchResult.listings.length > 0 && (
          <div class="text-center py-8 text-gray-500">
            <p>You've reached the end of the results</p>
          </div>
        )}
      </div>
    );
  }
);
