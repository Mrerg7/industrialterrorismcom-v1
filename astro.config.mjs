// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Pure static output for Cloudflare Workers Static Assets (no adapter required)
export default defineConfig({
  site: 'https://industrialterrorism.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
