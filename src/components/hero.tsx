"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Download,
  Sparkles,
  Github,
  Linkedin,
  BookOpen,
  Send,
  FileText,
  ArrowDown,
  Zap,
  Medal,
  Rocket,
  Heart,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInSection } from "./fade-in-section";
import { ScrollMoreButton } from "./scroll-more";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mulugeta",
      label: "GitHub",
      ariaLabel: "Visit my GitHub profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mulugeta",
      label: "LinkedIn",
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      icon: BookOpen,
      href: "https://medium.com",
      label: "Medium",
      ariaLabel: "Visit my Medium articles",
    },
    {
      icon: Send,
      href: "https://t.me/mulugeta",
      label: "Telegram",
      ariaLabel: "Contact me on Telegram",
    },
  ];

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-20 py-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"
          variants={pulseAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30"
          variants={pulseAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px]" />
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start"
            >
              <Badge
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                aria-label="Currently available for opportunities"
              >
                <Zap
                  className="h-4 w-4 mr-1.5 fill-primary"
                  aria-hidden="true"
                />
                Open to Opportunities
              </Badge>
            </motion.div>
            <FadeInSection>
              {/* Name & Title */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                  Mulugeta Adamu
                </span>
              </motion.h1>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl text-muted-foreground font-medium"
              >
                Senior Frontend Developer
                <Sparkles
                  className="h-5 w-5 md:h-6 md:w-6 text-primary"
                  aria-hidden="true"
                />
              </motion.div>
              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                I build{" "}
                <span className="font-semibold text-foreground">
                  scalable, high-performance
                </span>
                , and{" "}
                <span className="font-semibold text-foreground">
                  accessible
                </span>{" "}
                web applications with modern frameworks and a focus on
                exceptional user experiences.
              </motion.p>
            </FadeInSection>
            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="gap-2 py-6 text-base font-medium shadow-md hover:shadow-lg transition-shadow"
                asChild
              >
                <Link href="#projects" className="flex items-center">
                  <Code className="h-5 w-5" aria-hidden="true" />
                  View My Work
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 py-6 text-base font-medium hover:bg-accent/50 transition-colors"
                asChild
              >
                <a
                  href="/resume-mulugeta-2017.pdf"
                  download="Mulugeta_Adamu_Resume.pdf"
                  className="flex items-center"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 pt-6 justify-center lg:justify-start"
              aria-label="Social media links"
            >
              {socialLinks.map(({ icon: Icon, href, label, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="p-3 rounded-full bg-background border hover:bg-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 z-0"></div>
              <Image
                src="/portifolio-website.webp"
                alt="Portrait of Mulugeta Adamu, Senior Frontend Developer"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
              {/* Top right badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-sm shadow-md backdrop-blur-sm flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  3+ Years Experience
                </Badge>
              </div>
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            </div>
          </motion.div>
        </div>
        <ScrollMoreButton onClick={scrollToAbout} label="Learn more" />
      </div>
    </section>
  );
}
