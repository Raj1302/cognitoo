import Link from "next/link";
import { Suspense } from "react";
import { SolutionsHeader } from "../components/solutions/SolutionsHeader";
import { SolutionsGrid } from "../components/solutions/SolutionsGrid";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";

// Process section component - Moved to separate component
import { ProcessSection } from "../components/solutions/ProcessSection";

// CTA section component - Moved to separate component
import { CTASection } from "../components/solutions/CTASection";

// Loading component for sections
function SectionLoading() {
  return (
    <div className="py-12 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

// Main page component with optimizations
export default async function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <main>
        <Suspense fallback={<SectionLoading />}>
          <SolutionsHeader />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <SolutionsGrid />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ProcessSection />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <CTASection />
        </Suspense>
      </main>
    </div>
  );
}