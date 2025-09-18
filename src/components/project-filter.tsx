"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  X,
  ChevronDown,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack?: string[]; // <-- optional to avoid crashes
  categories?: string[];
  company?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  status: "completed" | "in-progress" | "planned";
}

interface ProjectFilterProps {
  projects?: Project[]; // optional to prevent crashes
  onFilteredProjects: (projects: Project[]) => void;
  className?: string;
  activeFilter?: string;
}

export const ProjectFilter = ({
  projects = [], // default to empty array
  onFilteredProjects,
  className = "",
  activeFilter = "",
}: ProjectFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const techCategories = useMemo(
    () => [
      {
        id: "all",
        label: "All Projects",
        icon: Globe,
        color: "bg-blue-500/10 text-blue-500",
      },
      {
        id: "frontend",
        label: "Frontend",
        icon: Code,
        color: "bg-green-500/10 text-green-500",
      },
      {
        id: "backend",
        label: "Backend",
        icon: Server,
        color: "bg-orange-500/10 text-orange-500",
      },
      {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        color: "bg-purple-500/10 text-purple-500",
      },
      {
        id: "fullstack",
        label: "Full Stack",
        icon: Zap,
        color: "bg-yellow-500/10 text-yellow-500",
      },
      {
        id: "database",
        label: "Database",
        icon: Database,
        color: "bg-cyan-500/10 text-cyan-500",
      },
    ],
    [],
  );

  const difficultyLevels = useMemo(
    () => [
      { id: "all", label: "All Levels", color: "bg-gray-500/10 text-gray-500" },
      {
        id: "beginner",
        label: "Beginner",
        color: "bg-green-500/10 text-green-500",
      },
      {
        id: "intermediate",
        label: "Intermediate",
        color: "bg-yellow-500/10 text-yellow-500",
      },
      {
        id: "advanced",
        label: "Advanced",
        color: "bg-red-500/10 text-red-500",
      },
    ],
    [],
  );

  const statusOptions = useMemo(
    () => [
      { id: "all", label: "All Status", color: "bg-gray-500/10 text-gray-500" },
      {
        id: "completed",
        label: "Completed",
        color: "bg-green-500/10 text-green-500",
      },
      {
        id: "in-progress",
        label: "In Progress",
        color: "bg-blue-500/10 text-blue-500",
      },
      {
        id: "planned",
        label: "Planned",
        color: "bg-orange-500/10 text-orange-500",
      },
    ],
    [],
  );

  // Get all unique tech stack items safely
  const allTechStack = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.techStack?.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack?.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" ||
        project.categories?.includes(selectedCategory);

      const matchesDifficulty =
        selectedDifficulty === "all" ||
        project.difficulty === selectedDifficulty;

      const matchesStatus =
        selectedStatus === "all" || project.status === selectedStatus;

      const matchesTech =
        selectedTech.length === 0 ||
        selectedTech.some((tech) => project.techStack?.includes(tech));

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesStatus &&
        matchesTech
      );
    });
  }, [
    projects,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedStatus,
    selectedTech,
  ]);

  // Notify parent when filtered projects change
  useEffect(() => {
    onFilteredProjects(filteredProjects);
  }, [filteredProjects, onFilteredProjects]);

  const handleTechToggle = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedStatus("all");
    setSelectedTech([]);
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "all" ||
    selectedDifficulty !== "all" ||
    selectedStatus !== "all" ||
    selectedTech.length > 0;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search */}
      <div className="relative" role="search" aria-label="Project search">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search projects, technologies, or descriptions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search projects"
          className="pl-12 pr-4 py-3 text-lg glass-subtle border-0 focus:glass-strong transition-all duration-300"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3">
        {techCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={
                  selectedCategory === category.id ? "gradient" : "glass"
                }
                size="lg"
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-2xl font-semibold transition-all duration-300",
                  selectedCategory === category.id && "shadow-glow",
                )}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            </motion.div>
          );
        })}
      </div>

      {/* Advanced Filters Toggle */}
      <div
        className="flex items-center justify-between"
        aria-label="Filter controls"
      >
        <Button
          variant="glass"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="rounded-2xl font-semibold"
          aria-expanded={showAdvanced}
          aria-controls="advanced-filters"
        >
          <Filter className="h-4 w-4 mr-2" />
          Advanced Filters
          <ChevronDown
            className={cn(
              "h-4 w-4 ml-2 transition-transform duration-300",
              showAdvanced && "rotate-180",
            )}
          />
        </Button>

        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearFilters}
            className="rounded-2xl font-semibold hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-6 space-y-6"
            id="advanced-filters"
            role="region"
            aria-label="Advanced project filters"
          >
            {/* Difficulty Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text">
                Difficulty Level
              </h3>
              <div className="flex flex-wrap gap-2">
                {difficultyLevels.map((level) => (
                  <Button
                    key={level.id}
                    variant={
                      selectedDifficulty === level.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedDifficulty(level.id)}
                    className="rounded-xl font-medium"
                  >
                    {level.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text-secondary">
                Project Status
              </h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((status) => (
                  <Button
                    key={status.id}
                    variant={
                      selectedStatus === status.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedStatus(status.id)}
                    className="rounded-xl font-medium"
                  >
                    {status.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tech Stack Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTechStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant={
                      selectedTech.includes(tech) ? "default" : "outline"
                    }
                    className={cn(
                      "cursor-pointer transition-all duration-300 hover:scale-105",
                      selectedTech.includes(tech) && "glass-strong shadow-glow",
                    )}
                    onClick={() => handleTechToggle(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-primary">
            {filteredProjects.length}
          </span>{" "}
          of <span className="font-semibold">{projects.length}</span> projects
        </p>
      </motion.div>
    </div>
  );
};
