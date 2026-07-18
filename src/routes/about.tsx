import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Reveal, TiltCard, Stat } from "../components/ui";
import { PageHero } from "../components/PageHero";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Codrithm" },
      { name: "description", content: "Meet Codrithm — the studio building the intelligent web." },
      { property: "og:title", content: "About Codrithm" },
      { property: "og:description", content: "Our mission, vision, and the humans behind the machines." },
    ],
  }),
  component: About,
});

const MILESTONES = [
  { y: "2019", t: "Codrithm founded", d: "Two engineers, one manifesto: humane software, intelligent by default." },
  { y: "2020", t: "First AI platform shipped", d: "Deployed a computer vision pipeline for a Fortune 500 client." },
  { y: "2021", t: "Global team", d: "Grew to 15 engineers across 8 countries." },
  { y: "2022", t: "Open source year", d: "Released 40+ tools with 8M+ downloads." },
  { y: "2023", t: "LLM studio", d: "Launched our internal RAG + agent platform." },
  { y: "2024", t: "12k community", d: "Community reaches 12,000 builders." },
  { y: "2026", t: "Codrithm 3.0", d: "New era: agentic systems, generative interfaces, edge AI." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Built by <span className="text-gradient">people</span>, powered by algorithms.</>}
        subtitle="Codrithm is a global studio of engineers, researchers and designers. We build intelligent software with the same care an architect gives to a building."
      />


      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Mission", d: "Make advanced AI feel simple, useful, and trustworthy for real teams." },
            { t: "Vision", d: "A world where software understands intent, not just instructions." },
            { t: "Values", d: "Craft. Curiosity. Candor. Ship things worth using." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <TiltCard>
                <div className="text-xs uppercase tracking-widest text-[color:var(--neon-green)]">{v.t}</div>
                <p className="mt-4 text-lg">{v.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">A brief history.</h2>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, #87FFBC, #0066FF, transparent)" }} />
          <ul className="space-y-10">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.04}>
                <li className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "" : "md:[direction:rtl]"}`}>
                  <div className={`md:[direction:ltr]`}>
                    <TiltCard>
                      <div className="text-xs uppercase tracking-widest text-[color:var(--neon-green)]">{m.y}</div>
                      <h3 className="mt-2 font-display text-2xl font-semibold">{m.t}</h3>
                      <p className="mt-2 text-muted-foreground text-sm">{m.d}</p>
                    </TiltCard>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[color:var(--neon-green)] glow-green" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="45+" label="Team members" />
          <Stat value="120+" label="Shipped projects" />
          <Stat value="18" label="Countries" />
          <Stat value="99.98%" label="Model uptime" />
        </div>
      </Section>
    </>
  );
}
