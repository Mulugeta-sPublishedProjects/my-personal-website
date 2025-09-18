"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  Zap,
  Award,
  Star,
  TrendingUp,
  Clock,
  Target,
  CheckCircle,
  BookOpen,
  Users,
  BarChart3,
  PieChart,
  Activity,
  ChevronRight,
  ChevronLeft,
  Filter,
  Search,
  X,
  SortAsc,
  SortDesc,
  Grid3X3,
  List,
  Eye,
  EyeOff,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
  totalProjects: number;
  averageLevel: number;
  trending: boolean;
  lastUpdated: string;
}

interface Skill {
  id: string;
  name: string;
  level: number;
  experience: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  projects: number;
  trending?: boolean;
  lastUsed?: string;
  popularity?: number;
  learning?: boolean;
  mastered?: boolean;
  category: string;
}

interface SkillCategoriesProps {
  categories: SkillCategory[];
  className?: string;
}

// Category Card Component
const CategoryCard = ({
  category,
  index,
  isExpanded,
  onToggle,
}: {
  category: SkillCategory;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={cn(
          "glass hover:glass-strong rounded-3xl p-6 cursor-pointer transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isExpanded && "glass-strong shadow-glow-lg",
          category.trending && "border-green-500/20"
        )}
        whileHover={reducedMotion ? undefined : { scale: 1.02, y: -5 }}
        whileTap={reducedMotion ? undefined : { scale: 0.98 }}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={`${category.name} category, average level ${category.averageLevel} percent`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={cn("p-3 rounded-2xl glass-strong text-primary")}>
              {category.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold gradient-text mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.skills.length} skills • {category.totalProjects}{" "}
                projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {category.trending && (
              <Badge className="glass-subtle text-green-500 border-green-500/20">
                <TrendingUp className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            )}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {category.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="glass-subtle rounded-xl p-3 text-center">
            <div className="text-2xl font-bold gradient-text mb-1">
              {category.averageLevel}%
            </div>
            <div className="text-xs text-muted-foreground">Avg Level</div>
          </div>
          <div className="glass-subtle rounded-xl p-3 text-center">
            <div className="text-2xl font-bold gradient-text-secondary mb-1">
              {category.totalProjects}
            </div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-semibold text-primary">
              {category.averageLevel}%
            </span>
          </div>
          <div className="w-full bg-muted/20 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-primary to-chart-2"
              initial={{ width: 0 }}
              animate={{ width: `${category.averageLevel}%` }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            />
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Updated {category.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity className="h-3 w-3" />
            <span>Active</span>
          </div>
        </div>
      </motion.div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="glass-subtle rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-semibold gradient-text mb-4">
                Skills in this category
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    className="glass hover:glass-strong rounded-xl p-4 transition-all duration-300"
                    initial={reducedMotion ? undefined : { opacity: 0, x: -20 }}
                    animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={
                      reducedMotion ? undefined : { delay: skillIndex * 0.1 }
                    }
                    whileHover={reducedMotion ? undefined : { scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-lg glass-strong",
                            skill.color
                          )}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm">
                            {skill.name}
                          </h5>
                          <p className="text-xs text-muted-foreground">
                            {skill.experience}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {skill.trending && (
                          <TrendingUp className="h-3 w-3 text-green-500" />
                        )}
                        {skill.learning && (
                          <BookOpen className="h-3 w-3 text-blue-500" />
                        )}
                        {skill.mastered && (
                          <Award className="h-3 w-3 text-yellow-500" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Level</span>
                        <span className="font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-1.5">
                        <motion.div
                          className="h-1.5 rounded-full bg-gradient-to-r from-primary to-chart-2"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            delay: skillIndex * 0.05 + 0.2,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        <span>{skill.projects} projects</span>
                      </div>
                      {skill.popularity && (
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>{skill.popularity}%</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Filter and Sort Controls
const FilterControls = ({
  onFilterChange,
  onSortChange,
  onViewChange,
  viewMode,
  sortBy,
  sortOrder,
}: {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  onViewChange: (view: "grid" | "list") => void;
  viewMode: "grid" | "list";
  sortBy: string;
  sortOrder: "asc" | "desc";
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = [
    { id: "all", label: "All Categories" },
    { id: "trending", label: "Trending" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "database", label: "Database" },
    { id: "ui-ux", label: "UI/UX" },
    { id: "devops", label: "DevOps" },
  ];

  const sortOptions = [
    { id: "name", label: "Name" },
    { id: "level", label: "Average Level" },
    { id: "projects", label: "Project Count" },
    { id: "updated", label: "Last Updated" },
  ];

  return (
    <div className="space-y-4">
      {/* Main Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="glass"
            onClick={() => setShowFilters(!showFilters)}
            className="rounded-2xl"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <div className="flex items-center gap-1 glass-subtle rounded-2xl p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("grid")}
              className="rounded-xl"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("list")}
              className="rounded-xl"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="glass-subtle rounded-2xl px-4 py-2 text-sm border-0 focus:glass-strong transition-all duration-300"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                Sort by {option.label}
              </option>
            ))}
          </select>

          <Button
            variant="glass"
            onClick={() => onSortChange(sortBy)}
            className="rounded-2xl"
          >
            {sortOrder === "asc" ? (
              <SortAsc className="h-4 w-4" />
            ) : (
              <SortDesc className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-subtle rounded-2xl p-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold gradient-text">
                Filter Categories
              </h3>

              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    size="sm"
                    onClick={() => onFilterChange(option.id)}
                    className="rounded-xl"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Skill Categories Component
export const SkillCategories = ({
  categories,
  className = "",
}: SkillCategoriesProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort categories
  const filteredCategories = categories
    .filter((category) => {
      if (filter === "all") return true;
      if (filter === "trending") return category.trending;
      return category.id === filter;
    })
    .filter(
      (category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "level":
          comparison = a.averageLevel - b.averageLevel;
          break;
        case "projects":
          comparison = a.totalProjects - b.totalProjects;
          break;
        case "updated":
          comparison =
            new Date(a.lastUpdated).getTime() -
            new Date(b.lastUpdated).getTime();
          break;
        default:
          comparison = 0;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

  const handleCategoryToggle = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleSortChange = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setSortOrder("asc");
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Skill Categories
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my expertise organized by technology categories and skill
          levels
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 glass-subtle rounded-2xl border-0 focus:glass-strong transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Controls */}
      <FilterControls
        onFilterChange={setFilter}
        onSortChange={handleSortChange}
        onViewChange={setViewMode}
        viewMode={viewMode}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />

      {/* Categories */}
      <div
        className={cn(
          "space-y-6",
          viewMode === "grid" && "grid grid-cols-1 md:grid-cols-2 gap-6"
        )}
      >
        {filteredCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            index={index}
            isExpanded={expandedCategory === category.id}
            onToggle={() => handleCategoryToggle(category.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="glass-subtle rounded-3xl p-12 max-w-md mx-auto">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No categories found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
