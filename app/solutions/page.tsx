import Link from "next/link";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

const solutions = [
  {
    title: "Web Development",
    description: "Custom web solutions from simple websites to complex web applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: "/solutions/web-development",
    features: [
      "Custom Web Apps",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
      "UI/UX Design",
      "Performance Optimization"
    ]
  },
  {
    title: "Branding & Design",
    description: "Complete branding solutions to establish and enhance your digital presence.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    href: "/solutions/branding",
    features: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Kit",
      "Brand Guidelines",
      "Digital Assets"
    ]
  },
  {
    title: "School Management",
    description: "Comprehensive system for educational institutions with modules for admissions, attendance, grades, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    href: "/solutions/school",
    features: [
      "Student Information System",
      "Attendance Management",
      "Grade Management",
      "Timetable Scheduling",
      "Fee Management",
      "Library Management"
    ]
  },
  {
    title: "Hospital Management",
    description: "End-to-end healthcare management solution for hospitals and clinics of all sizes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: "/solutions/hospital",
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Billing & Insurance",
      "Pharmacy Management",
      "Lab Management",
      "Inventory Control"
    ]
  }
];

const comingSoonSolutions = [
  {
    title: "HR Software",
    description: "Modern HR management platform for streamlined workforce operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      "Employee Management",
      "Attendance & Leave",
      "Payroll Processing",
      "Performance Reviews",
      "Recruitment Portal",
      "Training Management"
    ]
  },
  {
    title: "Restaurant Management",
    description: "Complete restaurant management system for efficient food service operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      "Order Management",
      "Kitchen Display",
      "Inventory Control",
      "Table Reservations",
      "Online Ordering",
      "Customer Loyalty"
    ]
  },
  {
    title: "E-commerce Platform",
    description: "A comprehensive e-commerce solution with advanced features and integrations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    features: [
      "Multi-vendor Support",
      "Payment Integration",
      "Inventory System",
      "Analytics Dashboard",
      "Mobile Apps",
      "Marketing Tools"
    ]
  },
  {
    title: "LMS Platform",
    description: "Next-generation learning management system for educational institutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: [
      "Virtual Classrooms",
      "Course Builder",
      "Assessment Tools",
      "Progress Tracking",
      "Certification",
      "Mobile Learning"
    ]
  }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Skilled developers and designers with years of industry experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Modern Tech Stack",
    description: "Using cutting-edge technologies for scalable solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions to meet your specific requirements",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your requirements and create a detailed project roadmap",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Planning",
    description: "Detailed project planning with timeline and milestone definition",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Development",
    description: "Agile development process with regular updates and feedback",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous testing to ensure quality and performance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "05",
    title: "Deployment",
    description: "Smooth deployment with minimal downtime",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
  {
    number: "06",
    title: "Support",
    description: "Ongoing support and maintenance to ensure optimal performance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron">
      {/* Shared Background Component */}
      <Background />

      {/* Navbar */}
      <Navbar />

      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <div className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              {/* Enhanced Services Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase font-medium">
                  Our Services
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <h1 className="text-4xl font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ENTERPRISE SOLUTIONS
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto px-4 tracking-wide leading-relaxed">
                High-performance, customizable software solutions designed for modern businesses. 
                Choose the solution that fits your needs.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-1">4+</div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Active Solutions</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Support Available</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Customizable</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400 mb-1">4+</div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <Link 
                key={solution.title} 
                href={solution.href}
                className="group"
              >
                <div className="h-full backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-colors hover:bg-black/70">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg">
                      {solution.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold tracking-wide mb-2">
                        {solution.title}
                      </h2>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold tracking-wider text-white/80">
                      KEY FEATURES
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-[10px] tracking-[0.15em] text-white/70 backdrop-blur-md bg-black/50 rounded-full border border-white/10 uppercase"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {comingSoonSolutions.map((solution) => (
              <div 
                key={solution.title} 
                className="relative group cursor-not-allowed"
              >
                {/* Blur Overlay */}
                <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40 z-10 rounded-xl" />
                
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-[10px] tracking-[0.15em] text-white/90 bg-blue-500/20 rounded-full border border-blue-500/20 uppercase">
                    Coming Soon
                  </span>
                </div>

                <div className="h-full backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-blue-400/50 p-3 bg-blue-400/5 rounded-lg">
                      {solution.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold tracking-wide mb-2 text-white/50">
                        {solution.title}
                      </h2>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold tracking-wider text-white/50">
                      PLANNED FEATURES
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-[10px] tracking-[0.15em] text-white/40 backdrop-blur-md bg-black/30 rounded-full border border-white/5 uppercase"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Updated background */}
      <div className="relative z-10 py-20">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent uppercase font-medium">
                  Why Choose Us
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                EXCELLENCE IN DELIVERY
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto px-4 tracking-wide leading-relaxed">
                We combine expertise, innovation, and dedication to deliver outstanding solutions that drive your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item) => (
                <div 
                  key={item.title}
                  className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-black/70 group"
                >
                  <div className="text-purple-400 p-3 bg-purple-400/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase font-medium">
                Our Process
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HOW WE WORK
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto px-4 tracking-wide leading-relaxed">
              Our streamlined process ensures efficient delivery while maintaining the highest quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.number}
                className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-black/70 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-white/20">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 mb-32 px-4">
        <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-12 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] relative overflow-hidden group">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Animated orbs */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
          
          <div className="relative">
            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left column - Text content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-white/10 bg-black/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] tracking-[0.3em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase font-medium">
                    Get Started
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold tracking-[0.2em] mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TRANSFORM YOUR BUSINESS
                </h3>
                <p className="text-white/70 mb-8 tracking-wide leading-relaxed">
                  Ready to elevate your business with cutting-edge solutions? Let's create something extraordinary together.
                </p>
              </div>

              {/* Right column - Stats & CTA */}
              <div className="flex-1 w-full">
                <div className="bg-black/40 border border-white/10 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3">
                      <div className="text-2xl font-bold text-blue-400 mb-1">100+</div>
                      <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Projects Delivered</div>
                    </div>
                    <div className="text-center p-3">
                      <div className="text-2xl font-bold text-purple-400 mb-1">95%</div>
                      <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/contact"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium tracking-wide text-center hover:opacity-90 transition-opacity group-hover:scale-[1.02] duration-300"
                  >
                    Schedule a Free Consultation
                  </Link>
                  <Link 
                    href="/portfolio"
                    className="px-8 py-4 rounded-xl border border-white/10 text-white/90 font-medium tracking-wide text-center hover:bg-white/5 transition-colors"
                  >
                    View Our Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[280px]">
        <div className="relative backdrop-blur-xl bg-black/40 rounded-full border border-white/10 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <div className="text-center flex items-center justify-center gap-1.5 text-[10px] tracking-[0.2em] text-white/70">
            <span>MADE WITH</span>
            <svg 
              className="w-2.5 h-2.5 text-red-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>IN INDIA</span>
            <span className="mx-1.5">•</span>
            <span>© 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 