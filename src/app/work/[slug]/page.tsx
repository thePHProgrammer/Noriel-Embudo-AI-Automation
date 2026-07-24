import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { services } from "@/content/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const service = services.find((s) => s.slug === project.serviceSlug);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>

        <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {project.client}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
            The problem
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            {project.problem}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
            The solution
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            {project.solution}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
            The impact
          </h2>
          <ul className="mt-3 flex flex-col gap-2.5">
            {project.impact.map((point) => (
              <li key={point} className="flex gap-3 text-base text-foreground/90">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm text-muted-foreground">
              {service ? `Part of ${service.title}` : "Have something similar?"}
            </p>
            <p className="mt-1 text-base font-medium text-foreground">
              Let&apos;s talk about your project.
            </p>
          </div>
          <Button asChild>
            <Link href="/#contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
        </div>
      </Reveal>
    </article>
  );
}
