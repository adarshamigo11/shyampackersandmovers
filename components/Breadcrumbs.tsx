import Link from "next/link";

export default function Breadcrumbs({ trail }: { trail: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link href="/" className="hover:text-gold">Home</Link></li>
        {trail.map((t) => (
          <li key={t.name} className="flex items-center gap-1.5">
            <span aria-hidden="true">›</span>
            {t.path ? <Link href={t.path} className="hover:text-gold">{t.name}</Link> : <span className="text-gold">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
