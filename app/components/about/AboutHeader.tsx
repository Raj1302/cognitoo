import { Badge } from "../Badge";

type StatProps = {
  number: string;
  label: string;
  color: "blue" | "purple";
}

function Stat({ number, label, color }: StatProps) {
  return (
    <div className="text-center p-4 rounded-xl border border-gray-200/80 bg-white/60 backdrop-blur-sm">
      <div className={`text-2xl font-bold text-${color}-600 mb-1`}>{number}</div>
      <div className="text-[11px] font-medium text-gray-600 uppercase">
        {label}
      </div>
    </div>
  );
}

export function AboutHeader() {
  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>About Us</Badge>
          <div className="mt-6 mb-6">
            <h1 className="text-[2.5rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Crafting Digital Excellence
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-base text-gray-600 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating innovative solutions 
              that drive business success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Stat number="5+" label="Years Experience" color="blue" />
          <Stat number="100+" label="Projects Delivered" color="purple" />
          <Stat number="50+" label="Happy Clients" color="blue" />
          <Stat number="24/7" label="Support" color="purple" />
        </div>
      </div>
    </div>
  );
} 