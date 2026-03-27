"use client";

import { useState, useEffect } from "react";
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sections = ["home", "about", "expertise", "projects", "contact"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let topMost: { id: string; ratio: number; top: number } | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            const rectTop = (
              entry.target as HTMLElement
            ).getBoundingClientRect().top;
            const ratio = entry.intersectionRatio;
            if (
              !topMost ||
              rectTop < topMost.top ||
              (Math.abs(rectTop - topMost.top) < 1 && ratio > topMost.ratio)
            ) {
              topMost = { id, ratio, top: rectTop };
            }
          }
        }
        if (topMost) {
          setActiveSection(topMost.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector<HTMLElement>(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setActiveSection(sectionId.replace("#", ""));
      }, 300);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-muted/30 "
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
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
            role="navigation"
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
                  className={`relative text-sm md:text-base font-medium px-1.5 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-all ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-primary transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
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
              className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base bg-primary hover:bg-primary text-primary-foreground transition-all motion-reduce:transition-none motion-reduce:transform-none"
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
                    className="hover:bg-primary/10 transition-all motion-reduce:transition-none"
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
                        className="transition-all motion-reduce:transition-none motion-reduce:transform-none"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </SheetHeader>
                  <nav
                    className="flex flex-col gap-2"
                    aria-label="Mobile navigation"
                    role="navigation"
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
                            className={`text-base md:text-lg font-medium px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors ${
                              isActive
                                ? "text-primary font-semibold bg-primary/5"
                                : "text-muted-foreground hover:text-foreground"
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
                        className="w-full bg-primary hover:bg-primary text-primary-foreground mt-3 transition-all motion-reduce:transition-none motion-reduce:transform-none"
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
