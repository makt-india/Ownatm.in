import Link from "next/link";
import { ArrowRight, Building2, Globe, Banknote, MapPin } from "lucide-react";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute:
      "ATM Franchise in India (2025 Guide) – Compare EPS, Hitachi, Findi & India1 | OwnATM Franchise India",
  },

  description:
    "Compare the best ATM franchise providers in India including EPS, Hitachi MoneySpot, Findi (Indicash) and India1. Get updated cost, requirements, eligibility, documents, installation process and monthly earnings explained clearly.",

  // Optional – kept minimal
  keywords: [
    "ATM franchise India",
    "ATM franchise comparison",
    "best ATM franchise",
    "white label ATM franchise",
  ],

  alternates: {
    canonical: "https://ownatm.in/atm-franchise",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ownatm.in/atm-franchise",
    siteName: "OwnATM Franchise India",
    title:
      "ATM Franchise in India – Compare EPS, Hitachi, Findi & India1",
    description:
      "Side-by-side comparison of top ATM franchise providers in India. Cost, eligibility, infrastructure, earnings and requirements explained.",
    images: [
      {
        url: "https://ownatm.in/img/og/atm-franchise.webp",
        width: 1200,
        height: 630,
        alt: "ATM Franchise Comparison in India – EPS, Hitachi, Findi, India1",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ATM Franchise in India – EPS, Hitachi, Findi, India1 Comparison",
    description:
      "Compare leading ATM franchise options in India with transparent cost, requirements, and earnings.",
    images: ["https://ownatm.in/img/og/atm-franchise.webp"],
    creator: "@OwnATMIndia",
  },
};

// --------------------------------------
// SCHEMA GENERATION (JSON-LD)
// --------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ----------------------------
    // ITEM LIST (ATM FRANCHISE PROVIDERS)
    // ----------------------------
    {
      "@type": "ItemList",
      "@id": "https://ownatm.in/atm-franchise#list",
      "url": "https://ownatm.in/atm-franchise",
      "name": "ATM Franchise Providers in India",
      "description":
        "Comparison list of leading ATM franchise providers in India including EPS, Hitachi MoneySpot, Findi, and India1.",
      "numberOfItems": 4,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ownatm.in/atm-franchise"
      },
      "publisher": {
        "@type": "Organization",
        "name": "OwnATM Franchise India",
        "url": "https://ownatm.in"
      },
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "EPS ATM Franchise",
          "url": "https://ownatm.in/atm-franchise/eps",
          "item": {
            "@type": "Service",
            "name": "EPS ATM Franchise",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hitachi MoneySpot ATM Franchise",
          "url": "https://ownatm.in/atm-franchise/hitachi",
          "item": {
            "@type": "Service",
            "name": "Hitachi MoneySpot ATM Franchise",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Findi ATM Franchise",
          "url": "https://ownatm.in/atm-franchise/findi",
          "item": {
            "@type": "Service",
            "name": "Findi ATM Franchise",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "India1 ATM Franchise",
          "url": "https://ownatm.in/atm-franchise/india1",
          "item": {
            "@type": "Service",
            "name": "India1 ATM Franchise",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          }
        }
      ]
    },

    // ----------------------------
    // BREADCRUMB
    // ----------------------------
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ownatm.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ATM Franchise",
          "item": "https://ownatm.in/atm-franchise"
        }
      ]
    }
  ]
};

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function ATMFranchisePage() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Inject Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            ATM Franchise <span className="text-[#4F293D]">Solutions</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Compare the most trusted white-label ATM providers in India –{" "}
            <span className="font-semibold text-slate-800">EPS, Hitachi, Findi, and India1</span>. 
            Choose the best franchise option for your location and investment budget.
          </p>
        </div>

        {/* Franchise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* EPS */}
          <Link
            href="/atm-franchise/eps"
            className="group relative bg-white p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
              EPS ATM
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              High uptime, strong backend support, popular across metros & towns.
            </p>
            <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
              View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Hitachi */}
          <Link
            href="/atm-franchise/hitachi"
            className="group relative bg-white p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
              <Globe className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
              Hitachi ATM
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              One of India's leading ATM operators. Reliable, secure, and widely used.
            </p>
            <span className="inline-flex items-center text-red-600 font-semibold text-sm">
              View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Findi */}
          <Link
            href="/atm-franchise/findi"
            className="group relative bg-white p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
              <Banknote className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
              Findi ATM
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Fast settlements, modern tech, strong presence in growing markets.
            </p>
            <span className="inline-flex items-center text-purple-600 font-semibold text-sm">
              View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* India1 */}
          <Link
            href="/atm-franchise/india1"
            className="group relative bg-white p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
              India1 ATM
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Best for rural & semi-urban areas. High demand and stable income.
            </p>
            <span className="inline-flex items-center text-emerald-600 font-semibold text-sm">
              View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Not sure which franchise to choose?
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The best ATM brand depends on your location, footfall, and installation
            type. <strong>EPS</strong> and <strong>Hitachi</strong> work great in cities, while <strong>India1</strong> performs
            exceptionally well in rural and semi-urban regions.
          </p>

          <Link
            href="/become-franchise"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4F293D] text-white rounded-xl font-bold hover:bg-[#6B4E5A] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#4F293D]/20"
          >
            Apply for Franchise Now
          </Link>
        </div>

      </div>
    </section>
  );
}