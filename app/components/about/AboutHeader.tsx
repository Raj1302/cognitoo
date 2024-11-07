import { Badge } from "../Badge";

type StatProps = {
  number: string;
  label: string;
}

function Stat({ number, label }: StatProps) {
  return (
    <div className="text-center p-6 rounded-2xl border border-gray-200/80 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group">
      <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-500">
        {number}
      </div>
      <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}

export function AboutHeader() {
  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>About Us</Badge>
          <div className="mt-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              We Create Digital
              <span className="block mt-2 text-purple-600">
                Solutions That Matter
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A team of passionate developers and designers dedicated to transforming businesses 
              through innovative technology solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Stat number="5+" label="Years Experience" />
          <Stat number="100+" label="Projects Delivered" />
          <Stat number="50+" label="Happy Clients" />
          <Stat number="24/7" label="Support" />
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-16">
          {[
            "Innovative Solutions",
            "Expert Team",
            "Agile Development",
            "Client-Focused",
            "Quality Assurance"
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
  );
} 