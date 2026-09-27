/**
 * Performance optimization utilities for real estate components
 */

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  if (typeof window === "undefined") return null;

  const defaultOptions: IntersectionObserverInit = {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce function for search inputs
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Image lazy loading with placeholder
export const createLazyImageLoader = (src: string, placeholder?: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(src);
    img.onerror = () => {
      // Fallback to placeholder if provided
      if (placeholder) {
        resolve(placeholder);
      } else {
        reject(new Error(`Failed to load image: ${src}`));
      }
    };

    img.src = src;
  });
};

// Virtual scrolling helper
export const calculateVisibleRange = (
  scrollTop: number,
  containerHeight: number,
  itemHeight: number,
  itemCount: number,
  bufferSize: number = 5
) => {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - bufferSize);
  const endIndex = Math.min(
    itemCount - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + bufferSize
  );

  return { startIndex, endIndex };
};

// Memory management for large lists
export const createVirtualList = (
  items: unknown[],
  itemHeight: number,
  containerHeight: number
) => {
  let scrollTop = 0;
  let visibleRange = calculateVisibleRange(scrollTop, containerHeight, itemHeight, items.length);

  const updateScroll = (newScrollTop: number) => {
    scrollTop = newScrollTop;
    visibleRange = calculateVisibleRange(scrollTop, containerHeight, itemHeight, items.length);
  };

  const getVisibleItems = () => {
    return items.slice(visibleRange.startIndex, visibleRange.endIndex + 1);
  };

  const getTotalHeight = () => {
    return items.length * itemHeight;
  };

  const getOffsetY = () => {
    return visibleRange.startIndex * itemHeight;
  };

  return {
    updateScroll,
    getVisibleItems,
    getTotalHeight,
    getOffsetY,
    visibleRange,
  };
};

// Analytics tracking with performance metrics
export const trackPerformance = (eventName: string, data?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  const startTime = performance.now();

  return {
    end: (additionalData?: Record<string, unknown>) => {
      const endTime = performance.now();
      const duration = endTime - startTime;

      if (window.gtag) {
        window.gtag("event", eventName, {
          ...data,
          ...additionalData,
          performance_duration: Math.round(duration),
          timestamp: new Date().toISOString(),
        });
      }
    },
  };
};

// Preload critical resources
export const preloadResources = (urls: string[]) => {
  if (typeof window === "undefined") return;

  urls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = url;

    // Determine resource type based on extension
    if (url.endsWith(".css")) {
      link.as = "style";
    } else if (url.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
      link.as = "image";
    } else if (url.endsWith(".js")) {
      link.as = "script";
    }

    document.head.appendChild(link);
  });
};

// Cache management
export const createCache = <T>(maxSize: number = 100) => {
  const cache = new Map<string, T>();

  return {
    get: (key: string): T | undefined => {
      const value = cache.get(key);
      if (value) {
        // Move to end (most recently used)
        cache.delete(key);
        cache.set(key, value);
      }
      return value;
    },

    set: (key: string, value: T): void => {
      if (cache.has(key)) {
        cache.delete(key);
      } else if (cache.size >= maxSize) {
        // Remove least recently used
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      cache.set(key, value);
    },

    clear: (): void => {
      cache.clear();
    },

    size: (): number => {
      return cache.size;
    },
  };
};

// Bundle splitting helper
export const loadComponent = async (componentName: string) => {
  try {
    const module = await import(`../components/real-estate/${componentName}`);
    return module;
  } catch (error) {
    console.error(`Failed to load component: ${componentName}`, error);
    return null;
  }
};

// Performance monitoring
export const monitorPerformance = () => {
  if (typeof window === "undefined") return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (window.gtag) {
        window.gtag("event", "web_vital", {
          name: entry.name,
          value: Math.round(entry.startTime),
          event_category: "Performance",
        });
      }
    }
  });

  observer.observe({ entryTypes: ["measure", "navigation", "paint"] });

  // Monitor resource loading
  window.addEventListener("load", () => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

    if (window.gtag) {
      window.gtag("event", "page_load", {
        load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
        dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
        first_paint: Math.round(performance.getEntriesByName("first-paint")[0]?.startTime || 0),
      });
    }
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
