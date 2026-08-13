import { defineCollection, z } from 'astro:content';

const incidents = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number(),
    category: z.enum(['us', 'islamist', 'far-right', 'conflict']),
    casualties: z.string().optional(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const stats = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    value: z.string(),
    source: z.string().optional(),
    region: z.enum(['us', 'global', 'europe']).optional(),
  }),
});

export const collections = {
  incidents,
  stats,
};
