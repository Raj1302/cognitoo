import { Badge } from "../Badge";

export function ContactHeader() {
  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>Get In Touch</Badge>
          <div className="mt-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let's Create Something
              <span className="block mt-2 text-purple-600">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help you achieve your goals. 
              Our team is ready to bring your vision to life.
            </p>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
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
      </div>
    </div>
  );
} 