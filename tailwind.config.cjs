/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#131417",
        secondary: "#26D27F",
        grey: "#B1B2B3",
        grey2: "#B3B3B3",
        grey3: "#868788", 
        grey4: "#C1C1C2",
        grey5: "#8A8F9F",
        dimGrey: "#C4C4C4",
        red: "#B70214",
        blackBackground: "#1E1F26",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};