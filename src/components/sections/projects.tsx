"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Info } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import OptimizedImage from "@/components/ui/optimized-image";
import { ProjectModal } from "@/components/project-modal";
import { projects, type Project } from "@/lib/projects-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

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
      className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/10"
      aria-labelledby="projects-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            My Projects
          </h2>
          <p className="text-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
            Real-world applications crafted with modern technologies and
            innovative design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          role="list"
          aria-label="Project list"
        >
          {readyProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              role="listitem"
            >
              <Card className="group flex flex-col h-full border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    quality={85} // Increased quality for better project images
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 text-primary-foreground font-medium">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardHeader className="pb-3 px-5 pt-5">
                  <CardTitle className="text-lg md:text-xl font-semibold leading-tight text-foreground">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm md:text-base text-primary font-medium">
                    {project.company}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-4 pt-0 px-5 pb-5">
                  <p className="text-sm md:text-base text-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs md:text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs md:text-sm bg-primary/10 text-primary"
                      >
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 mt-auto">
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground text-sm md:text-base"
                        aria-label={`View live version of ${project.title}`}
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-2"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="hidden sm:inline">Live</span>
                        </a>
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleViewDetails(project)}
                      className="flex-1 border border-primary/20 hover:bg-primary/10 hover:text-foreground text-sm md:text-base"
                      aria-label={`View details of ${project.title}`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Info className="h-4 w-4" />
                        <span className="hidden sm:inline hover:text-primary-foreground">
                          Details
                        </span>
                        <span className="sm:hidden">Info</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
