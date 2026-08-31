import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Eyebrow, Reveal, Stat } from "../components/ui";
import { TeamCard, TEAM } from "../components/TeamCard";
import { HeroIllustration } from "../components/HeroIllustration";
import { SocialIcon, type SocialIconName } from "../components/SocialIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codrithm — Where Coders Make History" },
      {
        name: "description",
        content:
          "Codrithm is a technology company and developer community. We build software, run practical sessions, and help aspiring developers gain experience.",
      },
      { property: "og:title", content: "Codrithm — Where Coders Make History" },
      {
        property: "og:description",
        content:
          "Codrithm is a technology company and developer community. We build software, run practical sessions, and help aspiring developers gain experience.",
      },
    ],
  }),
  component: Home,
});

/* ── Data ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    t: "Web Development",
    d: "Building websites and web applications for people, teams, and communities.",
    icon: "◆",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    t: "Mobile Apps",
    d: "Developing mobile applications for iOS and Android.",
    icon: "●",
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    t: "AI & Machine Learning",
    d: "Running sessions and projects in AI, machine learning, and data science.",
    icon: "◈",
    tags: ["Python", "TensorFlow", "LLMs"],
  },
  {
    t: "Community Building",
    d: "Bringing developers, creators, and professionals together to learn and collaborate.",
    icon: "◊",
    tags: ["Mentorship", "Networking", "Events"],
  },
  {
    t: "Version Control",
    d: "Teaching Git, GitHub, and collaborative development workflows.",
    icon: "▲",
    tags: ["Git", "GitHub", "Collaboration"],
  },
  {
    t: "Tech Workshops",
    d: "Practical sessions on tools, frameworks, and software development practices.",
    icon: "✦",
    tags: ["Workshops", "Seminars", "Hackathons"],
  },
];

type P = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  stack: string[];
  metrics: { k: string; v: string }[];
  img?: string;
};
const PROJECTS: P[] = [
  {
    id: "resume-studio",
    name: "Resume Studio",
    tag: "Web App",
    desc: "A guided resume builder — step-by-step forms for experience, education and skills, multiple templates, and PDF export.",
    stack: ["PHP", "MySQL", "dompdf"],
    metrics: [
      { k: "Built by", v: "Atiq Umer" },
      { k: "Status", v: "Open source" },
      { k: "Stars", v: "0" },
    ],
  },
  {
    id: "nexa-web",
    name: "Nexa Web",
    tag: "AI Voice Assistant",
    desc: "A browser-based AI voice assistant built with Streamlit, deployed as a public live demo.",
    stack: ["Python", "Streamlit"],
    metrics: [
      { k: "Built by", v: "Atiq Umer" },
      { k: "Status", v: "Live demo" },
      { k: "Stars", v: "0" },
    ],
  },
  {
    id: "ai-virtual-mouse",
    name: "AI Virtual Mouse",
    tag: "Computer Vision",
    desc: "Controls the system cursor and clicks using real-time hand-gesture tracking from a webcam.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    metrics: [
      { k: "Built by", v: "Atiq Umer" },
      { k: "Status", v: "Open source" },
      { k: "Stars", v: "0" },
    ],
  },
  {
    id: "voxasign",
    name: "VoxaSign",
    tag: "Accessibility AI",
    desc: "Real-time ASL sign-language-to-text-to-speech translator that runs entirely in the browser — no server, no data leaves the device.",
    stack: ["TensorFlow.js", "MediaPipe", "JavaScript"],
    metrics: [
      { k: "Built by", v: "Aliza Afzal" },
      { k: "Status", v: "Live demo" },
      { k: "Stars", v: "1" },
    ],
  },
  {
    id: "event-desk",
    name: "Event Desk",
    tag: "Event Management",
    desc: "A Flask event-management platform with registration, Stripe payments, and QR-code check-in.",
    stack: ["Flask", "SQLAlchemy", "Stripe", "QR Codes"],
    metrics: [
      { k: "Built by", v: "Atiq Umer" },
      { k: "Status", v: "Open source" },
      { k: "Stars", v: "0" },
    ],
  },
];

/* ── Component ────────────────────────────────────────────────────── */

const MILESTONES = [
  {
    y: "2026",
    t: "Codrithm founded",
    d: "A student community where coders make history — coding the logic, crafting the flow.",
  },
  {
    y: "2026",
    t: "First Git & GitHub Workshop",
    d: "Hosted 'Commit to Code: The Git & GitHub Blueprint' with expert speakers.",
  },
  {
    y: "2026",
    t: "MoU with NYLP",
    d: "Signed our first official MoU with the National Youth Leadership Programme.",
  },
  { y: "2026", t: "500+ Followers", d: "Community grows to 500+ followers on LinkedIn." },
];

const EVENTS = [
  { d: "Apr 22", t: "Git & GitHub Blueprint Workshop", where: "Virtual" },
  { d: "May 09", t: "Codrithm Summit '26", where: "Virtual" },
  { d: "Jun 03", t: "Open Source Day", where: "Virtual" },
];

// Keep the landing page focused; the dedicated /team route renders the full team.
const LANDING_TEAM_LIMIT = 7;

/* ── Component ────────────────────────────────────────────────────── */

function Home() {
  const [openProject, setOpenProject] = useState<P | null>(null);
  const [contactSent, setContactSent] = useState(false);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-8 px-4 pt-20 pb-16 sm:min-h-[80vh] sm:gap-10 sm:px-6 sm:pt-6 sm:pb-24 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]"
            >
              Where Coders <span className="text-gradient">Make History</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              Coding the logic, crafting the flow. We build software, run practical sessions, and
              help aspiring developers gain experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#services" className="btn-neon btn-neon-hover">
                Explore Services →
              </a>
              <a href="#contact" className="btn-ghost-neon">
                Get in Touch
              </a>
            </motion.div>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md">
              <Stat value="500+" label="Followers" />
              <Stat value="7" label="Team Members" />
              <Stat value="2026" label="Founded" />
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Built on values. Made for practice.
            </h2>
            <p className="mt-4 sm:mt-5 text-muted-foreground text-base sm:text-lg">
              Codrithm is a technology company and developer community guided by Islamic values. We
              build software, share what we learn, and create opportunities for students and
              aspiring developers to work on practical projects.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { k: "Founded", v: "2026" },
              { k: "Company Size", v: "2-10" },
              { k: "Followers", v: "500+" },
              { k: "Type", v: "Private" },
            ].map((s) => (
              <Reveal key={s.k} delay={0.05}>
                <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--neon-green)]/5 via-transparent to-[color:var(--neon-blue)]/5" />
                  <div className="relative text-2xl sm:text-3xl font-display font-bold text-gradient">
                    {s.v}
                  </div>
                  <div className="relative mt-1 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    {s.k}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {[
            {
              t: "Mission",
              d: "Help junior developers learn, work on practical projects, and grow with knowledge, service, and integrity.",
              icon: "◇",
            },
            {
              t: "Vision",
              d: "Developers who keep learning, share their knowledge, and support others.",
              icon: "○",
            },
            {
              t: "Values",
              d: "Ilm (Knowledge). Ihsan (Excellence). Ikhlas (Sincerity). Tawadu (Humility). We push juniors to lead.",
              icon: "△",
            },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-[color:var(--neon-green)]/20 hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,102,255,0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[color:var(--neon-blue)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl text-gradient">{v.icon}</span>
                    <span className="text-xs uppercase tracking-[0.15em] text-[color:var(--neon-green)] font-semibold">
                      {v.t}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                    {v.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
          A brief history.
        </h2>
        <div className="mt-10 sm:mt-14 relative" role="list">
          {/* Vertical line */}
          <div
            className="absolute left-[29px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--neon-green), var(--neon-blue), transparent)",
            }}
          />
          {MILESTONES.map((m, i) => (
            <Reveal
              key={`${m.y}-${m.t}`}
              delay={i * 0.04}
              role="listitem"
              className="mb-8 sm:mb-10 last:mb-0"
            >
              <div
                className={`relative grid md:grid-cols-2 gap-6 sm:gap-10 items-center ${i % 2 ? "" : "md:[direction:rtl]"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-[14px] h-[14px] rounded-full bg-[color:var(--neon-green)] shadow-[0_0_12px_var(--neon-green),0_0_24px_rgba(135,255,188,0.3)]" />
                </div>

                {/* Card */}
                <div className={`md:[direction:ltr] ml-[52px] md:ml-0`}>
                  <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-[color:var(--neon-green)]/20 hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,102,255,0.12)]">
                    {/* Top accent */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Subtle corner glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[color:var(--neon-green)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-[color:var(--neon-green)]/10 text-[color:var(--neon-green)] text-xs font-mono font-semibold tracking-wider">
                        {m.y}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                        Milestone {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[color:var(--foreground)] leading-snug">
                      {m.t}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="7" label="Team members" />
          <Stat value="500+" label="LinkedIn followers" />
          <Stat value="2026" label="Founded" />
          <Stat value="IT" label="Services & Consulting" />
        </div>
      </Section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <Section id="services">
        <Eyebrow>What We Offer</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
          Learn. Build. <span className="text-gradient">Lead.</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl">
          Software services, workshops, mentorship, and project experience for individuals and
          teams.
        </p>
        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="group relative h-full rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-[color:var(--neon-green)]/20 hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,102,255,0.12)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-[color:var(--neon-blue)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[color:var(--neon-green)]/10 border border-[color:var(--neon-green)]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[color:var(--neon-green)]/15 group-hover:border-[color:var(--neon-green)]/20 group-hover:shadow-[0_0_20px_rgba(135,255,188,0.1)]">
                      <span className="text-2xl text-gradient">{s.icon}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[color:var(--foreground)]">
                      {s.t}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-[0.12em] font-medium rounded-md px-2.5 py-1 bg-[color:var(--muted)] text-muted-foreground border border-[color:var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════════ PROJECTS / PORTFOLIO ═══════════════ */}
      <Section id="projects">
        <Eyebrow>Featured Work</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
          Selected projects.
        </h2>
        <div
          className="mt-8 sm:mt-12 relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="flex gap-4 sm:gap-7 w-max hover:[animation-play-state:paused] animate-marquee">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <button
                key={`${p.name}-${i}`}
                className="w-[80vw] sm:w-[340px] lg:w-[420px] h-[180px] sm:h-[240px] lg:h-[290px] flex-shrink-0 rounded-xl overflow-hidden relative bg-[color:var(--card)] border border-[color:var(--border)] text-left cursor-pointer transition-colors duration-200 hover:border-[color:var(--neon-green)]/50 group"
                onClick={() => setOpenProject(p)}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[color:var(--muted)] to-[color:var(--card)]">
                    <span className="font-display text-4xl sm:text-5xl font-black text-[color:var(--border)]">
                      {"</>"}
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, oklch(0.14 0.02 265 / 0.88) 100%)",
                  }}
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[color:var(--background)]/60 border border-[color:var(--border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-[color:var(--neon-green)] mb-1">
                    {p.tag}
                  </div>
                  <div className="text-base sm:text-lg font-black text-[color:var(--foreground)] leading-tight">
                    {p.name}
                  </div>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] p-3 sm:p-4 md:p-8 flex items-center justify-center"
            style={{ backdropFilter: "blur(20px)", background: "rgba(6,10,20,0.8)" }}
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              layoutId={`card-${openProject.id}`}
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-3xl max-w-4xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-auto bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_2px_4px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.25)]"
            >
              <div className="aspect-video lg:aspect-[16/8] rounded-t-3xl relative overflow-hidden bg-[color:var(--card)]">
                {openProject.img ? (
                  <img
                    src={openProject.img}
                    alt={openProject.name}
                    decoding="async"
                    width={1280}
                    height={640}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[color:var(--muted)] to-[color:var(--card)]">
                    <span className="font-display text-6xl sm:text-7xl font-black text-[color:var(--border)]">
                      {"</>"}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-lines opacity-25" />
                <button
                  onClick={() => setOpenProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-lg min-w-[44px] min-h-[44px] bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 rounded-lg px-2.5 sm:px-3 py-1 text-[10px] font-mono tracking-widest bg-black/40 backdrop-blur-md border border-white/10 text-white/80">
                  {openProject.tag}
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold">
                  {openProject.name}
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
                  {openProject.desc}
                </p>
                <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {openProject.metrics.map((m) => (
                    <div
                      key={m.k}
                      className="relative rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center overflow-hidden bg-[color:var(--muted)] border border-[color:var(--border)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--neon-green)]/5 via-transparent to-[color:var(--neon-blue)]/5" />
                      <div className="relative text-lg sm:text-xl md:text-2xl font-display font-bold text-gradient">
                        {m.v}
                      </div>
                      <div className="relative text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium mt-1">
                        {m.k}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Stack
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    {openProject.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium bg-[color:var(--muted)] border border-[color:var(--border)] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={() => setOpenProject(null)}
                    className="btn-neon btn-neon-hover justify-center min-h-[48px]"
                  >
                    Start similar
                  </a>
                  <button
                    onClick={() => setOpenProject(null)}
                    className="btn-ghost-neon justify-center min-h-[48px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ COMMUNITY ═══════════════ */}
      <Section id="community">
        <Eyebrow>Community & Blog</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
          A place to <span className="text-gradient">learn and build</span>.
        </h2>
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <Stat value="500+" label="Followers" />
          <Stat value="7" label="Team" />
          <Stat value="1" label="MoU" />
          <Stat value="5+" label="Events" />
        </div>
      </Section>

      <Section>
        <div>
          <Eyebrow>Upcoming events</Eyebrow>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold">
            Meet the community.
          </h2>
          <ul className="mt-6 sm:mt-8 space-y-3">
            {EVENTS.map((e) => (
              <li
                key={e.t}
                className="group relative rounded-2xl p-4 sm:p-5 flex flex-wrap items-center gap-3 sm:gap-5 bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-[color:var(--neon-green)]/20 hover:shadow-[0_4px_16px_rgba(0,102,255,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center bg-[color:var(--muted)] border border-[color:var(--border)] flex-shrink-0">
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">
                    {e.d.split(" ")[0]}
                  </div>
                  <div className="font-display text-lg sm:text-xl text-gradient font-bold">
                    {e.d.split(" ")[1]}
                  </div>
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="font-semibold text-sm sm:text-base text-[color:var(--foreground)] truncate">
                    {e.t}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{e.where}</div>
                </div>
                <button className="relative btn-ghost-neon !py-2 !px-3 sm:!px-4 text-xs sm:text-sm flex-shrink-0 min-h-[44px]">
                  RSVP
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ═══════════════ TEAM ═══════════════ */}
      <Section id="team">
        <Eyebrow>Our Team</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
          Meet the Minds Behind <span className="text-gradient">Codrithm</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl">
          The people who build Codrithm and support its work.
        </p>
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {TEAM.slice(0, LANDING_TEAM_LIMIT).map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSent(true);
              }}
              className="relative rounded-3xl p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/20 to-transparent" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <Field label="Your name">
                  <input required className="input" placeholder="Ada Lovelace" />
                </Field>
                <Field label="Email">
                  <input required type="email" className="input" placeholder="ada@company.com" />
                </Field>
              </div>
              <Field label="Company">
                <input className="input" placeholder="Codrithm Inc." />
              </Field>
              <Field label="What are you building?">
                <textarea
                  rows={4}
                  className="input"
                  placeholder="Tell us about your project and timeline."
                />
              </Field>
              <button className="btn-neon btn-neon-hover w-full justify-center min-h-[48px]">
                {contactSent ? "✓ Message received — we'll be in touch" : "Send message"}
              </button>
            </form>
          </Reveal>

          <div className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/20 to-transparent" />
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                  Email
                </div>
                <div className="mt-2.5 font-display text-lg break-all sm:break-normal text-[color:var(--foreground)]">
                  codrithm@gmail.com
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/20 to-transparent" />
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                Connect with us
              </div>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Follow Codrithm for announcements, projects, and ways to collaborate.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {[
                  { name: "Linktree", icon: "linktree", url: "https://linktr.ee/codrithm" },
                  {
                    name: "LinkedIn",
                    icon: "linkedin",
                    url: "https://linkedin.com/company/codrithmdev",
                  },
                  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@codrithm" },
                  {
                    name: "Instagram",
                    icon: "instagram",
                    url: "https://www.instagram.com/codrithm",
                  },
                  {
                    name: "Facebook",
                    icon: "facebook",
                    url: "https://www.facebook.com/profile.php?id=61588306509274",
                  },
                  {
                    name: "WhatsApp",
                    icon: "whatsapp",
                    url: "https://chat.whatsapp.com/DiJkqIDK0yi7eQRuaHZ22g",
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-3 py-1.5 text-xs font-medium bg-[color:var(--muted)] border border-[color:var(--border)] text-muted-foreground hover:text-[color:var(--neon-green)] hover:border-[color:var(--neon-green)]/20 min-h-[44px] inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    <SocialIcon name={s.icon as SocialIconName} className="size-4" />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
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
