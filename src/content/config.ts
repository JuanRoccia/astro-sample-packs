import { defineCollection, z } from "astro:content";
// z --> zod scehma

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        duration: z.number(),
        description: z.string(),
        buy: z.object({
            argentina: z.string().url(),
            usa: z.string().url(),
            amazon: z.string().url(),
            leanpub: z.string().url(),
            gumroad: z.string().url(),
        }),
    })
})

export const collections = { books }