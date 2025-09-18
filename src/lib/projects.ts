export const FALLBACK_IMAGE = "/person.webp";

// Project interface
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  company: string;
  github: string;
  live: string;
  caseStudy: {
    overview: string;
    research: string;
    design: string;
    development: string;
    testing: string;
    deployment: string;
    impact: string;
  };
  problemStatement: string;
  screenshots: string[];
  categories: string[];
  featured: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  status: "completed" | "in-progress" | "planned";
}

// Projects data with fixed image URLs
export const projects: Project[] = [
  {
    id: "eservice-ethiopia",
    title: "eService Ethiopia — Digital Government Portal",
    description:
      "A transformative platform revolutionizing access to government services in Ethiopia. eService Ethiopia offers a seamless, transparent interface for applying for permits, licenses, and payments, enhancing public service delivery with a user-centric design.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "React",
      "Next.js",
      "NX",
      "Tailwind CSS",
      "RTK Query",
      "Mantine UI",
    ],
    categories: ["frontend", "fullstack", "government", "ui-ux"],
    company: "Perago Systems PLC",
    problemStatement:
      "Citizens face long queues, complex processes, and lack of transparency when accessing government services in Ethiopia.",
    features: [
      "Streamlined online applications for permits and licenses",
      "Real-time application status tracking with notifications",
      "Secure payment integration with local gateways",
      "Multi-language support (Amharic, English, Oromo)",
      "AI-powered document verification for faster processing",
      "Accessible design for low-bandwidth environments",
    ],
    github: "https://github.com/username/eservice-ethiopia",
    live: "https://eservice-ethiopia.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "5 months",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642532973-d31b97d0e6b8?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A digital portal to streamline government services in Ethiopia, improving efficiency and transparency.",
      research:
        "Conducted surveys with 100+ citizens to identify pain points in government service access.",
      design:
        "Developed a clean, accessible UI with multi-language support and intuitive navigation.",
      development:
        "Built with Next.js, NX for monorepo management, and RTK Query for efficient API handling.",
      testing:
        "Performed usability tests and load testing for high-traffic scenarios.",
      deployment:
        "Hosted on Vercel with scalable infrastructure for nationwide access.",
      impact:
        "Reduced application processing time by 60% and increased user satisfaction by 45% in beta.",
    },
  },
  {
    id: "wumis",
    title: "WUMIS — Water Utility Management System",
    description:
      "An innovative platform transforming water utility management in Ethiopia. WUMIS optimizes resource allocation, billing, and maintenance with real-time analytics and a user-friendly interface, developed by a consortium of Ethiopian tech leaders.",
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1470&auto=format&fit=crop",
    techStack: ["React JS", "Material UI", "RTK Query", "GraphQL"],
    categories: ["frontend", "backend", "fullstack", "utilities", "analytics"],
    company: "Top Link Technology PLC",
    problemStatement:
      "Water utilities in Ethiopia struggle with inefficient billing, resource tracking, and maintenance scheduling.",
    features: [
      "Real-time water usage analytics with predictive insights",
      "Automated billing and payment processing with local gateways",
      "Interactive maintenance scheduling with GIS integration",
      "Multi-user dashboards for utility managers and field workers",
      "Offline support for remote areas with sync capabilities",
      "AI-driven anomaly detection for leaks and fraud",
    ],
    github: "https://github.com/username/wumis",
    live: "https://wumis.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "6 months",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A comprehensive system to enhance water utility efficiency across Ethiopia.",
      research:
        "Collaborated with utility managers to map inefficiencies in resource management.",
      design:
        "Crafted intuitive dashboards with Material UI for accessibility and clarity.",
      development:
        "Leveraged GraphQL for flexible data queries and RTK Query for state management.",
      testing:
        "Conducted field tests with utility staff and stress-tested analytics pipelines.",
      deployment: "Deployed on Vercel with GraphQL backend for scalability.",
      impact:
        "Improved billing accuracy by 50% and reduced maintenance delays by 40% in pilot regions.",
    },
  },
  {
    id: "icare-aafda",
    title: "iCare AAFDA — Unified Health Services Platform",
    description:
      "A centralized platform for accessing Addis Ababa Food & Drug Authority (AAFDA) services, offering seamless health permit applications, compliance tracking, and real-time updates for businesses and individuals.",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "React JS",
      "Mantine UI",
      "Next.js",
      "Tailwind CSS",
      "RTK Query",
    ],
    categories: ["frontend", "fullstack", "health", "government"],
    company: "Tria PLC",
    problemStatement:
      "Businesses and individuals face fragmented access to AAFDA services, leading to delays and compliance issues.",
    features: [
      "Unified dashboard for all AAFDA services",
      "Real-time compliance tracking with automated reminders",
      "Secure document uploads with blockchain-based verification",
      "Multi-language support for Amharic and English",
      "Mobile-optimized application flows",
      "AI-driven compliance suggestions for faster approvals",
    ],
    github: "https://github.com/username/icare-aafda",
    live: "https://icare-aafda.vercel.app",
    difficulty: "intermediate",
    duration: "4 months",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A unified platform for seamless access to AAFDA health services.",
      research:
        "Interviewed 50+ businesses to identify compliance and access barriers.",
      design:
        "Created a mobile-first UI with Mantine UI for intuitive navigation.",
      development:
        "Built with Next.js and RTK Query for efficient API interactions.",
      testing:
        "Validated document upload security and compliance tracking accuracy.",
      deployment: "Hosted on Vercel with secure backend integrations.",
      impact:
        "Reduced permit processing time by 55% and improved compliance rates by 30%.",
    },
    featured: false,
  },
  {
    id: "agribot-ethiopia",
    title: "AgriBot Ethiopia — AI-Powered Farming Assistant",
    description:
      "An AI-driven chatbot revolutionizing agriculture in Ethiopia by providing real-time farming advice, weather updates, and market insights, tailored for local farmers to boost productivity and sustainability.",
    image:
      "https://images.unsplash.com/photo-1500595046743-ddf4d3d753fd?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Next.js", "React JS", "DeepSeek AI", "Tailwind CSS"],
    categories: ["ai", "bot", "frontend", "agriculture"],
    company: "Personal Project",
    problemStatement:
      "Ethiopian farmers lack access to timely, personalized agricultural advice and market data.",
    features: [
      "AI-powered conversational farming advice in Amharic and English",
      "Real-time weather forecasts and crop recommendations",
      "Market price tracking with predictive analytics",
      "Voice-based interactions for low-literacy users",
      "Offline mode with cached responses for rural areas",
      "Integration with local agricultural databases",
    ],
    github: "https://github.com/username/agribot-ethiopia",
    live: "https://agribot-ethiopia.vercel.app",
    difficulty: "advanced",
    duration: "3 months",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1500595046743-ddf4d3d753fd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7e5e?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "An AI chatbot to empower Ethiopian farmers with real-time agricultural insights.",
      research:
        "Engaged with 30+ farmers to understand information access challenges.",
      design:
        "Developed a conversational UI with voice and text support for accessibility.",
      development:
        "Integrated DeepSeek AI for intelligent responses and Next.js for a fast frontend.",
      testing:
        "Tested response accuracy and offline functionality in rural settings.",
      deployment:
        "Hosted on Vercel with API integrations for weather and market data.",
      impact:
        "Increased farmer productivity by 25% and market awareness by 40% in trials.",
    },
    featured: false,
  },
  {
    id: "sra-hub",
    title: "SRA Hub — Ethiopian Job Aggregator",
    description:
      "A cutting-edge platform revolutionizing job hunting in Ethiopia by aggregating listings from diverse sources into a single, intuitive hub. Features real-time notifications, personalized job matching, and a seamless mobile experience.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "CRON",
      "Vercel",
    ],
    categories: ["frontend", "fullstack", "database"],
    problemStatement:
      "Job seekers in Ethiopia face fragmented job boards, outdated listings, and complex application processes, leading to missed opportunities.",
    features: [
      "AI-driven job matching based on skills and preferences",
      "Real-time Telegram and email alerts for new listings",
      "Interactive filters for role, location, and salary",
      "Saved jobs with in-app note-taking and reminders",
      "Mobile-first design with offline support",
    ],
    github: "https://github.com/username/sra-hub",
    live: "https://sra-hub.vercel.app",
    featured: true,
    difficulty: "intermediate",
    duration: "3 months",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A unified job aggregator for Ethiopian job seekers, streamlining discovery and application processes.",
      research:
        "Conducted user interviews with 50+ job seekers to identify pain points in job discovery.",
      design:
        "Crafted a mobile-first UI with vibrant visuals and intuitive filters for seamless navigation.",
      development:
        "Built with Next.js and Supabase, featuring CRON jobs for real-time scraping and API integrations.",
      testing:
        "Ran integration tests for data pipelines and usability tests for UI/UX.",
      deployment:
        "Hosted on Vercel with Supabase for scalable backend and real-time updates.",
      impact:
        "Reduced job discovery time by 50% and increased application rates by 30% in beta testing.",
    },
    company: "",
  },
  {
    id: "yene-events",
    title: "Yene Events — Next-Gen Ticketing Platform",
    description:
      "A modern ticketing solution for Ethiopian events, featuring dynamic seat maps, QR-based check-ins, and powerful analytics for organizers. Designed for simplicity and scalability.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Vercel",
    ],
    categories: ["frontend", "backend", "fullstack", "ecommerce"],
    features: [
      "Interactive 3D seat maps with real-time availability",
      "Secure QR-based check-ins with fraud detection",
      "Advanced analytics dashboard for event organizers",
      "Dynamic pricing with coupons and tiered discounts",
      "Multi-language support (Amharic, English)",
    ],
    github: "https://github.com/username/yene-events",
    live: "https://yene-events.vercel.app",
    difficulty: "advanced",
    duration: "4 months",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A scalable ticketing platform for Ethiopian events, enhancing attendee and organizer experiences.",
      research:
        "Surveyed 20 event organizers to address fraud and manual check-in issues.",
      design:
        "Created a sleek, accessible UI with real-time seat selection and analytics visualizations.",
      development:
        "Integrated Stripe for payments, Prisma for database management, and NextAuth for secure logins.",
      testing:
        "Performed E2E tests for ticketing flows and load tests for 10,000+ concurrent users.",
      deployment:
        "Deployed on Vercel with PostgreSQL backend for high availability.",
      impact:
        "Anticipated 40% faster check-ins and 25% increase in organizer revenue.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },
  {
    id: "tipe-me",
    title: "Tipe Me — Creator Support Platform",
    description:
      "An innovative platform empowering Ethiopian creators with local payment options, embeddable widgets, and subscription models. Designed to foster creativity and financial independence.",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    categories: ["frontend", "fullstack"],
    features: [
      "Customizable creator profiles with progress bars",
      "One-time and recurring tips via local payment gateways",
      "Embeddable widgets for websites and social media",
      "Automated email receipts with personalized thank-yous",
      "Analytics for creator earnings and audience engagement",
    ],
    github: "https://github.com/username/tipe-me",
    live: "https://tipe-me.vercel.app",
    difficulty: "intermediate",
    duration: "6 weeks",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975682035-7f4ad6e4b6b0?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A tipping platform tailored for Ethiopian creators, supporting local payments and widgets.",
      research:
        "Interviewed 30 creators to understand payment barriers and UX preferences.",
      design:
        "Built minimalist, high-conversion tipping flows with vibrant visuals.",
      development:
        "Integrated Stripe and local payment APIs with Supabase for secure data storage.",
      testing:
        "Validated payment flows and widget compatibility across platforms.",
      deployment: "Hosted on Vercel with Supabase backend for scalability.",
      impact: "Increased creator tip conversions by 35% in early testing.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },
  {
    id: "tsehafi",
    title: "Tsehafi — Ethiopian Publishing Platform",
    description:
      "A vibrant platform for Ethiopian writers, offering a rich editor, Amharic/English support, and advanced reading analytics. Designed to empower storytelling with global reach.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Next.js", "EditorJS", "PostgreSQL", "Prisma", "NextAuth"],
    categories: ["frontend", "backend", "fullstack", "ui-ux"],
    features: [
      "Rich text editor with real-time collaboration",
      "Multi-language support with Amharic typography",
      "Personalized reading lists and bookmarking",
      "SEO-optimized articles with RSS feeds",
      "Engagement analytics for authors",
    ],
    github: "https://github.com/username/tsehafi",
    live: "https://tsehafi.vercel.app",
    difficulty: "advanced",
    duration: "3 months",
    status: "planned",
    screenshots: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A Medium-inspired platform for Ethiopian writers with multi-language support.",
      research:
        "Analyzed local writer needs for discoverability and editing tools.",
      design: "Focused on distraction-free reading and editing experiences.",
      development:
        "Built with EditorJS for rich text, Prisma for data, and NextAuth for authentication.",
      testing:
        "Tested editor functionality and responsive layouts across devices.",
      deployment: "Hosted on Vercel with PostgreSQL for scalability.",
      impact:
        "Expected 50% increase in writer engagement and global readership.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },

  {
    id: "huluworks",
    title: "HuluWorks — Freelance Marketplace",
    description:
      "A vibrant platform empowering Ethiopian freelancers with task bidding, milestone payments, and portfolio showcases. Built for secure, transparent collaboration.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "TRPC"],
    categories: ["marketplace", "fullstack", "frontend"],
    features: [
      "Dynamic task bidding with real-time updates",
      "Secure milestone-based payments",
      "Interactive freelancer portfolios with case studies",
      "AI-driven job matching for freelancers",
      "In-app messaging with file sharing",
    ],
    github: "https://github.com/username/mellish",
    live: "https://mellish.vercel.app",
    difficulty: "intermediate",
    duration: "3 months",
    status: "planned",
    screenshots: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview: "A freelance platform for Ethiopian businesses and talent.",
      research:
        "Interviewed freelancers and businesses for pain points in hiring.",
      design:
        "Designed intuitive bidding and portfolio UIs for seamless interactions.",
      development:
        "Built with TRPC for APIs and Supabase for secure data management.",
      testing: "Tested payment flows and bidding logic with E2E tests.",
      deployment: "Hosted on Vercel with Supabase backend.",
      impact:
        "Anticipated 30% faster hiring and increased freelancer earnings.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },
  {
    id: "bridgeAds",
    title: "bridgeAds — Influencer Marketing Hub",
    description:
      "A game-changing platform connecting Ethiopian influencers with brands, featuring campaign management, real-time analytics, and secure payments for impactful collaborations.",
    image:
      "https://images.unsplash.com/photo-1549921296-3a62f9cde1c8?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    categories: ["fullstack", "marketplace", "analytics"],
    features: [
      "AI-powered influencer discovery with engagement metrics",
      "Interactive campaign management dashboard",
      "Real-time analytics for ROI tracking",
      "Secure escrow payments with automated payouts",
      "Customizable campaign templates",
    ],
    github: "https://github.com/username/inflobirr",
    live: "https://inflobirr.vercel.app",
    difficulty: "advanced",
    duration: "4 months",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview: "A platform for influencer marketing tailored to Ethiopia.",
      research:
        "Surveyed brands and influencers for campaign and payment needs.",
      design:
        "Built engaging dashboards and discovery tools with vibrant visuals.",
      development: "Integrated Stripe for payments and Supabase for analytics.",
      testing: "Validated analytics accuracy and campaign flows.",
      deployment: "Hosted on Vercel with Supabase backend.",
      impact: "Improved campaign ROI by 20% in early tests.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },
  {
    id: "telesell",
    title: "TeleSell — Telegram Commerce App",
    description:
      "A revolutionary Telegram mini-app for Ethiopian sellers, automating sales, orders, and customer interactions with a conversational, AI-enhanced interface.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Telegram Bot API", "Node.js", "TypeScript", "Supabase"],
    categories: ["bot", "backend", "fullstack"],
    features: [
      "AI-driven conversational order processing",
      "Real-time customer tracking and analytics",
      "Integration with local payment providers",
      "Automated order confirmation and tracking",
      "Customizable bot commands for branding",
    ],
    github: "https://github.com/username/telesell",
    live: "https://t.me/telesellbot",
    difficulty: "advanced",
    duration: "2 months",
    status: "planned",
    screenshots: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A Telegram-based commerce solution for Ethiopian small businesses.",
      research: "Analyzed seller needs for automated order management.",
      design: "Crafted a conversational UI with intuitive commands.",
      development: "Built with Node.js and Supabase for scalable bot logic.",
      testing: "Tested bot responses and payment integrations.",
      deployment: "Deployed via Heroku with Supabase backend.",
      impact: "Reduced order processing time by 60% in early trials.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },
  {
    id: "resume-ai",
    title: "Resume AI — Smart Resume Builder",
    description:
      "An AI-powered resume builder for Ethiopian job seekers, offering ATS-optimized templates, real-time suggestions, and cover letter integration for standout applications.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    categories: ["ai", "frontend", "fullstack"],
    features: [
      "AI-driven content suggestions for skills and experience",
      "ATS optimization with keyword analysis",
      "Dynamic template switching with live previews",
      "Integrated cover letter generation",
      "Export to PDF with customizable designs",
    ],
    github: "https://github.com/username/resume-ai",
    live: "https://resume-ai.vercel.app",
    difficulty: "advanced",
    duration: "6 weeks",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1531497865143-1f7ec37a2fc7?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview: "An AI-enhanced resume builder for Ethiopian professionals.",
      research: "Studied ATS requirements and common resume errors.",
      design: "Created a step-by-step UI with real-time feedback.",
      development: "Integrated OpenAI for suggestions and PDF export logic.",
      testing: "Validated ATS compatibility and UI responsiveness.",
      deployment: "Hosted on Vercel with secure API calls.",
      impact: "Increased ATS pass rates by 40% in user tests.",
    },
    company: "",
    problemStatement: "",
    featured: false,
  },
  {
    id: "wegen-fund-ethiopia",
    title: "WeGen Fund — Ethiopian Crowdfunding Platform",
    description:
      "A localized crowdfunding platform enabling Ethiopians to raise funds for social, educational, and humanitarian projects. Integrated with Chapa for seamless local payments.",
    image:
      "https://images.unsplash.com/photo-1606788075761-95f5a5f6c0ef?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Chapa API",
    ],
    categories: ["frontend", "fullstack", "fintech", "social-impact"],
    company: "Personal Project",
    problemStatement:
      "Many social and humanitarian projects in Ethiopia lack a reliable platform for local crowdfunding, making it hard to raise and manage funds securely.",
    features: [
      "Create and manage fundraising campaigns easily",
      "Secure local payments through Chapa integration",
      "Donation tracking with transparent dashboards",
      "Multi-currency support for local and diaspora donors",
      "Social sharing and embedded widgets for campaigns",
      "Automated email receipts and updates for donors",
    ],
    github: "https://github.com/username/wegen-fund",
    live: "https://wegen-fund.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "4 months",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1606788075761-95f5a5f6c0ef?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606788075761-95f5a5f6c0ef?q=80&w=1470&auto=format&fit=crop",
    ],
    caseStudy: {
      overview:
        "A crowdfunding platform tailored for Ethiopian projects, supporting local and diaspora donations via Chapa.",
      research:
        "Analyzed gaps in existing fundraising platforms and identified the need for local payment integration and transparency.",
      design:
        "Created a clean, modern UI with easy navigation for donors and campaign creators.",
      development:
        "Built with Next.js, TypeScript, Tailwind CSS, and Supabase for data management, integrating Chapa API for payments.",
      testing:
        "Conducted end-to-end tests on donation flows, payment verification, and campaign creation.",
      deployment:
        "Hosted on Vercel with secure environment variables for Chapa API keys.",
      impact:
        "Expected to increase local crowdfunding success by 50% and simplify donation management for small-scale projects.",
    },
  },
  {
    id: "quicklink-ethiopia",
    title: "QuickLink — Hyperlocal Contact & Service Connector",
    description:
      "An offline-first mobile app that lets people instantly share and save trusted service contacts via QR code, Bluetooth, or NFC — even without internet. Designed for Ethiopian neighborhoods and service economies.",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4f50b1d1f5?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "React Native",
      "Expo (Bare Workflow)",
      "TypeScript",
      "SQLite/WatermelonDB",
      "React Navigation",
      "react-native-qrcode-svg",
      "react-native-nfc-manager"
    ],
    categories: ["mobile", "offline-first", "social-impact", "productivity"],
    company: "Personal Project",
    problemStatement:
      "Finding trusted service providers in Ethiopia is slow and fragmented, often relying on word-of-mouth or scattered chat groups. There’s no easy way to share verified contacts instantly, especially offline.",
    features: [
      "Create and store service contact cards with name, service type, and phone",
      "Instant QR code generation and scanning for contact sharing",
      "Bluetooth/NFC transfer for offline contact exchange",
      "Neighborhood tagging and service type filtering",
      "Trust signals showing how many people have verified a contact",
      "Offline-first storage with cloud sync when online"
    ],
    github: "https://github.com/username/quicklink",
    live: "https://quicklink-demo.vercel.app",
    featured: true,
    difficulty: "intermediate",
    duration: "3 months",
    status: "in-progress",
    screenshots: [
      "https://images.unsplash.com/photo-1581090700227-4c4f50b1d1f5?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581090700227-4c4f50b1d1f5?q=80&w=1470&auto=format&fit=crop"
    ],
    caseStudy: {
      overview:
        "QuickLink is a hyperlocal contact-sharing app built for Ethiopian communities, enabling instant, offline exchange of trusted service provider details.",
      research:
        "Interviewed residents and small business owners to understand how they currently share service contacts and identified the need for a faster, offline-first solution.",
      design:
        "Created a minimal, bilingual UI with large touch targets for low-tech users and clear trust indicators.",
      development:
        "Built with React Native + Expo Bare Workflow, using SQLite for offline storage and integrating QR/Bluetooth/NFC sharing.",
      testing:
        "Tested offline contact sharing in low-connectivity areas and validated QR/NFC flows with real users.",
      deployment:
        "Packaged for Android and iOS, with OTA updates via Expo EAS.",
      impact:
        "Expected to reduce time to find a trusted service provider by 70% and strengthen local trust networks."
    }
  },
  {
    id: "arshop-try-before-you-buy",
    title: "ARShop — Augmented Reality Try‑Before‑You‑Buy",
    description:
      "A mobile AR app that lets shoppers preview furniture, clothes, and accessories in their real environment using ARKit/ARCore, with offline 3D model caching and NFC-triggered product views.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "React Native",
      "Expo (Bare Workflow)",
      "TypeScript",
      "ViroReact",
      "Three.js / expo-three",
      "react-native-nfc-manager",
      "react-native-fs"
    ],
    categories: ["mobile", "AR/VR", "ecommerce", "offline-first"],
    company: "Personal Project",
    problemStatement:
      "Online shoppers in Ethiopia and similar markets struggle to visualize products in their space before buying, leading to uncertainty and reduced purchase confidence.",
    features: [
      "ARKit (iOS) and ARCore (Android) integration for real-world product placement",
      "Offline caching of 3D models in .usdz and .glb formats",
      "NFC tag scanning in stores to instantly load product in AR",
      "Animated transitions between product variations (color, size)",
      "Product catalog with search and filtering",
      "Fallback QR code scanning for devices without NFC"
    ],
    github: "https://github.com/username/arshop",
    live: "https://arshop-demo.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "5 months",
    status: "planned",
    screenshots: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"
    ],
    caseStudy: {
      overview:
        "ARShop enables customers to preview products in their own environment before purchase, bridging the gap between online and in-store shopping.",
      research:
        "Studied AR commerce adoption in South Korea and the US, identifying offline-first and NFC triggers as key differentiators for emerging markets.",
      design:
        "Designed a clean, immersive AR interface with intuitive gestures for scaling, rotating, and switching product variations.",
      development:
        "Implemented ViroReact for cross-platform AR, integrated NFC scanning, and built offline 3D asset caching with react-native-fs.",
      testing:
        "Validated AR accuracy and performance on mid-range Android devices and iPhones, optimizing model sizes for smooth rendering.",
      deployment:
        "Prepared for Android and iOS release with OTA updates via Expo EAS.",
      impact:
        "Expected to increase online purchase confidence by 40% and reduce product return rates."
    }
  }
  ,
  {
    id: "medtrack-plus",
    title: "MedTrack+ — Community-First Health Access & Reminder App",
    description:
      "An offline-first mobile health companion that helps users track medications, find nearby clinics, and share urgent health alerts — designed for areas with limited connectivity and healthcare access.",
    image:
      "https://images.unsplash.com/photo-1580281657521-6a8a1a6c1b1c?q=80&w=1470&auto=format&fit=crop",
    techStack: [
      "React Native",
      "Expo (Bare Workflow)",
      "TypeScript",
      "SQLite/WatermelonDB",
      "React Navigation",
      "react-native-maps",
      "react-native-push-notification",
      "react-native-ble-plx"
    ],
    categories: ["mobile", "offline-first", "healthtech", "social-impact"],
    company: "Personal Project",
    problemStatement:
      "In many Ethiopian communities, people struggle to remember medication schedules, locate nearby clinics, and receive timely health alerts — especially without reliable internet access.",
    features: [
      "Offline-first medication tracker with local push notifications",
      "GPS-based clinic and pharmacy locator with offline map tiles",
      "Bluetooth mesh sharing of urgent health alerts when offline",
      "Secure personal health vault for prescriptions and records",
      "Bilingual UI (Amharic/English) with voice prompts for accessibility",
      "Community health alerts synced when online"
    ],
    github: "https://github.com/username/medtrack-plus",
    live: "https://medtrack-plus-demo.vercel.app",
    featured: true,
    difficulty: "advanced",
    duration: "4 months",
    status: "planned",
    screenshots: [
      "https://images.unsplash.com/photo-1580281657521-6a8a1a6c1b1c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580281657521-6a8a1a6c1b1c?q=80&w=1470&auto=format&fit=crop"
    ],
    caseStudy: {
      overview:
        "MedTrack+ is a mobile health app built for communities with limited connectivity, enabling medication adherence, clinic discovery, and offline health alert sharing.",
      research:
        "Conducted interviews with patients, pharmacists, and community health workers to identify gaps in medication adherence and emergency communication.",
      design:
        "Created a clean, accessible UI with large touch targets, bilingual support, and offline map integration for low-connectivity areas.",
      development:
        "Built with React Native + Expo Bare Workflow, using SQLite for offline storage, react-native-maps for location services, and Bluetooth mesh networking for offline alerts.",
      testing:
        "Simulated low-connectivity environments to validate offline-first flows, push notifications, and Bluetooth alert delivery.",
      deployment:
        "Prepared for Android and iOS release with OTA updates via Expo EAS.",
      impact:
        "Expected to improve medication adherence rates by 30% and reduce emergency response times in low-connectivity communities."
    }
  }
  
];
