"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export function Footer() {
  return (
    <>
      {/* FOOTER MAIN */}
      <footer className="bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-10 md:px-8">

          {/* SUBSCRIPTION CARD (merged visually) */}
          <div className="bg-[var(--card-background)] rounded-2xl p-8 md:p-10 shadow-2xl border border-[var(--border)]/10">
            <div className="md:flex md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--heading)]">Stay Updated</h3>
                <p className="mt-3 text-lg text-[var(--subtext)]">
                  Get engineering notes, updates, and new service announcements straight to your inbox.
                </p>
              </div>

              {/* EMAIL FORM */}
              <form className="mt-6 md:mt-0 flex flex-col sm:flex-row w-full sm:max-w-xl gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  aria-label="Email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--heading)] placeholder-[var(--subtext)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3 rounded-lg font-semibold bg-[var(--accent)] text-[var(--foreground)] shadow hover:opacity-95 transition"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>

          {/* FOOTER LINKS & INFO */}
          <div className="mt-10 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:items-start">
              {/* Brand */}
              <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1 px-4 sm:px-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-sm font-bold uppercase tracking-widest text-[var(--foreground)] shadow-md">
                    TS
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-[var(--foreground)]">Tech Services</p>
                    <p className="text-xs text-[var(--foreground)]/70">B2B &amp; B2C Product Engineering</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--foreground)]/70 mt-2">
                  Focused on clean architecture, secure APIs, and elegant UI/UX.
                </p>
                <div className="mt-3 flex flex-col sm:flex-row flex-wrap gap-y-2 sm:gap-y-0 sm:gap-x-4 items-start">
                  <motion.a href="mailto:hello@techservices.example" className="text-sm text-[var(--foreground)]/90 hover:underline" whileHover={{ x: 5 }}>hello@techservices.example</motion.a>
                  <motion.a href="tel:+911234567890" className="text-sm text-[var(--foreground)]/90 hover:underline" whileHover={{ x: 5 }}>+91 1234 567 890</motion.a>
                  <motion.a
                    href="https://wa.me/918238812890" // <-- replace with your number (international format, no + or 00)
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transform transition"
                  >
                    <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-white">
                      <path d="M16.001 3.2A12.8 12.8 0 003.2 16c0 2.262.597 4.442 1.733 6.36L2 30l7.826-2.894A12.744 12.744 0 0016 28.8a12.8 12.8 0 000-25.6zm0 23.467a10.63 10.63 0 01-5.414-1.497l-.388-.23-4.64 1.717 1.55-4.76-.253-.4A10.61 10.61 0 015.334 16c0-5.88 4.786-10.666 10.667-10.666 5.88 0 10.666 4.786 10.666 10.666 0 5.88-4.786 10.667-10.666 10.667zm5.76-7.893c-.314-.157-1.853-.914-2.14-1.017-.287-.105-.497-.157-.706.157-.207.314-.811 1.017-.996 1.224-.184.21-.366.236-.68.079-.314-.157-1.327-.49-2.526-1.562-.933-.83-1.562-1.854-1.744-2.17-.184-.314-.02-.484.138-.64.142-.142.314-.366.47-.55.157-.184.21-.314.314-.524.105-.21.053-.393-.026-.55-.078-.157-.706-1.706-.968-2.34-.255-.61-.516-.526-.706-.536l-.602-.01c-.21 0-.55.078-.836.393-.287.314-1.097 1.07-1.097 2.61 0 1.54 1.12 3.03 1.275 3.24.157.21 2.203 3.36 5.34 4.707 3.137 1.35 3.137.9 3.703.845.565-.053 1.853-.748 2.114-1.47.26-.723.26-1.34.183-1.47-.078-.13-.287-.21-.602-.367z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Company & Resources Links Wrapper */}
              <div className="flex flex-wrap gap-8 sm:gap-10 mt-8 md:mt-0 sm:col-span-2 justify-around">
                <div>
                  <h4 className="text-base font-semibold text-[var(--foreground)]">Company</h4>
                  <ul className="mt-4 space-y-2 text-base">
                    <li><MotionLink href="/" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>Home</MotionLink></li>
                    <li><MotionLink href="/services" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>Services</MotionLink></li>
                    <li><MotionLink href="/our-work" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>Our Work</MotionLink></li>
                    <li><MotionLink href="/blog" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>Blog</MotionLink></li>
                    <li><MotionLink href="/about" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>About</MotionLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[var(--foreground)]">Resources</h4>
                  <ul className="mt-4 space-y-2 text-base">
                    <li><motion.a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>Engineering Notes</motion.a></li>
                    <li><motion.a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>API Docs</motion.a></li>
                    <li><motion.a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--primary)] transition-colors" whileHover={{ x: 5 }}>Careers</motion.a></li>
                  </ul>
                </div>
              </div>

              {/* Legal & Copyright */}
              <div className="flex flex-col items-start gap-2.5 mt-8 md:mt-0 px-4 sm:px-0">
                <p className="text-sm text-[var(--foreground)]/80">© {new Date().getFullYear()} Tech Services. All rights reserved.</p>
                <p className="text-sm text-[var(--foreground)]/60">Privacy Policy</p>
                <p className="text-sm text-[var(--foreground)]/60">Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
