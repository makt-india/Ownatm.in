"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Shield, TrendingUp, CheckCircle, ShieldCheck, Building2, Landmark,AlertCircle  } from "lucide-react";

// ✅ LIGHTWEIGHT ANIMATION HOOK (Zero bundle size compared to Framer Motion)
// This keeps your site fast on Mobile (High PageSpeed Score)
function useInView(options = { threshold: 0.1, rootMargin: "50px" }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isInView];
}

// ✅ Generic Fade-In Wrapper
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default function KeyPartners() {
  const partners = [
    {
      name: "EPS - BANCS",
      fullName: "EPS ATM Franchise",
      src: "/img/eps-logo.webp",
      // Changed to anchor link to section or comparison page if dedicated page doesn't exist yet
      link: "/atm-franchise/eps", 
       color: "from-red-500/10 to-red-600/10",
      borderColor: "group-hover:border-red-500/30",
    },
    {
      name: "Hitachi ",
      fullName: "Hitachi ATM Franchise",
      src: "/img/hitachi.webp",
      link: "/atm-franchise/hitachi",
  
      color: "from-red-500/10 to-red-600/10",
      borderColor: "group-hover:border-red-500/30",
    },
    {
      name: "India1",
      fullName: "India1 ATM Franchise",
      src: "/img/india1-logo.webp",
      link: "/atm-franchise/india1",
   
      color: "from-green-500/10 to-green-600/10",
      borderColor: "group-hover:border-green-500/30",
    },
    {
      name: "Findi ",
      fullName: "Findi ATM Franchise",
      src: "/img/findi-logo.webp",
      link: "/atm-franchise/findi",
   
    color: "from-green-500/10 to-green-600/10",
      borderColor: "group-hover:border-green-500/30",
    },
  ];

  const benefits = [
    { icon: Award, text: "RBI Certified Partners" },
    { icon: Shield, text: "Complete Support" },
    { icon: TrendingUp, text: "High Commission Rates" },
    { icon: CheckCircle, text: "24/7 Uptime Guarantee" },
  ];

  return (
    <section
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
      aria-labelledby="partners-heading" id="keypartner"
    >
      {/* === BACKGROUND DECORATIVE ELEMENTS === */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient orbs - Optimized with simple CSS animation classes */}
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#4F293D]/5 to-transparent rounded-full blur-3xl top-0 right-0 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-tl from-emerald-100/30 to-transparent rounded-full blur-3xl bottom-0 left-0 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === SECTION HEADER === */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            {/* Badge */}
            <span className="inline-block mb-4 px-4 py-2 bg-[#4F293D]/10 text-[#4F293D] font-semibold text-sm rounded-full border border-[#4F293D]/20">
              Our Trusted Partners
            </span>

            <h2
              id="partners-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              India's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F293D] to-[#6B4456]">
                Leading ATM Networks
              </span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We proudly partner with the most reliable, highest-paying, and RBI-certified ATM service providers in India. Choose the best fit for your location and business goals.
            </p>
          </FadeIn>

          {/* === TRUST INDICATORS === */}
          <FadeIn delay={0.2} className="mt-10 flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm"
              >
                <benefit.icon className="w-4 h-4 text-[#4F293D]" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">
                  {benefit.text}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* === PARTNER CARDS GRID === */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} />
          ))}
        </ul>

        {/* === BOTTOM CTA === */}
        <FadeIn delay={0.3} className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-2xl shadow-lg mx-auto">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4F293D] to-[#6B4456] rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base md:text-lg text-slate-700 font-medium mb-2">
                Not sure which partner is best for your location?
              </p>
              <Link
                href="/become-franchise"
                className="inline-flex items-center gap-2 text-[#4F293D] font-bold text-lg hover:gap-3 transition-all duration-200 group"
              >
                <span>Talk to Our Expert</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>

<FadeIn delay={0.4} className="mt-14 w-full">
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        
        {/* === DECORATIVE BACKGROUND === */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-emerald-50 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-50"></div>

        {/* === TOP STRIP === */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600"></div>

        {/* === MAIN CONTENT === */}
        <div className="relative p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            
            {/* ICON (TRUST BADGE) */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                <Landmark className="w-10 h-10 text-blue-700" strokeWidth={1.5} />
              </div>
              <span className="mt-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Official
              </span>
            </div>

            {/* TEXT CONTENT */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                  RBI-Authorized Network
                </h4>
                {/* VERIFIED BADGE */}
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Our franchise installations are strictly facilitated through 
                <strong> RBI-authorized White Label ATM (WLA) operators</strong>. 
                We exclusively partner with industry leaders:
              </p>

              {/* LOGO/NAME LIST */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["EPS Bancs", "Hitachi Money Spot", "India1 Payments", "Findi"].map((brand) => (
                  <span key={brand} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded text-sm font-semibold text-slate-700">
                    {brand}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-600">
                All commission payouts, transaction settlements, and machine monitoring 
                adhere strictly to <strong>Reserve Bank of India (RBI)</strong> guidelines 
                and banking network compliance standards.
              </p>
            </div>
          </div>
        </div>

        {/* === FOOTER DISCLAIMER (Grey Box) === */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 md:px-10 md:py-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-normal">
            <strong>Transparency Notice:</strong> OwnATM acts as a specialized marketing and 
            onboarding facilitator. The final Franchise Agreement, Asset Ownership, and 
            Financial settlements are executed directly between you and the respective 
            WLA Operator (Hitachi/India1/EPS).
          </p>
        </div>
      </div>
    </FadeIn>      </div>
    </section>
  );
}

// ✅ Extracted Card Component (Previously Missing)
function PartnerCard({ partner, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <li
      ref={ref}
      className={`h-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isInView 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }} 
    >
      <Link
        href={partner.link}
        className="block h-full group focus:outline-none focus:ring-4 focus:ring-[#4F293D]/30 rounded-2xl"
        aria-label={`Learn more about ${partner.fullName} franchise opportunities`}
      >
        <div 
          className={`relative h-full flex flex-col items-center justify-between p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 active:scale-98 transition-all duration-300 overflow-hidden ${partner.borderColor}`}
        >
          {/* Gradient background on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Logo container */}
            <div className="relative w-full h-24 md:h-28 flex items-center justify-center mb-4">
              <Image
                src={partner.src}
                alt={`${partner.fullName} - Official partner logo for ATM franchise in India`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
           
              />
            </div>

            {/* Partner name */}
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 text-center">
              {partner.fullName}
            </h3>

            {/* Highlight badge */}
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-4">
              {partner.highlight}
            </span>

            {/* CTA on hover (CSS Transition) */}
            <div className="flex items-center gap-2 text-[#4F293D] font-bold text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4F293D]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
      </Link>
    </li>
  );
}