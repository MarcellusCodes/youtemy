/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f7f9",
          100: "#dfdee0",
          200: "#c6c6c7",
          300: "#aeadae",
          400: "#959495",
          500: "#7c7c7d",
          600: "#636364",
          700: "#4a4a4b",
          800: "#323132",
          900: "#191919",
        },
        secondary: {
          50: "#091540",
          100: "#222c53",
          200: "#3a4466",
          300: "#535b79",
          400: "#6b738c",
          500: "#848aa0",
          600: "#9da1b3",
          700: "#b5b9c6",
          800: "#ced0d9",
          900: "#e6e8ec",
        },
      },
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
