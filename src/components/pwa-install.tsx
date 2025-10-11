"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(undefined);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (event_: Event) => {
      event_.preventDefault();
      setDeferredPrompt(event_);
      setShowInstall(true);
    };

    globalThis.addEventListener("beforeinstallprompt", handler);

    return () => globalThis.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(undefined);
      setShowInstall(false);
    }
  };

  return (
    <AnimatePresence>
      {showInstall && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 flex items-start gap-3">
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">Install Portfolio</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Install this portfolio for quick access and offline viewing
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleInstall} className="text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Install
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowInstall(false)}
                  className="text-xs"
                >
                  Later
                </Button>
              </div>
            </div>
            <button
              onClick={() => setShowInstall(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
