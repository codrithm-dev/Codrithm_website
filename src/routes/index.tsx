import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Eyebrow, Reveal, Stat } from "../components/ui";
import { TeamCard, TEAM } from "../components/TeamCard";
import { HeroIllustration } from "../components/HeroIllustration";
import { SocialIcon, type SocialIconName } from "../components/SocialIcon";
import interAiClubLogo from "../assets/inter-ai-club.webp";
import deepCiphersLogo from "../assets/deepciphers.webp";
import superiorAiSocietyLogo from "../assets/superior-ai-society.webp";
import ncbaeLogo from "../assets/ncbae.webp";
import microsoftStudentAmbassadorsLogo from "../assets/microsoft-student-ambassadors.webp";
import voxaSignLogo from "../assets/voxasign.webp";
import superiorUniversityLogo from "../assets/superior-university.webp";
import nylpLogo from "../assets/nylp.webp";

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
  url?: string;
};
const PROJECTS: P[] = [
  {
    id: "resume-studio",
    name: "Resume Studio",
    tag: "Web App",
    desc: "A guided resume builder — step-by-step forms for experience, education and skills, multiple templates, and PDF export.",
    stack: ["PHP", "MySQL", "dompdf"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Status", v: "Open source" },
      { k: "Stars", v: "0" },
    ],
  },
  {
    id: "nexa-web",
    name: "Nexa Web",
    tag: "AI Voice Assistant",
    desc: "A browser-based AI voice assistant built with Streamlit and deployed as a public live demo.",
    stack: ["Python", "Streamlit"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Type", v: "Web app" },
      { k: "Status", v: "Live demo" },
    ],
  },
  {
    id: "neuralflex",
    name: "NeuralFlex",
    tag: "AI Solutions",
    desc: "A public web presence for NeuralFlex, a Finland-based AI startup building intelligent vision and automation solutions for businesses.",
    stack: ["AI", "Computer Vision", "Web"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Type", v: "Company site" },
      { k: "Status", v: "Live" },
    ],
    url: "https://neuralflex.io/",
  },
  {
    id: "ai-virtual-mouse",
    name: "AI Virtual Mouse",
    tag: "Computer Vision",
    desc: "A hands-free desktop controller that uses webcam hand tracking. Move the cursor with an index finger and click with a pinch gesture in real time.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Type", v: "DIP project" },
      { k: "Completed", v: "2025" },
    ],
    url: "https://drive.google.com/file/d/1Vl-a9bdjOwGyrC5hnSi_BOIFtcRxOhym/view?usp=drive_link&usp=embed_facebook",
  },
  {
    id: "wide-box-cargo",
    name: "Wide Box Cargo",
    tag: "Client Website",
    desc: "The official website for a UAE movers and packers company, built to explain residential, commercial, and inter-emirate relocation services and support quote requests.",
    stack: ["WordPress", "Responsive Design", "SEO"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Type", v: "Client work" },
      { k: "Completed", v: "2025" },
    ],
  },
  {
    id: "monal-london",
    name: "Monal London",
    tag: "Restaurant Website",
    desc: "A restaurant website for authentic Pakistani cuisine, with responsive content, a refined service presentation, and an online reservation flow.",
    stack: ["WordPress", "Content Management", "Responsive Design"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Type", v: "Client work" },
      { k: "Completed", v: "2025" },
    ],
    url: "https://monallondon.com/",
  },
  {
    id: "st-dubai-tech",
    name: "ST Dubai Tech",
    tag: "Client Website",
    desc: "The official site for a Dubai maintenance-services company, designed to present its services and contact information clearly on every device.",
    stack: ["WordPress", "Responsive Design", "SEO"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
      { k: "Type", v: "Client work" },
      { k: "Completed", v: "2025" },
    ],
  },
  {
    id: "voxasign",
    name: "VoxaSign",
    tag: "Accessibility AI",
    desc: "Real-time ASL sign-language-to-text-to-speech translator that runs entirely in the browser — no server, no data leaves the device.",
    stack: ["TensorFlow.js", "MediaPipe", "JavaScript"],
    metrics: [
      { k: "A project by", v: "Codrithm" },
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
      { k: "A project by", v: "Codrithm" },
      { k: "Status", v: "Open source" },
      { k: "Stars", v: "0" },
    ],
  },
];

const PARTNERS: { name: string; logo: string; url?: string }[] = [
  { name: "Inter AI Club", logo: interAiClubLogo, url: undefined },
  { name: "DeepCiphers", logo: deepCiphersLogo, url: undefined },
  { name: "Superior AI Society", logo: superiorAiSocietyLogo, url: undefined },
  { name: "NCBA&E", logo: ncbaeLogo, url: undefined },
  {
    name: "Microsoft Student Ambassadors",
    logo: microsoftStudentAmbassadorsLogo,
    url: undefined,
  },
  { name: "VoxaSign", logo: voxaSignLogo, url: undefined },
  { name: "Superior University", logo: superiorUniversityLogo, url: undefined },
  { name: "National Youth Leadership Programme", logo: nylpLogo, url: undefined },
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
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[color:var(--foreground)]"
              >
                Get in Touch
              </a>
            </motion.div>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md">
              <Stat value="600+" label="Followers" countUp />
              <Stat value="7+" label="Team Members" countUp />
              <Stat value="100+" label="Active Members" countUp />
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <Section id="about">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.03] sm:text-5xl md:text-6xl">
              Code with <span className="text-gradient">purpose.</span>
              <br />
              Build with <span className="text-gradient">people.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Codrithm is a technology company and developer community guided by Islamic values. We
              build software, share what we learn, and create practical opportunities for students
              and aspiring developers.
            </p>
          </Reveal>
          <div className="border-t border-[color:var(--border)]">
            {[
              { n: "01", t: "Build", d: "Software, tools, and practical digital products." },
              { n: "02", t: "Learn", d: "Sessions, shared knowledge, and project experience." },
              {
                n: "03",
                t: "Connect",
                d: "A community built on service, integrity, and collaboration.",
              },
            ].map((s) => (
              <Reveal key={s.n}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[color:var(--border)] py-5 sm:py-6">
                  <span className="font-mono text-sm font-semibold text-[color:var(--neon-green)] sm:text-base">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
          A brief <span className="text-gradient">history.</span>
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

      {/* ═══════════════ PARTNERS ═══════════════ */}
      <Section id="partners">
        <Eyebrow>Partners & Collaborators</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Organizations we <span className="text-gradient">work with.</span>
        </h2>
        <div
          className="relative mt-8 overflow-hidden sm:mt-10"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="flex w-max items-center gap-3 py-1 hover:[animation-play-state:paused] animate-marquee">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-20 items-center gap-3 rounded-xl border border-slate-200 bg-slate-100 px-4 text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-[1.02]"
              >
                <div className="flex h-12 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="whitespace-nowrap font-display text-sm font-semibold tracking-[-0.02em]">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
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
        <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
          What we’ve been <span className="text-gradient">building.</span>
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
                  <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[color:var(--neon-green)] sm:text-[11px]">
                    {p.tag}
                  </div>
                  <div className="font-display text-lg font-semibold leading-tight tracking-[-0.03em] text-[color:var(--foreground)] sm:text-2xl">
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
                <div className="absolute bottom-3 left-4 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur-md sm:bottom-4 sm:left-6 sm:px-3">
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
                      <div className="relative font-display text-lg font-semibold tracking-[-0.03em] text-[color:var(--foreground)] sm:text-xl md:text-2xl">
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
                  {openProject.url && (
                    <a
                      href={openProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon btn-neon-hover justify-center min-h-[48px]"
                    >
                      Visit project ↗
                    </a>
                  )}
                  <a
                    href="#contact"
                    onClick={() => setOpenProject(null)}
                    className={
                      openProject.url
                        ? "btn-ghost-neon justify-center min-h-[48px]"
                        : "btn-neon btn-neon-hover justify-center min-h-[48px]"
                    }
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
        <div>
          <Eyebrow>Past events</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            A place to <span className="text-gradient">learn and build</span>.
          </h2>
          <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-0">
            {EVENTS.map((event, index) => {
              const placement = ["md:-rotate-2", "md:z-10 md:-translate-y-4", "md:rotate-2"][index];

              return (
                <div key={event.t} className={placement}>
                  <motion.article
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="group relative min-h-64 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_32px_rgba(0,0,0,0.14)] sm:min-h-72 sm:p-7"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/35 to-transparent" />
                    <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[color:var(--neon-blue)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-xl border border-[color:var(--neon-green)]/20 bg-[color:var(--neon-green)]/10 px-3 py-2 text-center">
                          <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                            {event.d.split(" ")[0]}
                          </div>
                          <div className="font-display text-xl font-bold text-[color:var(--neon-green)]">
                            {event.d.split(" ")[1]}
                          </div>
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                          Past event
                        </span>
                      </div>
                      <h3 className="mt-8 max-w-xs font-display text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-[color:var(--foreground)] sm:text-3xl">
                        {event.t}
                      </h3>
                      <div className="mt-auto border-t border-[color:var(--border)] pt-4 text-sm text-muted-foreground">
                        {event.where}
                      </div>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
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
            <Reveal
              key={m.name}
              delay={i * 0.08}
              className={i >= 3 ? "hidden md:block" : undefined}
            >
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link to="/team" className="btn-ghost-neon min-h-[44px]">
            See all team members <span aria-hidden="true">→</span>
          </Link>
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
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] sm:rounded-3xl sm:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-blue)]/30 to-transparent" />
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Book a call
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                Prefer to talk? Choose a time that works for you.
              </p>
              <a
                href="https://calendly.com/codrithm/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-4 min-h-[44px] w-full justify-center text-sm"
              >
                Book 30 minutes ↗
              </a>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/20 to-transparent" />
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                Connect with us
              </div>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Follow Codrithm for announcements, projects, and ways to collaborate.{" "}
                <a
                  href="mailto:codrithm@gmail.com"
                  className="font-medium text-[color:var(--foreground)] underline decoration-[color:var(--neon-green)]/50 underline-offset-4 transition-colors hover:text-[color:var(--neon-green)]"
                >
                  codrithm@gmail.com
                </a>
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
