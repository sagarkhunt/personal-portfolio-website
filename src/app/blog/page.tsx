"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { categoryColors, posts, trendingPosts, BlogCategory } from "@/lib/blogPosts";

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });

    setCurrentPage(1); // Reset to first page on filter/query change
    return filtered;
  }, [activeCategory, query]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <section className="border-b border-[var(--border)] py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--heading)]"
          >
            Blog
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Engineering Notes
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-[var(--subtext)]"
          >
            Articles on secure, scalable, and modern software engineering.
          </motion.p>

          {/* SEARCH + CATEGORIES */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            {/* SEARCH INPUT */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-[var(--heading)]">
                Search Posts
              </label>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                type="text"
                placeholder="Search by title or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--heading)] text-sm shadow-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
              />
            </div>

            {/* CATEGORY BUTTONS */}
            <div className="flex flex-wrap gap-2 text-sm">
              {(["All", "Laravel", "APIs", "React", "Architecture"] as BlogCategory[]).map(
                (category, i) => {
                  const isActive = activeCategory === category;
                  return (
                    <motion.button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`rounded-full px-4 py-1.5 border transition-all ${
                        isActive
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] font-semibold"
                          : "border-[var(--border)] text-[var(--heading)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                      }`}
                    >
                      {category}
                    </motion.button>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* MAIN CONTENT + SIDEBAR */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
            {/* BLOG POSTS */}
            <div>
              <div className="grid gap-8 md:grid-cols-2">
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-bold text-[var(--heading)]">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      <span
                        className={`rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-wide ${categoryColors[post.category]} `}
                      >
                        {post.category}
                      </span>
                    </div>

                    <p className="mt-3 text-[var(--subtext)] text-sm leading-relaxed">
                      {post.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--background)] px-3 py-1 text-xs text-[var(--subtext)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* PAGINATION CONTROLS */}
              {totalPages > 1 && (
                <div className="mt-10 flex justify-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--heading)] shadow-sm hover:bg-[var(--border)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`rounded-full border border-[var(--border)] px-4 py-2 text-sm shadow-sm ${
                        currentPage === i + 1
                          ? "bg-[var(--primary)] text-[var(--foreground)]"
                          : "bg-[var(--background)] text-[var(--heading)] hover:bg-[var(--border)]"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--heading)] shadow-sm hover:bg-[var(--border)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[var(--heading)]">Trending Posts</h2>
                <ul className="mt-4 space-y-4">
                  {trendingPosts.map((post, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-sm font-semibold text-[var(--accent)]">0{i + 1}.</span>
                      <div>
                        <h3 className="text-md font-semibold text-[var(--heading)]">
                          <Link href={`/blog/${post.slug}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[0.6rem] uppercase tracking-wide ${categoryColors[post.category]} mt-1 inline-block`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </aside>
          </div>

          {/* EXTRA FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-7 shadow-sm"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Blog Features
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Search",
                  desc: "Find posts easily by title or keywords.",
                },
                {
                  title: "Categories",
                  desc: "Filter posts by engineering discipline.",
                },
                {
                  title: "Markdown",
                  desc: "Write articles in developer-friendly Markdown.",
                },
                {
                  title: "Comments",
                  desc: "Allow readers to share feedback & discuss topics.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="font-semibold text-[var(--heading)] text-sm">
                    {item.title}
                  </h3>
                  <p className="text-[var(--subtext)] text-xs mt-1">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
