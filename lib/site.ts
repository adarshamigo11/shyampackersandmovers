/**
 * SINGLE SOURCE OF TRUTH for business details (taken from the Shyam logo banner).
 * Items marked TODO are assumptions — confirm them before going live.
 */
type Site = {
  name: string;
  shortName: string;
  tagline: string;
  url: string;
  phones: { intl: string; display: string }[];
  address: {
    street: string;
    locality: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: { lat: number; lng: number };
  priceRange: string;
  open24x7: boolean;
  googleMapsUrl: string | null;
  foundedYear: string | null;
  completedMoves: string | null;
  rating: { value: string; count: string } | null;
  whatsappPhoneIndex: number;
};

export const site: Site = {
  name: "Shyam Packers and Movers",
  shortName: "Shyam Packers & Movers",
  tagline: "Safe Move • Secure Future",
  // TODO: your real domain (or set NEXT_PUBLIC_SITE_URL in Vercel)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shyam-packers-movers.vercel.app",
  phones: [
    { intl: "919243200382", display: "92432 00382" },
    { intl: "919516750418", display: "95167 50418" },
  ],
  address: {
    street: "8 Shankargarh Road",
    locality: "Makronia",
    city: "Sagar",
    region: "Madhya Pradesh",
    postalCode: "470004", // TODO: verify Makronia PIN
    country: "IN",
  },
  // TODO: right-click your office pin in Google Maps and paste exact lat/lng
  geo: { lat: 23.8486, lng: 78.7849 },
  priceRange: "₹₹",
  // TODO: set false if you are not truly available around the clock
  open24x7: true,
  googleMapsUrl: null,
  foundedYear: null,
  completedMoves: null,
  rating: null,
  whatsappPhoneIndex: 0, // TODO: make sure this number has WhatsApp
};

export const primary = site.phones[0];
export const telHref = (i = 0) => `tel:+${site.phones[i].intl}`;
export const waHref = (
  text = "Hello Shyam Packers and Movers, I need a quote for shifting / truck rental in Sagar."
) => `https://wa.me/${site.phones[site.whatsappPhoneIndex].intl}?text=${encodeURIComponent(text)}`;

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
