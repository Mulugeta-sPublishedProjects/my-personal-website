
import type { Metadata, Viewport } from "next";
import { Merriweather } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";
import Transition from "@/shared/top-nav-transition";
import BottomNavbar from "@/shared/bottom-nav";
import RootWrapper from "@/shared/root-wrapper";
import { Header } from "@/components/header";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

// Google Fonts
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://mulugeta.dev"),
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
  alternates: { canonical: "https://mulugeta.dev" },
  verification: { google: "your-google-site-verification-code" },
  category: "technology",
  manifest: "/manifest.json",
};

// Preload fonts
const preloadFonts = [
  "/fonts/geist-sans.woff2",
  "/fonts/geist-mono.woff2",
  "/fonts/merriweather.woff2",
];

// Structured Data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mulugeta Adamu",
  url: "https://mulugeta.dev",
  sameAs: [
    "https://github.com/mulugeta",
    "https://linkedin.com/in/mulugeta",
    "https://twitter.com/mulugeta",
  ],
  jobTitle: "Senior Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Self-employed",
    url: "https://mulugeta.dev",
  },
};

// WebSite with SearchAction JSON-LD
const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mulugeta Adamu Portfolio",
  url: "https://mulugeta.dev",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mulugeta.dev/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} scroll-smooth`}
    >
      <head>
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        {preloadFonts.map((font) => (
          <link
            key={font}
            rel="preload"
            href={font}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
        {/* Favicon and PWA */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, webSiteJsonLd]) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Transition>
            <RootWrapper>
              <Header />
              <main className="px-3 sm:px-5 md:px-8 lg:px-16 grow min-h-screen my-14 sm:my-18 md:my-24">
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
