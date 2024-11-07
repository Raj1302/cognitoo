import { Badge } from "../Badge";

type StatsItemProps = {
  value: string;
  label: string;
  color: "blue" | "purple";
}

function StatsItem({ value, label, color }: StatsItemProps) {
  return (
    <div className="text-center p-4 rounded-xl border border-gray-200/80 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <div className={`text-2xl font-bold text-${color}-600 mb-1`}>{value}</div>
      <div className="text-[11px] font-medium text-gray-600 uppercase">
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
          <div className="mt-6 mb-6">
            <h1 className="text-[2.5rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Transform Your Business
            </h1>
          </div>
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-base text-gray-600 leading-relaxed">
              Discover our comprehensive suite of enterprise solutions designed to elevate your business. 
              From web development to school management, we've got you covered.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StatsItem 
              value="3+" 
              label="Active Solutions" 
              color="blue" 
            />
            <StatsItem 
              value="24/7" 
              label="Expert Support" 
              color="purple" 
            />
            <StatsItem 
              value="100%" 
              label="Client Satisfaction" 
              color="blue" 
            />
            <StatsItem 
              value="3+" 
              label="Coming Soon" 
              color="purple" 
            />
          </div>

          {/* Additional Features */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              "Custom Development",
              "Cloud Integration",
              "Agile Process",
              "Dedicated Support",
              "Regular Updates"
            ].map((feature) => (
              <span 
                key={feature}
                className="px-4 py-1.5 text-[11px] font-medium text-gray-600 bg-white/60 rounded-full border border-gray-200/80 backdrop-blur-sm"
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