import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "../globals.css";
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

// SEO Metadata
export const metadata: Metadata = {
  applicationName: "Mulugeta Portfolio",
  category: "technology",
  title: {
    default: "Mulugeta Adamu - Senior Frontend Developer & React Expert",
    template: "%s | Mulugeta Adamu - Frontend Developer",
  },
  description:
    "Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Web Developer Ethiopia",
    "JavaScript Developer",
    "UI/UX Developer",
    "Fullstack Developer",
  ],
  authors: [
    { name: "Mulugeta Adamu", url: "https://mulugeta-portfolio.vercel.app" },
  ],
  creator: "Mulugeta Adamu",
  publisher: "Mulugeta Adamu",
  metadataBase: new URL("https://mulugeta-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mulugeta-portfolio.vercel.app",
    title: "Mulugeta Adamu - Senior Frontend Developer & React Expert",
    description:
      "Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients.",
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
    description:
      "Senior Frontend Developer specializing in React, Next.js, and modern web technologies.",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(var(--background))" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(var(--background))" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="hsl(var(--primary))" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Mulugeta Portfolio" />
        <meta name="application-name" content="Mulugeta Portfolio" />
      </head>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
