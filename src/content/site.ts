export const siteConfig = {
  name: "Noriel Joy Embudo",
  role: "AI Automation & Agentic Systems Engineer",
  tagline:
    "I design and build AI-powered automations that eliminate manual work — n8n, GoHighLevel, agentic AI, and the dashboards to run them.",
  location: "Quezon City, Philippines (Remote, PHT / GMT+8)",
  email: "embudon@gmail.com",
  github: "https://github.com/thePHProgrammer",
  linkedin:
    "https://www.linkedin.com/in/noriel-joy-embudo-b468a8233",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://noriel-embudo.vercel.app",
  // TODO: replace with your real Calendly (or other scheduling) link before launch.
  calendlyUrl: "https://calendly.com/embudon/intro-call",
  availability:
    "Open for part-time freelance & retainer work, 20–30 hrs/week, evenings & weekends PHT — flexible with US/UK/AU hours by appointment.",
} as const;
