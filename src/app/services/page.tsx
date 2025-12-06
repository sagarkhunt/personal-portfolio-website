"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="relative bg-[var(--background)] text-[var(--text)] overflow-hidden">

      {/* Floating blur shapes */}
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />

      {/* Top Section */}
      <section className="relative border-b border-[var(--border)] py-20">
        <div className="mx-auto max-w-6xl px-6">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--heading)]"
          >
            Our
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-[var(--subtext)]"
          >
            Custom web, mobile, and API solutions engineered with clean
            architecture, secure foundations, and long-term maintainability.
          </motion.p>

          {/* Services Grid */}
          <div className="mt-14 grid gap-10 md:grid-cols-2">

            {[
              {
                title: "Web App Development",
                desc: "Modern business-focused web applications tailored to your workflows.",
                list: [
                  "ERP, CRM, dashboards",
                  "SaaS applications & multi-tenant platforms",
                ],
              },
              {
                title: "Mobile App Development",
                desc: "High-performance cross-platform apps built with a single codebase.",
                list: [
                  "Flutter apps for iOS & Android",
                  "Native integrations (Swift / Kotlin)",
                  "Secure login & session handling",
                ],
              },
              {
                title: "API Development",
                desc: "APIs that are scalable, secure, and easy to integrate.",
                list: ["REST & GraphQL APIs", "JWT / OAuth authentication"],
              },
              {
                title: "Custom Backend",
                desc: "High-performance, scalable backend systems.",
                list: [
                  "Laravel (RDBMS architecture)",
                  "Node/Express microservices",
                  "Queues, background jobs, WebSockets",
                ],
              },
              {
                title: "UI / Frontend Engineering",
                desc: "Beautiful, reusable component-driven interfaces.",
                list: [
                  "Component-driven UI architecture",
                  "SPA & SSR experiences",
                  "Responsive design for all sizes",
                ],
              },
              {
                title: "Cloud & DevOps",
                desc: "Infrastructure and pipelines designed for uptime and reliability.",
                list: [
                  "CI/CD pipelines",
                  "Dockerized services",
                  "Server & application hardening",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card-background)] p-7 shadow-sm hover:shadow-xl transition-all"
              >
                <h2 className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  {item.title}
                </h2>

                <p className="mt-3 text-[var(--text)]">{item.desc}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-[var(--subtext)]">
                  {item.list.map((line) => (
                    <motion.li key={line} whileHover={{ x: 6 }}>
                      • {line}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-7 shadow-md"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              HOW WE PRESENT SERVICES
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Pricing Cards",
                  desc: "Clear breakdown of engagement models or project estimates.",
                },
                {
                  title: "FAQ",
                  desc: "Answers to common questions about process, cost, and timelines.",
                },
                {
                  title: "Work Cycle",
                  desc: "Discovery → Architecture → Development → Launch → Support.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-md font-semibold text-[var(--heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--subtext)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
