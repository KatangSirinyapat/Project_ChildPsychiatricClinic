const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      'sans': [ 'Prompt', 'sans-serif']
    },
    backgroundColor: theme => ({
      'gray': '#C4C4C4',
      'purple' : '#AB80AD',
      'babygray' : '#F2F2F2'
     }),
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
