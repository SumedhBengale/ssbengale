/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        cursor0:{
          '0%':{opacity:0},
          '34%':{opacity:0},
          '35%':{opacity:1},
          '99%':{opacity:1},
          '100%':{opacity:0},

        },
        cursor1:{
          '0%':{opacity: 0},
          '50%':{opacity: 0},
          '51%':{opacity: 1},
          '99%':{opacity: 1},
          '100%':{opacity: 0}
        },
        cursor2:{
          '0%':{opacity:0},
          '34%':{opacity:0},
          '35%':{opacity:1},
          '99%':{opacity:1},
          '100%':{opacity:0},

        },
        wave: {
          "0%":  { transform: 'rotate( 0.0deg)' },
          "10%": { transform: 'rotate(14.0deg)' },  /* The following five values can be played with to make the waving more or less extreme */
          "20%": { transform: 'rotate(-8.0deg)' },
          "30%": { transform: 'rotate(14.0deg)' },
          "40%": { transform: 'rotate(-4.0deg)' },
          "50%": { transform: 'rotate(10.0deg)' },
          "60%": { transform: 'rotate( 0.0deg)' },  /* Reset for the last half to pause */
         "100%": { transform: 'rotate( 0.0deg)' },
        },
      },
      animation: {
        'cursor0anim':'cursor0 2s forwards',
        'cursor1anim':'cursor1 4s forwards',
        'cursor2anim':'cursor2 12s forwards',
        'waving-hand': 'wave 2s linear infinite',
      },
      fontFamily:{
        'arvo':['Arvo','sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
