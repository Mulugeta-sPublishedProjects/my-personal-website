"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Download,
  Github,
  Linkedin,
  BookOpen,
  Send,
  Zap,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveBackground } from "./interactive-background";
import { ScrollMoreButton } from "./scroll-more";
import { useReducedMotion } from "@/components/performance-optimizer";

/**
 * Hero - polished, accessible hero component
 *
 * Notes:
 * - Keep as "use client" because it uses hooks & framer-motion.
 * - Respects reduced motion.
 * - Particles/extra visuals disabled on small screens or reduced-motion.
 * - Uses Next Image `priority` for the hero image.
 */

const SOCIALS: Array<{
  Icon: React.ComponentType<{ 
    className?: string; 
    "aria-hidden"?: boolean | "true" | "false" | undefined 
  }>;
  href: string;
  label: string;
}> = [
  { Icon: Github, href: "https://github.com/mulugeta", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/in/mulugeta",
    label: "LinkedIn",
  },
  { Icon: BookOpen, href: "https://medium.com", label: "Medium" },
  { Icon: Send, href: "https://t.me/mulugeta", label: "Telegram" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1]
    },
  }),
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [enableVisuals, setEnableVisuals] = React.useState(true);

  React.useEffect(() => {
    function update() {
      const width = typeof window !== "undefined" ? window.innerWidth : 0;
      setEnableVisuals(!prefersReducedMotion && width >= 640);
    }
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, [prefersReducedMotion]);

  // Smooth scroll to #about
  const scrollToAbout = React.useCallback(() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <InteractiveBackground className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Text content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            animate="visible"
            aria-labelledby="hero-heading"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            <motion.div
              variants={fadeInUp as any}
              className="inline-flex items-center gap-3"
            >
              <Badge
                className="px-3 py-1 rounded-full text-sm font-medium"
                aria-label="Open to opportunities"
              >
                <Zap className="h-4 w-4 mr-2" aria-hidden="true" />
                Available for hire
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              variants={fadeInUp as any}
            >
              <span className="block text-foreground">Mulugeta Adamu</span>
              <span className="block text-lg sm:text-xl font-medium text-primary mt-2">
                Senior Frontend Engineer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp as any}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              I build modern web applications with React, Next.js & TypeScript. 
              Focused on performance, accessibility, and exceptional user experiences.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeInUp as any}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              role="group"
              aria-label="Primary calls to action"
            >
              <Button
                asChild
                size="lg"
                className="flex items-center gap-2"
              >
                <Link href="#contact" onClick={(e) => e.currentTarget.blur()}>
                  <Code className="h-5 w-5" aria-hidden="true" />
                  <span>Let's Work Together</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <a
                  href="/resume-mulugeta-2017.pdf"
                  download="Mulugeta_Adamu_Resume.pdf"
                  aria-label="Download resume"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  View Resume
                </a>
              </Button>
            </motion.div>

            {/* social links */}
            <motion.div variants={fadeInUp as any} className="flex items-center gap-4">
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Portrait / visual */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              <Image
                src="/portifolio-website.webp"
                alt="Portrait of Mulugeta Adamu"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 384px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute left-4 bottom-4 flex gap-2">
                <div className="rounded-lg px-3 py-1 bg-background/80 backdrop-blur text-xs font-medium">
                  Available
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center">
          <ScrollMoreButton onClick={scrollToAbout} label="Learn more" />
        </div>
      </div>
    </InteractiveBackground>
  );
}
