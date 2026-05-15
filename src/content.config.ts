import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    image: z.string(),
    repoUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    featured: z.boolean(),
    type: z.enum(["frontend", "fullstack", "rpa", "landing"]),
    status: z.enum(["planned", "in-progress", "completed"]),
    publishedAt: z.date(),
  }),
});

const rpaPosts = defineCollection({
  loader: glob({ base: "./src/content/rpa-posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
    difficulty: z.enum(["basic", "intermediate", "advanced"]),
  }),
});

const rpaCases = defineCollection({
  loader: glob({ base: "./src/content/rpa-cases", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    impact: z.array(z.string()),
    tools: z.array(z.string()),
    featured: z.boolean(),
  }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    benefits: z.array(z.string()),
    targetAudience: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  "rpa-posts": rpaPosts,
  "rpa-cases": rpaCases,
  services,
};
