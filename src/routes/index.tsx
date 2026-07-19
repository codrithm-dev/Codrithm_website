import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Section, Eyebrow, TiltCard, Reveal, Stat } from "../components/ui";

const LogoScene = lazy(() => import("../components/LogoScene").then(m => ({ default: m.LogoScene })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codrithm — Intelligent Software, Beautifully Engineered" },
      { name: "description", content: "AI, ML and full-stack engineering studio building premium, future-ready digital products." },
      { property: "og:title", content: "Codrithm — Intelligent Software, Beautifully Engineered" },
      { property: "og:description", content: "AI, ML and full-stack engineering studio building premium, future-ready digital products." },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { title: "AI Development", desc: "Custom AI systems built end-to-end.", icon: "◈" },
  { title: "Machine Learning", desc: "Predictive models that ship value.", icon: "◊" },
  { title: "LLM Solutions", desc: "RAG, agents, and fine-tuning.", icon: "✦" },
  { title: "Full-Stack Web", desc: "Modern web apps at scale.", icon: "◆" },
  { title: "Cloud & DevOps", desc: "Reliable, observable infrastructure.", icon: "▲" },
  { title: "Mobile Apps", desc: "Native-feeling cross-platform apps.", icon: "●" },
];

import projNeura from "../assets/proj-neura.jpg";
import projLoom from "../assets/proj-loom.jpg";
import projOrbit from "../assets/proj-orbit.jpg";
import projPulse from "../assets/proj-pulse.jpg";
import teamLead from "../assets/team-lead.jpg";
import teamAi from "../assets/team-ai.jpg";
import teamDesign from "../assets/team-design.jpg";
import teamDev from "../assets/team-dev.jpg";

const PROJECTS = [
  { name: "Neura Vision", tag: "Computer Vision", meta: "99.4% accuracy · Realtime", img: projNeura },
  { name: "Loom AI Studio", tag: "LLM Platform", meta: "10M+ tokens/day", img: projLoom },
  { name: "Orbit Cloud", tag: "DevOps", meta: "Zero-downtime deploys", img: projOrbit },
  { name: "PulseChat", tag: "AI Assistant", meta: "250k active users", img: projPulse },
];

const TEAM = [
  { name: "Sara Vance", role: "Founder & CEO", img: teamLead },
  { name: "Noah Kincaid", role: "Head of AI Research", img: teamAi },
  { name: "Amara Okafor", role: "Lead Product Designer", img: teamDesign },
  { name: "Rohan Mehta", role: "Principal Engineer", img: teamDev },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative" data-hero-3d>
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-24 grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <div>
            <Eyebrow>AI · ML · Software Engineering</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]"
            >
              We architect the <span className="text-gradient">intelligent</span> web.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Codrithm is a studio of engineers, researchers and designers building
              premium AI systems and full-stack products for ambitious teams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/services" className="btn-neon btn-neon-hover">Explore Services →</Link>
              <Link to="/community" className="btn-ghost-neon">Join Community</Link>
            </motion.div>
            <div className="mt-12 grid grid-cols-3 gap-3 max-w-md">
              <Stat value="120+" label="Projects" />
              <Stat value="45+" label="Engineers" />
              <Stat value="18" label="Countries" />
            </div>
          </div>
          <div className="relative h-[520px] lg:h-[640px]">
            <Suspense fallback={<div className="w-full h-full" />}>
              <LogoScene />
            </Suspense>
          </div>

        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">A studio built for the intelligent era.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We combine research-grade AI with world-class product engineering. Our teams
              ship measurable outcomes — not slide decks.
            </p>
            <Link to="/about" className="mt-6 inline-flex btn-ghost-neon">Our Story →</Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Founded", v: "2019" },
              { k: "Model uptime", v: "99.98%" },
              { k: "Client NPS", v: "72" },
              { k: "Open Source", v: "40+" },
            ].map((s) => (
              <Reveal key={s.k} delay={0.05}><TiltCard><div className="text-4xl font-display font-bold text-gradient">{s.v}</div><div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div></TiltCard></Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Capabilities that <span className="text-gradient">compound</span>.</h2>
          </div>
          <Link to="/services" className="btn-ghost-neon">All Services →</Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <TiltCard className="h-full">
                <div className="text-4xl text-gradient">{s.icon}</div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section>
        <Eyebrow>Featured Work</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Selected projects.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <TiltCard>
                <div className="aspect-[16/10] rounded-2xl relative overflow-hidden bg-[color:var(--card)]">
                  <img src={p.img} alt={p.name} loading="lazy" width={1280} height={1280} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 grid-lines opacity-30" />
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono tracking-widest">{p.tag}</div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="font-display text-xl font-semibold">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{p.meta}</div>
                  </div>
                  <Link to="/portfolio" className="text-sm text-[color:var(--neon-green)] hover:underline">Case study →</Link>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COMMUNITY STATS */}
      <Section>
        <div className="glass-strong rounded-[2rem] p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <Eyebrow>Community</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">A global network of builders.</h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                12,000+ engineers, researchers and founders shipping AI in public.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[["12K+","Members"],["320","Events"],["8.4M","Downloads"],["40+","OSS Repos"]].map(([v,l]) => (
                <Stat key={l} value={v} label={l} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Eyebrow>Testimonials</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Trusted by teams that ship.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { q: "Codrithm delivered our LLM platform in half the time we planned. Rare team.", a: "Priya S.", r: "CTO, Nova Labs" },
            { q: "The most thoughtful engineers we've partnered with. Design and depth.", a: "Marc D.", r: "VP Eng, Helios" },
            { q: "They turned a prototype into a product our board demoed on stage.", a: "Aiko T.", r: "Founder, Rill" },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <TiltCard>
                <p className="text-sm leading-relaxed">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full" style={{ background: "linear-gradient(135deg, #87FFBC, #0066FF)" }} />
                  <div>
                    <div className="text-sm font-semibold">{t.a}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OUR TEAM */}
      <Section id="team">
        <Eyebrow>Our Team</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">The people behind the magic.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <TiltCard className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-2 ring-[color:var(--neon-green)]/30 shadow-[0_0_30px_rgba(135,255,188,0.15)]">
                  <img src={m.img} alt={m.name} loading="lazy" width={256} height={256} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-[color:var(--neon-blue)]">{m.role}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative rounded-[2rem] overflow-hidden glass-strong p-12 sm:p-20 text-center">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 20%, rgba(135,255,188,0.25), transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,102,255,0.35), transparent 60%)" }} />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-6xl font-bold">Ready to build something <span className="text-gradient">unforgettable?</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Let's design an intelligent system that moves your business forward.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-neon btn-neon-hover">Start a project</Link>
              <Link to="/portfolio" className="btn-ghost-neon">See our work</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
