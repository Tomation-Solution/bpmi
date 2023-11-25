/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E4095",
        secondary: "#18193B",
        darkText: "#3A3A3A",
        dim: "#C3C4DE",
        link: "#3A3C8C",
        gray: "#65656A",
        darkGray: "#cccccc",
        paleBlue: "#6C8AC0",
        lightGray: "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        play: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
