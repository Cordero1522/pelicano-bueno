import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_LABELS } from './lib/categories';

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(CATEGORY_LABELS),
    date: z.date(),
    author: reference('autores'),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

const autores = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/autores' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string(),
    socials: z.object({
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { notas, autores };