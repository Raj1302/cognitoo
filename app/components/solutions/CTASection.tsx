import Link from "next/link";
import { Badge } from "../Badge";

export function CTASection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-12 rounded-2xl shadow-lg text-center relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative">
            <Badge>Get Started</Badge>
            <h2 className="text-3xl font-bold mt-8 mb-6">
              <span className="text-purple-600">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Let's collaborate to create innovative solutions that drive your success. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Schedule a Call
              </Link>
              <Link 
                href="/about"
                className="px-8 py-3.5 rounded-xl border border-gray-200/80 text-gray-900 font-medium hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200/80">
              {[
                { value: "24/7", label: "Support" },
                { value: "100%", label: "Satisfaction" },
                { value: "3+", label: "Solutions" },
                { value: "Fast", label: "Delivery" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
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
  );
} 