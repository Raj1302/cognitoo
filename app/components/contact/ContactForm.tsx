const serviceOptions = [
  { value: "", label: "Select a Service" },
  { value: "web-development", label: "Web Development" },
  { value: "branding", label: "Branding & Design" },
  { value: "school", label: "School Management System" },
  { value: "custom", label: "Custom Solution" }
];

export function ContactForm() {
  return (
    <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-xl shadow-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              className="w-full bg-white/60 border border-gray-200/80 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              className="w-full bg-white/60 border border-gray-200/80 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-white/60 border border-gray-200/80 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interested In
          </label>
          <div className="relative">
            <select 
              className="w-full bg-white/60 border border-gray-200/80 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
            >
              {serviceOptions.map((option) => (
                <option 
                  key={option.value} 
                  value={option.value}
                  className="text-gray-900"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            rows={4}
            className="w-full bg-white/60 border border-gray-200/80 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
} 