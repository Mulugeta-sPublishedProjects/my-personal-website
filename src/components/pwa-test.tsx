"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function PWATest() {
  const [isOnline, setIsOnline] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    globalThis.addEventListener("online", handleOnline);
    globalThis.addEventListener("offline", handleOffline);

    // Check if app is installed
    const checkIfInstalled = () => {
      if (globalThis.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
      }
    };

    checkIfInstalled();

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
    };

    globalThis.addEventListener("appinstalled", handleAppInstalled);

    // Check for service worker updates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        setUpdateAvailable(true);
      });

      // Listen for our custom events
      const handleSWUpdate = () => setUpdateAvailable(true);
      const handleSWInstalled = () => setIsInstalled(true);

      globalThis.addEventListener("sw-update-available", handleSWUpdate);
      globalThis.addEventListener("sw-installed", handleSWInstalled);

      return () => {
        globalThis.removeEventListener("online", handleOnline);
        globalThis.removeEventListener("offline", handleOffline);
        globalThis.removeEventListener("appinstalled", handleAppInstalled);
        globalThis.removeEventListener("sw-update-available", handleSWUpdate);
        globalThis.removeEventListener("sw-installed", handleSWInstalled);
      };
    }

    // Add explicit return
    return () => {};
  }, []);

  const handleRefresh = () => {
    globalThis.location.reload();
  };

  const handleInstall = async () => {
    // This would typically be handled by the beforeinstallprompt event
    // For testing purposes, we'll just log to console
    console.log("Install button clicked");
  };

  // Only show in development
  // Using a more compatible approach for client-side environment detection
  const isDevelopment =
    typeof globalThis !== "undefined" &&
    (globalThis.location.hostname === "localhost" ||
      globalThis.location.hostname === "127.0.0.1" ||
      globalThis.location.hostname.startsWith("192.168.") ||
      globalThis.location.hostname.startsWith("10.") ||
      globalThis.location.hostname.startsWith("172."));

  if (!isDevelopment) return undefined;

  return (
    <div className="fixed bottom-20 right-4 z-50 bg-background/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
      <h3 className="font-semibold text-sm mb-2">PWA Test Panel</h3>
      <div className="flex flex-col gap-2 text-xs">
        <div className="flex justify-between">
          <span>Online Status:</span>
          <span className={isOnline ? "text-green-500" : "text-red-500"}>
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Installed:</span>
          <span className={isInstalled ? "text-green-500" : "text-yellow-500"}>
            {isInstalled ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Update Available:</span>
          <span className={updateAvailable ? "text-blue-500" : "text-gray-500"}>
            {updateAvailable ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <Button size="sm" onClick={handleRefresh} className="h-7 text-xs">
          Refresh
        </Button>
        <Button
          size="sm"
          onClick={handleInstall}
          className="h-7 text-xs"
          variant="outline"
        >
          Install
        </Button>
      </div>
    </div>
  );
}
