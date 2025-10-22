"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Info } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import { ProjectModal } from "@/components/project-modal";
import { projects, type Project } from "@/lib/projects-data";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const readyProjects = projects.filter((p) => p.isReadyForView);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          role="list"
          aria-label="Project list"
        >
          {readyProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col h-full hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              role="listitem"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <OptimizedImage
                  src={project.image.replace("/public/", "/")}
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary">Featured</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.company}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-2">
                  {project.live && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 text-xs sm:text-sm"
                      aria-label={`View live version of ${project.title}`}
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        <span className="hidden xs:inline">Live</span>
                        <span className="xs:hidden">View</span>
                      </a>
                    </Button>
                  )}

                  <button
                    onClick={() => handleViewDetails(project)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex-1 text-xs sm:text-sm"
                    aria-label={`View details of ${project.title}`}
                  >
                    <Info className="h-3 w-3 mr-1" />
                    <span className="hidden xs:inline">Details</span>
                    <span className="xs:hidden">Info</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
