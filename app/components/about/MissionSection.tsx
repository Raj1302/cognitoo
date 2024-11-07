export function MissionSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-xl shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                OUR MISSION
              </span>
            </h2>
            <p className="text-gray-600 tracking-wide leading-relaxed mb-8">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and success. 
              We strive to be at the forefront of digital transformation, delivering excellence in every project we undertake.
            </p>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
} 