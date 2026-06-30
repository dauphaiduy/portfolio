"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-none border-b border-transparent transition-all duration-300">
      <div className="mx-auto px-5 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-widest text-orange-400 uppercase drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
        >
          KhanhDuy
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  active ? "text-orange-400" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-semibold bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all uppercase tracking-wider"
          >
            Hire Me
          </a>
        </nav>

        <div className="sm:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="text-white/60 hover:text-white transition"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-[#0d0d1a] px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-sm font-medium uppercase tracking-wider text-white/70 hover:text-orange-300 transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="block py-2.5 text-sm font-medium uppercase tracking-wider text-orange-400 hover:text-orange-300 transition"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
