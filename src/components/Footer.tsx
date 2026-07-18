import { Link, useRouter } from "@tanstack/react-router";
import { ContactCard } from "./ContactCard";
import { PortfolioSocialCard } from "./PortfolioSocialCard";

export function Footer() {
  const router = useRouter();
  const isPortfolio = router.state.location.pathname === "/portfolio";
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-5 items-center">
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
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/community" className="hover:text-foreground">Community</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground">Twitter</a></li>
            <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
          </ul>
        </div>
        <div className="flex justify-end">
          {isPortfolio ? <PortfolioSocialCard /> : <ContactCard />}
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
