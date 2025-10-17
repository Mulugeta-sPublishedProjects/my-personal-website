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
    <section id="projects" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readyProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col h-full hover:shadow-lg transition-shadow"
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
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-2">
                  {project.live && (
                    <Button size="sm" asChild className="flex-1 text-xs">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleViewDetails(project)}
                    className="flex-1 text-xs"
                  >
                    <Info className="h-3 w-3 mr-1" />
                    Details
                  </Button>
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
