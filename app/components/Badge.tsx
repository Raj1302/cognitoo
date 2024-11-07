type BadgeProps = {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200/80 bg-white/80 backdrop-blur-xl shadow-lg ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      <span className="text-[11px] font-medium text-gray-900">
        {children}
      </span>
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
    </div>
  );
} 