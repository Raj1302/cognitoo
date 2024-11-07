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
        <div className="h-full backdrop-blur-xl bg-white/80 border border-gray-200/80 p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/90">
          {isComingSoon && (
            <>
              <div className="absolute inset-0 backdrop-blur-[1px] bg-white/40 rounded-xl z-10" />
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-[11px] font-medium text-gray-900 bg-white/90 rounded-full border border-gray-200/80 uppercase">
                  Coming Soon
                </span>
              </div>
            </>
          )}

          <div className={`${isComingSoon ? 'opacity-50' : ''}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-blue-600 p-3 bg-blue-500/10 rounded-lg shrink-0">
                {icon}
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

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">
                {isComingSoon ? 'PLANNED FEATURES' : 'KEY FEATURES'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1 text-[11px] font-medium text-gray-600 backdrop-blur-md bg-white/80 rounded-full border border-gray-200/80"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 