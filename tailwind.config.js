/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:[ "Inter", "sans-serif"]
        },
      
        keyframes:{
          move:{
            '0%':{transform : 'translate(-100%)'},
            '100%':{transform: 'translate(300%)'}
          },
        },

        animation:{
          'moving-bar':'move 2s linear infinite'
        }
    },


  },
  plugins: [],
  darkMode:'class'
}