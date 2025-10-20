"use client";

import OptimizedImage from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const AboutMe = () => {
  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 focusable-section" tabIndex={-1}>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground"
            >
              About Me
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm Mulugeta Adamu, an Experienced Frontend Developer based in
              Addis Ababa with 3+ years of experience building scalable apps
              using React, Next.js, TypeScript, and React Native.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I've developed frontend solutions for platforms like WUMIS (20+
              cities), IFHCRS (Addis Ababa's health regulation system), and
              government eServices - focusing on clean architecture, reusable
              components, and modern UI/UX.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With a BSc in Information Systems from Addis Ababa University, I'm
              passionate about advancing Ethiopia's tech ecosystem through
              thoughtful design, scalable code, and mentorship.
            </p>

            <Button
              variant="default"
              onClick={handleDownload}
              className="mt-4"
              aria-label="Download my resume in PDF format"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Image Content */}
          <div
            className="relative w-full h-full rounded-xl overflow-hidden border border-primary/10 shadow-sm"
            role="img"
            aria-label="Portrait of Mulugeta Adamu, Frontend Developer"
          >
            <OptimizedImage
              src="/about-img.png"
              alt="Mulugeta Adamu - Frontend Developer"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
