import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import type { PropertySearchResult, SearchFilters as SearchFiltersType } from "../../types/real-estate";
import { PropertyGrid } from "./PropertyGrid";
import { SearchFilters as SearchFiltersComponent } from "./SearchFilters";
import { SortOptions } from "./SortOptions";

export interface SearchInterfaceProps {
  initialFilters?: Partial<SearchFiltersType>;
  onSearch?: (filters: SearchFiltersType) => void;
}

export const SearchInterface = component$<SearchInterfaceProps>(({ initialFilters, onSearch }) => {
  const filters = useSignal<SearchFiltersType>({
    priceMin: initialFilters?.priceMin || 0,
    priceMax: initialFilters?.priceMax || 2000000,
    beds: initialFilters?.beds || 0,
    baths: initialFilters?.baths || 0,
    neighborhood: initialFilters?.neighborhood || "",
    propertyType: initialFilters?.propertyType || "all",
    status: initialFilters?.status || "for-sale",
  });

  const sortBy = useSignal<"price" | "beds" | "sqft" | "newest">("newest");
  const sortOrder = useSignal<"asc" | "desc">("desc");
  const searchResults = useSignal<PropertySearchResult>({
    listings: [],
    total: 0,
    page: 1,
    hasMore: false,
  });
  const isLoading = useSignal(false);
  const searchQuery = useSignal("");

  // Debounced search effect
  useTask$(({ track }) => {
    track(() => filters.value);
    track(() => searchQuery.value);

    const timeoutId = setTimeout(() => {
      performSearch();
    }, 500);

    return () => clearTimeout(timeoutId);
  });

  const performSearch = async () => {
    isLoading.value = true;

    try {
      // Simulate API call - replace with actual implementation
      const mockResults: PropertySearchResult = {
        listings: [
          {
            mls: "12345",
            price: 750000,
            beds: 3,
            baths: 2,
            sqft: 2500,
            photos: ["/api/placeholder/400/300"],
            address: {
              street: "123 Heritage Way",
              city: "Las Vegas",
              state: "NV",
              zip: "89138",
              neighborhood: "Summerlin",
            },
            agent: {
              id: "agent-123",
              name: "Sarah Johnson",
              phone: "(702) 555-0123",
              email: "DrDuffySells@HeritageStonebridge.com",
            },
            status: "for-sale",
            features: ["Gated Community", "Pool", "Golf Course Access"],
          },
        ],
        total: 1,
        page: 1,
        hasMore: false,
      };

      searchResults.value = mockResults;
      onSearch?.(filters.value);
    } catch (error) {
      console.error("Search error:", error);
      searchResults.value = {
        listings: [],
        total: 0,
        page: 1,
        hasMore: false,
      };
    } finally {
      isLoading.value = false;
    }
  };

  const handleLoadMore = async () => {
    if (!searchResults.value.hasMore || isLoading.value) return;

    isLoading.value = true;

    try {
      // Simulate loading more results
      const nextPage = searchResults.value.page + 1;
      // In real implementation, fetch next page from API

      searchResults.value = {
        ...searchResults.value,
        page: nextPage,
        hasMore: false, // Simulate no more results
      };
    } finally {
      isLoading.value = false;
    }
  };

  const handleSortChange = (
    newSortBy: "price" | "beds" | "sqft" | "newest",
    newSortOrder: "asc" | "desc"
  ) => {
    sortBy.value = newSortBy;
    sortOrder.value = newSortOrder;
    performSearch();
  };

  return (
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Find Your Dream Home</h2>
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <input
              type="text"
              placeholder="Search by address, neighborhood, or ZIP code..."
              value={searchQuery.value}
              onInput$={(e) => {
                searchQuery.value = (e.target as HTMLInputElement).value;
              }}
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick$={performSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div class="lg:col-span-1">
          <SearchFiltersComponent
            filters={filters}
            onFiltersChange$={(newFilters: SearchFiltersType) => {
              filters.value = newFilters;
            }}
          />
        </div>

        {/* Results Section */}
        <div class="lg:col-span-3">
          <div class="flex justify-between items-center mb-6">
            <div class="text-sm text-gray-600">
              {searchResults.value.total > 0 && `${searchResults.value.total} properties found`}
            </div>
            <SortOptions
              sortBy={sortBy.value}
              sortOrder={sortOrder.value}
              onSortChange$={handleSortChange}
            />
          </div>

          <PropertyGrid
            searchResult={searchResults.value}
            onLoadMore={handleLoadMore}
            isLoading={isLoading.value}
          />
        </div>
      </div>
    </div>
  );
});
