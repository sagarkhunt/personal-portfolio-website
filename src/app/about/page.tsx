"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative bg-[var(--background)] text-[var(--text)] overflow-hidden">

      {/* Floating blurred background shapes */}
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />

      <section className="relative border-b border-[var(--border)] py-20">
        <div className="mx-auto max-w-6xl px-6">

          {/* Heading with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-[var(--heading)]"
          >
            About Tech Services
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Innovating Digital Solutions
            </span>
          </motion.h1>

          <div className="mt-16 grid gap-14 md:grid-cols-[2fr_1.2fr]">

            {/* LEFT SIDE – animated sections */}
            <div className="space-y-16">

              {/* Reusable animated block */}
              {[
                {
                  title: "Who We Are",
                  text: `Tech Services is a dedicated team focused on building scalable applications 
                        with clean architecture, secure APIs, and refined UIs. 
                        Every project is structured for clarity and long-term growth.`,
                },
                {
                  title: "Our Journey",
                  text: `With years of collective experience, we've delivered high-impact solutions 
                        across various sectors, including SaaS, dashboards, CRMs, logistics systems, 
                        API engineering, and multi-tenant platforms.`,
                },
                {
                  title: "Our Expertise",
                  list: [
                    "Laravel / PHP Development",
                    "Node.js / Express Development",
                    "React / Next.js Frontend",
                    "Vue / Nuxt Frontend",
                    "Database Design & Management",
                    "Cloud & DevOps (AWS / Docker)",
                  ],
                },
                {
                  title: "Our Impact",
                  text: `We empower businesses by delivering solutions that improve operational efficiency, 
                        streamline workflows, and enable rapid scaling for distributed teams.`,
                },
                {
                  title: "Our Guiding Principles",
                  text: `To build systems that stand the test of time — clean, maintainable, secure, 
                        and engineered for excellence, driving true business value.`,
                },
              ].map((block, i) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
                    {block.title}
                  </h2>

                  {block.text && (
                    <p className="mt-3 text-[var(--subtext)] leading-relaxed">
                      {block.text}
                    </p>
                  )}

                  {block.list && (
                    <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2 text-[var(--subtext)]">
                      {block.list.map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 shadow-sm"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>

            {/* RIGHT SIDE – modern profile + cards */}
            <aside className="space-y-10">

              {/* Profile card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-lg relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20 blur-2xl" />
                <div className="flex items-center gap-4 relative">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] shadow-xl" />
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--heading)]">
                      Tech Services Inc.
                    </h2>
                    <p className="text-sm text-[var(--subtext)]">
                      Leading Digital Transformation
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Services Highlight */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm"
              >
                <h2 className="text-sm font-semibold text-[var(--heading)]">Service Highlights</h2>
                <ul className="mt-4 space-y-2 text-sm text-[var(--subtext)]">
                  {["Custom Software Development", "API & Integration", "Cloud Solutions", "UI/UX Design", "DevOps & Automation"].map((item) => (
                    <motion.li key={item} whileHover={{ x: 6 }} className="transition">
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Animated Milestones */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm"
              >
                <h2 className="text-sm font-semibold text-[var(--heading)]">Milestones</h2>
                <div className="mt-4 space-y-5">
                  {[
                    { label: "2020", text: "Founded Tech Services" },
                    { label: "2022", text: "Expanded to Cloud Solutions" },
                    { label: "2024", text: "Launched Global Partnerships" },
                  ].map((t, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-3"
                    >
                      <span className="text-[var(--accent)] text-xs font-medium block">
                        {t.label}
                      </span>
                      <p className="text-sm text-[var(--subtext)]">{t.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Portfolio Call to Action */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm"
              >
                <h2 className="text-sm font-semibold text-[var(--heading)]">Our Work</h2>
                <p className="mt-2 text-sm text-[var(--subtext)]">
                  Explore our case studies and successful projects to see our capabilities.
                </p>

                <motion.a
                  href="/our-work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 px-5 py-2 text-xs font-semibold text-[var(--primary)] transition"
                >
                  View Our Portfolio
                </motion.a>
              </motion.div>

            </aside>
          </div>

          {/* Animated Team Section (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-10 shadow-md"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Meet Our Team
            </h2>
            <p className="mt-3 text-[var(--subtext)]">
              Our diverse team of experts is dedicated to delivering excellence in every project.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Sagar Khunt",
                  title: "CEO & Lead Architect",
                  imageUrl: "/assets/team/sagarkhunt.jpeg",
                },
                {
                  name: "Ankur Khunt",
                  title: "CTO & Head of Engineering",
                  imageUrl: "/assets/team/ankur.jpg",
                },
                {
                  name: "Jaydeep Khunt",
                  title: "COO & Operations Lead",
                  imageUrl: "/assets/team/jaydeep_khunt.jpg",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="text-center rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-lg"
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="h-24 w-24 rounded-full mx-auto mb-4 object-cover object-center border-2 border-[var(--primary)]"
                  />
                  <h3 className="font-semibold text-lg text-[var(--heading)]">{member.name}</h3>
                  <p className="text-sm text-[var(--subtext)] mt-1">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Brand Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-10 shadow-md"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Our Core Values
            </h2>

            <div className="mt-6 grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Innovation",
                  desc: "Continuously exploring new technologies and creative solutions."
                },
                {
                  title: "Integrity",
                  desc: "Operating with transparency, honesty, and strong ethical principles."
                },
                {
                  title: "Client Success",
                  desc: "Dedicated to achieving and exceeding our clients' business objectives."
                },
                {
                  title: "Excellence",
                  desc: "Committed to delivering high-quality, scalable, and secure solutions."
                }
              ].map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="transition"
                >
                  <h3 className="font-semibold text-[var(--heading)]">{v.title}</h3>
                  <p className="mt-2 text-sm text-[var(--subtext)]">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--heading)]">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-3 text-[var(--subtext)]">
              Let Tech Services build innovative, scalable, and elegant digital products for you.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-6 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-8 py-3 font-semibold text-[var(--foreground)] shadow-lg"
            >
              Contact Our Team
            </motion.a>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
