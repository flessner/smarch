const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,svelte}', './node_modules/carbon-ui/**/*.{js,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Source Sans Pro", "Helvetica Neue", "Arial", "sans-serif"],
      'mono': ["Source Code Pro", "monospace"]
    },
    colors: {
      ui: {
        d0: '#101012',
        d1: '#202024',
        d2: '#303036',
        l0: '#f0f0f0',
        l1: '#d0d0d0',
        l2: '#b0b0b0'
      },
      black: "#000",
      primary: "#0f62fe",
      danger: "#da1e28",
    },
  },
  plugins: [],
}