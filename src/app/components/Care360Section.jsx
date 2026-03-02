import { CheckCircle, ShieldCheck, Zap, TrendingUp, HelpCircle, FileText, MapPin, BadgePercent } from "lucide-react";
import Link from "next/link";
export default function Care360Section() {
  const featureGroups = [
    {
      title: "Growth & Visibility",
      icon: <TrendingUp className="w-5 h-5 text-yellow-500" />,
      items: ["Google GMB Profile & Location Boosting", "Settlement Account Opening Assistance"]
    },
    {
      title: "Financial Security",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />,
      items: ["Payout Delay & Discrepancy Handling", "194N TDS Tagging & Tax Compliance", "Settlement Dispute Resolution"]
    },
    {
      title: "Operational Support",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      items: ["Insurance Claim Filing & Follow-up", "Fast-Response Support Team", "ATM & Asset Troubleshooting"]
    }
  ];

  return (
    <section className="py-24 bg-[#020617] text-white overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_farthest-side_at_50%_-20%,rgba(234,179,8,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
              <span className="w-12 h-[1px] bg-yellow-500/50"></span>
              Elite Merchant Services
            </h2>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              ATM Care360 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                Ecosystem.
              </span>
            </h1>
          </div>
          <div className="hidden lg:block pb-2">
            <p className="text-slate-400 text-right max-w-[280px] text-sm leading-relaxed italic border-r-2 border-yellow-500/30 pr-4">
              "The most comprehensive operational security layer in the industry."
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Action Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-slate-900/80 border border-slate-800 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-2xl mb-8">
                  <ShieldCheck className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Lifetime <br/>Membership</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  One-time activation for perpetual business protection and automated compliance management.
                </p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-black tracking-tighter text-white">₹30,000</span>
                  <span className="text-slate-500 font-medium">INR</span>
                </div>
              </div>

             <Link
  href="/become-franchise"
  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group/btn"
>
  Get Care360 Access
  <Zap className="w-5 h-5 fill-current transition-transform group-hover/btn:translate-x-1" />
</Link>
            </div>
          </div>

          {/* Detailed Features Grid */}
          <div className="lg:col-span-7 grid gap-6">
            {featureGroups.map((group, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 rounded-[2rem] p-8 transition-colors group"
              >
                <div className="absolute -top-5 right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-extrabold uppercase tracking-wider px-5 py-2 rounded-full shadow-xl">
  🎉 Free Pack – Valid till Feb 28, 2026
</div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-yellow-500/10 transition-colors">
                    {group.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-200">{group.title}</h4>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-yellow-500/40 mt-1 shrink-0" />
                      <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex items-center justify-center gap-8 py-4 px-8 border border-dashed border-slate-800 rounded-2xl">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Partnerships & Support</span>
              <div className="flex gap-4 opacity-30 grayscale contrast-125">
                {/* Simulated Partner Icons */}
                <div className="w-8 h-8 bg-white rounded-full shrink-0" />
                <div className="w-8 h-8 bg-white rounded-full shrink-0" />
                <div className="w-8 h-8 bg-white rounded-full shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}