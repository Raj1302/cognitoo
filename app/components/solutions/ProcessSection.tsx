import { processSteps } from "../../lib/solutions-data";
import { Badge } from "../Badge";

export function ProcessSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>Our Process</Badge>
          <h2 className="text-3xl font-bold mt-8 mb-6">
            <span className="text-purple-600">
              How We Deliver Excellence
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Our proven development process ensures high-quality solutions 
            delivered on time and within budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-purple-200">
                  {step.number}
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
              </div>

              {/* Icon and Content */}
              <div className="flex items-start gap-5">
                <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]">
                  <div className="w-6 h-6">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
} 