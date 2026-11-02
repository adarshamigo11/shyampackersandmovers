import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { businessSchema, websiteSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

const title = "Packers and Movers in Sagar | Transport & Truck Rental – Shyam Packers & Movers";
const description =
  "Shyam Packers and Movers, Makronia Sagar – best packers and movers in Sagar, MP. House & office shifting, packing, loading, unloading, transport and truck rental in Sagar, Makronia, Rajakhedi, Bina, Khurai, Damoh, Rehli, Bhopal, Vidisha and all India. Call 92432 00382.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.shortName}` },
  description,
  keywords: [
    "packers and movers in sagar",
    "best packers and movers in sagar",
    "transport in sagar",
    "truck rental services in sagar",
    "house shifting in sagar",
    "office shifting in sagar",
    "shyam packers and movers",
    "packers and movers makronia",
    "goods transport sagar",
    "sagar to bhopal transport",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/shyam-banner.jpg", width: 1536, height: 1024, alt: `${site.name} – ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/shyam-banner.jpg"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050B2E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="relative pb-28 antialiased md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
