import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface FavoriteButtonProps {
  isFavorited: { value: boolean };
  mls: string;
  onToggle$: () => void;
}

export const FavoriteButton = component$<FavoriteButtonProps>(({ isFavorited, mls, onToggle$ }) => {
  const isAnimating = useSignal(false);

  // Load favorites from localStorage on mount
  useVisibleTask$(({ track }) => {
    track(() => mls);

    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favoriteProperties") || "[]");
      isFavorited.value = favorites.includes(mls);
    }
  });

  // Save to localStorage when favorited state changes
  useVisibleTask$(({ track }) => {
    track(() => isFavorited.value);

    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favoriteProperties") || "[]");

      if (isFavorited.value) {
        if (!favorites.includes(mls)) {
          favorites.push(mls);
        }
      } else {
        const index = favorites.indexOf(mls);
        if (index > -1) {
          favorites.splice(index, 1);
        }
      }

      localStorage.setItem("favoriteProperties", JSON.stringify(favorites));
    }
  });

  const handleClick = () => {
    isAnimating.value = true;
    isFavorited.value = !isFavorited.value;
    onToggle$();

    // Reset animation after a short delay
    setTimeout(() => {
      isAnimating.value = false;
    }, 300);
  };

  return (
    <button
      type="button"
      class={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        isFavorited.value
          ? "bg-red-500 text-white shadow-lg"
          : "bg-white text-gray-600 shadow-md hover:shadow-lg"
      } ${isAnimating.value ? "scale-125" : ""}`}
      onClick$={handleClick}
      aria-label={isFavorited.value ? "Remove from favorites" : "Add to favorites"}
      title={isFavorited.value ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        class={`w-5 h-5 transition-all duration-300 ${
          isFavorited.value ? "fill-current" : "stroke-current fill-none"
        }`}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-label="Heart"
      >
        <title>Heart</title>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
});
