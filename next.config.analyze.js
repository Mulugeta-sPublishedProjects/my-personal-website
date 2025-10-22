const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "via.placeholder.com", pathname: "/**" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    contentDispositionType: "inline",
    unoptimized: false,
    qualities: [25, 35, 50, 75, 85, 95],
  },
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
    ];
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-*",
    ],
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
  // Removed i18n configuration to avoid warnings in App Router
};

module.exports = withBundleAnalyzer(nextConfig);
