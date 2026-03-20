import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    podcastTitle: z.string(),
    publishDate: z.coerce.date(),
    summary: z.string(),
    youtubeId: z.string().optional(),
    transistorUrl: z.string().url().optional(),
    featuredImage: z.string().optional(),
    guestName: z.string().optional(),
    guestTitle: z.string().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    chapters: z.array(z.object({
      time: z.string(),
      title: z.string(),
    })).default([]),
    highlights: z.array(z.object({
      time: z.string(),
      title: z.string(),
    })).default([]),
    socialLinks: z.object({
      facebook: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      x: z.string().url().optional(),
    }).optional(),
    clips: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      thumbnail: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { episodes };
