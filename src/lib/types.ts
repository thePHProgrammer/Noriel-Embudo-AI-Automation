import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  stack: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  featured: boolean;
  serviceSlug: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ImpactStat = {
  value: string;
  label: string;
};

export type TechCategory = {
  category: string;
  tools: string[];
};
