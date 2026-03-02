"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X, Calculator, Gift } from "lucide-react";

const BRAND_COLORS = {
  primary: "#4F293D",
  accent: "#6B4E5A",
};

// -----------------------------------------
// SHARED LINKS (Desktop)
// -----------------------------------------
function NavLink({ href, children, closeAll }) {
  return (
    <Link
      href={href}
      onClick={closeAll}
      className="relative group py-2 inline-flex items-center"
    >
      <span className="text-slate-700 group-hover:text-[#4F293D] font-medium transition-colors duration-200">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#4F293D] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function Dropdown({ label, isOpen, onOpen, onClose, items, closeAll }) {
  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={`flex items-center gap-1 font-medium py-2 transition-colors ${
          isOpen ? "text-[#4F293D]" : "text-slate-700 hover:text-[#4F293D]"
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-0 top-full pt-2 w-64 z-50 transition-all duration-200 origin-top-left ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-2">
          {items.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={closeAll}
              className="block px-4 py-2.5 text-sm text-slate-700 hover:text-[#4F293D] hover:bg-slate-50 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------
// MOBILE COMPONENTS
// -----------------------------------------
function MobileLink({ href, close, children }) {
  return (
    <Link
      href={href}
      onClick={() => close(false)}
      className="block text-slate-700 hover:text-[#4F293D] py-3 border-b border-slate-100 font-medium"
    >
      {children}
    </Link>
  );
}

function MobileDropdown({ title, items, close }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between py-3 font-medium ${
          open ? "text-[#4F293D]" : "text-slate-700 hover:text-[#4F293D]"
        }`}
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-2 bg-slate-50 rounded-lg mb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => close(false)}
              className="px-4 py-2.5 text-sm text-slate-600 hover:text-[#4F293D] hover:bg-white rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------
// MAIN HEADER
// -----------------------------------------
export default function Header() {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const closeAll = useCallback(() => {
    setDropdown(null);
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-[50] border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-sm border-slate-200 py-3 shadow-md"
            : "bg-white border-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link href="/" onClick={closeAll} className="group flex items-center gap-2 md:gap-3">
            <div className="relative w-12 h-12 md:w-18 md:h-18">
              <Image
                src="/img/logoe.webp"
                alt="Own ATM Franchise India Logo"
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>

          <div className="flex flex-col leading-tight">
  <span className="font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight">
    <span className="text-[#4F293D]">Own</span>
    <span className="text-slate-900">ATM</span>
  </span>

  <span className="ml-1 text-xs md:text-sm text-slate-500 font-medium tracking-wide">
    Franchise India
  </span>

  <span className="ml-1 text-[10px] md:text-xs text-emerald-600 font-semibold tracking-wide uppercase">
    Trusted ATM Facilitation Partner
  </span>
</div>

            
          
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/" closeAll={closeAll}>Home</NavLink>
            <NavLink href="/aboutus" closeAll={closeAll}>About Us</NavLink>

            <Dropdown
              label="ATM Franchise"
              isOpen={dropdown === "atm"}
              onOpen={() => setDropdown("atm")}
              onClose={() => setDropdown(null)}
              closeAll={closeAll}
              items={[
                { label: "EPS Bancs", link: "/atm-franchise/eps" },
                { label: "Hitachi Money Spot", link: "/atm-franchise/hitachi" },
                { label: "Findi ATM Franchise", link: "/atm-franchise/findi" },
                { label: "India1 ATM Franchise", link: "/atm-franchise/india1" },
              ]}
            />

            <NavLink href="/service" closeAll={closeAll}>Services</NavLink>

            <Link
              href="/service#calculator"
              className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-600"
            >
              <Calculator className="w-4 h-4" />
              ROI Calculator
            </Link>

            <Dropdown
              label="Resources"
              isOpen={dropdown === "res"}
              onOpen={() => setDropdown("res")}
              onClose={() => setDropdown(null)}
              closeAll={closeAll}
              items={[
                { label: "Blog & Insights", link: "/resources/blog" },
                { label: "FAQs", link: "/resources/faq" },
              ]}
            />
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Link
                href="/become-franchise"
                className="px-5 py-2.5 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_COLORS.primary}, ${BRAND_COLORS.accent})`,
                }}
              >
                Apply Now
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <nav
        className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white z-[70] shadow-2xl p-6 pt-20 overflow-y-auto transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileLink href="/" close={setMenuOpen}>Home</MobileLink>
        <MobileLink href="/aboutus" close={setMenuOpen}>About Us</MobileLink>

        <MobileDropdown
          title="ATM Franchise"
          close={setMenuOpen}
          items={[
            { label: "EPS Bancs", href: "/atm-franchise/eps" },
            { label: "Hitachi Money Spot", href: "/atm-franchise/hitachi" },
            { label: "Findi ATM Franchise", href: "/atm-franchise/findi" },
            { label: "India1 ATM Franchise", href: "/atm-franchise/india1" },
          ]}
        />

        <MobileLink href="/service" close={setMenuOpen}>Services</MobileLink>

        <Link
          href="/service#calculator"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 py-5 border-b font-bold text-emerald-700"
        >
          <Calculator className="w-5 h-5" />
          ROI Calculator
        </Link>

        <MobileDropdown
          title="Resources"
          close={setMenuOpen}
          items={[
            { label: "Blog & Insights", href: "/resources/blog" },
            { label: "FAQs", href: "/resources/faq" },
          ]}
        />

        {/* FREE OFFER ADDED */}
        <Link
          href="/offer-pages"
          onClick={() => setMenuOpen(false)}
          className="block mt-6 text-center px-6 py-4 bg-yellow-500 text-black font-bold rounded-xl shadow-md"
        >
          🎁 Get Care360 Free Offer
        </Link>

        <Link
          href="/become-franchise"
          onClick={() => setMenuOpen(false)}
          className="block mt-4 text-center px-6 py-4 text-white font-bold rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${BRAND_COLORS.primary}, ${BRAND_COLORS.accent})`,
          }}
        >
          Become a Franchise Partner
        </Link>
      </nav>
    </>
  );
}
