"use client";

import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { TelegramIcon } from "./ui/telegram-icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/muleA", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mulugeta-adamu/",
      label: "LinkedIn",
    },

    {
      icon: Twitter,
      href: "https://twitter.com/mulugeta6omkf",
      label: "Twitter",
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
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-foreground">
              © {currentYear} Mulugeta Adamu. All rights reserved
            </p>
          </div>

          <div
            className="flex items-center gap-3 sm:gap-4"
            role="navigation"
            aria-label="Social media links"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.label} profile`}
                  className="text-foreground hover:text-primary transition-colors touch-manipulation flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
