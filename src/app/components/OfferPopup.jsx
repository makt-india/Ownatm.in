"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenOffer");
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenOffer", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-lg bg-[#0f172a] text-white rounded-[2rem] shadow-2xl z-[10001] overflow-hidden border border-yellow-500/30"
          >
            {/* Close */}
            <button
              onClick={closePopup}
              className="absolute right-5 top-5 text-white/40 hover:text-white transition"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-center">
              <div className="inline-flex p-3 bg-black/20 rounded-full mb-3">
                <ShieldCheck size={28} className="text-black" />
              </div>
              <h3 className="text-black text-2xl font-black uppercase tracking-wide">
                Care360 Support Included
              </h3>
              <p className="text-black/80 text-sm font-bold mt-1">
                Structured Operational & Compliance Assistance
              </p>
            </div>

            {/* Body */}
            <div className="p-8 text-center">

              <div className="mb-5">
                <p className="text-slate-400 line-through text-lg">
                  Estimated Activation Value: ₹30,000
                </p>
                <h4 className="text-5xl font-black text-yellow-500">
                  ₹0
                </h4>
                <p className="text-sm text-slate-400 mt-1">
                  Included for eligible franchise applicants
                </p>
              </div>

              <div className="text-left space-y-3 text-sm text-slate-300 mb-6">
                <div className="flex items-start gap-2">
                  <Zap size={16} className="text-yellow-500 mt-1" />
                  Location Optimization & Visibility Guidance
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-yellow-500 mt-1" />
                  Tax & 194N Compliance Assistance
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-yellow-500 mt-1" />
                  Payout Review & Dispute Coordination
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-yellow-500 mt-1" />
                  Operational Risk Advisory Support
                </div>
              </div>

              <Link
                href="/become-franchise"
                className="w-full py-4 bg-yellow-500 text-black rounded-xl font-extrabold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all active:scale-95"
              >
                Check Eligibility <ArrowRight size={18} />
              </Link>

              <p className="text-[10px] text-slate-500 mt-3">
                Benefits are subject to documentation approval and operator verification.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}