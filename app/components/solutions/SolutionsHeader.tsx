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

// Floating Icons Component
function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {/* Web Development Icon */}
      <div className="absolute top-[10%] left-[5%]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm border-[3px] border-white/50" />
          <div className="absolute inset-[3px] rounded-[17px] bg-gradient-to-br from-blue-500 to-blue-600 p-4 backdrop-blur-sm">
            <svg className="w-full h-full text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile App Icon */}
      <div className="absolute top-[20%] right-[5%]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm border-[3px] border-white/50" />
          <div className="absolute inset-[3px] rounded-[15px] bg-gradient-to-br from-purple-500 to-purple-600 p-3.5 backdrop-blur-sm">
            <svg className="w-full h-full text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Cloud Services Icon */}
      <div className="absolute bottom-[30%] left-[8%]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm border-[3px] border-white/50" />
          <div className="absolute inset-[3px] rounded-[15px] bg-gradient-to-br from-emerald-500 to-emerald-600 p-3.5 backdrop-blur-sm">
            <svg className="w-full h-full text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Database Icon - Adjusted position and rounded corners */}
      <div className="absolute top-[45%] right-[15%]">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm border-[3px] border-white/50" />
          <div className="absolute inset-[3px] rounded-[17px] bg-gradient-to-br from-orange-500 to-orange-600 p-3 backdrop-blur-sm">
            <svg className="w-full h-full text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Settings/Config Icon - Adjusted position and made visible */}
      <div className="absolute bottom-[25%] right-[12%]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm border-[3px] border-white/50" />
          <div className="absolute inset-[3px] rounded-[17px] bg-gradient-to-br from-pink-500 to-pink-600 p-3.5 backdrop-blur-sm">
            <svg className="w-full h-full text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Security Icon */}
      <div className="absolute top-[30%] left-[15%]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-sm border-[3px] border-white/50" />
          <div className="absolute inset-[3px] rounded-[15px] bg-gradient-to-br from-indigo-500 to-indigo-600 p-3.5 backdrop-blur-sm">
            <svg className="w-full h-full text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SolutionsHeader() {
  return (
    <div className="relative pt-32 pb-20">
      <FloatingIcons />
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