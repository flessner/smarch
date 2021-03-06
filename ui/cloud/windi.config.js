import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  mode: 'jit',
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Inter", "Arial", "sans-serif"],
      'mono': ["DM Mono", "monospace"]
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
  plugins: []
})