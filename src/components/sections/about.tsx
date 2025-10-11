"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32" ref={ref}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Mulugeta Adamu, an experienced Frontend Developer based in
                Addis Ababa, Ethiopia, with over 3 years of expertise in
                building scalable, user-centric web applications using modern
                technologies like React, Next.js, and TypeScript.
              </p>
              <p>
                Currently, I'm working as a Frontend Developer at TopLink
                Technologies, where I'm instrumental in developing the Water
                Utility Management System (WUMIS) - a comprehensive solution
                serving 20+ cities across the country. My work focuses on
                creating mobile-first React modules for critical sectors
                including HR, Finance, Billing, and Customer Service.
              </p>
              <p>
                My experience extends to Tria PLC, where I contributed to the
                Addis Ababa Food & Health Regulatory System (IFHCRS), a
                city-wide platform for issuing licenses to health professionals
                and food/health facilities. There, I built specialized
                components like an Ethiopian date picker and a workflow designer
                using React Flow.
              </p>
              <p className="text-primary font-semibold">
                I specialize in creating maintainable, scalable frontend
                architectures with a focus on clean code practices, combining
                Ethiopian pride with global technical excellence.
              </p>
              <p>
                I hold a BSc in Information Systems from Addis Ababa University,
                graduating with a GPA of 3.74/4.00. When I'm not coding, I share
                my knowledge and experiences with the developer community
                through my technical articles on Medium. I'm passionate about
                staying current with frontend innovations and contributing to
                the growth of the tech ecosystem in Ethiopia.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
                <Image
                  src="/developer-coding-illustration-modern-abstract.jpg"
                  alt="Developer illustration"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
