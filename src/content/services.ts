import {
  Bot,
  Database,
  Headset,
  LayoutDashboard,
  Rocket,
  Workflow,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    summary:
      "End-to-end automations that take manual, repetitive work off your team's plate.",
    description:
      "I design and build multi-step automations across n8n, Zapier, GoHighLevel, and Monday.com — from lead capture to follow-up, scheduling, and status tracking — so processes run on autopilot instead of living in someone's inbox.",
    icon: Workflow,
    stack: ["n8n", "Zapier", "GoHighLevel", "Monday.com"],
  },
  {
    slug: "agentic-ai-systems",
    title: "Agentic AI Systems",
    summary:
      "AI agents that make real decisions — qualifying, routing, and reasoning, not just responding.",
    description:
      "Using LangGraph, the Model Context Protocol, and AWS Bedrock, I build agentic layers that read context, make routing/qualification decisions, and hand off to a human exactly when they should — wired into your existing automations via n8n.",
    icon: Bot,
    stack: ["LangGraph", "MCP", "AWS Bedrock", "n8n"],
  },
  {
    slug: "dashboards-internal-tools",
    title: "Custom Dashboards & Internal Tools",
    summary:
      "Client-facing portals and internal tools that unify scattered data into one view.",
    description:
      "I ship internal tools and dashboards fast in Retool and Lovable — replacing multiple tool logins with a single real-time view your team (or your clients) actually wants to open.",
    icon: LayoutDashboard,
    stack: ["Retool", "Lovable"],
  },
  {
    slug: "backend-data-infrastructure",
    title: "Backend & Data Infrastructure",
    summary:
      "The data layer and APIs behind every automation, built to scale and stay debuggable.",
    description:
      "From FastAPI services to event-driven AWS pipelines (Lambda, SQS, EventBridge) and schema design across PostgreSQL, DynamoDB, MongoDB, and Airtable, I build the backend so your automations have somewhere solid to stand.",
    icon: Database,
    stack: ["FastAPI", "AWS Lambda", "PostgreSQL", "DynamoDB", "Airtable"],
  },
  {
    slug: "ai-ops-support-agents",
    title: "AI-Powered Ops & Support Agents",
    summary:
      "Onboarding and support agents embedded in your product, with a human safety net.",
    description:
      "I embed LLM-driven agents directly into client portals and CRMs to handle onboarding, FAQs, and support — pulling live account data and escalating to Slack/Teams the moment a request goes beyond what the agent can resolve.",
    icon: Headset,
    stack: ["FastAPI", "LangGraph", "MCP", "AWS Lambda", "DynamoDB"],
  },
  {
    slug: "rapid-prototyping-mvps",
    title: "Rapid Prototyping & MVP Builds",
    summary:
      "From idea to working prototype fast, without cutting corners on the fundamentals.",
    description:
      "Whether it's a Lovable-built client portal or a Python service backing a novel idea, I move quickly from concept to a working MVP you can put in front of real users — then harden it once it proves out.",
    icon: Rocket,
    stack: ["Lovable", "Python", "FastAPI"],
  },
];
