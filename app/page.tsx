import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards, { AreaChips } from "@/components/ServiceCards";
import CallPrompt from "@/components/CallPrompt";
import FaqList from "@/components/Faq";
import Reviews from "@/components/Reviews";
import JsonLd from "@/components/JsonLd";
import { HandCoins, MapPinned, ShieldCheck, Users } from "lucide-react";
import { areaPages, homeFaqs, servicePages, steps } from "@/lib/content";
import { faqSchema, siteNavSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const why = [
  { icon: MapPinned, title: "Local Expertise in Sagar", text: "Based in Makronia, we know Sagar's roads and colonies, so pickups and deliveries run smoothly." },
  { icon: HandCoins, title: "Transparent Pricing", text: "A clear quote before we start. No hidden charges, no last-minute surprises." },
  { icon: Users, title: "Trained Handling Staff", text: "Experienced packers and loaders who treat your belongings like their own." },
  { icon: ShieldCheck, title: "Safe & Reliable Transport", text: "Well-kept trucks and careful handling from pickup to doorstep." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="services" aria-labelledby="services-title" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Services"
            id="services-title"
            title="Packers, Movers & Transport Services in Sagar"
            sub="From a single room to a full truckload — everything for a stress-free move, under one roof."
          />
          <ServiceCards pages={servicePages} />
          <CallPrompt heading="Need a mover or truck today?" sub="Tell us your route and load — we quote on the call." />
        </div>
      </section>

      <section id="why-us" aria-labelledby="why-title" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why Choose Us" id="why-title" title="Why Shyam is the Best Packers and Movers in Sagar" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass rounded-2xl p-6">
                <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" aria-labelledby="how-title" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How It Works" id="how-title" title="Moving with Shyam is as Easy as 1-2-3-4" center />
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
          <CallPrompt heading="Step 1 takes 30 seconds — call now" />
        </div>
      </section>

      <section id="areas" aria-labelledby="areas-title" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Areas We Serve"
            id="areas-title"
            title="Packers & Movers in Sagar, Makronia, Bina, Damoh & Beyond"
            sub="Based at 8 Shankargarh Road, Makronia, Sagar — serving the whole region and running pan-India routes."
          />
          <AreaChips pages={areaPages} />
        </div>
      </section>

      <Reviews />

      <section id="about" aria-labelledby="about-title" className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About Us" id="about-title" title={`${site.name} — ${site.tagline}`} />
            <p className="mt-4 text-white/80">
              {site.name} is a Makronia-based moving and transport company serving Sagar and nearby towns.
              We believe a move should be safe, simple and stress-free — which is why we combine careful
              packing, trained staff, well-kept vehicles and honest pricing.
            </p>
            <p className="mt-3 text-white/80">
              Whether you are shifting a flat in Sagar, relocating an office, renting a truck or sending goods
              to another city, one call to us is all it takes.
            </p>
          </div>
          <Image
            src="/shyam-wordmark.jpg"
            alt="Shyam Packers and Movers logo"
            width={1300}
            height={560}
            sizes="(min-width:1024px) 560px, 100vw"
            className="w-full rounded-3xl border border-gold/30"
          />
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="FAQ" id="faq-title" title="Packers and Movers in Sagar — Common Questions" center />
          <FaqList faqs={homeFaqs} />
          <CallPrompt heading="Still have a question? Call us" />
        </div>
      </section>

      <JsonLd data={[faqSchema(homeFaqs), siteNavSchema()]} />
    </>
  );
}
