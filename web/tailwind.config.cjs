const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,svelte}', './node_modules/trauben-ui/**/*.{js,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // Custom fonts
      'sans': ["IBM Plex Sans", "Segoe UI", "Roboto", "Arial", "sans-serif"],
    },
    colors: {
      white: "#FFF",
      black: "#000",
      ui: {
        1: "#f4f4f4",
        3: "#c6c6c6",
        4: "#8d8d8d",
        6: "#6f6f6f",
        7: "#393939",
        8: "#292929",
        DEFAULT: "#161616"
      },
      primary: {
        DEFAULT: "#0f62fe"
      },
      secondary: "f20089",
    },
  },
  plugins: [],
}

