import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";

export default function CallButton({
  label = "Call Now for Instant Quote",
  className = "",
  pulse = false,
  size = "lg",
  phone = 0,
}: {
  label?: string;
  className?: string;
  pulse?: boolean;
  size?: "sm" | "lg";
  phone?: number;
}) {
  const pad = size === "lg" ? "px-6 py-4 text-lg" : "px-4 py-2.5 text-sm";
  return (
    <a
      href={telHref(phone)}
      aria-label={`Call ${site.name} on ${site.phones[phone].display}`}
      className={`btn-gold inline-flex whitespace-nowrap items-center justify-center gap-2 rounded-xl font-extrabold transition active:scale-[0.98] ${pad} ${
        pulse ? "animate-pulseRing" : ""
      } ${className}`}
    >
      <Phone className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      {label}
    </a>
  );
}
