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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Show/hide button based on scroll position
      setIsVisible(scrollTop > threshold);
      
      // Show scrolling indicator
      setIsScrolling(true);
      
      // Clear previous timeout
      clearTimeout(timeoutId);
      
      // Hide scrolling indicator after scroll stops
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
            rotate: isScrolling ? 360 : 0
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut",
            rotate: { duration: 0.6, ease: "easeInOut" }
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
              "h-12 w-12 rounded-full shadow-lg",
              "bg-primary hover:bg-primary/90",
              "border border-primary/20",
              "backdrop-blur-sm",
              "transition-all duration-200",
              "hover:scale-110 hover:shadow-xl",
              "active:scale-95",
              "group"
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp 
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                "group-hover:-translate-y-0.5"
              )} 
            />
          </Button>
          
          {/* Progress indicator ring */}
          <div className="absolute inset-0 -z-10">
            <svg 
              className="h-12 w-12 -rotate-90" 
              viewBox="0 0 48 48"
            >
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
                  pathLength: typeof window !== 'undefined' 
                    ? Math.min(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight), 1)
                    : 0
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
