import { Suspense } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { SolutionsHeader } from "../components/solutions/SolutionsHeader";
import { SolutionsGrid } from "../components/solutions/SolutionsGrid";
import { ProcessSection } from "../components/solutions/ProcessSection";
import { CTASection } from "../components/solutions/CTASection";
import { Footer } from "../components/Footer";

// Loading component for sections
function SectionLoading() {
  return (
    <div className="py-12 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

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

      <Footer />
    </div>
  );
}