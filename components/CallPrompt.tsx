import { MessageCircle, Phone } from "lucide-react";
import { site, telHref, waHref } from "@/lib/site";

/** Click-to-call micro-prompt placed after sections. */
export default function CallPrompt({ heading, sub }: { heading: string; sub?: string }) {
  return (
    <div className="glass mx-auto mt-10 max-w-4xl rounded-2xl px-5 py-6 text-center shadow-xl sm:px-8">
      <p className="text-lg font-extrabold text-white sm:text-2xl">{heading}</p>
      {sub && <p className="mt-1 text-sm text-white/75">{sub}</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {site.phones.map((p, i) => (
          <a
            key={p.intl}
            href={telHref(i)}
            className="btn-gold flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-lg font-extrabold"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {p.display}
          </a>
        ))}
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-lg font-extrabold text-white hover:brightness-105"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
