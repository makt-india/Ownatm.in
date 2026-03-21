import BlogListingContent from "./BlogListingContent";

// --------------------------------------
// METADATA (PAGE SPECIFIC)
// --------------------------------------
export const metadata = {
  title: {
    absolute: "ATM Franchise Blog & Insights – Hitachi, EPS, Findi, India1 Guides | OwnATM",
  },
  description:
    "Expert ATM franchise guides covering Hitachi, EPS, Findi/Indicash, and India1. Learn ATM franchise cost, ROI, RBI guidelines, installation requirements, cash loading, earnings, and passive income strategies.",

  keywords: [
    "ATM franchise blog",
    "ATM franchise India",
    "Hitachi ATM franchise guide",
    "EPS ATM franchise cost",
    "Findi ATM franchise",
    "India1 ATM franchise",
    "ATM business guide India",
    "how to start ATM franchise",
    "ATM franchise ROI",
    "ATM installation requirements",
    "RBI ATM franchise rules",
    "ATM transaction revenue model",
    "white label ATM business India",
  ],

  alternates: {
    canonical: "https://ownatm.in/blog",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ownatm.in/blog",
    siteName: "OwnATM Franchise India",
    title: "ATM Franchise Blog – Expert Investment Guides & Industry Insights",
    description:
      "Read expert ATM franchise insights on Hitachi, EPS, Findi, and India1. Investment breakdown, ROI models, RBI compliance, earnings, and location selection strategies.",
    images: [
      {
        url: "https://ownatm.in/img/og/blog.webp",
        width: 1200,
        height: 630,
        alt: "OwnATM Blog – ATM Franchise Guides and Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ATM Franchise Guides – Hitachi, EPS, Findi, India1 | OwnATM Blog",
    description:
      "Your complete ATM franchise knowledge hub. Learn costs, earnings, installation, RBI rules, and provider comparisons.",
    images: ["https://ownatm.in/img/og/blog.webp"],
    creator: "@OwnATMIndia",
  },
};

// ---------------------------
// STATIC BLOG DATA
// ---------------------------
import { BLOG_POSTS } from "./data";
// --------------------------------------
// SCHEMA GENERATION (JSON-LD)
// --------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://ownatm.in/blog/#blog",
      name: "OwnATM Blog",
      description:
        "Expert guides and insights on ATM franchise business in India",
      url: "https://ownatm.in/blog",
      publisher: {
        "@type": "Organization",
        name: "OwnATM",
        logo: {
          "@type": "ImageObject",
          url: "https://ownatm.in/img/logoe.webp",
        },
      },
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `https://ownatm.in/blog/${post.slug}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@type": "Organization",
          name: "OwnATM",
        },
        articleSection: post.category,
        keywords: post.keywords?.join(", ") || "",
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ownatm.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://ownatm.in/blog",
        },
      ],
    },
  ],
};

// --------------------------------------
// MAIN COMPONENT
// --------------------------------------
export default function BlogPage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Content */}
      <BlogListingContent posts={BLOG_POSTS} />
    </>
  );
}