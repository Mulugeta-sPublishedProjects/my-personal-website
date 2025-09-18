"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface ParticleSystemProps {
  particleCount?: number;
  mouseInteraction?: boolean;
  className?: string;
}

export const ParticleSystem = ({
  particleCount = 50,
  mouseInteraction = true,
  className = "",
}: ParticleSystemProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ];

  // Initialize particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x:
          Math.random() *
          (containerRef.current?.clientWidth || window.innerWidth),
        y:
          Math.random() *
          (containerRef.current?.clientHeight || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, [particleCount]);

  // Mouse interaction
  useEffect(() => {
    if (!mouseInteraction) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseInteraction]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Mouse interaction
          if (mouseInteraction) {
            const dx = mousePosition.x - particle.x;
            const dy = mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = Math.max(0, 100 - distance) / 100;

            newVx += (dx / distance) * force * 0.01;
            newVy += (dy / distance) * force * 0.01;
          }

          // Boundary collision
          const containerWidth =
            containerRef.current?.clientWidth || window.innerWidth;
          const containerHeight =
            containerRef.current?.clientHeight || window.innerHeight;

          if (newX < 0 || newX > containerWidth) {
            newVx *= -0.8;
            newX = Math.max(0, Math.min(containerWidth, newX));
          }
          if (newY < 0 || newY > containerHeight) {
            newVy *= -0.8;
            newY = Math.max(0, Math.min(containerHeight, newY));
          }

          // Damping
          newVx *= 0.99;
          newVy *= 0.99;

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, mouseInteraction]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [
              particle.opacity,
              particle.opacity * 1.5,
              particle.opacity,
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating geometric shapes component
export const FloatingShapes = () => {
  const shapes = [
    { id: 1, size: 80, color: "hsl(var(--primary) / 0.1)", delay: 0 },
    { id: 2, size: 120, color: "hsl(var(--chart-2) / 0.1)", delay: 1 },
    { id: 3, size: 60, color: "hsl(var(--chart-3) / 0.1)", delay: 2 },
    { id: 4, size: 100, color: "hsl(var(--chart-4) / 0.1)", delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};
