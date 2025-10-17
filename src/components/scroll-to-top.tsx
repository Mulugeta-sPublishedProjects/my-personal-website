"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export function ScrollToTop({ threshold = 400, className }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Show/hide button based on scroll position
      setIsVisible(scrollTop > threshold);

      // Show scrolling indicator
      setIsScrolling(true);

      // Calculate scroll progress
      const progress = Math.min(
        scrollTop /
          (document.documentElement.scrollHeight - window.innerHeight),
        1
      );
      setScrollProgress(progress);

      // Clear previous timeout
      clearTimeout(timeoutId);

      // Hide scrolling indicator after scroll stops
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: isScrolling ? 360 : 0,
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeOut" as const,
            rotate: { duration: 0.6, ease: "easeInOut" as const },
          }}
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "md:bottom-8 md:right-8",
            className
          )}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className={cn(
              "size-14 rounded-full shadow-xl",
              "bg-primary hover:bg-primary/90 text-primary-foreground",
              "border-2 border-primary/40",
              "backdrop-blur-md",
              "transition-all duration-500",
              "hover:scale-110 hover:shadow-2xl",
              "active:scale-95",
              "group",
              "hover:rotate-12"
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp
              className={cn(
                "size-6 transition-all duration-500",
                "group-hover:-translate-y-1 group-hover:scale-110"
              )}
            />
          </Button>

          {/* Progress indicator ring */}
          <div className="absolute inset-0 -z-10">
            <svg className="size-14 -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/20"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: scrollProgress,
                }}
                transition={{ duration: 0.1 }}
                style={{
                  strokeDasharray: "125.6",
                  strokeDashoffset: 0,
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
