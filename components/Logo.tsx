import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} – home`}>
      <Image
        src="/shyam-emblem.png"
        alt={`${site.name} logo`}
        width={size}
        height={size}
        priority
        className="rounded-full ring-2 ring-gold/70"
      />
      <span className="whitespace-nowrap leading-none">
        <span className="gold-text block text-2xl font-black tracking-wide sm:text-3xl">SHYAM</span>
        <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-xs">
          Packers and Movers
        </span>
      </span>
    </Link>
  );
}
