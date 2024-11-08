"use client";
import Link from "next/link";
import Image from "next/image";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10">
      {/* Main Footer */}
      <div className="bg-white/90 border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Image 
                  src="/cognitoologo.png" 
                  alt="Cognitoo Logo" 
                  width={140} 
                  height={35}
                  className="hover:opacity-80 transition-opacity"
                />
                <p className="text-sm text-gray-500 max-w-md text-center md:text-left">
                  Empowering businesses with innovative technology solutions that drive growth and success.
                </p>
              </div>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Solutions */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">Solutions</h4>
                <ul className="space-y-3">
                  <li><FooterLink href="/solutions/web-development">Web Development</FooterLink></li>
                  <li><FooterLink href="/solutions/branding">Branding & Design</FooterLink></li>
                  <li><FooterLink href="/library">Component Library</FooterLink></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">Company</h4>
                <ul className="space-y-3">
                  <li><FooterLink href="/about">About Us</FooterLink></li>
                  <li><FooterLink href="/contact">Contact</FooterLink></li>
                </ul>
              </div>

              {/* Connect */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-purple-600 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-purple-600 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50/80 backdrop-blur-xl border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Cognitoo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 