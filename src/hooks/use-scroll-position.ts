import { useState, useEffect } from "react";

/**
 * Hook to track scroll position and determine if scrolled past a threshold
 * @param threshold - The scroll threshold in pixels (default: 10)
 * @returns {boolean} Whether the scroll position is past the threshold
 */
export function useScrollPosition(threshold: number = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Set initial state
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
