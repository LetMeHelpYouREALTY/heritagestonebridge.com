import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
}

export const OptimizedImage = component$<OptimizedImageProps>(
  ({ src, alt, width, height, className = "", priority = false, placeholder }) => {
    const isLoaded = useSignal(false);
    const isInView = useSignal(false);
    const imageRef = useSignal<HTMLImageElement>();

    useVisibleTask$(({ track }) => {
      const img = track(() => imageRef.value);

      if (img && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isInView.value = true;
                observer.disconnect();
              }
            });
          },
          {
            // Load images when they're 50px away from viewport
            rootMargin: "50px",
            threshold: 0.1,
          }
        );

        observer.observe(img);

        return () => observer.disconnect();
      } else if (priority) {
        // Load immediately if priority
        isInView.value = true;
      }
      
      return () => {
        // Cleanup function for all code paths
      };
    });

    // Generate optimized image URLs for different devices
    const generateSrcSet = (baseSrc: string) => {
      const sizes = [320, 640, 768, 1024, 1280, 1536, 1920];
      return sizes
        .map((size) => {
          // In production, use a service like Cloudinary or ImageKit
          // For now, we'll use the original image
          return `${baseSrc} ${size}w`;
        })
        .join(", ");
    };

    // Generate WebP version for modern browsers
    const generateWebPSrc = (baseSrc: string) => {
      // In production, convert to WebP format
      // For now, return original
      return baseSrc;
    };

    return (
      <div class={`relative overflow-hidden ${className}`}>
        {/* Placeholder/Blur effect */}
        {!isLoaded.value && placeholder && (
          <div
            class="absolute inset-0 bg-gray-200 animate-pulse"
            style={{
              backgroundImage: `url(${placeholder})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(10px)",
            }}
          />
        )}

        {/* Main image */}
        {(isInView.value || priority) && (
          <picture>
            {/* WebP format for modern browsers */}
            <source srcset={generateWebPSrc(src)} type="image/webp" />

            {/* Fallback for older browsers */}
            <img
              ref={imageRef}
              src={src}
              srcset={generateSrcSet(src)}
              alt={alt}
              width={width}
              height={height}
              class={`transition-opacity duration-300 ${
                isLoaded.value ? "opacity-100" : "opacity-0"
              }`}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              onLoad$={() => {
                isLoaded.value = true;
              }}
              onError$={() => {
                console.error("Image failed to load:", src);
                // In production, show fallback image
              }}
            />
          </picture>
        )}

        {/* Loading skeleton */}
        {!isLoaded.value && !placeholder && (
          <div class="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }
);
