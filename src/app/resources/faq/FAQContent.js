"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Plus, Minus, Search, MessageCircleQuestion, HelpCircle } from "lucide-react";
import Link from "next/link";

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

// ✅ UPDATED: Now accepts 'faqs' as a prop from page.js
export default function FAQContent({ faqs = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from the passed prop
  const categories = useMemo(() => {
    return ["All", ...new Set(faqs.map(faq => faq.category))];
  }, [faqs]);

  // Memoized filtering to avoid recomputation
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, faqs]);

  // Header Animation Trigger
  const [headerRef, headerInView] = useInView();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans selection:bg-[#4F293D] selection:text-white">
      
      {/* HEADER */}
      <header className="bg-gradient-to-br from-[#4F293D] via-[#5A3448] to-[#4F293D] text-white py-30 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10" ref={headerRef}>
          <div 
            className={`transition-all duration-700 ease-out ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Help Center</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 md:mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-purple-100 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about starting your ATM franchise.{" "}
              <Link href="/contact" className="underline hover:text-white font-semibold transition-colors">
                Contact us
              </Link>{" "}
              if you need personalized help.
            </p>

            {/* Search Input */}
            <div className="mt-8 md:mt-10 max-w-lg mx-auto relative">
              <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl transition-shadow"
                placeholder="Search questions (e.g., cost, cash, income)..."
                value={searchTerm}
                onChange={(e) => {
                  setOpenIndex(null);
                  setSearchTerm(e.target.value);
                }}
              />
            </div>

            {/* Category Filters */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-white text-[#4F293D] shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* FAQ LIST */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20" aria-labelledby="faq-list-heading">
        <h2 id="faq-list-heading" className="sr-only">List of Frequently Asked Questions</h2>
        
        {/* Results Count */}
        {(searchTerm || selectedCategory !== "All") && (
          <p className="text-sm text-slate-500 mb-6 text-center animate-fade-in">
            Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        )}

        <div className="space-y-3 md:space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openIndex === faq.id}
                onClick={() =>
                  setOpenIndex(openIndex === faq.id ? null : faq.id)
                }
              />
            ))
          ) : (
            <div className="text-center py-12 md:py-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-100 mb-4">
                <MessageCircleQuestion className="w-8 h-8 md:w-10 md:h-10 text-slate-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                No matching questions found
              </h3>
              <p className="text-slate-500 text-base md:text-lg mb-6">
                Try adjusting your search or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setOpenIndex(null);
                }}
                className="px-6 py-2.5 bg-[#4F293D] text-white font-semibold rounded-full hover:bg-[#3a1d2d] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-100 py-12 md:py-16 lg:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
            Our ATM franchise experts are ready to guide you through the entire process, from application to installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4F293D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/become-franchise"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#4F293D] border-2 border-[#4F293D] font-bold rounded-full hover:bg-[#4F293D] hover:text-white transition-all"
            >
              Apply for Franchise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ✅ Optimized FAQ Item with CSS Grid Transition (High Performance)
function FAQItem({ faq, isOpen, onClick }) {
  return (
    <article
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "bg-white border-[#4F293D]/30 shadow-lg"
          : "bg-white border-slate-200 hover:border-[#4F293D]/20 hover:shadow-md"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-start justify-between gap-4 select-none focus:outline-none focus:bg-slate-50"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          {faq.category && (
            <span className="inline-block px-2.5 py-1 rounded-full bg-pink-50 text-[#4F293D] text-xs font-bold uppercase tracking-wide mb-2">
              {faq.category}
            </span>
          )}
          <h3
            className={`font-bold text-base md:text-lg leading-snug transition-colors ${
              isOpen ? "text-[#4F293D]" : "text-slate-800"
            }`}
          >
            {faq.question}
          </h3>
        </div>

        <div
          className={`shrink-0 mt-1 transition-all duration-300 ${
            isOpen ? "rotate-180 scale-110" : ""
          }`}
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#4F293D]" aria-hidden="true" />
          ) : (
            <Plus className="w-5 h-5 text-slate-400" aria-hidden="true" />
          )}
        </div>
      </button>

      {/* ✅ CSS Grid Animation: Smooth height transition without JS */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100/50 pt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    </article>
  );
}