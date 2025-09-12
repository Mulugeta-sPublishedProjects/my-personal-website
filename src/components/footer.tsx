"use client";
import { Github, Linkedin, Twitter, Send, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

// TypeScript interfaces for better type safety
interface NavItem {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  name: string;
  url: string;
  ariaLabel: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" }, // Changed from "#" to "/" for consistency
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="h-4 w-4" />,
    name: "GitHub",
    url: "https://github.com/mulugeta",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/mulugeta",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    icon: <Twitter className="h-4 w-4" />,
    name: "Twitter",
    url: "https://twitter.com/mulugeta",
    ariaLabel: "Visit my Twitter profile",
  },
  {
    icon: <Send className="h-4 w-4" />,
    name: "Telegram",
    url: "https://t.me/mulugeta",
    ariaLabel: "Contact me on Telegram",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const id = href.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For external links
      window.location.href = href;
    }
  };

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="w-full border-t bg-card mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Brand Column */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                M
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground text-center md:text-left">
                  Mulugeta Adamu
                </h3>
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  Frontend Engineer & UI Specialist
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center md:text-left max-w-xs">
              Creating beautiful, functional interfaces with modern web
              technologies.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-medium text-foreground mb-4">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2 w-full">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground h-8 px-2 text-xs justify-start"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-medium text-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3 w-full">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="justify-start gap-2"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-full"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            className="md:col-span-2 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h4 className="text-sm font-medium text-foreground mb-4">
              Get in Touch
            </h4>
            <Button
              size="sm"
              className="w-full"
              onClick={() => scrollToSection("#contact")}
            >
              <Send className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
              Available for freelance projects and collaborations.
            </p>
          </motion.div>
        </div>

        <Separator className="my-6" />

        {/* Copyright Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Mulugeta Adamu. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Made with{" "}
              <Heart className="h-3 w-3 text-destructive fill-current animate-pulse" />{" "}
              and Next.js
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
              >
                Terms
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
