"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Project } from "@/lib/projects-data";
import { SEO } from "@/components/seo";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    {children}
  </div>
);

const ProjectList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <span className="text-primary mt-1">•</span>
        <span className="text-muted-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

const MetadataRow = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
    <span>{project.difficulty}</span>
    <span>•</span>
    <span>{project.duration}</span>
    {project.teamSize && (
      <>
        <span>•</span>
        <span>{project.teamSize} team members</span>
      </>
    )}
  </div>
);

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (open) {
      // Reset image states when modal opens
      setImageLoading(true);
      setImageError(false);
    }
  }, [open]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const getImagePath = (imagePath: string) => {
    // Handle both relative and absolute paths
    if (imagePath.startsWith("/")) {
      return imagePath;
    }
    return `/${imagePath}`;
  };

  if (!project) return null;

  const shouldShowCaseStudy =
    project.caseStudy && Object.values(project.caseStudy).some(Boolean);
  const caseStudySections = project.caseStudy
    ? [
        {
          key: "overview",
          label: "Overview",
          content: project.caseStudy.overview,
        },
        {
          key: "research",
          label: "Research",
          content: project.caseStudy.research,
        },
        { key: "design", label: "Design", content: project.caseStudy.design },
        {
          key: "development",
          label: "Development",
          content: project.caseStudy.development,
        },
        {
          key: "testing",
          label: "Testing",
          content: project.caseStudy.testing,
        },
        {
          key: "deployment",
          label: "Deployment",
          content: project.caseStudy.deployment,
        },
      ].filter((section) => section.content)
    : [];

  return (
    <>
      <SEO
        title={`${project.title} - Mulugeta Adamu Portfolio`}
        description={project.description}
        image={project.image}
      />
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg">
          <DialogHeader className="border-b pb-4">
            <div>
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
            </div>
          </DialogHeader>

          <div className="space-y-6 py-4">
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

                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                )}
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
                    <div key={section.key}>
                      <h4 className="font-medium text-foreground mb-2">
                        {section.label}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
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
                  <div key={tech}>
                    <Badge
                      variant="secondary"
                      className="text-sm py-1.5 px-3 font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </div>
                ))}
              </div>
            </ProjectSection>

            {/* Categories */}
            <ProjectSection title="Categories">
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category: string, index: number) => (
                  <div key={category}>
                    <Badge
                      variant="outline"
                      className="text-sm py-1.5 px-3 capitalize hover:bg-accent transition-colors"
                    >
                      {category}
                    </Badge>
                  </div>
                ))}
              </div>
            </ProjectSection>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
              {project.live && (
                <Button size="lg" asChild className="flex-1 min-w-0">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live version of ${project.title}`}
                  >
                    View Live Project
                  </a>
                </Button>
              )}
              <Button
                size="lg"
                variant={project.live ? "outline" : "default"}
                onClick={() => onOpenChange(false)}
                className="flex-1 min-w-0"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
