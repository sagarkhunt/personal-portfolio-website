export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-2xl font-semibold md:text-3xl">About</h1>

          <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            {/* Left: Narrative & sections */}
            <div className="space-y-8 text-sm text-slate-300">
              {/* Introduction */}
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Introduction
                </h2>
                <p className="mt-3">
                  I focus on building clean, maintainable applications with
                  scalable backend architecture, secure API design, and reusable
                  UI components. Every project is structured for clarity so
                  teams can move fast without sacrificing quality.
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Experience
                </h2>
                <p className="mt-3">
                  I&apos;ve worked across web apps, SaaS products, APIs, and
                  internal tools, supporting teams in multiple industries,
                  including SaaS, e‑commerce, and B2B platforms.
                </p>
              </section>

              {/* Tech Skills */}
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Tech Skills
                </h2>
                <ul className="mt-3 grid gap-2 text-xs md:grid-cols-2">
                  <li>Laravel / PHP</li>
                  <li>Node.js / Express</li>
                  <li>React / Next.js</li>
                  <li>Vue.js / Nuxt</li>
                  <li>MySQL / PostgreSQL / MongoDB</li>
                  <li>AWS, Docker, CI/CD</li>
                </ul>
              </section>

              {/* Achievement */}
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Achievements
                </h2>
                <p className="mt-3">
                  Delivered projects that improved reporting speed, centralized
                  critical business data, and simplified complex workflows for
                  distributed teams.
                </p>
              </section>

              {/* Mission & Vision */}
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Mission &amp; Vision
                </h2>
                <p className="mt-3">
                  My mission is to write code that is easy to understand,
                  secure, and built to last. I aim to help teams ship with
                  confidence, knowing their systems are robust, maintainable,
                  and ready for future growth.
                </p>
              </section>
            </div>

            {/* Right: Profile, skills, timeline, resume */}
            <aside className="space-y-6">
              {/* Profile */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-linear-to-br from-indigo-500 to-slate-700" />
                  <div>
                    <h2 className="text-sm font-semibold text-slate-50">
                      Tech Services Engineer
                    </h2>
                    <p className="text-xs text-slate-400">
                      Full-stack developer &amp; system designer
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills highlight */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h2 className="text-sm font-semibold text-slate-50">
                  Skill Highlight
                </h2>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
                  <li>MVC &amp; SOLID</li>
                  <li>Secure APIs</li>
                  <li>Clean SQL queries</li>
                  <li>Role &amp; Permissions</li>
                  <li>Performance optimization</li>
                </ul>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h2 className="text-sm font-semibold text-slate-50">Timeline</h2>
                <ul className="mt-3 space-y-3 text-xs text-slate-200">
                  <li>
                    <span className="block text-[0.7rem] text-slate-400">
                      Recent
                    </span>
                    Delivering SaaS apps, APIs, and internal tools for teams.
                  </li>
                  <li>
                    <span className="block text-[0.7rem] text-slate-400">
                      Earlier
                    </span>
                    Built dashboards, CRMs, and custom ERPs.
                  </li>
                </ul>
              </div>

              {/* Resume download */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h2 className="text-sm font-semibold text-slate-50">
                  Resume
                </h2>
                <p className="mt-2 text-xs text-slate-300">
                  Download a PDF resume with a summary of skills, experience,
                  and selected projects.
                </p>
                <button className="mt-3 inline-flex items-center justify-center rounded-full border border-indigo-400/70 bg-indigo-400/10 px-4 py-2 text-xs font-medium text-indigo-100 transition hover:bg-indigo-400/20">
                  Download Resume
                </button>
              </div>
            </aside>
          </div>

          {/* Brand values */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Brand Values
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Quality Code
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Readable, well-structured code that can grow with your
                  product.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Security
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  APIs, data flows, and infrastructure built with defense in
                  depth.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  UI/UX Excellence
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Interfaces that look sharp, feel intuitive, and respond fast.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Maintainability
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Architecture, patterns, and documentation designed for future
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


