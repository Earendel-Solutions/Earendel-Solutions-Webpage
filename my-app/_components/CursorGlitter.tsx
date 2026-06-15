"use client";

import { useEffect } from "react";

export default function CursorTail() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const tailSegment = document.createElement("div");
      
      // Styling: Solid purple, glowing, and rounded
      tailSegment.className = "pointer-events-none fixed rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)] z-[9999]";
      
      // Set initial size (e.g., 10px by 10px)
      const size = 10;
      tailSegment.style.width = `${size}px`;
      tailSegment.style.height = `${size}px`;
      
      // Center the dot exactly on the tip of the cursor
      tailSegment.style.left = `${e.clientX - size / 2}px`;
      tailSegment.style.top = `${e.clientY - size / 2}px`;
      
      // Linear transition makes the tail look smooth rather than jerky
      tailSegment.style.transition = "transform 0.3s linear, opacity 0.3s linear";
      
      document.body.appendChild(tailSegment);
      
      // Trigger the shrink and fade immediately
      requestAnimationFrame(() => {
        tailSegment.style.transform = `scale(0)`;
        tailSegment.style.opacity = "0";
      });
      
      // Remove the element from the DOM after the animation completes (300ms)
      setTimeout(() => {
        tailSegment.remove();
      }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}