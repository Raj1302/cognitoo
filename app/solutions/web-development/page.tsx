import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Background from "@/app/components/Background";

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
    description: "Tailored web solutions that perfectly match your business needs",
    features: [
      "Scalable Architecture",
      "Responsive Design",
      "Performance Optimized",
      "SEO Friendly"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with seamless payment integration",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Analytics Dashboard"
    ]
  },
  {
    title: "Progressive Web Apps",
    description: "Mobile-first applications with offline capabilities",
    features: [
      "Offline Support",
      "Push Notifications",
      "App-like Experience",
      "Cross-platform"
    ]
  },
  {
    title: "API Development",
    description: "Robust and scalable APIs for your business needs",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Authentication",
      "Documentation"
    ]
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online marketplace with multi-vendor support",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    metrics: ["50K+ Users", "99.9% Uptime", "2s Load Time"]
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics and management dashboard for enterprise clients",
    tech: ["React", "Python", "MongoDB", "Docker"],
    metrics: ["Real-time Data", "500+ API Endpoints", "10M+ Requests/day"]
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron">
      <Background />
      <Navbar />

      {/* Hero Section - Adjusted spacing */}
      <div className="relative z-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase font-medium">
                Web Development
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-[0.2em] mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MODERN WEB SOLUTIONS
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto tracking-wide leading-relaxed">
              We build scalable, high-performance web applications using cutting-edge technologies
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Section - Consistent spacing */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div 
                key={tech.category}
                className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
              >
                <h3 className="text-xl font-bold tracking-wide mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {tech.category}
                </h3>
                <div className="space-y-4">
                  {tech.techs.map((t) => (
                    <div key={t.name} className="flex items-center justify-between">
                      <span className="text-sm text-white/70">{t.name}</span>
                      <span className="text-xs text-blue-400">{t.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Refined spacing */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div 
                key={service.title}
                className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] group hover:bg-black/70 transition-colors"
              >
                <h3 className="text-xl font-bold tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 text-[10px] tracking-[0.15em] text-white/70 backdrop-blur-md bg-black/50 rounded-full border border-white/10 uppercase"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Optimized spacing */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
              >
                <h3 className="text-xl font-bold tracking-wide mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-3 py-1 text-[10px] tracking-[0.15em] text-blue-400 backdrop-blur-md bg-blue-400/10 rounded-full border border-blue-400/20 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span 
                      key={metric}
                      className="px-3 py-1 text-[10px] tracking-[0.15em] text-purple-400 backdrop-blur-md bg-purple-400/10 rounded-full border border-purple-400/20 uppercase"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean spacing */}
      <section className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-center">
            <h2 className="text-2xl font-bold tracking-[0.2em] mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              START YOUR PROJECT
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-6 tracking-wide leading-relaxed">
              Ready to bring your web project to life? Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              <Link 
                href="/solutions"
                className="px-8 py-3 rounded-full border border-white/10 text-white/90 font-medium tracking-wide hover:bg-white/5 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 