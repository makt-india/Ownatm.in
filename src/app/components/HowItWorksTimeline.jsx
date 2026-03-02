"use client";

import { motion } from "framer-motion";
import { FileCheck, Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Application & Documentation",
    desc: "Submit your KYC (Aadhaar, PAN) and property documents. We process the application with the franchise provider (EPS, Hitachi, etc.).",
    icon: <FileCheck className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Site Verification",
    desc: "A field officer visits your location to check feasibility, footfall, and technical requirements (power, VSAT feasibility).",
    icon: <Search className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Installation & Setup",
    desc: "Once approved, the ATM machine, VSAT/Network, and branding materials are shipped and installed at your shop.",
    icon: <Wrench className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Go Live & Earning",
    desc: "Cash loading is initiated, and the ATM goes live. You start earning a commission on every transaction from Day 1.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
];

export default function HowItWorksTimeline() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How It <span className="text-[#4F293D]">Works</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our streamlined 4-step process ensures your ATM is up and running in just <strong>7–10 days</strong>.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full text-center md:text-left">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#4F293D]/30 transition-all duration-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#4F293D] shadow-lg shadow-[#4F293D]/30 shrink-0">
                  {step.icon}
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#4F293D] animate-ping opacity-20" />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}