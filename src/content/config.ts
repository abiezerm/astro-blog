import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        //content: z.string(),
        // image: image().refine((img) => img.width < 1000, {
        //     message: 'Image should be lower than 1000px wide',
        // }),
        issDraft: z.boolean().default(false),

        image: z.string(),
        //relations
        // author: z.string(),
        author: reference('author'),
        tags: z.array(z.string()),
    })
});

const authorsCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string().optional(),
        linkedIn: z.string().optional(),
        github: z.string().optional(),
        bio: z.string().optional(),
        subtitle: z.string().optional(),
    })
});

export const collections = {
    blog: blogCollection,
    author: authorsCollection
};