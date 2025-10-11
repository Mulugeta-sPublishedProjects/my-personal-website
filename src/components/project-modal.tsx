"use client";

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
  Github,
  Eye,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects-data";
import { useState, type AwaitedReactNode, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";

interface ProjectModalProps {
  project:any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  if (project === null) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pr-8">
            {project?.title}
          </DialogTitle>
          <DialogDescription className="text-base flex items-center gap-2 flex-wrap">
            {project?.company && <span>{project?.company}</span>}
            {project?.role && (
              <>
                <span>•</span>
                <span>{project?.role}</span>
              </>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src={project?.image || "/placeholder.svg"}
              alt={project?.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4">
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{project?.duration}</span>
                </div>
                {project?.teamSize && (
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>Team of {project.teamSize}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" />
                  <span className="capitalize">{project?.difficulty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {project?.description}
            </p>
          </div>

          {project?.problemStatement && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Problem Statement
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-3.5">
                {project?.problemStatement}
              </p>
            </div>
          )}

          {project?.caseStudy && (
            <div className="grid gap-4">
              {project?.caseStudy?.overview && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-3.5">
                    {project.caseStudy.overview}
                  </p>
                </div>
              )}

              {project.caseStudy.research && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Research
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-3.5">
                    {project.caseStudy.research}
                  </p>
                </div>
              )}

              {project?.caseStudy?.design && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Design
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-3.5">
                    {project?.caseStudy?.design}
                  </p>
                </div>
              )}

              {project?.caseStudy?.development && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-3.5">
                    {project.caseStudy.development}
                  </p>
                </div>
              )}

              {project.caseStudy.impact && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    Impact
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed pl-3.5">
                    {project.caseStudy.impact}
                  </p>
                </div>
              )}
            </div>
          )}

          {project?.highlights && project?.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Key Highlights</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project?.highlights?.map((highlight: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">★</span>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          {project?.features && project?.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project?.techStack?.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {project?.categories?.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="text-sm capitalize"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {project?.live && (
              <Button size="lg" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
            {project?.github && (
              <Button size="lg" variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {project?.caseStudy && (
              <Button size="lg" variant="outline" asChild>
                <a href="#" onClick={(event_) => event_.preventDefault()}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Case Study
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
