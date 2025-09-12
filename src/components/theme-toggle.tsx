"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (resolvedTheme === "light") setTheme("dark");
    else if (resolvedTheme === "dark") setTheme("system");
    else setTheme("light");
  };

  const icon =
    resolvedTheme === "light" ? (
      <Sun className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    ) : resolvedTheme === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    ) : (
      <Laptop className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    );

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full"
    >
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
