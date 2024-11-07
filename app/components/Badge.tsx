type BadgeProps = {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-200 bg-purple-50/50 backdrop-blur-xl shadow-sm ${className}`}>
      <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
      <span className="text-[11px] font-medium text-purple-900 tracking-wider uppercase">
        {children}
      </span>
      <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
    </div>
  );
} 