import India1Content from "./India1Content";

export const metadata = {
  title:
    "India1 ATM Franchise (Desh Ka ATM) – Cost, Requirements & Earnings (2025) | OwnATM Franchise India",

  description:
    "Complete guide to India1 ATM Franchise (Desh Ka ATM). Learn about cost, eligibility, documents required, infrastructure, installation process and monthly earnings in India.",

  // Optional – keep minimal
  keywords: [
    "India1 ATM franchise",
    "Desh Ka ATM franchise",
    "India1 ATM cost",
    "India1 ATM requirements",
    "ATM franchise India"
  ],

  metadataBase: new URL("https://ownatm.in"),

  alternates: {
    canonical: "https://ownatm.in/atm-franchise/india1"
  },

  openGraph: {
    type: "website",
    title:
      "India1 ATM Franchise – Cost, Earnings & Requirements (2025)",
    description:
      "India1 ATM Franchise (Desh Ka ATM) explained: investment, eligibility, infrastructure and earnings.",
    url: "https://ownatm.in/atm-franchise/india1",
    siteName: "OwnATM Franchise India",
    images: [
      {
        url: "https://ownatm.in/img/og/india1.webp",
        width: 1200,
        height: 630,
        alt: "India1 ATM Franchise – Desh Ka ATM"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "India1 ATM Franchise – Cost & Earnings (2025)",
    description:
      "Detailed India1 ATM Franchise guide covering cost, eligibility, setup and income.",
    images: ["https://ownatm.in/img/og/india1.webp"],
    creator: "@OwnATMIndia"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function Page() {
  return (
    <>
      {/* PRODUCT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "India1 ATM Franchise",
            brand: "India1 Payments",
            image: "https://ownatm.in/img/og/india1.webp",
            description:
              "Start India1 ATM Franchise (Desh Ka ATM). Trusted for rural & semi-urban coverage.",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "40000"
            }
          })
        }}
      />

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ownatm.in" },
              { "@type": "ListItem", position: 2, name: "ATM Franchise", item: "https://ownatm.in/atm-franchise" },
              { "@type": "ListItem", position: 3, name: "India1 ATM Franchise", item: "https://ownatm.in/atm-franchise/india1" }
            ]
          })
        }}
      />

      <India1Content />
    </>
  );
}
