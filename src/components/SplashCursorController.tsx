import { useEffect, useRef } from "react";
import SplashCursor from "./SplashCursor";

/**
 * Mounts the fluid SplashCursor globally, but fades it out whenever a section
 * marked with [data-hero-3d] (the 3D logo sections) is in view — so the fluid
 * effect never fights the WebGL logo scenes.
 */
export function SplashCursorController() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setHidden = (hidden: boolean) => {
      const el = wrapRef.current?.querySelector<HTMLElement>("[data-splash-cursor]");
      if (!el) return;
      el.style.opacity = hidden ? "0" : "1";
    };

    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Only count the hero as "covering" when a meaningful chunk is on screen,
          // so the fluid cursor returns as soon as you scroll past it.
          if (e.isIntersecting && e.intersectionRatio >= 0.5) visible.add(e.target);
          else visible.delete(e.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const attach = () => {
      document.querySelectorAll("[data-hero-3d]").forEach((n) => io.observe(n));
    };
    attach();

    // Re-attach on route changes (new hero nodes mount)
    const mo = new MutationObserver(() => {
      io.disconnect();
      attach();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <SplashCursor />
    </div>
  );
}
