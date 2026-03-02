import AboutContent from "./AboutContent";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute:
      "About OwnATM | ATM Franchise Facilitation & Compliance Platform India",
  },

  description:
    "OwnATM is an ATM franchise facilitation and coordination platform assisting entrepreneurs with compliant onboarding under RBI-authorized White Label ATM operators including EPS, Hitachi Payment Services, Findi and India1.",

  keywords: [
    "OwnATM India",
    "ATM franchise facilitation platform",
    "White Label ATM onboarding India",
    "ATM franchise compliance support",
    "ATM franchise coordination company India",
  ],

  alternates: {
    canonical: "https://ownatm.in/aboutus",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ownatm.in/aboutus",
    siteName: "OwnATM",
    title:
      "About OwnATM – ATM Franchise Facilitation Platform India",
    description:
      "Learn how OwnATM assists with ATM franchise onboarding, documentation coordination and operator alignment across India.",
    images: [
      {
        url: "https://ownatm.in/img/about.webp",
        width: 1200,
        height: 630,
        alt: "OwnATM Franchise Facilitation Platform India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About OwnATM – ATM Franchise Facilitation India",
    description:
      "Coordination platform supporting compliant ATM franchise onboarding across India.",
    images: ["https://ownatm.in/img/about.webp"],
  },
};
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://ownatm.in/#organization",
      "name": "OwnATM",
      "url": "https://ownatm.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ownatm.in/img/logo-2.webp"
      },
      "description":
        "OwnATM is an ATM franchise facilitation and coordination platform supporting entrepreneurs with compliant onboarding under RBI-authorized White Label ATM operators.",
      "foundingDate": "2020",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8883335553",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/ownatm",
        "https://www.instagram.com/ownatm.in",
        "https://www.linkedin.com/company/ownatm"
      ]
    },

    {
      "@type": "AboutPage",
      "@id": "https://ownatm.in/aboutus/#aboutpage",
      "url": "https://ownatm.in/aboutus",
      "name": "About OwnATM",
      "isPartOf": {
        "@id": "https://ownatm.in/#website"
      },
      "about": {
        "@id": "https://ownatm.in/#organization"
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://ownatm.in/#website",
      "url": "https://ownatm.in/",
      "name": "OwnATM",
      "publisher": {
        "@id": "https://ownatm.in/#organization"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://ownatm.in/aboutus/#breadcrumb",
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
          "name": "About Us",
          "item": "https://ownatm.in/aboutus"
        }
      ]
    }
  ]
};// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function AboutUsPage() {
  return (
    <>
      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* PAGE CONTENT */}
      <AboutContent />
    </>
  );
}
