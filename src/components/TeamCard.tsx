import { memo, useRef, useState, useCallback } from "react";

import imgUmais from "../assets/Umais.jpeg";
import imgAtiq from "../assets/Atiq.jpg";
import imgFarah from "../assets/farah.jpg";
import imgIqra from "../assets/iqra.jpg";
import imgRabia from "../assets/rabia.png";
import imgAliza from "../assets/aliza.jpg";
import imgArshad from "../assets/Arshad.jpg";
import imgEbaad from "../assets/Ebaad.jpg";
import imgZimran from "../assets/Zimran.jpeg";
import imgWajeeha from "../assets/Wajeeha.jpeg";

/* ── Types ─────────────────────────────────────────────────────────── */

export type TeamMember = {
  name: string;
  role: string;
  img: string;
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
      { type: "li", url: "https://linkedin.com/in/umais" },
      { type: "gh", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
  {
    name: "Atiq Umer",
    role: "Co-Founder",
    img: imgAtiq,
    skills: ["Leadership", "Strategy", "Community", "Tech"],
    social: [
      { type: "li", url: "https://linkedin.com/in/atiqumer" },
      { type: "gh", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
  {
    name: "Iqra Asghar",
    role: "Growth Lead",
    img: imgIqra,
    skills: ["Growth", "Marketing", "Community", "Outreach"],
    social: [
      { type: "li", url: "https://linkedin.com/in/iqraasghar" },
      { type: "gh", url: "#" },
    ],
  },
  {
    name: "Wajeeha Azeem",
    role: "Operation Lead",
    img: imgWajeeha,
    skills: ["Operations", "Management", "Planning", "Community"],
    social: [
      { type: "li", url: "https://linkedin.com/in/wajeehaazeem" },
      { type: "gh", url: "#" },
      { type: "mail", url: "#" },
    ],
  },
  {
    name: "Rabia Ramzan",
    role: "Graphics Lead",
    img: imgRabia,
    skills: ["Development", "Community", "Collaboration"],
    social: [
      { type: "li", url: "https://linkedin.com/in/rabiaramzan" },
      { type: "gh", url: "#" },
    ],
  },
  {
    name: "Muhammad Ebaad Khan",
    role: "Content Lead",
    img: imgEbaad,
    skills: ["Content", "Storytelling", "Marketing", "Community"],
    social: [
      { type: "li", url: "https://linkedin.com/in/ebaadkhan" },
      { type: "gh", url: "#" },
    ],
  },
  {
    name: "Arshad Ali",
    role: "Marketing Manager",
    img: imgArshad,
    skills: ["Development", "Tech", "Community"],
    social: [
      { type: "li", url: "https://linkedin.com/in/arshadali" },
      { type: "gh", url: "#" },
    ],
  },
  {
    name: "Farah Ejaz",
    role: "Technical Lead",
    img: imgFarah,
    skills: ["Cloud Computing", "AWS", "DevOps", "Linux"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/farah-ejaz/" },
      { type: "gh", url: "#" },
    ],
  },
  {
    name: "Aliza Afzal",
    role: "Research Lead",
    img: imgAliza,
    skills: ["Machine Learning", "Computer Vision", "NLP", "PyTorch"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/alizaafzal/" },
      { type: "gh", url: "#" },
    ],
  },
  {
    name: "Zimran Sohail",
    role: "Technical Associate",
    img: imgZimran,
    skills: ["Web Development", "LLM Engineering", "Machine Learning"],
    social: [
      { type: "li", url: "https://www.linkedin.com/in/zimransohail/" },
      { type: "gh", url: "#" },
    ],
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
        className="absolute -inset-[1px] rounded-[28px] opacity-0 max-sm:opacity-40 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background:
            "linear-gradient(135deg, var(--neon-green), var(--neon-blue), var(--neon-green))",
          backgroundSize: "200% 200%",
          animation: "shimmer 3s linear infinite",
        }}
      />

      {/* Card inner */}
      <div className="relative bg-[color:var(--card)] rounded-[28px] border border-[color:var(--border)] overflow-hidden transition-all duration-500 max-sm:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)] max-sm:translate-y-[-2px] group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_40px_rgba(0,102,255,0.12)] group-hover:translate-y-[-6px]">
        {/* Portrait area */}
        <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            loading="lazy"
            width={512}
            height={680}
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-all duration-500 max-sm:brightness-105 group-hover:scale-[1.03] group-hover:brightness-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-[color:var(--card)]/10 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--neon-blue)]/8 via-transparent to-[color:var(--neon-green)]/8" />

          {/* Decorative particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-[color:var(--neon-green)]/40 animate-pulse" />
            <div
              className="absolute top-[40%] right-[20%] w-1.5 h-1.5 rounded-full bg-[color:var(--neon-blue)]/30 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-[color:var(--neon-green)]/25 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-[60%] right-[15%] w-0.5 h-0.5 rounded-full bg-white/20 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
            {/* Abstract node lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
              <line
                x1="45"
                y1="80"
                x2="120"
                y2="160"
                stroke="url(#glow-line)"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="240"
                y1="120"
                x2="180"
                y2="200"
                stroke="url(#glow-line)"
                strokeWidth="0.5"
                opacity="0.25"
              />
              <line
                x1="70"
                y1="280"
                x2="150"
                y2="320"
                stroke="url(#glow-line)"
                strokeWidth="0.5"
                opacity="0.2"
              />
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
                className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 hover:bg-[color:var(--neon-green)] hover:text-black max-sm:opacity-100 max-sm:translate-y-0"
                style={{ transitionDelay: isHovered ? `${idx * 60}ms` : "0ms" }}
              >
                {socialIcon(s.type)}
              </a>
            ))}
          </div>
        </div>

        {/* Info area */}
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
