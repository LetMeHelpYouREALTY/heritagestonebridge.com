import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface HeroImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const luxuryImages: HeroImage[] = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury Heritage at Stonebridge Home Exterior",
    title: "The Heritage Collection",
    description: "Starting from $650,000",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    alt: "Modern Kitchen with Premium Finishes",
    title: "The Stonebridge Collection",
    description: "Starting from $750,000",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Elegant Living Room with High Ceilings",
    title: "The Signature Collection",
    description: "Starting from $850,000",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Master Suite with Luxury Bathroom",
    title: "Master Retreat",
    description: "Premium finishes throughout",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Outdoor Living Space with Pool",
    title: "Resort-Style Living",
    description: "Private outdoor entertainment areas",
  },
];

export const HeroImageCarousel = component$(() => {
  const isClient = useSignal(false);
  const currentIndex = useSignal(0);
  const isTransitioning = useSignal(false);

  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    isClient.value = true;

    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      if (!isTransitioning.value) {
        currentIndex.value = (currentIndex.value + 1) % luxuryImages.length;
      }
    }, 5000);

    return () => clearInterval(interval);
  });

  const goToSlide = (index: number) => {
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    currentIndex.value = index;
    if (typeof window !== "undefined") {
      setTimeout(() => {
        isTransitioning.value = false;
      }, 300);
    }
  };

  const nextSlide = () => {
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    currentIndex.value = (currentIndex.value + 1) % luxuryImages.length;
    if (typeof window !== "undefined") {
      setTimeout(() => {
        isTransitioning.value = false;
      }, 300);
    }
  };

  const prevSlide = () => {
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    currentIndex.value =
      currentIndex.value === 0 ? luxuryImages.length - 1 : currentIndex.value - 1;
    if (typeof window !== "undefined") {
      setTimeout(() => {
        isTransitioning.value = false;
      }, 300);
    }
  };

  // Only render on client side to avoid SSR issues with setTimeout in functions
  if (!isClient.value) {
    return (
      <div class="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl bg-gray-200 flex items-center justify-center">
        <div class="text-center text-gray-600">
          <div class="text-xl font-semibold mb-2">Loading Luxury Images...</div>
          <div class="text-sm">Heritage at Stonebridge</div>
        </div>
      </div>
    );
  }

  return (
    <div class="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl">
      {/* Main Image */}
      <div class="relative h-full">
        <img
          src={luxuryImages[currentIndex.value].src}
          alt={luxuryImages[currentIndex.value].alt}
          class="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />

        {/* Gradient Overlay */}
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div class="absolute bottom-8 left-8 text-white">
          <h3 class="text-2xl md:text-3xl font-bold mb-2">
            {luxuryImages[currentIndex.value].title}
          </h3>
          <p class="text-lg md:text-xl text-blue-100">
            {luxuryImages[currentIndex.value].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick$={prevSlide}
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
        aria-label="Previous image"
      >
        <svg
          class="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick$={nextSlide}
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
        aria-label="Next image"
      >
        <svg
          class="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {luxuryImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick$={() => goToSlide(index)}
            class={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex.value ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div class="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
        <div class="flex space-x-2 overflow-x-auto scrollbar-hide">
          {luxuryImages.map((image, index) => (
            <button
              key={`thumb-${index}`}
              type="button"
              onClick$={() => goToSlide(index)}
              class={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex.value
                  ? "ring-2 ring-white scale-105"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              aria-label={`View ${image.title}`}
            >
              <img src={image.src} alt={image.alt} class="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
