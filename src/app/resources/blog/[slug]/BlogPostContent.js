"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";

export default function BlogPostContent({ post }) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(""); // FIX 1: start empty
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // FIX 2: Only set real URL in browser
    const realUrl = window.location.href;
    setShareUrl(realUrl);
  }, []);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate-500 gap-4 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Post Not Found</h2>
        <p className="text-slate-600 text-center max-w-md">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/resources/blog"
          className="px-6 py-2.5 bg-[#4F293D] text-white rounded-full font-semibold hover:bg-[#3a1d2d] transition-colors"
        >
          Go Back to Blog
        </Link>
      </div>
    );
  }

  const wordCount = post.content.split(/\s+/).length + 350;
  const calculatedReadTime = Math.ceil(wordCount / 200);
  const readTime = post.readTime || `${calculatedReadTime} min read`;

  // FIX 3: Use stable SSR-safe fallback only before mount
  const finalUrl =
    shareUrl || `https://ownatmfranchise.in/resources/blog/${post.slug}`;

  // FIX 4: Generate share links using stable finalUrl
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(finalUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(finalUrl)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(finalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <article
      className={`min-h-screen bg-white font-sans selection:bg-[#4F293D] selection:text-white transition-opacity duration-500 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-br from-[#4F293D] via-[#5A3448] to-[#4F293D] text-white py-35 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8 text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          <span
            className={`inline-block py-1.5 px-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-7 ml-5 transition-all duration-700 ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {post.category}
          </span>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight transition-all duration-700 ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {post.title}
          </h1>

          <div
            className={`flex flex-wrap items-center gap-6 text-purple-100 text-sm transition-all duration-700 ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>

            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{post.dateDisplay || post.date}</time>
            </span>

            <span className="flex items-center gap-2 text-emerald-300 font-medium">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
        </div>
      </header>

      {/* ================= BODY CONTENT ================= */}
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
        
        {/* MAIN ARTICLE CONTENT */}
        <div className="prose prose-base md:prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-img:rounded-xl prose-img:shadow-lg">

          {/* excerpt */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 font-light italic border-l-4 border-[#4F293D] pl-6 py-2 bg-slate-50 rounded-r-lg leading-relaxed">
            {post.excerpt}
          </p>

          {/* Render main HTML content */}
          <div
            className="text-slate-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Rest remains as-is */}
          {/** your extra blocks, takeaway, conclusion, CTA etc **/}
          {/* (no changes needed) */}

        </div>

        {/* ================= SHARE SIDEBAR ================= */}
        <aside className="hidden lg:block" aria-label="Share this article">
          <div className="sticky top-24 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center mb-3">
              Share
            </p>

            <SocialButton
              icon={<Facebook className="w-5 h-5" />}
              color="hover:bg-blue-600"
              label="Share on Facebook"
              href={shareLinks.facebook}
            />
            <SocialButton
              icon={<Twitter className="w-5 h-5" />}
              color="hover:bg-sky-500"
              label="Share on Twitter"
              href={shareLinks.twitter}
            />
            <SocialButton
              icon={<Linkedin className="w-5 h-5" />}
              color="hover:bg-blue-700"
              label="Share on LinkedIn"
              href={shareLinks.linkedin}
            />

            <div className="h-px w-8 bg-slate-200 mx-auto my-3" />

            <button
              onClick={handleCopyLink}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 hover:text-white hover:scale-110 mx-auto ${
                copied ? "bg-emerald-500 text-white" : "hover:bg-slate-800"
              }`}
              aria-label="Copy link to clipboard"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </aside>

      </div>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-4 pb-20 border-t border-slate-100 pt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/resources/blog"
            className="group flex items-center gap-2 text-slate-600 font-semibold hover:text-[#4F293D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>

          <Link
            href="/become-franchise"
            className="px-6 md:px-8 py-3 bg-[#4F293D] text-white text-sm md:text-base font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Apply for Franchise
          </Link>
        </div>
      </footer>
    </article>
  );
}

function SocialButton({ icon, color, label, href, compact = false }) {
  const baseClasses = compact ? "w-9 h-9" : "w-12 h-12";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} flex items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 hover:text-white hover:scale-110 ${color}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}
