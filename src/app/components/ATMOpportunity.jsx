"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  TrendingUp,
  MapPin,
  Clock,
  Users,
  Wallet,
  Shield,
  Zap,
} from "lucide-react";

// ✅ LIGHTWEIGHT ANIMATION HOOK
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

export default function ATMOpportunity() {
  // ✅ UPDATED BENEFITS: More specific to the "Aggregator" value proposition
  const benefits = [
    {
      icon: TrendingUp,
      text: "Earn ₹8-12 per cash withdrawal & balance check",
    },
    {
      icon: Shield,
      text: "Official Partners: Hitachi, India1, Findi & EPS",
    },
    {
      icon: MapPin,
      text: "Ideal for High-Footfall Shops, Markets & Bus Stands",
    },
    {
      icon: Wallet,
      text: "Low Investment (₹2-5L) with ROI in 12-14 Months",
    },
    {
      icon: Clock,
      text: "100% Passive Income — Machine works 24/7 automatically",
    },
    {
      icon: Users,
      text: "Zero Staff Required — We handle maintenance",
    },
  ];

  // Refs for main sections
  const [imgRef, imgInView] = useInView();
  const [textRef, textInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <section
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      aria-labelledby="opportunity-heading"
    >
      {/* === BACKGROUND DECORATIVE ELEMENTS === */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[700px] h-[700px] bg-[#4F293D]/5 rounded-full blur-3xl -top-40 -left-32 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl bottom-0 right-0 animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "1s" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4F293D 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* === LEFT: IMAGE WITH STATS OVERLAY === */}
          <div
            ref={imgRef}
            className={`w-full flex justify-center relative order-2 lg:order-1 transition-all duration-1000 ease-out ${
              imgInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Decorative border frame */}
            <div
              className="absolute -inset-4 border-2 border-[#4F293D]/10 rounded-2xl -z-10 transform translate-x-3 translate-y-3 hidden md:block"
              aria-hidden="true"
            />

            {/* Main image container */}
            <div className="relative w-full max-w-xl group">
              <Image
                src="/img/franchise.webp"
                width={700}
                height={500}
                // ✅ SEO OPTIMIZED ALT TEXT
                alt="Profitable ATM franchise business opportunity in India - Compare Hitachi vs India1 ATM cost"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="rounded-2xl shadow-2xl border border-slate-200 object-cover w-full h-auto"
                loading="lazy"
              />

              {/* Floating stat card 1 (Bottom Left) */}
              <div
                className={`absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-slate-200 transition-all duration-700 delay-300 ${
                  imgInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">₹30K+</div>
                    <div className="text-sm text-slate-600">Monthly Profit</div>
                  </div>
                </div>
              </div>

              {/* Floating stat card 2 (Top Right) */}
              <div
                className={`absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-slate-200 transition-all duration-700 delay-500 ${
                  imgInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F293D] to-[#6B4456] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600">Passive Income</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* === RIGHT: CONTENT === */}
          <div
            ref={textRef}
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-100 ${
              textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Section badge */}
            <span className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold text-sm rounded-full border border-emerald-200">
              #1 ATM Aggregator in India
            </span>

            <h2
              id="opportunity-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Start Your Own
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F293D] to-[#6B4456]">
                Smart ATM Business
              </span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                Don't limit yourself to just one brand. At <strong className="text-slate-900">OwnATM.in</strong>, we help you choose between 
                <strong className="text-emerald-700"> EPS Bancs </strong> (Best for Cities) and <strong className="text-emerald-700">Findi</strong> (Best for Rural Areas).
              </p>

              {/* ✅ NEW UPI INTEGRATION POINT */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-1 bg-blue-100 p-1.5 rounded-full">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg">with UPI Cardless Cash</h4>
                    <p className="text-sm text-blue-800 mt-1 leading-relaxed">
                      Our latest ATMs are <strong>UPI-Integrated</strong>. Customers can simply <strong>scan a QR code</strong> on the ATM screen using PhonePe, Google Pay, or Paytm to withdraw cash. Even if they forget their card, you still earn a commission!
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Unlike traditional franchises with high overheads, an ATM franchise is a 
                <strong className="text-slate-900 font-semibold"> 100% Asset-Based Model</strong>. 
                You own the machine, we handle the operations, and you earn a guaranteed commission on every transaction.
              </p>
            </div>

            {/* Benefits list with icons */}
            <ul className="space-y-3 mb-10" role="list" aria-label="ATM franchise benefits">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} benefit={benefit} index={index} />
              ))}
            </ul>

            {/* CTA Button */}
            <div
              ref={ctaRef}
              className={`transition-all duration-700 ease-out delay-300 ${
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/service#compare"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4F293D] to-[#6B4456] text-white font-bold text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4F293D]/30"
              >
                <span>Compare Costs & Apply</span>
                <TrendingUp className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Extracted Component for List Items
function BenefitItem({ benefit, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <li
      ref={ref}
      className={`flex items-start gap-3 group transition-all duration-500 ease-out ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }} // Stagger delay
    >
      <span
        className="shrink-0 mt-0.5 h-8 w-8 rounded-lg bg-gradient-to-br from-[#4F293D] to-[#6B4456] text-white flex items-center justify-center shadow-md shadow-[#4F293D]/20 group-hover:scale-110 transition-transform duration-200"
        aria-hidden="true"
      >
        <benefit.icon className="w-4 h-4" />
      </span>
      <span className="text-slate-700 font-medium text-base group-hover:text-slate-900 transition-colors">
        {benefit.text}
      </span>
    </li>
  );
}