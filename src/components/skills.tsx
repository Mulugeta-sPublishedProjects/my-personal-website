"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { AnimatedTechStack } from "@/components/animated-tech-stack";
import { SkillCategories } from "@/components/skill-categories";
import { SkillAchievements } from "@/components/skill-achievements";
import { SkillTimeline } from "@/components/skill-timeline";
import { LazyComponent } from "@/components/performance-optimizer";

const skillsData = [
  {
    name: "JavaScript",
    color: "text-[#F7DF1E]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M9.8 16.8c-.9-.5-1.7-1.2-1.8-2.6h1.9c0 .7.4 1.2.9 1.6.7.4 1.5.6 2.3.6s1.5-.2 1.5-.8-.5-.9-1.8-1.2c-1.9-.4-4.4-.8-4.4-3.3 0-1.6 1.3-3.2 3.7-3.2s3.5 1 4 1.6c.3.5.4 1 .4 1.7H16c0-1.1-.7-2-2.3-2-1.4 0-2 .6-2 1.4 0 .5.4.9 1.8 1.2 2 .4 4.4.9 4.4 3.2 0 2.5-2.2 3.4-4.1 3.4-1.9-.1-3.2-.7-3.8-1.2zm4.3 3.8H9v-1.5h5v1.5z"
          fill="#000"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "text-[#3178C6]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text
          x="6"
          y="18"
          fill="#FFF"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="bold"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "React",
    color: "text-[#61DAFB]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <circle cx="12" cy="12" r="4.5" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(-60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "text-black dark:text-white",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <rect width="24" height="24" rx="4" fill="#000" />
        <path d="M6 6h12v12H6V6z" fill="#FFF" />
        <path d="M9 9h6v6H9V9z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Redux",
    color: "text-[#764ABC]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <circle cx="12" cy="12" r="10" fill="#764ABC" />
        <text
          x="6"
          y="18"
          fill="#FFF"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="bold"
        >
          Redux
        </text>
      </svg>
    ),
  },
  {
    name: "HTML",
    color: "text-[#E34F26]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <polygon points="12 2 3 22 21 22 12 2" fill="#E34F26" />
        <polygon points="12 17.3 7.8 7.8 16.2 7.8 12 17.3" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "CSS",
    color: "text-[#1572B6]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <polygon points="12 2 3 22 21 22 12 2" fill="#1572B6" />
        <polygon points="12 17.3 7.8 7.8 16.2 7.8 12 17.3" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "text-[#06B6D4]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <path
          d="M12 4c-2 0-3.5 1.5-4 4 1-2 2-3 4-3 2 0 3 1 4 3-1-2-2-3-4-3zm0 8c-2 0-3.5 1.5-4 4 1-2 2-3 4-3 2 0 3 1 4 3-1-2-2-3-4-3z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    name: "React Native",
    color: "text-[#61DAFB]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <circle cx="12" cy="12" r="4.5" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(-60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "text-[#F05032]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <circle cx="12" cy="12" r="10" fill="#F05032" />
        <path d="M12 10v4M10 12h4" stroke="#FFF" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "text-black dark:text-white",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <polygon
          points="12 2 2 22 22 22 12 2"
          fill="#000"
          className="dark:fill-white"
        />
      </svg>
    ),
  },
];

export default function SkillsPage() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />

        {/* Floating geometric shapes */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-chart-3/20 to-chart-5/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent/15 to-muted/15 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] opacity-50" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Glassmorphism */}
        <div className="text-center mb-20">
          <div className="glass rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Skills & Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technologies I specialize in and use to create amazing digital
              experiences that push the boundaries of what's possible.
            </p>
          </div>
        </div>

        {/* Enhanced Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-3xl glass hover:glass-strong transition-all duration-500 hover:-translate-y-2 hover:shadow-glow group cursor-glow"
              aria-label={`Skill: ${skill.name}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`text-6xl ${skill.color} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-base font-bold text-center gradient-text group-hover:gradient-text-secondary transition-all duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Desktop Marquee */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden py-12">
            {/* Glow effect behind marquee */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chart-2/5 rounded-3xl blur-xl" />

            <Marquee gradient={false} speed={30} pauseOnHover className="py-6">
              <div className="flex items-center space-x-16">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-8 rounded-3xl glass-subtle hover:glass transition-all duration-500 hover:-translate-y-2 hover:shadow-soft group min-w-[160px] cursor-glow"
                    aria-label={`Skill: ${skill.name}`}
                    whileHover={{ scale: 1.1, y: -12 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`text-6xl ${skill.color} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}
                      whileHover={{ rotate: [0, -15, 15, 0] }}
                      transition={{ duration: 0.8 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <p className="mt-4 text-lg font-bold text-center gradient-text group-hover:gradient-text-secondary transition-all duration-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* Animated Tech Stack (interactive visualization) */}
        <div className="mt-20">
          <LazyComponent threshold={0.15}>
            <AnimatedTechStack
              techItems={[
                {
                  id: "ts",
                  name: "TypeScript",
                  category: "frontend",
                  level: 90,
                  experience: "4+ yrs",
                  icon: <span className="text-primary font-bold">TS</span>,
                  color: "text-primary",
                  description:
                    "Strong typing, generics, utility types, React + TS patterns",
                  projects: 25,
                  trending: true,
                  lastUsed: "this week",
                  popularity: 95,
                  mastered: true,
                },
                {
                  id: "react",
                  name: "React",
                  category: "frontend",
                  level: 92,
                  experience: "5+ yrs",
                  icon: <span className="text-primary font-bold">⚛︎</span>,
                  color: "text-primary",
                  description:
                    "Hooks, concurrent features, Suspense, perf, SSR/CSR",
                  projects: 30,
                  trending: true,
                  lastUsed: "today",
                  popularity: 98,
                  mastered: true,
                },
                {
                  id: "next",
                  name: "Next.js",
                  category: "frontend",
                  level: 88,
                  experience: "4+ yrs",
                  icon: <span className="font-bold">N</span>,
                  color: "",
                  description: "App Router, RSC, ISR, Edge, SEO, images, i18n",
                  projects: 18,
                  lastUsed: "this week",
                  popularity: 92,
                  mastered: true,
                },
                {
                  id: "tailwind",
                  name: "Tailwind CSS",
                  category: "ui-ux",
                  level: 85,
                  experience: "3+ yrs",
                  icon: <span className="text-primary font-bold">tw</span>,
                  color: "text-primary",
                  description: "Design system tokens, v4, theming, utilities",
                  projects: 20,
                  lastUsed: "this week",
                  popularity: 90,
                  mastered: true,
                },
                {
                  id: "nest",
                  name: "Nest.js",
                  category: "backend",
                  level: 70,
                  experience: "2+ yrs",
                  icon: <span className="font-bold">Nest</span>,
                  color: "",
                  description:
                    "Modular APIs, Guards, Interceptors, CQRS, Prisma",
                  projects: 8,
                  lastUsed: "last month",
                  popularity: 75,
                  learning: true,
                },
                {
                  id: "rn",
                  name: "React Native",
                  category: "mobile",
                  level: 65,
                  experience: "1.5 yrs",
                  icon: <span className="text-primary font-bold">RN</span>,
                  color: "text-primary",
                  description: "Expo, navigation, native modules, perf",
                  projects: 5,
                  lastUsed: "2 weeks ago",
                  popularity: 70,
                },
              ]}
            />
          </LazyComponent>
        </div>

        {/* Skill Categories with filtering */}
        <div className="mt-24">
          <LazyComponent threshold={0.15}>
            <SkillCategories
              categories={[
                {
                  id: "frontend",
                  name: "Frontend",
                  description:
                    "Modern UI engineering with performance and accessibility.",
                  icon: <span>🎨</span>,
                  color: "text-green-500",
                  totalProjects: 35,
                  averageLevel: 90,
                  trending: true,
                  lastUpdated: new Date().toISOString(),
                  skills: [
                    {
                      id: "react",
                      name: "React",
                      level: 92,
                      experience: "5+ yrs",
                      icon: (
                        <span className="text-[#61DAFB] font-bold">⚛︎</span>
                      ),
                      color: "text-[#61DAFB]",
                      description: "Hooks, RSC, Suspense, perf",
                      projects: 30,
                      trending: true,
                      mastered: true,
                      category: "frontend",
                    },
                    {
                      id: "ts",
                      name: "TypeScript",
                      level: 90,
                      experience: "4+ yrs",
                      icon: (
                        <span className="text-[#3178C6] font-bold">TS</span>
                      ),
                      color: "text-[#3178C6]",
                      description: "Advanced typing, generics",
                      projects: 25,
                      mastered: true,
                      category: "frontend",
                    },
                  ],
                },
                {
                  id: "backend",
                  name: "Backend",
                  description:
                    "Robust APIs and integrations with Node/Nest and databases.",
                  icon: <span>🛠️</span>,
                  color: "text-orange-500",
                  totalProjects: 14,
                  averageLevel: 76,
                  trending: false,
                  lastUpdated: new Date().toISOString(),
                  skills: [
                    {
                      id: "nest",
                      name: "Nest.js",
                      level: 70,
                      experience: "2+ yrs",
                      icon: <span className="font-bold">Nest</span>,
                      color: "",
                      description: "Guards, Interceptors, CQRS",
                      projects: 8,
                      learning: true,
                      category: "backend",
                    },
                  ],
                },
              ]}
            />
          </LazyComponent>
        </div>

        {/* Achievements & Certifications */}
        <div className="mt-24">
          <LazyComponent threshold={0.15}>
            <SkillAchievements
              achievements={[
                {
                  id: "cert-ts",
                  title: "TypeScript Advanced Patterns",
                  description:
                    "Completed advanced TS course with generics and inference.",
                  issuer: "Udemy",
                  date: "2024-08-12",
                  type: "certification",
                  level: "expert",
                  category: "frontend",
                  icon: <span>🎓</span>,
                  color: "text-blue-500",
                  verificationUrl: "https://example.com",
                  skills: ["TypeScript", "Generics", "React"],
                  featured: true,
                  trending: true,
                  recent: false,
                },
                {
                  id: "award-ui",
                  title: "UI Excellence Award",
                  description:
                    "Recognized for delivering high-quality UI with a11y.",
                  issuer: "Client X",
                  date: "2025-03-02",
                  type: "award",
                  level: "advanced",
                  category: "ui-ux",
                  icon: <span>🏆</span>,
                  color: "text-yellow-500",
                  skills: ["Accessibility", "Performance", "Design Systems"],
                  recent: true,
                },
              ]}
            />
          </LazyComponent>
        </div>

        {/* Learning Timeline */}
        <div className="mt-24">
          <LazyComponent threshold={0.15}>
            <SkillTimeline
              milestones={[
                {
                  id: "m1",
                  title: "Next.js App Router Deep Dive",
                  description: "Explored RSC, streaming, caching, and SEO.",
                  date: "2025-02-15",
                  type: "course",
                  category: "frontend",
                  skill: "Next.js",
                  level: "advanced",
                  progress: 100,
                  status: "completed",
                  difficulty: "hard",
                  skills: ["RSC", "SEO", "Edge"],
                  featured: true,
                  recent: true,
                },
                {
                  id: "m2",
                  title: "Nest.js CQRS Project",
                  description: "Implemented CQRS and testing for scalable API.",
                  date: "2024-11-10",
                  type: "project",
                  category: "backend",
                  skill: "Nest.js",
                  level: "intermediate",
                  progress: 70,
                  status: "in-progress",
                  difficulty: "medium",
                  skills: ["CQRS", "Prisma"],
                  recent: false,
                },
              ]}
            />
          </LazyComponent>
        </div>
      </div>
    </section>
  );
}
