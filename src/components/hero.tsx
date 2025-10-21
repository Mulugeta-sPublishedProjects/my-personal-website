"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import { useCallback, useRef } from "react";

export const Hero = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = useCallback((sectionId: string) => {
    // Initialize the ref if not already done
    if (!sectionRefs.current[sectionId]) {
      const element = document.querySelector(sectionId);
      sectionRefs.current[sectionId] = element as HTMLElement | null;
    }

    const section = sectionRefs.current[sectionId];
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleDownloadResume = useCallback(() => {
    // Using window.open for better cross-browser compatibility
    window.open("/cv.pdf", "_blank");
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20"
      aria-label="Introduction section"
      tabIndex={-1}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 px-4 focusable-section">
            {/* Intro */}
            <p className="text-primary font-mono text-sm mb-3 md:mb-4">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Mulugeta Adamu
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-muted-foreground mb-6 md:mb-8">
              Experienced Frontend Developer specializing in React,
              Next.js,React Native and TypeScript
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build scalable web and Mobile applications that solve real
              problems and create meaningful impact. With 3+ years of
              experience, I specialize in crafting intuitive user interfaces and
              maintainable frontend architectures.
            </p>

            {/* Call-to-actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="text-base px-6 sm:px-8 py-5 sm:py-6 font-semibold group"
                aria-label="View portfolio projects"
              >
                View My Work
                <span className="ml-2">
                  <ArrowDown className="h-4 w-4" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="text-base px-6 sm:px-8 py-5 sm:py-6 font-semibold border-2"
                aria-label="Download resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2 px-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md">
              {/* Main image container */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-xl">
                  <OptimizedImage
                    src="/hero.avif"
                    alt="Mulugeta Adamu - Experienced Frontend Developer"
                    lcp
                    preload
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
