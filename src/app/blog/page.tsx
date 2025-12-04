 "use client";

import { useMemo, useState } from "react";

type Category = "All" | "Laravel" | "APIs" | "React" | "Architecture";

const posts: Array<{
  title: string;
  category: Exclude<Category, "All">;
  description: string;
}> = [
  {
    title: "Laravel Clean Architecture",
    category: "Laravel",
    description:
      "How to structure Laravel apps with use cases, domain layers, and boundaries that keep code testable and easy to extend.",
  },
  {
    title: "Secure API Development",
    category: "APIs",
    description:
      "Designing REST and GraphQL APIs with proper auth, rate‑limiting, validation, and logging from day one.",
  },
  {
    title: "React & Vue Optimization",
    category: "React",
    description:
      "Reducing re‑renders, splitting bundles, and tuning state management so frontends stay fast as they grow.",
  },
  {
    title: "Microservice Architecture",
    category: "Architecture",
    description:
      "When it makes sense to split services, how to design boundaries, and patterns for communication between services.",
  },
  {
    title: "SSR vs CSR",
    category: "Architecture",
    description:
      "Trade‑offs between server‑side rendering, client‑side rendering, and hybrid approaches in modern web apps.",
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <main className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-900/80 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-2xl font-semibold md:text-3xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Engineering notes on building secure, scalable, and maintainable web
            applications.
          </p>

          {/* Search & categories */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <label className="block text-xs font-medium text-slate-300">
                Search posts
              </label>
              <input
                type="text"
                placeholder="Search by title or keyword..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {(["All", "Laravel", "APIs", "React", "Architecture"] as Category[]).map(
                (category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-3 py-1 transition-colors ${
                        isActive
                          ? "border-indigo-400 bg-indigo-400/10 text-indigo-100"
                          : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-indigo-500/70 hover:text-indigo-200"
                      }`}
                    >
                      {category}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Topics suggestion grid */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold text-slate-50">
                    {post.title}
                  </h2>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[0.65rem] uppercase tracking-wide text-slate-300">
                    {post.category}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300">{post.description}</p>
              </article>
            ))}
          </div>

          {/* Page-specific features: Blog */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Blog Features
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Search</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Find posts by title or keywords.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Categories
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Group posts by topics like Laravel, APIs, React, and
                  architecture.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Markdown Support
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Author posts in Markdown for a comfortable writing workflow.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Comments
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Optional comments to collect feedback and questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


