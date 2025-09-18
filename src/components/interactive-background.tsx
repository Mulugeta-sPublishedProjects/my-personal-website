"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface InteractiveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const InteractiveBackground = ({
  children,
  className = "",
}: InteractiveBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to various effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.6, 0.3],
  );

  const gradientRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const particleSpeed = useTransform(scrollYProgress, [0, 1], [1, 3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      {/* Mouse-responsive gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            hsl(var(--primary) / 0.1) 0%, 
            transparent 50%)`,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Rotating gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-chart-3/5 via-transparent to-chart-5/5"
        style={{
          rotate: gradientRotation,
          opacity: 0.2,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-chart-3/20 to-chart-5/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0.8]),
        }}
      />

      {/* Dynamic particles based on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: particleSpeed,
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 8}%`,
              top: `${30 + i * 6}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Parallax scroll component
interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const ParallaxElement = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const directionMap = {
    up: [0, -100 * speed],
    down: [0, 100 * speed],
    left: [0, -100 * speed],
    right: [0, 100 * speed],
  };

  const y = useTransform(scrollYProgress, [0, 1], directionMap[direction]);
  const x = direction === "left" || direction === "right" ? y : 0;
  const yTransform = direction === "up" || direction === "down" ? y : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x,
        y: yTransform,
      }}
    >
      {children}
    </motion.div>
  );
};
