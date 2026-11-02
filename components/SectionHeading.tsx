export default function SectionHeading({
  eyebrow,
  title,
  sub,
  id,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      <h2 id={id} className="mt-1 text-2xl font-extrabold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-white/75">{sub}</p>}
    </div>
  );
}
