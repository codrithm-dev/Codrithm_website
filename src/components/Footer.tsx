import { ContactCard } from "./ContactCard";

function scrollTo(href: string, e?: React.MouseEvent) {
  e?.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-24 lg:mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 lg:py-16 grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">
            Cod<span className="text-gradient">rithm</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A values-driven community rooted in Islamic principles — empowering junior developers to
            learn, build, and lead.
          </p>
          <form className="mt-6 glass rounded-full p-1.5 flex items-center gap-2 max-w-md">
            <input
              placeholder="you@company.com"
              className="flex-1 min-w-0 bg-transparent px-3 sm:px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="button" className="btn-neon btn-neon-hover !py-2 !px-3 sm:!px-4 text-sm flex-shrink-0">
              Subscribe
            </button>
          </form>
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
          <div className="text-sm font-semibold mb-4">Connect</div>
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
            <li>
              <a
                href="https://linkedin.com/company/codrithmdev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@codrithm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/codrithm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61588306509274"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/DiJkqIDK0yi7eQRuaHZ22g"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
                aria-label="WhatsApp"
              >
                WhatsApp
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
