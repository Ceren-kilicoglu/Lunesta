/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spicy: ['"Spicy Rice"', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        "white": "#FFFFFF",
        "blue": "#23A6F0",
        "navcolor": "#737373",
        "brand": "#252B42",
        "darkb": "#14213D"
      },
    },
  },
  plugins: [],
}
