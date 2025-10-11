"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[SW] Service Worker registered:", registration);
        })
        .catch((error) => {
          console.log("[SW] Service Worker registration failed:", error);
        });
    }
  }, []);

  return undefined;
}
