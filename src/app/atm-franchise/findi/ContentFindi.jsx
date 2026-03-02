"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FindiContent() {
  return (
        <div className="bg-white text-slate-800 font-sans selection:bg-[#4F293D] selection:text-white">    
          <section className="relative py-30 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50/50 via-white to-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#4F293D]/10 text-[#4F293D] font-bold text-sm mb-6 uppercase tracking-wider">
              India’s Largest Rural ATM Network
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Findi (Indicash) <span className="text-[#4F293D]">Franchise</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              Join the <strong>Findi / Indicash</strong> network — India’s first and largest White Label ATM operator,
              bringing banking access to rural and semi-urban India.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <HeroStat value="20,000+" label="ATMs" />
              <HeroStat value="4,000+" label="Towns" />
              <HeroStat value="Tier 3–6" label="Focus Areas" />
              <HeroStat value="Tata" label="Legacy Brand" />
            </div>

            <div className="mt-12">
              <Link href="/become-franchise"
                className="inline-block px-8 py-4 bg-[#4F293D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Apply for Findi Franchise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT FINDI */}

<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
      Connecting Bharat with Banking
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed mb-6">
      Findi (formerly Indicash / Tata) has played a major role in expanding ATM
      access across semi-urban and rural India. With deep penetration into
      <strong> Tier-3 to Tier-6</strong> towns, it enables financial inclusion
      in regions where traditional banks have limited presence.
    </p>

    <p className="text-base text-slate-600 leading-relaxed">
      If you’re evaluating whether Findi is suitable for your district,
      read our in-depth{" "}
      <Link
        href="/resources/blog/findi-indicash-atm-franchise-review/"
        className="text-[#4F293D] font-semibold underline hover:no-underline"
      >
        Findi (Indicash) ATM Franchise Review
      </Link>{" "}
      covering investment requirements, commission model, location suitability,
      and long-term ROI potential.
    </p>

    <div className="mt-8">
      <Link
        href="/resources/blog/findi-indicash-atm-franchise-review/"
        className="inline-flex items-center px-6 py-3 bg-[#4F293D] text-white font-semibold rounded-xl shadow-md hover:bg-[#3e1f2f] transition-all duration-300"
      >
        Read Full Findi Franchise Review →
      </Link>
    </div>
  </div>
</section>

      {/* FRANCHISE MODEL */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[400px]">
              <Image src="/img/findi-logo.webp" alt="Findi ATM" fill className="object-contain p-20" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Findi / Indicash?</h3>
              <p className="text-lg text-slate-600 mb-4">
                Indicash has one of the strongest brand recalls in rural India. High trust = higher transaction volume.
              </p>
              <p className="text-lg text-slate-600">
                The Findi model is specifically optimized for rural entrepreneurs with minimal upfront work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & DOCS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Simple <span className="text-[#4F293D]">Onboarding Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InfoCard
              icon={<FileText size={24} />}
              title="Requirements"
              items={[
                "KYC Documents (Aadhaar/PAN)",
                "Commercial space in rural/semi-urban area",
                "Valid bank account",
                "No police/criminal record",
              ]}
            />

            <InfoCard
              icon={<CheckCircle size={24} />}
              title="Infrastructure"
              items={[
                "Minimum 50 sq. ft. shop",
                "Ground floor preferred",
                "Basic electrical setup",
                "Good 4G network availability",
              ]}
            />
          </div>
        </div>
      </section>

      {/* INVESTMENT (Realistic Based on Official Info) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Findi ATM Investment Plans</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Based on publicly available indicative data and typical White Label ATM deployment costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <NewCard
              tag="ENTRY"
              title="Rural Model"
              features={[
                "Optimized for Villages",
                "Low Infra Requirement",
                "Ideal for Low-Competition Areas",
              ]}
            />

            <NewCard
              tag="STANDARD"
              title="Semi-Urban Model"
              highlight
              features={[
                "Higher Footfall",
                "Better Brand Visibility",
                "Optimal Transaction Volume",
              ]}
            />

            <NewCard
              tag="MASTER"
              title="Multi-ATM Setup"
              features={[
                "Multiple Machine Allocation",
                "Higher Revenue Potential",
                "Priority Deployment",
              ]}
            />

          </div>

          {/* Note */}
          <div className="mt-12 bg-white p-6 rounded-xl border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-slate-600 text-sm">
              *Final costs depend on location, shop readiness, infra, and cash-loading requirements.
              These are indicative industry ranges, not official commitments.*
            </p>
          </div>

        </div>
      </section>
      {/* FINAL CTA SECTION */}
<section className="py-24 bg-[#4F293D] text-white text-center">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-6">
      Ready to Start Your Findi Franchise?
    </h2>

    <p className="text-lg text-white/80 mb-10">
      Join India’s largest rural ATM network and earn monthly passive income
      with a trusted brand.
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


/* SUB COMPONENTS */

function HeroStat({ value, label }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
      <span className="text-2xl font-bold text-[#4F293D]">{value}</span>
      <span className="text-xs text-slate-500 font-medium uppercase block mt-1">{label}</span>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 text-[#4F293D]"><CheckCircle size={20} /></div>
      <span className="text-slate-700 font-medium">{text}</span>
    </li>
  );
}

function InfoCard({ title, icon, items }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
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

/* NEW PRICING CARD */
function NewCard({ tag, title, price, features, highlight }) {
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
          highlight ? "bg-purple-500 text-white" : "bg-orange-200 text-slate-800"
        }`}>
          {tag}
        </span>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className={`text-3xl font-extrabold mb-6 ${highlight && "text-white"}`}>{price}</p>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className={`w-5 h-5 ${highlight ? "text-white" : "text-green-600"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/become-franchise"
        className={`block text-center w-full py-3 rounded-xl font-semibold border ${
          highlight
            ? "bg-white text-[#1B0B2E] hover:bg-slate-100"
            : "border-slate-800 hover:bg-slate-100 text-slate-900"
        }`}
      >
        Enquire Now
      </Link>
    </div>


  );
}
