"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { type ReactNode } from "react";
import { usePathname } from 'next/navigation';

const NavLink = ({ 
  href, 
  children, 
  onClick, 
  isActive = false,
  isComingSoon = false 
}: { 
  href: string; 
  children: ReactNode; 
  onClick?: () => void;
  isActive?: boolean;
  isComingSoon?: boolean;
}) => (
  <div className="relative group">
    <Link 
      href={isComingSoon ? "#" : href} 
      className={`text-[10px] tracking-[0.2em] ${isActive ? 'text-white' : 'text-white/70'} hover:text-white transition-all duration-300 uppercase hover:tracking-[0.3em] ${isComingSoon ? 'cursor-not-allowed' : ''}`}
      onClick={(e) => {
        if (isComingSoon) e.preventDefault();
        onClick?.();
      }}
    >
      {children}
    </Link>
    {isComingSoon && (
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg" />
          <div className="relative px-3 py-1 text-[10px] tracking-wider text-white/90 bg-black/80 rounded-full border border-purple-500/20 backdrop-blur-xl whitespace-nowrap">
            Coming Soon
          </div>
        </div>
      </div>
    )}
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-[600px] mx-auto px-4">
        <div className={`relative backdrop-blur-xl bg-black/60 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          {/* Top gradient line */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <nav className="flex items-center justify-between px-4 sm:px-6 py-3 relative">
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="sm:hidden relative w-6 h-6 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <div className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <span className="w-5 h-0.5 bg-current mb-1" />
                <span className="w-5 h-0.5 bg-current" />
                <span className="w-5 h-0.5 bg-current mt-1" />
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <span className="w-5 h-0.5 bg-current rotate-45 absolute" />
                <span className="w-5 h-0.5 bg-current -rotate-45 absolute" />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-6 w-[120px]">
              <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
              <NavLink href="/solutions" isActive={pathname === "/solutions"}>Solutions</NavLink>
            </div>

            {/* Logo */}
            <Link 
              href="/" 
              className="text-base sm:text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 relative group"
            >
              COGNITOO
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-6 w-[120px] justify-end">
              <NavLink 
                href="/community" 
                isActive={pathname === "/community"}
                isComingSoon={true}
              >
                Community
              </NavLink>
              <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>
            </div>

            {/* Placeholder for mobile menu button alignment */}
            <div className="w-6 sm:hidden"></div>
          </nav>

          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Mobile Menu */}
          <div 
            className={`
              sm:hidden 
              overflow-hidden 
              transition-all 
              duration-500 
              ease-in-out
              ${isOpen ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="p-4 mt-2 mx-4 mb-4 space-y-6 flex flex-col items-center backdrop-blur-xl bg-black/60 rounded-xl border border-white/10">
              <NavLink href="/about" onClick={closeMenu} isActive={pathname === "/about"}>About</NavLink>
              <NavLink href="/solutions" onClick={closeMenu} isActive={pathname === "/solutions"}>Solutions</NavLink>
              <NavLink 
                href="/community" 
                onClick={closeMenu} 
                isActive={pathname === "/community"}
                isComingSoon={true}
              >
                Community
              </NavLink>
              <NavLink href="/contact" onClick={closeMenu} isActive={pathname === "/contact"}>Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 