import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    all: defineCollection({
      source: '**/*.md',
      type: 'page',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        draft: z.boolean(),
      }),
    }),
    terminal: defineCollection({
      source: 'terminal/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        draft: z.boolean(),
      }),
    }),
    life: defineCollection({
      source: 'life/*.md',
      type: 'page',
    },
    ),
  },
})
