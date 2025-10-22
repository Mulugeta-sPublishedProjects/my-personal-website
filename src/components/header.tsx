"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Initialize section refs
    const sections = ["home", "about", "expertise", "projects", "contact"];
    sections.forEach((section) => {
      sectionRefs.current[section] = document.querySelector(`#${section}`);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      for (const section of sections) {
        const el = sectionRefs.current[section];
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = sectionRefs.current["contact"];
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHireMeClick = () => {
    scrollToContact();
    handleMobileMenuItemClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-foreground"
            aria-label="Portfolio Home"
          >
            MA
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navItems.map(({ name, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={name}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={scrollToContact}
              className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 gap-2"
              aria-label="Hire me"
            >
              Hire Me
            </button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                    aria-label="Open menu"
                    onClick={handleMobileMenuToggle}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-64 bg-background border-l border-border"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav
                    className="flex flex-col gap-6 mt-8"
                    aria-label="Mobile navigation"
                  >
                    {navItems.map(({ name, href }) => {
                      const isActive = activeSection === href.slice(1);
                      return (
                        <SheetClose asChild key={name}>
                          <a
                            href={href}
                            onClick={handleMobileMenuItemClick}
                            className={`text-base font-medium ${
                              isActive
                                ? "text-primary"
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
                      <button
                        onClick={handleHireMeClick}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
                        aria-label="Hire me"
                      >
                        Hire Me
                      </button>
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
