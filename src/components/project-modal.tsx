"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { motion, easeOut } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";
import { type Project } from "@/lib/projects-data";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Lightweight section component
const ProjectSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
      {title}
    </h3>
    {children}
  </div>
);

// Lightweight list component
const ProjectList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm md:text-base">
        <span className="text-primary mt-1.5">●</span>
        <span className="text-foreground leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const MetadataRow = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-foreground">
    <span>{project.difficulty}</span>
    <span className="text-primary">•</span>
    <span>{project.duration}</span>
    {project.teamSize && (
      <>
        <span className="text-primary">•</span>
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
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (open) {
      setImageError(false);
    }
  }, [open]);

  const handleImageError = () => {
    setImageError(true);
  };

  const getImagePath = (imagePath: string) => {
    return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card/95 backdrop-blur-sm border-none shadow-xl p-0">
          <div className="space-y-6 p-6 sm:p-8">
            <DialogHeader className="border-b border-muted/20 pb-4">
              <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-sm md:text-base mt-2 flex flex-wrap items-center gap-3 text-foreground">
                <span className="font-medium text-foreground">
                  {project.company}
                </span>
                {project.role && (
                  <>
                    <span className="text-primary">•</span>
                    <span>{project.role}</span>
                  </>
                )}
              </DialogDescription>
            </DialogHeader>

            {/* Project Image */}
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src={
                  imageError
                    ? "/images/project-fallback.webp"
                    : getImagePath(project.image)
                }
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
                onError={handleImageError}
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                <MetadataRow project={project} />
              </div>
            </div>

            {/* Description */}
            <div className="bg-muted/10 p-4 sm:p-5 rounded-xl border border-muted/20">
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <ProjectSection title="The Challenge">
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {project.problemStatement}
                </p>
              </ProjectSection>
            )}

            {/* My Role */}
            {project.role && (
              <ProjectSection title="My Role">
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  As the{" "}
                  <span className="text-foreground font-medium">
                    {project.role}
                  </span>
                  {project.teamSize
                    ? `, I collaborated with a team of ${project.teamSize} to `
                    : ", I was responsible for "}
                  design and develop solutions that addressed core challenges
                  and delivered measurable results.
                </p>
              </ProjectSection>
            )}

            {/* Case Study */}
            {shouldShowCaseStudy && (
              <ProjectSection title="Approach & Solution">
                <div className="space-y-5">
                  {caseStudySections.map((section) => (
                    <div key={section.key}>
                      <h4 className="font-medium text-foreground text-base md:text-lg mb-2">
                        {section.label}
                      </h4>
                      <p className="text-sm md:text-base text-foreground leading-relaxed">
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
                <p className="text-sm md:text-base text-foreground leading-relaxed">
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
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm py-1.5 px-3 font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </ProjectSection>

            {/* Categories */}
            <ProjectSection title="Categories">
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="text-sm py-1.5 px-3 capitalize border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </ProjectSection>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-muted/20">
              {project.live && (
                <Button
                  size="lg"
                  asChild
                  className="flex-1 min-w-0 bg-primary/90 hover:bg-primary text-primary-foreground"
                  aria-label={`View live version of ${project.title}`}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                  </a>
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1 min-w-0 border-primary/20 hover:bg-primary/10"
                aria-label="Close project modal"
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
