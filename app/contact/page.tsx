import { Suspense } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { ContactHeader } from "../components/contact/ContactHeader";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { Footer } from "../components/Footer";

// Loading component for sections
function SectionLoading() {
  return (
    <div className="py-12 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        {/* Contact Header */}
        <Suspense fallback={<SectionLoading />}>
          <ContactHeader />
        </Suspense>

        {/* Contact Grid */}
        <section className="relative z-10 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Suspense fallback={<SectionLoading />}>
                <ContactInfo />
              </Suspense>

              <Suspense fallback={<SectionLoading />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "24/7", label: "Support" },
                { value: "100%", label: "Satisfaction" },
                { value: "50+", label: "Clients" },
                { value: "5+", label: "Years" }
              ].map((stat) => (
                <div 
                  key={stat.label} 
                  className="text-center p-6 rounded-2xl border border-gray-200/80 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Quick Response",
                "Expert Team",
                "Custom Solutions",
                "Dedicated Support",
                "Transparent Process"
              ].map((feature) => (
                <span 
                  key={feature}
                  className="px-5 py-2 text-[11px] font-medium text-gray-600 bg-white/60 rounded-full border border-gray-200/80 backdrop-blur-sm hover:text-purple-600 hover:border-purple-200 transition-colors duration-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 