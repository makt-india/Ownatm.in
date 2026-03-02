"use client";


import { useState, useEffect, useRef } from "react";
import {
  Banknote,
  Receipt,
  Wallet,
  Lock,
  Activity,
  Globe,
  Shield,
  Smartphone,
  RefreshCw,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import HowItWorksTimeline from "../components/HowItWorksTimeline";
import ComparisonTable from "../components/ComparisonTable"; 
import ProfitCalculator from "../components/ProfitCalculator";
import Care360Section from "../components/Care360Section";
import VisibilityBoostSection from "../components/VisibilityBoostSection"

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

export default function ServiceContent() {
  const services = [
    {
      title: "EPS ATM Franchise",
      desc: "Fast settlements, strong uptime, and wide network coverage. We handle verification, paperwork, and site approval.",
      link: "/atm-franchise/eps",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Hitachi ATM Franchise",
      desc: "Trusted for high-quality ATM hardware and reliable operations. Full onboarding and installation support handled.",
      link: "/atm-franchise/hitachi",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "India1 ATM Franchise",
      desc: "Best for semi-urban and rural markets. Stable monthly revenue with installation and operational support.",
      link: "/atm-franchise/india1",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Findi ATM Franchise",
      desc: "Rapid deployment in rural zones with minimal paperwork and strong backend support.",
      link: "/atm-franchise/findi",
      icon: <Smartphone className="w-6 h-6" />,
    },
  ];

  const features = [
    {
      icon: <Banknote className="w-7 h-7 md:w-8 md:h-8 text-[#4F293D]" />,
      title: "Instant Cash Withdrawal",
      desc: "High uptime ensures reliable and profitable cash withdrawal operations 24/7.",
    },
    {
      icon: <Receipt className="w-7 h-7 md:w-8 md:h-8 text-[#4F293D]" />,
      title: "Mini Statement",
      desc: "Quick access to recent transactions for customers with instant printouts.",
    },
    {
      icon: <Wallet className="w-7 h-7 md:w-8 md:h-8 text-[#4F293D]" />,
      title: "Balance Enquiry",
      desc: "Real-time balance checks that improve daily footfall and customer satisfaction.",
    },
    {
      icon: <Lock className="w-7 h-7 md:w-8 md:h-8 text-[#4F293D]" />,
      title: "Secure PIN Change",
      desc: "Encrypted, secure PIN updates powered by bank-grade security standards.",
    },
  ];

  const techSpecs = [
    { icon: <Activity className="w-7 h-7" />, title: "99% Uptime", desc: "Active monitoring ensures maximum availability and reliability." },
    { icon: <Globe className="w-7 h-7" />, title: "Multi-Bank Support", desc: "Accepts all major debit cards across India seamlessly." },
    { icon: <Shield className="w-7 h-7" />, title: "Fraud Protection", desc: "Anti-skimming sensors and encrypted PIN pad technology." },
    { icon: <Smartphone className="w-7 h-7" />, title: "SMS Alerts", desc: "Instant transaction alerts that boost customer confidence." },
    { icon: <RefreshCw className="w-7 h-7" />, title: "Cash Refill Support", desc: "Scheduled refills to avoid downtime and maximize earnings." },
    { icon: <Headphones className="w-7 h-7" />, title: "24×7 Support", desc: "Always-on technical support team for any issues." },
  ];

  const [heroRef, heroInView] = useInView();

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#4F293D] selection:text-white">

      {/* HERO SECTION */}
      <section className="relative pt-30 md:pt-35 lg:pt-36 pb-16 md:pb-24 lg:pb-28 overflow-hidden bg-gradient-to-br from-[#4F293D] via-[#5A3448] to-[#4F293D]" aria-labelledby="services-hero-heading">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-emerald-400/10 blur-[90px] rounded-full -top-20 -left-10" />
          <div className="absolute w-[260px] h-[260px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-pink-500/20 blur-[80px] rounded-full bottom-0 right-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ease-out ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              id="services-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
            >
              Our <span className="text-emerald-300 inline-block">Services</span>
            </h1>

            <p className="text-purple-50 mt-4 md:mt-5 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-150">
              Complete ATM franchise solutions — documentation, installation, site verification & lifetime support.
            </p>
          </div>
        </div>
      </section>
          

      {/* SERVICES GRID */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative" aria-labelledby="franchise-services-heading">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#4F293D]/5 blur-3xl -top-10 left-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <h2 id="franchise-services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Our ATM Franchise Services
            </h2>
            <p className="text-slate-600 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Verified documentation, location support, installation, and 24×7 operational assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {services.map((item, index) => (
              <ServiceCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Table Component */}
      <ComparisonTable />
 
      {/* FEATURES */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="key-features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <h2 id="key-features-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Key Features We Offer
            </h2>
            <p className="text-slate-600 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Designed to maximize your ATM's daily and monthly transaction volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((item, index) => (
              <FeatureListCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
      <VisibilityBoostSection/>
      {/* Profit Calculator Component */}
      <ProfitCalculator />

      {/* TECHNOLOGY */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" aria-labelledby="technology-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <h2 id="technology-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Advanced Technology & Support
            </h2>
            <p className="text-slate-600 mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              High-performance ATM hardware backed with modern banking security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {techSpecs.map((item, index) => (
              <TechCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <HowItWorksTimeline />
      <Care360Section />

      {/* PREMIUM SUPPORT */}
      

      {/* CTA */}
      <section
        className="relative py-16 md:py-20 lg:py-24 bg-transparent text-[#4F293D]"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6"
          >
            Ready to Start Your ATM Franchise?
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg mb-8 md:mb-10 leading-relaxed text-[#6e4358]">
            Fast onboarding, transparent guidance, and lifetime support for all franchisees.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              href="/become-franchise"
              className="group flex items-center justify-center gap-2 px-8 md:px-10 py-3.5 md:py-4 bg-[#4F293D] text-white rounded-full shadow-lg text-base md:text-lg font-bold hover:scale-105 hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            <Link
              href="/become-franchise"
              className="px-8 md:px-10 py-3.5 md:py-4 border-2 border-[#4F293D] rounded-full text-[#4F293D] text-base md:text-lg font-bold hover:bg-[#4F293D]/10 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-purple-100"
            >
              Talk to Expert
            </Link>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-[#4F293D]/20 pt-8 md:pt-10">
            <StatBox number="1,500+" label="Live ATMs Installed" index={0} />
            <StatBox number="98%" label="Success Rate" index={1} />
            <StatBox number="24×7" label="Monitoring & Support" index={2} />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------------- SUB COMPONENTS (Optimized) ---------------------- */

function ServiceCard({ title, desc, link, icon, index }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={link} className="block group h-full">
        <article className="p-6 md:p-7 bg-white rounded-2xl border border-slate-100 shadow-md hover:border-[#4F293D]/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-[#4F293D] mb-4 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-[#4F293D] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 flex-1 text-sm md:text-base leading-relaxed">{desc}</p>
          <div className="mt-5 text-[#4F293D] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            View Details <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </article>
      </Link>
    </div>
  );
}

function FeatureListCard({ icon, title, desc, index }) {
  const [ref, isInView] = useInView();
  return (
    <article
      ref={ref}
      className={`flex flex-col sm:flex-row gap-5 md:gap-6 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center shadow-sm flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{desc}</p>
      </div>
    </article>
  );
}

function TechCard({ icon, title, desc, index }) {
  const [ref, isInView] = useInView();
  return (
    <article
      ref={ref}
      className={`text-center bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-md hover:shadow-xl hover:border-[#4F293D]/25 hover:-translate-y-1 transition-all duration-700 ease-out group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="inline-flex p-3 md:p-4 rounded-full bg-gradient-to-br from-slate-50 to-pink-50 text-[#4F293D] mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4F293D] transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{desc}</p>
    </article>
  );
}

function SupportStat({ val, label, index }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`text-center p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{val}</h3>
      <p className="text-emerald-200 text-sm md:text-base mt-1 md:mt-2 font-medium">{label}</p>
    </div>
  );
}

function CheckItem({ text }) {
  return (
    <p className="text-slate-700 text-sm md:text-base font-medium flex items-start gap-2 md:gap-3">
      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
      {text}
    </p>
  );
}

function StatBox({ number, label, index }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`p-4 md:p-6 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-3xl md:text-4xl font-extrabold text-[#4F293D]">
        {number}
      </h3>

      <p className="mt-1 md:mt-2 font-medium text-sm md:text-base text-[#6E4358]">
        {label}
      </p>
    </div>
  );
}