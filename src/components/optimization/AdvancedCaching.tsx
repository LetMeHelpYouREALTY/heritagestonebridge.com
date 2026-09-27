import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const AdvancedCaching = component$(() => {
  useVisibleTask$(() => {
    // Advanced Service Worker for 2025 caching strategies
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered:", registration);

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  // New content available, notify user
                  console.log("New content available!");
                  // In production, show update notification
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error("SW registration failed:", error);
        });
    }

    // Advanced Browser Cache Management
    if ("caches" in window) {
      // Pre-cache critical resources
      const criticalResources = [
        "/",
        "/55-plus-communities",
        "/homes-for-sale-stonebridge-summerlin",
        "/real-estate",
      ];

      caches.open("critical-v1").then((cache) => {
        cache.addAll(criticalResources).catch((error) => {
          console.error("Failed to cache critical resources:", error);
        });
      });

      // Cache API responses
      const originalFetch = window.fetch;
      window.fetch = async (input, init) => {
        const request = new Request(input, init);
        const cache = await caches.open("api-v1");

        // Try cache first for GET requests
        if (request.method === "GET") {
          const cachedResponse = await cache.match(request);
          if (cachedResponse) {
            // Return cached response and update in background
            fetch(request).then((response) => {
              if (response.ok) {
                cache.put(request, response.clone());
              }
            });
            return cachedResponse;
          }
        }

        // Fetch from network
        const response = await originalFetch(request);

        // Cache successful responses
        if (response.ok && request.method === "GET") {
          cache.put(request, response.clone());
        }

        return response;
      };
    }

    // Advanced Memory Management
    const cleanup = () => {
      // Clear unused caches
      if ("caches" in window) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            if (!cacheName.includes("v1")) {
              caches.delete(cacheName);
            }
          });
        });
      }
    };

    // Cleanup on page unload
    window.addEventListener("beforeunload", cleanup);

    // Periodic cleanup every 24 hours
    setInterval(cleanup, 24 * 60 * 60 * 1000);

    // Advanced Preloading Strategy
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/images/hero-bg.webp",
        "/images/stonebridge-entrance.webp",
        "/images/clubhouse.webp",
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const criticalFonts = ["/fonts/inter-var.woff2", "/fonts/inter-var.woff"];

      criticalFonts.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.type = "font/woff2";
        link.href = src;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    // Preload on idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadCriticalResources);
    } else {
      setTimeout(preloadCriticalResources, 100);
    }

    // Advanced Resource Hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const externalDomains = [
        "//fonts.googleapis.com",
        "//fonts.gstatic.com",
        "//drjanduffy.realscout.com",
      ];

      externalDomains.forEach((domain) => {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = domain;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const criticalOrigins = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];

      criticalOrigins.forEach((origin) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = origin;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  });

  return null; // This component doesn't render anything visible
});
