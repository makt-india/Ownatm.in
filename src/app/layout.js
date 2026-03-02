import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingOfferTab from "./components/FloatingOfferTab";

import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// --------------------------------------
// METADATA (FULLY OPTIMIZED FOR SEO)
// --------------------------------------
export const metadata = {
  metadataBase: new URL("https://ownatm.in"),

  title: {
    default:
      "ATM Franchise India 2026 – Investment ₹2–5L, Profit & Apply Online",
    template: "%s | OwnATM",
  },

  description:
    "Start ATM franchise in India with ₹2–5 lakh investment. See real commission structure, monthly income calculation, approval process and how to apply online in 2026.",

  keywords: [
    "ATM Franchise India",
    "ATM Franchise Cost 2026",
    "ATM Business Profit",
    "ATM Machine Franchise Investment",
    "White Label ATM Franchise India",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/img/pwa/logo-3.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/img/pwa/logo-3.png" }],
  },

  alternates: {
    canonical: "https://ownatm.in/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "ATM Franchise India 2026 – ₹2–5L Investment, Commission & Profit Guide",
    description:
      "Detailed ATM franchise guide for India. Investment breakdown, commission model, location approval process and realistic income potential.",
    url: "https://ownatm.in/",
    siteName: "OwnATM",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://ownatm.in/img/atm-franchise.webp",
        width: 1200,
        height: 630,
        alt: "ATM Franchise India ₹2–5 Lakh Investment & Profit Guide 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ATM Franchise India 2026 – Investment ₹2–5L & Profit Guide | OwnATM",
    description:
      "Apply for ATM franchise in India. Understand commission structure, realistic monthly income and full setup process.",
    images: ["https://ownatm.in/img/atm-franchise.webp"],
  },

  authors: [
    {
      name: "OwnATM Editorial Team",
      url: "https://ownatm.in",
    },
  ],

  category: "Business",

  verification: {
    google: "PQQVFGPN8ddSaEwIHeLtIBzKItRpETHP2G3nXdiZWUg",
  },

  manifest: "/manifest.json",
};
export const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ownatm.in/#organization",
    "name": "OwnATM",
    "url": "https://ownatm.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ownatm.in/img/logo-2.webp"
    },
    "email": "support@ownatm.in",
    "telephone": "+91-8883335553",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8883335553",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/ownatm.in",
      "https://www.instagram.com/ownatm.in"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ownatm.in/#website",
    "url": "https://ownatm.in/",
    "name": "OwnATM ATM Franchise India",
    "publisher": {
      "@id": "https://ownatm.in/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ownatm.in/?search={query}",
      "query-input": "required name=query"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ownatm.in/#webpage",
    "url": "https://ownatm.in/",
    "name": "ATM Franchise India 2026 – Investment ₹2–5L & Profit Guide",
    "isPartOf": {
      "@id": "https://ownatm.in/#website"
    },
    "about": {
      "@id": "https://ownatm.in/#service"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://ownatm.in/#article",
    "headline": "ATM Franchise India 2026 – Cost, Profit & Apply Online Guide",
    "description": "Complete guide explaining ATM franchise investment, commission structure and realistic income expectations in India.",
    "author": {
      "@type": "Organization",
      "name": "OwnATM Editorial Team"
    },
    "publisher": {
      "@id": "https://ownatm.in/#organization"
    },
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-02",
    "mainEntityOfPage": {
      "@id": "https://ownatm.in/#webpage"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ownatm.in/#service",
    "name": "ATM Franchise Setup Service",
    "description":
      "Complete ATM franchise setup assistance including location verification, installation coordination and compliance support across India.",
    "provider": {
      "@id": "https://ownatm.in/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ownatm.in/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does ATM franchise cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ATM franchise investment in India typically ranges between ₹2 lakh and ₹5 lakh depending on location, infrastructure and installation requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How much monthly income does an ATM franchise generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monthly income depends on transaction volume and location footfall. Earnings may range between ₹15,000 and ₹50,000 in high-demand areas."
        }
      },
      {
        "@type": "Question",
        "name": "Is location approval required for ATM installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Location must meet visibility, security, power backup and footfall requirements before final installation approval."
        }
      }
    ]
  }
];
export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white flex flex-col antialiased">

        {/* Schema */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="beforeInteractive"
        />

        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        {/* Google Analytics */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-FLKBSRN8GY"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-FLKBSRN8GY', {
      page_path: window.location.pathname,
    });
  `}
</Script>


        {/* Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ujptzn3zfv");
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1227771772539619');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1227771772539619&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
   <FloatingOfferTab />
      </body>
    </html>
  );
}
