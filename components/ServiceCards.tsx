import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import type { PageDef } from "@/lib/content";

export default function ServiceCards({ pages, cta = "View details" }: { pages: PageDef[]; cta?: string }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/${p.slug}`}
            className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_0_30px_rgba(255,200,61,0.2)]"
          >
            {/* SEO-optimised thumbnail image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-deep text-space-900 shadow-lg">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 pt-4">
              <h3 className="text-lg font-bold text-white">{p.label}</h3>
              <p className="mt-2 flex-1 text-sm text-white/70">{p.intro[0].split(". ")[0].replace(/\.$/, "")}.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold">
                {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function AreaChips({ pages }: { pages: PageDef[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {pages.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/${p.slug}`}
            className="glass flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-white transition hover:border-gold/70 hover:text-gold"
          >
            <Icon name="pin" className="h-4 w-4 shrink-0 text-gold" />
            {p.h1.replace("Packers and Movers in ", "")}
          </Link>
        </li>
      ))}
      <li className="glass flex items-center gap-2 rounded-xl border-gold/50 px-3 py-3 text-sm font-bold text-gold">
        <Icon name="route" className="h-4 w-4 shrink-0" />
        All-India Routes
      </li>
    </ul>
  );
}
