"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScrollMoreButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
  position?: "bottom" | "top";
  delay?: number;
}

export function ScrollMoreButton({
  onClick,
  label = "More",
  className,
  position = "bottom",
  delay = 1,
}: ScrollMoreButtonProps) {
  const positionClass = position === "bottom" ? "bottom-6" : "top-6";

  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 z-10",
        positionClass,
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <Button
        onClick={onClick}
        aria-label={`Scroll for ${label.toLowerCase()}`}
        variant="ghost"
        size="sm"
        className="rounded-full bg-background/60 hover:bg-background/80 transition-all duration-300 group"
      >
        <div className="flex flex-col items-center gap-1">
          <ArrowDown
            className="size-5 text-muted-foreground group-hover:text-foreground transition-transform"
            aria-hidden="true"
          />
          <span className="text-xs uppercase tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
            {label}
          </span>
        </div>
      </Button>
    </div>
  );
}
