import type { ProcessStep } from "@/lib/types";

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Scope the workflow",
    description:
      "A short discovery call to map the manual process end-to-end — where time actually goes, which tools are involved, and what \"done\" looks like.",
  },
  {
    step: "02",
    title: "Design the system",
    description:
      "I propose the concrete automation/agent architecture — which platforms, what the data layer looks like, and where a human should stay in the loop.",
  },
  {
    step: "03",
    title: "Build & integrate",
    description:
      "Build in short, visible increments against your real tools and data, with structured logging so every run is traceable from day one.",
  },
  {
    step: "04",
    title: "Test & handoff",
    description:
      "Validate against edge cases, document how it works, and hand off with a clear support/retainer path for anything that needs to evolve.",
  },
];
