import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        //content: z.string(),
        image: z.string(),
        //relations
        // author: z.string(),
        author: reference('author'),
        tags: z.array(z.string())
    })
});

const authorsCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
    })
});

export const collections = {
    blog: blogCollection,
    author: authorsCollection
};