import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookingCta, FaqList, VisitSection } from "@/components/Sections";
import { getService, services, site } from "@/lib/site";

const ServicePage = ({ slug }: { slug: string }) => {
  const service = getService(slug);
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="grain relative flex min-h-[78svh] items-end overflow-hidden bg-espresso">
        <img
          src={service.image}
          alt={service.imageAlt}
          {...{ fetchpriority: "high" }}
          decoding="async"
          className="img-lux absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

        <div className="container relative pb-14 pt-36 md:pb-20">
          <nav aria-label="Breadcrumb" className="animate-fade-up text-[0.66rem] uppercase tracking-label text-cream/60">
            <Link to="/" className="hover:text-champagne">
              Home
            </Link>
            <span className="mx-3 text-champagne">/</span>
            <span className="text-cream">{service.label}</span>
          </nav>
          <p className="eyebrow mt-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
            {service.eyebrow}
          </p>
          <h1
            className="display mt-5 max-w-4xl animate-fade-up text-[2.6rem] text-cream sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "160ms" }}
          >
            {service.h1}
          </h1>
          <div className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
            <a href={site.phoneHref} className="btn-gold">
              <Phone className="h-4 w-4" aria-hidden />
              Book {service.label} · {site.phone}
            </a>
            <a href="#menu" className="btn-ghost">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-20 text-ink md:py-28">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {service.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-2xl font-light leading-snug tracking-tight text-ink md:text-[2rem] md:leading-[1.3]"
                    : "mt-7 max-w-2xl text-lg leading-relaxed text-ink/65"
                }
              >
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-champagne-dark">The Niche Standard</p>
            <ul className="mt-6 space-y-4 border-t border-ink/15 pt-6">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-center gap-4 text-ink/80">
                  <Check className="h-4 w-4 shrink-0 text-champagne-dark" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="grain relative bg-espresso py-20 md:py-28">
        <div className="container relative grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">The Menu</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-5xl">{service.menuTitle}</h2>
            {service.priceNote && <p className="mt-6 text-champagne">{service.priceNote}</p>}
            <p className="mt-6 leading-relaxed text-cream/60">
              Every service is tailored in consultation with your artist. Call for current pricing and
              availability.
            </p>
            <a href={site.phoneHref} className="btn-gold mt-9">
              Call to Book
            </a>
          </Reveal>
          <ul className="border-t border-cream/15 lg:col-span-7 lg:col-start-6">
            {service.menu.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 70} className="border-b border-cream/15 py-8">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="text-2xl font-light tracking-tight text-cream md:text-3xl">{m.name}</h3>
                  {m.note && (
                    <span className="shrink-0 text-[0.66rem] uppercase tracking-label text-champagne">{m.note}</span>
                  )}
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-cream/60">{m.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 text-ink md:py-28">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-champagne-dark">Good to Know</p>
            <h2 className="display mt-5 text-4xl text-ink md:text-5xl">
              Before you <span className="accent text-champagne-dark">book.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <FaqList faqs={service.faqs} tone="light" />
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section aria-label="More services" className="border-b border-champagne/10 bg-ink py-20 md:py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Complete the Visit</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-5xl">More at Niche.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link to={s.path} className="group relative block aspect-[4/5] overflow-hidden md:aspect-[4/3]">
                  <img
                    src={s.thumb}
                    alt={s.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="img-lux absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="text-3xl font-light tracking-tight text-cream">{s.label}</h3>
                    <p className="mt-2 text-sm text-cream/65">{s.summary}</p>
                    <span className="link-arrow mt-5 group-hover:text-champagne">
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VisitSection />
      <BookingCta />
    </>
  );
};

export default ServicePage;
