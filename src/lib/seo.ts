import { Faq, Seo, Service, fullAddress, homeFaqs, mapsUrl, services, site } from "./site";

const abs = (path: string) => `${site.url}${path === "/" ? "/" : path}`;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const businessId = `${site.url}/#business`;

function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "NailSalon"],
    "@id": businessId,
    name: site.name,
    alternateName: site.legalName,
    description: site.tagline,
    url: `${site.url}/`,
    telephone: site.phoneE164,
    image: `${site.url}${site.ogImage}`,
    logo: `${site.url}/favicon.svg`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: "Bakersfield" },
    hasMap: mapsUrl,
    sameAs: [site.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.menuTitle, url: abs(s.path) },
      })),
    },
  };
}

function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.menuTitle,
    serviceType: s.label,
    description: s.description,
    url: abs(s.path),
    image: `${site.url}${s.image}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: "Bakersfield" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.menuTitle,
      itemListElement: s.menu.map((m) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: m.name, description: m.detail },
      })),
    },
  };
}

function breadcrumbSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: s.label, item: abs(s.path) },
    ],
  };
}

export function schemasForPath(path: string): object[] {
  if (path === "/") return [businessSchema(), faqSchema(homeFaqs)];
  const service = services.find((s) => s.path === path);
  if (service) {
    return [businessSchema(), serviceSchema(service), breadcrumbSchema(service), faqSchema(service.faqs)];
  }
  return [];
}

/** Head markup for a route. Injected into the static HTML at build time. */
export function renderHead(seo: Seo): string {
  const url = abs(seo.path);
  const image = `${site.url}${seo.image ?? site.ogImage}`;
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    seo.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="geo.region" content="US-CA" />`,
    `<meta name="geo.placename" content="Bakersfield" />`,
    `<meta name="business:contact_data:street_address" content="${esc(fullAddress)}" />`,
    ...schemasForPath(seo.path).map(
      (s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`,
    ),
  ];
  return tags.join("\n    ");
}
