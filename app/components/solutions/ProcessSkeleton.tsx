export function ProcessSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div 
          key={i}
          className="backdrop-blur-xl bg-white/80 border border-gray-200/80 p-6 rounded-xl shadow-lg animate-pulse"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded" />
                <div className="w-24 h-6 bg-gray-200 rounded" />
              </div>
              <div className="w-full h-4 bg-gray-200 rounded mt-2" />
              <div className="w-3/4 h-4 bg-gray-200 rounded mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 