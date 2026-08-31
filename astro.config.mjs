import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://pelicano-bueno.vercel.app',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      ],
    }),
  },
});