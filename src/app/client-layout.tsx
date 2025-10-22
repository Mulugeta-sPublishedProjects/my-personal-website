"use client";

import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { Splash } from "@/shared/loader";

// Lightweight scroll to top component to reduce bundle size
const LightweightScrollToTop = () => {
  // Only include scroll to top logic if needed
  if (typeof window === "undefined") return null;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 opacity-0 invisible translate-y-2 scroll-to-top-visible:opacity-100 scroll-to-top-visible:visible scroll-to-top-visible:translate-y-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mounted = useMounted();

  if (!mounted) {
    return <Splash />;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      <Suspense fallback={<Splash />}>
        {children}
        <LightweightScrollToTop />
      </Suspense>
    </ThemeProvider>
  );
}
