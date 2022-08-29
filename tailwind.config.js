/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#6b6a80",
          100: "#56556e",
          200: "#413f5c",
          300: "#2c2a4a",
          400: "#282643",
          500: "#23223b",
          600: "#1f1d34",
          700: "#1a192c",
          800: "#161525",
          900: "#12111e",
        },
        secondary: {
          50: "#e5d2ff",
          100: "#e1ccff",
          200: "#dec5ff",
          300: "#dabfff",
          400: "#c4ace6",
          500: "#ae99cc",
          600: "#9986b3",
          700: "#837399",
          800: "#6d6080",
          900: "#574c66",
        },
        tertiary: {
          50: "#f0faff",
          100: "#dff4ff",
          200: "#b8ebff",
          300: "#7fdeff",
          400: "#33ccfd",
          500: "#09b6ee",
          600: "#0092cc",
          700: "#0075a5",
          800: "#046388",
          900: "#0a5270",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
