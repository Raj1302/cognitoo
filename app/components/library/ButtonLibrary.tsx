"use client";
import { useState } from "react";
import { Toast } from "../ui/Toast";

type ButtonVariant = {
  name: string;
  className: string;
  icon?: React.ReactNode;
  description: string;
  code: string;
}

const buttonVariants: ButtonVariant[] = [
  {
    name: "Primary",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-gradient-to-br from-purple-600 to-purple-700 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(124,58,237,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(124,58,237,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-purple-500/20
      backdrop-blur-sm
    `,
    description: "Primary call-to-action button with enhanced depth and interaction",
    code: `<button className="px-8 py-3.5 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white font-medium shadow-[0_2px_20px_-3px_rgba(124,58,237,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm">
  Button Text
</button>`
  },
  {
    name: "Secondary",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-white 
      text-gray-900 font-medium 
      border border-gray-200 
      shadow-sm 
      hover:border-purple-200 hover:bg-purple-50/50 
      hover:text-purple-600 hover:shadow-md 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      backdrop-blur-sm
    `,
    description: "Secondary action button with subtle hover effects",
    code: `<button className="px-8 py-3.5 rounded-xl bg-white text-gray-900 font-medium border border-gray-200 shadow-sm hover:border-purple-200 hover:bg-purple-50/50 hover:text-purple-600 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-sm">
  Button Text
</button>`
  },
  {
    name: "Icon Primary",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-gradient-to-br from-purple-600 to-purple-700 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(124,58,237,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(124,58,237,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-purple-500/20
      backdrop-blur-sm
      inline-flex items-center gap-2
      group/button
    `,
    icon: (
      <svg 
        className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
    description: "Primary button with animated icon",
    code: `<button className="px-8 py-3.5 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white font-medium shadow-[0_2px_20px_-3px_rgba(124,58,237,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm inline-flex items-center gap-2 group/button">
  Button Text
  <svg className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>`
  },
  {
    name: "Gradient",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 
      hover:bg-[length:200%_200%] hover:animate-gradient 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(168,85,247,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(168,85,247,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-purple-500/20
      backdrop-blur-sm
    `,
    description: "Animated gradient background with hover effect",
    code: `<button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:bg-[length:200%_200%] hover:animate-gradient text-white font-medium shadow-[0_2px_20px_-3px_rgba(168,85,247,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm">
  Button Text
</button>`
  },
  {
    name: "Outline",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-white 
      text-purple-600 font-medium 
      border-2 border-purple-600 
      hover:bg-purple-50 
      hover:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
    `,
    description: "Outline style button with hover effect",
    code: `<button className="px-8 py-3.5 rounded-xl bg-white text-purple-600 font-medium border-2 border-purple-600 hover:bg-purple-50 hover:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
  Button Text
</button>`
  },
  {
    name: "Small",
    className: `
      px-4 py-2 rounded-lg 
      bg-gradient-to-br from-purple-600 to-purple-700 
      text-white text-sm font-medium 
      shadow-[0_2px_15px_-3px_rgba(124,58,237,0.2)] 
      hover:shadow-[0_5px_25px_-3px_rgba(124,58,237,0.4)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-purple-500/20
    `,
    description: "Compact button with gradient background",
    code: `<button className="px-4 py-2 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white text-sm font-medium shadow-[0_2px_15px_-3px_rgba(124,58,237,0.2)] hover:shadow-[0_5px_25px_-3px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-purple-500/20">
  Button Text
</button>`
  },
  {
    name: "Glassmorphic",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-white/10 backdrop-blur-sm 
      border border-white/20 
      text-gray-900 font-medium 
      shadow-[0_2px_20px_-3px_rgba(0,0,0,0.1)] 
      hover:shadow-[0_5px_30px_-3px_rgba(0,0,0,0.15)] 
      hover:bg-white/20 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
    `,
    description: "Modern glassmorphic effect button",
    code: `<button className="px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 font-medium shadow-[0_2px_20px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_30px_-3px_rgba(0,0,0,0.15)] hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
  Button Text
</button>`
  },
  {
    name: "Glow Effect",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-purple-600 
      text-white font-medium 
      shadow-[0_0_15px_-3px_rgba(124,58,237,0.4)] 
      hover:shadow-[0_0_25px_-3px_rgba(124,58,237,0.6)] 
      hover:bg-purple-500 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      relative overflow-hidden
      after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent 
      after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
    `,
    description: "Button with glow and shine effect",
    code: `<button className="px-8 py-3.5 rounded-xl bg-purple-600 text-white font-medium shadow-[0_0_15px_-3px_rgba(124,58,237,0.4)] hover:shadow-[0_0_25px_-3px_rgba(124,58,237,0.6)] hover:bg-purple-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000">
  Button Text
</button>`
  },
  {
    name: "Loading State",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-gradient-to-br from-purple-600 to-purple-700 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(124,58,237,0.3)] 
      inline-flex items-center gap-2
      cursor-not-allowed
      opacity-80
    `,
    icon: (
      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    ),
    description: "Loading state with spinner animation",
    code: `<button className="px-8 py-3.5 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white font-medium shadow-[0_2px_20px_-3px_rgba(124,58,237,0.3)] inline-flex items-center gap-2 cursor-not-allowed opacity-80">
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`
  },
  {
    name: "Pill Button",
    className: `
      px-8 py-2.5 rounded-full 
      bg-gradient-to-br from-purple-600 to-purple-700 
      text-white text-sm font-medium 
      shadow-[0_2px_15px_-3px_rgba(124,58,237,0.3)] 
      hover:shadow-[0_5px_25px_-3px_rgba(124,58,237,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-purple-500/20
    `,
    description: "Rounded pill-style button with gradient",
    code: `<button className="px-8 py-2.5 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 text-white text-sm font-medium shadow-[0_2px_15px_-3px_rgba(124,58,237,0.3)] hover:shadow-[0_5px_25px_-3px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-purple-500/20">
  Button Text
</button>`
  },
  {
    name: "3D Effect",
    className: `
      px-8 py-3.5 rounded-xl 
      bg-gradient-to-b from-purple-500 to-purple-600
      text-white font-medium 
      transform hover:-translate-y-1 active:translate-y-0.5
      shadow-[0_6px_0_rgb(126,34,206),0_10px_20px_-3px_rgba(124,58,237,0.3)] 
      active:shadow-[0_2px_0_rgb(126,34,206),0_3px_10px_-3px_rgba(124,58,237,0.3)]
      transition-all duration-150
      border border-purple-400
      hover:border-purple-500
      active:border-purple-600
      hover:bg-gradient-to-b hover:from-purple-400 hover:to-purple-500
      active:bg-gradient-to-b active:from-purple-600 active:to-purple-700
      relative
      after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]
    `,
    description: "Button with enhanced 3D press effect and lighting",
    code: `<button className="px-8 py-3.5 rounded-xl bg-gradient-to-b from-purple-500 to-purple-600 text-white font-medium transform hover:-translate-y-1 active:translate-y-0.5 shadow-[0_6px_0_rgb(126,34,206),0_10px_20px_-3px_rgba(124,58,237,0.3)] active:shadow-[0_2px_0_rgb(126,34,206),0_3px_10px_-3px_rgba(124,58,237,0.3)] transition-all duration-150 border border-purple-400 hover:border-purple-500 active:border-purple-600 hover:bg-gradient-to-b hover:from-purple-400 hover:to-purple-500 active:bg-gradient-to-b active:from-purple-600 active:to-purple-700 relative after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]">
  Button Text
</button>`
  }
];

export function ButtonLibrary() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = async (code: string, name: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(name);
      setShowToast(true);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {buttonVariants.map((variant) => (
          <div key={variant.name} className="group/card">
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 transition-all duration-500">
              <div className="relative bg-white rounded-2xl p-8">
                {/* Content Container */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="text-purple-600 p-3 bg-purple-500/5 rounded-xl shrink-0 shadow-sm shadow-purple-500/5 group-hover/card:shadow-purple-500/10 transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1.5 group-hover/card:text-purple-600 transition-colors">
                        {variant.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {variant.description}
                      </p>
                    </div>
                  </div>

                  {/* Button Preview */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50/80 via-white to-blue-50/80 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center p-10 rounded-xl border border-gray-100 bg-[linear-gradient(110deg,#fff,#fff/80,#fff)] group-hover/card:border-purple-100/60 transition-colors">
                      {/* Grid Background */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-[0.015]" 
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgb(124, 58, 237, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(124, 58, 237, 0.03) 1px, transparent 1px)
                          `,
                          backgroundSize: '24px 24px'
                        }}
                      />
                      {/* Button */}
                      <div className="relative z-10 transform group-hover/card:scale-[1.02] transition-transform duration-500">
                        <button className={variant.className}>
                          {variant.name === "Loading State" ? "Loading..." : "Button Text"}
                          {variant.icon}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button 
                    onClick={() => copyToClipboard(variant.code, variant.name)}
                    className={`
                      w-full
                      inline-flex items-center justify-center gap-2 
                      px-3 py-2.5
                      text-xs font-medium 
                      rounded-lg
                      transition-all duration-300
                      ${copiedId === variant.name 
                        ? 'bg-green-50 text-green-600 border border-green-200' 
                        : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-100'
                      }
                    `}
                  >
                    {copiedId === variant.name ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* More Coming Soon Card */}
        <div className="group/card">
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20">
            <div className="relative bg-white rounded-2xl p-8 h-full">
              <div className="relative flex flex-col items-center justify-center text-center h-full">
                <div className="text-purple-600 p-4 bg-purple-500/5 rounded-xl mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  More Buttons Coming Soon
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  We're working on adding more beautiful button designs. Stay tuned for updates!
                </p>

                {/* Animated Dots */}
                <div className="flex items-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast 
          message="Copied to clipboard!" 
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
} 