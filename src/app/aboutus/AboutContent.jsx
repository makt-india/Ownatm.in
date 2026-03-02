"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Handshake, TrendingUp, Users, Clock, MapPin,Scale, FileCheck, Lock  } from "lucide-react";

import Image from "next/image";
import CTASection from "../components/CTASection";
import CredentialsModal from "../components/CredentialsModal"; // Ensure the .jsx extension matches your file
import RecentInstallations from "../components/RecentInstallations"

export default function AboutContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#4F293D] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative py-30 md:py-28 lg:py-32 overflow-hidden" aria-labelledby="about-hero-heading">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-pink-50/20 via-white to-white" />
          <div className="absolute top-10 md:top-20 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-[#4F293D]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-5 md:mb-6 tracking-tight">
              About <span className="text-[#4F293D] inline-block">OwnATM</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Empowering entrepreneurs with{" "}
              <span className="font-semibold text-slate-900">secure, transparent, and profitable</span>{" "}
              ATM franchise opportunities across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative" aria-labelledby="who-we-are-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-[#4F293D]/10 text-[#4F293D] font-bold text-xs md:text-sm mb-6 uppercase tracking-wider">
                Who We Are
              </div>

              <h2 id="who-we-are-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                India's Most Reliable ATM Franchise Platform
              </h2>

              <div className="space-y-5 md:space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-900">OwnATM.in</strong> connects investors with India's leading White Label ATM providers —{" "}
                  <strong className="text-slate-900">EPS BANCS, Hitachi, Findi, and India1</strong> — enabling shop owners, property owners, and
                  entrepreneurs to establish high-return ATM units.
                </p>

                <p>
                  Our team manages everything from <strong className="text-slate-900">documentation and KYC</strong> to{" "}
                  <strong className="text-slate-900">site verification, installation, and lifetime support</strong>. Whether you deploy one ATM or
                  expand a multi-city network, we ensure a smooth, profitable experience.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard value="500+" label="ATMs Managed" icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-[#4F293D]" />} />
              <StatCard value="Pan-India" label="Network Reach" icon={<MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#4F293D]" />} />
              <StatCard value="20-40" label="Fast Installation" icon={<Clock className="w-5 h-5 md:w-6 md:h-6 text-[#4F293D]" />} />
              <StatCard value="24/7" label="Live Support" icon={<ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#4F293D]" />} />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden" aria-labelledby="why-choose-heading">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Why Choose OwnATM?
            </h2>
            <p className="text-slate-700 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We streamline the ATM franchise process with verified partnerships and transparent operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[9/13] order-2 lg:order-1"
            >
              <Image
                src="/img/atm3.webp"
                alt="Modern ATM installed at a commercial location"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
                <p className="text-white font-medium text-base md:text-lg leading-relaxed">
                  Turning unused commercial spaces into predictable monthly income.
                </p>
              </div>
            </motion.div>

            {/* Benefits List */}
            <div className="space-y-6 md:space-y-7 order-1 lg:order-2">
              <ListItem
                title="End-to-End ATM Deployment Support"
                text="We handle everything: location approval, franchise documentation, KYC, service provider onboarding, site preparation, interior branding, network activation, and post-installation monitoring. No running behind banks or vendors — we manage the entire workflow from Day 1 to go-live."
                delay={0.1}
              />
              <ListItem
                title="Direct Partnerships With Top ATM Operators"
                text="We work with India’s most reliable ATM networks — EPS BANCS, Hitachi MoneySpot, India1, and Findi/Indicash. You get verified agreements, transparent SLAs, and official deployment timelines. No unauthorized middlemen, no uncertainty, no fake processing charges."
                delay={0.15}
              />
              <ListItem
                title="Stable Passive Income From Every Transaction"
                text="Your ATM generates revenue through withdrawals, balance inquiries, mini statements, AEPS deposits, and CRM cash deposits depending on the model. With the right location, owners consistently earn monthly passive income without needing to operate or supervise the ATM."
                delay={0.2}
              />
              <ListItem
                title="Data-Driven Location Analysis for Higher ROI"
                text="Our team reviews actual footfall, nearby competition, bank branch density, residential clusters, and cash-demand trends to identify high-earning spots. This ensures maximum daily transactions, faster ROI, and long-term income stability."
                delay={0.25}
              />
              <ListItem
                title="Transparent Operations and Dedicated Support Team"
                text="You get real-time support for installation updates, uptime monitoring, technician coordination, cash loading status, and dispute resolution. We maintain a transparent process with clear communication — no hidden fees, no last-minute shocks."
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>
      <RecentInstallations/>

      {/* MISSION & VISION SECTION */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" aria-labelledby="mission-vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="mission-vision-heading" className="sr-only">Our Mission and Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <InfoCard
              title="Our Mission"
              desc="To make ATM franchising simple, transparent, and profitable for individuals across India."
              points={[
                "Enable reliable passive-income opportunities for entrepreneurs",
                "Provide seamless onboarding and comprehensive support",
                "Deliver transparent, verified financial guidance",
              ]}
              delay={0}
            />
            <InfoCard
              title="Our Vision"
              desc="To become India's most trusted ATM franchise platform accessible to entrepreneurs in every region."
              points={[
                "Build a robust nationwide ATM network coverage",
                "Support both urban and rural investors equally",
                "Ensure long-term operational reliability and uptime",
              ]}
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY SECTION - Solving the "Red Flags" */}
    <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative" id="redflag">
      
      {/* === BACKGROUND DECORATION (Fixed Colors) === */}
      {/* Replaced Purple blur with Emerald/Blue blur to match brand */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === HEADER === */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mb-6">
            <Lock className="w-3 h-3" />
            Transparency & Compliance
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            How Our ATM Franchise <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Model Operates
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We bridge the gap between investors and RBI-authorized operators. 
            We act as your <strong>facilitation and coordination partner</strong> to 
            streamline documentation, site approval, and installation.
          </p>
        </div>

        {/* === CARDS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1: Investment (Emerald) */}
          <div className="group bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-emerald-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
              Clear Investment Structure
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              No hidden fees. Security deposits and setup costs are transparently 
              outlined. All installation-related payments are processed according 
              to the official policy of the WLA operator.
            </p>
          </div>

          {/* Card 2: Coordination (Blue) */}
          <div className="group bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Handshake className="text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
              Managed Coordination
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              We handle the headache: Site verification, documentation, and 
              engineer scheduling. Technical support, monitoring, and cash 
              settlement remain under the Operator's secure framework.
            </p>
          </div>

          {/* Card 3: RBI/Legal (Slate/Cyan) - Replaced Purple */}
          <div className="group bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              {/* Changed Icon to 'Scale' (Legal/Rules) instead of TrendingUp */}
              <Scale className="text-cyan-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
              RBI-Authorized Partners
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              All installations are legally associated with recognized White Label 
              ATM operators (Hitachi, India1, EPS). Agreements are executed under 
              strict regulatory compliance structures.
            </p>
          </div>

        </div>

        {/* === VERIFICATION BOX (Redesigned for Trust) === */}
        <div className="mt-16 relative p-px rounded-2xl overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-blue-500/30 to-emerald-500/30 rounded-2xl" />
          
          <div className="relative bg-slate-950/90 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-300 text-sm md:text-base">
              
              <div className="flex items-center gap-2 text-emerald-400 font-bold shrink-0">
                <FileCheck className="w-5 h-5" />
                <span>Due Diligence:</span>
              </div>
              
              <p className="max-w-2xl">
                Investors should always verify GSTIN, corporate registration, 
                and operator authorization before proceeding. 
              </p>

<button
  onClick={() => setIsModalOpen(true)}
  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
>
  View Our Credentials →
</button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
    {/* CORE VALUES SECTION */}
      <CoreValues />

      {/* CTA SECTION */}
      <CTASection />

      {/* MODAL OVERLAY */}
      <CredentialsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

/* ------------------------- SUB COMPONENTS ------------------------- */

function StatCard({ value, label, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:border-[#4F293D]/25 transition-all duration-300"
    >
      <div className="mb-3 p-2.5 md:p-3 bg-gradient-to-br from-slate-50 to-pink-50 rounded-full transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{value}</h3>
      <p className="text-slate-600 mt-1 text-xs md:text-sm font-medium uppercase tracking-wide">{label}</p>
    </motion.div>
  );
}

function ListItem({ title, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-3 md:gap-4 items-start group"
    >
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#4F293D] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
        ✓
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-[#4F293D] transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

function InfoCard({ title, desc, points, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden hover:shadow-xl hover:border-[#4F293D]/30 transition-all duration-300 group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F293D]/5 rounded-full blur-2xl group-hover:bg-[#4F293D]/10 transition-colors duration-500" aria-hidden="true" />
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">{title}</h3>
      <p className="text-slate-700 mb-8 text-base md:text-lg leading-relaxed relative z-10">{desc}</p>
      <ul className="space-y-4 relative z-10">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700 font-medium">
            <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#4F293D]" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function CoreValues() {
  const values = [
    {
      title: "Transparency",
      desc: "Clear process, verified details, and no hidden charges at any stage of your franchise journey.",
      icon: <ShieldCheck className="w-9 h-9 md:w-10 md:h-10" />,
    },
    {
      title: "Reliability",
      desc: "Every ATM installation follows strict security standards and uptime requirements for your peace of mind.",
      icon: <Handshake className="w-9 h-9 md:w-10 md:h-10" />,
    },
    {
      title: "Growth Focused",
      desc: "Helping investors build strong, sustainable, long-term passive income streams across India.",
      icon: <TrendingUp className="w-9 h-9 md:w-10 md:h-10" />,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50/50 to-white" aria-labelledby="core-values-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="core-values-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Our Core Values
          </h2>
          <div className="h-1 w-20 bg-[#4F293D] mx-auto mt-4 rounded-full" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="mb-6 inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-pink-50 text-[#4F293D] group-hover:bg-[#4F293D] group-hover:text-white transition-all duration-300">
                {v.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#4F293D] transition-colors">
                {v.title}
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}