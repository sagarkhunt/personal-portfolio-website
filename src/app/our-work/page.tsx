"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Category = "All" | "Web Apps" | "APIs" | "Mobile";

const sampleProjects = [
  {
    name: "SaaS Analytics Dashboard",
    industry: "SaaS / Analytics",
    stack: "Next.js, Node.js, PostgreSQL, Redis, AWS",
    features: "Multi-tenant dashboards, role-based access, real-time charts",
    impact: "Improved reporting speed by 60% and reduced manual tasks.",
    category: "Web Apps" as const,
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "CRM for Field Teams",
    industry: "Sales / Field Operations",
    stack: "Laravel, Vue, MySQL, Docker",
    features: "Lead management, scheduling, activity tracking, offline mode",
    impact: "Increased team productivity and centralized customer data.",
    category: "APIs" as const,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "E-commerce Platform Redesign",
    industry: "Retail / E-commerce",
    stack: "React, Shopify, GraphQL, AWS Lambda",
    features: "Custom storefront, payment gateway integration, inventory sync",
    impact: "Increased conversion rates by 15% and improved customer experience.",
    category: "Web Apps" as const,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Mobile Food Delivery App",
    industry: "Food & Beverage",
    stack: "Flutter, Node.js, MongoDB, Firebase",
    features: "Real-time order tracking, in-app chat, payment integration",
    impact: "Streamlined ordering process and expanded customer reach.",
    category: "Mobile" as const,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=60",
  },
];


export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative bg-[var(--background)] text-[var(--text)] overflow-hidden">

      {/* Floating blur shapes */}
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />

      {/* Header Section */}
      <section className="border-b border-[var(--border)] py-20 relative">
        <div className="mx-auto max-w-6xl px-6">

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--heading)]"
          >
            Our
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Work
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-[var(--subtext)]"
          >
            Case studies that show real engineering impact.
          </motion.p>

          {/* CATEGORY FILTER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3 text-sm"
          >
            {(["All", "Web Apps", "APIs", "Mobile"] as Category[]).map(
              (category) => {
                const isActive = category === activeCategory;
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
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
          </motion.div>

          {/* PROJECT LIST */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-7 shadow-sm transition-all group"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative h-48 w-full overflow-hidden rounded-xl mb-6 border border-[var(--border)]"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[var(--background)]/20 px-3 py-1 text-xs font-medium text-[var(--foreground)] backdrop-blur-md">
                    {project.category}
                  </span>
                </motion.div>
                <header className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-[var(--heading)]">
                      {project.name}
                    </h2>
                    <p className="text-sm text-[var(--subtext)] mt-1">
                      Industry: {project.industry}
                    </p>
                  </div>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs uppercase tracking-wide text-[var(--subtext)]">
                    Case Study
                  </span>
                </header>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-[var(--heading)]">Stack Used</dt>
                    <dd className="text-[var(--subtext)] mt-1">{project.stack}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--heading)]">Features</dt>
                    <dd className="text-[var(--subtext)] mt-1">{project.features}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[var(--heading)]">Impact</dt>
                    <dd className="text-[var(--subtext)] mt-1">{project.impact}</dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>

          {/* EXTRA INFO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-7 shadow-md"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Portfolio Structure
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Category Filter",
                  desc: "Sort projects by domain or tech stack.",
                },
                {
                  title: "Tags",
                  desc: "Tech stack and domain badges for clarity.",
                },
                {
                  title: "Modal Details",
                  desc: "Screenshots, timeline, metrics, and more.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-md font-semibold text-[var(--heading)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--subtext)] mt-1">
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
