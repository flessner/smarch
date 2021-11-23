import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

import WindiCSS from 'vite-plugin-windicss'

import path from 'path'
const __dirname = path.resolve();
const production = process.env.NODE_ENV === 'production'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({}),
    target: '#svelte',
    prerender: {
      enabled: true,
    },
    vite: {
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
