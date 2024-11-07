import Background from "./components/Background";
import Navbar from "./components/Navbar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Background />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4">
          {/* Enterprise Card Skeleton */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="relative backdrop-blur-xl bg-white/80 border border-gray-200/80 p-6 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <div className="w-48 h-6 bg-gray-200 rounded mb-2" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200" />
                      ))}
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-24 h-4 bg-gray-200 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Community Card Skeleton */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
            <div className="w-full max-w-sm">
              <div className="relative backdrop-blur-xl bg-white/80 border border-gray-200/80 p-6 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <div className="w-48 h-6 bg-gray-200 rounded mb-2" />
                    <div className="w-full h-4 bg-gray-200 rounded" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200" />
                      ))}
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-24 h-4 bg-gray-200 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[240px] sm:w-[280px]">
        <div className="relative backdrop-blur-xl bg-white/60 rounded-full border border-gray-200 px-3 sm:px-5 py-2 sm:py-2.5 shadow-lg">
          <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </footer>
    </div>
  );
} 