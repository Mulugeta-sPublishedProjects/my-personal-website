/* eslint-disable unicorn/prefer-module */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "medium.com",
      "avatars.githubusercontent.com",
      "fisvimgyzujfdndsqeoq.supabase.co",
    ],
  },
});
