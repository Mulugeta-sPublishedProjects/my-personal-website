"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TechItem {
  id: string;
  name: string;
  category: string;
  level: number;
  experience: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  projects: number;
  trending?: boolean;
  lastUsed?: string;
  popularity?: number; // 1-100
  learning?: boolean;
  mastered?: boolean;
}

interface AnimatedTechStackProps {
  techItems: TechItem[];
  className?: string;
}

// Floating Tech Item Component
const FloatingTechItem = ({
  tech,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  tech: TechItem;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 2000);
      },
      5000 + index * 1000,
    );

    return () => clearInterval(interval);
  }, [index]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onHover();
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      tabIndex={0}
      aria-label={`${tech.name} skill level ${tech.level} percent`}
      onKeyDown={handleKeyDown}
      onFocus={onHover}
      onBlur={onLeave}
    >
      <motion.div
        className={cn(
          "glass hover:glass-strong rounded-2xl p-4 transition-all duration-500",
          isHovered && "shadow-glow-lg scale-110",
          tech.trending && "border-green-500/20",
          tech.learning && "border-blue-500/20",
          tech.mastered && "border-yellow-500/20",
        )}
        animate={{
          y: isAnimating ? [-5, 5, -5] : 0,
          rotate: isAnimating ? [-2, 2, -2] : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {/* Tech Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className={cn("p-2 rounded-xl glass-strong text-primary")}>
            {tech.icon}
          </div>
          <div className="flex items-center gap-1">
            {tech.trending && <TrendingUp className="h-4 w-4 text-green-500" />}
            {tech.learning && <BookOpen className="h-4 w-4 text-blue-500" />}
            {tech.mastered && <Award className="h-4 w-4 text-yellow-500" />}
          </div>
        </div>

        {/* Tech Name */}
        <h4 className="font-bold text-sm gradient-text mb-2">{tech.name}</h4>

        {/* Experience */}
        <p className="text-xs text-muted-foreground mb-3">{tech.experience}</p>

        {/* Level Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Level</span>
            <span className="font-semibold text-primary">{tech.level}%</span>
          </div>
          <div className="w-full bg-muted/20 rounded-full h-1.5">
            <motion.div
              className="h-1.5 rounded-full bg-gradient-to-r from-primary to-chart-2"
              initial={{ width: 0 }}
              animate={{ width: `${tech.level}%` }}
              transition={{ delay: index * 0.1, duration: 1 }}
            />
          </div>
        </div>

        {/* Projects Count */}
        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            <span>{tech.projects} projects</span>
          </div>
          {tech.popularity && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span>{tech.popularity}%</span>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 glass-strong rounded-2xl p-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="h-full flex flex-col justify-center text-center">
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
              {tech.description}
            </p>
            {tech.lastUsed && (
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Last used {tech.lastUsed}</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Tech Stack Carousel Component
const TechStackCarousel = ({ techItems }: { techItems: TechItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Responsive items per view
  useEffect(() => {
    const computeItems = () => {
      const width = window.innerWidth;
      if (width >= 1536) return 6; // 2xl
      if (width >= 1280) return 5; // xl
      if (width >= 1024) return 4; // lg
      if (width >= 768) return 3; // md
      if (width >= 640) return 2; // sm
      return 1;
    };

    const update = () => setItemsPerView(computeItems());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const maxIndex = Math.max(0, techItems.length - itemsPerView);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (direction === 1) {
            if (prev >= maxIndex) {
              setDirection(-1);
              return prev - 1;
            }
            return prev + 1;
          } else {
            if (prev <= 0) {
              setDirection(1);
              return prev + 1;
            }
            return prev - 1;
          }
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, direction, maxIndex]);

  const visibleItems = techItems.slice(
    currentIndex,
    currentIndex + itemsPerView,
  );

  return (
    <div className="relative">
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 glass-subtle rounded-xl hover:glass-strong transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setCurrentIndex(0)}
            className="p-2 glass-subtle rounded-xl hover:glass-strong transition-all duration-300"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="p-2 glass-subtle rounded-xl hover:glass-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() =>
              setCurrentIndex(Math.min(maxIndex, currentIndex + 1))
            }
            disabled={currentIndex >= maxIndex}
            className="p-2 glass-subtle rounded-xl hover:glass-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={
            reducedMotion
              ? undefined
              : { x: -currentIndex * (100 / itemsPerView) + "%" }
          }
          transition={
            reducedMotion ? undefined : { duration: 0.5, ease: "easeInOut" }
          }
        >
          {techItems.map((tech, index) => (
            <div
              key={tech.id}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <FloatingTechItem
                tech={tech}
                index={index}
                isHovered={false}
                onHover={() => {}}
                onLeave={() => {}}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
          />
        ))}
      </div>
    </div>
  );
};

// Tech Stack Grid Component
const TechStackGrid = ({ techItems }: { techItems: TechItem[] }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {techItems.map((tech, index) => (
        <FloatingTechItem
          key={tech.id}
          tech={tech}
          index={index}
          isHovered={hoveredItem === tech.id}
          onHover={() => setHoveredItem(tech.id)}
          onLeave={() => setHoveredItem(null)}
        />
      ))}
    </div>
  );
};

// Tech Stack Categories Component
const TechStackCategories = ({ techItems }: { techItems: TechItem[] }) => {
  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      color: "text-green-500",
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      color: "text-orange-500",
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      color: "text-purple-500",
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      color: "text-cyan-500",
    },
    {
      id: "ui-ux",
      name: "UI/UX",
      icon: <Palette className="h-5 w-5" />,
      color: "text-pink-500",
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Zap className="h-5 w-5" />,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categoryItems = techItems.filter(
          (item) => item.category.toLowerCase() === category.id,
        );

        if (categoryItems.length === 0) return null;

        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn("p-2 rounded-xl glass-strong", category.color)}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold gradient-text">
                {category.name}
              </h3>
              <Badge variant="outline" className="glass-subtle">
                {categoryItems.length} items
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryItems.map((tech, index) => (
                <FloatingTechItem
                  key={tech.id}
                  tech={tech}
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
  );
};

// Main Animated Tech Stack Component
export const AnimatedTechStack = ({
  techItems,
  className = "",
}: AnimatedTechStackProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "carousel" | "categories">(
    "grid",
  );
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("space-y-8", className)}>
      {/* View Mode Toggle */}
      <div className="flex justify-center">
        <div className="glass-subtle rounded-2xl p-1">
          <div className="flex gap-1">
            {[
              {
                id: "grid",
                label: "Grid",
                icon: <BarChart3 className="h-4 w-4" />,
              },
              {
                id: "carousel",
                label: "Carousel",
                icon: <ChevronRight className="h-4 w-4" />,
              },
              {
                id: "categories",
                label: "Categories",
                icon: <PieChart className="h-4 w-4" />,
              },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  viewMode === mode.id
                    ? "glass-strong shadow-glow"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {mode.icon}
                {mode.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--chart-2) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {viewMode === "grid" && <TechStackGrid techItems={techItems} />}
            {viewMode === "carousel" && (
              <TechStackCarousel techItems={techItems} />
            )}
            {viewMode === "categories" && (
              <TechStackCategories techItems={techItems} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
