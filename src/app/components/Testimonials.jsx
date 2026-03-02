"use client";

import { useState, useEffect, useRef } from "react";
import { Star, MapPin, Quote, BadgeCheck,  ShieldAlert, ChevronRight} from "lucide-react";

import Link from "next/link";

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

export default function Testimonials() {
  // ✅ UPDATED CONTENT: "Human" stories with specific details
const items = [
  {
    quote:
      "I had an empty commercial space near the bus stand that wasn’t generating income. After installing an India1 ATM through OwnATM, I now receive steady monthly commission based on transactions. It also brought additional walk-in customers to my grocery store.",
    name: "Rajesh Kumar",
    role: "Retail Shop Owner",
    location: "Patna, Bihar",
    initial: "R",
    brand: "India1 ATM Franchise",
  },
  {
    quote:
      "As a retired banker, I was looking for a low-maintenance investment option. The Hitachi Money Spot ATM was installed within a few weeks after location approval. Monthly settlements are transparent, and I don’t need to manage staff or daily operations.",
    name: "Venkatachalam R.",
    role: "Retired Bank Manager",
    location: "Salem, Tamil Nadu",
    initial: "V",
    brand: "Hitachi Money Spot Franchise",
  },
  {
    quote:
      "Initially I was concerned about maintenance and technical downtime. However, the support team handles monitoring and service issues. The ATM runs independently, and income depends mainly on location footfall. I am considering adding another machine at a different property.",
    name: "Priya Devi",
    role: "Commercial Property Owner",
    location: "Lucknow, Uttar Pradesh",
    initial: "P",
    brand: "EPS White Label ATM",
  },
];

  const [headerRef, headerInView] = useInView();
  const [trustRef, trustInView] = useInView();

  return (
    <section 
      className="py-20 md:py-28 bg-slate-50 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -top-32 -right-32" />
        <div className="absolute w-[400px] h-[400px] bg-[#4F293D]/5 rounded-full blur-3xl bottom-0 left-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-wider rounded-full">
            Success Stories
          </span>
          <h2 
            id="testimonials-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Trusted by <span className="text-[#4F293D]">Real Partners</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            See how property owners and entrepreneurs across India are turning small spaces into profitable assets.
          </p>
        </header>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <TestimonialCard key={i} item={t} index={i} />
          ))}
        </div>

        {/* Trust Badge */}
        <div
          ref={trustRef}
          className={`text-center mt-16 transition-all duration-700 delay-500 ease-out ${
            trustInView ? "opacity-100" : "opacity-0"
          }`}
        >

{/* ... inside your component return ... */}

<div
  ref={trustRef}
  className={`flex flex-col items-center justify-center mt-16 space-y-6 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
    trustInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  
  {/* 1. TRUST BADGE (Redesigned with Community Feel) */}
  <div className="group relative inline-flex items-center gap-4 pl-2 pr-6 py-2 bg-white border border-slate-200 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-emerald-100/50 hover:scale-105 transition-all duration-300 cursor-default">
    
    {/* Animated Gradient Border on Hover */}
    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-emerald-100 transition-colors duration-300" />

    {/* Fake User Avatars (No images needed) */}
    <div className="relative z-10 flex -space-x-3">
      <div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
        AK
      </div>
      <div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
        RM
      </div>
      <div className="w-10 h-10 rounded-full border-[3px] border-white bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
        +1k
      </div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 text-left flex flex-col justify-center">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold text-slate-900 leading-none">
          Join 1,000+ Owners
        </span>
        <BadgeCheck className="w-4 h-4 text-emerald-500" fill="currentColor" stroke="white" />
      </div>
      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
        Verified Franchise Partners
      </span>
    </div>
  </div>

  {/* 2. SCAM ALERT LINK (Redesigned as a 'Safety Pill') */}
<Link
  href="/aboutus/#redflag"
  className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-orange-50 border border-orange-100 text-orange-900 hover:bg-orange-100/80 hover:border-orange-200 hover:shadow-md transition-all duration-300 mt-6"
>
  {/* Pulsing Icon Background */}
  <div className="relative flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm border border-orange-100 group-hover:scale-110 transition-transform">
    <span className="absolute inline-flex h-full w-full rounded-lg bg-orange-400 opacity-0 group-hover:animate-ping group-hover:opacity-20"></span>
    <ShieldAlert className="w-4 h-4 text-orange-500" />
  </div>

  <div className="flex flex-col text-left leading-none">
    <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider mb-0.5">
      Safety First
    </span>
    <span className="text-sm font-semibold">
      Worried about scams? <span className="underline decoration-orange-300 underline-offset-2">Read this.</span>
    </span>
  </div>

  <ChevronRight className="w-4 h-4 text-orange-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
</Link>
</div>

        </div>
      </div>
    </section>
    
    
  );
}

// ✅ Extracted Card Component
function TestimonialCard({ item, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <figure
      ref={ref}
      className={`relative flex flex-col h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-slate-100 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* 5-Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote Icon */}
      <div className="absolute top-8 right-8 text-slate-100">
        <Quote className="w-12 h-12" />
      </div>

      {/* Quote Text */}
      <blockquote className="relative z-10 flex-grow">
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          "{item.quote}"
        </p>
      </blockquote>

      {/* Footer / User Info */}
      <figcaption className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4F293D] to-[#6B3A52] flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
          {item.initial}
        </div>
        
        <div className="min-w-0">
          <div className="font-bold text-slate-900 text-base">
            {item.name}
          </div>
          <div className="text-xs text-slate-500 font-medium mb-1">
            {item.role}
          </div>
          
          {/* Location & Brand Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center text-xs text-slate-400">
              <MapPin className="w-3 h-3 mr-1" />
              {item.location}
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-semibold border border-emerald-100">
              {item.brand}
            </span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}