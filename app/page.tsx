import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col font-orbitron relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Professional Floating Header */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="relative">
          {/* Enhanced Glow Effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
          
          <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden">
            {/* Subtle gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <nav className="flex items-center justify-between px-8 py-4 relative">
              {/* Left Navigation */}
              <div className="flex items-center gap-8 w-[140px]">
                <Link 
                  href="/about" 
                  className="text-xs tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 uppercase hover:tracking-[0.3em]"
                >
                  About
                </Link>
                <Link 
                  href="/solutions" 
                  className="text-xs tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 uppercase hover:tracking-[0.3em]"
                >
                  Solutions
                </Link>
              </div>

              {/* Logo - Now truly centered */}
              <div className="flex justify-center absolute left-1/2 -translate-x-1/2 w-[140px]">
                <Link 
                  href="/" 
                  className="text-xl font-bold tracking-[0.2em] bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-blue-300 transition-colors relative group"
                >
                  COGNITOO
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center gap-8 w-[140px] justify-end">
                <Link 
                  href="/community" 
                  className="text-xs tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 uppercase hover:tracking-[0.3em]"
                >
                  Community
                </Link>
                <Link 
                  href="/contact" 
                  className="text-xs tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300 uppercase hover:tracking-[0.3em]"
                >
                  Contact
                </Link>
              </div>
            </nav>

            {/* Subtle gradient line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </header>

      {/* Main Split Section */}
      <div className="h-screen flex flex-col md:flex-row relative z-10">
        {/* Enterprise Path */}
        <div className="flex-1 relative group h-1/2 md:h-full">
          <Link href="/solutions" className="block h-full">
            <div className="relative h-full flex flex-col items-center justify-center p-6 z-10">
              <div className="max-w-sm w-full transform group-hover:scale-[1.02] transition-all duration-300">
                <div className="relative">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                    
                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                      <div className="mb-4">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 tracking-[0.1em] uppercase">
                        Enterprise Solutions
                      </h2>
                      <p className="text-sm text-gray-300 mb-6 tracking-wide leading-relaxed">
                        Powerful software solutions designed for modern businesses
                      </p>
                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2 tracking-[0.2em] uppercase text-xs">Explore Solutions</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {solutions.map((solution) => (
                    <span key={solution} className="px-3 py-1 text-[10px] tracking-[0.15em] text-gray-300 backdrop-blur-md bg-white/5 rounded-full border border-white/10 uppercase">
                      {solution}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Developer Path */}
        <div className="flex-1 relative group h-1/2 md:h-full">
          <Link href="/community" className="block h-full">
            <div className="relative h-full flex flex-col items-center justify-center p-6 z-10">
              <div className="max-w-sm w-full transform group-hover:scale-[1.02] transition-all duration-300">
                <div className="relative">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                    
                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                      <div className="mb-4">
                        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 tracking-[0.1em] uppercase">
                        Developer Community
                      </h2>
                      <p className="text-sm text-gray-300 mb-6 tracking-wide leading-relaxed">
                        Join a community of innovators and lifelong learners
                      </p>
                      <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="mr-2 tracking-[0.2em] uppercase text-xs">Join Community</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {communityFeatures.map((feature) => (
                    <span key={feature} className="px-3 py-1 text-[10px] tracking-[0.15em] text-gray-300 backdrop-blur-md bg-white/5 rounded-full border border-white/10 uppercase">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="fixed bottom-0 left-0 right-0 text-center p-4 text-sm text-gray-500 tracking-[0.2em] z-10">
        © 2024 Cognitoo
      </footer>
    </div>
  );
}

const solutions = [
  "School Management",
  "Hospital Management",
  "HR Software",
  "Restaurant Management"
];

const communityFeatures = [
  "Interactive Courses",
  "Live Workshops",
  "Developer Tools",
  "Community Forums"
];
