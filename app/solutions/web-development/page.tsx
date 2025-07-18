import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Background from "@/app/components/Background";
import { Badge } from "@/app/components/Badge";
import { Footer } from "@/app/components/Footer";

const technologies = [
  {
    category: "Frontend",
    techs: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
    ]
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Expert" },
    ]
  },
  {
    category: "DevOps",
    techs: [
      { name: "Docker", level: "Expert" },
      { name: "AWS", level: "Expert" },
      { name: "CI/CD", level: "Expert" },
      { name: "Git", level: "Expert" },
    ]
  }
];

const services = [
  {
    title: "Custom Web Applications",
    description: "Tailored web solutions that perfectly match your business needs and scale with your growth",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      "Scalable Architecture",
      "Responsive Design",
      "Performance Optimized",
      "SEO Friendly"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with advanced features and seamless payment integrations",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Analytics Dashboard"
    ]
  },
  {
    title: "Progressive Web Apps",
    description: "Next-generation mobile-first applications with offline capabilities and native-like experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Offline Support",
      "Push Notifications",
      "App-like Experience",
      "Cross-platform"
    ]
  },
  {
    title: "API Development",
    description: "Robust and scalable APIs that power your applications with high performance and security",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "RESTful APIs",
      "GraphQL",
      "Authentication",
      "Documentation"
    ]
  }
];

const reviews = [
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    company: "Enterprise E-commerce Platform",
    review: "Cognitoo delivered an exceptional e-commerce solution that exceeded our expectations. Their attention to detail and technical expertise helped us achieve a 40% increase in sales conversion.",
    metrics: [
      { value: "40%", label: "Sales Increase" },
      { value: "2x", label: "Faster Loading" },
      { value: "99.9%", label: "Uptime" },
      { value: "50K+", label: "Daily Users" }
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, DataFlow",
    company: "Analytics Dashboard",
    review: "The team's expertise in building complex data visualization tools is remarkable. They transformed our vision into a powerful, user-friendly dashboard that our clients love.",
    metrics: [
      { value: "5x", label: "Performance" },
      { value: "60%", label: "Time Saved" },
      { value: "10M+", label: "Daily Requests" },
      { value: "500+", label: "API Endpoints" }
    ],
    tech: ["React", "Python", "MongoDB", "Docker"]
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />

      <div className="relative z-10 pt-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge>Web Development</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-8">
              Enterprise-Grade
              <span className="block mt-2 text-purple-600">
                Web Development Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Leverage our expertise in cutting-edge technologies to build scalable, 
              high-performance web applications that drive your business forward.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {technologies.map((tech) => (
              <div key={tech.category} className="card-blur p-8 hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-xl font-bold text-purple-600 mb-8">
                  {tech.category}
                </h3>
                <div className="space-y-5">
                  {tech.techs.map((t) => (
                    <div key={t.name} className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                      <span className="text-sm text-gray-600 font-medium">{t.name}</span>
                      <span className="text-[11px] font-medium tracking-wider text-purple-600 uppercase bg-purple-50 px-3 py-1 rounded-full">
                        {t.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge>Our Services</Badge>
              <h2 className="text-3xl font-bold mt-8 mb-6">
                <span className="text-purple-600">
                  Comprehensive Solutions
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                From custom web applications to API development, we provide end-to-end solutions 
                tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="card-blur p-8 group hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200/80">
                    <div className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                      Key Features
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="px-4 py-1.5 text-[11px] font-medium text-gray-600 bg-white/80 rounded-full border border-gray-200/80 transition-colors duration-300 hover:text-purple-600 hover:border-purple-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Reviews */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge>Testimonials</Badge>
              <h2 className="text-3xl font-bold mt-8 mb-6">
                <span className="text-purple-600">
                  Client Reviews
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.name} className="card-blur p-8 hover:-translate-y-1 transition-all duration-500">
                  {/* Review Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {review.company}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      "{review.review}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {review.metrics.map((metric) => (
                      <div key={metric.value} className="text-center">
                        <div className="text-lg font-bold text-purple-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="pt-6 border-t border-gray-200/80">
                    <div className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {review.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-4 py-1.5 text-[11px] font-medium text-purple-600 bg-purple-50 rounded-full border border-purple-100 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-6xl mx-auto px-4 pb-20">
            <div className="card-blur p-12 text-center">
              <Badge>Start Your Project</Badge>
              <h2 className="text-3xl font-bold mt-8 mb-6">
                <span className="text-purple-600">
                  Ready to Transform Your Ideas?
                </span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/solutions" 
                  className="px-8 py-3.5 rounded-xl border border-gray-200/80 text-gray-900 font-medium hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 