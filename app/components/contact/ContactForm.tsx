import { Badge } from "../Badge";

const serviceOptions = [
  { value: "", label: "Select a Service" },
  { value: "web-development", label: "Web Development" },
  { value: "branding", label: "Branding & Design" },
  { value: "school", label: "School Management System" },
  { value: "custom", label: "Custom Solution" }
];

export function ContactForm() {
  return (
    <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="mb-8">
        <Badge>Contact Form</Badge>
        <h2 className="text-xl font-bold text-gray-900 mt-4">
          Send us a Message
        </h2>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              className="w-full bg-white/60 border border-gray-200/80 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 transition-all duration-300"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              className="w-full bg-white/60 border border-gray-200/80 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 transition-all duration-300"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-white/60 border border-gray-200/80 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interested In
          </label>
          <div className="relative">
            <select 
              className="w-full bg-white/60 border border-gray-200/80 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 transition-all duration-300 appearance-none"
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
            className="w-full bg-white/60 border border-gray-200/80 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>
    </div>
  );
} 