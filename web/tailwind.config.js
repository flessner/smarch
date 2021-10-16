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
      black: "#000408",
      white: "#FFF",
      uil: {
        DEFAULT: "#e0f0ff",
        skirt: "#b0d0ff",
      },
      uid: {
        DEFAULT: "#001020",
        skirt: "#002448",
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