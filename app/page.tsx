import Link from "next/link";
import { type ReactNode } from "react";

// Reusable components for better organization
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link 
    href={href} 
    className="text-[10px] tracking-[0.2em] text-white/70 hover:text-white transition-colors uppercase"
  >
    {children}
  </Link>
);

const Card = ({ 
  title, 
  description, 
  icon, 
  ctaText, 
  href, 
  color, 
  tags 
}: { 
  title: string;
  description: string;
  icon: ReactNode;
  ctaText: string;
  href: string;
  color: "blue" | "purple";
  tags: readonly string[];
}) => (
  <div className="flex-1 relative group h-1/2 md:h-full">
    <Link href={href} className="block h-full">
      <div className="relative h-full flex flex-col items-center justify-center p-6 z-10">
        <div className="max-w-sm w-full">
          <div className="relative backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-colors hover:bg-black/70">
            <div className="relative">
              <div className="mb-4">
                <div className={`w-10 h-10 text-${color}-400`}>{icon}</div>
              </div>
              <h2 className="text-2xl font-bold mb-3 tracking-[0.1em] uppercase">
                {title}
              </h2>
              <p className="text-sm text-white/70 mb-6 tracking-wide leading-relaxed">
                {description}
              </p>
              <div className={`inline-flex items-center text-${color}-400 group-hover:text-${color}-300 transition-colors`}>
                <span className="mr-2 tracking-[0.2em] uppercase text-xs">{ctaText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-[10px] tracking-[0.15em] text-white/70 backdrop-blur-md bg-black/50 rounded-full border border-white/10 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col font-orbitron relative overflow-hidden">
      {/* Optimized Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Optimized Header */}
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

      {/* Main Content */}
      <div className="h-screen flex flex-col md:flex-row relative z-10">
        <Card
          title="Enterprise Solutions"
          description="Powerful software solutions designed for modern businesses"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          ctaText="Explore Solutions"
          href="/solutions"
          color="blue"
          tags={solutions}
        />

        <Card
          title="Developer Community"
          description="Join a community of innovators and lifelong learners"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          ctaText="Join Community"
          href="/community"
          color="purple"
          tags={communityFeatures}
        />
      </div>

      {/* Optimized Footer */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[280px]">
        <div className="relative backdrop-blur-xl bg-black/40 rounded-full border border-white/10 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <div className="text-center flex items-center justify-center gap-1.5 text-[10px] tracking-[0.2em] text-white/70">
            <span>MADE WITH</span>
            <svg 
              className="w-2.5 h-2.5 text-red-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>IN INDIA</span>
            <span className="mx-1.5">•</span>
            <span>© 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const solutions = [
  "School Management",
  "Hospital Management",
  "HR Software",
  "Restaurant Management"
] as const;

const communityFeatures = [
  "Interactive Courses",
  "Live Workshops",
  "Developer Tools",
  "Community Forums"
] as const;
