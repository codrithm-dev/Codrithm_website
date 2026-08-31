import { ContactCard } from "./ContactCard";

function scrollTo(href: string, e?: React.MouseEvent) {
  e?.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 sm:mt-12 lg:mt-16">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-8 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-10 md:grid-cols-3 lg:grid-cols-[minmax(0,2fr)_1fr_1fr_auto] lg:py-16">
        <div>
          <div className="font-display text-2xl font-bold">
            Cod<span className="text-gradient">rithm</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A technology company and developer community. We build software, run practical sessions,
            and help aspiring developers gain experience.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollTo("#about", e)}
                className="hover:text-foreground"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => scrollTo("#services", e)}
                className="hover:text-foreground"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => scrollTo("#projects", e)}
                className="hover:text-foreground"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="#community"
                onClick={(e) => scrollTo("#community", e)}
                className="hover:text-foreground"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollTo("#contact", e)}
                className="hover:text-foreground"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center sm:justify-end">
          <ContactCard />
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Codrithm Labs. All rights reserved.</p>
          <p>Engineered with intention · Made for humans and machines</p>
        </div>
      </div>
    </footer>
  );
}
