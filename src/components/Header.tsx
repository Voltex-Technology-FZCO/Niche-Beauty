import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { services, site } from "@/lib/site";

const links = [
  ...services.map((s) => ({ to: s.path, label: s.label })),
  { to: "/#experience", label: "Experience" },
  { to: "/#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-champagne/15 bg-ink/90 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
        }`}
      >
        <div className="container flex h-[4.5rem] items-center justify-between md:h-20">
          <Link
            to="/"
            aria-label="Niche Beauty Lounge home"
            className="text-cream transition-colors hover:text-champagne"
          >
            <Logo className="h-9 w-auto md:h-10" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 lg:flex"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[0.7rem] font-medium uppercase tracking-label transition-colors duration-300 hover:text-champagne ${
                  pathname === l.to ? "text-champagne" : "text-cream/85"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden h-11 items-center gap-3 rounded-full border border-cream/40 px-6 text-[0.7rem] font-medium uppercase tracking-label text-cream transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-ink sm:inline-flex"
            >
              Book Appointment
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center text-cream lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-50 animate-fade-in overflow-y-auto bg-ink md:top-20 lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="container flex min-h-full flex-col py-8"
          >
            <p className="eyebrow mb-4">Menu</p>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center justify-between border-b border-cream/10 py-5 text-3xl font-light tracking-tight text-cream"
              >
                {l.label}
                <ArrowRight className="h-5 w-5 text-champagne" aria-hidden />
              </Link>
            ))}
            <div className="mt-auto pt-10">
              <a href={site.phoneHref} className="btn-gold w-full">
                <Phone className="h-4 w-4" aria-hidden />
                Call {site.phone}
              </a>
              <p className="mt-5 text-center text-sm text-taupe">
                {site.address.street}, {site.address.city}
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
