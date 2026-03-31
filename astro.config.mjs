// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://prompt-alchemist.example.com',
  vite: {
    plugins: [
      tailwindcss(),
      // Tailwind HMR can trigger a Vite "program reload" that re-imports SSR entrypoints as
      // `astro:server-app.js`; Astro only registers `astro:server-app`, so resolution fails briefly.
      {
        name: 'astro-server-app-js-alias',
        enforce: 'pre',
        async resolveId(id, importer, options) {
          const base = id.split('?')[0];
          if (base !== 'astro:server-app.js') return;
          return this.resolve('astro:server-app', importer, {
            skipSelf: true,
            ...options,
          });
        },
      },
    ],
  },
});
