"use client";

import Link from "next/link";
import { Gift, FileText } from "lucide-react";

export default function FloatingOfferTab() {
  return (
    <>
      {/* DESKTOP SIDEBAR ONLY */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex-col gap-3">

        {/* FREE OFFER */}
        <Link href="/offer-pages" className="group">
          <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-black 
            px-3 py-6 rounded-l-2xl shadow-xl
            flex flex-col items-center gap-3 
            hover:pr-6 transition-all duration-300">

            <Gift size={20} />

            <span className="writing-vertical text-xs font-black tracking-widest">
              FREE OFFER
            </span>

            <span className="text-[10px] font-bold opacity-70">
              Care360 Free
            </span>
          </div>
        </Link>

        {/* APPLY NOW */}
        <Link href="/become-franchise" className="group">
          <div className="bg-gradient-to-b from-slate-800 to-black text-white 
            px-3 py-6 rounded-l-2xl shadow-xl
            flex flex-col items-center gap-3 
            hover:pr-6 transition-all duration-300">

            <FileText size={20} />

            <span className="writing-vertical text-xs font-black tracking-widest">
              APPLY NOW
            </span>

            <span className="text-[10px] font-bold opacity-70">
              Quick Form
            </span>
          </div>
        </Link>

      </div>
    </>
  );
}
