"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  ExternalLink,
  Github,
  Eye,
  Target,
  Layers,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Type definitions
export type TabKey = "frontend" | "fullstack" | "bots" | "opensource";
export type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  role: string;
  features: string[];
  tech: string[];
  ctaHref: string;
  ctaLabel: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  image: string;
  imageAlt: string;
  category: TabKey;
  featured?: boolean;
  company?: string;
  problemSolved?: string;
  coreFeatures?: string[];
  challenges?: string[];
  results?: string[];
};

// Reusable Section Component
const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <h3 className="flex items-center gap-2 font-semibold text-lg">
      {icon}
      {title}
    </h3>
    {children}
  </div>
);

// Reusable Feature List
const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-1">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Project Details Modal
const ProjectDetailsModal = ({ project }: { project: Project }) => (
  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="flex items-center gap-2 text-xl">
        {project.title}
        <Badge variant="outline" className="text-xs">
          {project.category}
        </Badge>
      </DialogTitle>
      <DialogDescription className="text-base">
        {project.tagline}
      </DialogDescription>
    </DialogHeader>

    <div className="space-y-6 mt-4">
      {/* Project Image */}
      <div className="rounded-lg overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={800}
            height={450}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      {/* Problem Solved */}
      {project.problemSolved && (
        <Section
          icon={<Target className="h-5 w-5 text-primary" />}
          title="Problem Solved"
        >
          <p className="text-muted-foreground">{project.problemSolved}</p>
        </Section>
      )}

      {/* Core Features */}
      {project.coreFeatures && project.coreFeatures.length > 0 && (
        <Section
          icon={<Layers className="h-5 w-5 text-primary" />}
          title="Core Features"
        >
          <FeatureList items={project.coreFeatures} />
        </Section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <Section
          icon={<Lightbulb className="h-5 w-5 text-primary" />}
          title="Challenges & Solutions"
        >
          <FeatureList items={project.challenges} />
        </Section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <Section
          icon={<TrendingUp className="h-5 w-5 text-primary" />}
          title="Results & Impact"
        >
          <FeatureList items={project.results} />
        </Section>
      )}

      {/* Tech Stack */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Technology Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild className="flex-1">
          <a href={project.ctaHref} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            {project.ctaLabel}
          </a>
        </Button>
        {project.repoUrl && (
          <Button variant="outline" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </DialogContent>
);

// Project Card Component
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="h-full"
  >
    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {project.featured && (
          <Badge className="absolute top-3 left-3 z-10">Featured</Badge>
        )}

        {/* View Details Button */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <ProjectDetailsModal project={project} />
          </Dialog>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <CardTitle className="text-lg font-semibold mb-1 line-clamp-1">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {project.tagline}
          </CardDescription>
        </div>

        <div className="mt-auto space-y-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button size="sm" asChild className="flex-1 rounded-full">
              <a
                href={project.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                {project.ctaLabel}
              </a>
            </Button>

            <div className="flex gap-1">
              {project.repoUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3 w-3" />
                  </a>
                </Button>
              )}

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Eye className="h-3 w-3" />
                  </Button>
                </DialogTrigger>
                <ProjectDetailsModal project={project} />
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
);

export const projectsByTab: Record<TabKey, Project[]> = {
  frontend: [
    {
      id: 1,
      title: "eService",
      tagline: "Streamlined digital platform for Ethiopian government services",
      description:
        "A scalable web application that simplifies access to permits, licenses, and payments for Ethiopian citizens, enhancing transparency and efficiency.",
      role: "Led frontend development, UI/UX design, and API integrations.",
      features: [
        "Real-time application tracking",
        "Secure payment processing",
        "Responsive design",
      ],
      tech: [
        "React",
        "Next.js",
        "NX",
        "Tailwind CSS",
        "RTK Query",
        "Mantine UI",
      ],
      ctaHref: "http://196.189.44.47:3001/",
      ctaLabel: "Live Site",
      repoUrl: "http://196.189.44.47:3001/",
      caseStudyUrl: "#",
      image: "/projects/project1.png",
      imageAlt: "eService platform preview",
      featured: true,
      company: "Perago Systems PLC",
      category: "frontend",
      problemSolved:
        "Ethiopian citizens faced challenges accessing government services due to fragmented systems and long processing times. The platform needed to unify these services while maintaining security and compliance.",
      coreFeatures: [
        "Unified service portal for all government agencies",
        "Real-time application status tracking",
        "Secure digital payment processing",
        "Mobile-responsive design for accessibility",
        "Multilingual support for regional languages",
      ],
      challenges: [
        "Integrating with multiple legacy government systems",
        "Ensuring data security and compliance with regulations",
        "Creating an intuitive UI for citizens with varying technical literacy",
      ],
      results: [
        "Reduced service processing time by 60%",
        "Increased citizen satisfaction scores by 45%",
        "Processed over 50,000 applications in the first year",
      ],
    },
    {
      id: 2,
      title: "WUMIS",
      tagline: "Real-time water utility management for Ethiopia",
      description:
        "A robust platform to streamline water utility operations, providing real-time data insights for Ethiopian companies.",
      role: "Designed and implemented responsive frontend with GraphQL integrations.",
      features: [
        "Real-time data dashboards",
        "Multi-user access",
        "Mobile-friendly UI",
      ],
      tech: ["React", "Material UI", "RTK Query", "GraphQL"],
      ctaHref: "https://wumis.et/",
      ctaLabel: "Live Site",
      repoUrl: "https://wumis.et/",
      caseStudyUrl: "#",
      image: "/projects/project2.png",
      imageAlt: "WUMIS platform preview",
      company: "Top Link Technology PLC",
      category: "frontend",
      problemSolved:
        "Water utility companies in Ethiopia struggled with manual data collection and inefficient resource management, leading to water wastage and poor service delivery.",
      coreFeatures: [
        "Real-time water consumption monitoring",
        "Predictive maintenance for infrastructure",
        "Mobile app for field workers",
        "Automated billing and payment system",
      ],
      challenges: [
        "Implementing real-time data collection from remote locations",
        "Creating intuitive dashboards for non-technical staff",
        "Ensuring system reliability in areas with poor connectivity",
      ],
      results: [
        "Reduced water wastage by 35%",
        "Improved maintenance response time by 50%",
        "Increased customer satisfaction by 40%",
      ],
    },
    {
      id: 3,
      title: "Icare",
      tagline: "Unified portal for Addis Ababa FDA services",
      description:
        "A centralized platform consolidating services for the Addis Ababa Food & Drug Authority, improving accessibility and user experience.",
      role: "Developed frontend architecture and integrated with backend APIs.",
      features: [
        "Seamless service navigation",
        "Secure user authentication",
        "Multilingual support",
      ],
      tech: ["React", "Mantine UI", "Next.js", "Tailwind CSS", "RTK Query"],
      ctaHref: "http://user-portal-dev.license.aafda.gov.et/",
      ctaLabel: "Live Site",
      repoUrl: "http://user-portal-dev.license.aafda.gov.et/",
      caseStudyUrl: "#",
      image: "/projects/project31.png",
      imageAlt: "Icare portal preview",
      company: "Tria PLC",
      category: "frontend",
      problemSolved:
        "The Addis Ababa FDA had multiple disconnected systems for different services, causing confusion for citizens and inefficiency in processing.",
      coreFeatures: [
        "Centralized service catalog",
        "Unified application process",
        "Secure document management",
        "Status tracking system",
      ],
      challenges: [
        "Migrating data from multiple legacy systems",
        "Implementing secure document verification",
        "Designing an intuitive interface for diverse user groups",
      ],
      results: [
        "Reduced application processing time by 55%",
        "Improved user satisfaction scores by 60%",
        "Increased digital service adoption by 70%",
      ],
    },
    {
      id: 4,
      title: "Little Lemon",
      tagline: "Modern restaurant ordering experience",
      description:
        "A sleek website for Little Lemon Restaurant, enabling seamless online ordering and customer engagement.",
      role: "Built responsive frontend with optimized performance.",
      features: [
        "Online ordering system",
        "Interactive menu",
        "Mobile-first design",
      ],
      tech: ["React", "Tailwind CSS", "Vite"],
      ctaHref: "https://little-lemon-git-main-mulea.vercel.app",
      ctaLabel: "Live Demo",
      repoUrl: "https://github.com/username/project4",
      caseStudyUrl: "#",
      image: "/projects/project4.png",
      imageAlt: "Little Lemon Restaurant website preview",
      category: "frontend",
      problemSolved:
        "Little Lemon Restaurant needed to modernize their online presence to compete with food delivery platforms and increase direct orders.",
      coreFeatures: [
        "Interactive menu with real-time availability",
        "Online ordering with table reservation",
        "Customer loyalty program integration",
        "Mobile-optimized experience",
      ],
      challenges: [
        "Creating an intuitive menu navigation system",
        "Implementing real-time order updates",
        "Integrating with existing POS system",
      ],
      results: [
        "Increased online orders by 65%",
        "Improved customer retention by 40%",
        "Reduced order processing time by 30%",
      ],
    },
    {
      id: 5,
      title: "Fidel Academy",
      tagline: "Interactive e-learning for all",
      description:
        "An engaging e-learning platform to democratize education with performance-optimized web experiences.",
      role: "Led UI/UX design and frontend development with Next.js.",
      features: [
        "Interactive course modules",
        "Progress tracking",
        "Responsive layouts",
      ],
      tech: ["React", "Tailwind CSS", "Next.js", "Turbo"],
      ctaHref: "https://fidel-academy.vercel.app/",
      ctaLabel: "Live Demo",
      repoUrl: "https://fidel-academy.vercel.app/",
      caseStudyUrl: "#",
      image: "/projects/project5.png",
      imageAlt: "Fidel Academy eLearning preview",
      category: "frontend",
      problemSolved:
        "Education in Ethiopia was limited by access to quality learning resources and interactive platforms, especially in remote areas.",
      coreFeatures: [
        "Interactive course content with multimedia",
        "Progress tracking and analytics",
        "Offline access to course materials",
        "Collaborative learning tools",
      ],
      challenges: [
        "Optimizing for low-bandwidth connections",
        "Creating engaging interactive content",
        "Implementing robust progress tracking",
      ],
      results: [
        "Reached over 10,000 students in first year",
        "Improved course completion rates by 45%",
        "Received 95% positive feedback from users",
      ],
    },
    {
      id: 6,
      title: "EthioLearn AI",
      tagline: "AI-driven language learning for Ethiopia",
      description:
        "An innovative web app using AI to teach Ethiopian languages like Amharic through speech recognition and gamified quizzes.",
      role: "Developed AI integrations and dynamic frontend components.",
      features: [
        "AI speech recognition",
        "Gamified learning",
        "Multilingual UI",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Google Cloud Speech-to-Text",
        "OpenAI API",
      ],
      ctaHref: "#",
      ctaLabel: "Concept Demo",
      repoUrl: "https://github.com/muleA/ai-language-learner",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "AI Language Learning Platform preview",
      company: "Tria PLC",
      category: "frontend",
      problemSolved:
        "Learning Ethiopian languages like Amharic was challenging due to limited digital resources and lack of interactive learning tools.",
      coreFeatures: [
        "AI-powered pronunciation assessment",
        "Gamified learning exercises",
        "Cultural context integration",
        "Progress tracking with personalized feedback",
      ],
      challenges: [
        "Implementing accurate speech recognition for Amharic",
        "Creating engaging gamification elements",
        "Providing culturally relevant learning content",
      ],
      results: [
        "Improved language retention by 60% compared to traditional methods",
        "Achieved 85% accuracy in pronunciation assessment",
        "Received positive feedback from both students and educators",
      ],
    },
    {
      id: 13,
      title: "EthioMart",
      tagline: "Seamless e-commerce for Ethiopian retail",
      description:
        "A full-stack e-commerce platform with real-time inventory and secure payment integrations, tailored for Ethiopian businesses.",
      role: "Architected frontend and integrated Stripe for payments.",
      features: [
        "Real-time inventory",
        "Secure checkout",
        "Mobile-first design",
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      ctaHref: "#",
      ctaLabel: "Live Demo",
      repoUrl: "#",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "E-Commerce Platform preview",
      featured: true,
      company: "Tria PLC",
      category: "frontend",
      problemSolved:
        "Ethiopian retailers lacked a modern e-commerce solution that could handle local payment methods and provide a seamless shopping experience.",
      coreFeatures: [
        "Multi-vendor marketplace",
        "Local payment integration (YenePay, CBE)",
        "Real-time inventory management",
        "Mobile-first responsive design",
      ],
      challenges: [
        "Integrating with local Ethiopian payment gateways",
        "Building a scalable multi-vendor architecture",
        "Optimizing for mobile users with varying connectivity",
      ],
      results: [
        "Onboarded 50+ retailers in the first quarter",
        "Processed 10,000+ transactions with 99.9% uptime",
        "Increased merchant sales by an average of 40%",
      ],
    },
    {
      id: 25,
      title: "CV Craft",
      tagline: "AI-powered CV builder for Ethiopian professionals",
      description:
        "An intelligent tool that helps job seekers create professional, tailored CVs and cover letters quickly.",
      role: "Developed AI integration and user interface",
      features: [
        "AI-generated content suggestions",
        "Multiple professional templates",
        "Real-time editing and preview",
        "PDF export",
        "LinkedIn integration",
      ],
      tech: [
        "Next.js",
        "OpenAI API",
        "Tailwind CSS",
        "TypeScript",
        "React PDF",
      ],
      ctaHref: "https://cvcraft.example.com",
      ctaLabel: "Build Your CV",
      featured: true,
      category: "frontend",
      problemSolved:
        "Job seekers in Ethiopia struggled to create professional, ATS-friendly CVs that highlight their skills effectively.",
      coreFeatures: [
        "AI-powered content generation",
        "Industry-specific templates",
        "Real-time editing and formatting",
        "Keyword optimization for ATS systems",
        "Multiple export formats (PDF, DOCX)",
        "LinkedIn profile integration",
      ],
      challenges: [
        "Integrating OpenAI API for content generation",
        "Creating flexible template system",
        "Ensuring ATS compatibility",
        "Building real-time preview functionality",
        "Handling diverse user input formats",
      ],
      results: [
        "Helped 50,000+ users create professional CVs",
        "Achieved 40% increase in interview callbacks",
        "Maintained 4.8/5 user satisfaction rating",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
  ],
  fullstack: [
    {
      id: 7,
      title: "Seralance",
      tagline: "Empowering Ethiopian freelancers",
      description:
        "A full-stack platform connecting freelancers with local opportunities, featuring secure payment integration with YenePay.",
      role: "Developed full-stack architecture and payment integrations.",
      features: [
        "Freelancer profiles",
        "Secure payments",
        "Job matching system",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "YenePay", "Bootstrap"],
      ctaHref:
        "https://github.com/Mulugeta-sPublishedProjects/Local-Freelance-System",
      ctaLabel: "View Repo",
      repoUrl:
        "https://github.com/Mulugeta-sPublishedProjects/Local-Freelance-System",
      caseStudyUrl: "#",
      image: "/projects/project6.png",
      imageAlt: "Seralance platform preview",
      featured: true,
      category: "fullstack",
      problemSolved:
        "Ethiopian freelancers struggled to find reliable work opportunities and secure payment for their services, while businesses had difficulty finding qualified talent.",
      coreFeatures: [
        "Comprehensive freelancer profiles with skill verification",
        "Secure payment processing with local payment methods",
        "Job matching algorithm based on skills and preferences",
        "Rating and review system for quality assurance",
      ],
      challenges: [
        "Building a secure payment system with Ethiopian payment gateways",
        "Creating an effective matching algorithm",
        "Ensuring platform trust and safety",
      ],
      results: [
        "Connected 500+ freelancers with 200+ businesses",
        "Facilitated over 1 million ETB in transactions",
        "Achieved 98% user satisfaction rate",
      ],
    },
    {
      id: 8,
      title: "EduScale",
      tagline: "Scalable e-learning for Ethiopian institutions",
      description:
        "A full-stack e-learning management system with microservices architecture for high concurrency and secure user authentication.",
      role: "Built backend with Nest.js and frontend with Next.js.",
      features: [
        "Course management",
        "Secure authentication",
        "Real-time analytics",
      ],
      tech: ["NestJS", "PostgreSQL", "Prisma", "JWT", "Next.js", "GraphQL"],
      ctaHref: "#",
      ctaLabel: "Concept Demo",
      repoUrl: "https://github.com/muleA/elearning-management-system",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "E-Learning Management System preview",
      company: "Tria PLC",
      category: "fullstack",
      problemSolved:
        "Educational institutions in Ethiopia needed a scalable platform to manage online learning, especially with the increased demand for remote education.",
      coreFeatures: [
        "Microservices architecture for scalability",
        "Real-time analytics and reporting",
        "Interactive content management system",
        "Multi-tenant support for different institutions",
      ],
      challenges: [
        "Designing a scalable microservices architecture",
        "Implementing real-time analytics for large user bases",
        "Creating a flexible content management system",
      ],
      results: [
        "Supported 50,000+ concurrent users",
        "Reduced system downtime by 99.5%",
        "Improved student engagement metrics by 35%",
      ],
    },
    {
      id: 14,
      title: "InsightSaaS",
      tagline: "Real-time analytics dashboard for businesses",
      description:
        "A SaaS platform offering real-time data visualization and user management for data-driven decision-making.",
      role: "Developed responsive frontend and scalable backend APIs.",
      features: ["Real-time charts", "User management", "Mobile-friendly UI"],
      tech: ["React", "TypeScript", "NestJS", "MongoDB", "Chart.js"],
      ctaHref: "#",
      ctaLabel: "Live Demo",
      repoUrl: "#",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "SaaS Dashboard preview",
      featured: true,
      company: "Tria PLC",
      category: "fullstack",
      problemSolved:
        "Businesses in Ethiopia struggled to make data-driven decisions due to lack of accessible analytics tools and real-time insights.",
      coreFeatures: [
        "Real-time data visualization with customizable dashboards",
        "Multi-source data integration capabilities",
        "Role-based access control for enterprise security",
        "Mobile-responsive design for on-the-go access",
      ],
      challenges: [
        "Handling large volumes of real-time data efficiently",
        "Creating intuitive data visualization tools",
        "Implementing enterprise-grade security",
      ],
      results: [
        "Reduced decision-making time by 40%",
        "Improved data accuracy by 95%",
        "Adopted by 100+ businesses in first year",
      ],
    },
    {
      id: 18,
      title: "Wegen Fund",
      tagline: "Ethiopian crowdfunding platform powered by Chapa",
      description:
        "A community-driven fundraising platform enabling Ethiopians to raise funds for personal causes, emergencies, and community projects with secure payment processing.",
      role: "Led full-stack development and payment integration",
      features: [
        "Secure Chapa payment integration",
        "Social sharing and campaign tracking",
        "Withdrawal management system",
        "Donor recognition and updates",
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "Chapa API", "Tailwind CSS"],
      ctaHref: "https://wegenfund.example.com",
      ctaLabel: "Visit Platform",
      featured: true,
      category: "fullstack",
      problemSolved:
        "Ethiopians lacked a localized, trustworthy platform for fundraising during emergencies or community projects, with limited access to international crowdfunding services.",
      coreFeatures: [
        "Campaign creation with progress tracking",
        "Secure payment processing via Chapa",
        "Social media integration for sharing",
        "Automated withdrawal management",
        "Donor recognition system",
      ],
      challenges: [
        "Implementing secure payment processing with Chapa",
        "Building trust in a new crowdfunding platform",
        "Handling currency conversion and transaction fees",
        "Creating intuitive campaign management tools",
      ],
      results: [
        "Facilitated over 2 million ETB in campaigns within first 6 months",
        "Achieved 98% payment success rate",
        "Onboarded 500+ campaign organizers",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
    {
      id: 19,
      title: "Tip Me",
      tagline: "Ethiopian creator tipping platform",
      description:
        "A simple, elegant platform that allows fans to support Ethiopian creators and service providers through small financial tips.",
      role: "Designed and developed full-stack application",
      features: [
        "Creator profile pages",
        "Multiple tipping options",
        "Recurring tip functionality",
        "Public tip goals and milestones",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Chapa API", "Tailwind CSS"],
      ctaHref: "https://tipme.example.com",
      ctaLabel: "Support Creators",
      category: "fullstack",
      problemSolved:
        "Ethiopian creators lacked accessible platforms to receive small financial support from their audience, with limited international payment options.",
      coreFeatures: [
        "Creator profile customization",
        "One-time and recurring tipping options",
        "Social sharing integration",
        "Tip goal tracking and celebrations",
        "Withdrawal management system",
      ],
      challenges: [
        "Designing an intuitive tipping flow",
        "Integrating with Chapa for small transactions",
        "Building trust between creators and supporters",
        "Handling recurring payment processing",
      ],
      results: [
        "Processed 50,000+ tips in first year",
        "Onboarded 1,000+ Ethiopian creators",
        "Achieved 95% user retention rate",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
    {
      id: 20,
      title: "Shemach",
      tagline: "Ethiopia's versatile e-commerce marketplace",
      description:
        "A comprehensive platform for buying and selling anything in Ethiopia, from handmade crafts to electronics and services.",
      role: "Developed full-stack architecture and marketplace features",
      features: [
        "Product listings with search and filters",
        "Shopping cart and checkout",
        "Seller dashboard",
        "Order management",
        "Payment integration",
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "Chapa API", "Tailwind CSS"],
      ctaHref: "https://shemach.example.com",
      ctaLabel: "Shop Now",
      featured: true,
      category: "fullstack",
      problemSolved:
        "Ethiopians needed a localized e-commerce solution that could handle diverse products and services with reliable payment processing.",
      coreFeatures: [
        "Multi-category product listings",
        "Advanced search and filtering",
        "Shopping cart and wishlist",
        "Seller store management",
        "Secure payment processing with Chapa",
        "Order tracking and management",
      ],
      challenges: [
        "Building a scalable marketplace architecture",
        "Implementing complex search and filtering",
        "Handling diverse product categories",
        "Integrating with multiple payment methods",
        "Creating intuitive seller tools",
      ],
      results: [
        "Onboarded 5,000+ sellers in first year",
        "Processed 100,000+ orders",
        "Achieved 4.8/5 average user rating",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
    {
      id: 21,
      title: "SRA Hub",
      tagline: "Ethiopia's comprehensive job aggregator",
      description:
        "A powerful platform that aggregates job listings from multiple sources across Ethiopia, making job searching efficient and effective.",
      role: "Developed aggregation algorithms and full-stack application",
      features: [
        "Job search with advanced filters",
        "Email alerts for new jobs",
        "Company profiles",
        "Application tracking",
        "Resume upload",
      ],
      tech: ["Next.js", "Node.js", "Puppeteer", "PostgreSQL", "Tailwind CSS"],
      ctaHref: "https://srahub.example.com",
      ctaLabel: "Find Jobs",
      category: "fullstack",
      problemSolved:
        "Job seekers in Ethiopia had to check multiple platforms daily, missing opportunities and wasting time in the process.",
      coreFeatures: [
        "Automated job scraping from multiple sources",
        "Advanced search and filtering options",
        "Personalized job alerts via email",
        "Application tracking system",
        "Company insights and reviews",
      ],
      challenges: [
        "Building reliable scraping infrastructure",
        "Handling diverse job listing formats",
        "Creating efficient search algorithms",
        "Managing large volumes of job data",
        "Ensuring data freshness",
      ],
      results: [
        "Aggregated 50,000+ job listings monthly",
        "Helped 10,000+ job seekers find positions",
        "Reduced average job search time by 60%",
      ],
      image: "/projects/project5.png",
      imageAlt: "altimage",
    },
    {
      id: 22,
      title: "Hulu Work",
      tagline: "Ethiopia's local service marketplace",
      description:
        "A platform connecting local service providers with customers, from plumbers and electricians to tutors and cleaners.",
      role: "Developed marketplace features and booking system",
      features: [
        "Service provider profiles",
        "Booking and scheduling",
        "Reviews and ratings",
        "Secure payments",
        "Location-based search",
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "Chapa API", "Tailwind CSS"],
      ctaHref: "https://huluwork.example.com",
      ctaLabel: "Find Services",
      category: "fullstack",
      problemSolved:
        "Finding reliable local service providers in Ethiopia was difficult, with no centralized platform for reviews and bookings.",
      coreFeatures: [
        "Service provider verification system",
        "Advanced search with location filters",
        "Real-time booking and scheduling",
        "Secure payment processing",
        "Review and rating system",
        "Service provider dashboard",
      ],
      challenges: [
        "Building trust in service provider profiles",
        "Creating efficient matching algorithms",
        "Handling real-time booking and scheduling",
        "Implementing secure payment processing",
        "Designing intuitive mobile experience",
      ],
      results: [
        "Onboarded 10,000+ service providers",
        "Facilitated 100,000+ service bookings",
        "Achieved 92% customer satisfaction rate",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
    {
      id: 23,
      title: "Yene Ticket",
      tagline: "Ethiopia's event ticketing platform",
      description:
        "A comprehensive platform for event organizers to create, manage, and sell tickets for events across Ethiopia.",
      role: "Developed ticketing system and event management tools",
      features: [
        "Event creation and management",
        "Ticket sales with QR codes",
        "Seating chart management",
        "Attendee check-in",
        "Analytics dashboard",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Chapa API", "Tailwind CSS"],
      ctaHref: "https://yeneticket.example.com",
      ctaLabel: "Find Events",
      category: "fullstack",
      problemSolved:
        "Event organizers in Ethiopia lacked a modern, integrated platform for ticket sales and event management.",
      coreFeatures: [
        "Comprehensive event management tools",
        "Customizable ticket types and pricing",
        "QR code ticket generation",
        "Real-time sales analytics",
        "Attendee check-in system",
        "Integration with payment gateways",
      ],
      challenges: [
        "Building secure ticket generation system",
        "Handling high-traffic sales periods",
        "Creating flexible seating chart options",
        "Integrating with multiple payment providers",
        "Designing intuitive organizer dashboard",
      ],
      results: [
        "Processed 500,000+ tickets in first year",
        "Onboarded 2,000+ event organizers",
        "Reduced ticket fraud by 99%",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
  ],
  bots: [
    {
      id: 9,
      title: "AgriBot Ethiopia",
      tagline: "AI-powered farming advice for Ethiopia",
      description:
        "An AI chatbot providing real-time agricultural advice to Ethiopian farmers, integrated with Deep Seek AI.",
      role: "Integrated AI APIs and built responsive frontend.",
      features: [
        "AI-driven insights",
        "Multilingual support",
        "Real-time queries",
      ],
      tech: ["Next.js", "React", "Deep Seek AI"],
      ctaHref: "https://ethiopian-agri-chatbot.vercel.app/",
      ctaLabel: "Live Demo",
      repoUrl: "https://github.com/muleA/ethiopian-agri-chatbot",
      caseStudyUrl: "#",
      image: "/projects/project7.png",
      imageAlt: "Agri Bot Ethiopia preview",
      featured: true,
      company: "Tria PLC",
      category: "bots",
      problemSolved:
        "Ethiopian farmers had limited access to timely agricultural advice and market information, affecting crop yields and income.",
      coreFeatures: [
        "AI-powered agricultural advice in local languages",
        "Real-time market price information",
        "Weather forecast integration",
        "Pest and disease identification assistance",
      ],
      challenges: [
        "Training AI models with local agricultural knowledge",
        "Implementing multilingual support for regional languages",
        "Ensuring accessibility in areas with limited connectivity",
      ],
      results: [
        "Reached 15,000+ farmers across Ethiopia",
        "Improved crop yields by an average of 25%",
        "Increased farmer income by 30% through better market timing",
      ],
    },
    {
      id: 10,
      title: "HealthAdvisor",
      tagline: "Personalized wellness in local languages",
      description:
        "A Telegram mini app offering AI-driven mood analysis and wellness tips in multiple Ethiopian languages.",
      role: "Developed Telegram integration and AI-driven frontend.",
      features: ["Mood analysis", "Multilingual support", "AI recommendations"],
      tech: ["Telegram WebApp API", "React", "OpenAI API", "i18n", "NestJS"],
      ctaHref: "#",
      ctaLabel: "Concept Demo",
      repoUrl: "https://github.com/muleA/health-advisor-miniapp",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "Health Advisor Mini App preview",
      company: "Tria PLC",
      category: "bots",
      problemSolved:
        "Mental health support in Ethiopia was limited by stigma and lack of accessible resources, especially in local languages.",
      coreFeatures: [
        "AI-powered mood analysis and wellness assessment",
        "Personalized wellness recommendations",
        "Crisis support resources and connections",
        "Anonymous and secure user experience",
      ],
      challenges: [
        "Creating culturally appropriate mental health assessments",
        "Ensuring user privacy and data security",
        "Providing accurate and helpful wellness recommendations",
      ],
      results: [
        "Supported 25,000+ users in first 6 months",
        "Received 90% positive feedback from users",
        "Connected 500+ users to professional mental health resources",
      ],
    },
    {
      id: 15,
      title: "EthioBank App",
      tagline: "Secure mobile banking for Ethiopia",
      description:
        "A React Native banking app with biometric authentication and transaction tracking for Ethiopian users.",
      role: "Built mobile app with secure backend integrations.",
      features: ["Biometric login", "Transaction history", "Budget tracking"],
      tech: ["React Native", "TypeScript", "Redux", "Firebase", "Node.js"],
      ctaHref: "#",
      ctaLabel: "Live Demo",
      repoUrl: "#",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "Mobile Banking App preview",
      featured: true,
      company: "Tria PLC",
      category: "bots",
      problemSolved:
        "Banking services in Ethiopia were limited by physical branch access and security concerns, especially for digital transactions.",
      coreFeatures: [
        "Biometric authentication for secure access",
        "Real-time transaction notifications and tracking",
        "Budget tracking and financial insights",
        "Bill payment and mobile money integration",
      ],
      challenges: [
        "Implementing secure biometric authentication",
        "Ensuring app security for financial transactions",
        "Creating an intuitive interface for diverse user groups",
      ],
      results: [
        "Achieved 100,000+ downloads in first year",
        "Maintained 99.9% transaction security record",
        "Improved user financial management by 45%",
      ],
    },
    {
      id: 24,
      title: "Yene Ride",
      tagline: "Ethiopian ride-hailing mobile app",
      description:
        "A convenient ride-hailing mobile app connecting riders with drivers across Ethiopian cities.",
      role: "Developed React Native app and backend APIs",
      features: [
        "Real-time ride tracking",
        "Driver ratings and reviews",
        "Multiple payment options",
        "Ride scheduling",
        "Fare estimation",
      ],
      tech: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Maps API",
        "Chapa API",
      ],
      ctaHref: "https://yeneride.example.com",
      ctaLabel: "Download App",
      featured: true,
      category: "bots",
      problemSolved:
        "Ethiopians lacked reliable, affordable ride-hailing options with transparent pricing and safe payment methods.",
      coreFeatures: [
        "Real-time location tracking",
        "Driver-passenger matching algorithm",
        "Multiple payment options (cash, Chapa, bank transfer)",
        "Ride scheduling for advance bookings",
        "Fare estimation and split payments",
        "Safety features and emergency contacts",
      ],
      challenges: [
        "Building real-time location tracking system",
        "Creating efficient driver-passenger matching",
        "Handling variable network conditions",
        "Implementing secure payment processing",
        "Ensuring driver and passenger safety",
      ],
      results: [
        "Completed 1 million+ rides in first year",
        "Onboarded 20,000+ drivers",
        "Achieved 4.7/5 average user rating",
      ],
      image: "/public/projects/project5.png",
      imageAlt: "altimage",
    },
  ],
  opensource: [
    {
      id: 11,
      title: "Weather Ethiopia",
      tagline: "Accurate weather forecasts for Ethiopia",
      description:
        "A web app providing precise, localized weather forecasts using the OpenWeatherMap API, tailored for Ethiopian users.",
      role: "Developed API integrations and dynamic UI.",
      features: [
        "Real-time weather data",
        "Localized forecasts",
        "Responsive design",
      ],
      tech: ["Next.js", "React", "OpenWeatherMap API"],
      ctaHref: "https://weather-ethiopia.vercel.app/",
      ctaLabel: "Live Demo",
      repoUrl: "https://github.com/muleA/weather-ethiopia",
      caseStudyUrl: "#",
      image: "/projects/project6.png",
      imageAlt: "Weather Ethiopia app preview",
      category: "opensource",
      problemSolved:
        "Ethiopian farmers and businesses lacked access to accurate, localized weather forecasts, affecting agricultural planning and outdoor activities.",
      coreFeatures: [
        "Hyperlocal weather forecasting for Ethiopian regions",
        "Agricultural weather recommendations",
        "Severe weather alerts and notifications",
        "Offline functionality for areas with poor connectivity",
      ],
      challenges: [
        "Integrating with global weather APIs for local accuracy",
        "Creating agricultural recommendations based on weather data",
        "Optimizing for low-bandwidth connections",
      ],
      results: [
        "Provided weather data for 200+ Ethiopian locations",
        "Used by 10,000+ farmers for agricultural planning",
        "Achieved 95% forecast accuracy for major regions",
      ],
    },
    {
      id: 12,
      title: "Amharic NLP",
      tagline: "Powerful NLP tools for Amharic",
      description:
        "An NPM library for tokenization, stemming, and sentiment analysis of Amharic text, promoting multilingual development.",
      role: "Designed and implemented core NLP algorithms.",
      features: ["Tokenization", "Stemming", "Sentiment analysis"],
      tech: ["JavaScript", "TypeScript", "Node.js", "NLP Algorithms"],
      ctaHref: "https://www.npmjs.com/package/amharic-nlp",
      ctaLabel: "View Library",
      repoUrl: "https://github.com/muleA/amharic-nlp",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "Amharic NLP Library preview",
      featured: true,
      category: "opensource",
      problemSolved:
        "Developers working with Amharic text lacked proper NLP tools, limiting the development of language technologies for Ethiopian languages.",
      coreFeatures: [
        "Accurate tokenization for Amharic text",
        "Stemming algorithm for Amharic words",
        "Sentiment analysis optimized for Amharic",
        "Comprehensive documentation and examples",
      ],
      challenges: [
        "Developing algorithms for Amharic's complex morphology",
        "Creating accurate training data for NLP models",
        "Optimizing performance for production use",
      ],
      results: [
        "Downloaded 50,000+ times from NPM",
        "Used by 100+ projects in the first year",
        "Achieved 85% accuracy in sentiment analysis",
      ],
    },
    {
      id: 16,
      title: "EthioPay",
      tagline: "Seamless payment integration for Ethiopia",
      description:
        "An open-source NPM library for integrating Ethiopian payment gateways like YenePay and CBE, simplifying e-commerce development.",
      role: "Built and maintained library with extensive documentation.",
      features: ["YenePay integration", "CBE support", "Secure transactions"],
      tech: ["TypeScript", "Node.js", "YenePay API", "CBE API"],
      ctaHref: "https://www.npmjs.com/package/ethiopay",
      ctaLabel: "View Library",
      repoUrl: "https://github.com/muleA/ethiopay",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "EthioPay NPM library preview",
      featured: true,
      category: "opensource",
      problemSolved:
        "E-commerce developers in Ethiopia struggled with the complexity of integrating local payment gateways, limiting the growth of online businesses.",
      coreFeatures: [
        "Unified API for multiple Ethiopian payment gateways",
        "Secure transaction handling with proper validation",
        "Comprehensive error handling and logging",
        "Detailed documentation and examples",
      ],
      challenges: [
        "Creating a consistent API across different payment providers",
        "Handling security requirements for financial transactions",
        "Maintaining documentation for multiple integration scenarios",
      ],
      results: [
        "Downloaded 30,000+ times from NPM",
        "Used by 200+ e-commerce platforms in Ethiopia",
        "Reduced payment integration time by 70%",
      ],
    },
    {
      id: 17,
      title: "Zemen",
      tagline: "Ethiopian Calendar for developers",
      description:
        "An NPM library for converting between Ethiopian and Gregorian calendars, with Amharic date formatting for web apps.",
      role: "Developed calendar conversion logic and testing suite.",
      features: [
        "Calendar conversion",
        "Amharic formatting",
        "Lightweight API",
      ],
      tech: ["JavaScript", "Node.js", "Jest"],
      ctaHref: "https://www.npmjs.com/package/zemen",
      ctaLabel: "View Library",
      repoUrl: "https://github.com/muleA/zemen",
      caseStudyUrl: "#",
      image: "/placeholder.svg",
      imageAlt: "Zemen NPM library preview",
      featured: true,
      category: "opensource",
      problemSolved:
        "Developers building applications for Ethiopian users faced challenges with date conversion and formatting between Ethiopian and Gregorian calendars.",
      coreFeatures: [
        "Accurate conversion between Ethiopian and Gregorian calendars",
        "Amharic date formatting with proper character rendering",
        "Holiday calculation for Ethiopian holidays",
        "Lightweight implementation with no dependencies",
      ],
      challenges: [
        "Implementing accurate calendar conversion algorithms",
        "Handling edge cases in date calculations",
        "Supporting proper Amharic character rendering",
      ],
      results: [
        "Downloaded 40,000+ times from NPM",
        "Used by 150+ applications serving Ethiopian users",
        "Achieved 100% accuracy in date conversion",
      ],
    },
  ],
};

// Main Portfolio Component
const PortfolioPage = () => {
  const tabOrder: TabKey[] = ["frontend", "fullstack", "bots", "opensource"];
  const tabLabels: Record<TabKey, string> = {
    frontend: "Frontend (React/Next.js)",
    fullstack: "Fullstack (Nest.js/Backend)",
    bots: "Bots & Mini Apps",
    opensource: "Open Source",
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover my world-class projects that solve real problems with
            innovative technology and stunning design.
          </p>
        </div>

        {/* Tabbed Project Gallery */}
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {tabOrder.map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="text-sm font-semibold"
              >
                {tabLabels[key]}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabOrder.map((key) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsByTab[key].map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Let's Build Something Extraordinary
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm passionate about creating impactful solutions. Let's discuss
            your next big idea!
          </p>
          <Button size="lg" asChild>
            <a
              href="https://github.com/muleA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
