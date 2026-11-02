import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { fullAddress, site, telHref, waHref } from "@/lib/site";

const title = "Contact Shyam Packers and Movers, Makronia Sagar – Call 92432 00382";
const description =
  "Contact Shyam Packers and Movers at 8 Shankargarh Road, Makronia, Sagar. Call 92432 00382 or 95167 50418, or WhatsApp us for a free packers and movers quote in Sagar.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title, description, images: ["/shyam-banner.jpg"] },
};

export default function Contact() {
  const mapQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs trail={[{ name: "Contact Us" }]} />
        <h1 className="gold-text mt-5 text-3xl font-black sm:text-5xl">Contact Shyam Packers and Movers</h1>
        <p className="mt-3 text-white/80">
          Call or WhatsApp for a free quote on packers and movers, transport and truck rental in Sagar.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.phones.map((p, i) => (
            <a key={p.intl} href={telHref(i)} className="btn-gold flex items-center gap-3 rounded-2xl p-5 text-2xl font-black">
              <Phone className="h-7 w-7" aria-hidden="true" />
              {p.display}
            </a>
          ))}
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-[#25D366] p-5 text-xl font-extrabold text-white sm:col-span-2"
          >
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        <address className="glass mt-6 space-y-3 rounded-2xl p-6 not-italic">
          <p className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <span>
              <strong>{site.name}</strong>
              <br />
              {fullAddress}
            </span>
          </p>
          {site.open24x7 && (
            <p className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" /> Bookings open 24/7
            </p>
          )}
        </address>

        <a
          href={site.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-bold text-gold underline"
        >
          Open in Google Maps
        </a>
      </div>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: title,
            url: `${site.url}/contact`,
            mainEntity: { "@id": `${site.url}/#business` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ]),
        ]}
      />
    </section>
  );
}
