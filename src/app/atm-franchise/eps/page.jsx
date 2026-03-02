import EpsContent from "./EPSContent";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute:
      "EPS ATM Franchise 2026 – Cost, Profit, Requirements & Apply Online | OwnATM India",
  },

  description:
    "EPS ATM Franchise (EPS BANCS) complete 2025 guide. Check investment cost (₹2–5 Lakhs), eligibility, space requirements, commission per transaction, monthly income potential and step-by-step application process in India.",

  keywords: [
    "EPS ATM franchise cost",
    "EPS BANCS ATM franchise",
    "EPS ATM franchise apply online",
    "EPS ATM monthly income",
    "white label ATM franchise India",
  ],

  alternates: {
    canonical: "https://ownatm.in/atm-franchise/eps",
  },

  openGraph: {
    type: "website",
    title:
      "EPS ATM Franchise 2026 – Cost, Earnings & Application Process",
    description:
      "Detailed guide to EPS ATM Franchise including investment, commission model, space requirements and income potential.",
    url: "https://ownatm.in/atm-franchise/eps",
    siteName: "OwnATM Franchise India",
    locale: "en_IN",
    images: [
      {
        url: "https://ownatm.in/img/og/eps.webp",
        width: 1200,
        height: 630,
        alt: "EPS ATM Franchise India – Cost & Profit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "EPS ATM Franchise – Cost & Profit (2025)",
    description:
      "EPS ATM franchise investment, eligibility and earnings explained.",
    images: ["https://ownatm.in/img/og/eps.webp"],
    creator: "@OwnATMIndia",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Service",
      "@id": "https://ownatm.in/atm-franchise/eps#service",
      "name": "EPS ATM Franchise (EPS BANCS)",
      "url": "https://ownatm.in/atm-franchise/eps",
      "description":
        "Facilitation and onboarding support for entrepreneurs applying for EPS ATM Franchise in India including documentation guidance, site verification and installation coordination.",
      "provider": {
        "@type": "Organization",
        "name": "OwnATM Franchise India",
        "url": "https://ownatm.in"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },

    {
      "@type": "FAQPage",
      "@id": "https://ownatm.in/atm-franchise/eps#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the investment required for EPS ATM Franchise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The typical investment range for EPS ATM Franchise in India varies between ₹2 Lakhs to ₹5 Lakhs depending on location, category and infrastructure requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How much monthly income can be earned from EPS ATM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly earnings depend on daily transactions, commission per withdrawal and operational expenses. In high footfall locations, franchise partners may generate stable recurring income."
          }
        },
        {
          "@type": "Question",
          "name": "Is EPS ATM franchise RBI approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EPS operates as a White Label ATM service provider under regulatory guidelines. Franchise agreements are executed under the operator’s compliance framework."
          }
        }
      ]
    },

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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "EPS ATM Franchise",
          "item": "https://ownatm.in/atm-franchise/eps"
        }
      ]
    }
  ]
};

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function EpsPage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <EpsContent />
    </>
  );
}
