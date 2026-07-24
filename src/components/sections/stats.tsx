import { impactStats } from "@/content/stats";
import { Reveal } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="text-3xl font-bold text-gradient sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
