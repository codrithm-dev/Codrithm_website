import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Section, Eyebrow, Reveal, TiltCard } from "../components/ui";
import { PageHero } from "../components/PageHero";
import projNeura from "../assets/proj-neura.jpg";
import projLoom from "../assets/proj-loom.jpg";
import projOrbit from "../assets/proj-orbit.jpg";
import projPulse from "../assets/proj-pulse.jpg";
import projAtlas from "../assets/proj-atlas.jpg";
import projHelix from "../assets/proj-helix.jpg";


export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Codrithm" },
      { name: "description", content: "Selected projects across AI, ML and full-stack." },
      { property: "og:title", content: "Codrithm Portfolio" },
      { property: "og:description", content: "Work we're proud of." },
    ],
  }),
  component: Portfolio,
});

type P = { id: string; name: string; tag: string; desc: string; stack: string[]; metrics: { k: string; v: string }[]; img: string };
const PROJECTS: P[] = [
  { id: "neura", name: "Neura Vision", tag: "Computer Vision", desc: "Realtime industrial defect detection running on the edge with sub-30ms latency.", stack: ["PyTorch", "ONNX", "Rust", "K8s"], metrics: [{ k: "Accuracy", v: "99.4%" }, { k: "Latency", v: "27ms" }, { k: "Devices", v: "8,200" }], img: projNeura },
  { id: "loom", name: "Loom AI Studio", tag: "LLM Platform", desc: "Multi-tenant RAG + agents platform serving 10M+ tokens per day.", stack: ["Next.js", "LangChain", "Postgres", "Redis"], metrics: [{ k: "Tokens/day", v: "10M+" }, { k: "P95", v: "820ms" }, { k: "Tenants", v: "140" }], img: projLoom },
  { id: "orbit", name: "Orbit Cloud", tag: "DevOps", desc: "Zero-downtime deploy platform for regulated industries.", stack: ["Go", "Terraform", "Argo", "AWS"], metrics: [{ k: "Uptime", v: "99.99%" }, { k: "Deploys/wk", v: "1,240" }, { k: "MTTR", v: "4m" }], img: projOrbit },
  { id: "pulse", name: "PulseChat", tag: "AI Assistant", desc: "Consumer AI companion with memory, voice and multi-modal input.", stack: ["React Native", "Swift", "OpenAI", "Supabase"], metrics: [{ k: "Users", v: "250k" }, { k: "Retention D30", v: "42%" }, { k: "Stars", v: "4.8" }], img: projPulse },
  { id: "atlas", name: "Atlas Analytics", tag: "Data Platform", desc: "Unified analytics for product teams — semantic layer + LLM queries.", stack: ["DuckDB", "TypeScript", "GCP"], metrics: [{ k: "Queries/day", v: "8.4M" }, { k: "TCO", v: "-38%" }, { k: "Sources", v: "62" }], img: projAtlas },
  { id: "helix", name: "Helix Health", tag: "Healthcare AI", desc: "HIPAA-compliant clinical assistant that summarizes patient histories.", stack: ["Python", "FHIR", "Anthropic"], metrics: [{ k: "Hours saved/wk", v: "1,800" }, { k: "Sites", v: "24" }, { k: "Compliance", v: "SOC2" }], img: projHelix },
];

function Portfolio() {
  const [open, setOpen] = useState<P | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Work that <span className="text-gradient">moves the needle</span>.</>}
        subtitle="A selection of recent projects — each shipped, measured, and iterated in the wild."
      />


      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <motion.button
                whileHover={{ y: -8, rotateX: -3, rotateY: 3 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                onClick={() => setOpen(p)}
                className="glass rounded-3xl p-6 text-left w-full h-full block"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="aspect-square rounded-2xl relative overflow-hidden bg-[color:var(--card)]">
                  <img src={p.img} alt={p.name} loading="lazy" width={1280} height={1280} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 grid-lines opacity-25" />
                  <div className="absolute top-3 left-3 glass rounded-full px-2.5 py-1 text-[10px] font-mono tracking-widest">{p.tag}</div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="font-display text-lg font-semibold">{p.name}</div>
                  <span className="text-xs text-[color:var(--neon-green)]">Open →</span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] p-4 sm:p-8 flex items-center justify-center"
            style={{ backdropFilter: "blur(20px)", background: "rgba(6,10,20,0.8)" }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              layoutId={`card-${open.id}`}
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-auto"
            >
              <div className="aspect-[16/8] rounded-t-3xl relative overflow-hidden bg-[color:var(--card)]">
                <img src={open.img} alt={open.name} width={1280} height={640} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-lines opacity-25" />
                <button onClick={() => setOpen(null)} className="absolute top-4 right-4 glass rounded-full w-9 h-9 flex items-center justify-center">✕</button>
                <div className="absolute bottom-4 left-6 glass rounded-full px-3 py-1 text-[10px] font-mono tracking-widest">{open.tag}</div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-4xl font-bold">{open.name}</h2>
                <p className="mt-3 text-muted-foreground">{open.desc}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {open.metrics.map((m) => (
                    <div key={m.k} className="glass rounded-2xl p-4 text-center">
                      <div className="text-2xl font-display font-bold text-gradient">{m.v}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{m.k}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Stack</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {open.stack.map((s) => <span key={s} className="glass rounded-full px-3 py-1 text-xs">{s}</span>)}
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <a href="/contact" className="btn-neon btn-neon-hover">Start similar</a>
                  <button onClick={() => setOpen(null)} className="btn-ghost-neon">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
