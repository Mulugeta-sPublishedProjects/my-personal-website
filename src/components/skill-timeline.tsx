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
  BookOpen,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
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
  Download,
  Share2,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  Zap,
  BarChart3,
  PieChart,
  Activity,
  Users,
  Bookmark,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LearningMilestone {
  id: string;
  title: string;
  description: string;
  date: string;
  type:
    | "course"
    | "project"
    | "certification"
    | "conference"
    | "book"
    | "tutorial"
    | "practice";
  category: string;
  skill: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  duration?: string;
  hours?: number;
  progress: number; // 0-100
  status: "completed" | "in-progress" | "planned" | "paused";
  source?: string;
  instructor?: string;
  rating?: number;
  difficulty: "easy" | "medium" | "hard" | "expert";
  skills: string[];
  projects?: number;
  achievements?: string[];
  notes?: string;
  featured?: boolean;
  trending?: boolean;
  recent?: boolean;
}

interface SkillTimelineProps {
  milestones: LearningMilestone[];
  className?: string;
}

// Timeline Item Component
const TimelineItem = ({
  milestone,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  milestone: LearningMilestone;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 2000);
      },
      10000 + index * 1000,
    );

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-4 w-4" />;
      case "project":
        return <Code className="h-4 w-4" />;
      case "certification":
        return <Award className="h-4 w-4" />;
      case "conference":
        return <Users className="h-4 w-4" />;
      case "book":
        return <BookOpen className="h-4 w-4" />;
      case "tutorial":
        return <Play className="h-4 w-4" />;
      case "practice":
        return <Target className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "course":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "project":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "certification":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "conference":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "book":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "tutorial":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      case "practice":
        return "bg-pink-500/10 text-pink-500 border-pink-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500";
      case "planned":
        return "bg-orange-500/10 text-orange-500";
      case "paused":
        return "bg-gray-500/10 text-gray-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/10 text-green-500";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500";
      case "hard":
        return "bg-orange-500/10 text-orange-500";
      case "expert":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <motion.div
      className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      role="button"
      tabIndex={0}
      aria-label={`${milestone.title} ${milestone.type} ${milestone.status}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onHover();
        }
      }}
    >
      <motion.div
        className={cn(
          "glass hover:glass-strong rounded-2xl p-6 transition-all duration-500",
          isHovered && "shadow-glow-lg scale-105",
          milestone.featured && "border-yellow-500/20",
          milestone.trending && "border-green-500/20",
          milestone.recent && "border-blue-500/20",
        )}
        animate={
          reducedMotion ? undefined : { y: isAnimating ? [-2, 2, -2] : 0 }
        }
        transition={
          reducedMotion ? undefined : { duration: 2, ease: "easeInOut" }
        }
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "p-3 rounded-xl glass-strong",
                getTypeColor(milestone.type),
              )}
            >
              {getTypeIcon(milestone.type)}
            </div>
            <div>
              <h3 className="text-lg font-bold gradient-text mb-1 line-clamp-1">
                {milestone.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {milestone.skill} • {milestone.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {milestone.featured && (
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
            )}
            {milestone.trending && (
              <TrendingUp className="h-4 w-4 text-green-500" />
            )}
            {milestone.recent && <Clock className="h-4 w-4 text-blue-500" />}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {milestone.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="glass-subtle rounded-xl p-3 text-center">
            <div className="text-lg font-bold gradient-text mb-1">
              {milestone.level.toUpperCase()}
            </div>
            <div className="text-xs text-muted-foreground">Level</div>
          </div>
          <div className="glass-subtle rounded-xl p-3 text-center">
            <div className="text-lg font-bold gradient-text-secondary mb-1">
              {milestone.progress}%
            </div>
            <div className="text-xs text-muted-foreground">Progress</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-primary">
              {milestone.progress}%
            </span>
          </div>
          <div className="w-full bg-muted/20 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-primary to-chart-2"
              initial={{ width: 0 }}
              animate={{ width: `${milestone.progress}%` }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            />
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={cn("text-xs", getStatusColor(milestone.status))}>
            {milestone.status.replace("-", " ").toUpperCase()}
          </Badge>
          <Badge
            className={cn("text-xs", getDifficultyColor(milestone.difficulty))}
          >
            {milestone.difficulty.toUpperCase()}
          </Badge>
          <Badge variant="outline" className="text-xs glass-subtle">
            {milestone.type.toUpperCase()}
          </Badge>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{milestone.date}</span>
          </div>
          {milestone.duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{milestone.duration}</span>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 glass-strong rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="h-full flex flex-col justify-center text-center space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-lg gradient-text">
                {milestone.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {milestone.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {milestone.hours && (
                <div className="glass-subtle rounded-xl p-3">
                  <div className="text-lg font-bold gradient-text">
                    {milestone.hours}h
                  </div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
              )}
              {milestone.projects && (
                <div className="glass-subtle rounded-xl p-3">
                  <div className="text-lg font-bold gradient-text">
                    {milestone.projects}
                  </div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              )}
              {milestone.rating && (
                <div className="glass-subtle rounded-xl p-3">
                  <div className="text-lg font-bold gradient-text">
                    {milestone.rating}/5
                  </div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {milestone.source && (
                <Button
                  variant="glass"
                  size="sm"
                  className="flex-1 rounded-xl"
                  onClick={() => window.open(milestone.source, "_blank")}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View
                </Button>
              )}
              <Button variant="glass" size="sm" className="flex-1 rounded-xl">
                <Share2 className="h-3 w-3 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Timeline Component
const Timeline = ({ milestones }: { milestones: LearningMilestone[] }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group milestones by year
  const milestonesByYear = milestones.reduce(
    (acc, milestone) => {
      const year = new Date(milestone.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(milestone);
      return acc;
    },
    {} as Record<string, LearningMilestone[]>,
  );

  const years = Object.keys(milestonesByYear).sort((a, b) =>
    b.localeCompare(a),
  );

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % milestones.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, milestones.length]);

  return (
    <div className="space-y-8">
      {/* Year Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedYear === null ? "default" : "outline"}
          onClick={() => setSelectedYear(null)}
          className="rounded-xl"
        >
          All Years
        </Button>
        {years.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            onClick={() => setSelectedYear(year)}
            className="rounded-xl"
          >
            {year}
          </Button>
        ))}
      </div>

      {/* Auto-play Controls */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="glass"
          onClick={() => setIsPlaying(!isPlaying)}
          className="rounded-xl"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 mr-2" />
          ) : (
            <Play className="h-4 w-4 mr-2" />
          )}
          {isPlaying ? "Pause" : "Play"} Timeline
        </Button>
        <Button
          variant="glass"
          onClick={() => setCurrentIndex(0)}
          className="rounded-xl"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-chart-3" />

        {years.map((year) => {
          const yearMilestones = milestonesByYear[year];
          if (selectedYear && selectedYear !== year) return null;

          return (
            <motion.div
              key={year}
              className="relative mb-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 glass-strong rounded-full flex items-center justify-center font-bold text-lg gradient-text">
                  {year}
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">
                    {yearMilestones.length} Learning Milestones
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      yearMilestones.filter((m) => m.status === "completed")
                        .length
                    }{" "}
                    completed
                  </p>
                </div>
              </div>

              {/* Milestones Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-20">
                {yearMilestones.map((milestone, index) => (
                  <TimelineItem
                    key={milestone.id}
                    milestone={milestone}
                    index={index}
                    isHovered={false}
                    onHover={() => {}}
                    onLeave={() => {}}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
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
  onViewChange: (view: "grid" | "timeline") => void;
  viewMode: "grid" | "timeline";
  sortBy: string;
  sortOrder: "asc" | "desc";
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = [
    { id: "all", label: "All Milestones" },
    { id: "featured", label: "Featured" },
    { id: "recent", label: "Recent" },
    { id: "completed", label: "Completed" },
    { id: "in-progress", label: "In Progress" },
    { id: "planned", label: "Planned" },
    { id: "course", label: "Courses" },
    { id: "project", label: "Projects" },
    { id: "certification", label: "Certifications" },
  ];

  const sortOptions = [
    { id: "date", label: "Date" },
    { id: "title", label: "Title" },
    { id: "progress", label: "Progress" },
    { id: "level", label: "Level" },
    { id: "type", label: "Type" },
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
              variant={viewMode === "timeline" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("timeline")}
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
                Filter Milestones
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

// Main Skill Timeline Component
export const SkillTimeline = ({
  milestones,
  className = "",
}: SkillTimelineProps) => {
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("timeline");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort milestones
  const filteredMilestones = milestones
    .filter((milestone) => {
      if (filter === "all") return true;
      if (filter === "featured") return milestone.featured;
      if (filter === "recent") return milestone.recent;
      if (filter === "completed") return milestone.status === "completed";
      if (filter === "in-progress") return milestone.status === "in-progress";
      if (filter === "planned") return milestone.status === "planned";
      return milestone.type === filter;
    })
    .filter(
      (milestone) =>
        milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        milestone.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        milestone.skill.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case "progress":
          comparison = a.progress - b.progress;
          break;
        case "level":
          const levelOrder = {
            beginner: 1,
            intermediate: 2,
            advanced: 3,
            expert: 4,
          };
          comparison = levelOrder[a.level] - levelOrder[b.level];
          break;
        case "type":
          comparison = a.type.localeCompare(b.type);
          break;
        default:
          comparison = 0;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

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
          Learning Timeline
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Track my learning journey and skill development over time
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search milestones..."
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

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMilestones.map((milestone, index) => (
                <TimelineItem
                  key={milestone.id}
                  milestone={milestone}
                  index={index}
                  isHovered={hoveredMilestone === milestone.id}
                  onHover={() => setHoveredMilestone(milestone.id)}
                  onLeave={() => setHoveredMilestone(null)}
                />
              ))}
            </div>
          ) : (
            <Timeline milestones={filteredMilestones} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredMilestones.length === 0 && (
        <div className="text-center py-12">
          <div className="glass-subtle rounded-3xl p-12 max-w-md mx-auto">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No milestones found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
