"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search, Clock, Tag } from "lucide-react";

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

export default function BlogListingContent({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(posts.map((p) => p.category))];
    return cats;
  }, [posts]);

  // Filter posts by search and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  // Separate featured posts
  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  // Animation Trigger for Header
  const [headerRef, headerInView] = useInView();

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-30 md:py-26 lg:py-35 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header ref={headerRef} className="text-center mb-12 md:mb-16">
          <div
            className={`transition-all duration-700 ease-out ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 md:mb-5 tracking-tight">
              Latest <span className="text-[#4F293D] inline-block">Insights & News</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Expert guidance on ATM franchising, passive income, and financial growth in India.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div
            className={`mt-8 md:mt-10 max-w-md mx-auto relative transition-all duration-700 delay-150 ease-out ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 pointer-events-none" 
              aria-hidden="true"
            />
            <input
              id="blog-search"
              type="search"
              className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-full bg-white placeholder-slate-400 text-slate-900 focus:ring-2 focus:ring-[#4F293D]/30 focus:border-[#4F293D] shadow-sm outline-none transition-all"
              placeholder="Search articles by title, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search blog articles"
            />
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className={`mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3 transition-all duration-700 delay-300 ease-out ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#4F293D] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* RESULTS COUNT */}
        {searchTerm && (
          <p className="text-sm text-slate-500 mb-6 text-center animate-fade-in">
            Found {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </p>
        )}

        {/* FEATURED POSTS */}
        {featuredPosts.length > 0 && !searchTerm && selectedCategory === "All" && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredPosts.map((post, i) => (
                <FeaturedBlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* REGULAR POSTS GRID */}
        {regularPosts.length > 0 && (
          <>
            {featuredPosts.length > 0 && !searchTerm && selectedCategory === "All" && (
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">
                All Articles
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </>
        )}

        {/* NO RESULTS */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 md:py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-100 mb-4">
              <Search className="w-8 h-8 md:w-10 md:h-10 text-slate-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              No articles found
            </h3>
            <p className="text-slate-500 text-base md:text-lg mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 bg-[#4F293D] text-white rounded-full font-semibold hover:bg-[#3a1d2d] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Featured Blog Card (Larger, More Prominent)
function FeaturedBlogCard({ post, index }) {
  const [ref, isInView] = useInView();
  return (
    <article
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6 md:p-8">
        {/* Category & Featured Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4F293D] to-purple-600 text-white text-xs font-bold uppercase tracking-wide shadow-sm">
            <Tag className="w-3 h-3" aria-hidden="true" />
            {post.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase">
            Featured
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-[#4F293D] transition-colors leading-tight">
          <Link href={`/resources/blog/${post.slug}`} className="hover:underline decoration-2 underline-offset-4">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" aria-hidden="true" /> 
            <time dateTime={post.date}>{post.dateDisplay}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" aria-hidden="true" /> 
            {post.author}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" /> 
              {post.readTime}
            </span>
          )}
        </div>

        {/* Read More */}
        <Link
          href={`/resources/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-[#4F293D] font-bold text-sm md:text-base group-hover:gap-3 transition-all"
        >
          Read Full Article 
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

// Regular Blog Card
function BlogCard({ post, index }) {
  const [ref, isInView] = useInView();
  return (
    <article
      ref={ref}
      className={`bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col h-full group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category */}
      <div className="px-5 md:px-6 pt-5 md:pt-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 text-[#4F293D] text-xs font-bold uppercase tracking-wide">
          <Tag className="w-3 h-3" aria-hidden="true" />
          {post.category}
        </span>
      </div>

      <div className="p-5 md:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4F293D] transition-colors line-clamp-2 leading-tight">
          <Link href={`/resources/blog/${post.slug}`} className="hover:underline decoration-2 underline-offset-2">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="text-xs md:text-sm text-slate-500 border-t border-slate-100 pt-4 mt-auto flex flex-wrap items-center gap-3 md:gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> 
            <time dateTime={post.date}>{post.dateDisplay}</time>
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" /> 
              {post.readTime}
            </span>
          )}
        </div>

        {/* Read More */}
        <div className="mt-4">
          <Link
            href={`/resources/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-[#4F293D] font-bold text-sm group-hover:gap-2.5 transition-all"
          >
            Read Article 
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}