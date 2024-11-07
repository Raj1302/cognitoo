import { Badge } from "../Badge";

type ValueCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueCardProps[] = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions that transform businesses",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Excellence",
    description: "Delivering exceptional quality in every project we undertake",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Collaboration",
    description: "Building strong, lasting partnerships with our valued clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    description: "Operating with complete transparency and unwavering honesty",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export function ValuesSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>Our Values</Badge>
          <h2 className="text-3xl font-bold mt-8 mb-6">
            <span className="text-purple-600">
              Principles That Drive Us
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Our core values shape everything we do, from how we develop solutions 
            to how we interact with our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div 
              key={value.title}
              className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 