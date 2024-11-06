import Link from "next/link";
import { type ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link 
    href={href} 
    className="text-[10px] tracking-[0.2em] text-white/70 hover:text-white transition-colors uppercase"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[600px]">
      <div className="relative backdrop-blur-xl bg-black/60 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden">
        <nav className="flex items-center justify-between px-6 py-3 relative">
          <div className="flex items-center gap-6 w-[120px]">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
          </div>

          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            COGNITOO
          </Link>

          <div className="flex items-center gap-6 w-[120px] justify-end">
            <NavLink href="/community">Community</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
} 