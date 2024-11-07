import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { ProcessSkeleton } from "../components/solutions/ProcessSkeleton";

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
              <div className="w-32 h-8 bg-gray-200 rounded-xl" />
            </div>
            <div className="w-96 max-w-full h-12 bg-gray-200 rounded-xl mx-auto mb-6" />
            <div className="w-72 max-w-full h-6 bg-gray-200 rounded-xl mx-auto" />
          </div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="text-center p-4 rounded-xl border border-gray-200/80 bg-white/60 backdrop-blur-sm animate-pulse"
              >
                <div className="w-12 h-8 bg-gray-200 rounded mx-auto mb-2" />
                <div className="w-20 h-4 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>

          {/* Solutions Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-6 rounded-xl shadow-lg animate-pulse"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <div className="w-48 h-6 bg-gray-200 rounded mb-2" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="w-32 h-4 bg-gray-200 rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process Section Skeleton */}
          <ProcessSkeleton />
        </div>
      </div>
    </div>
  );
} 