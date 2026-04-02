import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import KeyPartners from "./components/KeyPartners";
import ClientWrapper from "./components/ClientWrapper";

// Loading skeleton for better UX
const LoadingSkeleton = ({ height }) => (
  <section className={`w-full ${height} bg-slate-50 flex items-center justify-center p-8`}>
    <div className="flex flex-col items-center gap-6">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
      <h3 className="text-lg font-semibold text-slate-700 animate-pulse">
        Loading ATM Franchise Options...
      </h3>
      <p className="text-sm text-slate-500">EPS, Hitachi, Findi, India1 partners</p>
    </div>
  </section>
);

const ATMOpportunity = dynamic(() => import("./components/ATMOpportunity"), {
  loading: () => <LoadingSkeleton height="h-[520px]" />,
});
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <LoadingSkeleton height="h-[420px]" />,
});
const CTASection = dynamic(() => import("./components/CTASection"), {
  loading: () => <LoadingSkeleton height="h-[280px]" />,
});

// Homepage-specific structured data (page-level, not layout-level)
const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ownatm.in/#webpage",
    "url": "https://ownatm.in/",
    "name": "ATM Franchise India 2026 – Investment ₹2–5L & Profit Guide",
    "isPartOf": { "@id": "https://ownatm.in/#website" },
    "about": { "@id": "https://ownatm.in/#service" },
    "datePublished": "2026-01-01",
    "dateModified": "2026-04-01",
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "ReadAction",
      "target": "https://ownatm.in/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://ownatm.in/#article",
    "headline": "ATM Franchise India 2026 – Complete Cost, Profit & Apply Online Guide",
    "description": "Complete guide explaining ATM franchise investment cost, commission structure and realistic income expectations in India 2026.",
    "author": {
      "@type": "Organization",
      "name": "OwnATM Editorial Team",
      "@id": "https://ownatm.in/#organization"
    },
    "publisher": { "@id": "https://ownatm.in/#organization" },
    "datePublished": "2026-01-01",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": { "@id": "https://ownatm.in/#webpage" },
    "image": {
      "@type": "ImageObject",
      "url": "https://ownatm.in/img/atm-franchise.webp",
      "width": 1200,
      "height": 630
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ownatm.in/#homepage-faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does ATM franchise cost in India in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ATM franchise investment in India typically ranges between ₹2 lakh and ₹5 lakh as security deposit, plus ₹2–6 lakh working capital. Total investment is ₹5–13 lakhs depending on location and operator."
        }
      },
      {
        "@type": "Question",
        "name": "How much monthly income does an ATM franchise generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monthly income depends on transaction volume and location footfall. Urban locations with 100–150 daily transactions may earn ₹20,000–₹50,000 net monthly income after expenses."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best ATM franchise in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best ATM franchise depends on your location. Hitachi MoneySpot is best for metro cities, India1 leads in rural markets, EPS Bancs offers strong tech infrastructure, and Findi (Indicash) is ideal for semi-urban zones."
        }
      },
      {
        "@type": "Question",
        "name": "Is location approval required for ATM installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Location must meet visibility, security, power backup and footfall requirements. Approval process typically takes 2–3 weeks from document submission to go-live."
        }
      }
    ]
  }
];

export default function HomePage() {
  return (
    <>
      {/* Homepage-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <ServicesOverview />
      <KeyPartners />
      <ATMOpportunity />
      <Testimonials />
      <CTASection />
      {/* This wrapper handles browser-specific logic (like the Profit Calculator) */}
      <ClientWrapper />
    </>
  );
}