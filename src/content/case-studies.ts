import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-lead-qualification-routing-agent",
    title: "AI Lead Qualification & Routing Agent",
    client: "Agency / GoHighLevel operator",
    summary:
      "An agentic layer that reads, qualifies, and routes every inbound lead — with a human-reviewable audit trail.",
    problem:
      "Inbound leads landing in GoHighLevel needed manual review before anyone knew which pipeline stage — or which rep — they belonged to, slowing response times and letting good leads go cold.",
    solution:
      "Built an agentic layer where a LangGraph agent running on AWS Bedrock reads each inbound GHL lead, qualifies and tags it, and routes it into the right pipeline stage through n8n. A Retool dashboard lets the team review every AI decision, backed by a full PostgreSQL audit trail.",
    impact: [
      "Near-instant lead qualification instead of manual review queues",
      "Every AI routing decision is reviewable and auditable",
      "Reps see pre-qualified, correctly-staged leads the moment they arrive",
    ],
    stack: ["GoHighLevel", "n8n", "LangGraph", "AWS Bedrock", "PostgreSQL", "Retool"],
    featured: true,
    serviceSlug: "agentic-ai-systems",
  },
  {
    slug: "enterprise-agentic-ai-orchestration-platform",
    title: "Enterprise Agentic AI & Workflow Orchestration Platform",
    client: "Enterprise operations team",
    summary:
      "A centralized orchestration layer routing multi-agent AI workflows through reusable, fully observable n8n sub-workflows.",
    problem:
      "As AI-driven automation scaled across teams, workflows became duplicated and impossible to debug — no shared structure, no consistent logging, no single place to see what an agent had actually done.",
    solution:
      "Architected a centralized orchestration layer that routes multi-agent AI workflows through reusable n8n sub-workflows, with structured PostgreSQL logging giving full observability into every step an agent takes.",
    impact: [
      "Reusable sub-workflow architecture instead of duplicated logic per team",
      "Full observability into multi-agent decision paths",
      "Debugging shifted from guesswork to a fast, traceable process",
    ],
    stack: ["n8n", "LangGraph", "MCP", "AWS", "PostgreSQL"],
    featured: true,
    serviceSlug: "agentic-ai-systems",
  },
  {
    slug: "ai-client-onboarding-support-agent",
    title: "AI Client Onboarding & Support Agent",
    client: "SaaS client portal",
    summary:
      "An onboarding and support agent embedded directly in a client portal, escalating to a human at the edge of its ability.",
    problem:
      "New clients needed hand-held onboarding and ongoing support, but routing every question to a human didn't scale — while a bot with no account context would just frustrate people.",
    solution:
      "Built an onboarding and support agent embedded in a Lovable client portal, using LangGraph and MCP to pull live account data straight from DynamoDB through a FastAPI backend on AWS Lambda — escalating to a human over Slack/Teams the moment it reaches the edge of what it can resolve on its own.",
    impact: [
      "Clients get instant, context-aware answers instead of a ticket queue",
      "Human support only engages on genuinely edge-case requests",
      "Fully serverless backend that scales with client volume",
    ],
    stack: ["FastAPI", "LangGraph", "MCP", "AWS Lambda", "DynamoDB", "Lovable"],
    featured: true,
    serviceSlug: "ai-ops-support-agents",
  },
  {
    slug: "ops-command-center",
    title: "Ops Command Center",
    client: "Agency ownership team",
    summary:
      "One real-time dashboard replacing four separate tool logins for agency owners.",
    problem:
      "Project status lived in Monday.com, client records in Airtable, and lead intake came through Zapier — agency owners had to check four separate tools just to get a single picture of the business.",
    solution:
      "Unified project status from Monday.com, client records from Airtable, and lead intake via Zapier into a single Retool dashboard backed by MongoDB, giving owners one real-time view instead of four logins.",
    impact: [
      "Four tools consolidated into a single real-time dashboard",
      "Agency owners get an at-a-glance view of the whole business",
      "New data sources plug into the same MongoDB-backed view",
    ],
    stack: ["Monday.com", "Zapier", "Airtable", "Retool", "MongoDB"],
    featured: true,
    serviceSlug: "dashboards-internal-tools",
  },
  {
    slug: "ghl-lead-to-event-automation",
    title: "GHL Lead-to-Event Automation System",
    client: "Events & webinar funnel",
    summary:
      "A 4-workflow GoHighLevel funnel that takes leads from first click to event registration on autopilot.",
    problem:
      "Every new lead required manual follow-up to get them from initial interest to an actual event registration, eating hours of a small team's week.",
    solution:
      "Engineered a 4-workflow GoHighLevel funnel — powered by GHL and Zapier — that carries leads from first click all the way to event registration automatically, with manual follow-up cut to near zero.",
    impact: [
      "Manual follow-up work reduced to near zero",
      "Consistent, immediate lead nurture at any volume",
      "Team time freed up for actual event delivery, not chasing sign-ups",
    ],
    stack: ["GoHighLevel", "Zapier"],
    featured: true,
    serviceSlug: "workflow-automation",
  },
  {
    slug: "airtable-n8n-recruitment-pipeline",
    title: "Airtable + n8n Recruitment Pipeline",
    client: "Growing hiring team",
    summary:
      "An end-to-end hiring pipeline that automates screening, scheduling, and status updates from application to offer.",
    problem:
      "Manually tracking applicants through screening, interview scheduling, and status updates was slow and error-prone as hiring volume grew.",
    solution:
      "Built an end-to-end hiring pipeline in Airtable orchestrated by n8n, automating candidate screening, interview scheduling, and status updates all the way from application to offer.",
    impact: [
      "Screening and scheduling run automatically instead of manually",
      "Candidates get consistent, timely status updates",
      "Hiring team focuses on interviews, not pipeline admin",
    ],
    stack: ["Airtable", "n8n"],
    featured: false,
    serviceSlug: "workflow-automation",
  },
  {
    slug: "sirenatech-water-quality-prediction",
    title: "SirenaTech — AI Water Quality Prediction System",
    client: "Academic research / CS Expo 2023–2024",
    summary:
      "A portable, IoT-enabled system delivering real-time water-quality assessments via CNNs and an Android app.",
    problem:
      "Assessing water quality in the field typically requires lab equipment or slow manual testing, with no easy way to get a real-time read on-site.",
    solution:
      "Built a portable, IoT-enabled monitoring system using convolutional neural networks to deliver real-time water-quality assessments through a companion Android app, from sensor to prediction to mobile display.",
    impact: [
      "Real-time water-quality predictions from a portable IoT device",
      "Won Best Innovative Thesis, CS Expo 2023–2024",
      "End-to-end system: embedded sensing, CNN inference, mobile app",
    ],
    stack: ["Python", "Kotlin", "Convolutional Neural Networks"],
    featured: false,
    serviceSlug: "rapid-prototyping-mvps",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
