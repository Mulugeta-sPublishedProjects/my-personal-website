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
  Award,
  Star,
  Trophy,
  Medal,
  Certificate,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Clock,
  Calendar,
  ExternalLink,
  Download,
  Share2,
  Eye,
  EyeOff,
  ChevronRight,
  ChevronLeft,
  Filter,
  Search,
  X,
  SortAsc,
  SortDesc,
  Grid3X3,
  List,
  CheckCircle,
  Zap,
  Globe,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  type: "certification" | "award" | "badge" | "milestone" | "project";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
  icon: React.ReactNode;
  color: string;
  verificationUrl?: string;
  credentialId?: string;
  skills: string[];
  projects?: number;
  hours?: number;
  score?: number;
  maxScore?: number;
  featured?: boolean;
  trending?: boolean;
  recent?: boolean;
}

interface SkillAchievementsProps {
  achievements: Achievement[];
  className?: string;
}

// Achievement Card Component
const AchievementCard = ({
  achievement,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  achievement: Achievement;
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
      8000 + index * 1000,
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "advanced":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "expert":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "certification":
        return <Certificate className="h-4 w-4" />;
      case "award":
        return <Trophy className="h-4 w-4" />;
      case "badge":
        return <Medal className="h-4 w-4" />;
      case "milestone":
        return <Target className="h-4 w-4" />;
      case "project":
        return <Code className="h-4 w-4" />;
      default:
        return <Award className="h-4 w-4" />;
    }
  };

  return (
    <motion.div
      className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-3xl"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      role="button"
      tabIndex={0}
      aria-label={`${achievement.title} ${achievement.type} by ${achievement.issuer}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onHover();
        }
      }}
    >
      <motion.div
        className={cn(
          "glass hover:glass-strong rounded-3xl p-6 transition-all duration-500",
          isHovered && "shadow-glow-lg scale-110",
          achievement.featured && "border-yellow-500/20",
          achievement.trending && "border-green-500/20",
          achievement.recent && "border-blue-500/20",
        )}
        animate={
          reducedMotion
            ? undefined
            : {
                y: isAnimating ? [-3, 3, -3] : 0,
                rotate: isAnimating ? [-1, 1, -1] : 0,
              }
        }
        transition={
          reducedMotion ? undefined : { duration: 2, ease: "easeInOut" }
        }
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={cn("p-3 rounded-2xl glass-strong text-primary")}>
              {achievement.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold gradient-text mb-1 line-clamp-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.issuer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {achievement.featured && (
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
            )}
            {achievement.trending && (
              <TrendingUp className="h-4 w-4 text-green-500" />
            )}
            {achievement.recent && <Clock className="h-4 w-4 text-blue-500" />}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {achievement.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="glass-subtle rounded-xl p-3 text-center">
            <div className="text-lg font-bold gradient-text mb-1">
              {achievement.level.toUpperCase()}
            </div>
            <div className="text-xs text-muted-foreground">Level</div>
          </div>
          <div className="glass-subtle rounded-xl p-3 text-center">
            <div className="text-lg font-bold gradient-text-secondary mb-1">
              {achievement.date}
            </div>
            <div className="text-xs text-muted-foreground">Date</div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {achievement.skills.slice(0, 3).map((skill, skillIndex) => (
            <Badge
              key={skillIndex}
              variant="outline"
              className="text-xs glass-subtle"
            >
              {skill}
            </Badge>
          ))}
          {achievement.skills.length > 3 && (
            <Badge variant="outline" className="text-xs glass-subtle">
              +{achievement.skills.length - 3}
            </Badge>
          )}
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            {getTypeIcon(achievement.type)}
            <span className="capitalize">{achievement.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{achievement.date}</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 glass-strong rounded-3xl p-6 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="h-full flex flex-col justify-center text-center space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-lg gradient-text">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {achievement.projects && (
                <div className="glass-subtle rounded-xl p-3">
                  <div className="text-lg font-bold gradient-text">
                    {achievement.projects}
                  </div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              )}
              {achievement.hours && (
                <div className="glass-subtle rounded-xl p-3">
                  <div className="text-lg font-bold gradient-text">
                    {achievement.hours}h
                  </div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
              )}
              {achievement.score && (
                <div className="glass-subtle rounded-xl p-3">
                  <div className="text-lg font-bold gradient-text">
                    {achievement.score}
                    {achievement.maxScore && `/${achievement.maxScore}`}
                  </div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {achievement.verificationUrl && (
                <Button
                  variant="glass"
                  size="sm"
                  className="flex-1 rounded-xl"
                  onClick={() =>
                    window.open(achievement.verificationUrl, "_blank")
                  }
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Verify
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

// Achievement Timeline Component
const AchievementTimeline = ({
  achievements,
}: {
  achievements: Achievement[];
}) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Group achievements by year
  const achievementsByYear = achievements.reduce(
    (acc, achievement) => {
      const year = new Date(achievement.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(achievement);
      return acc;
    },
    {} as Record<string, Achievement[]>,
  );

  const years = Object.keys(achievementsByYear).sort((a, b) =>
    b.localeCompare(a),
  );

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

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-chart-3" />

        {years.map((year) => {
          const yearAchievements = achievementsByYear[year];
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
                    {yearAchievements.length} Achievements
                  </h3>
                  <p className="text-muted-foreground">
                    {yearAchievements.filter((a) => a.featured).length} featured
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-20">
                {yearAchievements.map((achievement, index) => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
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
    { id: "all", label: "All Achievements" },
    { id: "featured", label: "Featured" },
    { id: "recent", label: "Recent" },
    { id: "certification", label: "Certifications" },
    { id: "award", label: "Awards" },
    { id: "badge", label: "Badges" },
    { id: "milestone", label: "Milestones" },
    { id: "project", label: "Projects" },
  ];

  const sortOptions = [
    { id: "date", label: "Date" },
    { id: "title", label: "Title" },
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
                Filter Achievements
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

// Main Skill Achievements Component
export const SkillAchievements = ({
  achievements,
  className = "",
}: SkillAchievementsProps) => {
  const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(
    null,
  );
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort achievements
  const filteredAchievements = achievements
    .filter((achievement) => {
      if (filter === "all") return true;
      if (filter === "featured") return achievement.featured;
      if (filter === "recent") return achievement.recent;
      return achievement.type === filter;
    })
    .filter(
      (achievement) =>
        achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        achievement.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        achievement.issuer.toLowerCase().includes(searchQuery.toLowerCase()),
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
          Achievements & Certifications
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing my professional achievements, certifications, and
          milestones
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search achievements..."
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
              {filteredAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                  isHovered={hoveredAchievement === achievement.id}
                  onHover={() => setHoveredAchievement(achievement.id)}
                  onLeave={() => setHoveredAchievement(null)}
                />
              ))}
            </div>
          ) : (
            <AchievementTimeline achievements={filteredAchievements} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <div className="glass-subtle rounded-3xl p-12 max-w-md mx-auto">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No achievements found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
