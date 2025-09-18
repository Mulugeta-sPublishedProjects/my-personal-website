"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import { ProjectFilter } from "./project-filter";
import { GridMasonry, useResponsiveColumns } from "./masonry-layout";
import { EnhancedProjectCard } from "./enhanced-project-card";
import { ProjectModal } from "./project-modal";

// TypeScript interfaces for better type safety
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  categories: string[];
  problemStatement?: string;
  features?: string[];
  github?: string;
  live?: string;
  company?: string;
  featured?: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  status: "completed" | "in-progress" | "planned";
  likes?: number;
  views?: number;
  stars?: number;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  screenshots?: string[];
  videoDemo?: string;
  caseStudy?: {
    overview: string;
    research: string;
    design: string;
    development: string;
    testing: string;
    deployment: string;
    impact: string;
  };
}

interface TechCategory {
  id: string;
  label: string;
}

export function Work() {
  // Define all technology categories
  const techCategories: TechCategory[] = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "reactnative", label: "React Native" },
    { id: "bot", label: "Bots" },
    { id: "nestjs", label: "NestJS" },
    { id: "opensource", label: "Open Source" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "fintech", label: "Fintech" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "eService Ethiopia",
      description:
        "Digital platform for Ethiopian government services including permits, licenses, and payments.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      techStack: [
        "React",
        "Next.js",
        "NX",
        "Tailwind CSS",
        "RTK Query",
        "Mantine UI",
      ],
      categories: ["web", "opensource"],
      problemStatement:
        "Ethiopian citizens faced challenges accessing government services due to fragmented systems and bureaucratic processes.",
      features: [
        "Unified service portal for multiple government agencies",
        "Real-time application status tracking",
        "Secure digital payment integration",
        "Mobile-responsive design for all devices",
        "Multilingual support (Amharic, English)",
      ],
      github: "https://github.com/muleA/eservice-platform",
      live: "https://eservice-ethiopia.vercel.app/",
      company: "Perago Systems PLC",
    },
    {
      id: 2,
      title: "WUMIS Dashboard",
      description:
        "Real-time water utility management system for monitoring and optimizing water distribution.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      techStack: ["React", "Material UI", "RTK Query", "GraphQL", "Chart.js"],
      categories: ["web", "nestjs"],
      problemStatement:
        "Water utility companies lacked real-time visibility into their distribution networks, leading to inefficiencies and service disruptions.",
      features: [
        "Real-time water flow and pressure monitoring",
        "Leak detection and alert system",
        "Predictive maintenance scheduling",
        "Billing and customer management integration",
        "Historical data analysis and reporting",
      ],
      github: "https://github.com/muleA/wumis-dashboard",
      live: "https://wumis-demo.vercel.app/",
      company: "Top Link Technology PLC",
    },
    {
      id: 3,
      title: "ICare Portal",
      description:
        "Centralized platform for Addis Ababa Food & Drug Authority services and regulations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      techStack: [
        "React",
        "Mantine UI",
        "Next.js",
        "Tailwind CSS",
        "RTK Query",
      ],
      categories: ["web"],
      problemStatement:
        "The Addis Ababa FDA had multiple disconnected systems, causing confusion for citizens and inefficiency in service processing.",
      features: [
        "Centralized service catalog with intuitive navigation",
        "Document management and verification system",
        "Application status tracking with notifications",
        "Secure user authentication and role-based access",
      ],
      github: "https://github.com/muleA/icare-portal",
      live: "https://icare-fda-demo.vercel.app/",
      company: "Tria PLC",
    },
    {
      id: 4,
      title: "SRA Hub Job Aggregator",
      description:
        "Aggregates Ethiopian job postings with AI-powered resume tools and Telegram alerts.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      techStack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Telegram Bot API",
      ],
      categories: ["web", "nestjs", "bot"],
      problemStatement:
        "Job seekers in Ethiopia struggle to find local opportunities in one place. Existing solutions are scattered and inconsistent.",
      features: [
        "Aggregates jobs from multiple sources",
        "Telegram notifications for new jobs",
        "AI resume builder & ATS checker",
        "Job categorization & filtering",
      ],
      github: "https://github.com/mulugeta/sra-hub",
      live: "https://srahub.et",
    },
    {
      id: 5,
      title: "Wegen Fund",
      description:
        "Community crowdfunding platform to support local Ethiopian projects and social initiatives.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      techStack: ["Next.js", "React", "Supabase", "Stripe API"],
      categories: ["web", "fintech"],
      problemStatement:
        "Local initiatives often fail due to lack of structured fundraising platforms and visibility.",
      features: [
        "Crowdfunding campaigns",
        "Project updates & tracking",
        "Secure payments via Stripe",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Tip Me",
      description:
        "Enables Ethiopian freelancers and creators to receive tips via web and Telegram.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["Next.js", "Supabase", "Telegram API", "Chapa Payment"],
      categories: ["web", "bot", "fintech"],
      problemStatement:
        "Local creators lack easy ways to monetize content and receive micro-payments.",
      features: [
        "Web + Telegram integration",
        "Instant tip notifications",
        "Secure payments",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 7,
      title: "Yene Events",
      description:
        "Event discovery and ticketing platform for Ethiopian events and organizers.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["React", "Next.js", "Supabase", "Stripe API"],
      categories: ["web", "ecommerce"],
      problemStatement:
        "Event-goers struggle to find and book tickets for local events efficiently.",
      features: [
        "Event listings & search",
        "Ticket booking system",
        "Payment integration",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 8,
      title: "Shemach eCommerce",
      description:
        "Ethiopian eCommerce platform empowering local retailers and artisans.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "Stripe API"],
      categories: ["web", "ecommerce"],
      problemStatement:
        "Small Ethiopian businesses lack accessible digital storefronts for online sales.",
      features: [
        "Product catalog & categories",
        "Order management",
        "Secure checkout",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 9,
      title: "EthioBank App",
      description:
        "Secure mobile banking application with biometric authentication for Ethiopian users.",
      image:
        "https://images.unsplash.com/photo-1556740758-6f4751f19c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["React Native", "TypeScript", "Redux", "Firebase", "Node.js"],
      categories: ["reactnative", "fintech"],
      problemStatement:
        "Banking services were limited by physical branch access and security concerns for digital transactions.",
      features: [
        "Biometric authentication for secure access",
        "Real-time transaction notifications and tracking",
        "Budget tracking and financial insights",
        "Bill payment and mobile money integration",
      ],
      github: "https://github.com/muleA/ethiobank-app",
      live: "#",
    },
    {
      id: 10,
      title: "AgriBot Ethiopia",
      description:
        "AI-powered farming advice chatbot providing real-time agricultural guidance to Ethiopian farmers.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["Next.js", "React", "Deep Seek AI", "TensorFlow.js"],
      categories: ["bot", "opensource"],
      problemStatement:
        "Ethiopian farmers had limited access to timely agricultural advice and market information.",
      features: [
        "AI-powered agricultural advice in local languages",
        "Real-time market price information",
        "Weather forecast integration",
        "Pest and disease identification assistance",
      ],
      github: "https://github.com/muleA/ethiopian-agri-chatbot",
      live: "https://ethiopian-agri-chatbot.vercel.app/",
    },
  ];

  // Fixed filter logic
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Enhanced Project Card Component with 3D Effects
  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="group border-0 hover:shadow-glow-lg transition-all duration-500 cursor-pointer rounded-3xl overflow-hidden glass h-full flex flex-col hover:glass-strong">
            <CardHeader className="p-0 overflow-hidden relative">
              <div className="relative w-full h-56">
                {/* Enhanced image with 3D effect */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating category badges with glassmorphism */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.categories.slice(0, 2).map((category) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs glass-strong text-white backdrop-blur-sm font-semibold px-3 py-1.5"
                      >
                        {techCategories.find((c) => c.id === category)?.label}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Floating action indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 glass-strong rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <ExternalLink className="h-4 w-4 text-white" />
                </motion.div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-5 flex flex-col flex-1">
              {/* Enhanced title section */}
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold gradient-text group-hover:gradient-text-secondary transition-all duration-300">
                  {project.title}
                </CardTitle>
                {project.company && (
                  <Badge
                    variant="outline"
                    className="text-xs glass-subtle font-medium"
                  >
                    {project.company}
                  </Badge>
                )}
              </div>

              {/* Enhanced description */}
              <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Enhanced tech stack with animations */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="text-xs glass-subtle text-primary px-3 py-1.5 rounded-full font-semibold hover:glass-strong transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs glass-subtle text-muted-foreground px-3 py-1.5 rounded-full font-semibold">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* Enhanced CTA button */}
              <Button
                size="sm"
                variant="glass"
                className="mt-4 w-full font-semibold rounded-2xl hover:scale-105 active:scale-95 cursor-glow"
                aria-label={`View details for ${project.title}`}
              >
                <span className="flex items-center gap-2">
                  View Details
                  <ExternalLink className="h-4 w-4" />
                </span>
              </Button>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl glass-strong border-white/20">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold flex items-center justify-between gradient-text">
              {project.title}
              {project.company && (
                <Badge
                  variant="outline"
                  className="text-sm glass-subtle font-semibold"
                >
                  {project.company}
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8">
            {/* Problem statement with enhanced styling */}
            <div className="glass-subtle rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3 gradient-text-secondary">
                Problem Statement
              </h4>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Technologies with enhanced badges */}
            <div>
              <h4 className="font-bold text-xl mb-4 gradient-text">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm glass-subtle font-semibold px-4 py-2 hover:glass-strong transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features with enhanced list styling */}
            <div>
              <h4 className="font-bold text-xl mb-4 gradient-text-secondary">
                Key Features
              </h4>
              <div className="grid gap-3">
                {project.features.map((feat, index) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 glass-subtle rounded-xl p-4 hover:glass-strong transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {project.github && project.github !== "#" && (
                <Button
                  asChild
                  variant="glass"
                  size="lg"
                  className="flex-1 rounded-2xl font-semibold hover:scale-105 active:scale-95 cursor-glow"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-5 w-5" />
                    GitHub Source
                  </a>
                </Button>
              )}
              {project.live && project.live !== "#" && (
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="flex-1 rounded-2xl font-semibold hover:scale-105 active:scale-95 cursor-glow"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"
          aria-hidden="true"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Glassmorphism */}
        <motion.div
          className="text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />

            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
            >
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
              Showcasing Ethiopia-focused tech solutions, digital startups, and
              impactful web applications that drive innovation and growth.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Category Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    activeCategory === category.id ? "gradient" : "glass"
                  }
                  size="lg"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "shadow-glow"
                      : "hover:glass-strong hover:shadow-md"
                  }`}
                  aria-pressed={activeCategory === category.id}
                >
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Category Badge */}
        {activeCategory !== "all" && (
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="px-3 py-1.5 text-sm flex items-center gap-1.5"
            >
              <Filter className="h-3.5 w-3.5" aria-hidden="true" />
              Showing:{" "}
              {techCategories.find((c) => c.id === activeCategory)?.label}
              <button
                onClick={() => setActiveCategory("all")}
                className="ml-1 hover:bg-muted/50 rounded-full p-0.5"
                aria-label="Clear filter"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
            <Button
              variant="outline"
              className="mt-4 rounded-full"
              onClick={() => setActiveCategory("all")}
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
