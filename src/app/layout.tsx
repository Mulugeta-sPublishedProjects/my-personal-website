import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RootWrapper from "./shared/root-wrapper";
import Transition from "./shared/top-nav-transition";
import BottomNavbar from "./shared/bottom-nav";

// Load fonts with optimized settings
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures fallback font is displayed while loading
  preload: true, // Preload font for performance
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mulugeta Adamu | Portfolio",
  description:
    "Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
  keywords: [
    "Mulugeta Adamu",
    "Portfolio",
    "Software Developer",
    "Web Developer",
  ],
  authors: [{ name: "Mulugeta Adamu" }],
  creator: "Mulugeta Adamu",
  openGraph: {
    title: "Mulugeta Adamu | Portfolio",
    description:
      "Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
    url: "https://mulugetaadamu.vercel.app/",
    siteName: "Mulugeta Adamu Portfolio",
    type: "website",
    images: [
      {
        url: "https://mulugetaadamu.vercel.app/portifolio-website.jpg",
        width: 1200,
        height: 630,
        alt: "Mulugeta Adamu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulugeta Adamu | Portfolio",
    description:
      "Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
    images: ["https://mulugetaadamu.vercel.app/portifolio-website.jpg"],
    site: "@mulugetaadamu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect and DNS Prefetch for faster resource resolution */}
        <link
          rel="preconnect"
          href="https://fisvimgyzujfdndsqeoq.supabase.co"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://fisvimgyzujfdndsqeoq.supabase.co"
        />
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Theme Colors */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#1a202c"
          media="(prefers-color-scheme: dark)"
        />
        {/* Viewport Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 text-gray-800 bg-white dark:text-gray-100 font-sans`}
      >
        <Transition>
          <RootWrapper>
            <Header />
            <main className="px-4 md:px-8 lg:px-16 flex-grow min-h-screen my-24">
              {children}
            </main>
            <BottomNavbar />
            <Footer />
          </RootWrapper>
        </Transition>
      </body>
    </html>
  );
}
