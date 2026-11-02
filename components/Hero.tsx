import Image from "next/image";
import { BadgeCheck, Clock, IndianRupee, MessageCircle, Users } from "lucide-react";
import CallButton from "./CallButton";
import TruckRoad from "./TruckRoad";
import { site, waHref } from "@/lib/site";

const trust = [
  { icon: Clock, text: "24/7 Booking" },
  { icon: IndianRupee, text: "Zero Hidden Charges" },
  { icon: Users, text: "Trained Staff" },
  { icon: BadgeCheck, text: "Safe & On-Time" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="stars" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-6 pt-8 sm:pt-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
            Makronia · Sagar · Madhya Pradesh
          </p>
          <h1 id="hero-title" className="mt-4 text-[2rem] font-black leading-[1.1] sm:text-5xl">
            <span className="gold-shimmer animate-shimmer">Packers and Movers in Sagar</span>
            <span className="mt-2 block text-xl font-bold text-white sm:text-3xl">
              Safe, Fast &amp; Budget-Friendly Shifting — Sagar &amp; All India
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            <strong className="text-white">{site.name}</strong> — house &amp; office shifting, packing,
            loading-unloading, transport and truck rental. <em className="not-italic text-gold">{site.tagline}.</em>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton pulse className="w-full sm:w-auto" />
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold/50 px-6 py-4 text-lg font-bold text-white hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-3 text-sm text-white/70">
            {site.phones.map((p) => p.display).join("  ·  ")} — free quote in minutes
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {trust.map(({ icon: Icon, text }) => (
              <li key={text} className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold">
                <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-floaty relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gold/20 blur-3xl" aria-hidden="true" />
          <Image
            src="/shyam-banner.jpg"
            alt={`${site.name}, Makronia Sagar – ${site.tagline}. Call ${site.phones[0].display} or ${site.phones[1].display}`}
            width={1536}
            height={1024}
            priority
            sizes="(min-width:1024px) 560px, 100vw"
            className="relative w-full rounded-3xl border border-gold/40 shadow-[0_0_60px_rgba(255,200,61,0.25)]"
          />
        </div>
      </div>
      <TruckRoad />
    </section>
  );
}
