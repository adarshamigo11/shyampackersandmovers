import { site } from "./site";

export type Faq = { q: string; a: string };
export type IconKey = "home" | "building" | "package" | "truck" | "route" | "bus" | "pin";

export type PageDef = {
  slug: string;
  kind: "service" | "area";
  /** Anchor text used in nav/footer/related links (matches the search phrase). */
  label: string;
  title: string; // <title>
  h1: string;
  description: string; // meta description
  icon: IconKey;
  /** SEO-optimised hero/feature image path (in /public/images/). */
  image: string;
  /** Alt text for the image – includes brand + keyword for SEO. */
  imageAlt: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  faqs: Faq[];
  keywords: string[];
};

/* ---------- Common FAQs ---------- */
const commonFaqs = (topic: string): Faq[] => [
  {
    q: `How do I get a quote for ${topic}?`,
    a: `Call ${site.phones[0].display} or ${site.phones[1].display}, or message us on WhatsApp. Tell us the pickup and drop location and what needs to be moved, and we will give you a clear quote before any work begins.`,
  },
  {
    q: "Are there any hidden charges?",
    a: "No. We explain the full cost on the call and confirm it before loading, so there are no last-minute surprises.",
  },
  {
    q: "Can I book at short notice?",
    a: `Yes. Call us with your date and we will do our best to fit your move in. Bookings are taken ${
      site.open24x7 ? "round the clock" : "during working hours"
    }.`,
  },
];

/* ---------- Service pages ---------- */
const services: PageDef[] = [
  {
    slug: "packers-and-movers-in-sagar",
    kind: "service",
    label: "Packers and Movers in Sagar",
    title: "Best Packers and Movers in Sagar, MP | Shyam Packers & Movers",
    h1: "Best Packers and Movers in Sagar",
    description:
      "Shyam Packers and Movers, Makronia – trusted packers and movers in Sagar for house & office shifting, packing, loading, unloading and truck rental. Call 92432 00382.",
    icon: "package",
    image: "/images/planning-moving-service.jpg",
    imageAlt: "Shyam Packers and Movers – professional packers and movers in Sagar, Makronia planning a safe household relocation",
    intro: [
      `Looking for reliable packers and movers in Sagar? ${site.name} handles everything from packing your first box to unloading the last one at your new place. Our office is at ${site.address.street}, ${site.address.locality}, so we are close to you across Sagar city.`,
      "We pack with proper material, load with trained staff, move in well-kept trucks and unload and arrange with care. One call to us replaces the stress of coordinating labour, a vehicle and packing material separately.",
    ],
    highlights: [
      { title: "Complete moving service", text: "Packing, loading, transport, unloading and arranging — all from one team." },
      { title: "Trained handling staff", text: "Experienced loaders who know how to handle furniture, appliances and fragile items." },
      { title: "Clear quote upfront", text: "You know the cost before we start. No hidden charges." },
      { title: "Local + long distance", text: "Within Sagar, to nearby towns and to any city across India." },
      { title: "Right-size vehicles", text: "From small loads to full truckloads, we match the vehicle to your goods." },
      { title: "Call, we come", text: "Tell us your date and location — we handle the rest." },
    ],
    faqs: [
      {
        q: "Which is the best packers and movers in Sagar?",
        a: `${site.name} is a local Sagar team focused on safe handling, clear pricing and on-time delivery. Call us for a quote and compare for yourself.`,
      },
      {
        q: "What services do packers and movers in Sagar provide?",
        a: "Packing, loading, unloading, transport, house shifting, office shifting and truck rental, locally and across India.",
      },
      ...commonFaqs("packers and movers in Sagar"),
    ],
    keywords: ["packers and movers in sagar", "best packers and movers in sagar", "movers and packers sagar", "shyam packers and movers"],
  },
  {
    slug: "house-shifting",
    kind: "service",
    label: "House Shifting",
    title: "House Shifting Services in Sagar | Safe Home Relocation – Shyam Packers",
    h1: "House Shifting Services in Sagar",
    description:
      "Professional house shifting in Sagar, MP – safe packing, loading, transport and unloading for homes of all sizes. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "home",
    image: "/images/house-shifting-professional.jpg",
    imageAlt: "Professional house shifting service in Sagar by Shyam Packers and Movers – safe packing and loading of household goods",
    intro: [
      `Moving home should not be stressful. ${site.name} takes care of your house shifting in Sagar from start to finish — packing every room, loading carefully, transporting safely and unloading at your new home.`,
      "We handle furniture, beds, sofas, appliances, kitchen items, clothes and fragile decor with proper packing material, so your belongings arrive in the condition they left.",
    ],
    highlights: [
      { title: "Room-by-room packing", text: "Kitchen, bedrooms, living room and more packed with suitable material." },
      { title: "Furniture & appliances", text: "Careful handling of beds, wardrobes, sofas, fridge, TV and washing machine." },
      { title: "Fragile items", text: "Extra protection for glassware, decor and electronics." },
      { title: "Unloading & arranging", text: "We unload and place items so you can settle in quickly." },
      { title: "Any home size", text: "From a single room or 1BHK to a large house." },
      { title: "Within Sagar or beyond", text: "Local shifting and long-distance home relocation." },
    ],
    faqs: [
      {
        q: "How far in advance should I book house shifting?",
        a: "The earlier the better, especially around month-ends and festival periods. Short-notice moves are possible too — just call and ask.",
      },
      {
        q: "Do you dismantle and refit furniture?",
        a: "Yes, we can dismantle large furniture before moving and help set it up again at your new place. Mention it when you call.",
      },
      ...commonFaqs("house shifting in Sagar"),
    ],
    keywords: ["house shifting in sagar", "home shifting sagar", "household shifting sagar mp", "local shifting sagar", "house relocation sagar"],
  },
  {
    slug: "office-shifting",
    kind: "service",
    label: "Office Shifting",
    title: "Office Shifting Services in Sagar | Commercial Relocation – Shyam Packers",
    h1: "Office & Commercial Shifting in Sagar",
    description:
      "Expert office and commercial shifting in Sagar, MP – planned packing and moving with minimal downtime. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "building",
    image: "/images/office-commercial-moving.jpg",
    imageAlt: "Office and commercial shifting service in Sagar by Shyam Packers and Movers – planned relocation with minimal downtime",
    intro: [
      `Moving your office, clinic or shop? ${site.name} plans commercial relocation in Sagar so your business is back up quickly. We pack and move desks, chairs, cabinets, computers, files and stock with care.`,
      "Share your timing and layout needs and we will plan the move to keep disruption low — including after-hours or weekend shifting where possible.",
    ],
    highlights: [
      { title: "Minimal downtime", text: "Planned packing, moving and unloading to get you working again fast." },
      { title: "IT & electronics", text: "Careful handling of computers, printers and equipment." },
      { title: "Files & records", text: "Organised packing so documents stay in order." },
      { title: "Shop & stock shifting", text: "Retail stock, racks and display material moved safely." },
      { title: "Flexible timing", text: "Discuss early-morning, evening or holiday slots with us." },
      { title: "Local & intercity", text: "Within Sagar or to another city." },
    ],
    faqs: [
      {
        q: "Can you shift our office outside working hours?",
        a: "Often yes. Call us with your preferred timing and we will confirm what is possible.",
      },
      {
        q: "Do you move shops and godowns too?",
        a: "Yes — shops, showrooms, godowns and clinics, with trained staff and suitable vehicles.",
      },
      ...commonFaqs("office shifting in Sagar"),
    ],
    keywords: ["office shifting in sagar", "shop shifting sagar", "commercial shifting sagar", "business relocation sagar", "office movers sagar"],
  },
  {
    slug: "local-shifting",
    kind: "service",
    label: "Local Shifting",
    title: "Local Shifting Services in Sagar | Same City Movers – Shyam Packers",
    h1: "Local Shifting Services in Sagar",
    description:
      "Fast and affordable local shifting in Sagar, MP – house and office relocation within the city. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "home",
    image: "/images/packers-movers-local-area.jpg",
    imageAlt: "Local shifting service in Sagar by Shyam Packers and Movers – quick and affordable same-city house and office relocation",
    intro: [
      `Need to move within Sagar city? ${site.name} provides quick and efficient local shifting services for homes and businesses. Whether you are shifting to a new colony or just across the street, we handle it professionally.`,
      "Our local team knows Sagar inside out — from Makronia to Bina Road, from Gola Bazaar to Dhawai Bazaar. We plan the move quickly and execute it smoothly.",
    ],
    highlights: [
      { title: "Quick turnaround", text: "Same-day or next-day local shifting available." },
      { title: "Local expertise", text: "We know all Sagar routes and neighborhoods." },
      { title: "Affordable rates", text: "Competitive pricing for local moves." },
      { title: "Complete service", text: "Packing, loading, transport, unloading and arranging." },
      { title: "Any size move", text: "Single room to full house or office." },
      { title: "Flexible timing", text: "Work around your schedule." },
    ],
    faqs: [
      {
        q: "How quickly can you do a local shift?",
        a: "Most local shifts in Sagar can be completed in a single day. Call us to discuss your specific requirements.",
      },
      {
        q: "Do you provide packing materials for local moves?",
        a: "Yes, we provide all necessary packing materials and handle the packing for you.",
      },
      ...commonFaqs("local shifting in Sagar"),
    ],
    keywords: ["local shifting in sagar", "same city movers sagar", "local packers movers sagar", "within city shifting sagar"],
  },
  {
    slug: "domestic-relocation",
    kind: "service",
    label: "Domestic Relocation",
    title: "Domestic Relocation Services | Pan-India Moving – Shyam Packers",
    h1: "Domestic Relocation from Sagar",
    description:
      "Trusted domestic relocation services from Sagar to any city in India – safe packing, secure transport and timely delivery. Shyam Packers and Movers. Call 92432 00382.",
    icon: "route",
    image: "/images/domestic-relocation-service-india.jpg",
    imageAlt: "Domestic relocation service from Sagar to all India by Shyam Packers and Movers – pan-India household goods shifting",
    intro: [
      `Relocating to another city? ${site.name} provides professional domestic relocation services from Sagar to any destination in India. We handle your household goods with care and ensure timely delivery.`,
      "From Sagar to Bhopal, Delhi, Mumbai, Bangalore or any other city — we plan the route, pack securely, load carefully and deliver safely to your new home.",
    ],
    highlights: [
      { title: "Pan-India coverage", text: "We move to any city in India from Sagar." },
      { title: "Secure packing", text: "High-quality materials for long-distance protection." },
      { title: "Trained staff", text: "Experienced in handling household goods." },
      { title: "On-time delivery", text: "We plan and stick to the schedule." },
      { title: "Door-to-door service", text: "Pickup from your Sagar address to new doorstep." },
      { title: "Tracking support", text: "Regular updates during transit." },
    ],
    faqs: [
      {
        q: "Which cities do you serve for domestic relocation?",
        a: "We serve all major cities in India from Sagar, including Bhopal, Indore, Jabalpur, Delhi, Mumbai, Bangalore, Chennai, Kolkata and more.",
      },
      {
        q: "How long does domestic relocation take?",
        a: "It depends on the distance. Local cities take 1-3 days, while distant cities may take 7-14 days. We provide a timeline before booking.",
      },
      ...commonFaqs("domestic relocation from Sagar"),
    ],
    keywords: ["domestic relocation sagar", "pan india movers sagar", "intercity moving sagar", "long distance home shifting", "sagar to other city movers"],
  },
  {
    slug: "car-transportation",
    kind: "service",
    label: "Car Transportation",
    title: "Car Transportation Services from Sagar | Safe Vehicle Transport – Shyam",
    h1: "Car Transportation from Sagar",
    description:
      "Safe and reliable car transportation from Sagar to any city in India – secure loading, insured transport and timely delivery. Shyam Packers and Movers. Call 92432 00382.",
    icon: "truck",
    image: "/images/stress-free-relocation.jpg",
    imageAlt: "Car transportation service from Sagar by Shyam Packers and Movers – safe and reliable vehicle transport across India",
    intro: [
      `Need to transport your car from Sagar? ${site.name} provides safe and professional car transportation services to any destination in India. We use specialized car carriers and ensure your vehicle reaches in the same condition it left.`,
      "Whether you are relocating to another city or need to send your car to a family member, we handle all types of vehicles — cars, SUVs, bikes and more.",
    ],
    highlights: [
      { title: "Specialized car carriers", text: "Purpose-built vehicles for safe car transport." },
      { title: "Secure loading", text: "Professional loading with proper equipment." },
      { title: "Pan-India service", text: "Transport to any city in India." },
      { title: "Insured transport", text: "Your vehicle is protected during transit." },
      { title: "Door-to-door pickup", text: "We collect from your location and deliver to destination." },
      { title: "Regular updates", text: "Stay informed about your vehicle's location." },
    ],
    faqs: [
      {
        q: "How do you transport cars safely?",
        a: "We use specialized car carriers with proper loading equipment. The vehicles are secured and protected during transit.",
      },
      {
        q: "Do you transport bikes and two-wheelers?",
        a: "Yes, we transport bikes, scooters and two-wheelers along with cars.",
      },
      ...commonFaqs("car transportation from Sagar"),
    ],
    keywords: ["car transportation from sagar", "vehicle transport sagar", "car carrier sagar", "car movers sagar", "bike transportation sagar"],
  },
  {
    slug: "bike-transportation",
    kind: "service",
    label: "Bike Transportation",
    title: "Bike Transportation Services from Sagar | Two-Wheeler Transport – Shyam",
    h1: "Bike Transportation from Sagar",
    description:
      "Professional bike and two-wheeler transportation from Sagar to any city – safe packing, secure loading and timely delivery. Shyam Packers and Movers. Call 92432 00382.",
    icon: "truck",
    image: "/images/house-shifting-loading.jpg",
    imageAlt: "Bike transportation service from Sagar by Shyam Packers and Movers – secure packing and safe loading of two-wheelers",
    intro: [
      `Want to transport your bike from Sagar? ${site.name} provides reliable bike transportation services across India. We pack your bike securely and transport it safely to your destination.`,
      "Whether you are relocating or sending your bike to someone, we handle all types of two-wheelers — bikes, scooters, motorcycles of all brands and models.",
    ],
    highlights: [
      { title: "Secure packing", text: "Proper padding and protection for your bike." },
      { title: "Safe loading", text: "Professional handling during loading and unloading." },
      { title: "All-India service", text: "Transport to any city in India." },
      { title: "Affordable rates", text: "Competitive pricing for bike transport." },
      { title: "Quick delivery", text: "Fast and reliable service." },
      { title: "All bike types", text: "We handle all brands and models." },
    ],
    faqs: [
      {
        q: "How do you pack bikes for transport?",
        a: "We use proper padding, wrapping and securing materials to protect your bike during transit. Critical parts are covered and the bike is secured in the vehicle.",
      },
      {
        q: "Can you transport scooters and motorcycles?",
        a: "Yes, we transport all types of two-wheelers — bikes, scooters, motorcycles of all brands and models.",
      },
      ...commonFaqs("bike transportation from Sagar"),
    ],
    keywords: ["bike transportation from sagar", "two-wheeler transport sagar", "scooter transport sagar", "motorcycle movers sagar", "bike carrier sagar"],
  },
  {
    slug: "packing-unpacking",
    kind: "service",
    label: "Packing & Unpacking",
    title: "Packing & Unpacking Services in Sagar | Professional Packing – Shyam",
    h1: "Packing & Unpacking Services in Sagar",
    description:
      "Professional packing and unpacking services in Sagar, MP – quality materials, trained staff and careful handling. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "package",
    image: "/images/furniture-packing-protection.jpg",
    imageAlt: "Professional packing and unpacking service in Sagar by Shyam Packers and Movers – furniture wrapped with protective material",
    intro: [
      `Need help with packing and unpacking? ${site.name} provides professional packing services in Sagar using high-quality materials and proven techniques. We pack everything from kitchen items to furniture, electronics to fragile decor.`,
      "Our trained staff use appropriate packing materials for each item type — cartons, bubble wrap, packing paper, tape and more. We ensure your belongings are protected during the move.",
    ],
    highlights: [
      { title: "Quality materials", text: "Cartons, bubble wrap, packing paper and tape." },
      { title: "Room-by-room packing", text: "Kitchen, bedrooms, living room and more." },
      { title: "Fragile item protection", text: "Special care for glassware, electronics and decor." },
      { title: "Furniture packing", text: "Beds, wardrobes, sofas and tables." },
      { title: "Unpacking service", text: "We unpack and arrange at your new place." },
      { title: "Labour-only option", text: "Hire staff for packing without transport." },
    ],
    faqs: [
      {
        q: "What packing materials do you use?",
        a: "We use high-quality cartons, bubble wrap, packing paper, foam sheets and strong tape. Each item type gets appropriate protection.",
      },
      {
        q: "Do you unpack at the destination?",
        a: "Yes, we provide unpacking services and can help arrange items at your new location.",
      },
      ...commonFaqs("packing and unpacking in Sagar"),
    ],
    keywords: ["packing service sagar", "unpacking service sagar", "professional packing sagar", "packing materials sagar", "house packing service"],
  },
  {
    slug: "transport-in-sagar",
    kind: "service",
    label: "Transport in Sagar",
    title: "Transport Services in Sagar, MP – Goods & Truck Transport | Shyam",
    h1: "Transport Services in Sagar",
    description:
      "Goods transport in Sagar, MP by Shyam Packers and Movers – local and intercity transport for household goods, shop stock and commercial loads. Call 92432 00382.",
    icon: "bus",
    image: "/images/express-packers-movers-india.jpg",
    imageAlt: "Goods transport service in Sagar by Shyam Packers and Movers – express local and intercity transport for household and commercial goods",
    intro: [
      `${site.name} provides dependable transport in Sagar for household goods, shop and business stock, furniture and bulky items — within the city, to nearby towns and on long routes across India.`,
      "Tell us what you are moving and where it has to go. We suggest the right vehicle, give you a clear price and deliver safely and on schedule.",
    ],
    highlights: [
      { title: "Local & intercity", text: "Same-city moves, nearby towns and long-distance goods transport." },
      { title: "Household & commercial", text: "Home goods, furniture, shop stock, equipment and more." },
      { title: "Loading included on request", text: "We can send trained staff for loading and unloading along with the vehicle." },
      { title: "Safe handling", text: "Goods secured and handled carefully from pickup to delivery." },
      { title: "On-time planning", text: "We plan pickup and delivery windows with you in advance." },
      { title: "Fair, clear pricing", text: "Quote confirmed before the vehicle leaves." },
    ],
    faqs: [
      {
        q: "Do you offer goods transport in Sagar for businesses?",
        a: "Yes. We move shop stock, office material and commercial goods, as one-off trips or on a recurring basis — call us to discuss your requirement.",
      },
      {
        q: "Can you transport goods from Sagar to other cities?",
        a: "Yes. We handle intercity and pan-India transport, including routes such as Bhopal, Vidisha, Damoh and beyond.",
      },
      ...commonFaqs("transport in Sagar"),
    ],
    keywords: ["transport in sagar", "goods transport sagar", "transport service sagar mp"],
  },
  {
    slug: "truck-rental-in-sagar",
    kind: "service",
    label: "Truck Rental in Sagar",
    title: "Truck Rental Services in Sagar, MP – Mini to Large Trucks | Shyam",
    h1: "Truck Rental Services in Sagar",
    description:
      "Rent a truck in Sagar, MP – dedicated and shared truck rental for house shifting and goods transport, local and all India. Shyam Packers and Movers: 92432 00382.",
    icon: "truck",
    image: "/images/international-moving-services.jpg",
    imageAlt: "Truck rental service in Sagar by Shyam Packers and Movers – dedicated and shared trucks for house shifting and goods transport",
    intro: [
      `Need a truck on rent in Sagar? ${site.name} offers dedicated and shared truck rental for house shifting, shop relocation and goods transport — local runs and long-distance trips.`,
      "Choose a full dedicated vehicle for complete privacy and flexibility, or share space to save cost on smaller loads. We help you pick what fits.",
    ],
    highlights: [
      { title: "Dedicated truck", text: "A full vehicle for your goods only — flexible timing and direct delivery." },
      { title: "Shared / part load", text: "Pay only for the space you need on smaller loads." },
      { title: "Multiple vehicle sizes", text: "Options for small flats to full-house and commercial loads." },
      { title: "Driver + labour option", text: "Add trained loading and unloading staff when you need them." },
      { title: "Local & all-India", text: "Within Sagar, nearby towns and long routes." },
      { title: "Quick booking", text: "Call and confirm — we arrange the vehicle for your date." },
    ],
    faqs: [
      {
        q: "What is the difference between dedicated and shared truck rental?",
        a: "A dedicated truck carries only your goods and runs on your schedule. A shared truck carries part loads from more than one customer, which can reduce cost for smaller shipments.",
      },
      {
        q: "Can I get labour along with the truck?",
        a: "Yes. We can send trained staff for loading and unloading together with the vehicle.",
      },
      ...commonFaqs("truck rental in Sagar"),
    ],
    keywords: ["truck rental services in sagar", "truck on rent sagar", "tempo rental sagar", "truck booking sagar"],
  },
  {
    slug: "house-shifting-in-sagar",
    kind: "service",
    label: "House Shifting in Sagar",
    title: "House Shifting Services in Sagar, MP | Shyam Packers & Movers",
    h1: "House Shifting Services in Sagar",
    description:
      "Safe house shifting in Sagar, MP – packing, loading, transport and unloading for 1BHK to large homes. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "home",
    image: "/images/house-shifting-professional.jpg",
    imageAlt: "Safe house shifting service in Sagar by Shyam Packers and Movers – complete packing, loading and transport for homes of all sizes",
    intro: [
      `Moving home should not be stressful. ${site.name} takes care of your house shifting in Sagar from start to finish — packing every room, loading carefully, transporting safely and unloading at your new home.`,
      "We handle furniture, beds, sofas, appliances, kitchen items, clothes and fragile decor with proper packing material, so your belongings arrive in the condition they left.",
    ],
    highlights: [
      { title: "Room-by-room packing", text: "Kitchen, bedrooms, living room and more packed with suitable material." },
      { title: "Furniture & appliances", text: "Careful handling of beds, wardrobes, sofas, fridge, TV and washing machine." },
      { title: "Fragile items", text: "Extra protection for glassware, decor and electronics." },
      { title: "Unloading & arranging", text: "We unload and place items so you can settle in quickly." },
      { title: "Any home size", text: "From a single room or 1BHK to a large house." },
      { title: "Within Sagar or beyond", text: "Local shifting and long-distance home relocation." },
    ],
    faqs: [
      {
        q: "How far in advance should I book house shifting?",
        a: "The earlier the better, especially around month-ends and festival periods. Short-notice moves are possible too — just call and ask.",
      },
      {
        q: "Do you dismantle and refit furniture?",
        a: "Yes, we can dismantle large furniture before moving and help set it up again at your new place. Mention it when you call.",
      },
      ...commonFaqs("house shifting in Sagar"),
    ],
    keywords: ["house shifting in sagar", "home shifting sagar", "household shifting sagar mp", "local shifting sagar"],
  },
  {
    slug: "office-shifting-in-sagar",
    kind: "service",
    label: "Office Shifting in Sagar",
    title: "Office & Shop Shifting in Sagar, MP | Shyam Packers & Movers",
    h1: "Office & Shop Shifting in Sagar",
    description:
      "Office, shop and commercial shifting in Sagar, MP – planned packing and moving with minimum downtime. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "building",
    image: "/images/office-commercial-moving.jpg",
    imageAlt: "Office and shop shifting service in Sagar by Shyam Packers and Movers – planned commercial relocation with minimal business downtime",
    intro: [
      `Moving your office, clinic or shop? ${site.name} plans commercial relocation in Sagar so your business is back up quickly. We pack and move desks, chairs, cabinets, computers, files and stock with care.`,
      "Share your timing and layout needs and we will plan the move to keep disruption low — including after-hours or weekend shifting where possible.",
    ],
    highlights: [
      { title: "Minimal downtime", text: "Planned packing, moving and unloading to get you working again fast." },
      { title: "IT & electronics", text: "Careful handling of computers, printers and equipment." },
      { title: "Files & records", text: "Organised packing so documents stay in order." },
      { title: "Shop & stock shifting", text: "Retail stock, racks and display material moved safely." },
      { title: "Flexible timing", text: "Discuss early-morning, evening or holiday slots with us." },
      { title: "Local & intercity", text: "Within Sagar or to another city." },
    ],
    faqs: [
      {
        q: "Can you shift our office outside working hours?",
        a: "Often yes. Call us with your preferred timing and we will confirm what is possible.",
      },
      {
        q: "Do you move shops and godowns too?",
        a: "Yes — shops, showrooms, godowns and clinics, with trained staff and suitable vehicles.",
      },
      ...commonFaqs("office shifting in Sagar"),
    ],
    keywords: ["office shifting in sagar", "shop shifting sagar", "commercial shifting sagar", "business relocation sagar"],
  },
  {
    slug: "packing-loading-unloading-in-sagar",
    kind: "service",
    label: "Packing, Loading & Unloading",
    title: "Packing, Loading & Unloading Services in Sagar | Shyam Packers",
    h1: "Packing, Loading & Unloading Services in Sagar",
    description:
      "Professional packing, loading and unloading in Sagar, MP – trained labour and quality packing material. Shyam Packers and Movers, Makronia. Call 92432 00382.",
    icon: "package",
    image: "/images/furniture-packing-protection.jpg",
    imageAlt: "Packing, loading and unpacking service in Sagar by Shyam Packers and Movers – professional furniture wrapping and safe loading",
    intro: [
      `Already have a vehicle? ${site.name} can provide just the packing, loading and unloading — trained staff and proper packing material, so your goods are handled safely at both ends.`,
      "Good packing is the difference between a smooth move and broken belongings. We use suitable material for each item and load in a way that keeps everything secure in transit.",
    ],
    highlights: [
      { title: "Quality packing material", text: "Cartons, wrapping and cushioning suited to each type of item." },
      { title: "Trained labour", text: "Staff experienced with heavy and delicate goods." },
      { title: "Secure loading", text: "Goods arranged and secured to reduce movement in transit." },
      { title: "Careful unloading", text: "Items brought in and placed where you want them." },
      { title: "Labour-only option", text: "Hire staff alone if you have your own vehicle." },
      { title: "Home, shop or godown", text: "For any kind of goods and location in Sagar." },
    ],
    faqs: [
      {
        q: "Can I hire only labour for loading and unloading?",
        a: "Yes. We can provide trained loading and unloading staff on their own.",
      },
      {
        q: "What do you use for packing fragile items?",
        a: "Suitable cushioning and wrapping material, with extra care for glass, electronics and decor.",
      },
      ...commonFaqs("packing and loading in Sagar"),
    ],
    keywords: ["packing and loading sagar", "loading unloading sagar", "labour for shifting sagar", "packing services sagar"],
  },
  {
    slug: "long-distance-packers-and-movers-from-sagar",
    kind: "service",
    label: "Pan-India Relocation",
    title: "Long Distance Packers and Movers from Sagar – All India | Shyam",
    h1: "Long Distance & Pan-India Packers and Movers from Sagar",
    description:
      "Long-distance relocation from Sagar to any city in India – packing, transport and unloading by Shyam Packers and Movers, Makronia. Call 92432 00382 for a quote.",
    icon: "route",
    image: "/images/domestic-relocation-service-india.jpg",
    imageAlt: "Long distance and pan-India relocation service from Sagar by Shyam Packers and Movers – secure packing and door-to-door delivery across India",
    intro: [
      `Relocating out of Sagar? ${site.name} moves households and businesses from Sagar to cities across India — with careful packing, secure loading and planned delivery.`,
      "Share your destination and moving date and we will give you a clear quote. We coordinate the route so your goods reach the new address safely.",
    ],
    highlights: [
      { title: "Door-to-door service", text: "Pickup from your Sagar address and delivery to your new doorstep." },
      { title: "Secure packing", text: "Packing designed to handle long journeys." },
      { title: "Planned schedule", text: "We discuss transit time and delivery plan before you book." },
      { title: "Popular routes", text: "Bhopal, Indore, Jabalpur, Delhi, Mumbai and more — ask about yours." },
      { title: "Home & business", text: "Household relocation and commercial goods." },
      { title: "One point of contact", text: "Call us directly for updates during the move." },
    ],
    faqs: [
      {
        q: "Do you do packers and movers service from Sagar to other states?",
        a: "Yes. We handle long-distance relocation from Sagar across India. Call us with your destination for a quote.",
      },
      {
        q: "How is long distance moving priced?",
        a: "It depends mainly on distance, volume of goods and services needed (packing, loading, unloading). We give you a clear price after understanding your requirement.",
      },
      ...commonFaqs("long distance moving from Sagar"),
    ],
    keywords: ["long distance packers and movers sagar", "sagar to bhopal transport", "pan india relocation sagar", "intercity moving sagar"],
  },
];

/* ---------- Area pages ---------- */
type AreaKind = "local" | "nearby" | "route";
const areaList: { name: string; slug: string; kind: AreaKind; note: string }[] = [
  { name: "Makronia", slug: "makronia", kind: "local", note: `Our office is right here at ${site.address.street}, Makronia, so pickups in Makronia are quick and convenient.` },
  { name: "Rajakhedi", slug: "rajakhedi", kind: "local", note: "We regularly serve Rajakhedi and neighbouring colonies around Sagar." },
  { name: "Bina", slug: "bina", kind: "nearby", note: "We cover shifting and goods transport between Sagar and Bina, as well as moves within Bina." },
  { name: "Khurai", slug: "khurai", kind: "nearby", note: "We serve Khurai for house shifting, shop shifting and goods transport." },
  { name: "Rehli", slug: "rehli", kind: "nearby", note: "We cover Rehli for local shifting and moves to and from Sagar." },
  { name: "Damoh", slug: "damoh", kind: "nearby", note: "We run regular goods and household transport between Sagar and Damoh." },
  { name: "Bhopal", slug: "bhopal", kind: "route", note: "Sagar–Bhopal is one of our key routes for house shifting, office relocation and goods transport." },
  { name: "Vidisha", slug: "vidisha", kind: "route", note: "We handle household and commercial moves between Sagar and Vidisha." },
];

const areas: PageDef[] = areaList.map((a) => {
  const route = a.kind === "route";
  const where = route ? `Sagar to ${a.name}` : a.name;
  return {
    slug: `packers-and-movers-in-${a.slug}`,
    kind: "area",
    label: `Packers and Movers in ${a.name}`,
    title: `Packers and Movers in ${a.name} | House Shifting & Transport – Shyam`,
    h1: `Packers and Movers in ${a.name}`,
    description: `Shyam Packers and Movers – house shifting, packing, loading, transport and truck rental ${
      route ? `between Sagar and ${a.name}` : `in ${a.name}`
    }. Call 92432 00382 for a free quote.`,
    icon: "pin",
    image: "/images/packers-movers-local-area.jpg",
    imageAlt: `Packers and movers in ${a.name} by Shyam Packers and Movers, Makronia Sagar – house shifting, packing and transport service`,
    intro: [
      `Need packers and movers in ${a.name}? ${site.name}, based in ${site.address.locality}, ${site.address.city}, offers house shifting, office shifting, packing, loading, unloading and truck rental ${
        route ? `for moves between Sagar and ${a.name}` : `in ${a.name} and around`
      }.`,
      a.note,
    ],
    highlights: [
      { title: `House shifting – ${where}`, text: "Complete packing, loading, transport and unloading for your home." },
      { title: "Office & shop shifting", text: "Planned commercial moves with minimal downtime." },
      { title: "Truck rental", text: "Dedicated or shared trucks for your goods." },
      { title: "Trained staff", text: "Careful handling of furniture, appliances and fragile items." },
      { title: "Clear quote", text: "Cost explained and confirmed before we load." },
      { title: "Call to book", text: `${site.phones[0].display} · ${site.phones[1].display}` },
    ],
    faqs: [
      {
        q: `Do you provide packers and movers service in ${a.name}?`,
        a: `Yes. ${site.name} serves ${a.name} for house shifting, office shifting, goods transport and truck rental. Call us with your date and address.`,
      },
      {
        q: `Can you move goods ${route ? `from Sagar to ${a.name}` : `to or from ${a.name}`}?`,
        a: `Yes, we handle moves ${route ? `between Sagar and ${a.name}` : `to and from ${a.name}, including to Sagar city and other cities in India`}.`,
      },
      ...commonFaqs(`moving in ${a.name}`),
    ],
    keywords: [`packers and movers in ${a.name.toLowerCase()}`, `house shifting ${a.name.toLowerCase()}`, `transport ${a.name.toLowerCase()}`, `truck rental ${a.name.toLowerCase()}`],
  };
});

export const servicePages = services;
export const areaPages = areas;
export const allPages: PageDef[] = [...services, ...areas];
export const getPage = (slug: string) => allPages.find((p) => p.slug === slug);

export const homeFaqs: Faq[] = [
  {
    q: "Which is the best packers and movers in Sagar?",
    a: `${site.name}, based in Makronia, Sagar, offers safe packing, trained handling staff, clear pricing and on-time delivery. Call ${site.phones[0].display} for a quote.`,
  },
  {
    q: "Do you provide transport and truck rental in Sagar?",
    a: "Yes. We offer goods transport and dedicated or shared truck rental within Sagar, to nearby towns and across India.",
  },
  {
    q: "Which areas do you serve?",
    a: "Sagar city, Makronia, Rajakhedi, Bina, Khurai, Rehli, Damoh, Bhopal, Vidisha and all-India routes.",
  },
  {
    q: "How can I book packers and movers in Sagar?",
    a: `Just call ${site.phones[0].display} or ${site.phones[1].display}, or WhatsApp us. We confirm the quote and your moving date on the call.`,
  },
  {
    q: "Are there hidden charges?",
    a: "No. We confirm the full cost before loading begins.",
  },
];

export const steps = [
  { title: "Call or WhatsApp", text: "Tell us what you are moving, from where and to where." },
  { title: "Get a clear quote", text: "We explain the cost and confirm your date." },
  { title: "Pack & load", text: "Trained staff pack and load your goods safely." },
  { title: "Deliver & unload", text: "We transport, unload and place everything at your new address." },
];
