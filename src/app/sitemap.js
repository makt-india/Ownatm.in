import { BLOG_POSTS } from "./resources/blog/data";

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = "https://ownatm.in";

  // ── High-priority pages ────────────────────────────────
  const highPriority = [
    { route: "", changeFreq: "weekly", priority: 1.0 },
    { route: "/atm-franchise", changeFreq: "weekly", priority: 0.95 },
    { route: "/become-franchise", changeFreq: "weekly", priority: 0.95 },
  ].map(({ route, changeFreq, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: changeFreq,
    priority,
  }));

  // ── Brand franchise pages ──────────────────────────────
  const franchisePages = [
    "/atm-franchise/eps",
    "/atm-franchise/findi",
    "/atm-franchise/india1",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // ── Supporting pages ───────────────────────────────────
  const supportPages = [
    "/aboutus",
    "/service",
    "/resources/blog",
    "/resources/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-02-01"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // ── Dynamic Blog Routes (real dates from post data) ────
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    // State-specific and application guides get higher priority
    priority: ["State Guide", "Application Guide", "Brand Guide"].includes(post.category)
      ? 0.85
      : 0.75,
  }));

  return [...highPriority, ...franchisePages, ...supportPages, ...blogRoutes];
}
