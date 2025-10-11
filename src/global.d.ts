// Type declarations for CSS imports
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// For global CSS imports with no exports (side-effect only)
declare module "../globals.css" {
  export {};
}

// Also handle other possible CSS file patterns
declare module "./globals.css" {
  export {};
}
