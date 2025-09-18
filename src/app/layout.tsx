import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "@/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "./client-layout";

// Font configurations
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

// Perfect SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Mulugeta Adamu - Senior Frontend Developer & React Expert",
    template: "%s | Mulugeta Adamu - Frontend Developer"
  },
  description: "Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients.",
  keywords: [
    "Frontend Developer",
    "React Developer", 
    "Next.js Expert",
    "TypeScript Developer",
    "Web Developer Ethiopia",
    "JavaScript Developer",
    "UI/UX Developer",
    "Fullstack Developer"
  ],
  authors: [{ name: "Mulugeta Adamu", url: "https://mulugeta-portfolio.vercel.app" }],
  creator: "Mulugeta Adamu",
  publisher: "Mulugeta Adamu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mulugeta-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mulugeta-portfolio.vercel.app",
    title: "Mulugeta Adamu - Senior Frontend Developer & React Expert",
    description: "Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients.",
    siteName: "Mulugeta Adamu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mulugeta Adamu - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulugeta Adamu - Senior Frontend Developer & React Expert",
    description: "Senior Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@mulugeta_dev",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* PWA & Icons */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1f2937" />
        
        {/* Apple PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mulugeta Portfolio" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-192x192.png" />
        
        {/* Microsoft PWA Meta Tags */}
        <meta name="msapplication-TileImage" content="/icons/icon-192x192.png" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Standard Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
        
        {/* PWA Splash Screens for iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mulugeta Adamu",
              "jobTitle": "Senior Frontend Developer",
              "url": "https://mulugeta-portfolio.vercel.app",
              "sameAs": [
                "https://github.com/mulugeta",
                "https://linkedin.com/in/mulugeta"
              ],
              "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript"],
              "worksFor": {
                "@type": "Organization",
                "name": "Top Link Technology PLC"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
