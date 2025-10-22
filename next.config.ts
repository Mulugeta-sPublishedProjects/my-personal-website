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
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "via.placeholder.com", pathname: "/**" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    // Optimize image loading for better LCP
    contentDispositionType: "inline",
    // Aggressive image optimization for LCP
    unoptimized: false,
    // Configure image qualities to avoid warnings in Next.js 16
    qualities: [25, 35, 50, 75, 85, 95],
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
  },
  // Add CSS handling optimizations
  webpack: (config, { isServer, dev }) => {
    // Optimize CSS extraction
    if (config.optimization) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
          // Split vendor chunks for better caching
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            enforce: true,
            maxInitialRequests: 10,
            minChunks: 2,
          },
          // Split large libraries into separate chunks
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion/,
            name: "framer",
            chunks: "all",
            priority: 20,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react/,
            name: "lucide",
            chunks: "all",
            priority: 15,
          },
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui/,
            name: "radix",
            chunks: "all",
            priority: 10,
          },
        },
      };

      // Enable minification
      if (config.optimization.minimizer) {
        config.optimization.minimize = true;
      }
    }

    // Add module resolution for faster builds
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
      },
    };

    // Only apply heavy optimizations in production
    if (!dev && !isServer) {
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        maxInitialRequests: 25,
        maxAsyncRequests: 25,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          // Create smaller chunks for better loading
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          // Split by framework
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 30,
          },
        },
      };
    }

    return config;
  },
  // Enable granular chunking
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
      skipDefaultConversion: true,
    },
  },
};

module.exports = withBundleAnalyzer(nextConfig);
