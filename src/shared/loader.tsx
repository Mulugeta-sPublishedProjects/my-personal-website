"use client";

import { cn } from "@/lib/utils";

export interface SplashProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Splash = ({ className, size = "md" }: SplashProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 border-2",
    md: "h-12 w-12 border-3",
    lg: "h-16 w-16 border-4",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-background text-foreground",
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <div
        className={cn(
          "animate-spin rounded-full border-t-primary border-r-transparent border-b-primary border-l-transparent",
          sizeClasses[size]
        )}
      />
    </div>
  );
};
