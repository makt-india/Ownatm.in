import ServiceContent from "./ServiceContent";

export const metadata = {
  metadataBase: new URL("https://ownatm.in"),

  title:
    "ATM Franchise Services India | Installation & Operator Coordination – OwnATM",

  description:
    "End-to-end ATM franchise facilitation services in India including documentation, feasibility verification, operator coordination, installation and long-term operational support.",

  keywords: [
    "ATM franchise services India",
    "ATM installation support India",
    "Hitachi MoneySpot ATM franchise",
    "EPS BANCS ATM franchise",
    "Findi Indicash ATM franchise",
    "India1 ATM franchise"
  ],

  alternates: {
    canonical: "https://ownatm.in/service",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "ATM Franchise Services India | Installation & Coordination",
    description:
      "Professional ATM franchise documentation, site feasibility and deployment coordination services across India.",
    url: "https://ownatm.in/service",
    siteName: "OwnATM",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ownatm.in/images/og/atm-services.webp",
        width: 1200,
        height: 630,
        alt: "ATM Franchise Services India – Installation & Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ATM Franchise Services India | OwnATM",
    description:
      "Complete ATM franchise documentation, installation and lifetime coordination support.",
    images: [
      "https://ownatm.in/images/og/atm-services.webp"
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://ownatm.in/service#webpage",
      "url": "https://ownatm.in/service",
      "name": "ATM Franchise Services India",
      "isPartOf": {
        "@id": "https://ownatm.in/#website"
      },
      "about": {
        "@id": "https://ownatm.in/service#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://ownatm.in/service#service",
      "name": "ATM Franchise Installation & Coordination",
      "description":
        "Comprehensive ATM franchise facilitation including operator coordination, documentation processing, site feasibility verification and deployment support across India.",
      "provider": {
        "@id": "https://ownatm.in/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "ATM Franchise Facilitation Service",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ATM Franchise Operator Options",
        "itemListElement": [
          {
            "@type": "Offer",
            "url": "https://ownatm.in/hitachi-atm-franchise",
            "itemOffered": {
              "@type": "Service",
              "name": "Hitachi MoneySpot ATM Franchise"
            }
          },
          {
            "@type": "Offer",
            "url": "https://ownatm.in/eps-atm-franchise",
            "itemOffered": {
              "@type": "Service",
              "name": "EPS BANCS ATM Franchise"
            }
          },
          {
            "@type": "Offer",
            "url": "https://ownatm.in/findi-atm-franchise",
            "itemOffered": {
              "@type": "Service",
              "name": "Findi / Indicash ATM Franchise"
            }
          },
          {
            "@type": "Offer",
            "url": "https://ownatm.in/india1-atm-franchise",
            "itemOffered": {
              "@type": "Service",
              "name": "India1 ATM Franchise"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://ownatm.in/service#breadcrumb",
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
          "name": "Services",
          "item": "https://ownatm.in/service"
        }
      ]
    }
  ]
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceContent />
    </>
  );
}