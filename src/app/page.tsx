// RootIndex.tsx
"use client";
import { motion } from "framer-motion";
import { AboutUs } from "@/components/about";
import Hero from "@/components/hero";
import JourneyPage from "@/components/experience";
import PortfolioPage from "@/components/projects";
import TestimonialPage from "@/components/testimonials";
import ContactPage from "@/components/contact";
import { useEffect, useState } from "react";
import SkillsPage from "@/components/skills";

// Navigation dots component
const NavigationDots = () => {
  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === section.id
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Navigate to ${section.label}`}
          />
        ))}
      </div>
    </div>
  );
};

const RootIndex = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Navigation Dots */}
      <NavigationDots />

      <SkillsPage />
      {/* About Section */}
      <AboutUs />

      {/* Projects Section */}
      <PortfolioPage />

      {/* Experience Section */}
      <JourneyPage />

      {/* Testimonials Section */}
      <TestimonialPage />

      {/* Contact Section */}
      <ContactPage />
    </main>
  );
};

export default RootIndex;
