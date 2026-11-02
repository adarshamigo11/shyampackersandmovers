import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import CallButton from "./CallButton";
import { servicePages } from "@/lib/content";

// Anchor text = the search phrases, so Google can use them as sitelinks.
const primaryNav = [
  { href: "/packers-and-movers-in-sagar", label: "Packers and Movers in Sagar" },
  { href: "/transport-in-sagar", label: "Transport in Sagar" },
  { href: "/truck-rental-in-sagar", label: "Truck Rental in Sagar" },
  { href: "/house-shifting-in-sagar", label: "House Shifting in Sagar" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-space-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-semibold text-white/90 xl:flex">
          {primaryNav.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap hover:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton label="Call Now" size="sm" className="hidden sm:inline-flex" />
          <details className="group relative xl:hidden">
            <summary
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-gold/40 text-gold"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 group-open:hidden" aria-hidden="true" />
              <X className="hidden h-6 w-6 group-open:block" aria-hidden="true" />
            </summary>
            <nav
              aria-label="Mobile"
              className="glass absolute right-0 top-14 max-h-[75vh] w-72 overflow-y-auto rounded-2xl bg-space-900 p-3 shadow-2xl"
              style={{ background: "#050B2E" }}
            >
              <ul className="space-y-0.5 text-[15px] font-semibold">
                {servicePages.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="block rounded-lg px-3 py-2.5 hover:bg-white/10">
                      {p.label}
                    </Link>
                  </li>
                ))}
                <li><Link href="/about" className="block rounded-lg px-3 py-2.5 hover:bg-white/10">About Us</Link></li>
                <li><Link href="/contact" className="block rounded-lg px-3 py-2.5 hover:bg-white/10">Contact Us</Link></li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
