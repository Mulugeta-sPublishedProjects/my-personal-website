"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useScrollPosition, useOnClickOutside } from '@/hooks';


type NavItem = {
  name: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '#blog' },
];

const SCROLL_THRESHOLD = 10;

export function Header() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const isScrolled = useScrollPosition(SCROLL_THRESHOLD);

  // Close mobile menu when clicking outside
  useOnClickOutside(headerRef, () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  });

  // Handle active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return;

      const scrollPosition = window.scrollY + 100;

      // Reset to Home if at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('Home');
        return;
      }

      // Find the current section in view
      for (const item of NAV_ITEMS) {
        if (!item.href.startsWith('#')) continue;
        
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const offsetBottom = offsetTop + offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.name);
            break;
          }
        }
      }
    };

    // Set initial active section based on URL hash
    if (pathname === '/') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const matchingItem = NAV_ITEMS.find(item => 
          item.href === `#${hash}`
        );
        if (matchingItem) {
          setActiveSection(matchingItem.name);
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For other pages, set active section based on pathname
      const activeItem = NAV_ITEMS.find(item => item.href === pathname);
      if (activeItem) {
        setActiveSection(activeItem.name);
      }
    }
  }, [pathname]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback((href: string, name: string) => {
    setActiveSection(name);
    setMobileMenuOpen(false);

    if (href === '/') {
      // Scroll to top for home link
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('#')) {
      const id = href.substring(1);
      if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // For anchor links on the home page
      if (pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Navigate to home page with anchor
        window.location.href = `/${href}`;
      }
      return;
    }

    // For regular navigation
    window.location.href = href;
  }, [pathname]);

  // Keyboard navigation support
  const handleKeyDown = useCallback((e: React.KeyboardEvent, href: string, name: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(href, name);
    }
  }, [handleNavClick]);

  // Memoize the navigation items to prevent unnecessary re-renders
  const navItems = useMemo(() => NAV_ITEMS.map((item) => ({
    ...item,
    isActive: activeSection === item.name,
  })), [activeSection]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all",
        isScrolled ? "bg-background/70 shadow-md py-2" : "bg-background/40 py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => handleNavClick("/", "Home")}
        >
          <motion.div
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.1, rotate: 5 }
            }
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold shadow-md"
          >
            M
          </motion.div>
          <div className="hidden sm:block">
            <p className="text-base font-bold group-hover:text-primary transition">
              Mulugeta
            </p>
            <p className="text-xs text-muted-foreground">Frontend Engineer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-2 z-40"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
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
                'relative text-sm font-semibold px-4 py-2 rounded-xl',
                'transition-all duration-300 group/nav-item',
                'focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-glow',
                item.isActive
                  ? 'glass-strong text-primary shadow-glow'
                  : 'glass-subtle text-muted-foreground',
                'hover:text-foreground hover:glass-strong hover:shadow-md hover:-translate-y-0.5'
              )}
              aria-current={item.isActive ? 'page' : undefined}
            >
              <span className="relative z-10">{item.name}</span>
              <span
                className={cn(
                  'absolute inset-0 rounded-xl',
                  'bg-gradient-to-r from-primary/20 to-chart-2/20',
                  'transition-all duration-300 origin-center',
                  item.isActive
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0 group-hover/nav-item:scale-100 group-hover/nav-item:opacity-100'
                )}
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Badge
            variant="outline"
            className="hidden md:flex rounded-xl border-primary/30 text-primary"
          >
            Available
          </Badge>
          <Button
            size="sm"
            className="hidden md:flex gap-2"
            onClick={() => handleNavClick("#contact", "Contact")}
          >
            <Send className="h-4 w-4" />
            Hire Me
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((p) => !p)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-left text-base font-medium transition",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {item.name}
                  </button>
                );
              })}
              <Button
                size="lg"
                className="mt-4 flex w-full gap-2 justify-center"
                onClick={() => handleNavClick("#contact", "Contact")}
              >
                <Send className="h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
