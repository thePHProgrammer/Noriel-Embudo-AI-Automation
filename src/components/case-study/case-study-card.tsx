import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <Card className="border-gradient-glow flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {project.client}
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue" />
        </div>
        <CardTitle className="mt-3">{project.title}</CardTitle>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-col gap-1.5">
          {project.impact.slice(0, 2).map((point) => (
            <li key={point} className="flex gap-2 text-sm text-foreground/90">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-gradient-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
