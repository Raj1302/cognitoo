import { processSteps } from "../../lib/solutions-data";

export function ProcessSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-gray-200/80 bg-white/80 backdrop-blur-xl shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-medium text-gray-900">
              Our Process
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HOW WE WORK
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-[15px] leading-relaxed">
            Our streamlined process ensures efficient delivery while maintaining the highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/90 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-600 p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-200">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 