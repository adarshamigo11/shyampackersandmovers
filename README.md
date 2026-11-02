# Shyam Packers and Movers — Website

Next.js 14 (App Router) · Tailwind CSS · Lucide icons · ready for Vercel.

## Before going live — edit `lib/site.ts`

Phones and address come from your logo banner. Please confirm / replace the `TODO` items:

- `url` — your real domain (or set `NEXT_PUBLIC_SITE_URL` in Vercel → Settings → Environment Variables)
- `address.postalCode` — verify the Makronia PIN code
- `geo` — exact office coordinates (right-click your pin in Google Maps)
- `open24x7` — set to `false` if you are not truly available 24/7 (it controls the "24/7" badges and the opening-hours schema)
- `whatsappPhoneIndex` — which of the two numbers has WhatsApp
- Optional, **real numbers only**: `rating`, `completedMoves`, `foundedYear`, `googleMapsUrl`
- Real customer reviews go in `lib/reviews.ts` (the reviews block stays hidden until you add some)

## Run locally

```bash
npm install
npm run dev
```

## Deploy (GitHub → Vercel)

```bash
git init && git add . && git commit -m "Shyam Packers and Movers website"
git branch -M main
git remote add origin https://github.com/<you>/shyam-packers-movers.git
git push -u origin main
```

Vercel → Add New → Project → import the repo → Deploy. Then add your custom domain.

## Pages (each is its own URL so Google can list it as a sublink)

| URL | Targets |
| --- | --- |
| `/` | Packers and Movers in Sagar (home) |
| `/packers-and-movers-in-sagar` | best packers and movers in sagar |
| `/transport-in-sagar` | transport in sagar |
| `/truck-rental-in-sagar` | truck rental services in sagar |
| `/house-shifting-in-sagar`, `/office-shifting-in-sagar`, `/packing-loading-unloading-in-sagar`, `/long-distance-packers-and-movers-from-sagar` | service pages |
| `/packers-and-movers-in-makronia` … `-rajakhedi`, `-bina`, `-khurai`, `-rehli`, `-damoh`, `-bhopal`, `-vidisha` | area pages |
| `/about`, `/contact` | trust + NAP |

All page text lives in `lib/content.ts` — edit titles, descriptions, FAQs or add a new page by adding one object.

## About Google sublinks (sitelinks)

Google chooses sitelinks automatically; nobody can force them. What this site does to make them likely:
one clear page per search phrase, page titles that match the phrase, the same phrases as navigation link text,
breadcrumb + Service + FAQ + LocalBusiness structured data, internal links between pages and an auto-generated sitemap.
Sitelinks typically appear after Google has crawled and trusted the site (often several weeks), and mainly for brand searches
like "shyam packers and movers".

## After launch

1. Add the site in Google Search Console and submit `/sitemap.xml`; request indexing for the home page and the key service pages.
2. Create / claim the Google Business Profile with the exact same name, address and phone as `lib/site.ts` — this matters most for "near me" and Sagar map results.
3. Collect genuine Google reviews; mirror them in `lib/reviews.ts`.
4. Add real photos (trucks, team, loading) and use Next `<Image>` for them.
