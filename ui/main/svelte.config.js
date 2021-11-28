import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
const __dirname = path.resolve();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({}),
    target: '#svelte',
    ssr: false,
    prerender: {
      enabled: true,
    },
    vite: {
      resolve: {
        alias: {
          "carbon": path.resolve(__dirname, '../carbon'),
          "@popperjs/core": path.resolve(__dirname, '../carbon/node_modules/@popperjs/core')
        }
      },
      plugins: [
        WindiCSS({
          scan: {
            dirs: ['./src', '../carbon/svelte'],
            fileExtensions: ['svelte', 'md', 'js', 'ts'],
          }
        })
      ]
    }
  },
};

export default config;
