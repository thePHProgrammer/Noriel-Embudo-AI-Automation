import { techStack } from "@/content/tech-stack";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function TechStack() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <span className="text-sm font-medium text-accent-blue">Tools of the trade</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The stack behind every build.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, i) => (
            <Reveal key={category.category} delay={(i % 3) * 0.08}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
