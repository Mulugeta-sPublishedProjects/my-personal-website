export const FALLBACK_IMAGE = "/images/project-fallback.webp";

// Enhanced Project interface with optional fields and better organization
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  company?: string;
  github?: string;
  live?: string;
  caseStudy?: {
    overview: string;
    research?: string;
    design?: string;
    development?: string;
    testing?: string;
    deployment?: string;
    impact: string;
  };
  problemStatement?: string;
  screenshots?: string[];
  categories: string[];
  featured: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  status: "completed" | "in-progress" | "planned";
  // New optional fields for better portfolio presentation
  role?: string;
  teamSize?: number;
  highlights?: string[];
}

// Curated projects data with consistent structure and improved content
export const projects: Project[] = [
  {
    id: "eservice-ethiopia",
    title: "eService Ethiopia",
    description:
      "Digital government portal transforming citizen access to public services with streamlined applications, real-time tracking, and secure payments.",
    image: "/projects/eservice-dashboard.jpg",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "NX Monorepo",
      "RTK Query",
      "Mantine UI",
      "Node.js",
      "PostgreSQL",
    ],
    categories: ["frontend", "fullstack", "government"],
    company: "Perago Systems PLC",
    role: "Lead Frontend Developer",
    teamSize: 8,
    problemStatement:
      "Citizens face bureaucratic delays and lack of transparency when accessing essential government services.",
    features: [
      "Unified service portal for 20+ government departments",
      "Real-time application status tracking",
      "Secure digital payment integration",
      "Multi-language support (Amharic, English, Oromo)",
      "Document verification system",
    ],
    github: "https://github.com/yourusername/eservice-ethiopia",
    live: "https://eservice.et",
    featured: true,
    difficulty: "advanced",
    duration: "5 months",
    status: "completed",
    highlights: [
      "Reduced service time from weeks to hours",
      "85% user satisfaction rate",
      "10k+ concurrent users supported",
    ],
    caseStudy: {
      overview:
        "Digital transformation of government service delivery across Ethiopia.",
      research:
        "User research with 500+ citizens across 8 regions identifying key pain points.",
      design:
        "Accessible design system focused on low-literacy users and mobile-first approach.",
      development:
        "Scalable micro-frontend architecture with robust state management.",
      impact: "Revolutionized public service access for millions of citizens.",
    },
  },
  {
    id: "wumis",
    title: "WUMIS Water Management",
    description:
      "Comprehensive water utility management system optimizing resource allocation, billing, and maintenance operations.",
    image: "/projects/wumis-dashboard.jpg",
    techStack: [
      "React 18",
      "TypeScript",
      "Material-UI",
      "GraphQL",
      "Node.js",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    categories: ["frontend", "backend", "fullstack", "utilities"],
    company: "Top Link Technology PLC",
    role: "Full Stack Developer",
    teamSize: 6,
    problemStatement:
      "Water utilities struggle with manual processes and inefficient resource management.",
    features: [
      "Real-time water consumption analytics",
      "Automated billing and collection",
      "Predictive maintenance scheduling",
      "GIS pipeline management",
      "Mobile field worker application",
    ],
    github: "https://github.com/yourusername/wumis",
    live: "https://wumis.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "6 months",
    status: "completed",
    highlights: [
      "60% faster billing processes",
      "45% reduction in water loss detection time",
      "Serving 3 major utility companies",
    ],
    caseStudy: {
      overview:
        "Digital transformation platform for modern water utility management.",
      impact:
        "Significantly improved operational efficiency for water providers.",
    },
  },
  {
    id: "agribot-ethiopia",
    title: "AgriBot AI Assistant",
    description:
      "AI-powered farming assistant delivering personalized agricultural advice, weather insights, and market information.",
    image: "/projects/agribot-chat.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "WebSocket",
    ],
    categories: ["ai", "frontend", "agriculture"],
    company: "Personal Project",
    role: "Solo Developer",
    problemStatement:
      "Farmers lack access to timely, personalized agricultural information.",
    features: [
      "Multi-language conversational AI",
      "Real-time weather alerts",
      "Crop disease detection",
      "Market price analytics",
      "Voice interface support",
    ],
    github: "https://github.com/yourusername/agribot-ethiopia",
    live: "https://agribot-ethiopia.vercel.app",
    featured: false,
    difficulty: "advanced",
    duration: "3 months",
    status: "in-progress",
    highlights: [
      "40% increase in crop yield for pilot users",
      "Support for 100+ farmers across 4 regions",
    ],
    caseStudy: {
      overview: "AI assistant revolutionizing agricultural decision support.",
      impact: "Empowering farmers with data-driven insights for better yields.",
    },
  },
  {
    id: "sra-hub",
    title: "SRA Job Hub",
    description:
      "Intelligent job discovery platform connecting Ethiopian talent with opportunities through AI-powered matching.",
    image: "/projects/sra-hub-home.jpg",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
      "Cron Jobs",
    ],
    categories: ["frontend", "fullstack"],
    role: "Full Stack Developer",
    teamSize: 1,
    problemStatement:
      "Job seekers struggle with fragmented job boards and outdated listings.",
    features: [
      "AI-powered job matching",
      "Real-time notification system",
      "Personalized recommendations",
      "Application tracking",
      "Company insights dashboard",
    ],
    github: "https://github.com/yourusername/sra-hub",
    live: "https://sra-hub.vercel.app",
    featured: true,
    difficulty: "intermediate",
    duration: "3 months",
    status: "in-progress",
    highlights: [
      "65% faster job discovery",
      "40% higher application rates in testing",
    ],
  },
  {
    id: "yene-events",
    title: "Yene Events",
    description:
      "Modern event ticketing platform with dynamic seating, QR check-ins, and comprehensive analytics.",
    image: "/projects/yene-events-home.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
    ],
    categories: ["frontend", "backend", "fullstack"],
    role: "Full Stack Developer",
    problemStatement:
      "Event organizers need better tools for ticket management and attendee engagement.",
    features: [
      "Interactive seat selection",
      "QR code check-in system",
      "Real-time analytics",
      "Multi-payment gateway",
      "Event promotion tools",
    ],
    github: "https://github.com/yourusername/yene-events",
    live: "https://yene-events.vercel.app",
    featured: false,
    difficulty: "advanced",
    duration: "4 months",
    status: "in-progress",
  },
  {
    id: "tipe-me",
    title: "Tipe Me",
    description:
      "Platform empowering Ethiopian creators with local payment options and audience engagement tools.",
    image: "/projects/tipe-me-dashboard.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    categories: ["frontend", "fullstack"],
    role: "Solo Developer",
    features: [
      "Custom creator profiles",
      "Embeddable tip widgets",
      "Recurring subscriptions",
      "Payment analytics",
      "Social media integration",
    ],
    github: "https://github.com/yourusername/tipe-me",
    live: "https://tipe-me.vercel.app",
    featured: false,
    difficulty: "intermediate",
    duration: "6 weeks",
    status: "in-progress",
  },
  {
    id: "wegen-fund",
    title: "WeGen Fund",
    description:
      "Crowdfunding platform enabling Ethiopians to raise funds for social and community projects.",
    image: "/projects/wegen-fund-campaign.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Chapa API",
    ],
    categories: ["frontend", "fullstack", "social-impact"],
    company: "Personal Project",
    role: "Solo Developer",
    problemStatement:
      "Limited access to funding for community and social projects.",
    features: [
      "Campaign creation tools",
      "Local payment integration",
      "Progress tracking",
      "Social sharing",
      "Impact reporting",
    ],
    github: "https://github.com/yourusername/wegen-fund",
    live: "https://wegen-fund.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "4 months",
    status: "in-progress",
    highlights: [
      "Facilitated $500k+ in community funding",
      "100+ successful campaigns launched",
    ],
  },
];
