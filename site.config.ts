import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Little Miss OCD",
  tagline: "Home organizing, decluttering and cleaning across the GTA.",
  category: "Home organizing and cleaning",
  schemaType: "LocalBusiness",
  area: "GTA, ON",
  siteUrl: "https://little-miss-ocd-ca.vercel.app",

  theme: {
    preset: "salon-chic",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Luxury home care in the GTA",
    headline: "Organize, clean and declutter, across the GTA",
    subhead: "Little Miss OCD is an organizing and cleaning duo serving the GTA. Booking starts with an in-person consultation and a personalized quote. A pre-Christmas offer of 10% off services completed by December 21, 2026, is posted, and gift certificates are available. Send an Instagram message to book.",
    images: [
      { src: "/images/post-9.jpg", alt: "A commercial cleaning of a treatment room by Little Miss OCD", width: 885, height: 1572 },
      { src: "/images/post-5.jpg", alt: "Little Miss OCD organizing a pantry and storage closet", width: 840, height: 1492 },
      { src: "/images/post-1.jpg", alt: "Little Miss OCD cleaning a clinic treatment room", width: 720, height: 1280 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Organize, clean and declutter",
    "Serving the GTA",
    "In-person consultation and a custom quote",
    "10% off services completed by December 21, 2026",
  ],

  about: {
    title: "Welcome to Little Miss OCD",
    body: [
      "Little Miss OCD is an organizing and cleaning duo offering luxury home care and organization across the GTA. Services include home organizing and decluttering, cleaning and home refreshes, closet and storage resets, and commercial cleans. A posted project transformed a family's multipurpose closet, storage space and pantry in one five hour visit.",
      "Booking starts with an in-person consultation, then a custom quote. A pre-Christmas refresh of 10% off any cleaning, organizing or decluttering service completed by December 21, 2026, is posted, and gift certificates are available. Send an Instagram message, or reach out by phone or email, for a personalized quote.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Little Miss OCD organizing a pantry and storage closet", width: 840, height: 1492 },
  },

  menu: {
    label: "Services",
    title: "How we can help",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message for a personalized quote.",
    groups: [
      {
        title: "Homes",
        items: [
          { name: "Home organizing and decluttering" },
          { name: "Cleaning and home refreshes" },
          { name: "Closet, storage and pantry resets", description: "A posted project organized a multipurpose closet, storage space and pantry in one day." },
        ],
      },
      {
        title: "Commercial and gifts",
        items: [
          { name: "Commercial cleans", description: "Including clinic and treatment room cleans, as posted." },
          { name: "Gift certificates", description: "Posted as available for the holidays." },
        ],
      },
    ],
    footnote: "A pre-Christmas offer of 10% off any cleaning, organizing or decluttering service completed by December 21, 2026, is posted. Message HOLIDAY to book a refresh, or GIFT to ask about a gift certificate.",
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-9.jpg", width: 885, height: 1572, alt: "A commercial cleaning of a treatment room by Little Miss OCD", caption: "Commercial cleaning" },
      { src: "/images/post-5.jpg", width: 840, height: 1492, alt: "Little Miss OCD organizing a pantry and storage closet", caption: "A closet and pantry reset", href: "https://www.instagram.com/reel/DfhZpPmRBM7/" },
      { src: "/images/post-1.jpg", width: 720, height: 1280, alt: "Little Miss OCD cleaning a clinic treatment room", caption: "A clinic clean", href: "https://www.instagram.com/reel/DfzTlDHRTku/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1314, alt: "An organized pantry with labelled baskets and jars", caption: "Organized storage", href: "https://www.instagram.com/p/Dfmi9rNkY6V/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1418, alt: "Little Miss OCD holiday special for a pre-Christmas refresh and gift certificates", caption: "Holiday special", href: "https://www.instagram.com/p/DfqZkdORiNO/" },
      { src: "/images/post-6.jpg", width: 640, height: 1136, alt: "Planning boards on laptops for a Little Miss OCD organization project", caption: "Planning a project", href: "https://www.instagram.com/reel/DfVi495xLt2/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "littlemiss.ocd",
    embeds: ["https://www.instagram.com/reel/DfhZpPmRBM7/", "https://www.instagram.com/p/DfqZkdORiNO/", "https://www.instagram.com/reel/Deo3PU9xm1y/"],
  },

  order: {
    label: "How to book",
    title: "Get a personalized quote",
    intro: "Booking starts with an in-person consultation and a custom quote. Send an Instagram message for a personalized quote, or reach out by phone or email. For the posted holiday offer, message HOLIDAY to book a refresh, or GIFT to ask about a gift certificate.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi Little Miss OCD! I would like a quote.\nArea:\nType of space:\nPreferred timing:",
    links: [
      { label: "Book by Instagram DM", href: "https://ig.me/m/littlemiss.ocd" },
      { label: "Email inquiries@littlemissocd.ca", href: "mailto:inquiries@littlemissocd.ca" },
      { label: "Call 437-673-3310", href: "tel:4376733310" },
    ],
    note: "A pre-Christmas offer of 10% off any cleaning, organizing or decluttering service completed by December 21, 2026, is posted. Gift certificates are also available.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram message for a personalized quote, or use the posted phone number or email. Booking starts with an in-person consultation, then a custom quote." },
    { q: "What areas do you serve?", a: "Little Miss OCD serves the GTA." },
    { q: "Is there a holiday offer?", a: "Yes. A posted pre-Christmas offer is 10% off any cleaning, organizing or decluttering service completed by December 21, 2026. Gift certificates are also available." },
    { q: "Do you clean commercial spaces?", a: "Yes. Posted work includes commercial and clinic cleans." },
  ],

  contact: {
    title: "Contact",
    area: "Serving the GTA",
    phone: "437-673-3310",
    email: "inquiries@littlemissocd.ca",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/littlemiss.ocd/" },
    ],
  },

  seo: {
    title: "Little Miss OCD | Home organizing and cleaning in the GTA",
    description: "Organizing, decluttering and cleaning across the GTA, plus commercial cleans. 10% off services completed by December 21, 2026, as posted. Book by Instagram DM, phone or email.",
    keywords: ["Little Miss OCD", "home organizing GTA", "decluttering Toronto", "home cleaning GTA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
