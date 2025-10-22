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
    deviceSizes: [320, 420, 768, 1024, 1280], // Reduced device sizes
    imageSizes: [16, 32, 48, 64, 96, 128], // Reduced image sizes
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    // Optimize image loading for better LCP
    contentDispositionType: "inline",
    // Aggressive image optimization for LCP
    unoptimized: false,
    // Configure image qualities to avoid warnings in Next.js 16
    qualities: [30, 50, 70, 80], // Added 80 to support hero image quality
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
    // Enable granular chunking and tree shaking
    // turbo: { // Deprecated, using turbopack instead
    //   rules: {
    //     "*.svg": {
    //       loaders: ["@svgr/webpack"],
    //       as: "*.js",
    //     },
    //   },
    // },
    // Enable modern JavaScript optimizations
    optimizeServerReact: true,
    // serverComponentsExternalPackages: [ // Moved to top level
    //   "sharp",
    //   "next-mdx-remote",
    // ],
  },
  // Moved from experimental to top level
  serverExternalPackages: ["sharp", "next-mdx-remote"],
  // Add CSS handling optimizations
  webpack: (config, { isServer, dev }) => {
    // Enable source maps in production for better debugging
    if (!dev) {
      config.devtool = "source-map";
    }

    // Optimize CSS extraction and minification
    if (config.optimization) {
      // Enable aggressive tree shaking to reduce unused code
      config.optimization.usedExports = true;
      config.optimization.sideEffects = true;

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

      // Enable minification with advanced settings
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
          // Optimize for modern browsers - avoid legacy JS
          modern: {
            test: /[\\/]node_modules[\\/]/,
            name: "modern",
            chunks: "all",
            priority: 25,
            enforce: true,
            // Only include modern JS transforms
            reuseExistingChunk: true,
          },
          // Split large dependencies
          lodash: {
            test: /[\\/]node_modules[\\/](lodash|lodash-es)[\\/]/,
            name: "lodash",
            chunks: "all",
            priority: 5,
          },
        },
      };

      // Enable aggressive code splitting
      config.experiments = {
        ...config.experiments,
        layers: true,
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
  // Reduce bundle size by excluding unused locales
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
