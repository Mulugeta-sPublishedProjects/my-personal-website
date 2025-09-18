"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Users,
  Star,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Zap,
  Award,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Maximize,
  Download,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  categories: string[];
  company?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  status: "completed" | "in-progress" | "planned";
  likes?: number;
  views?: number;
  stars?: number;
  problemStatement?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  screenshots?: string[];
  videoDemo?: string;
  caseStudy?: {
    overview: string;
    research: string;
    design: string;
    development: string;
    testing: string;
    deployment: string;
    impact: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
}: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab("overview");
      setCurrentImageIndex(0);
      setIsVideoPlaying(false);
    }
  }, [isOpen, project]);

  if (!project) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500";
      case "planned":
        return "bg-orange-500/10 text-orange-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const techCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: Code,
      color: "bg-green-500/10 text-green-500",
    },
    {
      id: "backend",
      label: "Backend",
      icon: Server,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: Smartphone,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      id: "database",
      label: "Database",
      icon: Database,
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      id: "ui-ux",
      label: "UI/UX",
      icon: Palette,
      color: "bg-pink-500/10 text-pink-500",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="z-[1200] max-w-6xl max-h-[90vh] glass-strong border-white/20 overflow-hidden"
        aria-label={`Details for project ${project.title}`}
      >
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-3xl font-bold gradient-text">
                {project.title}
              </DialogTitle>
              {project.company && (
                <p className="text-lg text-muted-foreground font-medium">
                  {project.company}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Badge
                className={cn(
                  "glass-strong font-semibold",
                  getStatusColor(project.status),
                )}
              >
                {project.status.replace("-", " ").toUpperCase()}
              </Badge>
              <Badge
                className={cn(
                  "glass-strong font-semibold",
                  getDifficultyColor(project.difficulty),
                )}
              >
                {project.difficulty.toUpperCase()}
              </Badge>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div
            className="flex items-center justify-between"
            aria-label="Project navigation controls"
          >
            <Button
              variant="glass"
              size="icon"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="rounded-2xl"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-4">
              <Button
                variant="glass"
                size="sm"
                className="rounded-2xl font-semibold"
                aria-label="Share project"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant="glass"
                size="sm"
                className="rounded-2xl font-semibold"
                aria-label="Save project"
              >
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>

            <Button
              variant="glass"
              size="icon"
              onClick={onNext}
              disabled={!hasNext}
              className="rounded-2xl"
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[60vh]">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
            aria-label="Project details tabs"
          >
            <TabsList className="grid w-full grid-cols-4 glass-subtle">
              <TabsTrigger value="overview" className="rounded-xl">
                Overview
              </TabsTrigger>
              <TabsTrigger value="gallery" className="rounded-xl">
                Gallery
              </TabsTrigger>
              <TabsTrigger value="case-study" className="rounded-xl">
                Case Study
              </TabsTrigger>
              <TabsTrigger value="tech" className="rounded-xl">
                Technology
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Project Image/Video */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                {project.videoDemo && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      size="lg"
                      variant="gradient"
                      className="rounded-full w-16 h-16"
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    >
                      {isVideoPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold gradient-text">
                  About This Project
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem Statement */}
              {project.problemStatement && (
                <div className="glass-subtle rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-bold gradient-text-secondary">
                    Problem Statement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold gradient-text">
                    Key Features
                  </h3>
                  <div className="grid gap-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 glass-subtle rounded-xl p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-subtle rounded-2xl p-4 text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-bold">{project.duration}</p>
                </div>
                {project.likes && (
                  <div className="glass-subtle rounded-2xl p-4 text-center">
                    <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Likes</p>
                    <p className="font-bold">{project.likes}</p>
                  </div>
                )}
                {project.views && (
                  <div className="glass-subtle rounded-2xl p-4 text-center">
                    <Eye className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Views</p>
                    <p className="font-bold">{project.views}</p>
                  </div>
                )}
                {project.stars && (
                  <div className="glass-subtle rounded-2xl p-4 text-center">
                    <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Stars</p>
                    <p className="font-bold">{project.stars}</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold gradient-text">
                    Screenshots
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <Image
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="mx-auto rounded-2xl"
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="case-study" className="space-y-6">
              {project.caseStudy ? (
                <div className="space-y-6">
                  {Object.entries(project.caseStudy).map(([key, value]) => (
                    <div key={key} className="glass-subtle rounded-2xl p-6">
                      <h3 className="text-xl font-bold gradient-text mb-4 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Case study coming soon...
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="tech" className="space-y-6">
              <div className="space-y-6">
                <h3 className="text-xl font-bold gradient-text">
                  Technologies Used
                </h3>

                {/* Tech Stack by Category */}
                {techCategories.map((category) => {
                  const categoryTech = project.techStack.filter((tech) =>
                    project.categories.includes(category.id),
                  );

                  if (categoryTech.length === 0) return null;

                  const Icon = category.icon;

                  return (
                    <div key={category.id} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-lg">
                          {category.label}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categoryTech.map((tech) => (
                          <Badge
                            key={tech}
                            className={cn(
                              "glass-subtle font-semibold",
                              category.color,
                            )}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t border-white/10">
          {project.live && project.live !== "#" && (
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="flex-1 rounded-2xl font-semibold"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                View Live Demo
              </a>
            </Button>
          )}

          {project.github && project.github !== "#" && (
            <Button
              asChild
              variant="glass"
              size="lg"
              className="flex-1 rounded-2xl font-semibold"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View Source Code
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
