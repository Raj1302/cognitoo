export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Enhanced grid pattern - reduced opacity */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Gradient orbs with reduced blur */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-purple-500/[0.02] rounded-full blur-2xl" />
        <div className="absolute inset-10 bg-purple-400/[0.02] rounded-full blur-xl" />
        <div className="absolute inset-20 bg-purple-300/[0.02] rounded-full blur-lg" />
      </div>

      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-purple-500/[0.02] rounded-full blur-2xl" />
        <div className="absolute inset-10 bg-purple-400/[0.02] rounded-full blur-xl" />
        <div className="absolute inset-20 bg-purple-300/[0.02] rounded-full blur-lg" />
      </div>
    </div>
  );
} 