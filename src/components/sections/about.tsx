"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold  bg-clip-text text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m{" "}
              <span className="font-semibold text-foreground">
                Mulugeta Adamu
              </span>
              , an Experienced Frontend Developer based in Addis Ababa,
              Ethiopia. With 3+ years of professional experience, I specialize
              in React, Next.js, and TypeScript — building scalable,
              user‑centric applications with clean code and modern UI design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;ve contributed to impactful projects like{" "}
              <span className="font-medium text-primary">WUMIS</span> (Water
              Utility Management System),{" "}
              <span className="font-medium text-primary">IFHCRS</span> (Food &
              Health Regulatory System), and government{" "}
              <span className="font-medium text-primary">eServices</span>. My
              focus is on maintainable architecture, responsive design, and
              delivering delightful user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold a BSc in Information Systems (GPA 3.74/4.00) from Addis
              Ababa University and actively support Ethiopia’s growing tech
              ecosystem through knowledge sharing and open‑source contributions.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-3xl" />
            <Image
              src="/about-img.png"
              alt="Developer illustration"
              fill
              priority
              className="object-contain relative z-10 rounded-2xl shadow-lg shadow-primary/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
