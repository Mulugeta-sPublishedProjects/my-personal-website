module.exports = {
  // Inline critical CSS and lazy-load the rest
  inlineThreshold: 2048,
  // Don't inline critical CSS for external stylesheets
  external: false,
  // Don't inline critical CSS for stylesheets that are above the fold
  inlineFonts: true,
  // Compress CSS
  compress: true,
  // Don't include any JavaScript in the critical CSS
  pruneSource: true,
  // Don't include any media queries in the critical CSS
  mergeStylesheets: true,
  // Additional options for better performance
  path: process.cwd(),
  publicPath: "/_next/static/css/",
  // Reduce FOUC (Flash of Unstyled Content)
  reduceInlineStyles: false,
};
