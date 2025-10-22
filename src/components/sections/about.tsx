"use client";

import OptimizedImage from "@/components/ui/optimized-image";

export const AboutMe = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="space-y-6" tabIndex={-1}>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              About Me
            </h2>

            <div className="space-y-4 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                I'm Mulugeta Adamu, a Frontend Developer based in Addis Ababa
                with 3+ years of experience building scalable apps using React,
                Next.js, TypeScript, and React Native.
              </p>
              <p>
                I've built frontend solutions for platforms like WUMIS (20+
                cities), IFHCRS (Addis Ababa's health regulation system), and
                government eServices—focusing on clean architecture, reusable
                components, and modern UI/UX.
              </p>
              <p>
                With a BSc in Information Systems from Addis Ababa University,
                I'm passionate about advancing Ethiopia's tech ecosystem through
                thoughtful design, scalable code, and mentorship.
              </p>
            </div>
          </div>

          <div
            className="relative w-full max-h-[24rem] sm:max-h-[28rem] md:max-h-[32rem] lg:max-h-[36rem] h-full rounded-xl overflow-hidden border border-primary/10 shadow-sm animate-fadeIn"
            role="img"
            aria-label="Portrait of Mulugeta Adamu, Frontend Developer"
          >
            <OptimizedImage
              src="/about-img.png"
              alt="Mulugeta Adamu - Frontend Developer"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
