import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://5games.site', // Actualízalo si usas otro dominio
  integrations: [
    tailwind(),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/services/sharp',
    }),
  ],
  markdown: {
    drafts: true,
  },
});
