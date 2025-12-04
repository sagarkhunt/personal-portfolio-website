 "use client";

import { useState } from "react";

type Category = "All" | "Web Apps" | "APIs" | "Mobile";

const sampleProjects: Array<{
  name: string;
  industry: string;
  stack: string;
  features: string;
  impact: string;
  category: Exclude<Category, "All">;
}> = [
  {
    name: "SaaS Analytics Dashboard",
    industry: "SaaS / Analytics",
    stack: "Next.js, Node.js, PostgreSQL, Redis, AWS",
    features: "Multi-tenant dashboards, role-based access, real-time charts",
    impact: "Improved reporting speed by 60% and reduced manual work.",
    category: "Web Apps",
  },
  {
    name: "CRM for Field Teams",
    industry: "Sales / Field Operations",
    stack: "Laravel, Vue, MySQL, Docker",
    features: "Lead management, scheduling, activity tracking, offline mode",
    impact: "Increased team productivity and centralized all customer data.",
    category: "APIs",
  },
];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? sampleProjects
      : sampleProjects.filter((project) => project.category === activeCategory);

  return (
    <main className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-900/80 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Our Work: B2B &amp; B2C Products
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            A portfolio structure focused on clarity: each project highlights
            the industry, stack used, key features delivered, and measurable
            impact. Every case study shows exactly what was built and how it
            moved the business forward.
          </p>

          {/* Category filter */}
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {(["All", "Web Apps", "APIs", "Mobile"] as Category[]).map(
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

          {/* Projects list */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-indigo-500/70 hover:bg-slate-900"
              >
                <header className="flex items-center justify-between gap-2">
                  <div>
                    <h2 className="text-base font-semibold text-slate-50">
                      {project.name}
                    </h2>
                    <p className="text-xs text-slate-400">
                      Industry: {project.industry}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[0.65rem] uppercase tracking-wide text-slate-300">
                    Case Study
                  </span>
                </header>
                <dl className="mt-4 space-y-2 text-xs text-slate-200">
                  <div>
                    <dt className="font-semibold text-slate-300">Stack used</dt>
                    <dd className="mt-1 text-slate-200">{project.stack}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-300">
                      Features delivered
                    </dt>
                    <dd className="mt-1 text-slate-200">{project.features}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-300">Impact</dt>
                    <dd className="mt-1 text-slate-200">{project.impact}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          {/* Page-specific features: Our Work */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Portfolio Structure
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Category Filter
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Filter projects by type, industry, or stack.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Tags</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Quick visual labels for tech stack and domain.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Modal Details
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Expand any project into a detailed overview with screenshots
                  and metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


