import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Background from "@/app/components/Background";
import { Badge } from "@/app/components/Badge";
import { Footer } from "@/app/components/Footer";

const services = [
  {
    title: "Brand Identity Design",
    description: "Create a unique and memorable brand identity that resonates with your target audience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Brand Guidelines"
    ]
  },
  {
    title: "Marketing Materials",
    description: "Professional design for all your marketing and promotional materials",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    features: [
      "Business Cards",
      "Brochures",
      "Banners",
      "Social Media Kit"
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance digital experiences",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    features: [
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interface Design"
    ]
  },
  {
    title: "Print Design",
    description: "High-quality print designs that make a lasting impression",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    features: [
      "Packaging Design",
      "Catalogs",
      "Posters",
      "Merchandise"
    ]
  }
];

const reviews = [
  {
    name: "Emily Thompson",
    role: "Marketing Director, BrandCo",
    company: "Brand Identity Redesign",
    review: "Cognitoo transformed our brand identity completely. The new design perfectly captures our company's values and has significantly improved our market presence.",
    metrics: [
      { value: "85%", label: "Brand Recognition" },
      { value: "3x", label: "Social Engagement" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "40%", label: "Revenue Growth" }
    ],
    deliverables: ["Logo Suite", "Brand Guidelines", "Marketing Materials", "Digital Assets"]
  },
  {
    name: "Michael Chen",
    role: "CEO, TechStart",
    company: "Complete Brand Package",
    review: "The team's attention to detail and creative approach helped us establish a strong brand presence from day one. Their work exceeded our expectations.",
    metrics: [
      { value: "100%", label: "Project Score" },
      { value: "2x", label: "Website Traffic" },
      { value: "50K+", label: "Social Reach" },
      { value: "45%", label: "Conversion Rate" }
    ],
    deliverables: ["Brand Identity", "UI/UX Design", "Social Media Kit", "Print Materials"]
  }
];

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />

      <div className="relative z-10 pt-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge>Branding & Design</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-8">
              Transform Your Brand with
              <span className="block mt-2 text-purple-600">
                Creative Design Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We create compelling brand identities and design experiences that 
              help businesses stand out in today's competitive market.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge>Our Services</Badge>
              <h2 className="text-3xl font-bold mt-8 mb-6">
                <span className="text-purple-600">
                  Comprehensive Design Solutions
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                From brand identity to digital design, we provide end-to-end creative 
                solutions tailored to your brand's needs.
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
                      What's Included
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
              <Badge>Success Stories</Badge>
              <h2 className="text-3xl font-bold mt-8 mb-6">
                <span className="text-purple-600">
                  Client Transformations
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                See how our design solutions have helped businesses transform their brand presence.
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

                  {/* Deliverables */}
                  <div className="pt-6 border-t border-gray-200/80">
                    <div className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                      Project Deliverables
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {review.deliverables.map((item) => (
                        <span 
                          key={item} 
                          className="px-4 py-1.5 text-[11px] font-medium text-purple-600 bg-purple-50 rounded-full border border-purple-100 uppercase tracking-wider"
                        >
                          {item}
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
                  Ready to Transform Your Brand?
                </span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
                Let's create a unique brand identity that sets you apart from the competition.
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