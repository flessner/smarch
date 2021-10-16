const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,svelte}', './node_modules/carbon-ui/**/*.{js,svelte}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Source Sans Pro", "Helvetica Neue", "Arial", "sans-serif"],
      'mono': ["Source Code Pro", "monospace"]
    },
    colors: {
      black: "#000",
      white: "#FFF",
      uil: {
        DEFAULT: "#f4f4f4",
        pick: "#c6c6c6",
        skirt: "#e0e0e0",
      },
      uid: {
        DEFAULT: "#161616",
        pick: "#292929",
        skirt: "#393939",
      },
      primary: {
        DEFAULT: "#0f62fe",
        pick: "#0353e9"
      },
      danger: {
        DEFAULT: "#da1e28",
        pick: "#ba1b23"
      }
    },
  },
  plugins: [],
}