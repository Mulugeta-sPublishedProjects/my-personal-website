"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WifiOff, Wifi, RefreshCw, CloudDownload } from "lucide-react";

export function PWAStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Check if app is installed as PWA
  const checkIfInstalled = useCallback(() => {
    if (typeof globalThis === "undefined") return false;

    return (
      globalThis.matchMedia("(display-mode: standalone)").matches ||
      (globalThis.navigator as any).standalone === true ||
      document.referrer.includes("android-app://")
    );
  }, []);

  useEffect(() => {
    // Set client state
    setIsClient(true);

    // Check initial online status
    if (typeof navigator !== "undefined") {
      setIsOnline(navigator.onLine);
    }

    // Listen for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
      // Hide message after 5 seconds
      setTimeout(() => setShowOfflineMessage(false), 5000);
    };

    // Listen for service worker updates
    const handleServiceWorkerUpdate = () => {
      setUpdateAvailable(true);
    };

    // Listen for our custom events
    const handleSWUpdateAvailable = () => {
      setUpdateAvailable(true);
    };

    const handleSWInstalled = () => {
      // PWA was installed
    };

    if (typeof globalThis !== "undefined") {
      globalThis.addEventListener("online", handleOnline);
      globalThis.addEventListener("offline", handleOffline);

      // Check for service worker updates
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.addEventListener(
          "controllerchange",
          handleServiceWorkerUpdate,
        );
      }

      // Listen for our custom events from service worker registration
      globalThis.addEventListener(
        "sw-update-available",
        handleSWUpdateAvailable,
      );
      globalThis.addEventListener("sw-installed", handleSWInstalled);
    }

    return () => {
      if (typeof globalThis !== "undefined") {
        globalThis.removeEventListener("online", handleOnline);
        globalThis.removeEventListener("offline", handleOffline);

        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            handleServiceWorkerUpdate,
          );
        }

        globalThis.removeEventListener(
          "sw-update-available",
          handleSWUpdateAvailable,
        );
        globalThis.removeEventListener("sw-installed", handleSWInstalled);
      }
    };
  }, []);

  const handleRefresh = () => {
    globalThis.location.reload();
  };

  // Don't render anything during SSR
  if (!isClient) {
    return undefined;
  }

  return (
    <>
      {/* Offline Status Badge */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-4 right-4 z-50"
          >
            <Badge variant="destructive" className="flex items-center gap-2">
              <WifiOff className="w-3 h-3" />
              Offline
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Offline Message */}
      <AnimatePresence>
        {showOfflineMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-16 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80"
          >
            <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <WifiOff className="w-5 h-5 text-destructive" />
                <div>
                  <p className="font-medium text-sm">You're offline</p>
                  <p className="text-xs text-muted-foreground">
                    Don't worry, cached content is still available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Available */}
      <AnimatePresence>
        {updateAvailable && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80"
          >
            <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Update Available</p>
                    <p className="text-xs text-muted-foreground">
                      Refresh to get the latest version
                    </p>
                  </div>
                </div>
                <Button size="sm" onClick={handleRefresh} className="h-8">
                  Refresh
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PWA Installed Indicator */}
      <AnimatePresence>
        {checkIfInstalled() && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 left-4 z-40"
          >
            <Badge
              variant="secondary"
              className="flex items-center gap-1 text-xs"
            >
              <CloudDownload className="w-3 h-3" />
              <span>PWA</span>
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Online Status Indicator (subtle) */}
      <div className="fixed bottom-4 left-4 z-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOnline ? 0.6 : 0 }}
          className="flex items-center gap-1 text-xs text-muted-foreground"
        >
          <Wifi className="w-3 h-3" />
          <span>Online</span>
        </motion.div>
      </div>
    </>
  );
}
