"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function India1Content() {
  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#4F293D] selection:text-white">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "India1 ATM Franchise",
      brand: "India1 Payments",
      description:
        "Start India1 ATM Franchise (Desh Ka ATM). Trusted in semi-urban & rural markets with high transaction volumes.",
      image: "https://ownatm.in/img/og/india1.webp",
      url: "https://ownatm.in/atm-franchise/india1",
      category: "ATM Franchise, White Label ATM",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "40000",
        description:
          "Starting security deposit for India1 ATM Franchise. Final investment depends on infra and model.",
      },
      provider: {
        "@type": "Organization",
        name: "OwnATM Franchise India",
        url: "https://ownatm.in",
        logo: "https://ownatm.in/img/logoe.webp",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "580",
      },
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
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
          name: "ATM Franchises",
          item: "https://ownatm.in/atm-franchise",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "India1 ATM Franchise",
          item: "https://ownatm.in/atm-franchise/india1",
        },
      ],
    }),
  }}
/>


      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50/50 via-white to-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#4F293D]/10 text-[#4F293D] font-bold text-sm mb-6 uppercase tracking-wider">
              Desh Ka ATM
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              India1 ATM <span className="text-[#4F293D]">Franchise</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Join <strong>India1 Payments</strong> (formerly BTI Payments), the market leader in semi-urban and rural locations. 
              We are "Desh Ka ATM".
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
               <HeroStat value="12,000+" label="India1 ATMs" />
               <HeroStat value="#1" label="In Semi-Urban" />
               <HeroStat value="High" label="Txn Volume" />
               <HeroStat value="Fast" label="Settlements" />
            </div>

            <div className="mt-12">
               <Link href="/become-franchise" className="inline-block px-8 py-4 bg-[#4F293D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                 Apply for India1 Franchise
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT INDIA1 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The Green ATM of India
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            India1 Payments is focused on the <strong>non-metro</strong> market. Our distinctive green ATMs are a symbol 
            of financial convenience in thousands of small towns. Partnering with India1 means high visibility and 
            customer trust.
          </p>
        </div>
      </section>

      {/* FRANCHISE MODEL */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[400px]">
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                  <Image src="/img/india1-logo.webp" alt="India1 ATM" fill className="object-contain p-20" />
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Why India1?</h3>
               <p className="text-lg text-slate-600 mb-4">
                 Our strategy is density. We dominate the markets we enter, ensuring our franchisees get the highest 
                 transaction volumes in their respective towns.
               </p>
               <p className="text-lg text-slate-600">
                 We offer excellent marketing support and branding to make your ATM the go-to cash spot.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">India1 Franchise Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <PricingCard title="Basic"  color="bg-slate-100" features={["Entry Level", "Rural Focus", "Std Branding"]} />
             <PricingCard title="Growth"  color="bg-[#4F293D] text-white" isPremium={true} features={["Semi-Urban", "Full Branding", "Marketing Kit"]} />
             <PricingCard title="Corporate"  color="bg-slate-200" features={["Multiple Units", "Cluster Management", "Dedicated RM"]} />
          </div>
        </div>
      </section>

    </div>
  );
}

// Sub-components
function HeroStat({ value, label }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
      <span className="text-2xl font-bold text-[#4F293D]">{value}</span>
      <span className="text-xs text-slate-500 font-medium uppercase mt-1">{label}</span>
    </div>
  );
}

function PricingCard({ title, price, color, features, isPremium }) {
  return (
    <div className={`p-8 rounded-2xl border ${isPremium ? 'border-[#4F293D] shadow-xl transform scale-105' : 'border-slate-200 shadow-sm'} ${color} flex flex-col h-full`}>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase w-max mb-4 ${isPremium ? 'bg-white text-[#4F293D]' : 'bg-slate-800 text-white'}`}>
        {title}
      </span>
      <h3 className="text-3xl font-bold mb-1">{price}</h3>
      <p className={`text-sm mb-6 ${isPremium ? 'text-white/80' : 'text-slate-500'}`}>Security Deposit</p>
      <ul className="space-y-3 mt-auto">
        {features.map((f, i) => <li key={i} className="flex gap-2 items-center text-sm font-medium"><span className="text-lg">✓</span> {f}</li>)}
      </ul>
    </div>
  );
}        
