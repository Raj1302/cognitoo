import Background from "../components/Background";
import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Skeleton */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200 w-32 h-8" />
            </div>
            <div className="relative z-20">
              <div className="w-[600px] max-w-full h-14 bg-gray-200 rounded-2xl mx-auto mb-4" />
              <div className="w-[400px] max-w-full h-14 bg-gray-200 rounded-2xl mx-auto mb-4" />
              <div className="w-[500px] max-w-full h-6 bg-gray-200 rounded-2xl mx-auto" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card-blur p-6 animate-pulse">
                <div className="text-center">
                  <div className="w-16 h-10 bg-gray-200 rounded-lg mx-auto mb-2" />
                  <div className="w-24 h-4 bg-gray-200 rounded mx-auto" />
                </div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="card-blur p-12 mb-20 animate-pulse">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200 w-32 h-8" />
              </div>
              <div className="w-[400px] max-w-full h-12 bg-gray-200 rounded-2xl mx-auto mb-8" />
              <div className="space-y-4">
                <div className="w-full h-5 bg-gray-200 rounded" />
                <div className="w-5/6 h-5 bg-gray-200 rounded mx-auto" />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200 w-32 h-8" />
              </div>
              <div className="w-[400px] max-w-full h-12 bg-gray-200 rounded-2xl mx-auto mb-6" />
              <div className="w-[500px] max-w-full h-6 bg-gray-200 rounded-2xl mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card-blur p-8 animate-pulse">
                  <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6" />
                  <div className="w-32 h-7 bg-gray-200 rounded mb-3" />
                  <div className="w-full h-16 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 