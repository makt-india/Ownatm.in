"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ✅ ADDED: Structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OwnATM",
    url: "https://ownatm.in",
    logo: "https://ownatm.in/img/logo-2.webp",
    description: "India's trusted ATM franchise partner helping entrepreneurs set up profitable ATM businesses.",
    telephone: "+918883335553",
    email: "maktin.help@gmail.co",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "PAN India",
    },
    sameAs: [
      // ✅ TODO: Add your actual social media URLs when available
      // "https://www.facebook.com/ownatm",
      // "https://www.instagram.com/ownatm",
      // "https://www.linkedin.com/company/ownatm",
      // "https://twitter.com/ownatm",
    ],
  };

  return (
    <>
      {/* ✅ ADDED: Structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <footer 
        className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 font-sans"
        role="contentinfo" // ✅ ADDED: Semantic role for footer
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* BRAND SECTION */}
            <div className="space-y-4">
              <Link 
                href="/" 
                aria-label="OwnATM Homepage" 
                className="flex items-center gap-3 group"
              >
                <Image
                  src="/img/logo-2.webp"
                  alt="OwnATM logo"
                  width={40}
                  height={40}
                  className="h-12 w-auto object-contain"
     
                />

<div className="flex flex-col leading-tight">
  <h2 className="text-2xl font-extrabold tracking-tight text-white flex items-center transition-opacity group-hover:opacity-80">
    Own
    <span className="ml-1 px-2 py-0.5 rounded-md bg-white text-[#4F293D] font-extrabold">
      ATM
    </span>
  </h2>

  <span className="ml-1 text-[11px] text-white/70 font-medium tracking-wide uppercase">
    Franchise India
  </span>

  <span className="ml-1 text-[10px] text-emerald-400 font-semibold tracking-wide uppercase">
     Trusted ATM Facilitation Partner
  </span>
</div>
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed">
                India's trusted ATM franchise partner. We help you set up
                profitable ATM businesses with{" "}
                <strong className="text-slate-300">EPS, Hitachi, Findi, and India1</strong>. Secure,
                transparent, and high-return investment.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4" role="list" aria-label="Social media links">
                <SocialIcon 
                  icon={<Facebook size={18} />} 
                  href="https://facebook.com/ownatm" 
                  label="Follow us on Facebook" 
                />
                <SocialIcon 
                  icon={<Instagram size={18} />} 
                  href="https://instagram.com/ownatm" 
                  label="Follow us on Instagram" 
                />
                <SocialIcon 
                  icon={<Linkedin size={18} />} 
                  href="https://linkedin.com/company/ownatm" 
                  label="Connect on LinkedIn" 
                />
                <SocialIcon 
                  icon={<Twitter size={18} />} 
                  href="https://twitter.com/ownatm" 
                  label="Follow us on Twitter" 
                />
              </div>
            </div>

            {/* QUICK LINKS */}
            <nav aria-label="Quick links"> {/* ✅ ADDED: Semantic nav with label */}
              <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/aboutus">About Us</FooterLink>
                <FooterLink href="/service">Our Services</FooterLink>
                <FooterLink href="/become-franchise">Apply for Franchise</FooterLink>
              </ul>
            </nav>

            {/* RESOURCES */}
            <nav aria-label="Resources"> {/* ✅ ADDED: Semantic nav with label */}
              <h3 className="text-white text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-3 text-sm">
                <FooterLink href="/atm-franchise/eps">EPS ATM</FooterLink>
                <FooterLink href="/atm-franchise/hitachi">Hitachi ATM</FooterLink>
                <FooterLink href="/resources/blog">Latest Blogs</FooterLink>
                <FooterLink href="/resources/faq">FAQ &amp; Support</FooterLink>
              </ul>
            </nav>

            {/* CONTACT */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
              <address className="not-italic space-y-4 text-sm text-slate-400">

                <div className="flex items-center gap-3">
                  <Phone 
                    className="shrink-0 text-emerald-400" 
                    size={18} 
                    aria-hidden="true" // ✅ ADDED: Hide decorative icon
                  />
                  <a 
                    href="tel:+918883335553" 
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                    aria-label="Call us at +91 88833 35553" // ✅ ADDED: Descriptive label
                  >
                    +91 88833 35553
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail 
                    className="shrink-0 text-emerald-400" 
                    size={18} 
                    aria-hidden="true" // ✅ ADDED: Hide decorative icon
                  />
                  <a
                    href="mailto:maktin.help@gmail.com"
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                    aria-label="Email us at maktin.help@gmail.com" // ✅ ADDED: Descriptive label
                  >
                maktin.help@gmail.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-slate-500 text-sm text-center md:text-left">
  © {currentYear} OwnATM.in. All Rights Reserved by{" "}
  <a 
    href="https://makt.in" // Replace with your actual URL
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-400 font-medium hover:text-white transition-colors underline-offset-4 hover:underline"
  >
  Authorized ATM Franchise by MAKT
  </a>.
</p>
            <nav 
              className="flex  text-sm text-slate-500"
              aria-label="Legal links" // ✅ ADDED: Descriptive label
            >
              <Link 
                href="/service" 
                className="hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
              >
               <p className="text-xs text-slate-400">
  Platform engineered by MAKT solutions.
</p>

              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

/* SUBCOMPONENTS */

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
      >
        <span 
          className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-emerald-400 font-bold"
          aria-hidden="true" // ✅ ADDED: Hide decorative arrow
        >
          ›
        </span>
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer" // ✅ SECURITY: Prevents tabnabbing
      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-[#4F293D] hover:border-[#4F293D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" // ✅ ADDED: Focus state
      role="listitem" // ✅ ADDED: Semantic role
    >
      {icon}
    </a>
  );
}