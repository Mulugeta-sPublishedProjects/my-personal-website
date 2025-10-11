"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const expertiseData = {
  "Core Tech": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React Native",
  ],
  Architecture: [
    "Component-Driven Development",
    "Micro-frontends",
    "Design Systems",
    "Performance Optimization",
    "Code Splitting",
    "Server-Side Rendering",
    "Static Site Generation",
  ],
  "UI/Design": [
    "Responsive Design",
    "Accessibility (WCAG)",
    "Framer Motion",
    "shadcn/ui",
    "Radix UI",
    "Material-UI",
    "Figma",
    "User Experience",
  ],
  "State/Data/Auth": [
    "Redux",
    "Zustand",
    "React Query",
    "SWR",
    "REST APIs",
    "GraphQL",
    "JWT",
    "OAuth",
    "Firebase",
    "Supabase",
  ],
};

const experiences = [
  {
    company: "TopLink Technologies",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Leading frontend development for WUMIS, serving 20+ cities across Ethiopia.",
    achievements: [
      "Architected scalable React dashboard serving millions of users",
      "Reduced page load time by 60% through optimization",
      "Implemented comprehensive design system",
    ],
  },
  {
    company: "Tria PLC",
    role: "Frontend Developer",
    period: "2021 - 2022",
    description: "Built IFHCRS for Addis Ababa Food & Health Authority.",
    achievements: [
      "Developed regulatory platform processing 10,000+ permits annually",
      "Created mobile-responsive inspection forms",
      "Integrated real-time compliance tracking",
    ],
  },
  {
    company: "Perago Systems",
    role: "Junior Frontend Developer",
    period: "2020 - 2021",
    description: "Contributed to eServices government digital platform.",
    achievements: [
      "Built accessible, mobile-first citizen portal",
      "Implemented secure authentication flows",
      "Reduced service delivery time by 70%",
    ],
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-muted/30" ref={ref}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Skills & Tools
          </h2>

          <Tabs defaultValue="Core Tech" className="max-w-4xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {Object.keys(expertiseData).map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(expertiseData).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-sm py-1.5 px-3"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    <Card className="md:ml-16 hover:border-primary/50 transition-colors">
                      <CardContent className="pt-6">
                        {/* Timeline dot */}
                        <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                          <div>
                            <h4 className="text-xl font-bold">{exp.role}</h4>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <li
                              key={achievement}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="text-primary mt-1">▸</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
