import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Link from "next/link";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "100+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "24/7", label: "Support" }
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Excellence",
    description: "Committed to delivering the highest quality",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Collaboration",
    description: "Building strong partnerships with our clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    description: "Operating with transparency and honesty",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron">
      <Background />
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase font-medium">
                About Us
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CRAFTING DIGITAL EXCELLENCE
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto tracking-wide leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating innovative solutions that drive business success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                OUR MISSION
              </h2>
              <p className="text-white/70 tracking-wide leading-relaxed mb-8">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and success. We strive to be at the forefront of digital transformation, delivering excellence in every project we undertake.
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            OUR VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-black/70 group"
              >
                <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold tracking-wide mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-center">
            <h2 className="text-2xl font-bold tracking-[0.2em] mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 tracking-wide leading-relaxed">
              Ready to transform your ideas into reality? Get in touch with us and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <Link 
                href="/solutions"
                className="px-8 py-3 rounded-full border border-white/10 text-white/90 font-medium tracking-wide hover:bg-white/5 transition-colors"
              >
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

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