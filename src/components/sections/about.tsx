"use client";

import { motion, useInView } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";
import { useRef } from "react";
import type { Transition } from "framer-motion";

// Shared animation configs
const textMotion = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.6,
    ease: "easeOut" as const,
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  } satisfies {
    duration: number;
    ease: "easeOut";
    type: "spring";
    stiffness: number;
    damping: number;
  } as Transition,
};

const imageMotion = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.6,
    delay: 0.2,
    ease: "easeOut" as const,
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  } satisfies {
    duration: number;
    delay: number;
    ease: "easeOut";
    type: "spring";
    stiffness: number;
    damping: number;
  } as Transition,
};

export const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 lg:py-24 xl:py-32"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            {...textMotion}
            animate={isInView ? textMotion.animate : {}}
            className="space-y-6 lg:space-y-8"
          >
            <h2
              id="about-heading"
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground"
            >
              About Me
            </h2>

            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg lg:text-xl leading-relaxed lg:leading-loose">
                I’m{" "}
                <span className="font-semibold text-foreground">
                  Mulugeta Adamu
                </span>
                , a Senior Frontend Developer based in Addis Ababa, Ethiopia.
                With 3+ years of professional experience, I specialize in React,
                Next.js, and TypeScript — building scalable, user‑centric
                applications with clean code and modern UI design.
              </p>

              <p className="text-lg lg:text-xl leading-relaxed lg:leading-loose">
                I’ve contributed to impactful projects like{" "}
                <span className="font-medium text-primary">WUMIS</span> (Water
                Utility Management System),{" "}
                <span className="font-medium text-primary">IFHCRS</span> (Food &
                Health Regulatory System), and government{" "}
                <span className="font-medium text-primary">eServices</span>. I’m
                passionate about maintainable architecture, responsive design,
                and delivering delightful user experiences across all devices.
              </p>

              <p className="text-lg lg:text-xl leading-relaxed lg:leading-loose">
                I hold a BSc in Information Systems (GPA 3.74/4.00) from Addis
                Ababa University and actively support Ethiopia’s growing tech
                ecosystem through knowledge sharing and open‑source
                contributions. My mission is to craft technology solutions that
                solve real‑world problems and create positive impact.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            {...imageMotion}
            animate={isInView ? imageMotion.animate : {}}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] mx-auto"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-3xl" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
              <OptimizedImage
                src="/about-img.png"
                alt="Mulugeta Adamu - Ethiopian Senior Frontend Developer specializing in React, Next.js, and TypeScript"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
