import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface PropertyImageProps {
  src: string;
  alt: string;
  onLoad$?: () => void;
  priority?: boolean;
}

export const PropertyImage = component$<PropertyImageProps>(
  ({ src, alt, onLoad$, priority = false }) => {
    const isLoaded = useSignal(false);
    const hasError = useSignal(false);
    const imageRef = useSignal<HTMLImageElement>();

    useVisibleTask$(() => {
      const img = imageRef.value;
      if (!img) return;

      // Intersection Observer for lazy loading
      if (!priority) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                img.src = src;
                observer.unobserve(img);
              }
            });
          },
          {
            rootMargin: "50px",
          }
        );

        observer.observe(img);

        return () => observer.disconnect();
      } else {
        // Load immediately for priority images
        img.src = src;
      }
      
      return () => {
        // Cleanup function for all code paths
      };
    });

    const handleLoad = () => {
      isLoaded.value = true;
      onLoad$?.();
    };

    const handleError = () => {
      hasError.value = true;
    };

    return (
      <div class="relative w-full h-full overflow-hidden">
        {!hasError.value ? (
          <img
            ref={imageRef}
            alt={alt}
            class={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded.value ? "opacity-100" : "opacity-0"
            }`}
            onLoad$={handleLoad}
            onError$={handleError}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <div class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
            <svg class="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-sm font-medium">Image unavailable</span>
          </div>
        )}

        {!isLoaded.value && !hasError.value && (
          <div class="absolute inset-0 bg-gray-200 animate-pulse">
            <div class="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]"></div>
          </div>
        )}
      </div>
    );
  }
);
