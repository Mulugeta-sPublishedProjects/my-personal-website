import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../globals.css";
import Footer from "../components/footer";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Transition from "@/shared/top-nav-transition";
import BottomNavbar from "@/shared/bottom-nav";
import RootWrapper from "@/shared/root-wrapper";
import { Header } from "@/components/header";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

// Load Google font for headings with proper optimization
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

// Load Geist Sans for body text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

// Load Geist Mono for code
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mulugeta.dev"), // Added this line to fix the warning
  title: {
    default: "Mulugeta Adamu | Senior Frontend Developer",
    template: "%s | Mulugeta Adamu",
  },
  description:
    "Senior Frontend + Junior Backend developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
  keywords: [
    "Mulugeta Adamu",
    "Portfolio",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "NestJS",
    "React Native",
    "Web Development",
    "Software Developer",
    "Full Stack Developer",
    "UI/UX Design",
  ],
  authors: [{ name: "Mulugeta Adamu", url: "https://mulugeta.dev" }],
  creator: "Mulugeta Adamu",
  publisher: "Mulugeta Adamu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mulugeta Adamu | Senior Frontend Developer & Portfolio",
    description:
      "Senior Frontend + Junior Backend developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
    url: "https://mulugeta.dev",
    siteName: "Mulugeta Adamu Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mulugeta Adamu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulugeta Adamu | Senior Frontend Developer & Portfolio",
    description:
      "Senior Frontend + Junior Backend developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
    images: ["/og-image.jpg"],
    site: "@mulugetaadamu",
    creator: "@mulugetaadamu",
  },
  alternates: {
    canonical: "https://mulugeta.dev",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "technology",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Favicon & Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme Color for browser UI */}
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1a202c"
          media="(prefers-color-scheme: dark)"
        />
        {/* Viewport with proper settings */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Additional SEO tags */}
        <meta name="application-name" content="Mulugeta Adamu Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mulugeta Adamu" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      </head>
      <body
        className="min-h-screen bg-background text-foreground font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Transition>
            <RootWrapper>
              <Header />
              <main className="px-4 sm:px-6 md:px-8 lg:px-16 grow min-h-screen my-16 sm:my-20 md:my-24">
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
              {/* Uncomment when chatbot is ready */}
              {/* <Chatbot /> */}
              <BottomNavbar />
              <Footer />
            </RootWrapper>
          </Transition>
          {/* Toaster for notifications */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
