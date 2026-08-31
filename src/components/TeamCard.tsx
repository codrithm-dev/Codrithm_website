import { memo } from "react";

import imgUmais from "../assets/Umais.webp";
import imgAtiq from "../assets/Atiq-studio.webp";
import imgIqra from "../assets/Iqra-studio.webp";
import imgRabia from "../assets/Rabia-studio.webp";
import imgAliza from "../assets/Aliza-studio.webp";
import imgZimran from "../assets/Zimran-studio.webp";
import imgWajeeha from "../assets/Wajeeha-studio-v2.webp";

/* ── Types ─────────────────────────────────────────────────────────── */

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  imagePosition?: string;
  imageScale?: number;
  skills: string[];
  social: { type: string; url: string }[];
};

/* ── Data ──────────────────────────────────────────────────────────── */

export const TEAM: TeamMember[] = [
  {
    name: "Muhammad Umais Adeel",
    role: "Founder",
    img: imgUmais,
    skills: ["Leadership", "Strategy", "Community", "Tech"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/muhammad-umais-adeel/" },
      { type: "gh", url: "https://github.com/umaisadeel" },
    ],
  },
  {
    name: "Atiq Umer",
    role: "Co-Founder",
    img: imgAtiq,
    skills: ["Leadership", "Strategy", "Community", "Tech"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/atiq-umer/" },
      { type: "gh", url: "https://github.com/Atiqumer" },
    ],
  },
  {
    name: "Iqra Asghar",
    role: "Growth Lead",
    img: imgIqra,
    skills: ["Growth", "Marketing", "Community", "Outreach"],
    social: [{ type: "li", url: "https://www.linkedin.com/in/iqra-asghar/" }],
  },
  {
    name: "Wajeeha Azeem",
    role: "Operation Lead",
    img: imgWajeeha,
    skills: ["Operations", "Management", "Planning", "Community"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/wajeehaazeem/" },
      { type: "gh", url: "https://github.com/wajihaazeem" },
    ],
  },
  {
    name: "Zimran Sohail",
    role: "Technical Associate",
    img: imgZimran,
    skills: ["Web Development", "LLM Engineering", "Machine Learning"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/zimransohail/" },
      { type: "gh", url: "https://github.com/ZimranSohail" },
    ],
  },
  {
    name: "Aliza Afzal",
    role: "Research Lead",
    img: imgAliza,
    skills: ["Machine Learning", "Computer Vision", "NLP", "PyTorch"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/alizaafzal/" },
      { type: "gh", url: "https://github.com/alizaafzal582004" },
    ],
  },
  {
    name: "Rabia Ramzan",
    role: "Graphics Lead",
    img: imgRabia,
    skills: ["Development", "Community", "Collaboration"],
    social: [{ type: "li", url: "https://www.linkedin.com/in/rabia-ramzan1/" }],
  },
];

/* ── Social icon helper ────────────────────────────────────────────── */

function socialIcon(type: string) {
  switch (type) {
    case "li":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "gh":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "web":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── TeamCard ──────────────────────────────────────────────────────── */

export const TeamCard = memo(function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--neon-green)]/40 hover:shadow-[0_12px_32px_rgba(0,102,255,0.12)]">
      <div className="relative h-[260px] overflow-hidden bg-[color:var(--muted)] sm:h-[300px]">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          width={512}
          height={680}
          style={{
            objectPosition: member.imagePosition ?? "50% 0%",
            transform: `scale(${member.imageScale ?? 1})`,
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-[color:var(--neon-blue)]">{member.role}</p>
          </div>
          <div className="flex gap-2">
            {member.social.map((s) => (
              <a
                key={s.type}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${s.type === "li" ? "LinkedIn" : "GitHub"}`}
                className="flex size-11 items-center justify-center rounded-full border border-[color:var(--border)] text-muted-foreground transition-colors hover:border-[color:var(--neon-green)] hover:text-[color:var(--foreground)]"
              >
                {socialIcon(s.type)}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--muted-foreground)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
});
