/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Background color from CSS custom properties
        foreground: "var(--foreground)", // Foreground color from CSS custom properties
      },
      textColor: {
        skin: {
          base: "var(--foreground)", // Base text color
          muted: "var(--foreground-muted)", // Muted text color
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--background)", // Background fill color
          overlay: "var(--background-overlay)", // Overlay background color
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional plugin for better form styles
    require("@tailwindcss/typography"), // Optional plugin for rich text styling
  ],
};
