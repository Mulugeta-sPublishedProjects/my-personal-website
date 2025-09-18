"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
  Zap,
  Globe,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineProject {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  categories: string[];
  company?: string;
  featured?: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate?: string;
  likes?: number;
  views?: number;
  stars?: number;
  impact?: {
    metric: string;
    value: string;
    description: string;
  }[];
}

interface ProjectTimelineProps {
  projects: TimelineProject[];
  className?: string;
}

const techIcons = {
  frontend: Code,
  backend: Server,
  mobile: Smartphone,
  database: Database,
  ui: Palette,
  web: Globe,
};

const difficultyColors = {
  beginner: "bg-green-500/10 text-green-500 border-green-500/20",
  intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  advanced: "bg-red-500/10 text-red-500 border-red-500/20",
};

const statusColors = {
  completed: "bg-green-500/10 text-green-500",
  "in-progress": "bg-blue-500/10 text-blue-500",
  planned: "bg-orange-500/10 text-orange-500",
};

export const ProjectTimeline = ({
  projects,
  className = "",
}: ProjectTimelineProps) => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Get unique years from projects
  const years = Array.from(
    new Set(
      projects.map((project) =>
        new Date(project.startDate).getFullYear().toString()
      )
    )
  ).sort((a, b) => parseInt(b) - parseInt(a));

  // Filter projects by selected year
  const filteredProjects =
    selectedYear === "all"
      ? projects
      : projects.filter(
          (project) =>
            new Date(project.startDate).getFullYear().toString() ===
            selectedYear
        );

  // Sort projects by start date
  const sortedProjects = filteredProjects.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  // Transform scroll progress for timeline animation
  const timelineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const timelineOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Year Filter */}
      <div className="sticky top-20 z-10 mb-12">
        <div className="glass rounded-3xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedYear === "all" ? "gradient" : "glass"}
              size="lg"
              onClick={() => setSelectedYear("all")}
              className="rounded-2xl font-semibold"
            >
              All Years
            </Button>
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "gradient" : "glass"}
                size="lg"
                onClick={() => setSelectedYear(year)}
                className="rounded-2xl font-semibold"
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-chart-2 to-chart-3 rounded-full"
          style={{
            y: timelineY,
            opacity: timelineOpacity,
          }}
        />

        {/* Projects */}
        <div className="space-y-12">
          {sortedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const Icon =
              techIcons[project.categories[0] as keyof typeof techIcons] ||
              Code;

            return (
              <motion.div
                key={project.id}
                className={cn(
                  "relative flex items-center",
                  isEven ? "flex-row" : "flex-row-reverse"
                )}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Timeline Node */}
                <motion.div
                  className={cn(
                    "absolute left-8 w-4 h-4 rounded-full border-4 border-background z-10",
                    hoveredProject === project.id ? "scale-125" : "scale-100"
                  )}
                  style={{
                    background: project.featured
                      ? "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--chart-2)))"
                      : "hsl(var(--muted))",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project Card */}
                <motion.div
                  className={cn(
                    "flex-1 glass hover:glass-strong rounded-3xl p-6 transition-all duration-500",
                    isEven ? "ml-16 mr-8" : "mr-16 ml-8",
                    hoveredProject === project.id && "shadow-glow-lg scale-105"
                  )}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-6">
                    {/* Project Image */}
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold gradient-text mb-1">
                            {project.title}
                          </h3>
                          {project.company && (
                            <p className="text-sm text-muted-foreground font-medium">
                              {project.company}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge
                            className={cn(
                              "glass-strong font-semibold",
                              statusColors[project.status]
                            )}
                          >
                            {project.status.replace("-", " ").toUpperCase()}
                          </Badge>
                          <Badge
                            className={cn(
                              "glass-strong font-semibold",
                              difficultyColors[project.difficulty]
                            )}
                          >
                            {project.difficulty.toUpperCase()}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="glass-subtle hover:glass-strong transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 4 && (
                          <Badge variant="outline" className="glass-subtle">
                            +{project.techStack.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Stats and Impact */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(project.startDate).getFullYear()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{project.duration}</span>
                          </div>
                          {project.likes && (
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              <span>{project.likes}</span>
                            </div>
                          )}
                        </div>

                        {project.impact && project.impact.length > 0 && (
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-semibold text-green-500">
                              {project.impact[0].value}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Timeline Stats */}
      <motion.div
        className="mt-16 glass rounded-3xl p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text-secondary mb-2">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">
              {projects.reduce((sum, p) => sum + (p.likes || 0), 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Likes</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text-secondary mb-2">
              {projects.reduce((sum, p) => sum + (p.views || 0), 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
