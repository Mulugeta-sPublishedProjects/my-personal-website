"use client";

import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Transition from "@/shared/top-nav-transition";
import BottomNavbar from "@/shared/bottom-nav";
import RootWrapper from "@/shared/root-wrapper";
import { Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
import { PWAStatus } from "@/components/pwa-status";
import { ScrollToTop } from "@/components/scroll-to-top";
import Script from "next/script";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="theme"
      >
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    },
                    function(err) {
                      console.error('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
        <Transition>
          <RootWrapper>
            <Header />
            <main className="px-4 md:px-16 grow min-h-screen my-14">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    Loading...
                  </div>
                }
              >
                {children}
              </Suspense>
            </main>
            <BottomNavbar />
            <Footer compact />
          </RootWrapper>
        </Transition>
        <Toaster />
        <PWAInstallPrompt />
        <PWAStatus />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}
