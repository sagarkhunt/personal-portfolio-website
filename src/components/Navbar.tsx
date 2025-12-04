 "use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 md:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-300 ring-1 ring-indigo-500/50 md:h-9 md:w-9">
            TS
          </span>
          <div className="flex flex-col leading-tight">
            <span className="truncate text-xs font-semibold text-slate-50 md:text-sm">
              Tech Services
            </span>
            <span className="hidden text-[0.6rem] text-slate-400 sm:block md:text-[0.65rem]">
              B2B &amp; B2C Digital Product Engineering
            </span>
          </div>
        </Link>

        {/* Desktop nav (768px and up) */}
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-200 md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300 transition-colors hover:bg-indigo-500/10 hover:text-indigo-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger menu button (below 768px) */}
        <button
          type="button"
          className="ml-2 inline-flex shrink-0 items-center justify-center rounded-lg border-2 border-indigo-500/50 bg-indigo-500/10 p-2.5 text-indigo-300 transition-all hover:bg-indigo-500/20 hover:border-indigo-400 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown (below 768px) */}
      {open && (
        <nav className="md:hidden">
          <div className="absolute left-0 right-0 top-full z-30 border-b border-slate-900/80 bg-slate-950/98 pb-4 pt-3 shadow-xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-200 transition-colors hover:bg-indigo-500/10 hover:text-indigo-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
