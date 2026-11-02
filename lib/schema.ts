import { site, fullAddress } from "./site";
import { servicePages, type Faq, type PageDef } from "./content";

const areaNames = ["Sagar", "Makronia", "Rajakhedi", "Bina", "Khurai", "Rehli", "Damoh", "Bhopal", "Vidisha"];
const bizId = `${site.url}/#business`;

/** LocalBusiness / MovingCompany — injected on every page (NAP, geo, hours, radius). */
export function businessSchema() {
  const s: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": bizId,
    name: site.name,
    alternateName: ["Shyam Packers & Movers", "Shyam Packers Makronia", "Shyam Packers Sagar"],
    slogan: site.tagline,
    description:
      "Packers and movers in Sagar, MP — house shifting, office shifting, packing, loading, unloading, transport and truck rental, locally and across India.",
    url: site.url,
    logo: `${site.url}/shyam-emblem.png`,
    image: [`${site.url}/shyam-banner.jpg`],
    telephone: site.phones.map((p) => `+${p.intl}`),
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.locality}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      ...areaNames.map((n) => ({ "@type": "City", name: n })),
      { "@type": "Country", name: "India" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      geoRadius: 200000,
    },
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: `+${p.intl}`,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving & Transport Services",
      itemListElement: servicePages.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.label, url: `${site.url}/${p.slug}` },
      })),
    },
    sameAs: [
      // Add social media profiles here if available
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/...",
      // "https://twitter.com/...",
      // "https://www.youtube.com/...",
    ],
  };
  if (site.open24x7) {
    s.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    };
  }
  if (site.foundedYear) s.foundingDate = site.foundedYear;
  if (site.googleMapsUrl) s.hasMap = site.googleMapsUrl;
  if (site.rating)
    s.aggregateRating = { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count };
  return s;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-IN",
    publisher: { "@id": bizId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
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

export function serviceSchema(p: PageDef) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: p.kind === "service" ? "MovingService" : "TransportService",
    name: p.h1,
    description: p.description,
    url: `${site.url}/${p.slug}`,
    provider: { "@id": bizId },
    areaServed: p.kind === "area" ? p.h1.replace("Packers and Movers in ", "") : "Sagar, Madhya Pradesh, India",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: p.kind === "service" ? "MovingService" : "TransportService",
      serviceUrl: `${site.url}/${p.slug}`,
    },
  };
}

export const siteNavSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: servicePages.map((p) => p.label),
  url: servicePages.map((p) => `${site.url}/${p.slug}`),
});

export { fullAddress };
