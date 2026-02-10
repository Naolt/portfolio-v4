export const personalInfo = {
  name: "Naol Tamrat",
  title: "Full-Stack Developer & AI Engineer",
  tagline:
    "Building production systems from Next.js frontends to LLM-powered pipelines",
  email: "naol.delesa.official@gmail.com",
  phone: "+251910168641",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://www.linkedin.com/in/naolt16",
  github: "https://github.com/Naolt",
  leetcode: "https://leetcode.com/u/Naolt/",
  resumeUrl:
    "https://drive.google.com/file/d/1hXMYUosVxLDtJWkWK0Ml2RNba6qSQhsC/view?usp=sharing",
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frontend: ["Next.js", "React", "React Native", "Tailwind CSS", "Shadcn UI"],
  backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Django Ninja",
    "Celery",
    "Pydantic",
  ],
  ai: ["LangChain", "LangGraph", "MCP", "RAG", "Pinecone", "Google Gemini"],
  tools: [
    "Docker",
    "Git",
    "PostgreSQL",
    "Redis",
    "GCP",
    "Azure",
    "Firebase",
    "Vercel",
    "Playwright",
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  techStack: string;
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Hydrus.ai",
    role: "Back End Developer & AI Engineer",
    period: "Oct 2025 – Present",
    location: "Remote",
    isCurrent: true,
    bullets: [
      "Built medical document processing API using Django Ninja with async upload endpoints, job tracking, and Celery/Redis for concurrent document processing.",
      "Implemented OCR pipeline with Google Document AI batch processing for multi-page documents (15+ pages) with per-page confidence scoring and distributed result aggregation.",
      "Developed AI-powered medical entity extraction using Google Gemini 2.5 Flash with Pydantic schemas to extract medications, conditions, lab results and map clinical text to ICD-10-CM codes with span annotations.",
      "Deployed cloud-native infrastructure on GCP Cloud Run with Cloud Storage integration, Docker containerization, Cloud Build CI/CD, and PostgreSQL database.",
    ],
    techStack:
      "Python, Django Ninja, Celery, Redis, PostgreSQL, GCP, Google Gemini AI, Docker, Pydantic",
  },
  {
    company: "Fluid AI",
    role: "AI Engineer & Backend Developer",
    period: "Feb 2025 – Aug 2025",
    location: "Dubai (Remote)",
    bullets: [
      "Cut LLM API costs by 67% and response time from ~9s to ~3s by redesigning agent execution flow with LangChain's function calling and LangGraph's memory/state handling.",
      "Refactored monolithic agents into modular architecture by offloading tools to reusable MCP-based microservices and automating state management with LangGraph.",
      "Implemented RAG pipelines with Pinecone vector DB for semantic search across images, documents, and attachments, replacing keyword-based retrieval.",
      "Replaced top-down agent hierarchy with swarm architecture, enabling dynamic task handoff and direct inter-agent communication across all workflows.",
    ],
    techStack:
      "LangGraph, LangChain, MCP, Pinecone, RAG, Express.js, TypeScript, Cosmos DB, Azure, Firebase, Playwright",
  },
  {
    company: "Eskalate",
    role: "Project Lead & Frontend Developer",
    period: "Jul 2023 – Jan 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Shipped and launched eskalate.io, a platform connecting 800+ African tech talents with global job opportunities.",
      "Planned roadmaps and executed Agile sprints based on 90+ developer interviews, translating insights into actionable features.",
      "Boosted profile completion from 13% to 90%+ after one product iteration by introducing AI-powered rewriting, tooltips, and resume parsing.",
      "Architected the entire frontend structure in Next.js, implementing coding guidelines, linters, pre-commit hooks, CI/CD, and GitHub configurations.",
    ],
    techStack:
      "Next.js, TypeScript, Tailwind CSS, Shadcn UI, Jira, Figma, GitHub, GCP",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jan 2024 – Apr 2024",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Designed and developed three responsive websites — two ministry sites and a coffee export company site — each tailored to distinct audiences and business needs.",
      "Led the custom UI design process to ensure clear, accessible layouts for non-technical audiences.",
      "Integrated content management and dynamic features using Sanity CMS and MongoDB, enabling easy client updates without code.",
    ],
    techStack: "Next.js, TypeScript, Tailwind CSS, Sanity, MongoDB",
  },
];

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "PharmaHub",
    description:
      "Award-winning e-commerce pharmacy platform addressing medicine accessibility in Ethiopia. 1st place at Ethio-Health Hackathon.",
    bullets: [
      "E-commerce platform with integrated inventory and delivery system.",
      "Two React Native mobile apps (customer and delivery) with OpenStreetMap.",
      "Next.js role-based web dashboard for multi-pharmacy management.",
    ],
    techStack: ["Next.js", "React Native", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/Naolt/pharmaHub",
    featured: true,
  },
  {
    title: "Boutique IMS",
    description:
      "Full-stack Inventory Management System for a fashion boutique with AI-powered assistant, sales analytics, and role-based access control.",
    bullets: [
      "Product catalog with variant management (sizes, colors), real-time stock tracking, and low-stock alerts.",
      "AI assistant powered by LangChain/LangGraph + Google Gemini for natural language inventory and sales queries.",
      "Sales analytics dashboard with revenue trends, top-selling products, and inventory distribution charts.",
    ],
    techStack: ["Next.js", "Express.js", "PostgreSQL", "LangGraph", "TypeORM"],
    liveUrl: "https://ims-sand-two.vercel.app",
    githubUrl: "https://github.com/Naolt/IMS",
    featured: true,
  },
  {
    title: "Restaurant Reservation Automation",
    description:
      "Multi-platform automation system that discovers and books restaurant reservations across Google Maps, OpenTable, and SevenRooms.",
    bullets: [
      "Intelligent browser-use fallback for unsupported platforms.",
      "99%+ success rate through parallel processing and robust error recovery.",
    ],
    techStack: ["Python", "Playwright", "Browser-Use"],
    githubUrl: "https://github.com/Naolt/Browser-Automation-Service",
  },
  {
    title: "Eskalate.io",
    description:
      "Platform connecting 800+ African tech talents with global job opportunities. Built and launched as Project Lead.",
    bullets: [
      "AI-powered profile rewriting and resume parsing.",
      "Full frontend architecture with Next.js and TypeScript.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GCP"],
    liveUrl: "https://eskalate.io",
  },
  {
    title: "AW Coffee Export",
    description:
      "Responsive website for an Ethiopian specialty coffee exporter with CMS integration for easy client updates.",
    bullets: [
      "Dynamic content management through Sanity CMS.",
      "SEO-optimized with accessible design for non-technical audiences.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    liveUrl: "https://www.awcoffeeexport.com",
    githubUrl: "https://github.com/Naolt/aw-coffee",
  },
  {
    title: "ISA 60 Min Ethio",
    description:
      "Interactive website showcasing a ministry organization's impact across 12+ Ethiopian cities.",
    bullets: [
      "Sanity CMS for staff-managed content updates.",
      "Custom UI design with Figma for non-technical audiences.",
    ],
    techStack: ["Next.js", "TypeScript", "Sanity", "Figma"],
    liveUrl: "https://isa60minethio.com",
    githubUrl: "https://github.com/Naolt/isa60-web",
  },
  {
    title: "Kebron Church",
    description:
      "Ministry website to showcase sermons, events, and outreach initiatives with content management.",
    bullets: [
      "Dynamic content features with MongoDB backend.",
      "Responsive design tailored for community engagement.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://kebronchurch.org",
    githubUrl: "https://github.com/Naolt/kebron",
  },
  {
    title: "Unsubscribe Agent",
    description:
      "AI-powered automation platform that processes forwarded emails, extracts unsubscribe links, and uses an LLM-controlled browser agent to unsubscribe automatically.",
    bullets: [
      "Dual extraction strategy: HTML parsing first, LLM fallback for complex emails — reduces API calls by 90%.",
      "Domain learning system that caches successful unsubscribe URLs for instant future processing.",
      "Celery + Redis task queue with FastAPI webhook for async email processing at scale.",
    ],
    techStack: ["Python", "FastAPI", "LangChain", "Celery", "Playwright", "Docker"],
    githubUrl: "https://github.com/Naolt/Unsubscribe-Agent",
  },
];

export const education = [
  {
    institution: "Ready Tensor",
    degree: "Agentic AI Development",
    period: "Aug 2025 – Oct 2025",
  },
  {
    institution: "Addis Ababa Science And Technology University",
    degree: "BSc in Software Engineering",
    period: "Oct 2019 – Jun 2024",
    note: "CGPA 3.63/4.0 — Presidential Award for 3.9 GPA",
  },
  {
    institution: "ALX Africa",
    degree: "Data Science",
    period: "Jun 2023 – Aug 2024",
  },
  {
    institution: "A2SV (Africa To Silicon Valley)",
    degree: "Software Engineering Fellowship",
    period: "Oct 2022 – Oct 2023",
    note: "Top 1% of applicants, Google-backed — 600+ LeetCode problems solved",
  },
];

export const achievements = [
  {
    title: "1st Place at Ethio-Health Hackathon",
    description:
      "Won 1st place and 50,000 ETB at the Ethio-Health Hackathon. Recognized for PharmaHub, an innovative pharmaceutical sales and delivery platform.",
    date: "Mar 2024",
  },
  {
    title: "Mentorship Initiative",
    description:
      "Voluntarily mentored 6 students in Python and DSA, designing 80+ practice problems and a progress tracker to improve coding skills.",
    date: "Aug 2025",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
