import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "./ui";

const LogoScene = lazy(() =>
  import("./LogoScene").then((m) => ({ default: m.LogoScene }))
);

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative" data-hero-3d>
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 lg:pb-24 grid lg:grid-cols-2 gap-10 items-center min-h-[60vh]">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        <div className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
          <Suspense fallback={<div className="w-full h-full rounded-3xl glass" />}>
            <LogoScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
