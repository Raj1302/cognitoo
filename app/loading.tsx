import Background from "./components/Background";
import Navbar from "./components/Navbar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 gap-8">
          {/* Enterprise Card Skeleton */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="card-blur p-8 animate-pulse">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl shrink-0">
                    <div className="w-8 h-8 bg-gray-200 rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="w-3/4 h-7 bg-gray-200 rounded mb-3" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Avatar Group */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                      ))}
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4" />
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="w-32 h-4 bg-gray-200 rounded" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-24 h-7 bg-gray-200 rounded-full" />
                    ))}
                  </div>
                </div>

                {/* Learn More */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-20 h-4 bg-gray-200 rounded" />
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Community Card Skeleton */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="card-blur p-8 animate-pulse">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl shrink-0">
                    <div className="w-8 h-8 bg-gray-200 rounded" />
                  </div>
                  <div className="flex-1">
                    <div className="w-3/4 h-7 bg-gray-200 rounded mb-3" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Avatar Group */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                      ))}
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4" />
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="w-32 h-4 bg-gray-200 rounded" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-24 h-7 bg-gray-200 rounded-full" />
                    ))}
                  </div>
                </div>

                {/* Learn More */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-20 h-4 bg-gray-200 rounded" />
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 