"use client";
import Link from "next/link";
import Image from "next/image";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  isComingSoon?: boolean;
}

function FooterLink({ href, children, isComingSoon }: FooterLinkProps) {
  return (
    <div className="relative group">
      <Link 
        href={isComingSoon ? "#" : href}
        className={`text-sm text-gray-600 hover:text-purple-600 transition-all duration-300 hover:translate-x-1 inline-block ${isComingSoon ? 'cursor-not-allowed' : ''}`}
        onClick={(e) => isComingSoon && e.preventDefault()}
      >
        {children}
      </Link>
      {isComingSoon && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg" />
            <div className="relative px-3 py-1 text-[11px] font-medium text-gray-900 bg-white/90 rounded-full border border-purple-500/20 backdrop-blur-xl whitespace-nowrap transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              Coming Soon
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mt-20">
      {/* Main Footer */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <Image 
                  src="/cognitoologo.png" 
                  alt="Cognitoo Logo" 
                  width={120} 
                  height={30}
                  className="hover:opacity-80 transition-opacity mx-auto sm:mx-0"
                />
                <p className="text-sm text-gray-600 leading-relaxed text-center sm:text-left">
                  Empowering businesses with innovative technology solutions that drive growth and success.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900 text-center sm:text-left">Connect With Us</h4>
                <div className="flex gap-4 justify-center sm:justify-start">
                  {[
                    {
                      name: 'LinkedIn',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'GitHub',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Twitter',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      )
                    }
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-purple-600 transition-all duration-300 hover:-translate-y-0.5"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 text-center sm:text-left">Quick Links</h3>
              <ul className="space-y-3 flex flex-col items-center sm:items-start">
                {[
                  { label: 'About', href: '/about' },
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Community', href: '/community', isComingSoon: true }
                ].map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} isComingSoon={link.isComingSoon}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="sm:col-span-1 lg:col-span-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 text-center sm:text-left">Solutions</h3>
              <ul className="space-y-3 flex flex-col items-center sm:items-start">
                {[
                  'Web Development',
                  'Branding & Design',
                  'School Management',
                  'Hospital Management'
                ].map((solution) => (
                  <li key={solution}>
                    <FooterLink href="#">
                      {solution}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 text-center sm:text-left">Contact</h3>
              <ul className="space-y-3 flex flex-col items-center sm:items-start">
                <li>
                  <a 
                    href="mailto:hello@cognitoo.com" 
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@cognitoo.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+911234567890" 
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Bangalore, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50/80 backdrop-blur-xl border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              © 2024 Cognitoo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <FooterLink href="/privacy">
                Privacy Policy
              </FooterLink>
              <FooterLink href="/terms">
                Terms of Service
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 