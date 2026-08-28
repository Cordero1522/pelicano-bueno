import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = { notas };