"use client";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Globe,
  Code2,
  Database,
  Bot,
  Layers,
  Zap,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

const skillSets = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building native experiences",
    skills: [
      "React Native",
      "Expo",
      "iOS & Android",
      "Mobile UI/UX",
      "App Store Deployment",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Server Components",
    ],
  },
  {
    id: "bot",
    icon: Bot,
    title: "Bot Development",
    description: "Intelligent automation",
    skills: [
      "NestJS",
      "Telegram Bots",
      "Discord Bots",
      "Webhooks",
      "API Integration",
    ],
  },
  {
    id: "mini-apps",
    icon: Layers,
    title: "Mini Apps",
    description: "Lightweight applications",
    skills: [
      "WeChat Mini Apps",
      "Telegram Mini Apps",
      "PWA",
      "Micro Frontends",
    ],
  },
  {
    id: "backend",
    icon: Database,
    title: "Backend & APIs",
    description: "Scalable server solutions",
    skills: [
      "NestJS",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    id: "core",
    icon: Code2,
    title: "Core Technologies",
    description: "Foundation & tools",
    skills: ["TypeScript", "JavaScript", "Git", "Docker", "CI/CD", "Testing"],
  },
  {
    id: "performance",
    icon: Zap,
    title: "State & Performance",
    description: "Optimized experiences",
    skills: [
      "Redux",
      "Zustand",
      "React Query",
      "Performance Optimization",
      "SEO",
    ],
  },
  {
    id: "ui",
    icon: Package,
    title: "UI & Design",
    description: "Beautiful interfaces",
    skills: [
      "Figma",
      "Shadcn UI",
      "Framer Motion",
      "Responsive Design",
      "Design Systems",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4+ years crafting mobile apps, web platforms, bots, and mini
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSets.map((skillSet) => (
            <motion.div
              key={skillSet.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="p-6 border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg hover:border-accent/50 transition-all duration-300 h-full flex flex-col group">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 w-fit group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300">
                  <skillSet.icon className="size-6 text-accent" />
                </div>

                <h3
                  className="text-xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {skillSet.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {skillSet.description}
                </p>

                <div className="flex-1">
                  <ul className="space-y-2">
                    {skillSet.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="text-sm flex items-center text-foreground group-hover:text-accent transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 group-hover:bg-primary transition-colors duration-300" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
