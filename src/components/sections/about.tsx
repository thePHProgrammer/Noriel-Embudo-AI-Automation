import { siteConfig } from "@/content/site";
import { certifications } from "@/content/tech-stack";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-12">
        <Reveal>
          <span className="text-sm font-medium text-accent-blue">About</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A builder, not just an integrator.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m an automation and agentic AI engineer based in{" "}
            {siteConfig.location}. By day, I architect enterprise automation
            systems; on the side, I take on freelance builds for teams who need
            a manual process turned into something that just runs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I care about the same things on every project: automations that
            don&apos;t break silently, AI agents that know when to hand off to a
            human, and dashboards people actually open. Every build gets
            structured logging from day one — so when something needs a fix,
            it&apos;s a quick look, not a guessing game.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <Badge key={cert}>{cert}</Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
