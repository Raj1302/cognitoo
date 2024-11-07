import Link from "next/link";
import { type ReactNode } from "react";

type SolutionCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  href: string;
  isComingSoon?: boolean;
}

export function SolutionCard({ 
  title, 
  description, 
  icon, 
  features, 
  href,
  isComingSoon 
}: SolutionCardProps) {
  return (
    <div className="relative group">
      <Link 
        href={isComingSoon ? "#" : href}
        className={`block ${isComingSoon ? 'cursor-not-allowed' : ''}`}
      >
        <div className="h-full backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:bg-white/90 group-hover:-translate-y-1">
          {isComingSoon && (
            <>
              <div className="absolute inset-0 backdrop-blur-[1px] bg-white/40 rounded-2xl z-10" />
              <div className="absolute -top-3 -right-3 z-20">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-xl shadow-sm">
                  <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[11px] font-medium text-purple-900 tracking-wider uppercase">
                    Coming Soon
                  </span>
                  <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
                </div>
              </div>
            </>
          )}

          <div className={`${isComingSoon ? 'opacity-50' : ''}`}>
            {/* Icon and Title Section */}
            <div className="flex items-start gap-5 mb-8">
              <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]">
                <div className="w-8 h-8">
                  {icon}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
                {isComingSoon ? 'PLANNED FEATURES' : 'KEY FEATURES'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-4 py-1.5 text-[11px] font-medium text-gray-600 backdrop-blur-md bg-white/80 rounded-full border border-gray-200/80 transition-colors duration-300 hover:text-purple-600 hover:border-purple-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Learn More Link */}
            <div className="mt-8 flex items-center gap-2 text-purple-600 group/link">
              <span className="text-[11px] font-medium tracking-wider uppercase">
                Learn More
              </span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 