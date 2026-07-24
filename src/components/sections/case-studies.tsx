import { caseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/case-study/case-study-card";
import { Reveal } from "@/components/motion/reveal";

export function CaseStudies() {
  return (
    <section id="work" className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <span className="text-sm font-medium text-accent-blue">Selected work</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real automations, real impact.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Each project below started as a manual, time-consuming process. Here&apos;s
            the problem, what I built, and what changed.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08} className="h-full">
              <CaseStudyCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
