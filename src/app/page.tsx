export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-900/80 bg-linear-to-b from-slate-950 via-slate-950 to-slate-950/60">
        <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              B2B &amp; B2C Digital Tech Partner
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Building Modern Digital Experiences{" "}
              <span className="block text-indigo-400">
                for Growing Companies
              </span>
            </h1>
            <p className="mt-6 text-base text-slate-300 md:text-lg">
              I help product teams and founders build B2B and B2C digital
              products—secure, scalable applications with clean architecture,
              reliable backends, and polished, responsive user interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-indigo-400/60 bg-indigo-400/10 px-4 py-2 text-xs font-medium text-indigo-100">
                B2B &amp; B2C Web Platforms
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200">
                Secure &amp; Scalable API Development
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200">
                Laravel, Node, React, Next.js, Vue, Flutter
              </span>
            </div>
          </div>

          <div className="grid w-full max-w-md gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm shadow-lg md:max-w-sm">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <h2 className="text-sm font-semibold text-slate-50">
                Why Choose Me
              </h2>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li>Clean architecture with MVC &amp; SOLID principles.</li>
                <li>Fast delivery with clear milestones and feedback loops.</li>
                <li>Solid documentation, API specs, and onboarding notes.</li>
                <li>Responsive, modern UI and UX tuned for conversions.</li>
                <li>
                  Industry best practices around security, performance, and
                  maintainability.
                </li>
              </ul>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                  Backend
                </p>
                <p className="mt-1 text-xs text-slate-100">
                  Laravel / PHP, Node.js / Express
                </p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                  Frontend
                </p>
                <p className="mt-1 text-xs text-slate-100">
                  React / Next.js, Vue / Nuxt
                </p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                  Data
                </p>
                <p className="mt-1 text-xs text-slate-100">
                  MySQL, PostgreSQL, MongoDB
                </p>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                  Infra &amp; DevOps
                </p>
                <p className="mt-1 text-xs text-slate-100">
                  AWS, Docker, CI/CD pipelines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick sections for services / portfolio preview */}
      <section className="border-b border-slate-800/80 bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6 md:py-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Services
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Web apps, mobile apps, APIs, and cloud-native backends built with
              clean, scalable architecture.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Our Work
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Case studies that highlight project goals, tech stacks, delivered
              features, and real-world impact.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Process &amp; Approach
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              A predictable way of working: discovery, architecture, delivery,
              and long-term support for your digital products.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
