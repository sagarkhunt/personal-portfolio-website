"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky top-0 z-50 
        bg-[var(--background)] 
        shadow-lg border-b border-[var(--border)]
      "
    >
      {/* MAIN CONTAINER */}
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-4 py-3 md:px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className="
              flex h-9 w-9 shrink-0 items-center justify-center rounded-xl 
              bg-[var(--primary)] text-sm font-bold uppercase tracking-widest 
              text-[var(--foreground)] shadow-md
            "
          >
            TS
          </span>

          <div className="flex flex-col leading-tight">
            <span className="truncate text-sm font-semibold text-[var(--foreground)] tracking-wide">
              Tech Services
            </span>
            <span className="hidden text-[0.7rem] text-[var(--subtext)] sm:block">
              B2B & B2C Product Engineering
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-4 font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-3 py-1.5 rounded-lg text-sm uppercase tracking-[0.05em] 
                  transition-colors duration-200 
                  ${active
                    ? "text-[var(--primary)] font-semibold"
                    : "text-[var(--foreground)] hover:text-[var(--primary)]"
                  }
                `}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[var(--primary)] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                    active ? 'scale-x-100' : ''
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-lg bg-[var(--card-background)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--border)] transition-all shadow-sm"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="ml-3 md:hidden p-2 rounded-lg bg-[var(--card-background)] text-[var(--foreground)] border border-[var(--border)] 
                     hover:bg-[var(--border)] transition-all shadow-sm"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden bg-[var(--background)] shadow-xl border-t border-[var(--border)]">
          <div className="flex flex-col px-4 py-3 gap-1.5">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium 
                    transition-colors duration-200 
                    ${
                      active
                        ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                        : "text-[var(--foreground)] hover:bg-[var(--card-background)]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
