import { Suspense } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { AboutHeader } from "../components/about/AboutHeader";
import { MissionSection } from "../components/about/MissionSection";
import { ValuesSection } from "../components/about/ValuesSection";
import { Footer } from "../components/Footer";
import { Badge } from "../components/Badge";

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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {};
}

export default async function AboutPage() {
  await getData();

  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        {/* About Header */}
        <Suspense fallback={<SectionLoading />}>
          <AboutHeader />
        </Suspense>

        {/* Mission Section */}
        <Suspense fallback={<SectionLoading />}>
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            
            <MissionSection />
          </div>
        </Suspense>

        {/* Values Section */}
        <Suspense fallback={<SectionLoading />}>
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            
            <ValuesSection />
          </div>
        </Suspense>

        {/* Updated CTA Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-12 rounded-2xl shadow-lg text-center relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative">
                <Badge>Let's Connect</Badge>
                <h2 className="text-3xl font-bold mt-8 mb-6">
                  <span className="text-purple-600">
                    Ready to Transform Your Ideas?
                  </span>
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
                  Join hands with us to create innovative solutions that drive your business forward. 
                  Our team is excited to bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="/contact"
                    className="px-8 py-3.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Start a Project
                  </a>
                  <a 
                    href="mailto:hello@cognitoo.com"
                    className="px-8 py-3.5 rounded-xl border border-gray-200/80 text-gray-900 font-medium hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200/80">
                  {[
                    { value: "24/7", label: "Support" },
                    { value: "100%", label: "Satisfaction" },
                    { value: "50+", label: "Clients" },
                    { value: "5+", label: "Years" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center group">
                      <div className="text-2xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 