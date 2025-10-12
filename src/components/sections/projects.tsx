"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Info } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import { ProjectModal } from "@/components/project-modal";
import { projects, type Project } from "@/lib/projects-data";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Filter projects to only show those ready for view
  const readyProjects = projects.filter((p) => p.isReadyForView);
  const featuredProjects = readyProjects.filter((p) => p.featured);
  const otherProjects = readyProjects.filter((p) => !p.featured);
  const displayProjects = [...featuredProjects, ...otherProjects];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32"
      ref={ref}
      aria-labelledby="projects-heading"
    >
      <div className="container max-w-6xl mx-auto px-6 sm:px-2 lg:px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 text-center 
           bg-clip-text text-foreground text-responsive-3xl"
          >
            Featured Work
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-responsive-lg">
            Enterprise‑grade systems delivering real impact to millions of users
            across Ethiopia
          </p>
          {/* Projects Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
            role="list"
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{ y: -6 }}
                role="listitem"
              >
                <Card className="group h-full flex flex-col hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm touch-manipulation">
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <OptimizedImage
                      src={
                        project.image.startsWith("/public/")
                          ? project.image.replace("/public/", "/")
                          : project.image
                      }
                      alt={`${project.title} - ${project.description}`}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="default"
                          className="bg-primary/90 backdrop-blur-sm"
                        >
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleViewDetails(project)}
                        className="backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow touch-manipulation text-responsive-sm"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        More View
                      </Button>
                    </div>
                  </div>

                  {/* Project Header */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 text-responsive-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-responsive-base">
                      {project.company}
                      {project.role && ` • ${project.role}`}
                    </CardDescription>
                  </CardHeader>

                  {/* Project Content */}
                  <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-3 text-responsive-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs text-responsive-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs text-responsive-sm"
                        >
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-4">
                      {project.live && (
                        <Button
                          size="sm"
                          variant="default"
                          className="flex-1 touch-manipulation text-responsive-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                          asChild
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <Eye className="h-3.5 w-3.5 mr-1.5" />
                            Live
                          </a>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewDetails(project)}
                        aria-label={`View details for ${project.title}`}
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation text-responsive-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        More View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
