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

export function Expertise() {
  return (
    <section
      id="expertise"
      className="py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="expertise-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Experience & Skills
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Professional journey and technical expertise in building digital
            products
          </p>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Experience */}
          <div
            className="space-y-6"
            role="list"
            aria-label="Professional experience"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>

            {experiences.map((exp) => (
              <Card
                key={exp.company}
                className="border-l-4 border-l-primary focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                role="listitem"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul
                    className="space-y-2"
                    role="list"
                    aria-label={`Achievements at ${exp.company}`}
                  >
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm"
                        role="listitem"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Education & Skills */}
          <div className="space-y-12">
            {/* Education */}
            <div role="list" aria-label="Education">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              {education.map((edu) => (
                <Card
                  key={edu.institution}
                  className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                  role="listitem"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                      <div>
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {edu.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div role="list" aria-label="Technical skills">
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              <div className="grid gap-4">
                {skills.map((skill) => (
                  <Card
                    key={skill.title}
                    className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                    role="listitem"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">{skill.title}</h4>
                      </div>
                      <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-label={`Skills in ${skill.title}`}
                      >
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                            role="listitem"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
