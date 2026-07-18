import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, Reveal, TiltCard } from "../components/ui";
import { PageHero } from "../components/PageHero";

import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Codrithm" },
      { name: "description", content: "AI, ML, cloud, mobile and full-stack engineering services." },
      { property: "og:title", content: "Codrithm Services" },
      { property: "og:description", content: "Capabilities that ship value." },
    ],
  }),
  component: Services,
});

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

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need to <span className="text-gradient">build intelligent</span>.</>}
        subtitle="A single team that spans AI research, engineering and design. Composable capabilities, honest scopes, real outcomes."
      />


      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section>
        <div className="glass-strong rounded-[2rem] p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Have a scope in mind?</h2>
          <p className="mt-3 text-muted-foreground">We reply within one business day.</p>
          <div className="mt-6"><a href="/contact" className="btn-neon btn-neon-hover">Book a call</a></div>
        </div>
      </Section>
    </>
  );
}
