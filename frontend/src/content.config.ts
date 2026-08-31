import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    category: z.string().default(""),
    type: z.string().default("GUÍA"),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    client: z.string().default(""),
    category: z.string().default(""),
    description: z.string().default(""),
    number: z.string().default(""),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    results: z.string().optional(),
  }),
});

export const collections = { insights, projects };
