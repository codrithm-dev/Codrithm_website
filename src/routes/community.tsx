import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Eyebrow, Reveal, TiltCard, Stat } from "../components/ui";
import { PageHero } from "../components/PageHero";
import blogMemory from "../assets/blog-memory.jpg";
import blogMonorepo from "../assets/blog-monorepo.jpg";
import blogSmallmodels from "../assets/blog-smallmodels.jpg";
import blogInterface from "../assets/blog-interface.jpg";
import blogHiring from "../assets/blog-hiring.jpg";
import blogEvals from "../assets/blog-evals.jpg";


export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Blog — Codrithm" },
      { name: "description", content: "Learn, share, and build with 12k+ engineers." },
      { property: "og:title", content: "Codrithm Community" },
      { property: "og:description", content: "The knowledge hub for intelligent builders." },
    ],
  }),
  component: Community,
});

const CATEGORIES = ["All", "AI", "Engineering", "Design", "Research", "Careers"];
const POSTS = [
  { c: "AI", t: "Designing agent memory that doesn't forget you", d: "5 patterns for durable, personal agents.", a: "Ana R.", r: "6 min", img: blogMemory },
  { c: "Engineering", t: "The end of the monorepo debate", d: "How we ship 1,240 deploys per week.", a: "Devon K.", r: "8 min", img: blogMonorepo },
  { c: "Research", t: "Small models, big context", d: "Notes from a year of fine-tuning open-weight LLMs.", a: "Yuki N.", r: "12 min", img: blogSmallmodels },
  { c: "Design", t: "Interface as material", d: "Why glassmorphism deserves a second look.", a: "Maya J.", r: "4 min", img: blogInterface },
  { c: "Careers", t: "How we hire staff engineers", d: "Signal over noise, transparently.", a: "Idris O.", r: "7 min", img: blogHiring },
  { c: "AI", t: "Evaluations you can actually trust", d: "A pragmatic guide to LLM evals.", a: "Priya S.", r: "10 min", img: blogEvals },
];

const EVENTS = [
  { d: "Apr 22", t: "AI Studio Live — Agentic UX", where: "Virtual" },
  { d: "May 09", t: "Codrithm Summit '26", where: "Lisbon" },
  { d: "Jun 03", t: "Open Source Day", where: "Bengaluru" },
];

function Community() {
  const [cat, setCat] = useState("All");
  const filtered = POSTS.filter(p => cat === "All" || p.c === cat);

  return (
    <>
      <PageHero
        eyebrow="Community & Blog"
        title={<>The knowledge hub for <span className="text-gradient">intelligent builders</span>.</>}
        subtitle="Articles, events and open-source tools from our team and 12,000+ community members."
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <Stat value="12K+" label="Members" /><Stat value="320" label="Events" /><Stat value="8.4M" label="Downloads" /><Stat value="480" label="Articles" />
        </div>
      </Section>


      <Section>
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)} className={cat === c ? "btn-neon btn-neon-hover !py-2 !px-4 text-sm" : "btn-ghost-neon !py-2 !px-4 text-sm"}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.05}>
              <TiltCard className="h-full">
                <div className="aspect-[16/9] rounded-2xl relative overflow-hidden bg-[color:var(--card)]">
                  <img src={p.img} alt={p.t} loading="lazy" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 grid-lines opacity-25" />
                  <div className="absolute top-3 left-3 glass rounded-full px-2.5 py-1 text-[10px] font-mono tracking-widest">{p.c}</div>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.a}</span><span>{p.r} read</span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
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
          <div>
            <Eyebrow>Learning resources</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Learn out loud.</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["The AI Handbook","LLM Ops 101","Design for Agents","Rust for ML","Vector DBs deep dive","Prompt patterns"].map((t, i) => (
                <TiltCard key={t}>
                  <div className="text-3xl">{["📘","🧪","🎨","⚙️","🧭","✨"][i]}</div>
                  <div className="mt-3 font-semibold text-sm">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">Free · Self-paced</div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
