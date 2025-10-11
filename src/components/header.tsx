"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollToContact = (): void => {
  globalThis.document
    .querySelector("#contact")
    ?.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(globalThis.scrollY > 10);

      const sections = ["home", "about", "expertise", "projects", "contact"];
      const current = sections.find((section) => {
        const element = globalThis.document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      }`}
    >
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-6xl mx-auto">
          <motion.a
            href="#"
            className="text-xl font-bold text-foreground no-underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MA
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: "none",
                  boxShadow: "none",
                  border: "none",
                  outline: "none",
                }}
                className={`nav-link header-nav-link text-sm font-medium transition-colors hover:text-primary no-underline outline-none border-none ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={scrollToContact}
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
