"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin, FileText } from "lucide-react";

export default function HitachiContent() {
  return (
     <div className="bg-white text-slate-800 font-sans selection:bg-[#4F293D] selection:text-white">
    
      <section className="relative py-30 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50/50 via-white to-white" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#4F293D]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#4F293D]/10 text-[#4F293D] font-bold text-sm mb-6 uppercase tracking-wider">
              Global Technology Leader
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Hitachi ATM <span className="text-[#4F293D]">Franchise</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Partner with <span className="font-semibold">Hitachi Payment Services</span> —
              India’s premier ATM operator known for advanced machine security, high transaction speeds, and rock-solid uptime.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <HeroStat value="65,000+" label="ATMs Managed" />
              <HeroStat value="99.9%" label="Uptime Record" />
              <HeroStat value="Tier-1 / Tier-2" label="Market Focus" />
              <HeroStat value="MoneySpot" label="Brand Network" />
            </div>

            <div className="mt-12">
              <Link
                href="/become-franchise"
                className="inline-block px-8 py-4 bg-[#4F293D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Apply for Hitachi Franchise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT HITACHI */}

<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
      World-Class Banking Infrastructure
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed mb-6">
      Hitachi Payment Services manages one of India’s largest ATM networks.
      Their machines are known for speed, security, and reliability — ensuring
      your ATM delivers higher uptime and stronger transaction consistency.
    </p>

    <p className="text-base text-slate-600 leading-relaxed">
      Not sure whether Hitachi or India1 is the better option for your location?
      Read our detailed{" "}
      <Link
        href="/resources/blog/hitachi-vs-india1-atm-franchise-comparison/"
        className="text-[#4F293D] font-semibold underline hover:no-underline"
      >
        Hitachi vs India1 ATM Franchise Comparison
      </Link>{" "}
      to compare commission structure, investment requirements, and ROI timelines.
    </p>

    {/* Secondary CTA */}
    <div className="mt-8">
      <Link
        href="/resources/blog/hitachi-vs-india1-atm-franchise-comparison/"
        className="inline-flex items-center px-6 py-3 bg-[#4F293D] text-white font-semibold rounded-xl shadow-md hover:bg-[#3e1f2f] transition-all duration-300"
      >
        Compare Hitachi vs India1 →
      </Link>
    </div>
  </div>
</section>

      {/* FRANCHISE MODEL */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* ROW 1 */}
          <IncludedRow
            img="/img/hitachi.webp"
            title="Why Hitachi?"
            content1="Hitachi ATMs are among the fastest and most stable in India, making them a preferred choice in urban and semi-urban markets."
            content2="Their MoneySpot branding and technology-driven operations ensure steady transaction volume and dependable uptime."
          />

          {/* ROW 2 */}
          <IncludedRow
            img="/img/hiatchi-img1.webp"
            title="Key Benefits"
            list={[
              "Advanced Cash Recycler Machine (CRM) options",
              "Best-in-class security systems",
              "Real-time monitoring mobile app",
              "Compatible with all major banks",
              "Dedicated nationwide tech support",
            ]}
            reverse
          />

        </div>
      </section>

      {/* ELIGIBILITY & DOCUMENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Requirements to <span className="text-[#4F293D]">Start</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InfoCard
              icon={<FileText size={24} />}
              title="Documents"
              items={[
                "Aadhaar & PAN Card",
                "GST (Preferred)",
                "Latest Bank Statement",
                "Ownership / Rental Agreement",
              ]}
            />

            <InfoCard
              icon={<MapPin size={24} />}
              title="Location Requirements"
              items={[
                "60–80 sq. ft. shop space",
                "High-visibility roadside area",
                "Broadband / V-SAT connectivity",
                "Power backup recommended",
              ]}
            />
          </div>

        </div>
      </section>

      {/* INVESTMENT STRUCTURE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Hitachi Investment Plans
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mt-3">
              These are realistic indicative ranges commonly associated with Hitachi ATM deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <NewPricingCard
              tag="STANDARD"
              title="Basic ATM Model"
              features={[
                "High-speed ATM",
                "Standard Branding",
                "Ideal for Semi-Urban Areas",
              ]}
            />

            <NewPricingCard
              tag="PREMIUM"
              highlight
              title="Urban ATM Setup"
              features={[
                "Advanced High-Speed ATM",
                "Premium Branding",
                "High Footfall Market Areas",
                "Priority Technical Support",
              ]}
            />

            <NewPricingCard
              tag="CRM MODEL"
              title="Cash Recycler (CRM)"
              features={[
                "Cash Deposit + Withdrawal",
                "Double Transaction Earning",
                "Ideal for High-Volume Locations",
              ]}
            />

          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-[#4F293D] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Hitachi Franchise?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Become part of India’s most advanced ATM network and start generating
            consistent monthly income.
          </p>

          <Link
            href="/become-franchise"
            className="inline-block px-10 py-4 bg-white text-[#4F293D] font-bold rounded-full shadow-lg hover:bg-slate-100 transition-all"
          >
            Apply Now
          </Link>
        </div>
      </section>

    </div>
  );
}


/* ------------------------------
   SUB COMPONENTS
------------------------------ */

function HeroStat({ value, label }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
      <span className="text-2xl font-bold text-[#4F293D]">{value}</span>
      <span className="text-xs text-slate-500 uppercase mt-1 block">{label}</span>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex gap-3 items-start">
      <CheckCircle className="text-[#4F293D] mt-1" size={20} />
      <span className="text-slate-700 font-medium">{text}</span>
    </li>
  );
}

function InfoCard({ title, icon, items }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-pink-50 text-[#4F293D] rounded-full">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => <ListItem key={i} text={item} />)}
      </ul>
    </div>
  );
}

function IncludedRow({ img, title, content1, content2, list, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse
          ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          : ""
      }`}
    >
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[400px]"
      >
        <Image src={img} alt={title} fill className="object-cover" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-900 mb-4">{title}</h3>

        {content1 && <p className="text-lg text-slate-600 mb-4">{content1}</p>}
        {content2 && <p className="text-lg text-slate-600 mb-4">{content2}</p>}

        {list && (
          <ul className="space-y-3">
            {list.map((item, i) => (
              <ListItem key={i} text={item} />
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

function NewPricingCard({ tag, title, price, features, highlight }) {
  return (
    <div
      className={`relative p-8 rounded-3xl border transition-all ${
        highlight
          ? "bg-[#1B0B2E] text-white scale-[1.03] shadow-xl"
          : "bg-white text-slate-900 shadow-md"
      }`}
    >
      {tag && (
        <span className={`absolute -top-3 left-6 px-3 py-1 text-xs font-bold rounded-full ${
          highlight
            ? "bg-purple-500 text-white"
            : "bg-orange-200 text-slate-800"
        }`}>
          {tag}
        </span>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      <p className={`text-3xl font-extrabold mb-6 ${highlight && "text-white"}`}>
        {price}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle
              className={`w-5 h-5 ${highlight ? "text-white" : "text-green-600"}`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/become-franchise"
        className={`block text-center w-full py-3 rounded-xl font-semibold border ${
          highlight
            ? "bg-white text-[#1B0B2E] hover:bg-slate-100"
            : "border-slate-800 text-slate-900 hover:bg-slate-100"
        }`}
      >
        Enquire Now
      </Link>
    </div>
  );
}
