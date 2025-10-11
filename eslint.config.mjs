// eslint.config.mjs
import next from "eslint-config-next";

export default [
  {
    ignores: ["node_modules", ".next", "dist"], // optional
  },
  ...next, // pulls in Next.js + React + Core Web Vitals rules
];
