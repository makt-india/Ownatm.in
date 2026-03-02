import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import ServicesOverview from "./components/ServicesOverview";
import KeyPartners from "./components/KeyPartners";
// Import the ClientWrapper statically (it's safe if the component itself has 'use client')
import ClientWrapper from "./components/ClientWrapper";

// Loading skeleton for better UX
const LoadingSkeleton = ({ height }) => (
  <section className={`w-full ${height} bg-slate-50 flex items-center justify-center p-8`}>
    <div className="flex flex-col items-center gap-6">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
      <h3 className="text-lg font-semibold text-slate-700 animate-pulse">
        Loading ATM Franchise Options...
      </h3>
      <p className="text-sm text-slate-500">EPS, Hitachi, Findi, India1 partners</p>
    </div>
  </section>
);

// Dynamic imports to split code and improve initial load speed
const ATMOpportunity = dynamic(() => import("./components/ATMOpportunity"), {
  loading: () => <LoadingSkeleton height="h-[520px]" />,
});

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <LoadingSkeleton height="h-[420px]" />,
});

const CTASection = dynamic(() => import("./components/CTASection"), {
  loading: () => <LoadingSkeleton height="h-[280px]" />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <KeyPartners />
      <ATMOpportunity />
      <Testimonials />
      <CTASection />
      
      {/* This wrapper handles browser-specific logic (like the Profit Calculator) */}
      <ClientWrapper />
    </>
  );
}