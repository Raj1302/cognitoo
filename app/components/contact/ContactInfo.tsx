import { Badge } from "../Badge";

type ContactMethod = {
  title: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    value: "hello@cognitoo.com",
    href: "mailto:hello@cognitoo.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Phone",
    value: "+91 (123) 456-7890",
    href: "tel:+911234567890",
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

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
        <div className="mb-8">
          <Badge>Contact Info</Badge>
          <h2 className="text-xl font-bold text-gray-900 mt-4">Get in Touch</h2>
        </div>
        <div className="space-y-6">
          {contactMethods.map((method) => (
            <div key={method.title} className="group">
              {method.href ? (
                <a 
                  href={method.href}
                  className="flex items-center gap-4 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="text-purple-600 p-3 bg-purple-500/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{method.title}</div>
                    <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                      {method.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="text-purple-600 p-3 bg-purple-500/5 rounded-xl">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{method.title}</div>
                    <div className="font-medium text-gray-900">{method.value}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 