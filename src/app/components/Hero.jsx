import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  Headphones,
  TrendingUp,
  Scale,
  Calculator,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full mt-13 md:mt-12 min-h-[85vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900"
      aria-labelledby="atm-franchise-heading"
    >
      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0 z-0">
        <Image
          // FIX 1: Use direct path if file is in public folder
          src="/img/demo6.webp" 
          alt="White Label ATM Franchise Installation in India - Hitachi & India1"
          fill
          priority
          sizes="100vw"
          className="object-cover md:object-[center_32%] brightness-[0.50]"
        />
        {/* Added slightly darker gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/30 z-10"></div>
      </div>

      {/* === CONTENT === */}
      <div className="relative z-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl"> {/* Increased width slightly for better text flow */}

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="py-2 px-5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-semibold text-xs sm:text-sm backdrop-blur-md shadow-lg flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Pan-India Installation • RBI Authorized Partners
            </span>
          </div>

          {/* H1 (PRIMARY SEO TARGET) */}
          <h1
            id="atm-franchise-heading"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight mb-5 md:mb-6"
          >
            Start Your Own
            <br />
            <span className="text-white">ATM Franchise</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
             Earn ₹15K–50K Monthly
            </span>
          </h1>

          {/* SEO-Optimized Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 md:mb-10 font-medium">
            We help you set up a profitable 
            <span className="text-white font-bold"> White Label ATM </span> 
            business anywhere in India. Official partners for 
            <span className="text-emerald-400"> Hitachi, India1, and EPS</span>. 
            Get location approval, installation, and lifetime technical support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            
            <Link
              href="/become-franchise"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4F293D] to-[#6B4456] text-white font-bold text-base rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-1 ring-white/20"
              aria-label="Apply online for ATM franchise in India"
            >
              <span className="relative flex items-center gap-2">
                Apply Online
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/service#compare"
              className="inline-flex items-center justify-center px-6 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium text-base rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Scale className="w-5 h-5 mr-2 text-slate-300" />
              Compare Brands
            </Link>

            <Link
              href="/service#calculator"
              className="inline-flex items-center justify-center px-6 py-4 bg-emerald-900/30 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-medium text-base rounded-xl hover:bg-emerald-900/50 transition-all duration-300"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Check Profit
            </Link>
          </div>

          {/* Feature Signals - FIX 2: Optimized for Mobile (2 cols instead of 1) */}
          <div className="pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-2">

              <div className="flex flex-col sm:flex-row items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm">Low Cost</h3>
                  <p className="text-xs text-slate-400 leading-snug">₹2L–5L Investment</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 text-slate-200">
                <Headphones className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm">Full Support</h3>
                  <p className="text-xs text-slate-400 leading-snug">Lifetime Tech Help</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 text-slate-200">
                <TrendingUp className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm">High ROI</h3>
                  <p className="text-xs text-slate-400 leading-snug">₹18/Transaction</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 text-slate-200">
                <Shield className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm">Verified</h3>
                  <p className="text-xs text-slate-400 leading-snug">RBI Approved</p>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}