"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

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

  // Early return for better performance
  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/20 hover:text-accent-foreground hover:scale-105 active:scale-95 shadow-sm hover:shadow-md h-10 w-10"
        aria-label="Theme toggle"
        disabled
      >
        <Laptop className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        <span className="sr-only">Loading theme toggle</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/20 hover:text-accent-foreground hover:scale-105 active:scale-95 shadow-sm hover:shadow-md h-10 w-10"
      aria-label={getLabel()}
    >
      <div key={mounted ? resolvedTheme : "system"}>{getIcon()}</div>
      <span className="sr-only">{getLabel()}</span>
    </button>
  );
}
