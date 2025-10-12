"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Code2,
  Layout,
  Server,
  Zap,
} from "lucide-react";

const experiences = [
  {
    company: "TopLink Technologies",
    role: "Senior Frontend Developer",
    period: "03/2023 – Present",
    description:
      "Leading frontend development for WUMIS, serving 20+ cities across Ethiopia.",
    achievements: [
      "Built mobile‑first React modules for HR, Finance, Billing, and Customer Service",
      "Created reusable RTK Query data‑fetching modules",
      "Designed reusable components with MUI & Tailwind CSS",
      "Translated Figma designs to pixel‑perfect, responsive UIs",
    ],
  },
  {
    company: "Tria PLC",
    role: "Frontend Developer (Part‑time)",
    period: "05/2023 – 07/2025",
    description:
      "Contributed to IFHCRS for Addis Ababa Food & Health Authority.",
    achievements: [
      "Built Ethiopian date picker, Form.io form builder, and workflow designer with React Flow",
      "Set up Nx monorepo with React & Next.js for scalable architecture",
      "Developed regulatory platform operational across all sub‑cities",
    ],
  },
  {
    company: "Perago Systems",
    role: "Frontend Developer (eService)",
    period: "01/2022 – 03/2023",
    description:
      "Contributed to Ethiopia's government digital transformation with eServices apps.",
    achievements: [
      "Built eServices and back‑office apps for government digital services",
      "Delivered responsive UIs with React & Next.js integrated with backend APIs",
    ],
  },
];

const education = [
  {
    institution: "Addis Ababa University",
    degree: "BSc Information Systems",
    period: "2018 – 2022",
    detail:
      "Graduated with GPA 3.74/4.00. Focused on software engineering, web technologies, and data‑driven solutions.",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Core Technologies",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Nx",
      "TurboRepo",
      "Vite",
      "Webpack",
      "Turbopack",
    ],
  },
  {
    icon: Layout,
    title: "UI & Design Systems",
    items: [
      "Material UI",
      "Mantine",
      "shadcn/ui",
      "Tailwind CSS",
      "Styled Components",
      "Radix UI",
      "Framer Motion",
      "Figma",
    ],
  },
  {
    icon: Server,
    title: "State Management & Data",
    items: [
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "Context API",
      "React Hook Form",
      "Formik",
      "Zod",
      "Yup",
      "Better Auth",
      "Supabase",
      "Firebase",
    ],
  },
  {
    icon: Zap,
    title: "Product & Delivery",
    items: [
      "PWA Development",
      "SEO Optimization",
      "Accessibility (a11y)",
      "Performance Optimization",
      "CI/CD",
      "Infrastructure (Vercel, DNS)",
    ],
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      className="py-24 sm:py-32"
      ref={ref}
      aria-labelledby="expertise-heading"
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-center mb-16"
        >
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 text-foreground text-responsive-3xl"
          >
            Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-responsive-lg">
            Professional experience and technical skills that drive exceptional
            digital products
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-responsive-2xl sr-only">
              Experience
            </h3>
            <div className="space-y-6" role="list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  role="listitem"
                >
                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-responsive-xl">
                            {exp.role}
                          </h4>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Briefcase className="h-4 w-4" aria-hidden="true" />
                            <span className="text-sm text-responsive-base">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full self-start text-responsive-sm">
                          <Calendar className="h-4 w-4" aria-hidden="true" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm text-responsive-base">
                        {exp.description}
                      </p>
                      <ul className="space-y-2" role="list">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-responsive-base"
                            role="listitem"
                          >
                            <span
                              className="text-primary mt-1.5"
                              aria-hidden="true"
                            >
                              •
                            </span>
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education and Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-responsive-2xl sr-only">
              Education
            </h3>
            <div className="space-y-6" role="list">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  role="listitem"
                >
                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-responsive-xl">
                            {edu.degree}
                          </h4>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <GraduationCap
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-responsive-base">
                              {edu.institution}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full self-start text-responsive-sm">
                          <Calendar className="h-4 w-4" aria-hidden="true" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm text-responsive-base">
                        {edu.detail}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills Section - Grouped by category */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-responsive-2xl sr-only">
                Skills
              </h3>
              <div className="grid grid-cols-1 gap-4" role="list">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                    role="listitem"
                  >
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <skill.icon
                            className="h-5 w-5 text-primary"
                            aria-hidden="true"
                          />
                          <h4 className="font-medium text-responsive-lg">
                            {skill.title}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground text-responsive-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
