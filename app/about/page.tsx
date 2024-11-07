import { Suspense } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { AboutHeader } from "../components/about/AboutHeader";
import { MissionSection } from "../components/about/MissionSection";
import { ValuesSection } from "../components/about/ValuesSection";

// Loading component for sections
function SectionLoading() {
  return (
    <div className="py-12 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

// Simulate loading delay
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
  return {};
}

export default async function AboutPage() {
  await getData(); // This will trigger the loading state

  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <main>
        <Suspense fallback={<SectionLoading />}>
          <AboutHeader />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <MissionSection />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ValuesSection />
        </Suspense>

        {/* Footer */}
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
      </main>
    </div>
  );
} 