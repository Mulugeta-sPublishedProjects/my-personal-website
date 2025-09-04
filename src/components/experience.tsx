"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Star,
  CheckCircle,
  Zap,
  ExternalLink,
  ChevronRight,
  Building,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  employmentType: string;
  icon: React.ReactNode;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tria PLC",
    location: "Addis Ababa, Ethiopia",
    period: "May 2023 - June 2025",
    employmentType: "Part Time",
    description:
      "Leading responsive frontend development with modern frameworks. Architecting scalable component libraries and optimizing application performance.",
    achievements: [
      "Architected component libraries for consistent UI across products",
      "Reduced page load times by 45% through optimization techniques",
      "Mentored junior developers and established coding standards",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Senior Frontend Developer",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    period: "March 2023 - Present",
    employmentType: "Full Time",
    description:
      "Architecting UIs with optimal performance and UX. Leading frontend development for WUMIS water utility management system.",
    achievements: [
      "Led WUMIS frontend development with real-time data visualization",
      "Implemented real-time data visualization components",
      "Improved user workflows and interface design",
    ],
    skills: ["React", "Material UI", "GraphQL", "RTK Query", "Jest"],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Junior Frontend Developer",
    company: "Perago Systems PLC",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2022 - March 2023",
    employmentType: "Full Time",
    description:
      "Developed web applications focusing on code quality. Built UI for eService government platform with modern React patterns.",
    achievements: [
      "Built responsive UI components for eService government platform",
      "Reduced bugs by 30% through comprehensive testing",
      "Participated in agile ceremonies and sprint planning",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "RTK Query", "Cypress"],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Intern Frontend Developer",
    company: "Perago Systems PLC",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2021 - Jan 2022",
    employmentType: "Internship",
    description:
      "Assisted in web component development. Gained hands-on experience with React and built reusable components.",
    achievements: [
      "Built reusable components for internal design system",
      "Learned industry best practices and coding standards",
      "Collaborated with senior developers on feature implementation",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    icon: <Briefcase className="h-6 w-6" />,
  },
];

const ExperienceCard = ({
  item,
  index,
  isEven,
}: {
  item: ExperienceItem;
  index: number;
  isEven: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex items-center mb-16",
        isEven ? "flex-row" : "flex-row-reverse"
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-border to-transparent z-0"></div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-6 rounded-full bg-background border-4 border-primary shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        className={cn(
          "w-5/12 relative z-20",
          isEven ? "mr-auto pr-8" : "ml-auto pl-8"
        )}
      >
        <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  {item.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-bold tracking-tight">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
              <Badge
                variant="outline"
                className="text-xs font-medium bg-primary/5 text-primary border-primary/20"
              >
                {item.employmentType}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{item.period}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                <Award className="h-4 w-4 text-amber-500" />
                Key Achievements
              </h4>
              <ul className="space-y-1.5">
                {item.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    {
      value: "all",
      label: "All Positions",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      value: "full-time",
      label: "Full Time",
      icon: <Users className="h-4 w-4" />,
    },
    {
      value: "part-time",
      label: "Part Time",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      value: "internship",
      label: "Internship",
      icon: <Star className="h-4 w-4" />,
    },
  ];

  const filteredData =
    activeFilter === "all"
      ? experienceData
      : experienceData.filter(
          (item) =>
            item.employmentType.toLowerCase().replace(" ", "-") === activeFilter
        );

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey through the world of frontend development, showcasing
            growth, challenges, and achievements at each step of my career.
          </p>
        </div>

        {/* Filter Options */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted/50 p-1 rounded-xl">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeFilter === option.value
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                )}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative min-h-[600px]">
          {filteredData.length > 0 ? (
            <div className="relative">
              {filteredData.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <CalendarDays className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No positions found</h3>
              <p className="text-muted-foreground">
                No positions match the selected filter.
              </p>
            </div>
          )}
        </div>

        {/* Resume Download Button */}
        <div className="text-center mt-16 md:mt-20">
          <Button
            size="lg"
            asChild
            className="group px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Download My Resume
              <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
