"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/components/performance-optimizer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
}

interface EnhancedProjectCardProps {
  project: Project;
  index?: number;
  onLike?: (projectId: string) => void;
  onView?: (projectId: string) => void;
  onBookmark?: (projectId: string) => void;
  onClick?: () => void;
  className?: string;
  variant?: "featured" | "default";
}

export const EnhancedProjectCard = ({
  project,
  index = 0,
  onLike,
  onView,
  onBookmark,
  onClick,
  className = "",
  variant = "default",
}: EnhancedProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

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

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl",
        className,
      )}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      role="button"
      tabIndex={0}
      aria-label={`Project ${project.title}, status ${project.status}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsHovered(true);
          onClick?.();
        }
      }}
      onClick={onClick}
    >
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <Card className="relative glass-subtle hover:glass transition-all duration-500 overflow-hidden border-0 shadow-soft hover:shadow-strong group-hover:shadow-glow z-auto">
          {/* Image Container with 3D Effect */}
          <CardHeader className="p-0 relative overflow-hidden">
            <div className="relative w-full h-64 group/image">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover/image:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onView?.(project.id)}
                  className="w-8 h-8 glass-strong rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300"
                >
                  <Eye className="h-4 w-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsLiked(!isLiked);
                    onLike?.(project.id);
                  }}
                  className={cn(
                    "w-8 h-8 glass-strong rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300",
                    isLiked && "text-red-500",
                  )}
                >
                  <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsBookmarked(!isBookmarked);
                    onBookmark?.(project.id);
                  }}
                  className={cn(
                    "w-8 h-8 glass-strong rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300",
                    isBookmarked && "text-yellow-500",
                  )}
                >
                  <Bookmark
                    className={cn("h-4 w-4", isBookmarked && "fill-current")}
                  />
                </motion.button>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="absolute top-4 left-4"
                >
                  <Badge className="glass-strong text-yellow-500 border-yellow-500/20 font-semibold">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                </motion.div>
              )}

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4">
                <Badge
                  className={cn(
                    "glass-strong font-semibold",
                    getStatusColor(project.status),
                  )}
                >
                  {project.status.replace("-", " ").toUpperCase()}
                </Badge>
              </div>

              {/* Difficulty Badge */}
              <div className="absolute bottom-4 right-4">
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
          </CardHeader>

          <CardContent className="p-6 space-y-4">
            {/* Title and Company */}
            <div className="space-y-2">
              <CardTitle className="text-xl font-bold gradient-text group-hover:gradient-text-secondary transition-all duration-300">
                {project.title}
              </CardTitle>
              {project.company && (
                <p className="text-sm text-muted-foreground font-medium">
                  {project.company}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + techIndex * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className="glass-subtle hover:glass-strong transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="glass-subtle">
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                {project.likes && (
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{project.likes}</span>
                  </div>
                )}
                {project.views && (
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{project.views}</span>
                  </div>
                )}
              </div>

              {project.stars && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{project.stars}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              {project.live && project.live !== "#" && (
                <Button
                  asChild
                  variant="gradient"
                  size="sm"
                  className="flex-1 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}

              {project.github && project.github !== "#" && (
                <Button
                  asChild
                  variant="glass"
                  size="sm"
                  className="flex-1 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
