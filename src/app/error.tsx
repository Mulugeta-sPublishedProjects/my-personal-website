"use client";

import { useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  // Handler for reset button click
  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  // Handler for home button click
  const handleGoHome = useCallback(() => {
    globalThis.location.href = "/";
  }, []);

  // Using a more compatible approach for client-side environment detection
  const isDevelopment =
    typeof globalThis !== "undefined" &&
    (globalThis.location.hostname === "localhost" ||
      globalThis.location.hostname === "127.0.0.1" ||
      globalThis.location.hostname.startsWith("192.168.") ||
      globalThis.location.hostname.startsWith("10.") ||
      globalThis.location.hostname.startsWith("172."));

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-auto text-center p-6">
        <div className="mb-6">
          <AlertTriangle className="size-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground mb-6">
            We apologize for the inconvenience. An unexpected error has
            occurred.
          </p>
          {isDevelopment && (
            <details className="text-left bg-muted p-4 rounded-lg mb-6">
              <summary className="cursor-pointer font-medium mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-sm overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={handleReset} className="flex items-center gap-2">
            <RefreshCw className="size-4" />
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={handleGoHome}
            className="flex items-center gap-2"
          >
            <Home className="size-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
