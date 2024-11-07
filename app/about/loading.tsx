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
          <div className="text-center mb-16 animate-pulse">
            <div className="inline-flex mx-auto mb-6">
              <div className="w-32 h-8 bg-gray-200 rounded-full" />
            </div>
            <div className="w-96 max-w-full h-12 bg-gray-200 rounded-2xl mx-auto mb-6" />
            <div className="w-72 max-w-full h-6 bg-gray-200 rounded-2xl mx-auto" />
          </div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-200/80 bg-white/60 backdrop-blur-sm animate-pulse"
              >
                <div className="w-12 h-8 bg-gray-200 rounded mx-auto mb-2" />
                <div className="w-20 h-4 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>

          {/* Features Pills Skeleton */}
          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="w-32 h-8 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Mission Section Skeleton */}
          <div className="py-20">
            <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-12 rounded-2xl shadow-lg animate-pulse">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-32 h-8 bg-gray-200 rounded-full mx-auto mb-6" />
                <div className="w-96 max-w-full h-10 bg-gray-200 rounded-2xl mx-auto mb-6" />
                <div className="space-y-4">
                  <div className="w-full h-4 bg-gray-200 rounded-full" />
                  <div className="w-5/6 h-4 bg-gray-200 rounded-full mx-auto" />
                  <div className="w-4/6 h-4 bg-gray-200 rounded-full mx-auto" />
                </div>

                {/* Mission Points Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200/80">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <div className="w-32 h-6 bg-gray-200 rounded mx-auto mb-3" />
                      <div className="w-48 h-4 bg-gray-200 rounded mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Section Skeleton */}
          <div className="py-20">
            <div className="text-center mb-16">
              <div className="w-32 h-8 bg-gray-200 rounded-full mx-auto mb-6" />
              <div className="w-96 max-w-full h-10 bg-gray-200 rounded-2xl mx-auto mb-6" />
              <div className="w-2/3 h-4 bg-gray-200 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-2xl shadow-lg animate-pulse"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-xl mb-6" />
                  <div className="w-32 h-6 bg-gray-200 rounded mb-3" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 