import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--neon-green)]/8 border border-[color:var(--neon-green)]/15 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-[color:var(--neon-green)]">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--neon-green)] shadow-[0_0_6px_var(--neon-green)]" />
      {children}
    </div>
  );
}

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={`group/card relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 will-change-transform overflow-hidden
        bg-[color:var(--card)] border border-[color:var(--border)]
        shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)]
        transition-all duration-500
        hover:border-[color:var(--neon-green)]/20
        hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,102,255,0.12),0_0_0_1px_rgba(135,255,188,0.06)]
        ${className}`}
    >
      {/* Subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-green)]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  role,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  role?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      role={role}
    >
      {children}
    </motion.div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--neon-green)]/5 via-transparent to-[color:var(--neon-blue)]/5" />
      <div className="relative text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient">{value}</div>
      <div className="relative mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
