import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const schema = z.object({
  tags: z.array(z.string()),
  image: z.string(),
  date: z.date(),
  published: z.boolean(),
})

export default defineContentConfig({
  collections: {
    all: defineCollection({
      source: '**/*.md',
      type: 'page',
      schema,
    }),
    terminal: defineCollection({
      source: 'terminal/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema,
    }),
    life: defineCollection({
      source: 'life/*.md',
      type: 'page',
      schema,
    },
    ),
  },
})
