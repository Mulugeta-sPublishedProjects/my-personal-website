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
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
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
    <InteractiveBackground className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Enhanced background elements */}
      {enableVisuals && (
        <>
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-chart-2/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-bounce" />
        </>
      )}
      
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Text content */}
          <motion.div
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            aria-labelledby="hero-heading"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              variants={fadeInUp as any}
            >
              <span className="block text-foreground bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                Mulugeta Adamu
              </span>
              <motion.span 
                className="block text-lg sm:text-xl md:text-2xl font-medium text-primary mt-2 sm:mt-3"
                variants={fadeInUp as any}
              >
                Senior Frontend Engineer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp as any}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft exceptional digital experiences with{" "}
              <span className="font-semibold text-primary">React</span>,{" "}
              <span className="font-semibold text-primary">Next.js</span> &{" "}
              <span className="font-semibold text-primary">TypeScript</span>.
              <br className="hidden sm:block" />
              Focused on performance, accessibility, and user delight.
            </motion.p>

            {/* Enhanced CTA row */}
            <motion.div
              variants={fadeInUp as any}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full"
              role="group"
              aria-label="Primary calls to action"
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#contact" onClick={(e) => e.currentTarget.blur()}>
                  <Code className="h-5 w-5" aria-hidden="true" />
                  <span>Let's Work Together</span>
                  <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 hover:bg-muted/50 transition-all duration-300"
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

            {/* Enhanced stats row */}
            <motion.div
              variants={fadeInUp as any}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                <span>50+ Projects Delivered</span>
              </div>
            </motion.div>

            {/* Enhanced social links */}
            <motion.div
              variants={fadeInUp as any}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  {...(prefersReducedMotion ? {} : { whileHover: { scale: 1.1, y: -2 } })}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                >
                  <Icon
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Enhanced Portrait / visual */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              {/* Floating background elements */}
              {enableVisuals && (
                <>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-chart-2/10 rounded-full blur-xl animate-pulse delay-500" />
                </>
              )}
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-chart-2/10 pointer-events-none z-10" />
                
                {/* Main image */}
                <Image
                  src="/portifolio-website.webp"
                  alt="Portrait of Mulugeta Adamu, Senior Frontend Engineer"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  priority
                />
                
                {/* Enhanced status badges */}
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between z-20">
                  <div className="flex flex-col gap-2">
                    <div className="rounded-xl px-4 py-2 bg-background/90 backdrop-blur-md border border-primary/20 text-sm font-medium shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Available for work
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-xl px-3 py-2 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-medium shadow-lg">
                    🇪🇹 Ethiopia
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
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
