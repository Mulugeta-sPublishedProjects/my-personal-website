/* eslint-disable unicorn/prefer-module */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn-images-1.medium.com" },
      { protocol: "https", hostname: "medium.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "fisvimgyzujfdndsqeoq.supabase.co" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "private, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  webpack: (config: { resolve: { alias: any } }, { isServer }: any) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: "react/esm",
        "react-dom": "react-dom/esm",
      };
    }
    return config;
  },
});
