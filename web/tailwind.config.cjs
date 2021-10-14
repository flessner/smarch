const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,svelte}', './node_modules/trauben-ui/**/*.{js,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"],
      'mono': ["IBM Plex Mono"]
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
      //ui: {
      //  1: "#f4f4f4",
      //  3: "#c6c6c6",
      //  4: "#8d8d8d",
      //  6: "#6f6f6f",
      //  7: "#393939",
      //  8: "#292929",
      //},
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

