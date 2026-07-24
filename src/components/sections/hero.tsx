import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/calendly-button";
import { CircuitBackground } from "@/components/motion/circuit-background";
import { HeroNodeGraph } from "@/components/motion/node-graph";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <CircuitBackground className="pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.15fr_1fr] md:gap-8">
        <Reveal>
          <p className="mb-5 inline-flex items-center rounded-full border border-border bg-white/5 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            Available for freelance &amp; retainer work
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            I build{" "}
            <span className="text-gradient">AI automations</span> that take
            manual work off your plate.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href="#contact">
                Start a project <ArrowRight />
              </Link>
            </Button>
            <CalendlyButton />
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {siteConfig.availability}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex items-center justify-center">
          <HeroNodeGraph />
        </Reveal>
      </div>
    </section>
  );
}
