// Register service worker for PWA functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // In development, we might want to unregister first to avoid caching issues
    // Using a more compatible approach for client-side environment detection
    const isDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.startsWith("192.168.") ||
      window.location.hostname.startsWith("10.") ||
      window.location.hostname.startsWith("172.");

    if (isDevelopment) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
        // Then register the new service worker
        registerServiceWorker();
      });
    } else {
      // In production, just register normally
      registerServiceWorker();
    }
  });
}

// Make the service worker update immediately when a new version is available
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}

function registerServiceWorker() {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope,
      );

      // Check for updates
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // New update available
                console.log("New content is available; please refresh.");
                // Dispatch a custom event so we can listen for it in React components
                window.dispatchEvent(new CustomEvent("sw-update-available"));
              } else {
                // Content is cached for offline use
                console.log("Content is cached for offline use.");
                // Dispatch a custom event for initial install
                window.dispatchEvent(new CustomEvent("sw-installed"));
              }
            }
          };
        }
      };
    })
    .catch((err) => {
      console.error("ServiceWorker registration failed: ", err);
    });
}

// Add PWA installation tracking
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Update UI to notify the user they can install the PWA
  window.dispatchEvent(new CustomEvent("pwa-installable", { detail: e }));
});

window.addEventListener("appinstalled", () => {
  // Clear the deferred prompt since it's no longer needed
  deferredPrompt = null;
  // Update UI to indicate the app was installed
  window.dispatchEvent(new CustomEvent("pwa-installed"));
});
