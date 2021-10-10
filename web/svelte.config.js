/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    amp: false,
    target: '#svelte',
    hydrate: true,
    prerender: {
      crawl: true,
      enabled: true,
      entries: ['*'],
      onError: 'fail'
    },
    router: true,
    ssr: true,
    vite: () => ({

    })
  }
};

export default config;
