"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";
import { Badge } from "./ui/badge";

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "featured", label: "Featured" },
];

// Moved to outer scope for unicorn/consistent-function-scoping
const getStatusConfig = (status: string) => {
  switch (status) {
    case "completed": {
      return { color: "bg-accent/20 text-accent", label: "Live" };
    }
    case "in-progress": {
      return { color: "bg-primary/20 text-primary", label: "In Progress" };
    }
    case "planned": {
      return { color: "bg-muted/20 text-muted-foreground", label: "Planned" };
    }
    default: {
      return { color: "bg-muted/20 text-muted-foreground", label: status };
    }
  }
};

export default function Work() {
  const [activeTab, setActiveTab] = useState("all");

  const getHandleTabClick = useCallback((tabId: string) => {
    return () => setActiveTab(tabId);
  }, []);

  const handleStopPropagation = useCallback((event_: React.MouseEvent) => {
    event_.stopPropagation();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projects;
    if (activeTab === "featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.categories?.includes(activeTab));
  }, [activeTab]);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background" id="work">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-3 w-3" />
            <span className="text-xs font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projects & Innovations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From government digital transformation to AI-powered solutions -
            building the future one project at a time
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div
            className="inline-flex flex-wrap justify-center gap-1.5 p-1 bg-muted rounded-xl"
            role="tablist"
            aria-label="Project categories"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={getHandleTabClick(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);

            return (
              <article
                key={project.id}
                className="group"
                aria-labelledby={`project-title-${project.id}`}
              >
                <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                          onClick={handleStopPropagation}
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                          onClick={handleStopPropagation}
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}
                        aria-label={`Project status: ${statusConfig.label}`}
                      >
                        {statusConfig.label}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium flex items-center gap-1">
                          <Sparkles
                            className="h-2.5 w-2.5"
                            aria-hidden="true"
                          />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3
                        id={`project-title-${project.id}`}
                        className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2"
                      >
                        {project.title}
                      </h3>

                      {/* Role & Company */}
                      {(project.role || project.company) && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          {project.role && (
                            <span className="font-medium">{project.role}</span>
                          )}
                          {project.role && project.company && <span>•</span>}
                          {project.company && <span>at {project.company}</span>}
                        </div>
                      )}

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack?.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack && project.techStack.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-foreground text-xs rounded-full">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {project.categories?.map((category, categoryIndex) => (
                        <Badge
                          key={categoryIndex}
                          variant="outline"
                          className="text-xs rounded-full px-2.5 py-0.5"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
