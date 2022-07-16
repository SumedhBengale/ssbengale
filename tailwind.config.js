/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'arvo':['Arvo','sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
