import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode with the 'dark' class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFE5EB",
          100: "#FFB8CA",
          200: "#FF8AA8",
          300: "#FF5D87",
          400: "#FC375F",
          500: "rgb(252, 16, 86)", // Main primary color for emphasis
          600: "#C61356",
          700: "#921042",
          800: "#5D0C2D",
          900: "#2F0617",
        },
      },
    },
  },
  plugins: [],
};

export default config;
