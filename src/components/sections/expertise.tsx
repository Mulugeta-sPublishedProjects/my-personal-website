"use client";

import { Calendar, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, easeOut } from "framer-motion";

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
      ease: easeOut,
    },
  },
};

interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

interface Skill {
  title: string;
  icon: string;
  items: string[];
}

export function Expertise() {
  // Curated resume-based content
  const resumeSkills: { title: string; items: string[] }[] = [
    {
      title: "Core Technologies & Tools",
      items: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Nx",
        "Turborepo",
        "Vite",
        "Webpack",
        "Turbopack",
      ],
    },
    {
      title: "UI & Design",
      items: [
        "Material UI",
        "Mantine",
        "shadcn/ui",
        "Tailwind CSS",
        "Styled Components",
        "Radix UI",
        "Framer Motion",
      ],
    },
    {
      title: "State, Data & Auth",
      items: [
        "Redux Toolkit",
        "RTK Query",
        "React Query",
        "Context API",
        "React Hook Form",
        "Zod",
        "Yup",
        "Formik",
        "Better Auth",
        "Supabase",
        "Firebase",
        "PWA",
      ],
    },
  ];

  const resumeExperiences: {
    role: string;
    company: string;
    period: string;
    achievements: string[];
  }[] = [
    {
      role: "Experienced Frontend Developer",
      company: "TopLink Technologies — WUMIS (20+ cities)",
      period: "03/2023 – Present",
      achievements: [
        "Built mobile-first React modules for HR, Finance, Billing, and Customer Service",
        "Created reusable RTK Query data-fetching modules",
        "Designed reusable components with MUI & Tailwind CSS",
        "Translated Figma designs to pixel-perfect, responsive UIs",
      ],
    },
    {
      role: "Experienced Frontend Developer (Part-time)",
      company: "Tria PLC — IFHCRS (city-wide health regulation)",
      period: "05/2023 – 07/2025",
      achievements: [
        "Built Ethiopian date picker, Form.io builder, and workflow designer with React Flow",
        "Set up Nx monorepo for React & Next.js to enable modular architecture",
        "Delivered maintainable components across licensing and facility workflows",
      ],
    },
    {
      role: "Frontend Developer (eService)",
      company: "Perago Systems — Ethiopia Government eServices",
      period: "01/2022 – 03/2023",
      achievements: [
        "Built citizen-facing eServices and back-office apps",
        "Integrated React & Next.js frontends with backend APIs",
        "Shipped responsive UIs with modern accessibility and performance practices",
      ],
    },
  ];

  const resumeEducation: {
    degree: string;
    institution: string;
    period: string;
    detail: string;
  } = {
    degree: "BSc Information Systems",
    institution: "Addis Ababa University",
    period: "2018 – 2022 | GPA: 3.74/4.00",
    detail:
      "Focused on software engineering, web technologies, and data-driven solutions.",
  };
  return (
    <section
      id="expertise"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10"
      aria-labelledby="expertise-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Shipping reliable, modern interfaces—from idea to production—using
            proven tools and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left: Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl md:text-2xl font-semibold">
                  Professional Experience
                </h3>
              </div>
              <div
                className="space-y-6"
                role="list"
                aria-label="Professional experience"
              >
                {resumeExperiences.map((exp) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
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
            </div>

            {/* Right: Skills */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">
                Technical Skills
              </h3>
              <div role="list" aria-label="Technical skills">
                <div className="grid gap-4 sm:grid-cols-2">
                  {resumeSkills.map((skill) => (
                    <motion.div
                      key={skill.title}
                      variants={itemVariants}
                      role="listitem"
                    >
                      <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-medium text-base md:text-lg mb-3">
                            {skill.title}
                          </h4>
                          <div
                            className="flex flex-wrap gap-2"
                            role="list"
                            aria-label={`Skills in ${skill.title}`}
                          >
                            {skill.items.map((item) => (
                              <span
                                key={item}
                                className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/15 transition-colors duration-200"
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
          </div>

          {/* Bottom: Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-semibold">Education</h3>
            </div>
            <motion.div variants={itemVariants}>
              <Card className="border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-foreground">
                        {resumeEducation.degree}
                      </h4>
                      <p className="text-primary font-medium text-base md:text-lg">
                        {resumeEducation.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{resumeEducation.period}</span>
                    </div>
                  </div>
                  <p className="text-foreground text-sm md:text-base">
                    {resumeEducation.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
