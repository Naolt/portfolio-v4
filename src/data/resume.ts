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
    company: "Hydrus.ai (via SDL Engineering client engagements)",
    role: "Full-Stack & AI Engineer",
    period: "Oct 2025 – Present",
    location: "Remote",
    isCurrent: true,
    bullets: [
      "Attian: Executed a pixel-perfect Framer-to-Next.js migration, replicated design motion, and architected a 5-schema Sanity CMS with automated lead capture and ISR publishing workflows.",
      "AOSN: Managed Render infrastructure and Sentry diagnostics, re-engineered Stytch MFA/auth flows, and resolved backend session-validation issues to eliminate recurring 401 regressions.",
      "PrivyAI: Optimized AI agent provisioning and RunPod/Docker runtimes, and integrated Web Speech input plus privacy-safe observability for real-time agent interactions.",
      "JanaIntake: Built medical document pipelines with Django Ninja and Celery, and used Gemini + Pydantic to automate clinical entity extraction and ICD-10 mapping.",
    ],
    techStack:
      "TypeScript, JavaScript, Python, Next.js, React, FastAPI, Sanity CMS, PostgreSQL, Docker, RunPod, Stytch, Sentry, Plausible, PostHog",
  },
  {
    company: "Fluid AI",
    role: "AI Engineer & Backend Developer",
    period: "Feb 2025 – Aug 2025",
    location: "Dubai (Remote)",
    bullets: [
      "Cut LLM API costs by 67% and response time from ~9s to ~3s by building a response interception system that bypasses LLM calls for known structured outputs from tools like Maps, Calendar, and Hotels.",
      "Refactored monolithic agents into modular architecture by offloading tools to 7+ reusable MCP-based microservices and automating state management with LangGraph.",
      "Integrated RAG pipelines with vector search for semantic queries across events and todos, replacing keyword-based retrieval in agent workflows.",
      "Replaced top-down agent hierarchy with swarm architecture, enabling dynamic task handoff and direct inter-agent communication across all workflows.",
      "Built browser automation service with FastAPI and browser-use for multi-platform restaurant reservations across Google Maps, OpenTable, and SevenRooms, with parallel browser instances and Chrome profile management.",
    ],
    techStack:
      "LangGraph, LangChain, MCP, RAG, Express.js, FastAPI, Laravel, Python, TypeScript, JavaScript, Cosmos DB, Azure, Firebase, Playwright, browser-use",
  },
  {
    company: "Eskalate",
    role: "Project Lead & Frontend Developer",
    period: "Aug 2024 – Jan 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Led product direction for eskalate.io, planning roadmaps and executing Agile sprints based on 90+ developer interviews.",
      "Boosted profile completion from 13% to 90%+ by adding contextual tooltips, simplifying editors for consistent formatting, and conducting targeted outreach.",
      "Rebuilt the marketing landing page with service sections, navbar dropdowns, and responsive service pages.",
      "Dockerized the application with multi-stage builds for GCP deployment.",
    ],
    techStack:
      "Next.js, TypeScript, Tailwind CSS, Shadcn UI, Docker, Jira, Figma, GitHub, GCP",
  },
  {
    company: "Eskalate",
    role: "Frontend Developer",
    period: "Oct 2023 – Jul 2024",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Architected the frontend from scratch — folder structure, Redux/RTK Query state layer, refresh token system, coding guidelines, linters, CI/CD, and GitHub configurations.",
      "Built the complete profile system (20+ components): multi-step forms with validation, drag-and-drop resume upload, image cropping, and progress tracking for 800+ users.",
      "Led frontend contributions across a 5-developer frontend team within a 9-developer cross-functional team.",
    ],
    techStack:
      "Next.js, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, GCP",
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
    title: "Arena",
    description:
      "AI campaign intelligence platform that unifies Google, Meta, and Bing ad data into ML-powered planning, simulation, and creative tools for PPC account teams.",
    bullets: [
      "Built a data pipeline ingesting and unifying 58,000+ rows of ad performance data across Google, Meta, and Bing into BigQuery for cross-platform analytics.",
      "Trained and deployed three platform-specific ML regression models on 36,500 rows to power a budget simulator and allocator for predicted spend efficiency.",
      "Built a RAG campaign creator with Qwen3-VL-8B embeddings, BigQuery vector search over 688 historical ads, and a context-aware GPT assistant for anomaly analysis and creative generation.",
    ],
    techStack: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "BigQuery",
      "scikit-learn",
      "PyTorch",
      "Azure OpenAI",
      "Qwen3-VL-8B",
      "Cloudflare Workers",
      "Kubernetes",
      "Helm",
    ],
    liveUrl: "https://arena-frontend.vella-ai-account.workers.dev",
    featured: true,
  },
  {
    title: "Divvy",
    description:
      "Full-stack expense sharing and personal finance platform with secure read-only financial data access for AI assistants.",
    bullets: [
      "Built authenticated workflows for groups, personal spending, settlements, custom categories, budgets, notifications, and profile settings.",
      "Developed analytics views with scoped filters, trend charts, category/group/payer breakdowns, biggest-expense drilldowns, and a searchable expense ledger.",
      "Implemented a read-only MCP integration with API-key authentication and Claude-compatible tooling for safe AI analysis of expenses, balances, and budgets.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "Tailwind CSS",
      "Recharts",
      "Vitest",
      "Zod",
      "MCP",
      "Vercel",
    ],
    liveUrl: "https://expenses.aurorasolve.com/",
    githubUrl: "https://github.com/Naolt/roommate-expenses",
    featured: true,
  },
  {
    title: "Origin V2",
    description:
      "Full-stack career operating system for reusable profile content, tailored resume variants, and print-ready application documents.",
    bullets: [
      "Built authenticated profile and resume-variant workflows with API-first editing endpoints.",
      "Designed a reusable content model for canonical profile data, variant overrides, visibility rules, and template styling.",
      "Implemented live template-backed resume previews with persisted style controls, print-ready rendering, and a foundation for PDF export and AI resume review.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Vercel",
      "Linear MCP",
    ],
    liveUrl: "https://origin-v2.vercel.app",
    featured: true,
  },
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
