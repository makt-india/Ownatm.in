import HitachiContent from "./HitachiContent";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute:
      "Hitachi ATM Franchise 2025 – Cost, Profit, Eligibility & Apply Online | OwnATM India",
  },

  description:
    "Hitachi MoneySpot ATM Franchise complete 2025 guide. Check investment cost (₹2–5 Lakhs), eligibility criteria, infrastructure requirements, commission per transaction, monthly income potential and step-by-step application process in India.",

  keywords: [
    "Hitachi ATM franchise cost",
    "Hitachi MoneySpot ATM franchise 2025",
    "Hitachi ATM monthly income",
    "Hitachi ATM franchise apply online",
    "white label ATM franchise India",
  ],

  alternates: {
    canonical: "https://ownatm.in/atm-franchise/hitachi",
  },

  openGraph: {
    type: "website",
    title:
      "Hitachi ATM Franchise 2025 – Cost & Profit",
    description:
      "Detailed guide to Hitachi MoneySpot ATM Franchise including investment, commission model and earnings potential.",
    url: "https://ownatm.in/atm-franchise/hitachi",
    siteName: "OwnATM Franchise India",
    locale: "en_IN",
    images: [
      {
        url: "https://ownatm.in/img/og/hitachi.webp",
        width: 1200,
        height: 630,
        alt: "Hitachi MoneySpot ATM Franchise – Cost & Profit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hitachi ATM Franchise – Cost & Earnings (2025)",
    description:
      "Investment, eligibility and monthly profit potential explained.",
    images: ["https://ownatm.in/img/og/hitachi.webp"],
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
      "@id": "https://ownatm.in/atm-franchise/hitachi#service",
      "name": "Hitachi MoneySpot ATM Franchise",
      "url": "https://ownatm.in/atm-franchise/hitachi",
      "description":
        "Facilitation and onboarding support for entrepreneurs applying for Hitachi MoneySpot ATM Franchise in India including documentation guidance, site verification and installation coordination.",
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
      "@id": "https://ownatm.in/atm-franchise/hitachi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the investment required for Hitachi ATM Franchise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The investment range for Hitachi MoneySpot ATM Franchise generally varies between ₹2 Lakhs to ₹5 Lakhs depending on location type, infrastructure readiness and site approval."
          }
        },
        {
          "@type": "Question",
          "name": "How much monthly income can be earned from Hitachi ATM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly income depends on daily transaction volume, commission per withdrawal and operating expenses. High footfall commercial locations typically generate stronger recurring income."
          }
        },
        {
          "@type": "Question",
          "name": "Is Hitachi ATM franchise RBI compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hitachi Payment Services operates under regulatory guidelines for ATM deployment in India. Franchise agreements are executed under the operator’s compliance framework."
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
          "name": "Hitachi ATM Franchise",
          "item": "https://ownatm.in/atm-franchise/hitachi"
        }
      ]
    }
  ]
};

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function HitachiPage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <HitachiContent />
    </>
  );
}
