"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { logger } from "@/lib/logger";

declare global {
  interface Window {
    gtag?: Gtag.Gtag;
    dataLayer?: unknown[];
  }
}

declare global {
  namespace Gtag {
    type Gtag = (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const hasLoadedRef = useRef(false);
  const previousPathnameRef = useRef<string | null>(null);

  const sendPageView = useCallback(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;

    try {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
        send_page_view: true,
      });
    } catch (error) {
      logger.error("Error sending page view to Google Analytics:", error);
    }
  }, [GA_MEASUREMENT_ID, pathname]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      logger.warn("Google Analytics Measurement ID is not provided");
      return;
    }

    // Cleanup function to ensure proper teardown
    return () => {
      // No specific cleanup needed for this effect
    };
  }, [GA_MEASUREMENT_ID]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !pathname) return;

    if (hasLoadedRef.current && previousPathnameRef.current === pathname) {
      return;
    }

    if (document.readyState === "complete") {
      sendPageView();
    } else {
      const handleLoad = () => {
        sendPageView();
        hasLoadedRef.current = true;
      };

      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

    previousPathnameRef.current = pathname;
  }, [GA_MEASUREMENT_ID, pathname, sendPageView]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            });
          `,
        }}
      />
    </>
  );
}
