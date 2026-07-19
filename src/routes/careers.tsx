import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Reveal, TiltCard } from "../components/ui";
import { PageHero } from "../components/PageHero";

import { motion } from "framer-motion";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Codrithm" },
      { name: "description", content: "Build the intelligent web with us. Open roles across AI, engineering and design." },
      { property: "og:title", content: "Careers at Codrithm" },
      { property: "og:description", content: "Grow from Intern to AI Lead — with a team that ships." },
    ],
  }),
  component: Careers,
});

const LADDER = ["Intern", "Junior", "Mid-Level", "Senior", "Architect", "AI Lead"];
const JOBS = [
  { t: "Senior ML Engineer", l: "Remote · EU/US", tag: "Engineering" },
  { t: "Frontend Architect", l: "Lisbon / Remote", tag: "Engineering" },
  { t: "Applied AI Researcher", l: "London / Remote", tag: "Research" },
  { t: "Product Designer", l: "Remote", tag: "Design" },
  { t: "DevOps Engineer", l: "Remote · Global", tag: "Infra" },
  { t: "Community Lead", l: "Remote", tag: "Community" },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Do the <span className="text-gradient">best work</span> of your career.</>}
        subtitle="Codrithm is a small team of humans building serious software for a big shift. Remote-first, async by default, high trust."
      />


      {/* ROADMAP */}
      <Section>
        <Eyebrow>Growth path</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Your trajectory, engineered.</h2>
        <div className="mt-12 glass-strong rounded-3xl p-6 sm:p-8 overflow-x-auto -mx-6 sm:mx-0">
          <div className="relative flex items-center gap-3 sm:gap-4 min-w-[600px] sm:min-w-[720px] px-4 sm:px-0">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-px" style={{ background: "linear-gradient(90deg, #87FFBC, #0066FF)" }} />
            {LADDER.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex-1 flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-full glass-strong flex items-center justify-center font-display font-bold text-lg text-gradient glow-green">{i + 1}</div>
                <div className="text-sm font-semibold">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* JOBS */}
      <Section>
        <Eyebrow>Open roles</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">We're hiring.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {JOBS.map((j, i) => (
            <Reveal key={j.t} delay={(i % 2) * 0.06}>
              <motion.div whileHover={{ y: -6 }}>
                <TiltCard>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest glass rounded-full px-2.5 py-1 text-muted-foreground">{j.tag}</span>
                    <span className="text-xs text-[color:var(--neon-green)]">Full-time</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{j.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{j.l}</p>
                  <button className="mt-6 btn-neon btn-neon-hover">Apply now →</button>
                </TiltCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Remote-first", d: "Work from where you think best." },
            { t: "Real ownership", d: "Meaningful equity for every engineer." },
            { t: "Learning budget", d: "$3,000/year for books, courses, and events." },
          ].map(v => (
            <TiltCard key={v.t}>
              <h3 className="font-display text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </TiltCard>
          ))}
        </div>
      </Section>
    </>
  );
}
