import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              READY TO GET STARTED?
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-[15px] leading-relaxed">
            Transform your business with our cutting-edge solutions. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Schedule a Call
            </Link>
            <Link 
              href="/about"
              className="px-8 py-3 rounded-lg border border-gray-200/80 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 