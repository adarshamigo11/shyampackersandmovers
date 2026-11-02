import { MapPin } from "lucide-react";
import { site, fullAddress } from "@/lib/site";

export default function GoogleMap() {
  const mapQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=15`;
  
  // Alternative: Use a simple iframe without API key
  const simpleMapUrl = `https://www.google.com/maps?q=${mapQuery}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="px-4 py-10 sm:py-14" aria-labelledby="map-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="map-title" className="gold-text text-2xl font-black sm:text-3xl">
          Find Us on Google Maps
        </h2>
        <p className="mt-2 text-white/80">
          Visit our office in Makronia, Sagar or get directions to our location
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gold/30 shadow-2xl">
          <iframe
            title={`Google Maps location of ${site.name}`}
            src={simpleMapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <p className="font-bold text-white">Our Office Location</p>
              <p className="mt-1 text-sm text-white/80">{fullAddress}</p>
            </div>
          </div>
          
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
