import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/content";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mx-auto mt-6 max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="glass group rounded-xl p-4 open:border-gold/50">
          <summary className="flex cursor-pointer items-center justify-between gap-3 text-left font-bold text-white">
            <h3 className="text-base sm:text-lg">{f.q}</h3>
            <ChevronDown className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-white/80">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
