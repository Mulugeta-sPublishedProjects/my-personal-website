"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CursorProps {
  isHovering?: boolean;
  children?: React.ReactNode;
}

export const InteractiveCursor = ({
  isHovering = false,
  children,
}: CursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 pointer-events-none z-[1300] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/10 pointer-events-none z-[1290]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{
          opacity: isVisible ? 0.6 : 0,
        }}
      />

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-chart-2/5 pointer-events-none z-[1280]"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isHovering ? 1.2 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
        style={{
          opacity: isVisible ? 0.3 : 0,
        }}
      />

      {children}
    </>
  );
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  return <InteractiveCursor>{children}</InteractiveCursor>;
};
