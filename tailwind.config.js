/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        futura: ['Montserrat', 'sans-serif'],
      },
      colors: {
        goldYellow: '#FFD700 ',
        darkGoldYellow: '#C0A160 ',
        darkGray: '#333333 ',
        softGray: "#CCCCCC",
        warmBeige: '#E6D4B4',
        darkBlue: '#001F3F',
        softDarkBlue: '#003366',
        palePink: '#FFD1DC',
        lightBlue: '#AED6F1',
      }
    },
  },
  plugins: [
        import('flowbite/plugin')
    ],
}

