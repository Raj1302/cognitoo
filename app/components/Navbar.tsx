"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      // Start closing animation
      setIsClosing(true);
      // Wait for animation to complete before hiding menu
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Button Library', href: '/library' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`
          relative 
          backdrop-blur-sm 
          bg-white/80 
          rounded-xl 
          border 
          border-gray-200 
          shadow-lg 
          transition-all 
          duration-500 
          ease-in-out
          transform
          ${scrolled ? 'translate-y-[-8px]' : 'translate-y-0'}
        `}>
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <nav className="flex items-center justify-between px-4 sm:px-6 py-3 relative">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image 
                src="/cognitoologo.png" 
                alt="Cognitoo Logo" 
                width={120} 
                height={30}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="sm:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 relative">
                <span className={`
                  absolute left-0 top-1/2 w-6 h-0.5 bg-current transform 
                  transition-all duration-300 ease-in-out
                  ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}
                `} />
                <span className={`
                  absolute left-0 top-1/2 w-6 h-0.5 bg-current
                  transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-0' : 'opacity-100'}
                `} />
                <span className={`
                  absolute left-0 top-1/2 w-6 h-0.5 bg-current transform
                  transition-all duration-300 ease-in-out
                  ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}
                `} />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${link.disabled ? 'cursor-not-allowed' : ''}
                    ${pathname === link.href 
                      ? 'text-purple-600 bg-purple-50' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }
                  `}
                  onClick={link.disabled ? (e) => e.preventDefault() : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            {(isOpen || isClosing) && (
              <div 
                className={`
                  absolute top-full left-0 right-0 mt-2 p-2 
                  bg-white rounded-xl border border-gray-200 shadow-lg sm:hidden
                  transform transition-all duration-300 ease-in-out origin-top
                  ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.disabled) {
                        e.preventDefault();
                      } else {
                        closeMenu();
                      }
                    }}
                    className={`
                      relative block px-4 py-2 rounded-lg text-sm font-medium
                      transition-colors duration-200
                      ${link.disabled ? 'cursor-not-allowed' : ''}
                      ${pathname === link.href 
                        ? 'text-purple-600 bg-purple-50' 
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
} 