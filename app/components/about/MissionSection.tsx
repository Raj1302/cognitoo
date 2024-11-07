import { Badge } from "../Badge";

export function MissionSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-12 rounded-2xl shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <Badge>Our Mission</Badge>
            <h2 className="text-3xl font-bold mt-8 mb-8">
              <span className="text-purple-600">
                Empowering Digital Innovation
              </span>
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success in the digital age.
              </p>
              <p className="text-base leading-relaxed">
                We strive to be at the forefront of digital transformation, delivering excellence 
                in every project we undertake. Our commitment to innovation and quality ensures 
                that our clients stay ahead in today's competitive landscape.
              </p>
            </div>

            {/* Mission Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200/80">
              {[
                {
                  title: "Innovation",
                  description: "Pushing boundaries with cutting-edge solutions"
                },
                {
                  title: "Excellence",
                  description: "Delivering quality in every project"
                },
                {
                  title: "Growth",
                  description: "Driving business success through technology"
                }
              ].map((point) => (
                <div key={point.title} className="text-center group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 