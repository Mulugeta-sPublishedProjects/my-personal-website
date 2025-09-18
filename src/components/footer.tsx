"use client";

import { Github, Linkedin, Twitter, Send, Heart, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as React from "react";

// Navigation Items - Match header navigation
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
] as const;

// Social Links
const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/mulugeta",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/mulugeta",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://twitter.com/mulugeta",
    ariaLabel: "Visit my Twitter profile",
  },
  {
    icon: Send,
    name: "Telegram",
    url: "https://t.me/mulugeta",
    ariaLabel: "Contact me on Telegram",
  },
] as const;

interface FooterProps {
  compact?: boolean;
}

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Footer: React.FC<FooterProps> = ({ compact = false }) => {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  if (compact) {
    return (
      <motion.footer
        className="w-full border-t backdrop-blur-md bg-background/80 mt-16 relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={footerVariants}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.div
                {...(!prefersReducedMotion && {
                  whileHover: { scale: 1.05, rotate: 2 }
                })}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md"
              >
                M
              </motion.div>
              <p className="text-xs text-muted-foreground">
                © {currentYear} Mulugeta Adamu — React/Next.js Engineer
              </p>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, name, url, ariaLabel }) => (
                <motion.div key={name} {...(!prefersReducedMotion && { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } })}>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="h-8 w-8 p-0 rounded-xl glass-subtle hover:glass-strong transition-all duration-300"
                    aria-label={ariaLabel}
                  >
                    <Link href={url} target="_blank">
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
              <motion.div {...(!prefersReducedMotion && { whileHover: { y: -2 } })}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground rounded-xl glass-subtle hover:glass-strong transition-all duration-300 gap-1"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <ArrowUp className="h-3 w-3" />
                  Top
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.footer>
    );
  }

  return (
    <motion.footer
      className="w-full border-t backdrop-blur-md bg-background/80 mt-16 relative z-0 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chart-2/5 -z-10" />
      
      {/* Floating elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
            animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-10 left-10 w-24 h-24 bg-chart-2/5 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center md:items-start gap-3">
              <motion.div
                {...(!prefersReducedMotion && {
                  whileHover: { scale: 1.1, rotate: 5 }
                })}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md"
              >
                M
              </motion.div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Mulugeta Adamu
                </h3>
                <p className="text-sm text-muted-foreground">
                  Frontend Engineer & UI Specialist
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 max-w-xs text-center md:text-left leading-relaxed">
              Creating beautiful, functional interfaces with modern web
              technologies and exceptional user experiences.
            </p>
            <Badge
              variant="outline"
              className="mt-3 rounded-xl border-primary/30 text-primary bg-primary/5"
            >
              Available for Work
            </Badge>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2 w-full">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  {...(!prefersReducedMotion && {
                    whileHover: { x: 4 },
                    whileTap: { scale: 0.98 }
                  })}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-muted-foreground hover:text-foreground h-8 px-3 text-xs justify-start rounded-xl",
                      "glass-subtle hover:glass-strong transition-all duration-300",
                      "hover:shadow-sm hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex flex-col gap-3 w-full">
              {socialLinks.map(({ icon: Icon, name, url, ariaLabel }) => (
                <motion.div
                  key={name}
                  {...(!prefersReducedMotion && {
                    whileHover: { scale: 1.02, x: 4 },
                    whileTap: { scale: 0.98 }
                  })}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={cn(
                      "justify-start gap-2 rounded-xl border-border/30",
                      "glass-subtle hover:glass-strong transition-all duration-300",
                      "hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
                    )}
                  >
                    <Link
                      href={url}
                      target="_blank"
                      aria-label={ariaLabel}
                      className="w-full"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{name}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-2 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-semibold mb-4 text-foreground">Get in Touch</h4>
            <motion.div
              {...(!prefersReducedMotion && {
                whileHover: { y: -2 },
                whileTap: { scale: 0.98 }
              })}
              className="w-full"
            >
              <Button
                size="sm"
                className="w-full rounded-xl gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => scrollToSection("#contact")}
              >
                <Send className="h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
            <p className="text-xs text-muted-foreground mt-3 text-center md:text-left leading-relaxed">
              Currently accepting new projects and opportunities.
            </p>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Mulugeta Adamu — React/Next.js Engineer
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with{" "}
              <Heart className="h-3 w-3 text-destructive fill-current animate-pulse" />{" "}
              and Next.js
            </p>
            <div className="flex gap-2">
              <motion.div {...(!prefersReducedMotion && { whileHover: { y: -1 } })}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-2 text-xs rounded-xl glass-subtle hover:glass-strong transition-all duration-300"
                >
                  Privacy
                </Button>
              </motion.div>
              <motion.div {...(!prefersReducedMotion && { whileHover: { y: -1 } })}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-2 text-xs rounded-xl glass-subtle hover:glass-strong transition-all duration-300"
                >
                  Terms
                </Button>
              </motion.div>
              <motion.div {...(!prefersReducedMotion && { whileHover: { y: -2 } })}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-3 text-xs rounded-xl glass-subtle hover:glass-strong transition-all duration-300 gap-1"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <ArrowUp className="h-3 w-3" />
                  Back to top
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
