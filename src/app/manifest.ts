import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mulugeta Adamu - Senior Frontend Developer Portfolio",
    short_name: "Mulugeta Portfolio",
    description: "Senior Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f2937",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["portfolio", "developer", "technology", "business"],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "About Me",
        short_name: "About",
        description: "Learn more about my background and experience",
        url: "/#about",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "My Work",
        short_name: "Portfolio",
        description: "View my latest projects and case studies",
        url: "/#work",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch for collaboration opportunities",
        url: "/#contact",
        icons: [{ src: "/icons/icon-192x192.png", sizes: "192x192" }],
      },
    ],
    screenshots: [
      {
        src: "/screenshots/desktop-home.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Desktop view of portfolio homepage",
      },
      {
        src: "/screenshots/mobile-home.png",
        sizes: "375x667",
        type: "image/png",
        form_factor: "narrow",
        label: "Mobile view of portfolio homepage",
      },
    ],
  };
}
