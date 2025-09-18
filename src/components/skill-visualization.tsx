"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillData {
  id: string;
  name: string;
  level: number;
  experience: string;
  icon: React.ReactNode;
  color: string;
  category: string;
  projects: number;
  trending?: boolean;
  lastUsed?: string;
}

interface SkillVisualizationProps {
  skills: SkillData[];
  className?: string;
}

// Radial Progress Component
const RadialProgress = ({ 
  value, 
  size = 120, 
  strokeWidth = 8, 
  color = "hsl(var(--primary))",
  className = "" 
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className={cn("relative", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold gradient-text">{value}%</span>
      </div>
    </div>
  );
};

// Skill Radar Chart Component
const SkillRadarChart = ({ skills }: { skills: SkillData[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radius = Math.min(dimensions.width, dimensions.height) / 2 - 40;

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
      ctx.strokeStyle = "hsl(var(--muted))";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axes
    const categories = ["Frontend", "Backend", "Mobile", "Database", "UI/UX", "DevOps"];
    categories.forEach((_, index) => {
      const angle = (index * 2 * Math.PI) / categories.length;
      const x = centerX + radius * Math.cos(angle - Math.PI / 2);
      const y = centerY + radius * Math.sin(angle - Math.PI / 2);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "hsl(var(--muted))";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw skill data
    const skillLevels = categories.map(category => {
      const categorySkills = skills.filter(skill => 
        skill.category.toLowerCase().includes(category.toLowerCase().split('/')[0])
      );
      return categorySkills.length > 0 
        ? categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
        : 0;
    });

    // Draw skill polygon
    ctx.beginPath();
    skillLevels.forEach((level, index) => {
      const angle = (index * 2 * Math.PI) / categories.length;
      const x = centerX + (radius * level / 100) * Math.cos(angle - Math.PI / 2);
      const y = centerY + (radius * level / 100) * Math.sin(angle - Math.PI / 2);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = "hsl(var(--primary) / 0.2)";
    ctx.fill();
    ctx.strokeStyle = "hsl(var(--primary))";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw category labels
    categories.forEach((category, index) => {
      const angle = (index * 2 * Math.PI) / categories.length;
      const x = centerX + (radius + 20) * Math.cos(angle - Math.PI / 2);
      const y = centerY + (radius + 20) * Math.sin(angle - Math.PI / 2);
      
      ctx.fillStyle = "hsl(var(--foreground))";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(category, x, y);
    });
  }, [skills, dimensions]);

  return (
    <div className="glass rounded-3xl p-8">
      <h3 className="text-xl font-bold gradient-text mb-6 text-center">Skill Overview</h3>
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

// Skill Timeline Component
const SkillTimeline = ({ skills }: { skills: SkillData[] }) => {
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);
  
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold gradient-text mb-6">Skill Progression</h3>
      <div className="space-y-3">
        {sortedSkills.slice(0, 10).map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 p-4 glass-subtle rounded-2xl hover:glass-strong transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <div className={cn("p-2 rounded-xl glass-strong", skill.color)}>
                {skill.icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm truncate">{skill.name}</h4>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
            {skill.trending && (
              <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Skill Statistics Component
const SkillStatistics = ({ skills }: { skills: SkillData[] }) => {
  const totalSkills = skills.length;
  const averageLevel = Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / totalSkills);
  const expertSkills = skills.filter(skill => skill.level >= 90).length;
  const trendingSkills = skills.filter(skill => skill.trending).length;
  const totalProjects = skills.reduce((sum, skill) => sum + skill.projects, 0);

  const stats = [
    {
      label: "Total Skills",
      value: totalSkills,
      icon: <Code className="h-5 w-5" />,
      color: "text-blue-500",
    },
    {
      label: "Average Level",
      value: `${averageLevel}%`,
      icon: <BarChart3 className="h-5 w-5" />,
      color: "text-green-500",
    },
    {
      label: "Expert Level",
      value: expertSkills,
      icon: <Award className="h-5 w-5" />,
      color: "text-yellow-500",
    },
    {
      label: "Trending",
      value: trendingSkills,
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-purple-500",
    },
    {
      label: "Projects",
      value: totalProjects,
      icon: <Target className="h-5 w-5" />,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="glass-subtle rounded-2xl p-4 text-center hover:glass-strong transition-all duration-300"
        >
          <div className={cn("mx-auto mb-2", stat.color)}>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold gradient-text mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-muted-foreground">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Main Skill Visualization Component
export const SkillVisualization = ({ skills, className = "" }: SkillVisualizationProps) => {
  const [activeView, setActiveView] = useState<"grid" | "radar" | "timeline">("grid");
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(null);

  const topSkills = skills
    .filter(skill => skill.level >= 80)
    .sort((a, b) => b.level - a.level)
    .slice(0, 6);

  return (
    <div className={cn("space-y-8", className)}>
      {/* View Toggle */}
      <div className="flex justify-center">
        <div className="glass-subtle rounded-2xl p-1">
          <div className="flex gap-1">
            {[
              { id: "grid", label: "Grid", icon: <BarChart3 className="h-4 w-4" /> },
              { id: "radar", label: "Radar", icon: <PieChart className="h-4 w-4" /> },
              { id: "timeline", label: "Timeline", icon: <Activity className="h-4 w-4" /> },
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id as any)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  activeView === view.id
                    ? "glass-strong shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {view.icon}
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <SkillStatistics skills={skills} />

      {/* Main Content */}
      {activeView === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass hover:glass-strong rounded-3xl p-6 transition-all duration-500 hover:shadow-glow-lg hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={cn("p-3 rounded-2xl glass-strong", skill.color)}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold gradient-text">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.experience}</p>
                  </div>
                </div>
                {skill.trending && (
                  <Badge className="glass-strong text-green-500 border-green-500/20">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-semibold text-primary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{skill.projects} projects</span>
                  {skill.lastUsed && <span>Last used {skill.lastUsed}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeView === "radar" && (
        <SkillRadarChart skills={skills} />
      )}

      {activeView === "timeline" && (
        <div className="glass rounded-3xl p-8">
          <SkillTimeline skills={skills} />
        </div>
      )}

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-strong rounded-3xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className={cn("mx-auto mb-4 p-4 rounded-2xl glass-strong w-fit", selectedSkill.color)}>
                {selectedSkill.icon}
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">{selectedSkill.name}</h3>
              <p className="text-muted-foreground mb-6">{selectedSkill.experience}</p>
              
              <RadialProgress 
                value={selectedSkill.level} 
                size={150}
                color={`hsl(var(--primary))`}
                className="mx-auto mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-semibold">{selectedSkill.projects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <Badge variant="outline" className="glass-subtle">
                    {selectedSkill.category}
                  </Badge>
                </div>
                {selectedSkill.lastUsed && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Used</span>
                    <span className="font-semibold">{selectedSkill.lastUsed}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
