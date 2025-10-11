"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

interface PWAContextType {
  isInstalled: boolean;
  isOnline: boolean;
  updateAvailable: boolean;
  installPrompt: (() => void) | null;
  checkForUpdates: () => void;
}

const PWAContext = createContext<PWAContextType | undefined>(undefined);

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<
    BeforeInstallPromptEvent | undefined
  >(undefined);
  const registrationRef = useRef<ServiceWorkerRegistration | undefined>(
    undefined,
  );

  // Check if app is installed
  const checkIfInstalled = useCallback(() => {
    if (typeof globalThis === "undefined") return false;

    return (
      globalThis.matchMedia("(display-mode: standalone)").matches ||
      (globalThis.navigator as any).standalone === true ||
      document.referrer.includes("android-app://")
    );
  }, []);

  // Check for service worker updates
  const checkForUpdates = useCallback(() => {
    if (registrationRef.current) {
      registrationRef.current.update();
    }
  }, []);

  // Handle installation
  const installPrompt = useCallback(() => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          setIsInstalled(true);
        }
        setDeferredPrompt(undefined);
      });
    }
  }, [deferredPrompt]);

  useEffect(() => {
    // Set initial states
    setIsInstalled(checkIfInstalled());
    if (typeof navigator !== "undefined") {
      setIsOnline(navigator.onLine);
    }

    // Online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Service worker registration
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          registrationRef.current = registration;

          registration.addEventListener("updatefound", () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.addEventListener("statechange", () => {
                if (
                  installingWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  setUpdateAvailable(true);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error("Service worker registration failed:", error);
        });
    }

    // Before install prompt
    const handleBeforeInstallPrompt = (event_: Event) => {
      event_.preventDefault();
      setDeferredPrompt(event_ as BeforeInstallPromptEvent);
    };

    // App installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(undefined);
    };

    // Controller change (new service worker activated)
    const handleControllerChange = () => {
      globalThis.location.reload();
    };

    // Add event listeners
    if (typeof globalThis !== "undefined") {
      globalThis.addEventListener("online", handleOnline);
      globalThis.addEventListener("offline", handleOffline);
      globalThis.addEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      globalThis.addEventListener("appinstalled", handleAppInstalled);

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.addEventListener(
          "controllerchange",
          handleControllerChange,
        );
      }
    }

    // Cleanup
    return () => {
      if (typeof globalThis !== "undefined") {
        globalThis.removeEventListener("online", handleOnline);
        globalThis.removeEventListener("offline", handleOffline);
        globalThis.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
        globalThis.removeEventListener("appinstalled", handleAppInstalled);

        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            handleControllerChange,
          );
        }
      }
    };
  }, [checkIfInstalled]);

  const contextValue = {
    isInstalled,
    isOnline,
    updateAvailable,
    installPrompt: deferredPrompt ? installPrompt : null,
    checkForUpdates,
  };

  return (
    <PWAContext.Provider value={contextValue}>{children}</PWAContext.Provider>
  );
}

export function usePWA() {
  const context = useContext(PWAContext);
  if (context === undefined) {
    throw new Error("usePWA must be used within a PWAProvider");
  }
  return context;
}
