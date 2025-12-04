export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-2xl font-semibold md:text-3xl">Services</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Custom web, mobile, and API solutions engineered with clean
            architecture, secure foundations, and a focus on long-term
            maintainability.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Web App Development */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                Web App Development
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Modern, business-focused web applications tailored to your
                workflows.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                <li>ERP, CRM, dashboards</li>
                <li>SaaS applications and multi-tenant platforms</li>
              </ul>
            </div>

            {/* Mobile App Development */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                Mobile App Development
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Cross-platform mobile apps with a single, maintainable codebase,
                shipped to both iOS and Android app stores.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                <li>Flutter for beautiful, fast iOS &amp; Android apps</li>
                <li>Native integrations with Kotlin/Android and Swift/iOS</li>
                <li>Secure authentication and session handling</li>
              </ul>
            </div>

            {/* API Development */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                API Development
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Reliable APIs that are easy to consume, secure, and version.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                <li>REST / GraphQL interfaces</li>
                <li>Token-based authentication (JWT, OAuth)</li>
              </ul>
            </div>

            {/* Custom Backend */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                Custom Backend
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Backends built for performance, scalability, and clarity.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                <li>Laravel with relational databases (RDBMS)</li>
                <li>Node/Express APIs and microservices</li>
                <li>Queues, background jobs, and WebSockets</li>
              </ul>
            </div>

            {/* UI / Frontend */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                UI / Frontend Engineering
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Component-driven UIs that are fast, reusable, and responsive.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                <li>Component-based UI architecture</li>
                <li>SPA &amp; SSR experiences</li>
                <li>Responsive design for all screen sizes</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold text-slate-50">
                Cloud &amp; DevOps
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Deployment pipelines and infrastructure designed for reliability.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                <li>CI/CD pipelines</li>
                <li>Dockerized services</li>
                <li>Server and application security hardening</li>
              </ul>
            </div>
          </div>

          {/* Page-specific features: Services */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              How We Present Services
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Pricing Cards
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Clear breakdown of engagement models or packages.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">FAQ</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Address common questions about process, timelines, and cost.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Work Cycle
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  Visual explanation of discovery, design, build, launch, and
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


