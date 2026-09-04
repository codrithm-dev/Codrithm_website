import { ContactCard } from "./ContactCard";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 sm:mt-12 lg:mt-16">
      <div className="mx-auto hidden max-w-7xl justify-end px-4 py-8 sm:flex sm:px-6 sm:py-10 lg:py-12">
        <div>
          <ContactCard />
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 sm:py-6">
          <p>© {new Date().getFullYear()} Codrithm Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
