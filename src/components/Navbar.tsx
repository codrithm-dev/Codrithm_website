import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#community", label: "Community" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

function scrollTo(href: string, e?: React.MouseEvent) {
  e?.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.href.replace("#", ""))).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <nav className={`glass-strong flex items-center justify-between rounded-full pl-3 pr-2 ${scrolled ? "py-1.5" : "py-2"} transition-all`}>
          <a href="#home" onClick={(e) => scrollTo("#home", e)} className="flex items-center gap-2 group">
            <img src="/codrithm-logo.png" alt="Codrithm" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display font-bold tracking-tight text-lg">
              Cod<span className="text-gradient">rithm</span>
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={(e) => scrollTo(n.href, e)}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {n.label}
                  {active === n.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: "linear-gradient(120deg, color-mix(in oklab, #87FFBC 25%, transparent), color-mix(in oklab, #0066FF 25%, transparent))",
                        boxShadow: "0 0 20px color-mix(in oklab, #87FFBC 40%, transparent)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" onClick={(e) => scrollTo("#contact", e)} className="btn-neon btn-neon-hover hidden sm:inline-flex">Work with us</a>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden btn-ghost-neon !px-3 !py-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </nav>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-3xl p-3 flex flex-col"
          >
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={(e) => { scrollTo(n.href, e); setOpen(false); }}
                  className="block px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-medium"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.header>
  );
}
