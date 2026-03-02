import BecomeFranchiseContent from "./BecomeFranchiseContent";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute:
      "Apply for ATM Franchise in India – Online Application | OwnATM Franchise India",
  },

  description:
    "Apply online to become an ATM franchise partner in India. OwnATM Franchise India offers guided onboarding, transparent investment, site feasibility checks, installation support, and long-term operational assistance.",

  // Optional – kept minimal
  keywords: [
    "ATM franchise apply online",
    "ATM franchise India",
    "ATM franchise application",
    "white label ATM franchise",
  ],

  alternates: {
    canonical: "https://ownatm.in/become-franchise",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ownatm.in/become-franchise",
    siteName: "OwnATM Franchise India",
    title:
      "Apply for ATM Franchise in India – Online Application",
    description:
      "Start your ATM franchise journey in India. Apply online with expert guidance, installation coordination, and long-term support.",
    images: [
      {
        url: "https://ownatm.in/img/og/atm-franchise.webp",
        width: 1200,
        height: 630,
        alt: "Apply for ATM Franchise in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Apply for ATM Franchise in India | OwnATM Franchise India",
    description:
      "Apply online to start an ATM franchise in India with full onboarding and support.",
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
    // SERVICE (FRANCHISE APPLICATION)
    // ----------------------------
    {
      "@type": "Service",
      "@id": "https://ownatm.in/become-franchise#service",
      "name": "ATM Franchise Application & Onboarding",
      "url": "https://ownatm.in/become-franchise",
      "serviceType": "ATM Franchise Application",
      "description":
        "Apply online to become an ATM franchise partner with EPS, Hitachi MoneySpot, Findi Indicash, or India1. Includes documentation support, site feasibility checks, installation coordination, and onboarding assistance.",
      "provider": {
        "@type": "Organization",
        "name": "OwnATM Franchise India",
        "url": "https://ownatm.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ownatm.in/img/logo-2.webp"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918883335553",
          "contactType": "Customer Support",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ATM Franchise Options",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EPS ATM Franchise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hitachi MoneySpot ATM Franchise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Findi Indicash ATM Franchise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "India1 ATM Franchise"
            }
          }
        ]
      }
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
          "name": "Apply Online",
          "item": "https://ownatm.in/become-franchise"
        }
      ]
    }
  ]
};

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function BecomeFranchisePage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <BecomeFranchiseContent />
    </>
  );
}