"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
import { Github, Eye, Info } from "lucide-react";
import Image from "next/image";
import { ProjectModal } from "@/components/project-modal";
import { projects, type Project } from "@/lib/projects-data";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>();
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const displayProjects = [...featuredProjects, ...otherProjects];

  return (
    <section id="projects" className="py-24 sm:py-32" ref={ref}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Enterprise-grade systems delivering real impact to millions of users
            across Ethiopia
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="group h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleViewDetails(project)}
                        className="backdrop-blur-sm"
                      >
                        <Info className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.company}
                      {project.role && ` • ${project.role}`}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs capitalize">
                        {project.status.replace("-", " ")}
                      </Badge>
                      <Badge variant="secondary" className="text-xs capitalize">
                        {project.difficulty}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto pt-4">
                      {project.live && (
                        <Button
                          size="sm"
                          variant="default"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="h-3.5 w-3.5 mr-1.5" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-3.5 w-3.5 mr-1.5" />
                            Code
                          </a>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleViewDetails(project)}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
