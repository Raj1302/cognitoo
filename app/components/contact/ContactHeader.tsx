import { Badge } from "../Badge";

export function ContactHeader() {
  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>Get In Touch</Badge>
          <div className="mt-6 mb-6">
            <h1 className="text-[2.5rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Let's Build Something Great
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-base text-gray-600 leading-relaxed">
              Have a project in mind? Let's discuss how we can help you achieve your goals. 
              Our team is ready to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 