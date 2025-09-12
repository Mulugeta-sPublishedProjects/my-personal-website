"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "@/components/hero";
import { AboutUs } from "@/components/about";
import BlogList from "@/components/blogs";
import ContactPage from "@/components/contact";
import { Work } from "@/components/work";

// ✅ Reusable FadeInSection wrapper
const FadeInSection = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </section>
  );
};

// ✅ Navigation Dots (IntersectionObserver-based)
const NavigationDots = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ul className="flex flex-col gap-2">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === id
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Navigate to ${label}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const RootIndex = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <FadeInSection id="home">
        <Hero />
      </FadeInSection>

      {/* Navigation Dots */}
      <NavigationDots />
      <FadeInSection id="about">
        <AboutUs />
      </FadeInSection>
      {/* Blog */}

      {/* About */}

      {/* Work */}
      <FadeInSection id="work">
        <Work />
      </FadeInSection>

      <FadeInSection id="contact">
        <ContactPage />
      </FadeInSection>
      <FadeInSection id="blog">
        <BlogList />
      </FadeInSection>

      {/* Contact */}
    </main>
  );
};

export default RootIndex;
