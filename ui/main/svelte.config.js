import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

import WindiCSS from 'vite-plugin-windicss'

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
