"use client";

import { Github, Linkedin, Twitter, Send, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import * as React from "react";

// Navigation Items
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
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

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  if (compact) {
    return (
      <motion.footer
        className="w-full border-t bg-card mt-16 relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={footerVariants}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-soft">
                M
              </div>
              <p className="text-xs text-muted-foreground">
                © {currentYear} Mulugeta Adamu — React/Next.js Engineer
              </p>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, name, url, ariaLabel }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 rounded-full"
                  aria-label={ariaLabel}
                >
                  <Link href={url} target="_blank">
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground rounded-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Top
              </Button>
            </div>
          </div>
        </div>
      </motion.footer>
    );
  }

  return (
    <motion.footer
      className="w-full border-t bg-card mt-16 relative z-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-soft">
                M
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mulugeta Adamu</h3>
                <p className="text-sm text-muted-foreground">
                  Frontend Engineer & UI Specialist
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 max-w-xs text-center md:text-left">
              Creating beautiful, functional interfaces with modern web
              technologies.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2 w-full">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground h-8 px-2 text-xs justify-start rounded-lg"
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3 w-full">
              {socialLinks.map(({ icon: Icon, name, url, ariaLabel }) => (
                <Button
                  key={name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="justify-start gap-2 rounded-lg"
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
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-2 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
            <Button
              size="sm"
              className="w-full rounded-lg"
              onClick={() => scrollToSection("#contact")}
            >
              <Send className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
              Currently accepting new projects and interviews.
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
              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                Privacy
              </Button>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                Terms
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Back to top
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
