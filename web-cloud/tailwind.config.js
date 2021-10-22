const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,svelte}', './node_modules/carbon-ui/**/*.{js,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"],
      'mono': ["IBM Plex Mono", "monospace"]
    },
    colors: {
      ui: {
        d0: '#202020',
        d1: '#363636',
        l0: '#fff',
        l1: '#ddd',
      },
      vib: {
        magenta: "#ff206e",
        yellow: "#fbff12",
        cyan: "#41ead4",
        black: "#0c0f0a"
      },
      primary: "#0f62fe",
      danger: "#da1e28",
    },
  },
  plugins: [],
}