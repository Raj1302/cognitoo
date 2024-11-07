import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { Badge } from "./components/Badge";
import { GradientText } from "./components/GradientText";

// Constants
const AVATAR_SIZE = 24; // 6 * 4 (for w-6 h-6)

const clientAvatars = [
  "/client1.jpg",
  "/client2.jpg",
  "/client3.jpg",
  "/client4.jpg",
] as const;

const communityStats = [
  "/member1.jpg",
  "/member2.jpg",
  "/member3.jpg",
  "/member4.jpg",
] as const;

// Types
type CardProps = {
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
}

// Components
function AvatarGroup({ images, label, className = "" }: { 
  images: readonly string[];
  label: string;
  className?: string;
}) {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden"
            >
              <Image 
                src={src} 
                alt={`Avatar ${index + 1}`}
                width={32}
                height={32}
                className="w-full h-full rounded-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <span className="text-[11px] font-medium text-gray-500">
          {label}
        </span>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4" />
    </div>
  );
}

function Card({ 
  title, 
  description, 
  icon, 
  ctaText, 
  href, 
  tags,
  showClients = false,
  showCommunity = false,
  isComingSoon = false,
  openForProjects = false
}: CardProps) {
  return (
    <div className="flex-1 relative group">
      <Link href={href} className={`block ${isComingSoon ? 'cursor-not-allowed' : ''}`}>
        <div className="relative h-full flex flex-col items-center justify-center p-2 sm:p-6 z-10">
          <div className="w-full max-w-sm">
            <div className="relative backdrop-blur-xl bg-white/80 border border-gray-200/80 p-4 sm:p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:bg-white/90 group-hover:-translate-y-1">
              {isComingSoon && (
                <>
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-white/40 rounded-2xl z-10" />
                  <div className="absolute -top-3 right-0 sm:-right-3 z-20">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-xl shadow-sm">
                      <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-medium text-purple-900 tracking-wider uppercase">
                        Coming Soon
                      </span>
                      <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                    </div>
                  </div>
                </>
              )}
              
              {openForProjects && (
                <div className="absolute -top-3 right-0 sm:-right-3 z-20">
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-xl shadow-sm">
                    <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-purple-900 tracking-wider uppercase">
                      Open for Projects
                    </span>
                    <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                  </div>
                </div>
              )}
              
              <div className={`${isComingSoon ? 'opacity-50' : ''}`}>
                {/* Icon and Title Section */}
                <div className="flex items-start gap-3 sm:gap-5 mb-6 sm:mb-8">
                  <div className="text-purple-600 p-3 sm:p-4 bg-purple-500/5 rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]">
                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                      {icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                {showClients && (
                  <AvatarGroup 
                    images={clientAvatars} 
                    label="Trusted by many" 
                  />
                )}

                {showCommunity && (
                  <AvatarGroup 
                    images={communityStats} 
                    label="Join 5k+ Members" 
                  />
                )}

                {/* Features Section */}
                <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  <h3 className="text-[10px] sm:text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
                    {isComingSoon ? 'PLANNED FEATURES' : 'KEY FEATURES'}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium text-gray-600 backdrop-blur-md bg-white/80 rounded-full border border-gray-200/80 transition-colors duration-300 hover:text-purple-600 hover:border-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 sm:mt-8 flex items-center gap-2 text-purple-600 group/link">
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase">
                    {ctaText}
                  </span>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function EnterpriseCard() {
  return (
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
  );
}

function CommunityCard() {
  return (
    <div className="w-full md:w-1/2 flex items-start md:items-center justify-start md:justify-center -mt-[1px] md:mt-0">
      <div className="w-full px-6 md:px-0">
        <Card
          title="Developer Community"
          description="Join a community of innovators and lifelong learners"
          icon={
            <div className="relative">
              <div className="absolute inset-0 backdrop-blur-[1px] bg-white/40 rounded-lg z-10" />
              <svg className="relative opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[240px] sm:w-[280px]">
      <div className="relative backdrop-blur-xl bg-white/60 rounded-full border border-gray-200 px-3 sm:px-5 py-2 sm:py-2.5 shadow-lg">
        <div className="text-center flex items-center justify-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-gray-600">
          <span className="whitespace-nowrap">MADE WITH</span>
          <svg 
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-500" 
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
  );
}

// Simulate loading delay
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
  return {};
}

export default async function Home() {
  await getData(); // This will trigger the loading state

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <Background />
      <Navbar />

      <main className="flex-1 flex items-start md:items-center justify-center relative z-10 pt-24 sm:pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row w-full">
          <EnterpriseCard />
          <CommunityCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Constants
const solutions = [
  "Web Development",
  "Branding & Design",
  "School Management",
  "Hospital Management"
] as const;

const communityFeatures = [
  "Interactive Courses",
  "Live Workshops",
  "Developer Tools",
  "Community Forums"
] as const;
