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
      primary: "#0f62fe",
      secondary: "#ff206e",
      danger: "#da1e28",
    },
  },
  plugins: []
})