import { BLOG_POSTS } from "./resources/blog/data";

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = "https://ownatm.in";

  // Base routes
  const routes = [
    "",
    "/aboutus",
    "/service",
    "/atm-franchise",
    "/become-franchise",
    "/resources/blog",
    "/resources/faq",
    "/atm-franchise/eps",
    "/atm-franchise/hitachi",
    "/atm-franchise/findi",
    "/atm-franchise/india1",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Blog Routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
