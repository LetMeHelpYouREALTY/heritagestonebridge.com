import { component$ } from "@builder.io/qwik";

export interface SortOptionsProps {
  sortBy: "price" | "beds" | "sqft" | "newest";
  sortOrder: "asc" | "desc";
  onSortChange$: (sortBy: "price" | "beds" | "sqft" | "newest", sortOrder: "asc" | "desc") => void;
}

export const SortOptions = component$<SortOptionsProps>(({ sortBy, sortOrder, onSortChange$ }) => {
  const handleSortByChange = (newSortBy: "price" | "beds" | "sqft" | "newest") => {
    onSortChange$(newSortBy, sortOrder);
  };

  const handleSortOrderToggle = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    onSortChange$(sortBy, newOrder);
  };

  return (
    <div class="flex items-center space-x-4">
      <label class="text-sm font-medium text-gray-700" for="sort-by">
        Sort by:
      </label>
      <select
        id="sort-by"
        value={sortBy}
        onChange$={(e) => {
          handleSortByChange(
            (e.target as HTMLSelectElement).value as "price" | "beds" | "sqft" | "newest"
          );
        }}
        class="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="price">Price</option>
        <option value="beds">Bedrooms</option>
        <option value="sqft">Square Feet</option>
        <option value="newest">Newest</option>
      </select>
      <button
        type="button"
        class="p-1 text-gray-600 hover:text-gray-900 transition-colors"
        onClick$={handleSortOrderToggle}
        title={`Sort ${sortOrder === "asc" ? "descending" : "ascending"}`}
      >
        <svg
          class={`w-4 h-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Sort Arrow</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
});
