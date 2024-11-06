import Link from "next/link";
import { type ReactNode } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

const clientAvatars = [
  "/client1.png",
  "/client2.png",
  "/client3.png",
  "/client4.png",
] as const;

const communityStats = [
  "/member1.png",
  "/member2.png",
  "/member3.png",
  "/member4.png",
] as const;

const Card = ({ 
  title, 
  description, 
  icon, 
  ctaText, 
  href, 
  color, 
  tags,
  showClients = false,
  showCommunity = false,
  isComingSoon = false,
  openForProjects = false
}: { 
  title: string;
  description: string;
  icon: ReactNode;
  ctaText: string;
  href: string;
  color: "blue" | "purple";
  tags: readonly string[];
  showClients?: boolean;
  showCommunity?: boolean;
  isComingSoon?: boolean;
  openForProjects?: boolean;
}) => (
  <div className="flex-1 relative group md:min-h-full">
    <Link href={href} className={`block h-full ${isComingSoon ? 'pointer-events-none' : ''}`}>
      <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 z-10">
        <div className="w-full max-w-sm">
          <div className="relative backdrop-blur-xl bg-black/60 border border-white/10 p-4 sm:p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-colors hover:bg-black/70">
            {isComingSoon && (
              <>
                {/* Increased blur for card content */}
                <div className="absolute inset-0 backdrop-blur-[3px] bg-black/40 rounded-xl z-10" />
                {/* Enhanced Coming Soon Badge */}
                <div className="absolute -top-3 -right-2 z-20">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg" />
                    <div className="relative px-4 py-1.5 text-[10px] tracking-[0.2em] text-white/90 bg-black/60 rounded-full border border-purple-500/20 uppercase backdrop-blur-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                        Coming Soon
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {openForProjects && (
              <div className="absolute -top-3 -right-2 z-20">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-lg" />
                  <div className="relative px-4 py-1.5 text-[10px] tracking-[0.2em] text-white/90 bg-black/60 rounded-full border border-emerald-500/20 uppercase backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open for Projects
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className={`relative ${isComingSoon ? 'opacity-40' : ''}`}>
              <div className="relative">
                <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                  <div className={`w-7 h-7 sm:w-10 sm:h-10 text-${color}-400 shrink-0`}>{icon}</div>
                  <h2 className="text-lg sm:text-2xl font-bold tracking-[0.1em] uppercase">
                    {title}
                  </h2>
                </div>
                <p className="text-sm text-white/70 mb-4 sm:mb-6 tracking-wide leading-relaxed">
                  {description}
                </p>

                {showClients && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex -space-x-2">
                        {clientAvatars.map((_, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-black/60 bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase">
                        Trusted by many
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                )}

                {showCommunity && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex -space-x-2">
                        {communityStats.map((_, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-black/60 bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase">
                        Join 5k+ Members
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                )}

                <div className={`inline-flex items-center text-${color}-400 group-hover:text-${color}-300 transition-colors`}>
                  <span className="mr-2 tracking-[0.2em] uppercase text-xs">{ctaText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 justify-center ${isComingSoon ? 'opacity-40 pointer-events-none' : ''}`}>
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] tracking-[0.15em] text-white/70 backdrop-blur-md bg-black/50 rounded-full border border-white/10 uppercase"
              >
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
    <div className="min-h-screen bg-black text-white flex flex-col font-orbitron relative overflow-hidden">
      <Background />
      <Navbar />

      <div className="flex-1 flex items-start md:items-center justify-center relative z-10 pt-24 sm:pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row w-full">
          {/* Enterprise Solutions Card */}
          <div className="w-full md:w-1/2 flex items-start md:items-center justify-start md:justify-center">
            <div className="w-full px-6 md:px-0">
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
                showClients={true}
                openForProjects={true}
              />
            </div>
          </div>

          {/* Community Card - Now with increased blur */}
          <div className="w-full md:w-1/2 flex items-start md:items-center justify-start md:justify-center -mt-[1px] md:mt-0">
            <div className="w-full px-6 md:px-0">
              <Card
                title="Developer Community"
                description="Join a community of innovators and lifelong learners"
                icon={
                  <div className="relative">
                    {/* Increased blur for icon */}
                    <div className="absolute inset-0 backdrop-blur-[3px] bg-black/40 rounded-lg z-10" />
                    <svg className="relative opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                }
                ctaText="Join Community"
                href="/community"
                color="purple"
                tags={communityFeatures}
                showCommunity={true}
                isComingSoon={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-optimized Footer */}
      <footer className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[240px] sm:w-[280px]">
        <div className="relative backdrop-blur-xl bg-black/40 rounded-full border border-white/10 px-3 sm:px-5 py-2 sm:py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <div className="text-center flex items-center justify-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-white/70">
            <span className="whitespace-nowrap">MADE WITH</span>
            <svg 
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>IN INDIA</span>
            <span className="mx-1 sm:mx-1.5">•</span>
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
