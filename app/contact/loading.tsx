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

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-8 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Skeleton */}
            <div className="card-blur p-8 animate-pulse">
              <div className="mb-8">
                <div className="inline-block mb-6">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200 w-32 h-8" />
                </div>
                <div className="w-48 h-8 bg-gray-200 rounded-2xl mt-4" />
              </div>
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/5 rounded-xl shrink-0">
                      <div className="w-6 h-6 bg-gray-200 rounded" />
                    </div>
                    <div>
                      <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
                      <div className="w-40 h-6 bg-gray-200 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Skeleton */}
            <div className="card-blur p-8 animate-pulse">
              <div className="mb-8">
                <div className="inline-block mb-6">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200 w-32 h-8" />
                </div>
                <div className="w-48 h-8 bg-gray-200 rounded-2xl mt-4" />
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <div key={i}>
                      <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
                      <div className="w-full h-12 bg-gray-200 rounded-xl" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="w-16 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-12 bg-gray-200 rounded-xl" />
                </div>
                <div>
                  <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-40 bg-gray-200 rounded-xl" />
                </div>
                <div className="w-full h-14 bg-gray-200 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}