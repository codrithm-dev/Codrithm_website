import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Section, Eyebrow, TiltCard, Reveal, Stat } from "../components/ui";
import { HeroIllustration } from "../components/HeroIllustration";

const SplashCursorController = lazy(() => import("../components/SplashCursorController").then(m => ({ default: m.SplashCursorController })));

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
      <Suspense fallback={null}>
        <SplashCursorController />
      </Suspense>
      {/* HERO - id="home" */}
      <section id="home" className="relative overflow-hidden" data-hero-3d>
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
              <Link to="/contact" className="btn-ghost-neon">Get in Touch</Link>
            </motion.div>
            <div className="mt-12 grid grid-cols-3 gap-3 max-w-md">
              <Stat value="120+" label="Projects" />
              <Stat value="45+" label="Engineers" />
              <Stat value="18" label="Countries" />
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <HeroIllustration />
          </div>

        </div>
      </section>

      {/* ABOUT - id="about" */}
      <Section id="about">
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

      {/* SERVICES - id="services" */}
      <Section id="services">
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

      {/* PROJECTS - id="projects" */}
      <Section id="projects">
        <Eyebrow>Featured Work</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Selected projects.</h2>
        <div className="mt-12 relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="flex gap-7 w-max hover:[animation-play-state:paused] animate-marquee">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <button
                key={`${p.name}-${i}`}
                className="w-[340px] sm:w-[420px] h-[240px] sm:h-[290px] flex-shrink-0 rounded-xl overflow-hidden relative bg-[color:var(--card)] border border-[color:var(--border)] text-left cursor-pointer transition-colors duration-200 hover:border-[color:var(--neon-green)]/50 group"
                onClick={() => {}}
              >
                <img src={p.img} alt={p.name} loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.14 0.02 265 / 0.88) 100%)" }} />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[color:var(--background)]/60 border border-[color:var(--border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[color:var(--neon-green)] mb-1">{p.tag}</div>
                  <div className="text-lg font-black text-[color:var(--foreground)] leading-tight">{p.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="btn-ghost-neon">See all projects →</Link>
        </div>
      </Section>

      {/* TEAM - id="team" */}
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

      {/* CONTACT - id="contact" */}
      <Section id="contact">
        <div className="relative rounded-[2rem] overflow-hidden glass-strong p-12 sm:p-20 text-center">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 20%, rgba(135,255,188,0.25), transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,102,255,0.35), transparent 60%)" }} />
          <div className="relative">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold">Ready to build something <span className="text-gradient">unforgettable?</span></h2>
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
