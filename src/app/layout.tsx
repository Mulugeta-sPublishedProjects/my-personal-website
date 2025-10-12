import "../globals.css";
import ClientLayout from "./client-layout";
import { SEO } from "@/components/seo";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="Mulugeta Adamu - Portfolio"
        />
        <meta name="application-name" content="Mulugeta Adamu Portfolio" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />

        {/* Enhanced SEO with reusable component */}
        <SEO />

        {/* Additional SEO */}
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mulugeta Adamu",
              url: "https://mulugeta-portfolio.vercel.app",
              jobTitle: "Senior Frontend Developer",
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
                "Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients. Expert in responsive design and SEO optimization.",
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
      <body className="font-sans antialiased min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
