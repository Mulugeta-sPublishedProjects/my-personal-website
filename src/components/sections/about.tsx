"use client";

import { motion, easeOut } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export const AboutMe = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            About Me
          </h2>
        </motion.div>

        {/* Two Columns Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch"
        >
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            className="flex flex-col justify-between space-y-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8"
            tabIndex={-1}
          >
            <div className="space-y-5 text-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                I'm Mulugeta Adamu, a Frontend Developer based in Addis Ababa
                with over 3 years of experience crafting scalable applications
                using React, Next.js, TypeScript, and React Native.
              </p>
              <p>
                My work includes building frontend solutions for platforms like
                WUMIS (serving 20+ cities), IFHCRS (Addis Ababa's health
                regulation system), and government eServices, emphasizing clean
                architecture, reusable components, and modern UI/UX principles.
              </p>
              <p>
                Holding a BSc in Information Systems from Addis Ababa
                University, I'm dedicated to advancing Ethiopia's tech ecosystem
                through innovative design, scalable code, and mentorship.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative w-full rounded-2xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            role="img"
            aria-label="Portrait of Mulugeta Adamu, Frontend Developer"
          >
            <OptimizedImage
              src="/about-img.webp"
              alt="Mulugeta Adamu - Frontend Developer"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-[1.03]"
              priority
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
