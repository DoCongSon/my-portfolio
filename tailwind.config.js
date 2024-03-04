/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cart: '#2A2A2A',
        background: '#161513',
        blueGradient: '#5BADFF',
        primaryText: '#C5C5C5'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'laptop': '810px',
      }
    },
  },
  plugins: [],
}

