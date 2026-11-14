import { Link } from "react-router-dom";
import { ArrowRight, CalendarHeart, Gem, Leaf, Phone, UserRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookingCta, FaqList, VisitSection } from "@/components/Sections";
import { homeFaqs, services, site } from "@/lib/site";

const pillars = [
  { icon: Leaf, label: "Premium Products" },
  { icon: UserRound, label: "Expert Artists" },
  { icon: Gem, label: "Luxury Experience" },
  { icon: CalendarHeart, label: "Personalized Care" },
];

const gallery = [
  { src: "/images/skincare-studio.webp", alt: "Skin care studio with professional products at Niche Beauty Lounge", w: 1800, h: 1200, span: "col-span-2" },
  { src: "/images/salon-floor.webp", alt: "Hair salon floor at Niche Beauty Lounge in Bakersfield", w: 1280, h: 1920, span: "md:row-span-2" },
  { src: "/images/salon-chair.webp", alt: "Styling chairs at Niche Beauty Lounge hair salon", w: 900, h: 1520, span: "md:row-span-2" },
  { src: "/images/pedicure-suite.webp", alt: "Private pedicure suite at Niche Beauty Lounge", w: 1800, h: 1200, span: "" },
  { src: "/images/treatment-room.webp", alt: "Esthetician treatment room for facials", w: 1800, h: 1200, span: "" },
];

const Index = () => {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-espresso lg:items-center">
        <div className="absolute inset-0 lg:left-[30%]">
          <img
            src="/images/storefront-night.webp"
            alt="Niche Beauty Lounge illuminated sign at dusk on Truxtun Ave, Bakersfield"
            width={1216}
            height={1824}
            {...{ fetchpriority: "high" }}
            decoding="async"
            className="h-full w-full animate-slow-zoom object-cover object-[center_14%]"
          />
        </div>
        {/* Blend the photograph into the dark canvas */}
        <div className="hero-fade absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink via-ink/80 to-transparent" />

        <div className="container relative pb-14 pt-32 lg:pb-24 lg:pt-36">
          <div className="max-w-2xl">
            <h1>
              <span className="eyebrow block animate-fade-up">
                Bakersfield&rsquo;s luxury hair salon, nail &amp; skin care studio
              </span>
              <span
                className="display mt-6 block animate-fade-up text-[4.25rem] text-cream sm:text-8xl lg:text-[7.5rem]"
                style={{ animationDelay: "120ms" }}
              >
                Beauty,
                <br />
                <span className="text-champagne">Refined.</span>
              </span>
            </h1>
            <p
              className="mt-8 max-w-md animate-fade-up text-lg leading-relaxed text-cream/80"
              style={{ animationDelay: "260ms" }}
            >
              A luxury studio for hair, skin and nails. Elevated care. Exceptional you.
            </p>
            <div
              className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "380ms" }}
            >
              <a href={site.phoneHref} className="btn-gold">
                Book Appointment
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
              <a href="#services" className="btn-ghost">
                Explore Services
              </a>
            </div>

            <dl
              className="mt-14 hidden max-w-lg animate-fade-up grid-cols-3 sm:grid gap-6 border-t border-cream/15 pt-7"
              style={{ animationDelay: "500ms" }}
            >
              <div>
                <dt className="text-[0.62rem] uppercase tracking-label text-taupe">Location</dt>
                <dd className="mt-2 text-sm text-cream/90">Truxtun Ave, Bakersfield</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-label text-taupe">Reservations</dt>
                <dd className="mt-2 text-sm text-cream/90">
                  <a href={site.phoneHref} className="hover:text-champagne">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-label text-taupe">Services</dt>
                <dd className="mt-2 text-sm text-cream/90">Hair · Nails · Skin</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ───────────── Services strip ───────────── */}
      <section id="services" aria-label="Services" className="border-y border-champagne/10 bg-ink">
        <div className="container grid md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 90}
              className="border-b border-cream/10 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
            >
              <Link to={s.path} className="group flex items-center gap-5 py-8 md:px-6 md:py-11 xl:gap-7 xl:px-9">
                <span className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-full ring-1 ring-champagne/30 xl:h-28 xl:w-28">
                  <img
                    src={s.thumb}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="img-lux h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-label text-cream">{s.label}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-cream/60">{s.summary}</span>
                  <span className="link-arrow mt-3 text-[0.62rem] group-hover:text-champagne">
                    Learn More
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── The Niche experience ───────────── */}
      <section id="experience" className="grid bg-cream text-ink lg:grid-cols-2">
        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[40rem]">
          <img
            src="/images/salon-floor.webp"
            alt="Inside Niche Beauty Lounge, a hair and beauty salon in Bakersfield"
            width={1280}
            height={1920}
            loading="lazy"
            decoding="async"
            className="img-lux absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/50 to-transparent" />
        </div>
        <div className="flex items-center px-5 py-16 md:px-14 md:py-24 xl:px-24">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-champagne-dark">The Niche Experience</p>
            <h2 className="display mt-5 text-4xl text-ink md:text-[3.4rem]">
              Where artistry
              <br />
              meets <span className="accent text-champagne-dark">expertise.</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink/70">
              Every detail is designed around you. From the moment you walk in to the moment you leave,
              you&rsquo;ll feel the difference.
            </p>
            <p className="mt-4 leading-relaxed text-ink/60">
              Niche Beauty Lounge brings Bakersfield&rsquo;s most complete beauty experience under one roof:
              a hair salon, nail studio and private skin care rooms, each led by specialists in their craft.
            </p>
            <ul className="mt-12 grid grid-cols-2 gap-y-9 sm:grid-cols-4 sm:divide-x sm:divide-ink/10">
              {pillars.map(({ icon: Icon, label }) => (
                <li key={label} className="sm:px-4 sm:first:pl-0">
                  <Icon className="h-8 w-8 text-champagne-dark" strokeWidth={1} aria-hidden />
                  <p className="mt-4 text-[0.66rem] font-medium uppercase leading-relaxed tracking-label text-ink">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────── For the occasion ───────────── */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">For the Occasion</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-6xl">
              Arrive like the evening was <span className="accent">planned around you.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl leading-relaxed text-cream/65">
              The gala. The wedding. The dinner you&rsquo;ve waited months for. Tell us the occasion and
              we&rsquo;ll compose the visit: hair, nails and skin, timed so you leave ready for the big night.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-3 md:auto-rows-[15rem] md:grid-cols-4 md:gap-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 80} className={`group relative overflow-hidden ${g.span}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  decoding="async"
                  className="img-lux aspect-square h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 md:absolute md:inset-0 md:aspect-auto"
                />
                <div className="absolute inset-0 bg-ink/15 ring-1 ring-inset ring-champagne/10" />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <a href={site.phoneHref} className="btn-gold">
              <Phone className="h-4 w-4" aria-hidden />
              Plan Your Visit
            </a>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Service menu ───────────── */}
      <section className="bg-cream py-20 text-ink md:py-28">
        <div className="container">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-champagne-dark">Beauty Services in Bakersfield</p>
              <h2 className="display mt-5 text-4xl text-ink md:text-6xl">
                One address. <span className="accent text-champagne-dark">Every ritual.</span>
              </h2>
            </div>
            <p className="max-w-sm text-ink/60">
              Three specialties, one standard of care. Choose a service to see what&rsquo;s included.
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-ink/15">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60} className="border-b border-ink/15">
                <Link
                  to={s.path}
                  className="group grid items-center gap-x-8 gap-y-2 py-8 transition-colors duration-300 hover:bg-cream-dark/60 md:grid-cols-12 md:px-4 md:py-10"
                >
                  <span className="font-serif text-xl italic text-champagne-dark md:col-span-1">0{i + 1}</span>
                  <span className="display text-4xl text-ink md:col-span-4 md:text-5xl">{s.label}</span>
                  <span className="text-ink/60 md:col-span-5">{s.menu.map((m) => m.name).join(" · ")}</span>
                  <span className="hidden justify-self-end md:col-span-2 md:block">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <VisitSection />

      {/* ───────────── FAQ ───────────── */}
      <section className="border-t border-champagne/10 bg-ink py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Good to Know</p>
            <h2 className="display mt-5 text-4xl text-cream md:text-5xl">
              Questions, <span className="accent">answered.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <FaqList faqs={homeFaqs} />
          </Reveal>
        </div>
      </section>

      <BookingCta />
    </>
  );
};

export default Index;
