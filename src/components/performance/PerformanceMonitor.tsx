import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const PerformanceMonitor = component$(() => {
  useVisibleTask$(() => {
    // Advanced Core Web Vitals monitoring for 2025
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        // Send LCP data to analytics
        if (lastEntry) {
          console.log("LCP:", lastEntry.startTime);
          // In production, send to analytics service
          // analytics.track('core_web_vital', { metric: 'LCP', value: lastEntry.startTime });
        }
      });

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        console.warn("LCP monitoring not supported");
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log("FID:", (entry as any).processingStart - entry.startTime);
          // In production, send to analytics service
          // analytics.track('core_web_vital', { metric: 'FID', value: entry.processingStart - entry.startTime });
        });
      });

      try {
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        console.warn("FID monitoring not supported");
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });

        console.log("CLS:", clsValue);
        // In production, send to analytics service
        // analytics.track('core_web_vital', { metric: 'CLS', value: clsValue });
      });

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        console.warn("CLS monitoring not supported");
      }

      // Monitor Time to First Byte (TTFB)
      window.addEventListener("load", () => {
        const navigationEntry = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          console.log("TTFB:", ttfb);
          // In production, send to analytics service
          // analytics.track('core_web_vital', { metric: 'TTFB', value: ttfb });
        }
      });

      // Advanced Resource Timing Analysis
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 1000) {
            // Resources taking > 1 second
            console.warn("Slow resource:", entry.name, entry.duration);
            // In production, send to performance monitoring service
            // performanceMonitoring.trackSlowResource(entry);
          }
        });
      });

      try {
        resourceObserver.observe({ entryTypes: ["resource"] });
      } catch (e) {
        console.warn("Resource monitoring not supported");
      }
    }

    // Advanced Memory Usage Monitoring
    if ("memory" in performance) {
      const memoryInfo = (performance as any).memory;
      console.log("Memory usage:", {
        used: Math.round(memoryInfo.usedJSHeapSize / 1048576) + " MB",
        total: Math.round(memoryInfo.totalJSHeapSize / 1048576) + " MB",
        limit: Math.round(memoryInfo.jsHeapSizeLimit / 1048576) + " MB",
      });
    }

    // Advanced Network Information API
    if ("connection" in navigator) {
      const connection = (navigator as any).connection;
      console.log("Network info:", {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
      });
    }
  });

  return null; // This component doesn't render anything visible
});
