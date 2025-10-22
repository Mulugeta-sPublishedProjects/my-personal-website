"use client";

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
import { motion } from "framer-motion";

const experiences = [
  {
    company: "TopLink Technologies",
    role: "Experienced Frontend Developer",
    period: "2023 – Present",
    achievements: [
      "Developed frontend solutions for water utility management system serving 20+ cities",
      "Built mobile-first React modules for HR, Finance, and Billing departments",
      "Developed reusable RTK Query modules reducing API integration time by 60%",
      "Created scalable component libraries with MUI & Tailwind CSS",
    ],
  },
  {
    company: "Tria PLC",
    role: "Frontend Developer",
    period: "2023 – 2025",
    achievements: [
      "Developed regulatory compliance platform for Addis Ababa Food & Health Authority",
      "Created custom Ethiopian date picker and form builder components",
      "Implemented Nx monorepo architecture for city-wide deployment",
    ],
  },
  {
    company: "Perago Systems",
    role: "Frontend Developer",
    period: "2022 – 2023",
    achievements: [
      "Developed solutions for government eServices digital transformation",
      "Created citizen-facing applications and administrative back-office systems",
      "Improved application load times by 40% through performance optimization",
    ],
  },
];

const education = [
  {
    institution: "Addis Ababa University",
    degree: "BSc in Information Systems",
    period: "2018 – 2022",
    detail: "Graduated with distinction (GPA 3.74/4.00)",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Core Technologies",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Layout,
    title: "UI & Design",
    items: ["Material UI", "shadcn/ui", "Framer Motion", "Figma"],
  },
  {
    icon: Server,
    title: "State & Data",
    items: ["Redux Toolkit", "React Query", "React Hook Form", "Supabase"],
  },
  {
    icon: Zap,
    title: "Engineering",
    items: ["PWA", "Web Accessibility", "Performance", "CI/CD"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10"
      aria-labelledby="expertise-heading"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight "
          >
            Experience & Expertise
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
            A journey of building innovative digital solutions with modern
            technologies
          </p>
        </motion.div>

        {/* Two Columns Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
        >
          {/* Left Column - Experience */}
          <div
            className="space-y-6"
            role="list"
            aria-label="Professional experience"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Professional Experience
              </h3>
            </div>

            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                role="listitem"
              >
                <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                      <div>
                        <h4 className="font-semibold text-lg md:text-xl text-foreground">
                          {exp.role}
                        </h4>
                        <p className="text-primary font-medium text-base md:text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul
                      className="space-y-3"
                      role="list"
                      aria-label={`Achievements at ${exp.company}`}
                    >
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                          role="listitem"
                        >
                          <span className="text-primary mt-1.5">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Education & Skills */}
          <div className="space-y-10">
            {/* Education */}
            <div role="list" aria-label="Education">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl md:text-2xl font-semibold">Education</h3>
              </div>

              {education.map((edu) => (
                <motion.div
                  key={edu.institution}
                  variants={itemVariants}
                  role="listitem"
                >
                  <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                        <div>
                          <h4 className="font-semibold text-lg md:text-xl text-foreground">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium text-base md:text-lg">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {edu.detail}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div role="list" aria-label="Technical skills">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">
                Technical Skills
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    role="listitem"
                  >
                    <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <skill.icon className="h-5 w-5 text-primary" />
                          <h4 className="font-medium text-base md:text-lg">
                            {skill.title}
                          </h4>
                        </div>
                        <div
                          className="flex flex-wrap gap-2"
                          role="list"
                          aria-label={`Skills in ${skill.title}`}
                        >
                          {skill.items.map((item) => (
                            <span
                              key={item}
                              className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                              role="listitem"
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
        </motion.div>
      </div>
    </section>
  );
}
