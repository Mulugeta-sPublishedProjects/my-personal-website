"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full mx-auto text-center p-6">
          <div className="mb-6">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Critical Error
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              A critical error has occurred. Please refresh the page or contact support.
            </p>
          </div>
          
          <Button 
            onClick={reset} 
            className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white"
          >
            <RefreshCw className="h-4 w-4" />
            Reload Application
          </Button>
        </div>
      </body>
    </html>
  );
}
