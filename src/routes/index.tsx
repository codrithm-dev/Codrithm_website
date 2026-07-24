import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState, useRef, useCallback, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Eyebrow, TiltCard, Reveal, Stat } from "../components/ui";

const HeroIllustration = lazy(() => import("../components/HeroIllustration").then(m => ({ default: m.HeroIllustration })));

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
  {
    name: "Sara Vance",
    role: "Founder & CEO",
    img: teamLead,
    skills: ["Python", "React", "Strategy", "AI"],
    social: [
      { type: "li", url: "#" },
      { type: "gh", url: "#" },
      { type: "web", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
  {
    name: "Noah Kincaid",
    role: "Head of AI Research",
    img: teamAi,
    skills: ["TensorFlow", "PyTorch", "LLMs", "MLOps"],
    social: [
      { type: "li", url: "#" },
      { type: "gh", url: "#" },
      { type: "web", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
  {
    name: "Amara Okafor",
    role: "Lead Product Designer",
    img: teamDesign,
    skills: ["Figma", "React", "CSS", "Design"],
    social: [
      { type: "li", url: "#" },
      { type: "gh", url: "#" },
      { type: "web", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
  {
    name: "Rohan Mehta",
    role: "Principal Engineer",
    img: teamDev,
    skills: ["Rust", "Go", "K8s", "AWS"],
    social: [
      { type: "li", url: "#" },
      { type: "gh", url: "#" },
      { type: "web", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
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

type TeamMember = {
  name: string;
  role: string;
  img: string;
  skills: string[];
  social: { type: string; url: string }[];
};

const TeamCard = memo(function TeamCard({ member }: { member: TeamMember }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const socialIcon = (type: string) => {
    switch (type) {
      case "li":
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
      case "gh":
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
      case "web":
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
      case "mail":
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
      default:
        return null;
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative rounded-[28px] overflow-hidden cursor-pointer"
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient border on hover */}
      <div
        className="absolute -inset-[1px] rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: "linear-gradient(135deg, var(--neon-green), var(--neon-blue), var(--neon-green))",
          backgroundSize: "200% 200%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      {/* Card inner */}
      <div className="relative bg-[color:var(--card)] rounded-[28px] overflow-hidden transition-all duration-400 group-hover:shadow-[0_20px_60px_-15px_rgba(0,102,255,0.3)] group-hover:translate-y-[-10px]">

        {/* Portrait area - 70% */}
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            loading="lazy"
            width={512}
            height={680}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-[color:var(--card)]/10 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--neon-blue)]/8 via-transparent to-[color:var(--neon-green)]/8" />



          {/* Decorative particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-[color:var(--neon-green)]/40 animate-pulse" />
            <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 rounded-full bg-[color:var(--neon-blue)]/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-[color:var(--neon-green)]/25 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-[60%] right-[15%] w-0.5 h-0.5 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: "1.5s" }} />
            {/* Abstract node lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
              <line x1="45" y1="80" x2="120" y2="160" stroke="url(#glow-line)" strokeWidth="0.5" opacity="0.3" />
              <line x1="240" y1="120" x2="180" y2="200" stroke="url(#glow-line)" strokeWidth="0.5" opacity="0.25" />
              <line x1="70" y1="280" x2="150" y2="320" stroke="url(#glow-line)" strokeWidth="0.5" opacity="0.2" />
              <circle cx="45" cy="80" r="2" fill="var(--neon-green)" opacity="0.3" />
              <circle cx="120" cy="160" r="1.5" fill="var(--neon-blue)" opacity="0.25" />
              <circle cx="240" cy="120" r="2" fill="var(--neon-green)" opacity="0.2" />
              <circle cx="180" cy="200" r="1.5" fill="var(--neon-blue)" opacity="0.3" />
              <defs>
                <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--neon-green)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--neon-blue)" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Radial light behind portrait */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[color:var(--neon-blue)]/10 blur-[60px]" />
          </div>

          {/* Social icons - slide up on hover */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {member.social.map((s, idx) => (
              <a
                key={s.type}
                href={s.url}
                aria-label={s.type}
                className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[color:var(--neon-green)] hover:text-black"
                style={{ transitionDelay: isHovered ? `${idx * 60}ms` : "0ms" }}
              >
                {socialIcon(s.type)}
              </a>
            ))}
          </div>
        </div>

        {/* Info area - 30% */}
        <div className="p-4 pb-5">
          <h3 className="font-display text-lg font-semibold tracking-tight">{member.name}</h3>
          <p className="mt-1 text-sm text-[color:var(--neon-blue)] font-medium">{member.role}</p>

          {/* Skill chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[color:var(--muted)] text-[color:var(--muted-foreground)] border border-[color:var(--border)] transition-all duration-300 group-hover:border-[color:var(--neon-green)]/30 group-hover:text-[color:var(--foreground)] group-hover:shadow-[0_0_12px_rgba(135,255,188,0.15)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

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
            <Suspense fallback={null}>
              <HeroIllustration />
            </Suspense>
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
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Meet the Minds Behind <span className="text-gradient">Codrithm</span></h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">A community of engineers, researchers, designers, and innovators building intelligent software together.</p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TeamCard member={m} />
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
