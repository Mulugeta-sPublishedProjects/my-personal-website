This is a [Next.js](https://nextjs.org) project optimized for [PNPM](https://pnpm.io) package manager with [Turbopack](https://turbo.build/pack) and Progressive Web App (PWA) support. It uses PNPM as the primary package manager for all development and production workflows.

## Recent Updates

This project has been migrated from webpack to Turbopack for faster compilation and Hot Module Replacement. PWA functionality has been enhanced with improved service worker handling and caching strategies. See [PWA_TURBOPACK_MIGRATION.md](PWA_TURBOPACK_MIGRATION.md) for detailed documentation of the changes.

## Getting Started

First, install dependencies with PNPM:

```bash
pnpm install
```

Then, run the development server with Turbopack:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application now uses Turbopack for faster compilation and Hot Module Replacement.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Available Scripts

- `pnpm dev` - Starts the development server with Turbopack (default port 3000)
- `pnpm build` - Builds the application for production
- `pnpm start` - Starts the production server
- `pnpm test` - Runs the test suite
- `pnpm test:ci` - Runs the test suite in CI mode
- `pnpm lint` - Runs ESLint
- `pnpm lint:fix` - Runs ESLint and fixes issues
- `pnpm format` - Formats code with Prettier
- `pnpm type-check` - Performs TypeScript type checking
- `pnpm clean` - Cleans build artifacts

## Progressive Web App (PWA) Features

This application includes full PWA support with:

- Offline functionality via service worker
- Installable app experience
- Caching strategies for optimal performance
- Manifest configuration for mobile devices

To test PWA features:

1. Build the application: `pnpm build`
2. Start the production server: `pnpm start`
3. Visit the site and use browser dev tools to simulate offline mode
4. Check for install prompt in browser

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
