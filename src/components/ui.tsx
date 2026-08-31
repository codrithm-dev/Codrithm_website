import { type ReactNode } from "react";

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
      className={`content-auto-section relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-semibold tracking-[0.12em] uppercase text-[color:var(--neon-green)]">
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  role,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  role?: string;
}) {
  return (
    <div className={className} role={role}>
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center bg-[color:var(--card)] border border-[color:var(--border)]">
      <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[color:var(--foreground)]">
        {value}
      </div>
      <div className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
