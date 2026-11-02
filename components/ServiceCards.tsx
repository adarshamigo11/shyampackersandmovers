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
            className="glass group flex h-full flex-col rounded-2xl p-5 transition hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_0_30px_rgba(255,200,61,0.2)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-deep text-space-900">
              <Icon name={p.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">{p.label}</h3>
            <p className="mt-2 flex-1 text-sm text-white/70">{p.intro[0].split(". ")[0].replace(/\.$/, "")}.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold">
              {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
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
