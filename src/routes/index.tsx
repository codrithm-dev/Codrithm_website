import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

/* ── Data ─────────────────────────────────────────────────────────── */

const SERVICES = [
  { t: "AI Development", d: "Custom AI systems: from research prototypes to production platforms.", icon: "◈", tags: ["Agents", "RAG", "Fine-tuning"] },
  { t: "Machine Learning", d: "Predictive models with real business KPIs, not toy demos.", icon: "◊", tags: ["Forecasting", "Ranking", "MLOps"] },
  { t: "Computer Vision", d: "Realtime perception for images, video and 3D.", icon: "◉", tags: ["Detection", "Segmentation", "Edge"] },
  { t: "LLM Solutions", d: "Enterprise-ready assistants, evaluators, agent systems.", icon: "✦", tags: ["OpenAI", "Anthropic", "Local"] },
  { t: "Web Development", d: "Delightful, accessible marketing and product experiences.", icon: "◆", tags: ["Next.js", "TanStack", "Astro"] },
  { t: "Full Stack Development", d: "Typed end-to-end apps with clean data models and clear UX.", icon: "▢", tags: ["TypeScript", "Postgres", "tRPC"] },
  { t: "Cloud Solutions", d: "Multi-cloud architecture, cost-aware and observable.", icon: "☁", tags: ["AWS", "GCP", "Cloudflare"] },
  { t: "DevOps", d: "Ship fast without breaking things: CI/CD, IaC, SRE.", icon: "▲", tags: ["K8s", "Terraform", "Grafana"] },
  { t: "Mobile Apps", d: "Native-feeling iOS and Android apps.", icon: "●", tags: ["React Native", "Swift", "Kotlin"] },
  { t: "Automation", d: "Workflows and agents that remove human toil.", icon: "⟳", tags: ["Zapier", "Temporal", "Custom"] },
];

import projNeura from "../assets/proj-neura.jpg";
import projLoom from "../assets/proj-loom.jpg";
import projOrbit from "../assets/proj-orbit.jpg";
import projPulse from "../assets/proj-pulse.jpg";
import projAtlas from "../assets/proj-atlas.jpg";
import projHelix from "../assets/proj-helix.jpg";
import teamLead from "../assets/team-lead.jpg";
import teamAi from "../assets/team-ai.jpg";
import teamDesign from "../assets/team-design.jpg";
import teamDev from "../assets/team-dev.jpg";


type P = { id: string; name: string; tag: string; desc: string; stack: string[]; metrics: { k: string; v: string }[]; img: string };
const PROJECTS: P[] = [
  { id: "neura", name: "Neura Vision", tag: "Computer Vision", desc: "Realtime industrial defect detection running on the edge with sub-30ms latency.", stack: ["PyTorch", "ONNX", "Rust", "K8s"], metrics: [{ k: "Accuracy", v: "99.4%" }, { k: "Latency", v: "27ms" }, { k: "Devices", v: "8,200" }], img: projNeura },
  { id: "loom", name: "Loom AI Studio", tag: "LLM Platform", desc: "Multi-tenant RAG + agents platform serving 10M+ tokens per day.", stack: ["Next.js", "LangChain", "Postgres", "Redis"], metrics: [{ k: "Tokens/day", v: "10M+" }, { k: "P95", v: "820ms" }, { k: "Tenants", v: "140" }], img: projLoom },
  { id: "orbit", name: "Orbit Cloud", tag: "DevOps", desc: "Zero-downtime deploy platform for regulated industries.", stack: ["Go", "Terraform", "Argo", "AWS"], metrics: [{ k: "Uptime", v: "99.99%" }, { k: "Deploys/wk", v: "1,240" }, { k: "MTTR", v: "4m" }], img: projOrbit },
  { id: "pulse", name: "PulseChat", tag: "AI Assistant", desc: "Consumer AI companion with memory, voice and multi-modal input.", stack: ["React Native", "Swift", "OpenAI", "Supabase"], metrics: [{ k: "Users", v: "250k" }, { k: "Retention D30", v: "42%" }, { k: "Stars", v: "4.8" }], img: projPulse },
  { id: "atlas", name: "Atlas Analytics", tag: "Data Platform", desc: "Unified analytics for product teams — semantic layer + LLM queries.", stack: ["DuckDB", "TypeScript", "GCP"], metrics: [{ k: "Queries/day", v: "8.4M" }, { k: "TCO", v: "-38%" }, { k: "Sources", v: "62" }], img: projAtlas },
  { id: "helix", name: "Helix Health", tag: "Healthcare AI", desc: "HIPAA-compliant clinical assistant that summarizes patient histories.", stack: ["Python", "FHIR", "Anthropic"], metrics: [{ k: "Hours saved/wk", v: "1,800" }, { k: "Sites", v: "24" }, { k: "Compliance", v: "SOC2" }], img: projHelix },
];

const TEAM = [
  { name: "Sara Vance", role: "Founder & CEO", img: teamLead },
  { name: "Noah Kincaid", role: "Head of AI Research", img: teamAi },
  { name: "Amara Okafor", role: "Lead Product Designer", img: teamDesign },
  { name: "Rohan Mehta", role: "Principal Engineer", img: teamDev },
];

const MILESTONES = [
  { y: "2019", t: "Codrithm founded", d: "Two engineers, one manifesto: humane software, intelligent by default." },
  { y: "2020", t: "First AI platform shipped", d: "Deployed a computer vision pipeline for a Fortune 500 client." },
  { y: "2021", t: "Global team", d: "Grew to 15 engineers across 8 countries." },
  { y: "2022", t: "Open source year", d: "Released 40+ tools with 8M+ downloads." },
  { y: "2023", t: "LLM studio", d: "Launched our internal RAG + agent platform." },
  { y: "2024", t: "12k community", d: "Community reaches 12,000 builders." },
  { y: "2026", t: "Codrithm 3.0", d: "New era: agentic systems, generative interfaces, edge AI." },
];



const EVENTS = [
  { d: "Apr 22", t: "AI Studio Live — Agentic UX", where: "Virtual" },
  { d: "May 09", t: "Codrithm Summit '26", where: "Lisbon" },
  { d: "Jun 03", t: "Open Source Day", where: "Bengaluru" },
];

const PINS = [
  { name: "Lisbon", x: 47, y: 40 },
  { name: "London", x: 48, y: 32 },
  { name: "Bengaluru", x: 68, y: 55 },
  { name: "New York", x: 27, y: 42 },
  { name: "Tokyo", x: 82, y: 44 },
  { name: "São Paulo", x: 33, y: 68 },
];

/* ── Component ────────────────────────────────────────────────────── */

function Home() {

  const [openProject, setOpenProject] = useState<P | null>(null);
  const [contactSent, setContactSent] = useState(false);

  return (
    <>
      <Suspense fallback={null}>
        <SplashCursorController />
      </Suspense>

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" className="relative overflow-hidden">
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
              <a href="#services" className="btn-neon btn-neon-hover">Explore Services →</a>
              <a href="#contact" className="btn-ghost-neon">Get in Touch</a>
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

      {/* ═══════════════ ABOUT ═══════════════ */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">A studio built for the intelligent era.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We combine research-grade AI with world-class product engineering. Our teams
              ship measurable outcomes — not slide decks.
            </p>
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

      {/* ═══════════════ SERVICES ═══════════════ */}
      <Section id="services">
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Capabilities that <span className="text-gradient">compound</span>.</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">A single team that spans AI research, engineering and design. Composable capabilities, honest scopes, real outcomes.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.06}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <TiltCard className="h-full group">
                  <div className="relative">
                    <div className="text-5xl text-gradient transition-transform group-hover:scale-110 group-hover:rotate-6">{s.icon}</div>
                    <div className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(circle, rgba(135,255,188,0.25), transparent 70%)" }} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest glass rounded-full px-2.5 py-1 text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════════ PROJECTS / PORTFOLIO ═══════════════ */}
      <Section id="projects">
        <Eyebrow>Featured Work</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Selected projects.</h2>
        <div className="mt-12 relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="flex gap-7 w-max hover:[animation-play-state:paused] animate-marquee">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <button
                key={`${p.name}-${i}`}
                className="w-[340px] sm:w-[420px] h-[240px] sm:h-[290px] flex-shrink-0 rounded-xl overflow-hidden relative bg-[color:var(--card)] border border-[color:var(--border)] text-left cursor-pointer transition-colors duration-200 hover:border-[color:var(--neon-green)]/50 group"
                onClick={() => setOpenProject(p)}
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
      </Section>

      {/* Project modal */}
      <AnimatePresence>
        {openProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] p-4 sm:p-8 flex items-center justify-center"
            style={{ backdropFilter: "blur(20px)", background: "rgba(6,10,20,0.8)" }}
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              layoutId={`card-${openProject.id}`}
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-auto"
            >
              <div className="aspect-[16/8] rounded-t-3xl relative overflow-hidden bg-[color:var(--card)]">
                <img src={openProject.img} alt={openProject.name} width={1280} height={640} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-lines opacity-25" />
                <button onClick={() => setOpenProject(null)} className="absolute top-4 right-4 glass rounded-full w-9 h-9 flex items-center justify-center">✕</button>
                <div className="absolute bottom-4 left-6 glass rounded-full px-3 py-1 text-[10px] font-mono tracking-widest">{openProject.tag}</div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-4xl font-bold">{openProject.name}</h2>
                <p className="mt-3 text-muted-foreground">{openProject.desc}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {openProject.metrics.map((m) => (
                    <div key={m.k} className="glass rounded-2xl p-4 text-center">
                      <div className="text-2xl font-display font-bold text-gradient">{m.v}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{m.k}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {openProject.stack.map((s) => <span key={s} className="glass rounded-full px-3 py-1 text-xs">{s}</span>)}
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <a href="#contact" onClick={() => setOpenProject(null)} className="btn-neon btn-neon-hover">Start similar</a>
                  <button onClick={() => setOpenProject(null)} className="btn-ghost-neon">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ COMMUNITY ═══════════════ */}
      <Section id="community">
        <Eyebrow>Community & Blog</Eyebrow>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">The knowledge hub for <span className="text-gradient">intelligent builders</span>.</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <Stat value="12K+" label="Members" /><Stat value="320" label="Events" /><Stat value="8.4M" label="Downloads" /><Stat value="480" label="Articles" />
        </div>
      </Section>



      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Eyebrow>Upcoming events</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Meet the community.</h2>
            <ul className="mt-8 space-y-3">
              {EVENTS.map((e) => (
                <li key={e.t} className="glass rounded-2xl p-5 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-xl flex flex-col items-center justify-center glass-strong">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{e.d.split(" ")[0]}</div>
                    <div className="font-display text-xl text-gradient">{e.d.split(" ")[1]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{e.t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{e.where}</div>
                  </div>
                  <button className="btn-ghost-neon !py-2 !px-4 text-sm">RSVP</button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Section>

      {/* ═══════════════ TEAM ═══════════════ */}
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

      {/* ═══════════════ CONTACT ═══════════════ */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setContactSent(true); }}
              className="glass-strong rounded-3xl p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name"><input required className="input" placeholder="Ada Lovelace" /></Field>
                <Field label="Email"><input required type="email" className="input" placeholder="ada@company.com" /></Field>
              </div>
              <Field label="Company"><input className="input" placeholder="Codrithm Inc." /></Field>
              <Field label="What are you building?">
                <textarea rows={5} className="input" placeholder="Tell us about your project, timeline, and success criteria." />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Budget">
                  <select className="input">
                    <option>{"<"} $25k</option><option>$25k – $75k</option><option>$75k – $200k</option><option>$200k+</option>
                  </select>
                </Field>
                <Field label="Timeline">
                  <select className="input">
                    <option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Exploring</option>
                  </select>
                </Field>
              </div>
              <button className="btn-neon btn-neon-hover w-full justify-center">{contactSent ? "✓ Message received — we'll be in touch" : "Send message"}</button>
            </form>
          </Reveal>

          <div className="space-y-6">
            <TiltCard>
              <div className="text-xs uppercase tracking-widest text-[color:var(--neon-green)]">Global presence</div>
              <div className="relative mt-4 aspect-[2/1] rounded-2xl overflow-hidden" style={{ background: "radial-gradient(ellipse at center, rgba(0,102,255,0.35), transparent 70%)" }}>
                <div className="absolute inset-0 grid-lines opacity-40" />
                <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full opacity-30">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <path key={i} d={`M0 ${2.5 + i * 2.5} Q 25 ${2.5 + i * 2.5 - 2}, 50 ${2.5 + i * 2.5} T 100 ${2.5 + i * 2.5}`} stroke="#87FFBC" fill="none" strokeWidth="0.1" />
                  ))}
                </svg>
                {PINS.map((p) => (
                  <div key={p.name} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%,-50%)" }}>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[color:var(--neon-green)] glow-green"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground whitespace-nowrap">{p.name}</div>
                  </div>
                ))}
              </div>
            </TiltCard>

            <div className="grid sm:grid-cols-2 gap-4">
              <TiltCard>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-2 font-display text-lg">hello@codrithm.com</div>
              </TiltCard>
            </div>

            <TiltCard>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Newsletter</div>
              <p className="mt-2 text-sm">Get one thoughtful essay per month on AI and craft.</p>
              <div className="mt-4 glass rounded-full p-1.5 flex items-center">
                <input placeholder="you@company.com" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground" />
                <button type="button" className="btn-neon btn-neon-hover !py-2 !px-4 text-sm">Subscribe</button>
              </div>
              <div className="mt-5 flex gap-2">
                {["Twitter","LinkedIn","GitHub","YouTube"].map(s => (
                  <a key={s} href="#" className="glass rounded-full px-3 py-1 text-xs hover:text-[color:var(--neon-green)]">{s}</a>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
