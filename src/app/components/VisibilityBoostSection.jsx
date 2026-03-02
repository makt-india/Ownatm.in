import { CheckCircle2, MapPin, Globe, Search, BarChart3, TrendingUp, Zap, MousePointer2 } from "lucide-react";
import Link from "next/link";

export default function VisibilityBoostSection() {
  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "GMB Verification", text: "Official Google My Business setup & instant verification." },
    { icon: <Search className="w-6 h-6" />, title: "Local SEO", text: "Dominating local search results for cash points nearby." },
    { icon: <MapPin className="w-6 h-6" />, title: "Map Tagging", title: "Precise geo-tagging for easy navigation." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Live Insights", text: "Track how many customers find your ATM monthly." },
  ];

  return (
<section className="py-24 bg-white overflow-hidden" id="visibility">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Visual Icon Hero */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-indigo-500/10 rounded-full animate-ping" />
                <div className="absolute w-48 h-48 bg-indigo-500/20 rounded-full" />
              </div>
              
              <div className="relative bg-slate-900 rounded-[3rem] p-12 text-center shadow-2xl border-4 border-white">
                <div className="w-20 h-20 bg-indigo-500 rounded-3xl rotate-12 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-500/40">
                  <MapPin className="w-10 h-10 text-white -rotate-12" />
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4 italic">"Find My ATM"</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Our system pings local networks to ensure your ATM is the #1 suggested result in a 5km radius.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <MousePointer2 className="w-5 h-5 text-indigo-400" />
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">High Click-Through Rate</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">30% Volume Increase</span>
                  </div>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute -top-6 -right-6 bg-emerald-500 text-white p-4 rounded-2xl shadow-xl">
                <Zap className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>

          {/* Right Column: Content & Feature Grid */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase mb-6 tracking-[0.2em] border border-emerald-100">
              Network Optimization
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none mb-8">
              Visibility <br />
              <span className="text-indigo-600">Engine.</span>
            </h1>
            
            <p className="text-slate-600 text-lg mb-12 max-w-xl">
              We don't just list your business; we optimize your digital footprint to ensure every traveler and local knows exactly where to find your ATM.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {features.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="mb-4 text-indigo-600 group-hover:scale-110 transition-transform origin-left duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

<Link
  href="/become-franchise"
  className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold transition-all group"
>
  Get Started with Visibility Boost
  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}