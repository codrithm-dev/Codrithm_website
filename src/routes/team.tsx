import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, Eyebrow, Reveal } from "../components/ui";
import { TeamCard, TEAM } from "../components/TeamCard";
import { SITE_URL } from "../lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Codrithm" },
      {
        name: "description",
        content:
          "Meet the Codrithm team, the people behind our technology work and developer community.",
      },
      { property: "og:title", content: "Our Team — Codrithm" },
      {
        property: "og:description",
        content:
          "Meet the Codrithm team, the people behind our technology work and developer community.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/team` }],
  }),
  component: TeamPage,
});

const HERO_MEMBERS = [
  { member: TEAM[0], position: "left-[3%] top-[18%]" },
  { member: TEAM[1], position: "left-[14%] bottom-[16%]" },
  { member: TEAM[2], position: "right-[14%] top-[14%]" },
  { member: TEAM[3], position: "right-[3%] bottom-[18%]" },
  { member: TEAM[5], position: "right-[32%] bottom-[8%]" },
];

function FloatingMember({
  member,
  position,
}: {
  member: (typeof TEAM)[number];
  position: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${position} hidden w-52 items-center gap-3 rounded-2xl border border-white/10 bg-[color:var(--card)]/90 p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.26)] backdrop-blur-sm xl:flex`}
    >
      <img
        src={member.img}
        alt=""
        className="size-10 rounded-xl object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-foreground">{member.name}</p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">{member.role}</p>
      </div>
    </motion.div>
  );
}

function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden xl:min-h-[500px]">
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
            <span className="font-display text-[clamp(7rem,16vw,14rem)] font-bold tracking-[-0.09em] text-white/[0.035]">
              CODRITHM
            </span>
          </div>
          <div className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--neon-blue)]/[0.06] blur-3xl" />
          {HERO_MEMBERS.map(({ member, position }) => (
            <FloatingMember key={member.name} member={member} position={position} />
          ))}
        </div>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-14 xl:min-h-[500px] xl:justify-center">
          <Eyebrow>Our Team</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Meet the Minds Behind <span className="text-gradient">Codrithm</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg text-muted-foreground"
          >
            The people who build Codrithm and support its work.
          </motion.p>
        </div>
      </section>

      {/* ── Full grid ── */}
      <Section>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link to="/" className="btn-ghost-neon">
            ← Back to Home
          </Link>
        </div>
      </Section>
    </>
  );
}
