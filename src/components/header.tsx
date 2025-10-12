"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MessageCircle, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const scrollToContact = (): void => {
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "about", "expertise", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.querySelector(`#${section}`);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16 max-w-6xl mx-auto w-full">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold text-foreground flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            aria-label="Mulugeta Adamu - Portfolio Home"
          >
            MA
          </motion.a>

          {/* Desktop Nav - Centered */}
          <nav
            className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 
                    ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme + CTA + Mobile Menu */}
          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <Button
              onClick={scrollToContact}
              size="sm"
              aria-label="Contact me"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Let&apos;s Talk
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open navigation menu"
                    className="touch-manipulation"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-64 sm:w-80 bg-background/95 backdrop-blur-xl border-l border-border p-6"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 50 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                    className="flex flex-col gap-6 mt-8"
                    aria-label="Mobile navigation"
                  >
                    {navItems.map((item) => {
                      const isActive = activeSection === item.href.slice(1);
                      return (
                        <SheetClose asChild key={item.name}>
                          <a
                            href={item.href}
                            className={`text-base font-medium transition-colors duration-200 touch-manipulation text-responsive-base ${
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </SheetClose>
                      );
                    })}
                    <SheetClose asChild>
                      <Button
                        onClick={scrollToContact}
                        size="sm"
                        className="flex items-center gap-2 mt-4 touch-manipulation text-responsive-sm"
                        aria-label="Contact me"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Let&apos;s Talk
                      </Button>
                    </SheetClose>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
