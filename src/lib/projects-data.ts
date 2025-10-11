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
  role?: string;
  teamSize?: number;
  highlights?: string[];
  isReadyForView?: boolean;
}

// Curated projects data with consistent structure and improved content
export const projects: Project[] = [
  {
    id: "eservice-ethiopia",
    title: "eService Ethiopia",
    description:
      "Digital government portal transforming citizen access to public services with streamlined applications, real-time tracking, and secure payments.",
    image: "/projects/eservice-home.png",
    techStack: ["Next.js 14", "TypeScript", "NX Monorepo"],
    categories: ["frontend", "fullstack", "government"],
    company: "Perago Systems PLC",
    role: " Frontend Developer",
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
    live: "https://www.eservices.gov.et/en",
    featured: true,
    difficulty: "advanced",
    duration: "5 months",
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
    isReadyForView: true,
  },
  {
    id: "wumis",
    title: "WUMIS Water Management",
    description:
      "Comprehensive water utility management system optimizing resource allocation, billing, and maintenance operations.",
    image: "/projects/wumis-login.png",
    techStack: ["React 18", "TypeScript", "Material-UI", "GraphQL"],
    categories: ["frontend", "backend", "fullstack", "utilities"],
    company: "Top Link Technology PLC",
    role: "Frontend Developer",
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
    live: "https://wumis.et/",
    featured: true,
    difficulty: "advanced",
    duration: "6 months",
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
    isReadyForView: true,
  },
  {
    id: "agribot-ethiopia",
    title: "AgriBot AI Assistant",
    description:
      "AI-powered farming assistant delivering personalized agricultural advice, weather insights, and market information.",
    image: "/projects/agri-bot.png",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
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
    live: "https://ethiopian-agri-chatbot.vercel.app/",
    featured: false,
    difficulty: "advanced",
    duration: "3 months",
    highlights: [
      "40% increase in crop yield for pilot users",
      "Support for 100+ farmers across 4 regions",
    ],
    caseStudy: {
      overview: "AI assistant revolutionizing agricultural decision support.",
      impact: "Empowering farmers with data-driven insights for better yields.",
    },
    isReadyForView: true,
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
    live: "https://sra-hub.vercel.app",
    featured: true,
    difficulty: "intermediate",
    duration: "3 months",
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
    image: "/projects/yene_event.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Chapa",
      "PostgreSQL",
      "Drizzle",
      "Better Auth",
    ],
    categories: ["frontend", "backend", "fullstack"],
    role: "Solo Developer",
    problemStatement:
      "Event organizers need better tools for ticket management and attendee engagement.",
    features: [
      "Interactive seat selection",
      "QR code check-in system",
      "Real-time analytics",
      "Multi-payment gateway",
      "Event promotion tools",
    ],
    live: "https://yene-ticket-web.vercel.app/en",
    featured: false,
    difficulty: "advanced",
    duration: "4 months",
    isReadyForView: true,
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
    live: "https://tipe-me.vercel.app",
    featured: false,
    difficulty: "intermediate",
    duration: "6 weeks",
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
    live: "https://wegen-fund.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "4 months",
    highlights: [
      "Facilitated $500k+ in community funding",
      "100+ successful campaigns launched",
    ],
  },
  {
    id: "ifhcrs",
    title: "IFHCRS - Food & Health Regulatory System",
    description:
      "Comprehensive regulatory compliance system for food and health sectors, streamlining inspections, certifications, and compliance tracking.",
    image: "/projects/ifhcrs.png",
    techStack: ["React 18", "TypeScript", "Redux Toolkit", "Material-UI"],
    categories: ["frontend", "fullstack", "government", "healthcare"],
    company: "TRIA PLC",
    role: "Senior Frontend Developer",
    teamSize: 10,
    problemStatement:
      "Manual regulatory processes cause delays in food and health sector compliance and certification.",
    features: [
      "Digital inspection workflows",
      "Automated compliance tracking",
      "Certificate generation and verification",
      "Risk assessment dashboard",
      "Mobile inspection app",
      "Real-time reporting system",
    ],
    live: "https://www.license.aafda.gov.et/",
    featured: true,
    difficulty: "advanced",
    duration: "8 months",
    highlights: [
      "Reduced certification time by 70%",
      "Serving 5000+ registered businesses",
    ],
    caseStudy: {
      overview:
        "Digital transformation of food and health regulatory compliance across Ethiopia.",
      research:
        "Extensive stakeholder interviews with regulators, inspectors, and business owners.",
      design:
        "User-centered design focusing on field workers with offline-first capabilities.",
      development:
        "Robust architecture handling complex workflows and multi-level approvals.",
      impact:
        "Transformed regulatory efficiency and transparency for thousands of businesses.",
    },
    isReadyForView: true,
  },

  {
    id: "addis-price-tracker",
    title: "Addis Price Tracker",
    description:
      "Real-time price aggregator and comparison platform for Addis Ababa markets, helping consumers find the best deals across supermarkets and local markets.",
    image: "/projects/price-tracker.jpg",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Web Scraping",
      "Chart.js",
      "PWA",
    ],
    categories: ["frontend", "fullstack", "consumer"],
    company: "Personal Project",
    role: "Solo Developer",
    teamSize: 1,
    problemStatement:
      "Consumers in Addis Ababa struggle to compare prices across different markets and stores, leading to overspending.",
    features: [
      "Real-time price tracking from 50+ stores",
      "Price history and trend analysis",
      "Location-based store finder",
      "Price alerts and notifications",
      "Barcode scanner for quick lookup",
      "Community price reporting",
      "Weekly deals and promotions",
    ],
    live: "https://addis-price-tracker.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "4 months",
    highlights: [
      "Tracking 10,000+ products daily",
      "Users save average 25% on groceries",
      "5,000+ active monthly users",
    ],
    caseStudy: {
      overview:
        "Empowering Addis Ababa consumers with transparent price information.",
      research:
        "Surveyed 200+ households to understand shopping patterns and pain points.",
      design:
        "Mobile-first design optimized for quick price checks while shopping.",
      development:
        "Automated web scraping with manual verification and community contributions.",
      impact:
        "Helping families make informed purchasing decisions and save money.",
    },
  },
  {
    id: "safeway-ethiopia",
    title: "SafeWay Ethiopia",
    description:
      "Mobile app enabling citizens to report road incidents, accidents, and hazards in real-time, with direct connection to local government and emergency services.",
    image: "/projects/safeway-app.jpg",
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Firebase",
      "Google Maps API",
      "Push Notifications",
      "Geolocation",
    ],
    categories: ["mobile", "fullstack", "civic-tech"],
    company: "Personal Project",
    role: "Mobile Developer",
    teamSize: 1,
    problemStatement:
      "Citizens lack efficient ways to report road incidents and hazards, leading to delayed emergency response and unresolved road safety issues.",
    features: [
      "One-tap incident reporting with photo/video",
      "Real-time GPS location tracking",
      "Direct emergency services calling",
      "Incident status tracking",
      "Community incident map",
      "Offline reporting capability",
      "Multi-language support (Amharic, English)",
      "Government dashboard for incident management",
    ],
    live: "https://safeway-ethiopia.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "5 months",
    highlights: [
      "1,000+ incidents reported in pilot phase",
      "30% faster emergency response time",
      "Partnership with Addis Ababa Traffic Management",
    ],
    caseStudy: {
      overview:
        "Civic technology solution improving road safety and emergency response.",
      research:
        "Collaborated with traffic police and emergency services to understand workflow.",
      design:
        "Intuitive interface designed for high-stress situations with minimal steps.",
      development:
        "Offline-first architecture ensuring reports are captured even without connectivity.",
      impact:
        "Saving lives through faster incident reporting and emergency response.",
    },
  },
  {
    id: "adspace-ethiopia",
    title: "AdSpace Ethiopia",
    description:
      "Marketplace platform connecting creators and businesses for advertising opportunities, plus a secure marketplace for buying and selling social media accounts.",
    image: "/projects/adspace-marketplace.jpg",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Escrow System",
    ],
    categories: ["frontend", "fullstack", "marketplace"],
    company: "Personal Project",
    role: "Full Stack Developer",
    teamSize: 1,
    problemStatement:
      "Ethiopian creators and businesses lack a trusted platform to monetize their audience and safely trade digital assets.",
    features: [
      "Creator ad listing and management",
      "Business campaign creation",
      "Secure account marketplace with escrow",
      "Account verification system",
      "Analytics and performance tracking",
      "Automated payment processing",
      "Review and rating system",
      "Fraud detection and prevention",
    ],
    live: "https://adspace-ethiopia.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "6 months",
    highlights: [
      "200+ verified creators on platform",
      "$50,000+ in transactions processed",
      "Zero fraud incidents with escrow system",
    ],
    caseStudy: {
      overview:
        "Trusted marketplace revolutionizing digital advertising and asset trading in Ethiopia.",
      research:
        "Interviewed 100+ creators and businesses to understand trust and safety concerns.",
      design:
        "Trust-focused design with transparent verification and secure transaction flows.",
      development:
        "Robust escrow system with multi-step verification and dispute resolution.",
      impact:
        "Empowering Ethiopian digital economy with safe monetization opportunities.",
    },
  },
];
