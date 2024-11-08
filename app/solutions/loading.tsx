import Background from "../components/Background";
import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Skeleton - Matches SolutionsHeader */}
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200 w-32 h-8" />
            </div>
            <div className="relative z-20">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <div className="w-[600px] max-w-full h-14 bg-gray-200 rounded-2xl mx-auto mb-4" />
                <div className="w-[400px] max-w-full h-14 bg-gray-200 rounded-2xl mx-auto" />
              </h1>
              <div className="w-[500px] max-w-full h-6 bg-gray-200 rounded-2xl mx-auto" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 mb-20 relative z-20">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card-blur p-6 animate-pulse">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">
                      <div className="w-16 h-10 bg-gray-200 rounded-lg mx-auto" />
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded mx-auto" />
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 relative z-20">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-8 bg-gray-200 rounded-full" />
              ))}
            </div>

            {/* Floating App Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
              {/* Web Development Icon */}
              <div className="absolute top-[10%] left-[5%]">
                <div className="w-16 h-16 rounded-[20px] bg-gray-200" />
              </div>

              {/* Mobile App Icon */}
              <div className="absolute top-[20%] right-[5%]">
                <div className="w-14 h-14 rounded-[18px] bg-gray-200" />
              </div>

              {/* Cloud Services Icon */}
              <div className="absolute bottom-[30%] left-[8%]">
                <div className="w-14 h-14 rounded-[18px] bg-gray-200" />
              </div>

              {/* Database Icon */}
              <div className="absolute top-[45%] right-[15%]">
                <div className="w-12 h-12 rounded-[16px] bg-gray-200" />
              </div>

              {/* Settings Icon */}
              <div className="absolute bottom-[25%] right-[12%]">
                <div className="w-14 h-14 rounded-[18px] bg-gray-200" />
              </div>

              {/* Security Icon */}
              <div className="absolute top-[30%] left-[15%]">
                <div className="w-14 h-14 rounded-[18px] bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card-blur p-8 animate-pulse">
                <div className="flex items-start gap-5 mb-8">
                  <div className="p-4 bg-gray-200 rounded-xl shrink-0">
                    <div className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="w-3/4 h-7 bg-gray-200 rounded mb-3" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-32 h-4 bg-gray-200 rounded" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="w-24 h-7 bg-gray-200 rounded-full" />
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div className="w-20 h-4 bg-gray-200 rounded" />
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 