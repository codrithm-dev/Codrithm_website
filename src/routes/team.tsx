import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, Eyebrow, Reveal } from "../components/ui";
import { TeamCard, TEAM } from "../components/TeamCard";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Codrithm" },
      {
        name: "description",
        content:
          "Meet the full Codrithm team — junior leaders who stepped up to build a values-driven tech community.",
      },
      { property: "og:title", content: "Our Team — Codrithm" },
      {
        property: "og:description",
        content:
          "Meet the full Codrithm team — junior leaders who stepped up to build a values-driven tech community.",
      },
    ],
    links: [{ rel: "canonical", href: "https://codrithm-website.vercel.app/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-12 text-center">
          <Eyebrow>Our Team</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
          >
            Meet the Minds Behind <span className="text-gradient">Codrithm</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Junior leaders who stepped up — now building a platform for the next wave of talent to
            rise.
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
