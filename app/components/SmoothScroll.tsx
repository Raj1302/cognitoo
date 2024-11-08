"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Don't initialize Lenis on mobile devices
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 0.8, 
      easing: (t) => 1 - Math.pow(1 - t, 5), // Using a simpler easing function
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, 
      touchMultiplier: 1.5, 
    });

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    // Start the animation frame
    rafId = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
} 