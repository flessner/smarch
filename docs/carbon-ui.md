> CarbonUI is a reimplementation of the Open Source [Carbon Design System](https://github.com/carbon-design-system) as Svelte Components written in [Tailwind](https://tailwindcss.com/).

## Isn't there [Carbon Components Svelte](https://carbon-components-svelte.onrender.com/) already?
Yup, but it doen't use Tailwind, which you can use for easier theming and built in dark mode.
Also CarbonUI doesn't follow the original library as closely and is a bit more flavoured with some *Svelte Magic*.

So, which one to use? Easy! Use [Carbon Components Svelte](https://carbon-components-svelte.onrender.com/) if you prefer
something more closer to IBM's implementation and use CarbonUI if you want something opinionated for perfect Prototyping.

## Documentation follows...

Example `tailwind.config.js` for `main.css`
```json
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,svelte}', './node_modules/carbon-ui/**/*.{js,svelte}'],
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
```