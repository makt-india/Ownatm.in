import FindiContent from "./ContentFindi";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute:
      "Findi (Indicash) ATM Franchise 2025 – Cost, Profit, Eligibility & Apply Online | OwnATM India",
  },

  description:
    "Findi (Indicash) ATM Franchise complete 2025 guide. Check investment cost (₹2–5 Lakhs), rural location advantages, eligibility criteria, commission per transaction, monthly income potential and step-by-step application process in India.",

  keywords: [
    "Findi ATM franchise cost",
    "Indicash ATM franchise 2025",
    "Findi ATM monthly income",
    "Indicash rural ATM franchise",
    "white label ATM franchise India",
  ],

  alternates: {
    canonical: "https://ownatm.in/atm-franchise/findi",
  },

  openGraph: {
    type: "website",
    title:
      "Findi (Indicash) ATM Franchise 2025 – Cost & Earnings",
    description:
      "Detailed guide to Findi (Indicash) ATM Franchise including investment, rural coverage benefits, commission model and income potential.",
    url: "https://ownatm.in/atm-franchise/findi",
    siteName: "OwnATM Franchise India",
    locale: "en_IN",
    images: [
      {
        url: "https://ownatm.in/img/og/findi.webp",
        width: 1200,
        height: 630,
        alt: "Findi (Indicash) ATM Franchise – Cost & Profit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Findi (Indicash) ATM Franchise – Cost & Profit (2025)",
    description:
      "Investment, eligibility and earnings potential explained.",
    images: ["https://ownatm.in/img/og/findi.webp"],
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
      "@id": "https://ownatm.in/atm-franchise/findi#service",
      "name": "Findi (Indicash) ATM Franchise",
      "url": "https://ownatm.in/atm-franchise/findi",
      "description":
        "Facilitation and onboarding support for entrepreneurs applying for Findi (Indicash) ATM Franchise in India including documentation guidance, site verification and installation coordination.",
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
      "@id": "https://ownatm.in/atm-franchise/findi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the investment required for Findi (Indicash) ATM Franchise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The investment range for Findi (Indicash) ATM Franchise typically varies between ₹2 Lakhs to ₹5 Lakhs depending on location type, infrastructure readiness and site category."
          }
        },
        {
          "@type": "Question",
          "name": "Is Findi (Indicash) suitable for rural locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Findi (formerly Indicash) has strong penetration in Tier-3 to Tier-6 towns, making it suitable for semi-urban and rural ATM deployment opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "How much monthly income can be earned from Findi ATM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly income depends on transaction volume, commission per withdrawal and operational costs. Higher footfall locations may generate stable recurring income."
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
          "name": "Findi ATM Franchise",
          "item": "https://ownatm.in/atm-franchise/findi"
        }
      ]
    }
  ]
};

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function FindiPage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <FindiContent />
    </>
  );
}
