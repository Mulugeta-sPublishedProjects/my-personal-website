"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";

const scrollToProjects = () => {
  const projectsSection = document.querySelector("#projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf";
  link.download = "Mulugeta_Adamu_Resume.pdf";
  link.click();
};

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0"
      aria-label="Hero section with introduction"
    >
      {/* Background Animation - Reduced bubbles on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from(
          {
            length:
              typeof window !== "undefined" && window.innerWidth < 768
                ? 12
                : 20,
          },
          (_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-primary/5"
              style={{
                width:
                  Math.random() *
                    (typeof window !== "undefined" && window.innerWidth < 768
                      ? 100
                      : 300) +
                  50,
                height:
                  Math.random() *
                    (typeof window !== "undefined" && window.innerWidth < 768
                      ? 100
                      : 300) +
                  50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              role="presentation"
              aria-hidden="true"
            />
          )
        )}
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <motion.p
              className="text-primary font-mono text-sm sm:text-base mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-balance leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              Mulugeta Adamu
            </motion.h1>

            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mb-4 sm:mb-6 text-balance leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              Building Scalable, User-Centric Web & Mobile Experiences
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              Senior Frontend Developer with 3+ years of experience in React,
              Next.js, and TypeScript. I specialize in creating responsive,
              accessible, and high-performance web applications that deliver
              exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={buttonTransition}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
                aria-label="View portfolio projects"
              >
                View My Work
                <ArrowDown
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="group bg-transparent hover:bg-accent/10 text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
                aria-label="Download professional resume"
              >
                <Download
                  aria-hidden="true"
                  className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform"
                />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-xs xs:max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl sm:blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <OptimizedImage
                  src="/hero.webp"
                  alt="Mulugeta Adamu - Senior Frontend Developer specializing in React, Next.js, and TypeScript for scalable web applications"
                  priority
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer touch-manipulation hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        aria-label="Scroll to next section"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1 sm:p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
