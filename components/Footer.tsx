import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { site, telHref, waHref, fullAddress } from "@/lib/site";
import { areaPages, servicePages } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-space-900/95 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo size={48} />
          <p className="gold-text mt-3 text-sm font-bold tracking-wide">{site.tagline}</p>
          <p className="mt-2 text-sm">
            Trusted packers and movers in Sagar, MP — safe, fast and budget-friendly shifting and transport.
          </p>
        </div>

        <div>
          <p className="font-bold text-white">Contact</p>
          <address className="mt-3 space-y-2.5 text-sm not-italic">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{fullAddress}</span>
            </p>
            {site.phones.map((p, i) => (
              <p key={p.intl}>
                <a href={telHref(i)} className="flex items-center gap-2 font-bold text-white hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {p.display}
                </a>
              </p>
            ))}
            <p>
              <a href={waHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                WhatsApp chat
              </a>
            </p>
            {site.open24x7 && <p>Bookings open 24/7</p>}
          </address>
        </div>

        <nav aria-label="Services">
          <p className="font-bold text-white">Our Services</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {servicePages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="hover:text-gold">{p.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Areas">
          <p className="font-bold text-white">Areas We Serve</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {areaPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="hover:text-gold">{p.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <Link href="/about" className="hover:text-gold">About</Link>
        <Link href="/contact" className="hover:text-gold">Contact</Link>
      </div>
    </footer>
  );
}
