import { ExternalLink, Star } from "lucide-react";
import CallPrompt from "./CallPrompt";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export default function Reviews() {
  const stats = [
    site.rating && { label: `Rating (${site.rating.count} reviews)`, value: `${site.rating.value} ★` },
    site.completedMoves && { label: "Relocations completed", value: site.completedMoves },
    site.foundedYear && { label: "Serving since", value: site.foundedYear },
  ].filter(Boolean) as { label: string; value: string }[];

  // Nothing real to show yet → render only the call prompt, never invented proof.
  if (stats.length === 0 && reviews.length === 0 && !site.googleMapsUrl) {
    return (
      <section className="px-4 pb-14">
        <CallPrompt heading="Ready to move? Call Shyam Packers and Movers now" sub="Free quote · clear pricing · trained staff" />
      </section>
    );
  }

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Customer Reviews" id="reviews-title" title="Trusted by Families & Businesses in Sagar" />
        {stats.length > 0 && (
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center">
                <dd className="gold-text text-3xl font-extrabold">{s.value}</dd>
                <dt className="mt-1 text-sm text-white/75">{s.label}</dt>
              </div>
            ))}
          </dl>
        )}
        {reviews.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name + r.text} className="glass rounded-2xl p-6">
                <div className="flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 text-white/85">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm font-bold">
                  {r.name} <span className="font-medium text-white/60">· {r.area}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        {site.googleMapsUrl && (
          <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-gold underline">
            Read our reviews on Google <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
        <CallPrompt heading="Join our happy customers — call now" />
      </div>
    </section>
  );
}
