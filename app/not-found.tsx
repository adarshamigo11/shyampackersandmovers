import Link from "next/link";
import CallButton from "@/components/CallButton";

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="gold-text text-5xl font-black">Page not found</h1>
      <p className="mt-3 text-white/80">Sorry, we could not find that page. You can still call us directly.</p>
      <div className="mt-6 flex flex-col items-center gap-3">
        <CallButton />
        <Link href="/" className="font-bold text-gold underline">Back to home</Link>
      </div>
    </section>
  );
}
