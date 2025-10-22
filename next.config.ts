const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  // Enable additional optimizations (corrected configuration)
  // swcMinify: true, // This is the default in Next.js 15+
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "via.placeholder.com", pathname: "/**" },
    ],
    deviceSizes: [320, 420, 768, 1024, 1280, 1920], // Added larger device size for better quality
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Added larger image sizes
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    contentDispositionType: "inline",
    unoptimized: false,
    // Add additional image optimization settings
    dangerouslyAllowSVG: false,
    contentSecurityPolicy:
      "script-src 'none'; frame-src 'none'; object-src 'none';",
  },
  // SEO optimizations
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          // Security and performance headers
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Expect-CT", value: "enforce, max-age=86400" },
        ],
      },
      {
        source: "/hero.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Content-Type", value: "image/webp" },
        ],
      },
      {
        source: "/hero.avif",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Content-Type", value: "image/avif" },
        ],
      },
      // Add cache headers for project images
      {
        source: "/projects/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Enable static optimization for better SEO
  reactStrictMode: true,
  // Optimize fonts loading
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-*",
    ],
    // Enable modern JavaScript optimizations
    optimizeServerReact: true,
    // Disable legacy JavaScript polyfills for modern browsers
    esmExternals: true,
    // Enable Turbopack for builds (if using Next.js 15.3+)
    // turbo: {
    //   rules: {
    //     "*.svg": {
    //       loaders: ["@svgr/webpack"],
    //       as: "*.js",
    //     },
    //   },
    // },
  },
  // Moved from experimental to top level
  serverExternalPackages: ["sharp", "next-mdx-remote"],
  // Enable granular chunking
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
      skipDefaultConversion: true,
    },
    "@radix-ui/react-dialog": {
      transform: "@radix-ui/react-dialog/dist/{{member}}",
      skipDefaultConversion: true,
    },
    "@radix-ui/react-separator": {
      transform: "@radix-ui/react-separator/dist/{{member}}",
      skipDefaultConversion: true,
    },
    "@radix-ui/react-slot": {
      transform: "@radix-ui/react-slot/dist/{{member}}",
      skipDefaultConversion: true,
    },
    "@radix-ui/react-toggle": {
      transform: "@radix-ui/react-toggle/dist/{{member}}",
      skipDefaultConversion: true,
    },
    "@radix-ui/react-tooltip": {
      transform: "@radix-ui/react-tooltip/dist/{{member}}",
      skipDefaultConversion: true,
    },
  },
  // Optimize JavaScript bundles
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
    // Remove emotion configuration as it's causing issues
    // emotion: true,
  },
  // Target modern browsers to reduce polyfills
  transpilePackages: [],
};

module.exports = withBundleAnalyzer(nextConfig);
