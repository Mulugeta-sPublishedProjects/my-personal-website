module.exports = {
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
          50: "#ebf1ff", // Lightest blue
          100: "#d3dff9",
          200: "#a2bcf6",
          300: "#6e97f5",
          400: "#4778f4", // Soft accent
          500: "#3264f4", // Main primary
          600: "#285af5",
          700: "#1e4bda", // Darker accent
          800: "#1542c3",
          900: "#0139ac", // Deep blue
        },
        secondary: {
          50: "#F0F4FF", // Complementary soft blue
          100: "#E0E9FF",
          200: "#C7D4FF",
          300: "#AFC0FF",
          400: "#97ABFF",
          500: "#7F97FF",
          600: "#667BFF",
          700: "#4D5FFF",
          800: "#3444E5",
          900: "#212E99",
        },
        success: "#4CAF50", // Green
        error: "#F44336", // Red
        warning: "#FFC107", // Amber
        info: "#03A9F4", // Light blue
        gray: {
          light: "#F3F4F6",
          DEFAULT: "#9CA3AF",
          dark: "#374151",
        },
      },

      // **Typography**
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
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

      // **Breakpoints (Responsive Design)**
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
