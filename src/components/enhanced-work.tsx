"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

const FALLBACK_IMAGE = "/person.webp";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeIn" } },
  hover: { scale: 1.05, y: -6, transition: { duration: 0.3, ease: "easeOut" } },
};

// Added "all" tab
const tabs = ["all", "fullstack", "frontend", "backend", "bot", "ai"];
const tabLabels: Record<string, string> = {
  all: "All",
  fullstack: "Fullstack",
  frontend: "Frontend",
  backend: "Backend",
  bot: "Bots",
  ai: "AI/ML",
};

export default function FancyProjectTabs() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) =>
    setImgErrors((prev) => ({ ...prev, [id]: true }));

  // Improved filtering logic
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    
    // Ensure categories exist and are properly formatted
    const categories = project.categories || [];
    return categories.some(
      (cat) => cat.toLowerCase().trim() === activeTab.toLowerCase().trim()
    );
  });

  // Always show something — fallback to first 6 if filter returns empty
  const displayProjects = filteredProjects.length > 0 
    ? filteredProjects 
    : projects.slice(0, 6);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="py-24 relative" id="work-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm inline-flex items-center gap-2">
              Portfolio Showcase
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              My Recent Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my latest projects by category, crafted with modern technologies and elegant design.
            </p>
          </motion.div>

          {/* Enhanced Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-2 bg-muted/50 rounded-2xl backdrop-blur-sm border border-border/50">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "ghost"}
                  size="sm"
                  className={`
                    relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300
                    ${activeTab === tab 
                      ? "bg-background shadow-lg shadow-primary/20 text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    }
                  `}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabLabels[tab]}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/5 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Project Grid */}
          <motion.div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mb-16">
            <AnimatePresence mode="wait">
              {projects?.length === 0 ? (
                <motion.div
                  key="no-projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full text-center py-16"
                >
                  <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
                  <p className="text-muted-foreground">Try selecting another category.</p>
                </motion.div>
              ) : (
                projects?.map((project) => (
                  <motion.div
                    key={project.id || project.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover="hover"
                    className="group"
                    layout
                  >
                    <div className="relative bg-card border border-primary/10 rounded-2xl p-6 flex flex-col h-full shadow-xl backdrop-blur-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                      <div className="relative h-52 w-full rounded-xl overflow-hidden mb-4">
                        <Image
                          src={
                            imgErrors[project.id || project.title]
                              ? FALLBACK_IMAGE
                              : project.image || FALLBACK_IMAGE
                          }
                          alt={project.title || "Untitled Project"}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={() => handleImageError(project.id || project.title)}
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                          {(project.categories || []).slice(0, 2).map((cat) => (
                            <Badge key={cat} variant="secondary" className="text-xs capitalize">
                              {cat}
                            </Badge>
                          ))}
                          {project.categories && project.categories.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.categories.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <h4 className="text-lg font-bold mb-2">{project.title || "Untitled Project"}</h4>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {project.description || "No description available."}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {(project.techStack || []).slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack && project.techStack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <Badge variant="outline" className="capitalize">
                          {project.status || "Unknown"}
                        </Badge>
                        <div className="flex gap-2">
                          {project.live && (
                            <Button asChild variant="ghost" size="sm">
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.github && (
                            <Button asChild variant="ghost" size="sm">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}