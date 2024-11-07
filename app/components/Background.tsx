export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Enhanced grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Gradient orbs with multiple layers */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-purple-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute inset-10 bg-purple-400/[0.04] rounded-full blur-2xl" />
        <div className="absolute inset-20 bg-purple-300/[0.05] rounded-full blur-xl" />
      </div>

      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-purple-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute inset-10 bg-purple-400/[0.04] rounded-full blur-2xl" />
        <div className="absolute inset-20 bg-purple-300/[0.05] rounded-full blur-xl" />
      </div>

      {/* Additional subtle orbs */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px]">
        <div className="absolute inset-0 bg-purple-300/[0.03] rounded-full blur-2xl" />
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px]">
        <div className="absolute inset-0 bg-purple-300/[0.03] rounded-full blur-2xl" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-50/20" />
    </div>
  );
} 