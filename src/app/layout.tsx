"use client";

import "../globals.css";
import ClientLayout from "./client-layout";
import { SEO } from "@/components/seo";
import { Geist, Geist_Mono } from "next/font/google";

// Load fonts with Next.js font optimization
const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* SEO */}
        <SEO />
        <meta name="geo.region" content="ET-AA" />
        <meta name="geo.placename" content="Addis Ababa, Ethiopia" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        {/* Preload critical image */}
        <link rel="preload" as="image" href="/hero.avif" type="image/avif" />
        <link rel="prefetch" href="/hero.avif" as="image" type="image/avif" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased min-h-screen`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
