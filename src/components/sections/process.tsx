import { process } from "@/content/process";
import { Reveal } from "@/components/motion/reveal";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <span className="text-sm font-medium text-accent-blue">How we&apos;d work together</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A straightforward process, start to handoff.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {process.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.08}>
            <span className="text-3xl font-bold text-gradient">{item.step}</span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
