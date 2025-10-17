"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";
import { useCallback } from "react";

export const Hero = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleDownloadResume = useCallback(() => {
    // Using window.open for better cross-browser compatibility
    window.open("/cv.pdf", "_blank");
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-16"
      aria-label="Introduction section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Intro */}
            <motion.p
              className="text-primary font-mono text-sm mb-3 md:mb-4"
              variants={itemVariants}
            >
              Hi, I’m
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Mulugeta Adamu
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground mb-6 md:mb-8"
              variants={itemVariants}
            >
              Experienced Frontend Developer specializing in React,
              Next.js,React Native and TypeScript
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I build scalable web and Mobile applications that solve real
              problems and create meaningful impact. With 3+ years of
              experience, I specialize in crafting intuitive user interfaces and
              maintainable frontend architectures.
            </motion.p>

            {/* Call-to-actions */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="text-base px-8 py-6 font-semibold group"
                aria-label="View portfolio projects"
              >
                View My Work
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="text-base px-8 py-6 font-semibold border-2"
                aria-label="Download resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={imageVariants}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main image container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <OptimizedImage
                  src="/hero.webp"
                  alt="Mulugeta Adamu - Experienced Frontend Developer"
                  priority
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
