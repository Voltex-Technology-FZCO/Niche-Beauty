// Single source of truth for business details, services and page copy.
// Used by the pages, the SEO tags and the build-time prerender.

export const site = {
  name: "Niche Beauty Lounge",
  legalName: "Niche Beauty Lounge",
  url: "https://mynichebeauty.com",
  tagline: "Luxury hair salon, nail studio & skin care in Bakersfield, CA",
  phone: "(661) 327-5393",
  phoneHref: "tel:+16613275393",
  phoneE164: "+16613275393",
  address: {
    street: "5393 Truxtun Ave",
    city: "Bakersfield",
    region: "CA",
    postalCode: "93309",
    country: "US",
  },
  instagram: "https://instagram.com/nichebeautylounge.n.spa",
  instagramHandle: "@nichebeautylounge.n.spa",
  ogImage: "/og-image.jpg",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export interface Faq {
  q: string;
  a: string;
}

export interface MenuItem {
  name: string;
  detail: string;
  note?: string;
}

export interface Service {
  slug: string;
  path: string;
  /** Short label used in navigation and cards */
  label: string;
  /** Keyword-led H1 */
  h1: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  intro: string[];
  image: string;
  imageAlt: string;
  thumb: string;
  menuTitle: string;
  menu: MenuItem[];
  priceNote?: string;
  highlights: string[];
  faqs: Faq[];
}

export const services: Service[] = [
  {
    slug: "hair",
    path: "/hair-salon-bakersfield",
    label: "Hair",
    eyebrow: "Hair Salon · Bakersfield, CA",
    h1: "The Bakersfield hair salon for cut, color & styling.",
    title: "Hair Salon in Bakersfield, CA | Cut, Color & Styling | Niche Beauty Lounge",
    description:
      "Luxury hair salon in Bakersfield on Truxtun Ave. Precision cuts, custom color, blowouts, treatments and hair replacement by experienced stylists. Call (661) 327-5393 to book.",
    summary: "Cut, color, treatments and styling.",
    intro: [
      "Great hair is never an accident. At Niche Beauty Lounge, every appointment begins with a real conversation about your hair, your routine and the way you want to feel when you walk out the door.",
      "From a precision cut to a full color transformation, our Bakersfield stylists work with care and intention, so the result looks effortless long after you leave the chair.",
    ],
    image: "/images/salon-chair.webp",
    imageAlt: "Styling chairs at Niche Beauty Lounge hair salon in Bakersfield",
    thumb: "/images/salon-chair.webp",
    menuTitle: "Hair services",
    menu: [
      { name: "Signature Cut & Style", detail: "A precision cut shaped to your features and finished with a polished style." },
      { name: "Custom Color", detail: "Dimensional, lived-in or full-coverage color, formulated for your tone and your lifestyle." },
      { name: "Blowout & Styling", detail: "Smooth, voluminous and camera-ready for dinner, an event or simply a better week." },
      { name: "Restorative Treatments", detail: "Deep conditioning and repair that return softness, strength and shine." },
      { name: "Hair Replacement", detail: "Discreet, natural-looking hair replacement solutions, fitted and styled in privacy." },
    ],
    highlights: ["One-on-one consultation", "Experienced stylists", "Extension-friendly care"],
    faqs: [
      {
        q: "How do I book a hair appointment in Bakersfield?",
        a: "Call Niche Beauty Lounge at (661) 327-5393. We will match you with a stylist for the service you have in mind and find a time that suits you.",
      },
      {
        q: "Do you offer hair color as well as cuts?",
        a: "Yes. Our stylists offer cuts, custom color, blowouts, styling and restorative treatments, along with hair replacement services.",
      },
      {
        q: "Can I get my hair styled for a wedding or special event?",
        a: "Absolutely. Let us know the occasion when you call and we will plan your styling appointment around your schedule.",
      },
    ],
  },
  {
    slug: "nails",
    path: "/nail-salon-bakersfield",
    label: "Nails",
    eyebrow: "Nail Salon · Bakersfield, CA",
    h1: "A Bakersfield nail salon devoted to the details.",
    title: "Nail Salon in Bakersfield, CA | Manicures, Pedicures & Nail Art | Niche Beauty Lounge",
    description:
      "Manicures, pedicures and nail art in a calm, private setting on Truxtun Ave in Bakersfield. Meticulous work by experienced manicurists. Call (661) 327-5393 to book.",
    summary: "Manicures, pedicures and nail art.",
    intro: [
      "Hands and feet deserve the same attention as everything else. Our manicurists take their time, working in a quiet, comfortable space that feels a world away from a walk-in nail bar.",
      "Expect meticulous shaping, careful cuticle work and a finish that lasts, whether you prefer something barely there or a set designed to be noticed.",
    ],
    image: "/images/pedicure-suite.webp",
    imageAlt: "Pedicure suite with leather chair at Niche Beauty Lounge nail salon in Bakersfield",
    thumb: "/images/pedicure-suite.webp",
    menuTitle: "Nail services",
    menu: [
      { name: "Signature Manicure", detail: "Shaping, cuticle care and a flawless polish, finished with a hand massage." },
      { name: "Signature Pedicure", detail: "A soak, exfoliation and polish in a private, reclined pedicure suite." },
      { name: "Nail Art", detail: "From a refined accent to a full custom set, designed with your manicurist." },
    ],
    highlights: ["Private pedicure suite", "Meticulous cuticle work", "Custom nail art"],
    faqs: [
      {
        q: "Do I need an appointment for a manicure or pedicure?",
        a: "Yes. Nail services at Niche Beauty Lounge are by appointment, so your manicurist's time is reserved entirely for you. Call (661) 327-5393 to book.",
      },
      {
        q: "Can I book nails and hair in the same visit?",
        a: "Yes. Hair, nails and skin care are all under one roof on Truxtun Ave. Tell us what you would like and we will coordinate the timing.",
      },
    ],
  },
  {
    slug: "skin",
    path: "/facials-skin-care-bakersfield",
    label: "Skin",
    eyebrow: "Estheticians · Bakersfield, CA",
    h1: "Facials & skin care in Bakersfield, tailored to you.",
    title: "Facials & Skin Care in Bakersfield, CA | Licensed Estheticians | Niche Beauty Lounge",
    description:
      "Customized facials, professional skin analysis and advanced skin care treatments from licensed estheticians in Bakersfield. Private treatment rooms on Truxtun Ave. Call (661) 327-5393.",
    summary: "Skin care, facials and advanced treatments.",
    intro: [
      "Healthy, luminous skin starts with understanding it. Our licensed estheticians begin every visit with a professional skin analysis, then build a treatment around what your skin actually needs.",
      "Treatments take place in a private, softly lit room using professional-grade products and advanced techniques, for results you can see and a calm you can feel.",
    ],
    image: "/images/treatment-room.webp",
    imageAlt: "Private esthetician treatment room for facials at Niche Beauty Lounge in Bakersfield",
    thumb: "/images/treatment-room.webp",
    menuTitle: "Skin care services",
    menu: [
      { name: "Customized Facial", detail: "Cleansing, exfoliation, treatment and hydration selected for your skin on the day." },
      { name: "Professional Skin Analysis", detail: "A close look at your skin's condition and a clear plan for caring for it." },
      { name: "Advanced Treatments", detail: "Targeted, technology-assisted treatments for tone, texture and clarity." },
    ],
    highlights: ["Licensed estheticians", "Private treatment rooms", "Professional-grade products"],
    faqs: [
      {
        q: "Which facial is right for my skin?",
        a: "You do not need to know before you arrive. Your esthetician will analyze your skin and customize the treatment to your skin type and concerns.",
      },
      {
        q: "Where can I get a facial in Bakersfield?",
        a: "Niche Beauty Lounge offers facials and skin care at 5393 Truxtun Ave, Bakersfield, CA 93309. Call (661) 327-5393 to reserve a treatment.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "Where is Niche Beauty Lounge located?",
    a: `We are at ${fullAddress}, with parking directly in front of the salon.`,
  },
  {
    q: "What services do you offer?",
    a: "Hair (cut, color, styling, treatments and hair replacement), nails (manicures, pedicures and nail art), and skin care and facials with licensed estheticians, all in one Bakersfield location.",
  },
  {
    q: "How do I book an appointment?",
    a: `Call us at ${site.phone}. We will pair you with the right artist for your service and reserve your time.`,
  },
  {
    q: "Can I book several services for one visit?",
    a: "Yes. Many guests pair hair with nails, or a facial with a blowout. Tell us what you have in mind when you call and we will plan the visit for you.",
  },
];

export interface Seo {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

export const homeSeo: Seo = {
  path: "/",
  title: "Niche Beauty Lounge | Luxury Hair Salon, Nails & Skin Care in Bakersfield, CA",
  description:
    "Bakersfield's luxury beauty lounge for hair, nails, facials and skin care. Elevated care at 5393 Truxtun Ave. Call (661) 327-5393 to book your appointment.",
};

export const notFoundSeo: Seo = {
  path: "/404",
  title: "Page Not Found | Niche Beauty Lounge",
  description: "The page you are looking for could not be found.",
  noindex: true,
};

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;

/** Every indexable route, used for prerendering and the sitemap. */
export const routes: string[] = ["/", ...services.map((s) => s.path)];

export function seoForPath(path: string): Seo {
  if (path === "/") return homeSeo;
  const service = services.find((s) => s.path === path);
  if (service) {
    return { path: service.path, title: service.title, description: service.description };
  }
  return notFoundSeo;
}
