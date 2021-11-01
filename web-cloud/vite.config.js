import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'

import WindiCSS from 'vite-plugin-windicss'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
  clearScreen: false,
  plugins: [
    routify(),
    svelte({
      emitCss: true,
      compilerOptions: {
        dev: !production,
      },
      extensions: ['.md', '.svelte'],
      preprocess: [
        mdsvex({ extension: 'md' }),
      ],
    }),
    WindiCSS({
      scan: {
        dirs: ['./src', '../carbon-ui'],
        exclude: ['../carbon-ui/node_modules'],
        fileExtensions: ['svelte', 'md', 'js', 'ts'],
      },
    }),
  ],
  server: { port: 8000 },
})
