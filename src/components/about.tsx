"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const text = [
    `I'm Mulugeta Adamu, a Frontend Developer from Addis Ababa, Ethiopia with 3+ years of experience building scalable web apps using React, Next.js, and TypeScript.`,
    `At TopLink Technologies, I help build the Water Utility Management System (WUMIS), serving 20+ cities nationwide — developing responsive modules for HR, Finance, Billing, and Customer Service.`,
    `Previously at Tria PLC, I contributed to the Addis Ababa IFHCRS project, building tools like an Ethiopian date picker and workflow designer using React Flow.`,
    `I specialize in scalable, maintainable frontends, blending Ethiopian innovation with global best practices.`,
    `I hold a BSc in Information Systems (GPA 3.74) from Addis Ababa University. I share knowledge through Medium articles and support Ethiopia’s growing tech ecosystem.`,
  ];

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {text.map((paragraph, i) => (
                <p
                  key={i}
                  className={i === 3 ? "text-primary font-semibold" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <Image
                src="/developer-coding-illustration-modern-abstract.jpg"
                alt="Developer illustration"
                fill
                className="object-contain relative z-10 rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
