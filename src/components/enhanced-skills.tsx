"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  Zap,
  Award,
  Star,
  TrendingUp,
  Clock,
  Users,
  BookOpen,
  Target,
  CheckCircle,
  ChevronRight,
  Filter,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeInSection } from "./fade-in-section";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-100
  experience: string; // e.g., "3 years", "Expert"
  icon: React.ReactNode;
  color: string;
  description: string;
  projects: number;
  certifications?: string[];
  lastUsed?: string;
  trending?: boolean;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  issuer: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  verified: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    color: "text-green-500",
    description: "Modern frontend technologies and frameworks",
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    color: "text-orange-500",
    description: "Server-side development and APIs",
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    color: "text-purple-500",
    description: "Cross-platform mobile applications",
  },
  {
    id: "database",
    name: "Database & Storage",
    icon: <Database className="h-6 w-6" />,
    color: "text-cyan-500",
    description: "Data management and storage solutions",
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    color: "text-pink-500",
    description: "User interface and experience design",
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500",
    description: "Deployment and infrastructure management",
  },
];

const skills: Skill[] = [
  // Frontend Skills
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 95,
    experience: "4 years",
    icon: <Code className="h-5 w-5" />,
    color: "text-blue-500",
    description: "Building dynamic user interfaces with React ecosystem",
    projects: 25,
    certifications: ["Meta Front-End Developer Certificate"],
    lastUsed: "2024",
    trending: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 90,
    experience: "3 years",
    icon: <Globe className="h-5 w-5" />,
    color: "text-gray-500",
    description: "Full-stack React framework with SSR and SSG",
    projects: 15,
    lastUsed: "2024",
    trending: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 88,
    experience: "3 years",
    icon: <Code className="h-5 w-5" />,
    color: "text-blue-600",
    description: "Type-safe JavaScript development",
    projects: 20,
    lastUsed: "2024",
    trending: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: 92,
    experience: "3 years",
    icon: <Palette className="h-5 w-5" />,
    color: "text-cyan-500",
    description: "Utility-first CSS framework",
    projects: 18,
    lastUsed: "2024",
    trending: true,
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    level: 75,
    experience: "2 years",
    icon: <Code className="h-5 w-5" />,
    color: "text-green-500",
    description: "Progressive JavaScript framework",
    projects: 8,
    lastUsed: "2023",
  },
  {
    id: "angular",
    name: "Angular",
    category: "frontend",
    level: 70,
    experience: "2 years",
    icon: <Code className="h-5 w-5" />,
    color: "text-red-500",
    description: "Platform for building mobile and desktop web applications",
    projects: 5,
    lastUsed: "2023",
  },

  // Backend Skills
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: 85,
    experience: "3 years",
    icon: <Server className="h-5 w-5" />,
    color: "text-green-600",
    description: "JavaScript runtime for server-side development",
    projects: 12,
    lastUsed: "2024",
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    level: 80,
    experience: "2 years",
    icon: <Server className="h-5 w-5" />,
    color: "text-red-600",
    description:
      "Progressive Node.js framework for building efficient server-side applications",
    projects: 8,
    lastUsed: "2024",
    trending: true,
  },
  {
    id: "python",
    name: "Python",
    category: "backend",
    level: 75,
    experience: "2 years",
    icon: <Code className="h-5 w-5" />,
    color: "text-yellow-500",
    description: "Versatile programming language for web development",
    projects: 6,
    lastUsed: "2024",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    level: 70,
    experience: "1 year",
    icon: <Zap className="h-5 w-5" />,
    color: "text-green-500",
    description: "Modern, fast web framework for building APIs",
    projects: 4,
    lastUsed: "2024",
  },

  // Mobile Skills
  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    level: 85,
    experience: "3 years",
    icon: <Smartphone className="h-5 w-5" />,
    color: "text-blue-500",
    description: "Cross-platform mobile development",
    projects: 10,
    lastUsed: "2024",
    trending: true,
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    level: 60,
    experience: "1 year",
    icon: <Smartphone className="h-5 w-5" />,
    color: "text-blue-400",
    description: "UI toolkit for building natively compiled applications",
    projects: 3,
    lastUsed: "2023",
  },

  // Database Skills
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    level: 80,
    experience: "3 years",
    icon: <Database className="h-5 w-5" />,
    color: "text-blue-600",
    description: "Advanced open-source relational database",
    projects: 15,
    lastUsed: "2024",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    level: 75,
    experience: "2 years",
    icon: <Database className="h-5 w-5" />,
    color: "text-green-600",
    description: "NoSQL document database",
    projects: 8,
    lastUsed: "2024",
  },
  {
    id: "redis",
    name: "Redis",
    category: "database",
    level: 70,
    experience: "2 years",
    icon: <Database className="h-5 w-5" />,
    color: "text-red-500",
    description: "In-memory data structure store",
    projects: 6,
    lastUsed: "2024",
  },

  // UI/UX Skills
  {
    id: "figma",
    name: "Figma",
    category: "ui-ux",
    level: 85,
    experience: "3 years",
    icon: <Palette className="h-5 w-5" />,
    color: "text-purple-500",
    description: "Collaborative interface design tool",
    projects: 20,
    lastUsed: "2024",
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    category: "ui-ux",
    level: 70,
    experience: "2 years",
    icon: <Palette className="h-5 w-5" />,
    color: "text-pink-500",
    description: "User experience design and prototyping",
    projects: 8,
    lastUsed: "2023",
  },

  // DevOps Skills
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    level: 80,
    experience: "2 years",
    icon: <Zap className="h-5 w-5" />,
    color: "text-blue-500",
    description: "Containerization platform",
    projects: 12,
    lastUsed: "2024",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "devops",
    level: 65,
    experience: "1 year",
    icon: <Zap className="h-5 w-5" />,
    color: "text-blue-600",
    description: "Container orchestration system",
    projects: 4,
    lastUsed: "2024",
  },
  {
    id: "aws",
    name: "AWS",
    category: "devops",
    level: 70,
    experience: "2 years",
    icon: <Globe className="h-5 w-5" />,
    color: "text-orange-500",
    description: "Cloud computing platform",
    projects: 8,
    lastUsed: "2024",
  },
];

const achievements: Achievement[] = [
  {
    id: "meta-frontend",
    title: "Meta Front-End Developer Certificate",
    description: "Professional certificate in front-end development",
    icon: <Award className="h-6 w-6" />,
    date: "2023",
    issuer: "Meta",
    level: "advanced",
    verified: true,
  },
  {
    id: "google-ux",
    title: "Google UX Design Certificate",
    description: "User experience design fundamentals",
    icon: <Palette className="h-6 w-6" />,
    date: "2022",
    issuer: "Google",
    level: "intermediate",
    verified: true,
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    description: "Cloud computing fundamentals",
    icon: <Globe className="h-6 w-6" />,
    date: "2023",
    issuer: "Amazon Web Services",
    level: "beginner",
    verified: true,
  },
  {
    id: "react-expert",
    title: "React Expert Certification",
    description: "Advanced React development skills",
    icon: <Code className="h-6 w-6" />,
    date: "2024",
    issuer: "React Training",
    level: "expert",
    verified: true,
  },
];

export function EnhancedSkills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Filter skills based on category and search
  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group skills by category
  const groupedSkills = skillCategories
    .map((category) => ({
      ...category,
      skills: filteredSkills.filter((skill) => skill.category === category.id),
    }))
    .filter((category) => category.skills.length > 0);

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-blue-500";
    if (level >= 70) return "text-yellow-500";
    if (level >= 60) return "text-orange-500";
    return "text-red-500";
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    if (level >= 60) return "Beginner+";
    return "Beginner";
  };

  return (
    <FadeInSection>
      <section className="py-20 space-y-16" id="skills">
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical expertise across
              different domains, with hands-on experience in modern technologies
              and frameworks.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-lg glass-subtle border-0 focus:glass-strong transition-all duration-300 rounded-2xl"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "all" ? "gradient" : "glass"}
              size="lg"
              onClick={() => setSelectedCategory("all")}
              className="rounded-2xl font-semibold"
            >
              <Filter className="h-4 w-4 mr-2" />
              All Skills
            </Button>
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "gradient" : "glass"
                }
                size="lg"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-2xl font-semibold"
              >
                <span className={category.color}>{category.icon}</span>
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto space-y-12">
          {groupedSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div
                  className={cn("p-3 rounded-2xl glass-strong", category.color)}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    className="glass hover:glass-strong rounded-3xl p-6 transition-all duration-500 hover:shadow-glow-lg hover:-translate-y-2"
                    onHoverStart={() => setHoveredSkill(skill.id)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {/* Skill Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-xl glass-subtle",
                            skill.color,
                          )}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold gradient-text">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {skill.experience}
                          </p>
                        </div>
                      </div>
                      {skill.trending && (
                        <Badge className="glass-strong text-green-500 border-green-500/20">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    {/* Skill Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Proficiency
                        </span>
                        <span
                          className={cn(
                            "font-semibold",
                            getLevelColor(skill.level),
                          )}
                        >
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <div className="text-right text-xs text-muted-foreground">
                        {skill.level}%
                      </div>
                    </div>

                    {/* Skill Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        <span>{skill.projects} projects</span>
                      </div>
                      {skill.lastUsed && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Last used {skill.lastUsed}</span>
                        </div>
                      )}
                    </div>

                    {/* Certifications */}
                    {skill.certifications &&
                      skill.certifications.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-yellow-500" />
                            <span className="text-muted-foreground">
                              Certified in:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {skill.certifications.map((cert, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs glass-subtle"
                              >
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Achievements & Certifications
              </h3>
              <p className="text-muted-foreground">
                Professional certifications and achievements that validate my
                expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-subtle hover:glass-strong rounded-2xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl glass-strong text-primary">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {achievement.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {achievement.issuer}
                          </span>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-xs",
                              achievement.level === "expert" &&
                                "border-green-500/20 text-green-500",
                              achievement.level === "advanced" &&
                                "border-blue-500/20 text-blue-500",
                              achievement.level === "intermediate" &&
                                "border-yellow-500/20 text-yellow-500",
                              achievement.level === "beginner" &&
                                "border-orange-500/20 text-orange-500",
                            )}
                          >
                            {achievement.level}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{achievement.date}</span>
                          {achievement.verified && (
                            <div className="flex items-center gap-1 text-green-500">
                              <CheckCircle className="h-3 w-3" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </FadeInSection>
  );
}
