import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    location: "Tiruchengode, Tamil Nadu",
    partner: "EPS Bancs",
    date: "Jan 24, 2026",
    status: "Live & Transacting",
    img: "/img/Eps-about1.webp",
  },
  {
    id: 2,
    location: "Erode Main Road, TN",
    partner: "Findi",
    date: "Jan 10, 2026",
    status: "Live & Transacting",
    img: "/img/findi-about1.webp",
  },
  {
    id: 3,
    location: "Salem Bypass, TN",
    partner: "EPS Bancs",
    date: "Dec 15, 2025",
    status: "Live & Transacting",
    img: "/img/Eps-about2.webp",
  },
  {
    id: 4,
    location: "Namakkal Bus Stand, TN",
    partner: "Hitachi Money Spot",
    date: "Nov 22, 2025",
    status: "Live & Transacting",
    img: "/img/hitachi-about1.webp",
  },
];

export default function RecentInstallations() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Our Work in <span className="text-emerald-400">Action</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We don't just talk about franchises; we build them. Here are some of our 
              latest installations across Tamil Nadu.
            </p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative h-64 w-full overflow-hidden">
                
                <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {project.status}
                </div>

                {/* FIXED IMAGE (No design changes) */}
                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={project.img}
                    alt={project.location}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 85vw, 400px"
                  />
                </div>

              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    {project.location}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.partner} Franchise
                </h3>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[300px] flex flex-col items-center justify-center bg-emerald-900/10 border border-dashed border-emerald-500/30 rounded-2xl p-6 text-center hover:bg-emerald-900/20 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Your Location?</h3>
            <p className="text-slate-400 mb-6">
              We are looking for partners in your area. Check availability now.
            </p>
            
            <Link
              href="/become-franchise"
              className="px-6 py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors inline-block w-full"
            >
              Check Availability
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
