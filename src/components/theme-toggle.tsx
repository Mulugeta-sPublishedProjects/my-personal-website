"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "light") setTheme("dark");
    else if (resolvedTheme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = () => {
    // Use resolvedTheme if mounted, otherwise default to system
    const currentTheme = mounted ? resolvedTheme : "system";

    switch (currentTheme) {
      case "light": {
        return <Sun className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />;
      }
      case "dark": {
        return <Moon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />;
      }
      default: {
        return <Laptop className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />;
      }
    }
  };

  const getLabel = () => {
    // Use resolvedTheme if mounted, otherwise default to system
    const currentTheme = mounted ? resolvedTheme : "system";

    switch (currentTheme) {
      case "light": {
        return "Switch to dark theme";
      }
      case "dark": {
        return "Switch to system theme";
      }
      default: {
        return "Switch to light theme";
      }
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full hover:bg-accent/20 hover:text-accent-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
      aria-label={getLabel()}
    >
      <motion.div
        initial={
          mounted && !prefersReducedMotion
            ? { scale: 0.8, opacity: 0, rotate: -180 }
            : false
        }
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={
          mounted && !prefersReducedMotion
            ? {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }
            : { duration: 0 }
        }
        key={mounted ? resolvedTheme : "system"}
      >
        {getIcon()}
      </motion.div>
      <span className="sr-only">{getLabel()}</span>
    </Button>
  );
}
