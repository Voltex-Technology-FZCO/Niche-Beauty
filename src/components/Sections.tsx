import { ArrowRight, MapPin, Phone, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { Faq, directionsUrl, fullAddress, mapsEmbedUrl, site } from "@/lib/site";

export function FaqList({ faqs, tone = "dark" }: { faqs: Faq[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <div className={`border-t ${light ? "border-ink/15" : "border-cream/15"}`}>
      {faqs.map((f) => (
        <details key={f.q} className={`group border-b ${light ? "border-ink/15" : "border-cream/15"}`}>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
            <h3 className={`text-lg font-normal tracking-tight md:text-xl ${light ? "text-ink" : "text-cream"}`}>
              {f.q}
            </h3>
            <Plus
              className={`h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45 ${
                light ? "text-champagne-dark" : "text-champagne"
              }`}
              aria-hidden
            />
          </summary>
          <p className={`max-w-2xl pb-7 leading-relaxed ${light ? "text-ink/70" : "text-cream/65"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function VisitSection() {
  return (
    <section id="visit" className="bg-ink py-20 md:py-28">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Our Location</p>
          <h2 className="display mt-4 max-w-2xl text-4xl text-cream md:text-6xl">
            Find us on <span className="accent">Truxtun Avenue.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12 grid overflow-hidden border border-champagne/15 lg:grid-cols-2">
          <div className="relative min-h-[34rem]">
            <img
              src="/images/storefront-night-2.webp"
              alt="Niche Beauty Lounge storefront at 5393 Truxtun Ave in Bakersfield, CA"
              width={1280}
              height={1920}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_12%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink from-25% via-ink/60 via-55% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <h3 className="text-3xl font-light tracking-tight text-cream md:text-4xl">Niche Beauty Lounge</h3>
              <address className="mt-4 space-y-2 not-italic text-cream/85">
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  {fullAddress}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <a href={site.phoneHref} className="hover:text-champagne">
                    {site.phone}
                  </a>
                </p>
              </address>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Get Directions
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a href={site.phoneHref} className="btn-gold">
                  Call to Book
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[22rem] bg-espresso">
            <iframe
              title="Map to Niche Beauty Lounge, 5393 Truxtun Ave, Bakersfield"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 opacity-90 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_sepia(0.25)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BookingCta({ heading }: { heading?: string }) {
  return (
    <section className="grain relative overflow-hidden bg-espresso py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/15 blur-[120px]"
      />
      <Reveal className="container relative text-center">
        <p className="eyebrow">Reserve Your Time</p>
        <h2 className="display mx-auto mt-5 max-w-3xl text-4xl text-cream md:text-6xl">
          {heading ?? (
            <>
              Your chair is <span className="accent">waiting.</span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-cream/65">
          Appointments are reserved by phone, so we can match you with the right artist for your service.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-gold w-full sm:w-auto">
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone}
          </a>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
            Get Directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}
