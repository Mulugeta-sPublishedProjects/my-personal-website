"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code,
  Palette,
  Zap,
  Users,
  Briefcase,
  CalendarDays,
  MapPin,
  Building,
  Award,
  Smartphone,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/components/performance-optimizer";

export function AboutUs() {
  const reducedMotion = useReducedMotion();

  // ---------------------- Data ----------------------
  const experienceData = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Top Link Technology PLC",
      location: "Addis Ababa, Ethiopia",
      period: "March 2023 - Present",
      employmentType: "Full Time",
      description:
        "Architecting UIs with optimal performance and UX. Leading frontend development for WUMIS water utility management system.",
      achievements: [
        "Led WUMIS frontend development",
        "Implemented real-time data visualization",
        "Improved user workflows",
      ],
      skills: ["React", "Material UI", "GraphQL", "RTK Query", "Jest"],
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      company: "Tria PLC",
      location: "Addis Ababa, Ethiopia",
      period: "May 2023 - June 2025",
      employmentType: "Part Time",
      description:
        "Leading responsive frontend development with modern frameworks. Architecting scalable component libraries and optimizing application performance.",
      achievements: [
        "Architected component libraries for consistent UI",
        "Reduced page load times by 45%",
        "Mentored junior developers",
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      id: 3,
      title: "Junior Frontend Developer",
      company: "Perago Systems PLC",
      location: "Addis Ababa, Ethiopia",
      period: "Jan 2022 - March 2023",
      employmentType: "Full Time",
      description:
        "Developed web applications focusing on code quality. Built UI for eService government platform with modern React patterns.",
      achievements: [
        "Built responsive UI components for eService platform",
        "Reduced bugs by 30%",
        "Participated in agile ceremonies",
      ],
      skills: ["React", "Next.js", "Tailwind CSS", "RTK Query", "Cypress"],
    },
    {
      id: 4,
      title: "Intern Frontend Developer",
      company: "Perago Systems PLC",
      location: "Addis Ababa, Ethiopia",
      period: "Dec 2021 - Jan 2022",
      employmentType: "Internship",
      description:
        "Assisted in web component development. Gained hands-on experience with React and built reusable components.",
      achievements: [
        "Built reusable components for internal design system",
        "Learned industry best practices",
        "Collaborated with senior developers",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
  ];

  const skillsData = [
    { name: "JavaScript", level: "Expert", icon: <Code className="h-4 w-4" /> },
    { name: "TypeScript", level: "Advanced", icon: <Code className="h-4 w-4" /> },
    { name: "React", level: "Expert", icon: <Code className="h-4 w-4" /> },
    { name: "Next.js", level: "Advanced", icon: <Code className="h-4 w-4" /> },
    { name: "Redux", level: "Advanced", icon: <Code className="h-4 w-4" /> },
    { name: "HTML/CSS", level: "Expert", icon: <Palette className="h-4 w-4" /> },
    { name: "Tailwind CSS", level: "Expert", icon: <Palette className="h-4 w-4" /> },
    { name: "React Native", level: "Intermediate", icon: <Smartphone className="h-4 w-4" /> },
    { name: "NestJS", level: "Intermediate", icon: <Server className="h-4 w-4" /> },
    { name: "System Design", level: "Intermediate", icon: <Layers className="h-4 w-4" /> },
    { name: "GraphQL", level: "Intermediate", icon: <Server className="h-4 w-4" /> },
    { name: "Git", level: "Advanced", icon: <Code className="h-4 w-4" /> },
  ];

  const features = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Clean Code",
      description: "Maintainable, scalable code following best practices",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX Design",
      description: "Intuitive, accessible interfaces with great UX",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance",
      description: "Optimized for fast and responsive web apps",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Player",
      description: "Collaborates effectively with cross-functional teams",
    },
  ];

  // ---------------------- Motion Variants ----------------------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardHoverVariants = {
    rest: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden z-0"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px] -z-10" />
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, 15, 0], y: [0, -15, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, -15, 0], y: [0, 15, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            className="mb-4 px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm inline-flex items-center gap-1"
            aria-label="About me section"
          >
            <Sparkles className="h-3 w-3" />
            About Me
          </Badge>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Crafting modern web experiences with a focus on scalability,
            performance, and UX excellence.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center relative"
          >
            <div className="relative group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-md transition-all duration-500">
                <Image
                  src="/portifolio-website.webp"
                  alt="Mulugeta Adamu - Frontend Developer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium shadow-sm text-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                aria-label="3+ years of experience"
              >
                3+ Years Experience
              </motion.div>

              {/* Floating Sparkle */}
              <motion.div
                className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm"
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, -8, 0], rotate: [0, 10, -10, 0] }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : { duration: 4, repeat: Infinity, delay: 0.5 }
                }
                aria-hidden="true"
              >
                <Sparkles className="h-4 w-4 text-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              I ship fast, accessible products that scale
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I specialize in React/Next.js with TypeScript, design systems, and
              performance. I collaborate closely with design and backend to
              reduce scope risk, improve quality, and hit deadlines.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Recent wins: improved LCP to <strong>under 2s</strong>, cut bundle
              size by <strong>30%</strong>, and increased conversion for a
              product launch with an a11y-first UI.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="rounded-full gap-2 mt-4 shadow-md hover:shadow-lg transition-shadow"
                asChild
              >
                <Link href="#contact" className="flex items-center">
                  Let's Work Together
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-2 sm:mb-0">
              <Briefcase className="h-5 w-5 text-primary" />
              Professional Experience
            </h3>
            <Badge
              variant="outline"
              className="text-xs self-start sm:self-auto"
              aria-label="3+ years of experience"
            >
              3+ Years
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experienceData.map((exp) => (
              <motion.div
                key={exp.id}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="h-full"
              >
                <Card className="border border-border/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg md:text-xl">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Building
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.employmentType}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.description}
                    </p>
                    <div className="mb-3">
                      <h4 className="flex items-center gap-1.5 text-sm font-semibold mb-1">
                        <Award
                          className="h-4 w-4 text-amber-500"
                          aria-hidden="true"
                        />
                        Key Achievements
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {exp.achievements.slice(0, 2).map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.slice(0, 4).map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-2 sm:mb-0">
              <Zap className="h-5 w-5 text-primary" />
              Technical Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skillsData.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="h-full"
              >
                <Card className="border border-border/30 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary">
                      {skill.icon}
                    </div>
                    <div className="font-medium text-sm">{skill.name}</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {skill.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">Core Strengths</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2 text-base md:text-lg">
              Expertise, creativity, and collaboration to deliver world-class
              web applications.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="border-0 bg-muted/20 hover:bg-muted/30 transition-all duration-300 h-full group backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <h5 className="font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
