"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Eye,
  Calendar,
  Users,
  Award,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects-data";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/seo";
import { cn } from "@/lib/utils";

interface CaseStudy {
  overview?: string;
  research?: string;
  design?: string;
  development?: string;
  impact?: string;
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Helper function for image paths
const getImagePath = (imagePath: string): string => {
  if (!imagePath) return "/images/project-fallback.webp";
  return imagePath.startsWith("/public/")
    ? imagePath.replace("/public/", "/")
    : imagePath;
};

// Reusable section component
const ProjectSection = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("space-y-3", className)}>
    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    {children}
  </div>
);

// List component for features/highlights
const ProjectList = ({ items }: { items: string[] }) => (
  <ul className="grid sm:grid-cols-2 gap-3">
    {items.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="flex items-start gap-3 text-sm group"
      >
        <span className="text-primary mt-0.5 flex-shrink-0 w-2 h-2 bg-primary rounded-full group-hover:scale-110 transition-transform" />
        <span className="text-muted-foreground leading-relaxed">{item}</span>
      </motion.li>
    ))}
  </ul>
);

// Metadata row component
const MetadataRow = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
    <div className="flex items-center gap-1.5">
      <Calendar className="h-3.5 w-3.5" />
      <span>{project.duration}</span>
    </div>
    {project.teamSize && (
      <div className="flex items-center gap-1.5">
        <Users className="h-3.5 w-3.5" />
        <span>Team of {project.teamSize}</span>
      </div>
    )}
    <div className="flex items-center gap-1.5">
      <Award className="h-3.5 w-3.5" />
      <span className="capitalize">{project.difficulty}</span>
    </div>
  </div>
);

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  if (!project) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg">
          <div className="p-8 text-center">
            <p className="text-muted-foreground">
              Project information not available.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const shouldShowCaseStudy =
    project.caseStudy &&
    (project.caseStudy.overview ||
      project.caseStudy.research ||
      project.caseStudy.design ||
      project.caseStudy.development);

  const caseStudySections = [
    {
      key: "overview",
      label: "Overview",
      content: project.caseStudy?.overview,
    },
    {
      key: "research",
      label: "Research",
      content: project.caseStudy?.research,
    },
    { key: "design", label: "Design", content: project.caseStudy?.design },
    {
      key: "development",
      label: "Development",
      content: project.caseStudy?.development,
    },
  ].filter((section) => section.content);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <>
      <SEO
        title={`${project.title} - Project Details`}
        description={project.description}
        keywords={[...project.techStack, ...project.categories].join(", ")}
        image={getImagePath(project.image)}
        type="article"
      />

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg">
          <DialogHeader className="border-b pb-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DialogTitle className="text-2xl font-bold tracking-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base mt-2 flex items-center gap-2">
                <span>{project.company}</span>
                {project.role && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span>{project.role}</span>
                  </>
                )}
              </DialogDescription>
            </motion.div>
          </DialogHeader>

          <motion.div
            className="space-y-6 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border">
              <div className="relative w-full h-full">
                <Image
                  src={
                    imageError
                      ? "/images/project-fallback.webp"
                      : getImagePath(project.image)
                  }
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    "object-cover transition-all duration-500",
                    imageLoading ? "blur-sm scale-105" : "blur-0 scale-100"
                  )}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  priority
                />

                <AnimatePresence>
                  {imageLoading && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-muted/50"
                    >
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-4">
                <MetadataRow project={project} />
              </div>
            </div>

            {/* Description */}
            <div className="bg-muted/20 p-4 rounded-lg border">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <ProjectSection title="The Challenge">
                <p className="text-muted-foreground leading-relaxed">
                  {project.problemStatement}
                </p>
              </ProjectSection>
            )}

            {/* My Role */}
            {project.role && (
              <ProjectSection title="My Role">
                <p className="text-muted-foreground leading-relaxed">
                  As the{" "}
                  <span className="text-foreground font-medium">
                    {project.role}
                  </span>
                  {project.teamSize
                    ? `, I collaborated with a team of ${project.teamSize} to `
                    : ", I was responsible for "}
                  design and develop solutions that addressed the core
                  challenges and delivered measurable results.
                </p>
              </ProjectSection>
            )}

            {/* Case Study */}
            {shouldShowCaseStudy && (
              <ProjectSection title="Approach & Solution">
                <div className="space-y-4">
                  {caseStudySections.map((section, index) => (
                    <motion.div
                      key={section.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h4 className="font-medium text-foreground mb-2">
                        {section.label}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ProjectSection>
            )}

            {/* Impact */}
            {project.caseStudy?.impact && (
              <ProjectSection title="Results & Impact">
                <p className="text-muted-foreground leading-relaxed">
                  {project.caseStudy.impact}
                </p>
              </ProjectSection>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <ProjectSection title="Key Highlights">
                <ProjectList items={project.highlights} />
              </ProjectSection>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <ProjectSection title="Key Features">
                <ProjectList items={project.features} />
              </ProjectSection>
            )}

            {/* Tech Stack */}
            <ProjectSection title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, index: number) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm py-1.5 px-3 font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </ProjectSection>

            {/* Categories */}
            <ProjectSection title="Categories">
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category: string, index: number) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-sm py-1.5 px-3 capitalize hover:bg-accent transition-colors"
                    >
                      {category}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </ProjectSection>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-6 border-t"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {project.live && (
                <Button size="lg" asChild className="flex-1 min-w-0">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Eye className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">View Live Project</span>
                  </a>
                </Button>
              )}

              {project.caseStudy && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="flex-1 min-w-0"
                >
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">View Case Study</span>
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
