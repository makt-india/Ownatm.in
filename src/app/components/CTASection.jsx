"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Headphones } from "lucide-react";

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

export default function CTASection() {
  // We trigger the whole sequence once the container is in view
  const [ref, isInView] = useInView();

  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-gradient-to-br from-[#4F293D] via-[#5A3448] to-[#4F293D] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Glow Effects - Optimized */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-400/10 blur-3xl -top-32 -left-20 animate-pulse opacity-30" />
        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-white/5 blur-3xl bottom-0 -right-20" />
        {/* Added subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div 
        ref={ref}
        className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10"
      >
        
        {/* Heading - Slide Up & Fade */}
        <h2
          id="cta-heading"
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Start Your <span className="text-emerald-300 inline-block">ATM Franchise</span> Today
        </h2>

        {/* Subtitle - Delayed Slide Up */}
        <p
          className={`mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-purple-50/95 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-700 ease-out delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
       Backed by RBI-regulated ATM operators with proven payouts and nationwide service support.
          <strong className="font-semibold text-white"> EPS Bancs ,Hitachi, EPS, and Findi</strong>.
        </p>

        {/* CTA Button - Scale In */}
        <div
          className={`mt-8 md:mt-10 flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-300 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Link
            href="/become-franchise"
            className="group relative inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#4F293D] font-bold text-base sm:text-lg rounded-full shadow-2xl shadow-black/30 hover:shadow-emerald-400/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
            aria-label="Apply now to start earning with ATM franchise"
          >
            <span>Apply Now — Start Earning</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 duration-300" aria-hidden="true" />
            
            {/* Inner Shine Effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </Link>
          
          {/* Trust Badges - Fade In */}
          <div 
            className={`mt-6 md:mt-7 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-purple-100 font-medium transition-all duration-700 delay-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              No hidden charges
            </span>
            <span className="hidden sm:inline text-purple-300/50">•</span>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              24/7 Support
            </span>
          </div>

          {/* Added Urgency Text */}
          <p
            className={`mt-4 text-xs sm:text-sm text-emerald-300/80 font-medium transition-all duration-700 delay-700 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            ✨ Limited franchises available in your area
          </p>
        </div>

        {/* Stats Bar for Added Credibility - Slide Up */}
        <div
          className={`mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { value: "500+", label: "Active Franchises" },
            { value: "₹50K+", label: "Avg. Monthly Income" },
            { value: "99%", label: "Uptime Guarantee" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-emerald-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-purple-200 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}