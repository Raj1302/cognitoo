type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`text-purple-600 ${className}`}>
      {children}
    </span>
  );
} 