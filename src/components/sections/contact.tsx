import { ContactForm } from "@/components/contact-form";
import { CalendlyButton } from "@/components/calendly-button";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="text-sm font-medium text-accent-blue">Get in touch</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s automate something.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell me about the process you want off your plate, or grab time
              directly on my calendar — whichever&apos;s easier.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <CalendlyButton variant="gradient" className="self-start" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
