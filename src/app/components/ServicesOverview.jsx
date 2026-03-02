"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check, TrendingUp, Shield, Clock, Zap, Users } from "lucide-react";

// ✅ LIGHTWEIGHT ANIMATION HOOK (Replaces Framer Motion)
// This tiny hook handles the "whileInView" functionality efficiently
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

// ✅ Optimized Feature Item (Slide from Left)
const FeatureItem = ({ text, delay, icon: Icon }) => {
  const [ref, isInView] = useInView();
  
  return (
    <li
      ref={ref}
      className={`flex items-start gap-3 group transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span
        className="shrink-0 mt-1 h-8 w-8 bg-gradient-to-br from-[#4F293D] to-[#6B4456] text-white flex items-center justify-center rounded-lg shadow-md shadow-[#4F293D]/20 group-hover:shadow-lg group-hover:scale-110 transition-all duration-200"
        aria-hidden="true"
      >
        {Icon ? <Icon className="w-4 h-4" /> : <Check className="w-4 h-4" />}
      </span>
      <span className="text-slate-700 text-base md:text-lg font-medium leading-relaxed">
        {text}
      </span>
    </li>
  );
};

const StatCard = ({ number, label, description, delay }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700 ease-out group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-extrabold text-[#4F293D] mb-2">
          {number}
        </div>

        <div className="text-sm md:text-base font-semibold text-slate-800 mb-1">
          {label}
        </div>

        {description && (
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

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

export default function WhyATM() {
  return (
<section
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      aria-labelledby="why-atm-heading"
    >
      {/* === BACKGROUND DECORATIVE ELEMENTS === */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="hidden md:block absolute w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -top-32 -left-32" />
        <div className="hidden md:block absolute w-[500px] h-[500px] bg-[#4F293D]/5 rounded-full blur-3xl bottom-0 right-0" />

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
        {/* === SECTION HEADER === */}
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
  <FadeIn>
    <span className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 font-semibold text-sm rounded-full border border-emerald-200">
      ATM Franchise Investment Model
    </span>

    <h2
      id="why-atm-heading"
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
    >
      Why ATM Franchise Is a{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F293D] to-[#6B4456]">
        Stable Income Business in India
      </span>
    </h2>

    <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
      An <strong className="text-slate-900 font-semibold">ATM franchise business</strong> 
      generates revenue through commission per transaction. With consistent 
      cash withdrawals across urban and semi-urban locations, investors can 
      earn predictable monthly income. Installation, monitoring, and backend 
      settlement are handled by approved white-label ATM operators.
    </p>

    {/* Hidden SEO reinforcement (not visible, but strengthens context) */}
    <p className="sr-only">
      ATM franchise cost in India ranges from ₹2–5 lakh depending on location approval.
      Monthly commission depends on transaction volume and footfall.
      White label ATM franchise operators manage installation and uptime.
    </p>
  </FadeIn>

  {/* === QUICK STATS === */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
  
  <StatCard
    number="₹2–5 Lakhs"
    label="Investment Range"
    description="Includes machine setup, site preparation, and operator approval."
    delay={0.1}
  />

  <StatCard
    number="₹15K–50K"
    label="Monthly Commission"
    description="Based on transaction volume and location footfall."
    delay={0.2}
  />

  <StatCard
    number="24/7"
    label="Machine Operation"
    description="ATM runs round-the-clock without manpower dependency."
    delay={0.3}
  />

  <StatCard
    number="Pan India"
    label="Installation Coverage"
    description="Urban, semi-urban, and selected rural locations supported."
    delay={0.4}
  />

</div>
</div>
        {/* === ROW 1: Stable Income === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-24 md:mb-32">
          {/* Text Content */}
          <FadeIn className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <TrendingUp className="w-4 h-4" />
              <span>Passive Income Model</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Stable Monthly Income
              <br />
              <span className="text-[#4F293D]">Without Daily Management</span>
            </h3>

            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              <p>
                ATMs remain a vital pillar of India&apos;s cash economy. With{" "}
                <strong className="text-slate-900">
                  millions of withdrawals daily
                </strong>
                , an ATM franchise allows you to earn predictable revenue month
                after month—without managing staff, handling complex inventory,
                or running daily operations.
              </p>
              <p>
                Whether you&apos;re a shop owner, property owner, or investor,
                this is a{" "}
                <strong className="text-slate-900 font-semibold">
                  low-risk, high-stability
                </strong>{" "}
                way to build long-term passive income assets.
              </p>
            </div>

            <ul
              className="space-y-4"
              role="list"
              aria-label="Stable income benefits"
            >
              <FeatureItem
                delay={0.1}
                text="Zero staff required & no manpower dependency"
                icon={Users}
              />
              <FeatureItem
                delay={0.2}
                text="Earn from withdrawals, balance checks & mini-statements"
                icon={TrendingUp}
              />
              <FeatureItem
                delay={0.3}
                text="Consistent income unaffected by market fluctuations"
                icon={Shield}
              />
            </ul>
          </FadeIn>

          {/* Image Content */}
          <FadeIn className="w-full relative group order-1 lg:order-2" delay={0.2}>
            {/* Decorative glow effect */}
            <div
              className="absolute -inset-3 bg-gradient-to-r from-[#4F293D]/30 to-emerald-400/30 rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/owitha.webp"
                width={700}
                height={500}
                alt="Profitable ATM franchise setup showing stable passive income generation with modern ATM machines in India"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="relative w-full h-auto object-cover"
                loading="lazy"
        
              />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#4F293D] to-[#6B4456] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      ₹15-50K
                    </div>
                    <div className="text-sm text-slate-600">
                      Monthly Passive Income
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* === ROW 2: High ROI === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image Content */}
          <FadeIn className="w-full relative group">
            <div
              className="absolute -inset-3 bg-gradient-to-l from-[#4F293D]/30 to-emerald-400/30 rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/gwithc.webp"
                width={700}
                height={500}
                alt="Low investment high ROI ATM franchise opportunity with trusted partners like EPS, Hitachi, India1, and Fino Payment Bank"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="relative w-full h-auto object-cover"
                loading="lazy"
         
              />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    </div>
                    <div className="text-sm text-slate-600">
                      Fast Installation
                    </div>
                  </div>
                </div>
              </div>
          
          </FadeIn>

          {/* Text Content */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" />
              <span>Trusted Partners</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Low Investment,
              <br />
              <span className="text-[#4F293D]">
                High Return on Investment
              </span>
            </h3>

            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              <p>
                ATM franchising is ideal for women entrepreneurs, first-time
                investors, and small business owners because it offers{" "}
                <strong className="text-slate-900">
                  stable earnings without daily workload
                </strong>
                . It&apos;s one of the few low-maintenance models where anyone
                can run the business confidently and independently.
              </p>
              <p>
                Backed by industry leaders like{" "}
                <strong className="text-slate-900 font-semibold">
                  EPS BANCS, Hitachi, India1, and Findi 
                </strong>
                , you benefit from robust backend support, fast settlements, and
                maximum uptime guarantee.
              </p>
            </div>

            <ul
              className="space-y-4"
              role="list"
              aria-label="High ROI benefits"
            >
              <FeatureItem
                delay={0.1}
                text="fast installation with complete technical support"
                icon={Clock}
              />
              <FeatureItem
                delay={0.2}
                text="100% passive income — machine works 24/7 round-the-clock"
                icon={Zap}
              />
              <FeatureItem
                delay={0.3}
                text="Official partner of India's most trusted ATM network providers"
                icon={Shield}
              />
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}