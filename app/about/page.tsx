import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallPrompt from "@/components/CallPrompt";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "About Shyam Packers and Movers – Trusted Movers in Makronia, Sagar";
const description =
  "About Shyam Packers and Movers, Makronia Sagar – Safe Move, Secure Future. Learn how we handle house shifting, office shifting, transport and truck rental in Sagar and across India.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title, description, images: ["/shyam-banner.jpg"] },
};

export default function About() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs trail={[{ name: "About Us" }]} />
        <h1 className="gold-text mt-5 text-3xl font-black sm:text-5xl">About {site.name}</h1>
        <p className="mt-2 font-semibold uppercase tracking-wider text-white/70">{site.tagline}</p>

        <Image
          src="/shyam-banner.jpg"
          alt={`${site.name} logo banner`}
          width={1536}
          height={1024}
          sizes="(min-width:896px) 896px, 100vw"
          className="mt-6 w-full rounded-3xl border border-gold/30"
        />

        <div className="mt-8 space-y-4 text-lg text-white/85">
          <p>
            {site.name} is a moving and transport company based at {site.address.street}, {site.address.locality}, {site.address.city}.
            We help families and businesses in Sagar and nearby towns move safely — whether it is a single-room shift, a full house,
            an office or a truckload of goods.
          </p>
          <p>
            Our approach is simple: pack carefully, load securely, drive safely, unload with care and tell you the price upfront.
            Our trained staff handle furniture, appliances and fragile items the way you would — and our vehicles are matched to
            the size of your load.
          </p>
          <p>
            We serve Sagar city, Makronia, Rajakhedi, Bina, Khurai, Rehli, Damoh, Bhopal, Vidisha and routes across India.
          </p>
        </div>
        <CallPrompt heading="Talk to us about your move" sub="Free quote on the call" />
      </div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
    </section>
  );
}
