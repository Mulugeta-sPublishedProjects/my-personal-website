"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { TelegramIcon } from "./ui/telegram-icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/muleA", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mulugeta-adamu",
      label: "LinkedIn",
    },

    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/mulugeta6omkf",
    },
    {
      icon: TelegramIcon,
      href: "https://t.me/mulugeta_dev",
      label: "Telegram",
    },
  ];

  return (
    <footer
      className="relative border-t border-border bg-background/50 backdrop-blur-sm"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: "easeOut" as const,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-muted-foreground text-responsive-sm">
              © {currentYear} Mulugeta Adamu. All rights reserved
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: "easeOut" as const,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex items-center gap-4"
            role="navigation"
            aria-label="Social media links"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.label} profile`}
                  className="text-muted-foreground hover:text-primary transition-colors touch-manipulation flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.3,
                    ease: "easeOut" as const,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
