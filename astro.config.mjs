import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'url';

const resolvePath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

export default defineConfig({
  output: 'server',
  integrations: [react()],
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolvePath('./src'),
        },
      ],
    },
  },
});
