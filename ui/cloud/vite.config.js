import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'

import WindiCSS from 'vite-plugin-windicss'

import path from 'path'
const __dirname = path.resolve();
const production = process.env.NODE_ENV === 'production'

export default defineConfig({
  clearScreen: false,
  resolve: {
    alias: {
      "carbon": path.resolve(__dirname, '../carbon'),
      "@popperjs/core": path.resolve(__dirname, './node_modules/@popperjs/core'),
      "carbon-icons-svelte": path.resolve(__dirname, './node_modules/carbon-icons-svelte'),
    }
  },
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['./src', '../carbon'],
        fileExtensions: ['svelte', 'md', 'js', 'ts'],
      },
    }),
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
    })
  ],
  server: { port: 8000 }
})
