import Link from "next/link";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30 font-mono tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Khanh Duy. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-xs text-white/40 uppercase tracking-wider">
          <Link href="/projects" className="hover:text-orange-400 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-orange-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
