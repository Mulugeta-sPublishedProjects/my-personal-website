"use client";

import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useMounted } from "@/hooks/use-mounted";
import { Splash } from "@/shared/loader";

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
        <Toaster />
        <ScrollToTop />
      </Suspense>
    </ThemeProvider>
  );
}
