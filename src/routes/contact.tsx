import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Eyebrow, Reveal, TiltCard } from "../components/ui";
import { PageHero } from "../components/PageHero";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codrithm" },
      { name: "description", content: "Start a project or say hello. We reply within one business day." },
      { property: "og:title", content: "Contact Codrithm" },
      { property: "og:description", content: "Let's build something unforgettable." },
    ],
  }),
  component: Contact,
});

const PINS = [
  { name: "Lisbon", x: 47, y: 40 },
  { name: "London", x: 48, y: 32 },
  { name: "Bengaluru", x: 68, y: 55 },
  { name: "New York", x: 27, y: 42 },
  { name: "Tokyo", x: 82, y: 44 },
  { name: "São Paulo", x: 33, y: 68 },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient">unforgettable</span>.</>}
        subtitle="Tell us about your project. We'll reply within one business day."
      />


      <Section>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
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
              <button className="btn-neon btn-neon-hover w-full justify-center">{sent ? "✓ Message received — we'll be in touch" : "Send message"}</button>
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
              <TiltCard>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Careers</div>
                <div className="mt-2 font-display text-lg">jobs@codrithm.com</div>
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

      <style>{`
        .input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 12px 14px; font-size: 14px; outline: none; transition: all .2s; color: inherit; }
        .input:focus { border-color: #87FFBC; box-shadow: 0 0 0 3px rgba(135,255,188,0.15); }
        .input::placeholder { color: rgb(255 255 255 / 40%); }
      `}</style>
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
