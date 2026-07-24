import { ContactCard } from "./ContactCard";

function scrollTo(href: string, e?: React.MouseEvent) {
  e?.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">
            Cod<span className="text-gradient">rithm</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Building the future of intelligent software. AI, ML and full-stack engineering crafted with taste.
          </p>
          <form className="mt-6 glass rounded-full p-1.5 flex items-center max-w-md">
            <input placeholder="you@company.com" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button type="button" className="btn-neon btn-neon-hover !py-2 !px-4 text-sm">Subscribe</button>
          </form>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" onClick={(e) => scrollTo("#about", e)} className="hover:text-foreground">About</a></li>
            <li><a href="#services" onClick={(e) => scrollTo("#services", e)} className="hover:text-foreground">Services</a></li>
            <li><a href="#projects" onClick={(e) => scrollTo("#projects", e)} className="hover:text-foreground">Projects</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#community" onClick={(e) => scrollTo("#community", e)} className="hover:text-foreground">Community</a></li>
            <li><a href="#contact" onClick={(e) => scrollTo("#contact", e)} className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground" aria-label="Twitter">Twitter</a></li>
            <li><a href="#" className="hover:text-foreground" aria-label="LinkedIn">LinkedIn</a></li>
          </ul>
        </div>
        <div className="flex justify-center sm:justify-end">
          <ContactCard />
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Codrithm Labs. All rights reserved.</p>
          <p>Engineered with intention · Made for humans and machines</p>
        </div>
      </div>
    </footer>
  );
}
