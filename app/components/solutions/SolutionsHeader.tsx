import { Badge } from "../Badge";

type StatsItemProps = {
  value: string;
  label: string;
}

function StatsItem({ value, label }: StatsItemProps) {
  return (
    <div className="text-center p-6 rounded-2xl border border-gray-200/80 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group">
      <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-500">
        {value}
      </div>
      <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}

export function SolutionsHeader() {
  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <Badge>Our Solutions</Badge>
          <div className="mt-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="block mt-2 text-purple-600">
                Modern Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover our comprehensive suite of enterprise solutions designed to elevate your business. 
              From web development to school management, we've got you covered.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 mb-20">
            <StatsItem value="3+" label="Active Solutions" />
            <StatsItem value="24/7" label="Expert Support" />
            <StatsItem value="100%" label="Client Satisfaction" />
            <StatsItem value="3+" label="Coming Soon" />
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Custom Development",
              "Cloud Integration",
              "Agile Process",
              "Dedicated Support",
              "Regular Updates"
            ].map((feature) => (
              <span 
                key={feature}
                className="px-5 py-2 text-[11px] font-medium text-gray-600 bg-white/60 rounded-full border border-gray-200/80 backdrop-blur-sm hover:text-purple-600 hover:border-purple-200 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
} 