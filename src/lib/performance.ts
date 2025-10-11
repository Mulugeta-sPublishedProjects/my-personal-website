// Performance monitoring utilities

// Using a more compatible approach for client-side environment detection
const isDevelopment =
  typeof globalThis !== "undefined" &&
  (globalThis.location.hostname === "localhost" ||
    globalThis.location.hostname === "127.0.0.1" ||
    globalThis.location.hostname.startsWith("192.168.") ||
    globalThis.location.hostname.startsWith("10.") ||
    globalThis.location.hostname.startsWith("172."));

const isProduction = typeof globalThis !== "undefined" && !isDevelopment;

export function reportWebVitals(metric: any) {
  // Log to console in development
  if (isDevelopment) {
    console.log("Web Vitals:", metric);
  }

  // Send to analytics in production
  if (isProduction) {
    // Send to your analytics service
    // Example: gtag('event', metric.name, { value: metric.value });
  }
}

// Performance observer for custom metrics
export function observePerformance() {
  if (
    typeof globalThis !== "undefined" &&
    "PerformanceObserver" in globalThis
  ) {
    // Observe Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log("LCP:", entry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // Observe First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEventTiming;
        console.log("FID:", fidEntry.processingStart - fidEntry.startTime);
      }
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Observe Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const clsEntry = entry as any; // Layout shift entries have specific properties
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
        }
      }
      console.log("CLS:", clsValue);
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });
  }
}

// Resource loading performance
export function trackResourceLoading() {
  if (typeof globalThis !== "undefined") {
    window.addEventListener("load", () => {
      const navigation = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType("paint");

      console.log("Performance Metrics:", {
        domContentLoaded:
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find((entry) => entry.name === "first-paint")
          ?.startTime,
        firstContentfulPaint: paint.find(
          (entry) => entry.name === "first-contentful-paint",
        )?.startTime,
      });
    });
  }
}
