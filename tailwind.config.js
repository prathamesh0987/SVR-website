/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f", // dark mode primary
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        lightPrimary: "#f0f0f0", // light mode primary
        lightText: "#000000", // light mode text color
        lightSecondary: "#1c1c1e",
        lightDimWhite: "rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};