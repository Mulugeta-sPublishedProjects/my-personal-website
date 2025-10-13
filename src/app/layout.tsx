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
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mulugeta Adamu",
              url: "https://mulugeta-portfolio.vercel.app",
              jobTitle: "Experienced Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "TopLink Technologies",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Addis Ababa University",
              },
              sameAs: [
                "https://github.com/mulugetaadamu",
                "https://linkedin.com/in/mulugetaadamu",
                "https://twitter.com/mulugeta_dev",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Frontend Development",
                "Web Applications",
                "UI/UX Design",
                "Responsive Design",
                "SEO Optimization",
              ],
              description:
                "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients. Expert in responsive design and SEO optimization.",
              nationality: {
                "@type": "Country",
                name: "Ethiopia",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "Ethiopia",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased min-h-screen`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
