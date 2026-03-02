"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, TrendingUp, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EPSContent() {
  return (
    <main className="bg-white text-slate-800 font-sans selection:bg-[#4F293D] selection:text-white">

      <section className="relative py-30 md:py-28 lg:py-32 overflow-hidden" aria-labelledby="eps-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50/50 via-white to-white" />
          <div className="absolute top-10 md:top-20 right-10 md:right-20 w-72 h-72 md:w-96 md:h-96 bg-[#4F293D]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-[#4F293D]/10 text-[#4F293D] font-bold text-xs md:text-sm mb-6 uppercase tracking-wider">
              Trusted White Label Operator
            </div>

            {/* Heading */}
            <h1 id="eps-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-5 md:mb-6 leading-tight">
              EPS ATM <span className="text-[#4F293D] inline-block">Franchise</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10 md:mb-12">
              Partner with <span className="font-semibold text-slate-800">Electronic Payment & Services (EPS)- BANCS </span> —
              offering high uptime, fast settlements, and a strong nationwide network.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mt-10 md:mt-12">
              <HeroStat value="9,000+" label="ATMs Planned" />
              <HeroStat value="99%" label="Uptime Reliability" />
              <HeroStat value="24x7" label="Monitoring" />
              <HeroStat value="Tier 2-6" label="Focus Areas" />
            </div>

            {/* CTA Button */}
            <div className="mt-10 md:mt-12">
              <Link
                href="/become-franchise"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 bg-[#4F293D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-[#4F293D]/30"
              >
                Apply for EPS Franchise
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


<section
  className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50"
  aria-labelledby="about-eps-heading"
>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2
      id="about-eps-heading"
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 md:mb-6"
    >
      Powering Financial Access with{" "}
      <span className="text-[#4F293D]">EPS BANCS™</span>
    </h2>

    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
      EPS is a trusted White Label ATM operator powering seamless ATM deployments across India.
      Using its proprietary{" "}
      <strong className="text-slate-900">EPS BANCS™</strong> platform,
      the company ensures strong uptime, quick settlements, and transparent
      transaction management for franchise partners nationwide.
    </p>

    {/* Internal Link Block */}
    <div className="mt-8">
      <Link
        href="/resources/blog/eps-bancs-atm-franchise-details/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F293D] text-white font-semibold rounded-xl shadow-md hover:bg-[#3e1f2f] transition-all duration-300"
      >
        View Complete EPS BANCS™ Franchise Details →
      </Link>

      <p className="text-sm text-slate-500 mt-3">
        Explore commission structure, investment cost, eligibility criteria, and ROI breakdown.
      </p>
    </div>
  </div>
</section>
<section
  className="py-16 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden"
  aria-labelledby="franchise-model-heading"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20 lg:space-y-24">
    
    <h2 id="franchise-model-heading" className="sr-only">
      EPS Franchise Model Details
    </h2>

    <IncludedRow
      img="/img/eps-img2.webp"
      title="Franchise Model Overview"
      content1={
        <>
          EPS operates as a non-bank White Label ATM franchise, enabling entrepreneurs,
          MSMEs, and local shop owners to run ATMs without any banking infrastructure.
          If you are comparing multiple operators, explore our{" "}
          <Link
            href="/resources/blog/top-5-white-label-atm-providers-india-2025/"
            className="text-[#4F293D] font-semibold underline hover:no-underline"
          >
            Top 5 White Label ATM Providers in India (2025)
          </Link>{" "}
          guide for a full industry breakdown.
        </>
      }
      content2="This structured model helps individuals build a long-term steady income stream with minimal operational complexity and full backend support."
    />

    <IncludedRow
      img="/img/eps-img1.webp"
      title="Key Features & Services"
      list={[
        "Cash withdrawals & Balance inquiries",
        "Mini statements & PIN changes",
        "Supports all major bank debit cards",
        "24×7 ATM operations with monitoring",
        "Value-added services (Aadhaar seeding, mobile registration)",
      ]}
      reverse
    />

    {/* Authority Callout Block */}
    <div className="text-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        Want to Compare EPS with Other ATM Operators?
      </h3>
      <p className="text-slate-600 mb-5 max-w-2xl mx-auto">
        Understand commission structure, investment range, and support models across
        India’s leading White Label ATM providers before making your decision.
      </p>

      <Link
        href="/resources/blog/hitachi-vs-india1-atm-franchise-comparison/"
        className="inline-flex items-center px-6 py-3 bg-[#4F293D] text-white font-semibold rounded-xl shadow-md hover:bg-[#3e1f2f] transition-all duration-300"
      >
        Compare Top ATM Providers →
      </Link>
    </div>

  </div>
</section>
      {/* ELIGIBILITY & DOCUMENTS */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" aria-labelledby="eligibility-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="eligibility-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Eligibility & <span className="text-[#4F293D]">Documentation</span>
            </h2>
            <p className="mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Ensure you meet the basic criteria to start your EPS franchise journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <InfoCard
              icon={<FileText className="w-6 h-6" />}
              title="Required Documents"
              items={[
                "Aadhaar Card & PAN Card",
                "GST or Udyog Aadhaar registration",
                "Last 3 months bank statements",
                "Property documents or Rent agreement",
                "Cancelled Cheque for bank verification",
              ]}
            />
            <InfoCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Eligibility Criteria"
              items={[
                "Minimum age: 21 years",
                "Financial stability proof required",
                "50-100 sq ft commercial space",
                "Ground floor with high visibility preferred",
                "Concrete roof & power backup mandatory",
              ]}
            />
          </div>
        </div>
      </section>

      {/* INVESTMENT TIERS */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="investment-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 md:mb-16">
            <h2 id="investment-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Investment Structure
            </h2>
            <p className="mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Choose the right model based on your location and investment capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <PricingCard
              tag="ENTRY LEVEL"
              title="Shop-in-Shop"
              features={["Low Initial Investment", "Space: 6×6 ft minimum", "Increases Store Footfall"]}
            />
            <PricingCard
              tag="MOST POPULAR"
              title="Cabin Setup"
              highlight
              features={["Cabin Infrastructure Included", "Full EPS Branding", "Higher Customer Trust Factor"]}
            />
            <PricingCard
              tag="PREMIUM"
              title="Full Franchise"
              features={["Maximum Monthly Earnings", "Priority Technical Support", "EPS Managed Cash Loading"]}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto shadow-md"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[#4F293D]" />
              <h3 className="text-lg md:text-xl font-bold text-slate-900">Minimum Cash Loading Requirement</h3>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every model requires maintaining a minimum{" "}
              <span className="font-bold text-[#4F293D]">₹3,00,000 cash balance</span> for daily operations.
              This is separate from the security deposit and managed by authorized CRAs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#4F293D] via-[#5A3448] to-[#4F293D] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-emerald-300" />
            <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wide">
              Trusted by 500+ Franchisees
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            Ready to Start Your EPS Franchise?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            Join India's fast-growing ATM network and secure a long-term monthly income with full support.
          </p>

          <Link
            href="/become-franchise"
            className="inline-flex items-center gap-2 px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#4F293D] font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   SUB COMPONENTS
========================================================= */

function HeroStat({ value, label }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 md:p-5 rounded-xl shadow-md border border-slate-100 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <span className="text-2xl md:text-3xl font-bold text-[#4F293D]">{value}</span>
      <span className="text-xs md:text-sm text-slate-500 font-medium uppercase mt-1 tracking-wide">{label}</span>
    </motion.div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex gap-3 items-start">
      <div className="mt-0.5 shrink-0 text-[#4F293D]">
        <CheckCircle className="w-5 h-5" aria-hidden="true" />
      </div>
      <span className="text-slate-700 text-sm md:text-base font-medium">{text}</span>
    </li>
  );
}

function InfoCard({ title, icon, items }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-[#4F293D]/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 text-[#4F293D] rounded-full">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3 md:space-y-4">
        {items.map((item, i) => (
          <ListItem key={i} text={item} />
        ))}
      </ul>
    </motion.article>
  );
}

function IncludedRow({ img, title, content1, content2, list, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
      }`}
    >
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[350px] md:h-[400px]"
      >
        <Image 
          src={img} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top hover:scale-105 transition-transform duration-700" 
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{title}</h3>

        {content1 && <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">{content1}</p>}
        {content2 && <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">{content2}</p>}

        {list && (
          <ul className="space-y-3 md:space-y-4">
            {list.map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

function PricingCard({ tag, title, price, features, highlight }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 md:p-8 rounded-3xl border transition-all duration-300 ${
        highlight
          ? "bg-gradient-to-br from-[#1B0B2E] to-[#2D1548] text-white scale-100 md:scale-105 shadow-2xl"
          : "bg-white text-slate-900 shadow-lg hover:shadow-xl"
      }`}
    >
      {tag && (
        <span
          className={`text-xs absolute -top-3 left-6 px-3 py-1.5 rounded-full font-semibold tracking-wide ${
            highlight ? "bg-purple-500 text-white" : "bg-orange-200 text-slate-700"
          }`}
        >
          {tag}
        </span>
      )}

      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>

      <p className={`text-2xl md:text-3xl font-extrabold mb-6 ${highlight ? "text-white" : "text-[#4F293D]"}`}>
        {price}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm md:text-base">
            <CheckCircle
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlight ? "text-emerald-300" : "text-emerald-600"}`}
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/become-franchise"
        className={`block w-full text-center py-3 md:py-3.5 rounded-xl font-semibold border transition-all ${
          highlight
            ? "bg-white text-[#1B0B2E] border-white hover:bg-slate-100"
            : "border-slate-300 text-slate-900 hover:bg-slate-100 hover:border-[#4F293D]"
        }`}
      >
        Enquire Now
      </Link>
    </motion.article>
 
  );
}
