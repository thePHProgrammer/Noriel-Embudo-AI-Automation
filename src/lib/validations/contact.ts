import { z } from "zod";

export const projectTypes = [
  "Workflow automation (n8n / Zapier / GHL)",
  "Agentic AI system",
  "Dashboard / internal tool",
  "Backend / data infrastructure",
  "Not sure yet",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100),
  email: z.string().trim().min(1, "Enter your email.").email("Enter a valid email."),
  projectType: z.enum(projectTypes),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more — at least 10 characters.")
    .max(3000),
  // Honeypot: must stay empty. Bots that fill every field trip this.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
