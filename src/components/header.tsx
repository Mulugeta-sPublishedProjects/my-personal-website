"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Send, Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Home", href: "/" }, // Changed from "#" to "/" for consistency
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Handle active section detection for single page navigation
      if (pathname === "/") {
        const sections = navItems.map((item) =>
          item.href.startsWith("#") ? item.href.substring(1) : ""
        );
        const scrollPosition = window.scrollY + 100;

        // Check if we're at the top of the page
        if (window.scrollY < 100) {
          setActiveSection("Home");
          return;
        }

        for (const section of sections) {
          if (!section) continue;
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(
                section.charAt(0).toUpperCase() + section.slice(1)
              );
              return;
            }
          }
        }
      } else {
        // For other pages, set active section based on pathname
        const activeItem = navItems.find((item) => item.href === pathname);
        if (activeItem) {
          setActiveSection(activeItem.name);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name);
    setMobileMenuOpen(false);

    if (href === "/") {
      // Scroll to top for home link
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      // For anchor links on the home page
      if (pathname === "/") {
        // Get the ID from the href (remove the #)
        const id = href.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          // If no ID (just "#"), scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // Navigate to home page with anchor
        window.location.href = `/${href}`;
      }
    } else {
      // For regular navigation
      window.location.href = href;
    }
  };

  // Keyboard navigation support
  const handleKeyDown = (
    e: React.KeyboardEvent,
    href: string,
    name: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavClick(href, name);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-out",
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-sm py-1"
            : "bg-background/80 backdrop-blur-md py-3"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-all group"
            onClick={() => handleNavClick("/", "Home")}
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
            aria-label="Home"
          >
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold shadow-md transition-transform duration-300",
                isHoveringLogo && "scale-105 rotate-3"
              )}
              aria-hidden="true"
            >
              M
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold transition-colors group-hover:text-primary">
                Mulugeta
              </p>
              <p className="text-xs text-muted-foreground transition-colors group-hover:text-foreground/80">
                Frontend Engineer
              </p>
            </div>
          </Link>
          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.name);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, item.href, item.name)}
                  tabIndex={0}
                  className={cn(
                    "relative text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 group/nav-item focus:outline-none focus:ring-2 focus:ring-primary/50",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-3 right-3 h-0.5 bg-primary transition-all duration-300 origin-center",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover/nav-item:scale-x-50"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>
          {/* Right Section */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Desktop Hire Me Button */}
            <Button
              className="hidden md:flex items-center gap-1.5 transition-all hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
              onClick={() => handleNavClick("#contact", "Contact")}
              aria-label="Contact me for hiring"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Hire Me</span>
            </Button>
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          id="mobile-navigation"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-lg",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!mobileMenuOpen}
        >
          <nav
            className="px-4 pb-4 pt-2 border-t"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.href, item.name)}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors group focus:outline-none focus:ring-2 focus:ring-primary/50",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isActive
                          ? "rotate-180"
                          : "rotate-0 group-hover:translate-x-0.5"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
              {/* Mobile Hire Me Button */}
              <Button
                className="mt-2 w-full flex items-center justify-center gap-1.5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                onClick={() => handleNavClick("#contact", "Contact")}
                aria-label="Contact me for hiring"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Hire Me</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
