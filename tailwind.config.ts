import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode using "class" strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // **Colors**
      colors: {
        primary: {
          50: "#FFE5EB",
          100: "#FFB8CA",
          200: "#FF8AA8",
          300: "#FF5D87",
          400: "#FC375F",
          500: "#FC1056",
          600: "#C61356",
          700: "#921042",
          800: "#5D0C2D",
          900: "#2F0617",
        },
        secondary: {
          50: "#F6F9FF",
          100: "#E4ECFF",
          200: "#C9D8FF",
          300: "#AFC4FF",
          400: "#94B0FF",
          500: "#7A9CFF",
          600: "#5C7CFF",
          700: "#435BFF",
          800: "#2C3E99",
          900: "#1D2760",
        },
        success: "#10B981", // Green
        error: "#EF4444", // Red
        warning: "#F59E0B", // Amber
        info: "#3B82F6", // Blue
        gray: {
          light: "#F3F4F6",
          DEFAULT: "#9CA3AF",
          dark: "#374151",
        },
      },

      // **Spacing**
      spacing: {
        px: "1px",
        "0.5": "2px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "32": "128px",
        "40": "160px",
        "48": "192px",
        "56": "224px",
        "64": "256px",
      },

      // **Typography**
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
      },

      // **Borders**
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
      },

      // **Breakpoints (Responsive Design)**
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // **Height and Width**
      height: {
        auto: "auto",
        full: "100%",
        screen: "100vh",
        "screen-75": "75vh",
        "screen-50": "50vh",
      },
      width: {
        auto: "auto",
        full: "100%",
        screen: "100vw",
        "screen-90": "90vw",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
      },
    },
  },
};

export default config;
