import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        // relation
        author: z.string(),
        //content: z.string(),
        image: z.string(),
        //relation
        tags: z.array(z.string())
    })
});

export const collections = {
    blog: blogCollection
};