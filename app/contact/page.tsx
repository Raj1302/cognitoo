import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Link from "next/link";

const contactMethods = [
  {
    title: "Email",
    value: "hello@cognitoo.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Phone",
    value: "+91 (123) 456-7890",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: "Location",
    value: "Bangalore, India",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
  }
];

const serviceOptions = [
  { value: "", label: "Select a Service" },
  { value: "web-development", label: "Web Development" },
  { value: "branding", label: "Branding & Design" },
  { value: "school", label: "School Management System" },
  { value: "hospital", label: "Hospital Management System" },
  { value: "custom", label: "Custom Solution" }
];

export default function ContactPage() {
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
                Contact Us
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-[0.2em] mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GET IN TOUCH
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto tracking-wide leading-relaxed">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <h2 className="text-xl font-bold tracking-wide mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-center gap-4">
                      <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg">
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-sm text-white/50 mb-1">{method.title}</div>
                        <div className="font-medium">{method.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <h2 className="text-xl font-bold tracking-wide mb-6">Follow Us</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-white/70 hover:text-white p-3 bg-white/5 rounded-lg transition-colors"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service Selector */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Interested In
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-blue-400 transition-colors appearance-none"
                    >
                      {serviceOptions.map((option) => (
                        <option 
                          key={option.value} 
                          value={option.value}
                          className="bg-black/90 text-white/90"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
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