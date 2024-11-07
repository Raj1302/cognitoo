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
              <div className="w-32 h-8 bg-gray-200 rounded-xl" />
            </div>
            <div className="w-96 max-w-full h-12 bg-gray-200 rounded-xl mx-auto mb-6" />
            <div className="w-72 max-w-full h-6 bg-gray-200 rounded-xl mx-auto" />
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Skeleton */}
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-xl shadow-lg animate-pulse">
                <div className="w-48 h-6 bg-gray-200 rounded mb-6" />
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
                      <div className="flex-1">
                        <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
                        <div className="w-32 h-5 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Skeleton */}
            <div className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-8 rounded-xl shadow-lg animate-pulse">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
                    <div className="w-full h-10 bg-gray-200 rounded" />
                  </div>
                  <div>
                    <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
                    <div className="w-full h-10 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <div className="w-16 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-10 bg-gray-200 rounded" />
                </div>

                {/* Service Field */}
                <div>
                  <div className="w-28 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-10 bg-gray-200 rounded" />
                </div>

                {/* Message Field */}
                <div>
                  <div className="w-20 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-32 bg-gray-200 rounded" />
                </div>

                {/* Submit Button */}
                <div className="w-full h-12 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[240px] sm:w-[280px]">
        <div className="relative backdrop-blur-xl bg-white/60 rounded-full border border-gray-200 px-3 sm:px-5 py-2 sm:py-2.5 shadow-lg">
          <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </footer>
    </div>
  );
} 