"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
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
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setScrolled(window.scrollY > 20);

      // Find the active section
      let currentSection = "home";
      const scrollPosition = window.scrollY + 100; // Adjusted offset

      // Check each section to see which one is currently in view
      const sections = ["home", "about", "expertise", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionTop = offsetTop;
          const sectionBottom = offsetTop + offsetHeight;

          // Check if current scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call handleScroll once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector<HTMLElement>(sectionId);
    if (element) {
      // Calculate offset for fixed header
      const headerHeight = 80; // Approximate header height
      const offsetTop = element.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Update active section after scrolling
      setTimeout(() => {
        setActiveSection(sectionId.replace("#", ""));
      }, 300);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-muted/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            aria-label="Portfolio Home"
          >
            MA
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {navItems.map(({ name, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(href);
                  }}
                  className={`text-sm md:text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />

            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base bg-primary hover:bg-primary text-primary-foreground"
              aria-label="Hire me"
            >
              Hire Me
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle menu"
                    className="hover:bg-primary/10"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-64 bg-background/95 backdrop-blur-sm border-l border-muted/20"
                >
                  <SheetHeader className="flex items-center justify-between border-b border-muted/20 pb-4 mb-6">
                    <SheetTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                      Menu
                    </SheetTitle>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </SheetHeader>
                  <nav
                    className="flex flex-col gap-4"
                    aria-label="Mobile navigation"
                  >
                    {navItems.map(({ name, href }) => {
                      const sectionId = href.slice(1);
                      const isActive = activeSection === sectionId;
                      return (
                        <SheetClose asChild key={name}>
                          <a
                            href={href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(href);
                            }}
                            className={`text-base md:text-lg font-medium transition-colors ${
                              isActive
                                ? "text-primary font-semibold"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {name}
                          </a>
                        </SheetClose>
                      );
                    })}
                    <SheetClose asChild>
                      <Button
                        onClick={() => scrollToSection("#contact")}
                        size="lg"
                        className="w-full bg-primary hover:bg-primary text-primary-foreground mt-4"
                        aria-label="Hire me"
                      >
                        Hire Me
                      </Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
