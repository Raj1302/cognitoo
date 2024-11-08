"use client";
import { useState } from "react";
import confetti from 'canvas-confetti';
import { Toast } from "../ui/Toast";

type ButtonVariant = {
  name: string;
  className: string;
  icon?: React.ReactNode;
  description: string;
  code: string;
  packageScript?: string;
}

const buttonVariants: ButtonVariant[] = [
  {
    name: "Confetti Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-gradient-to-br from-pink-500 to-rose-500 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(244,114,182,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(244,114,182,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-pink-500/20
      backdrop-blur-sm
      inline-flex items-center gap-2
      group/button
      relative
      after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]
      hover:bg-gradient-to-br hover:from-pink-600 hover:to-rose-600
    `,
    icon: (
      <svg 
        className="w-4 h-4 transition-transform duration-300 group-hover/button:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    description: "Celebration button with confetti effect",
    code: `<button 
  onClick={() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB'],
      ticks: 200,
      gravity: 1.2,
      decay: 0.95,
      startVelocity: 30,
      shapes: ['star']
    });
  }}
  className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white font-medium shadow-[0_2px_20px_-3px_rgba(244,114,182,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(244,114,182,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-pink-500/20 backdrop-blur-sm inline-flex items-center gap-2 group/button relative after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px] hover:bg-gradient-to-br hover:from-pink-600 hover:to-rose-600"
>
  <svg className="w-4 h-4 transition-transform duration-300 group-hover/button:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
  Celebrate
</button>`,
    packageScript: "npm install canvas-confetti\nnpm i --save-dev @types/canvas-confetti"
  },
  {
    name: "Retro Button",
    className: `
      px-6 py-2.5 rounded-none 
      bg-yellow-400 
      text-black font-bold 
      border-4 border-black
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      hover:translate-x-[2px]
      hover:translate-y-[2px]
      active:shadow-none
      active:translate-x-[4px]
      active:translate-y-[4px]
      transition-all duration-150
      uppercase tracking-wider text-sm
      hover:bg-yellow-300
      active:bg-yellow-500
    `,
    description: "Retro-style pixel art button with press effect",
    code: `<button className="px-6 py-2.5 rounded-none bg-yellow-400 text-black font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 uppercase tracking-wider text-sm hover:bg-yellow-300 active:bg-yellow-500">
  Retro Button
</button>`
  },
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
  },
  {
    name: "Social Share",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-white 
      text-gray-700 font-medium 
      border border-gray-200 
      shadow-sm 
      hover:bg-gray-50 
      transition-all duration-300
      inline-flex items-center gap-2
      group/button
    `,
    icon: (
      <svg className="w-4 h-4 text-gray-500 group-hover/button:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
    description: "Social sharing button with icon",
    code: `<button className="px-6 py-2.5 rounded-xl bg-white text-gray-700 font-medium border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 group/button">
  <svg className="w-4 h-4 text-gray-500 group-hover/button:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
  </svg>
  Share
</button>`
  },
  {
    name: "Success Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-gradient-to-br from-emerald-500 to-emerald-600 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(16,185,129,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(16,185,129,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-emerald-500/20
      backdrop-blur-sm
      inline-flex items-center gap-2
      group/button
      relative
      after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]
    `,
    icon: (
      <svg 
        className="w-4 h-4 transition-transform duration-300 group-hover/button:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    description: "Success action button with animated checkmark",
    code: `<button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-medium shadow-[0_2px_20px_-3px_rgba(16,185,129,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-emerald-500/20 backdrop-blur-sm inline-flex items-center gap-2 group/button relative after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]">
  <svg className="w-4 h-4 transition-transform duration-300 group-hover/button:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
  Success
</button>`
  },
  {
    name: "Danger Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-gradient-to-br from-red-500 to-red-600 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(239,68,68,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(239,68,68,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-red-500/20
      backdrop-blur-sm
      inline-flex items-center gap-2
      group/button
      relative
      after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]
      hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700
    `,
    icon: (
      <svg 
        className="w-4 h-4 transition-transform duration-300 group-hover/button:rotate-12" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    description: "Danger/Delete action button with animated icon",
    code: `<button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white font-medium shadow-[0_2px_20px_-3px_rgba(239,68,68,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(239,68,68,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-red-500/20 backdrop-blur-sm inline-flex items-center gap-2 group/button relative after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px] hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700">
  <svg className="w-4 h-4 transition-transform duration-300 group-hover/button:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
  Delete
</button>`
  },
  {
    name: "Download Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-gradient-to-br from-blue-500 to-blue-600 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(59,130,246,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(59,130,246,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-blue-500/20
      backdrop-blur-sm
      inline-flex items-center gap-2
      group/button
      relative
      after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]
      hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700
    `,
    icon: (
      <svg 
        className="w-4 h-4 transition-all duration-300 group-hover/button:translate-y-0.5 group-hover/button:text-white/90" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    description: "Download button with animated icon and hover effect",
    code: `<button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium shadow-[0_2px_20px_-3px_rgba(59,130,246,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-blue-500/20 backdrop-blur-sm inline-flex items-center gap-2 group/button relative after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px] hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700">
  Download
  <svg className="w-4 h-4 transition-all duration-300 group-hover/button:translate-y-0.5 group-hover/button:text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
</button>`
  },
  {
    name: "Neon Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-black 
      text-white font-medium 
      border border-cyan-500
      shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] 
      hover:shadow-[0_0_30px_-3px_rgba(6,182,212,0.8)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      relative
      overflow-hidden
      group/button
      after:absolute after:inset-0 after:bg-cyan-500/10
      hover:border-cyan-400
      hover:text-cyan-300
    `,
    description: "Cyberpunk-style neon glowing button",
    code: `<button className="px-6 py-2.5 rounded-xl bg-black text-white font-medium border border-cyan-500 shadow-[0_0_20px_-3px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_-3px_rgba(6,182,212,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group/button after:absolute after:inset-0 after:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300">
  Neon Button
</button>`
  },
  {
    name: "Minimal Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-transparent 
      text-gray-800 font-medium 
      border border-gray-300
      hover:border-purple-500
      hover:text-purple-600
      transition-all duration-300
      relative
      group/button
      overflow-hidden
      before:absolute
      before:inset-x-0
      before:bottom-0
      before:h-[2px]
      before:bg-purple-600
      before:origin-left
      before:scale-x-0
      hover:before:scale-x-100
      before:transition-transform
      before:duration-300
      active:bg-purple-50
    `,
    description: "Clean minimal button with smooth underline animation",
    code: `<button className="px-6 py-2.5 rounded-xl bg-transparent text-gray-800 font-medium border border-gray-300 hover:border-purple-500 hover:text-purple-600 transition-all duration-300 relative group/button overflow-hidden before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-purple-600 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 active:bg-purple-50">
  Minimal Button
</button>`
  },
  {
    name: "Pay Now Button",
    className: `
      px-6 py-2.5 rounded-xl 
      bg-gradient-to-br from-indigo-500 to-indigo-600 
      text-white font-medium 
      shadow-[0_2px_20px_-3px_rgba(99,102,241,0.3)] 
      hover:shadow-[0_5px_30px_-3px_rgba(99,102,241,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      transition-all duration-300
      border border-indigo-500/20
      backdrop-blur-sm
      inline-flex items-center gap-2
      group/button
      relative
      after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px]
      hover:bg-gradient-to-br hover:from-indigo-600 hover:to-indigo-700
    `,
    icon: (
      <svg 
        className="w-4 h-4 transition-all duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          className="group-hover/button:animate-[creditCard_0.6s_ease-in-out]"
        />
      </svg>
    ),
    description: "Payment button with animated credit card icon",
    code: `<button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-medium shadow-[0_2px_20px_-3px_rgba(99,102,241,0.3)] hover:shadow-[0_5px_30px_-3px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-indigo-500/20 backdrop-blur-sm inline-flex items-center gap-2 group/button relative after:absolute after:inset-x-0 after:h-[1px] after:bg-white/20 after:top-[6px] hover:bg-gradient-to-br hover:from-indigo-600 hover:to-indigo-700">
  Pay Now
  <svg className="w-4 h-4 transition-all duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className="group-hover/button:animate-[creditCard_0.6s_ease-in-out]" />
  </svg>
</button>

/* Add this to your globals.css */
@keyframes creditCard {
  0% { transform: translateX(0) rotate(0); }
  20% { transform: translateX(-4px) rotate(-6deg); }
  40% { transform: translateX(4px) rotate(6deg); }
  60% { transform: translateX(-2px) rotate(-3deg); }
  80% { transform: translateX(2px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0); }
}`
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <button 
                          className={variant.className}
                          onClick={() => {
                            if (variant.name === "Confetti Button") {
                              confetti({
                                particleCount: 100,
                                spread: 70,
                                origin: { y: 0.8 },
                                colors: ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB'],
                                ticks: 200,
                                gravity: 1.2,
                                decay: 0.95,
                                startVelocity: 30,
                                shapes: ['star']
                              });
                            }
                          }}
                        >
                          {(() => {
                            switch(variant.name) {
                              case "Confetti Button":
                                return "Celebrate Win! 🎉";
                              case "Primary":
                                return "Get Started";
                              case "Secondary":
                                return "Learn More";
                              case "Icon Primary":
                                return "Continue";
                              case "Success Button":
                                return "Confirm Order";
                              case "Danger Button":
                                return "Delete Item";
                              case "Download Button":
                                return "Download Now";
                              case "Minimal Button":
                                return "View Details";
                              case "Loading State":
                                return "Loading...";
                              case "Pay Now Button":
                                return "Pay Now";
                              default:
                                return "Button Text";
                            }
                          })()}
                          {variant.icon}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Package Installation - Only show for Confetti Button */}
                  {variant.packageScript && (
                    <div className="relative mb-6">
                      <div className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                        Required Package
                      </div>
                      <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 text-sm overflow-x-auto">
                          <code>{variant.packageScript}</code>
                        </pre>
                        <button 
                          onClick={() => {
                            if (variant.packageScript) {
                              copyToClipboard(variant.packageScript, `${variant.name}-package`)
                            }
                          }}
                          className={`
                            absolute top-2 right-2 p-2 
                            text-gray-400 hover:text-white 
                            transition-colors rounded-lg
                            ${copiedId === `${variant.name}-package` ? 'bg-green-500/10 text-green-400' : 'hover:bg-white/10'}
                          `}
                          title="Copy package script"
                        >
                          {copiedId === `${variant.name}-package` ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

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
              <div className="relative flex flex-col items-center justify-center text-center h-full min-h-[400px]">
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