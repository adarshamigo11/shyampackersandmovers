import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallButton from "@/components/CallButton";
import CallPrompt from "@/components/CallPrompt";
import FaqList from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import TruckRoad from "@/components/TruckRoad";
import Icon from "@/components/Icon";
import { allPages, areaPages, getPage, servicePages, steps } from "@/lib/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site, waHref } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPage(params.slug);
  if (!p) return {};
  const url = `/${p.slug}`;
  return {
    title: { absolute: p.title },
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: p.title,
      description: p.description,
      siteName: site.name,
      locale: "en_IN",
      images: [{ url: p.image, width: 1536, height: 1024, alt: p.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [p.image] },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = getPage(params.slug);
  if (!p) notFound();

  const parent = p.kind === "service" ? "Services" : "Areas We Serve";
  const parentPath = p.kind === "service" ? "/#services" : "/#areas";
  const related = (p.kind === "service" ? servicePages : areaPages).filter((x) => x.slug !== p.slug);
  const otherGroup = p.kind === "service" ? areaPages.slice(0, 4) : servicePages.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-2 pt-8 sm:pt-12">
        <div className="stars" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs trail={[{ name: parent, path: parentPath }, { name: p.label }]} />
          <div className="mt-5 flex items-start gap-4">
            <span className="btn-gold hidden h-14 w-14 shrink-0 place-items-center rounded-2xl sm:grid">
              <Icon name={p.icon} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="gold-text text-3xl font-black leading-tight sm:text-5xl">{p.h1}</h1>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/70">
                {site.name} · Makronia, Sagar
              </p>
            </div>
          </div>

          <div className="mt-5 max-w-3xl space-y-3 text-base text-white/85 sm:text-lg">
            {p.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          {/* SEO-optimised hero image for the service/area page */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gold/30 shadow-[0_0_40px_rgba(255,200,61,0.15)]">
            <Image
              src={p.image}
              alt={p.imageAlt}
              width={1200}
              height={675}
              priority
              sizes="(min-width:1024px) 1200px, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton pulse className="w-full sm:w-auto" />
            <a
              href={waHref(`Hello Shyam Packers and Movers, I need a quote for ${p.label.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/50 px-6 py-4 text-lg font-bold hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
        <TruckRoad />
      </section>

      <section aria-labelledby="highlights-title" className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What You Get" id="highlights-title" title={`${p.label} — Why Choose Shyam`} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.highlights.map((h) => (
              <li key={h.title} className="glass rounded-2xl p-5">
                <CheckCircle2 className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{h.title}</h3>
                <p className="mt-1.5 text-sm text-white/75">{h.text}</p>
              </li>
            ))}
          </ul>

          {/* Secondary SEO image in highlights section */}
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-lg">
              <Image
                src={p.image}
                alt={`${p.label} service in Sagar by Shyam Packers and Movers – ${p.imageAlt}`}
                width={600}
                height={400}
                sizes="(min-width:1024px) 50vw, 100vw"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Trusted {p.label.toLowerCase()} by Shyam Packers and Movers</h3>
              <p className="mt-3 text-white/80">
                Based in Makronia, Sagar, we deliver professional {p.label.toLowerCase()} with
                trained staff, quality packing material and well-maintained vehicles. Our transparent
                pricing and careful handling make us the preferred choice for families and businesses
                across Sagar, Madhya Pradesh.
              </p>
              <p className="mt-3 text-white/80">
                Call <strong className="text-gold">{site.phones[0].display}</strong> for a free quote
                or WhatsApp us to discuss your {p.label.toLowerCase()} requirement.
              </p>
            </div>
          </div>

          <CallPrompt heading={`Book ${p.label.toLowerCase()} today`} sub="Free quote · clear pricing · call or WhatsApp" />
        </div>
      </section>

      <section aria-labelledby="steps-title" className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How It Works" id="steps-title" title="Simple 4-Step Process" />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="glass relative rounded-2xl p-6 pt-9">
                <span className="btn-gold absolute -top-5 left-5 grid h-10 w-10 place-items-center rounded-full text-lg font-black">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="FAQ" id="faq-title" title={`${p.label} — Frequently Asked Questions`} center />
          <FaqList faqs={p.faqs} />
        </div>
      </section>

      <section aria-labelledby="related-title" className="px-4 pb-16 pt-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="related-title" className="text-xl font-extrabold sm:text-2xl">
            Explore More from Shyam Packers and Movers
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {[...related, ...otherGroup].map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/${x.slug}`}
                  className="glass inline-block rounded-full px-4 py-2 text-sm font-semibold hover:border-gold/70 hover:text-gold"
                >
                  {x.label}
                </Link>
              </li>
            ))}
          </ul>
          <CallPrompt heading="Ready to move? Call Shyam Packers and Movers" />
        </div>
      </section>

      <JsonLd
        data={[
          serviceSchema(p),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: p.label, path: `/${p.slug}` },
          ]),
          faqSchema(p.faqs),
        ]}
      />
    </>
  );
}
