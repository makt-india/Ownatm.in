"use client";

import Link from "next/link";
import { ShieldCheck, Zap, Clock, ArrowRight, Gift } from "lucide-react";

export default function OfferPage() {
  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-20">
          <h2 className="text-yellow-500 uppercase tracking-widest text-sm font-bold mb-4">
            Limited Time Strategic Benefits
          </h2>
          <h1 className="text-5xl font-black">
            Exclusive Partner Offers
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Unlock premium ecosystem benefits designed to protect and accelerate your ATM franchise growth.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Offer 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-yellow-500/40 transition-all">
            
            <div className="mb-6">
              <Gift className="text-yellow-500" size={28} />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Care360 Lifetime Membership
            </h3>

            <p className="text-slate-400 text-sm mb-6">
              Complete operational, financial, and compliance protection ecosystem.
            </p>

            <div className="mb-6">
              <p className="line-through text-slate-500 text-lg">
                ₹30,000
              </p>
              <p className="text-4xl font-black text-yellow-500">
                ₹0
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Free until Feb 28, 2026
              </p>
            </div>

            <Link
              href="/become-franchise"
              className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-4 rounded-xl transition"
            >
              Activate Offer <ArrowRight size={18} />
            </Link>
          </div>

          {/* Offer 2 Example */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-yellow-500/40 transition-all">
            
            <ShieldCheck className="text-yellow-500 mb-6" size={28} />

            <h3 className="text-2xl font-bold mb-3">
              Zero Processing Fee
            </h3>

            <p className="text-slate-400 text-sm mb-6">
              Save on onboarding and documentation charges for a limited time.
            </p>

            <div className="mb-6">
              <p className="line-through text-slate-500 text-lg">
                ₹5,000
              </p>
              <p className="text-4xl font-black text-yellow-500">
                ₹0
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Limited 2026 Offer
              </p>
            </div>

            <Link
              href="/become-franchise"
              className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-4 rounded-xl transition"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
