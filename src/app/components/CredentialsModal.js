"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileCheck, ShieldAlert, ExternalLink, BadgeCheck } from "lucide-react";

export default function CredentialsModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[9998] cursor-zoom-out"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg bg-white rounded-3xl shadow-2xl z-[9999] overflow-hidden border border-slate-200"
          >
            <div className="bg-[#4F293D] p-6 text-white relative">
              <button onClick={onClose} className="absolute right-4 top-4 p-1 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <BadgeCheck className="text-emerald-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Business Verification</h3>
                  <p className="text-xs text-white/70 tracking-wide uppercase">MAKT Solution • Registered Entity</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  To ensure 100% transparency, we provide our official registration details for your verification.
                </p>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">GST Identification Number</span>
                      <p className="text-sm font-mono font-bold text-slate-800 tracking-wider">33AARCM1712B1ZX</p>
                    </div>
                    <a href="https://services.gst.gov.in/services/searchtp" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#4F293D] hover:underline flex items-center gap-1">
                      Verify <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Registered Trade Name</span>
                      <p className="text-sm font-bold text-slate-800">MAKT Solution (India)</p>
                    </div>
                    <FileCheck size={18} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex gap-3">
                <ShieldAlert className="text-emerald-600 shrink-0" size={20} />
                <p className="text-xs text-emerald-800 leading-relaxed">
                  <strong className="block mb-1">Security Note:</strong> OwnATM will never ask for personal PINs. Payments should only be made to corporate accounts.
                </p>
              </div>
              <button onClick={onClose} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all active:scale-95">
                I Understand, Continue
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}