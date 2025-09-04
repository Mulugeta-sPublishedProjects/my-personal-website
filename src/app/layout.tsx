import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../globals.css";
import Footer from "../components/footer";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Transition from "@/shared/top-nav-transition";
import BottomNavbar from "@/shared/bottom-nav";
import RootWrapper from "@/shared/root-wrapper";
import { Navigation } from "@/components/header";
import Chatbot from "@/components/chatbot";

// Load Google font for headings
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mulugeta Adamu | Senior Frontend Developer & Portfolio",
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
  ],
  authors: [{ name: "Mulugeta Adamu" }],
  creator: "Mulugeta Adamu",
  openGraph: {
    title: "Mulugeta Adamu | Senior Frontend Developer & Portfolio",
    description:
      "Senior Frontend + Junior Backend developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
    url: "https://mulugeta.dev",
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
    title: "Mulugeta Adamu | Senior Frontend Developer & Portfolio",
    description:
      "Senior Frontend + Junior Backend developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore Mulugeta Adamu's portfolio, showcasing expertise in software development and creative solutions.",
    images: ["https://mulugetaadamu.vercel.app/portifolio-website.jpg"],
    site: "@mulugetaadamu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect and DNS Prefetch */}
        {/* Favicon & Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Theme Colors */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#1a202c"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={` antialiased bg-background text-foreground font-sans 
          ${merriweather.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Transition>
            <RootWrapper>
              <Navigation />
              <main className="px-4 md:px-8 lg:px-16 grow min-h-screen my-24">
                {children}
              </main>
{/*               <Chatbot />
 */}              <BottomNavbar />
              <Footer />
            </RootWrapper>
          </Transition>
        </ThemeProvider>
      </body>
    </html>
  );
}
