const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // Your existing Next.js configuration
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
  },
  webpack: (config) => {
    if (config.optimization) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            enforce: true,
          },
        },
      };

      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion/,
            name: "framer",
            chunks: "all",
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react/,
            name: "lucide",
            chunks: "all",
          },
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui/,
            name: "radix",
            chunks: "all",
          },
        },
      };

      if (config.optimization.minimizer) {
        config.optimization.minimize = true;
      }
    }

    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
      },
    };

    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
