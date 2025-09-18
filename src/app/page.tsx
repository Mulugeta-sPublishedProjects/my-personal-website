"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import Hero from "@/components/hero";
import { AboutUs } from "@/components/about";
import BlogList from "@/components/blogs";
import ContactPage from "@/components/contact";
import EnhancedWork from "@/components/enhanced-work";

/* ===============================
   Animation Variants
================================= */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smoother animation
    },
  },
};

/* ===============================
   Fade-in Section with Stagger & Parallax
================================= */
interface FadeInSectionProps {
  id: string;
  children: React.ReactNode;
  parallax?: boolean;
  offset?: number;
  className?: string;
}

const FadeInSection = ({
  id,
  children,
  parallax = false,
  offset = 80,
  className = "",
}: FadeInSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "-20% 0px -20% 0px",
  });
  const prefersReducedMotion = useReducedMotion();
  const shouldUseParallax = parallax && !prefersReducedMotion;

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Only calculate transforms if we're using parallax
  const y = shouldUseParallax
    ? useTransform(scrollYProgress, [0, 1], [0, offset])
    : useTransform(scrollYProgress, [0, 1], [0, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 0.8]);

  // Add will-change for better performance
  const style = shouldUseParallax
    ? { y, opacity, willChange: "transform, opacity" }
    : {};

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={style}
      className={`w-full ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="will-change-transform"
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants} className="will-change-transform">
          {children}
        </motion.div>
      )}
    </motion.section>
  );
};

/* ===============================
   Navigation Dots
================================= */
const NavigationDots = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ] as const;

  const [activeSection, setActiveSection] = useState<string>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without scrolling
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: "-20% 0px -20% 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <ul className="flex flex-col gap-3">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleScroll(id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                ${
                  activeSection === id
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              aria-label={`Scroll to ${label} section`}
              aria-current={activeSection === id ? "true" : "false"}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

/* ===============================
   Root Page
================================= */
const RootIndex = () => {
  return (
    <main className="min-h-screen">
      {/* Hero with enhanced parallax */}
      <FadeInSection id="home" parallax offset={120} className="relative z-10">
        <Hero />
      </FadeInSection>

      <NavigationDots />

      {/* About with subtle parallax */}
      <FadeInSection id="about" parallax offset={60} className="relative z-0">
        <AboutUs />
      </FadeInSection>

      <FadeInSection id="work">
        <EnhancedWork />
      </FadeInSection>

      <FadeInSection id="blog" parallax offset={60} className="relative z-0">
        <BlogList />
      </FadeInSection>

      <FadeInSection id="contact">
        <ContactPage />
      </FadeInSection>
    </main>
  );
};

export default RootIndex;