"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

export default function Home() {
  // ==========================================
  // TECHNOLOGY SECTION STATE + DATA
  // ==========================================
  const categories = ["Frontend", "Backend", "Mobile", "E-commerce", "Database"];

  const techData: any = {
    Frontend: [
      { name: "Vue.js", icon: "/tech/frontend/vue.svg" },
      { name: "React", icon: "/tech/frontend/react.svg" },
      { name: "JavaScript", icon: "/tech/frontend/javascript.svg" },
      { name: "TypeScript", icon: "/tech/frontend/typescript.svg" },
      { name: "Nuxt.js", icon: "/tech/frontend/nuxtjs.svg" },
      { name: "Next.js", icon: "/tech/frontend/nextjs.svg" },
      { name: "Tailwind", icon: "/tech/frontend/tailwind.svg" },
      { name: "Vite", icon: "/tech/frontend/vite.svg" },
      { name: "Bootstrap", icon: "/tech/frontend/bootstrap.svg" },
    ],

    Backend: [
      { name: "Laravel", icon: "/tech/backend/laravel.svg" },
      { name: "Node.js", icon: "/tech/backend/nodejs.svg" },
      { name: "Express.js", icon: "/tech/backend/express.svg" },
      { name: "NestJS", icon: "/tech/backend/nestjs.svg" },
      { name: "PHP", icon: "/tech/backend/php.svg" },
    ],

    Mobile: [
      { name: "Flutter", icon: "/tech/mobile/flutter.svg" },
      { name: "Kotlin", icon: "/tech/mobile/kotlin.svg" },
      { name: "Swift", icon: "/tech/mobile/swift.svg" },
      { name: "Android", icon: "/tech/mobile/android.svg" },
    ],

    "E-commerce": [
      { name: "Shopify", icon: "/tech/ecommerce/shopify.svg" },
      { name: "Magento", icon: "/tech/ecommerce/magento.svg" },
      { name: "WooCommerce", icon: "/tech/ecommerce/woocommerce.svg" },
    ],

    Database: [
      { name: "MySQL", icon: "/tech/database/mysql.svg" },
      { name: "PostgreSQL", icon: "/tech/database/postgresql.svg" },
      { name: "MongoDB", icon: "/tech/database/mongodb.svg" },
      { name: "MariaDB", icon: "/tech/database/mariadb.svg" },
      { name: "Firebase", icon: "/tech/database/firebase.svg" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <main className="relative bg-[var(--background)] text-[var(--text)] overflow-hidden">

      {/* ----------------------------- HERO ----------------------------- */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* LEFT */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold text-[var(--heading)] leading-tight"
            >
              We Build
              <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Digital Products That Scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-lg text-[var(--subtext)]"
            >
              Empowering businesses with scalable web apps, powerful APIs, and high-performance mobile applications.
            </motion.p>

            <div className="mt-8 flex gap-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[var(--primary)] text-[var(--foreground)] rounded-full text-sm font-medium shadow hover:opacity-90 transition"
              >
                Start Your Project
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-full text-sm font-medium hover:bg-[var(--primary)]/10 transition"
              >
                View Work
              </motion.button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(var(--primary-rgb), 0.1), 0 4px 6px -2px rgba(var(--primary-rgb), 0.05)" }}
            className="w-full max-w-sm"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full h-full">
              <div className="bg-[var(--card-background)] border border-[var(--border)] rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Why Choose Us
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-[var(--subtext)]">
                  <li>✔ Scalable Architecture</li>
                  <li>✔ Strong UI/UX Design</li>
                  <li>✔ Secure API Engineering</li>
                  <li>✔ Fast Delivery & Clear Roadmap</li>
                  <li>✔ Enterprise Quality Standards</li>
                </ul>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </section>

      {/* ----------------------------- SERVICES ----------------------------- */}
      <section className="py-20 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--heading)]">What We Do</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Web App Development",
                desc: "Custom enterprise apps, dashboards, CRMs, ERPs & SaaS platforms.",
              },
              {
                title: "API Engineering",
                desc: "Secure REST & GraphQL APIs with scalable infrastructure.",
              },
              {
                title: "Mobile Development",
                desc: "High-performance iOS & Android applications using modern tech.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(var(--primary-rgb), 0.1), 0 4px 6px -2px rgba(var(--primary-rgb), 0.05)" }}
                className="p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] shadow-sm transition cursor-pointer"
              >
                <h3 className="font-semibold text-xl text-[var(--heading)]">{item.title}</h3>
                <p className="mt-3 text-[var(--subtext)] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- TECHNOLOGY SECTION (FULL RESPONSIVE) ----------------------------- */}
      <section className="py-20 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[var(--heading)]">Technologies</h2>
          <p className="text-[var(--subtext)] mt-2">
            Backed by passionate engineers, we work with modern frameworks & tools to deliver scalable digital products.
          </p>

          {/* MAIN GRID */}
          <div className="mt-10 grid md:grid-cols-[220px_1fr] grid-cols-1 gap-8">

            {/* Sidebar – MOBILE SCROLL TABS */}
            <div className="
              flex md:flex-col flex-row 
              md:overflow-visible overflow-x-auto 
              gap-2 md:gap-0 
              border border-[var(--border)] rounded-xl 
              p-2 md:p-0
            ">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    py-3 px-4 text-sm whitespace-nowrap 
                    border md:border-b border-transparent md:border-[var(--border)]
                    transition rounded-lg md:rounded-none
                    ${
                      activeCategory === cat
                        ? "bg-[var(--primary)]/10 text-[var(--primary)] font-semibold"
                        : "hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--background)]">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 sm:gap-10"
              >
                {techData[activeCategory].map((tech: any, i: number) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <img src={tech.icon} className="w-14 h-14 object-contain" />
                    <p className="text-sm text-[var(--heading)]">{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------- PORTFOLIO ----------------------------- */}
      {/* <section className="py-20 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--heading)]">Some of Our Work</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--background)]"
              >
                <div className="h-40 bg-[var(--border)]" />
                <div className="p-4">
                  <h3 className="font-semibold text-[var(--heading)]">Project Example {item}</h3>
                  <p className="text-sm mt-1 text-[var(--subtext)]">
                    High-quality digital product with modern architecture.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ----------------------------- CTA ----------------------------- */}
      {/* <section className="py-24 bg-[var(--primary)] text-[var(--foreground)] text-center">
        <h2 className="text-4xl font-bold">Let’s Build Something Amazing</h2>
        <p className="mt-3 opacity-90">Transform your ideas into powerful digital products.</p>

        <button className="mt-6 px-8 py-3 bg-[var(--background)] text-[var(--primary)] rounded-full font-medium shadow hover:opacity-90 transition">
          Get Started
        </button>
      </section> */}

    </main>
  );
}
