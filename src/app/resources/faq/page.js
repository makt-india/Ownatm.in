import FAQContent from "./FAQContent";

/* --------------------------------------------------
   1. FAQ DATA (CLEANED – NO MARKDOWN LINKS)
--------------------------------------------------- */

const faqs = [
  {
    id: 1,
    category: "Investment",
    question: "What is the ATM franchise cost and total investment in India?",
    answer:
      "Total investment typically ranges from ₹2 Lakhs to ₹5 Lakhs depending on the operator and location quality. A large portion is refundable security deposit. Investment varies based on infrastructure readiness and compliance requirements."
  },
  {
    id: 2,
    category: "Earnings",
    question: "How much monthly income can an ATM franchise generate?",
    answer:
      "Monthly income depends on transaction volume and location. In active commercial areas, earnings may range between ₹30,000 and ₹50,000 per month. Actual returns depend on withdrawals and non-financial transactions."
  },
  {
    id: 3,
    category: "Requirements",
    question: "What space and power setup is required for an ATM?",
    answer:
      "You need 40–100 sq. ft. of ground-floor commercial space, 1KW single-phase power connection, concrete roof access for VSAT installation and 24/7 public access."
  },
  {
    id: 4,
    category: "Operations",
    question: "Do I need to manage cash loading or maintenance?",
    answer:
      "No. Cash loading is handled by authorized agencies appointed by the operator. Technical maintenance and machine servicing are also managed by the operator."
  },
  {
    id: 5,
    category: "Process",
    question: "How long does installation take?",
    answer:
      "The full process from document verification to go-live usually takes 2–3 weeks, depending on site readiness and operator approval timelines."
  },
  {
    id: 6,
    category: "Contract",
    question: "What is the typical agreement duration?",
    answer:
      "ATM franchise agreements generally range between 5 to 9 years and are renewable based on performance and compliance."
  },
  {
    id: 7,
    category: "Documentation",
    question: "What documents are required?",
    answer:
      "KYC documents (Aadhaar and PAN), bank proof, electricity bill, rent agreement or ownership proof and landlord NOC if applicable."
  },
  {
    id: 8,
    category: "Security",
    question: "Is the ATM machine insured?",
    answer:
      "Yes. ATM machines and cash are insured by the operator. The franchise site owner is typically not liable for machine theft or robbery-related cash loss."
  }
];

/* --------------------------------------------------
   2. METADATA (CLEANED + AUTHORITY SAFE)
--------------------------------------------------- */

export const metadata = {
  metadataBase: new URL("https://ownatm.in"),

  title: {
    absolute:
      "ATM Franchise FAQ – Investment, Earnings & Process | OwnATM",
  },

  description:
    "Clear answers to common ATM franchise questions in India covering investment cost, earnings potential, documents required, installation process and operations.",

  alternates: {
    canonical: "https://ownatm.in/resources/faq",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "ATM Franchise FAQ – Investment & Earnings Explained",
    description:
      "Find answers to ATM franchise cost, monthly income, installation timeline and operational responsibilities.",
    url: "https://ownatm.in/resources/faq",
    siteName: "OwnATM",
    type: "website",
    images: [
      {
        url: "https://ownatm.in/img/og/faq.webp",
        width: 1200,
        height: 630,
        alt: "ATM Franchise FAQ – Investment and Process",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ATM Franchise FAQ | OwnATM",
    description:
      "Trusted answers to ATM franchise questions on cost, income and installation process.",
    images: ["https://ownatm.in/img/og/faq.webp"],
  },
};

/* --------------------------------------------------
   3. STRUCTURED DATA (PROPER ENTITY LINKING)
--------------------------------------------------- */

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "WebPage",
        "@id": "https://ownatm.in/resources/faq#webpage",
        "url": "https://ownatm.in/resources/faq",
        "name": "ATM Franchise FAQ",
        "isPartOf": {
          "@id": "https://ownatm.in/#website"
        },
        "about": {
          "@id": "https://ownatm.in/resources/faq#faq"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://ownatm.in/resources/faq#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://ownatm.in/resources/faq#breadcrumb",
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
            "name": "Resources",
            "item": "https://ownatm.in/resources"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "FAQ",
            "item": "https://ownatm.in/resources/faq"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQContent faqs={faqs} />
    </>
  );
}