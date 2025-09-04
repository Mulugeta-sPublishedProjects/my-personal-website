"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Code, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || isMobile) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setTilt({
        x: (e.clientY - centerY) / 40,
        y: (centerX - e.clientX) / 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background
                 px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* Subtle animated background blobs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column - text */}
        <div className="space-y-6 text-center lg:text-left">
          <Badge className="px-3 py-1 text-sm rounded-full">
            👋 Available for opportunities
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Mulugeta Adamu
          </h1>
          <h2 className="text-lg md:text-2xl text-muted-foreground font-medium">
            Senior Frontend Developer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            I build{" "}
            <span className="font-semibold text-foreground">
              world-class web & mobile experiences
            </span>{" "}
            using React, Next.js, and TypeScript. On the backend, I design{" "}
            <span className="font-semibold text-foreground">scalable APIs</span>{" "}
            with NestJS & PostgreSQL.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <Button size="lg" asChild>
              <a href="#projects" className="flex items-center gap-2">
                <Code className="h-5 w-5" /> View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Contact Me
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" /> Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Right column - profile */}
        <motion.div
          className="relative flex justify-center"
          style={
            !isMobile
              ? {
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }
              : {}
          }
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border shadow-2xl">
            <Image
              src="/about-img.png"
              alt="Mulugeta Adamu"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
            {/* Floating sparkle */}
            <motion.div
              className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
              animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-primary" />
        <span className="text-sm text-muted-foreground uppercase tracking-wider">
          Discover
        </span>
      </motion.button>
    </section>
  );
}
