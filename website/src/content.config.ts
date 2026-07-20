import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CHAPTERS } from './chapters';

const chapters = defineCollection({
  loader: glob({
    pattern: CHAPTERS.map((c) => `${c.id}.md`),
    base: '../content',
  }),
  schema: z.object({ title: z.string() }),
});

export const collections = { chapters };
