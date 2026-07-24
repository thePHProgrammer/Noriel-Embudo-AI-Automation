import { services } from "@/content/services";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <span className="text-sm font-medium text-accent-blue">What I offer</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Services built around the problems that eat your team&apos;s time.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From a single automated workflow to a full agentic system with its own
          dashboard, here&apos;s what I can build for you.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Card className="border-gradient-glow h-full">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-gradient-accent">
                  <Icon className="size-5 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">
                  {service.summary}
                </CardDescription>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.stack.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
