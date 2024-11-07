export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-10 h-10">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="w-10 h-10 border-4 border-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="w-10 h-10 border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
} 