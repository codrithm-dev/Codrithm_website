import { type ReactNode, useEffect, useState } from "react";

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
      className={`relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:py-20 ${className}`}
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

export function Stat({
  value,
  label,
  countUp = false,
}: {
  value: string;
  label: string;
  countUp?: boolean;
}) {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [displayValue, setDisplayValue] = useState(countUp ? 0 : target);

  useEffect(() => {
    if (!countUp || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(target);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [countUp, target]);

  return (
    <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center bg-[color:var(--card)] border border-[color:var(--border)]">
      <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[color:var(--foreground)]">
        {countUp ? `${displayValue}${suffix}` : value}
      </div>
      <div className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
