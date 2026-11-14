import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { directionsUrl, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-champagne/15 bg-ink pb-28 pt-16 md:pb-12 md:pt-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-12 w-auto text-cream" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              A luxury beauty lounge in Bakersfield, California for hair, nails and skin care.
              Elevated care. Exceptional you.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 text-sm text-cream/70 transition-colors hover:text-champagne"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              {site.instagramHandle}
            </a>
          </div>

          <nav aria-label="Services" className="md:col-span-3">
            <p className="eyebrow mb-5">Services</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <Link to="/hair-salon-bakersfield" className="transition-colors hover:text-champagne">
                  Hair Salon Bakersfield
                </Link>
              </li>
              <li>
                <Link to="/nail-salon-bakersfield" className="transition-colors hover:text-champagne">
                  Nail Salon Bakersfield
                </Link>
              </li>
              <li>
                <Link to="/facials-skin-care-bakersfield" className="transition-colors hover:text-champagne">
                  Facials &amp; Skin Care Bakersfield
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Visit</p>
            <address className="space-y-4 text-sm not-italic text-cream/70">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-champagne"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
              </a>
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-champagne">
                <Phone className="h-4 w-4 shrink-0 text-champagne" aria-hidden />
                {site.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            {services.map((s) => s.label).join(" · ")} · Bakersfield, CA
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Sticky call bar so booking is always one tap away on phones. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-champagne/20 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
      <a href={site.phoneHref} className="btn-gold w-full">
        <Phone className="h-4 w-4" aria-hidden />
        Call to Book · {site.phone}
      </a>
    </div>
  );
}
