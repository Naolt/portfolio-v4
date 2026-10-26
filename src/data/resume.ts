export const personalInfo = {
  name: "Naol Tamrat",
  title: "Full-Stack AI Engineer",
  tagline:
    "Building AI agents and production web apps, from LangGraph pipelines to the Next.js products people use every day",
  email: "naol.delesa.official@gmail.com",
  phone: "+251910168641",
  location: "Addis Ababa, Ethiopia (UTC+3)",
  linkedin: "https://www.linkedin.com/in/naolt16",
  github: "https://github.com/Naolt",
  leetcode: "https://leetcode.com/u/Naolt/",
  resumeUrl:
    "https://drive.google.com/file/d/1hXMYUosVxLDtJWkWK0Ml2RNba6qSQhsC/view?usp=sharing",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  frontend: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Redux Toolkit",
    "TanStack Query",
    "Recharts",
  ],
  backend: ["Node.js", "Express.js", "FastAPI", "Celery", "Pydantic", "Zod"],
  ai: [
    "LangGraph",
    "LangChain",
    "MCP",
    "RAG",
    "AI agents",
    "Azure OpenAI",
    "Google Gemini",
    "Pinecone",
    "Vector search",
  ],
  tools: [
    "PostgreSQL",
    "BigQuery",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Helm",
    "Azure",
    "GCP",
    "Vercel",
    "Cloudflare Workers",
    "GitHub Actions",
    "Playwright",
    "Vitest",
    "Sentry",
    "Sanity CMS",
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
    company: "Vella AI",
    role: "Contract Full-Stack AI Engineer",
    period: "May 2026 – Jun 2026",
    location: "Remote",
    bullets: [
      "Built most of Arena, an AI campaign intelligence platform for PPC teams, end to end: Campaign Coach, Budget Simulator, Seasonality Planner, an ML budget allocator, and analytics and benchmark dashboards.",
      "Built the FastAPI backend and a multi-client BigQuery pipeline unifying 58,000+ rows of Google, Meta, and Bing ad data, with benchmark-based performance scoring.",
      "Trained three platform-specific regression models to power the budget simulator and allocator; added semantic ad search with a self-hosted Qwen3-VL embedding service and BigQuery VECTOR_SEARCH.",
      "Built a streaming Azure OpenAI assistant with tool calling and AI image generation for ad creatives.",
      "Deployed the API and embedder on Azure Kubernetes (AKS) with Helm, and the frontend on Cloudflare Workers via Cloudflare Tunnel.",
    ],
    techStack:
      "Next.js, React, TypeScript, FastAPI, Python, BigQuery, scikit-learn, Azure OpenAI, Qwen3-VL, Kubernetes (AKS), Helm, Cloudflare Workers",
  },
  {
    company: "Hydrus.ai",
    role: "Full-Stack & AI Engineer",
    period: "Oct 2025 – May 2026",
    location: "Remote",
    bullets: [
      "Attian: Migrated a Framer marketing site to Next.js with pixel-perfect design and motion across 8+ page templates; built a 5-schema Sanity CMS that lets the team publish articles, case studies, and reports with embedded charts and graphs, plus automated lead capture and ISR.",
      "AOSN: Rebuilt the Stytch B2B login and MFA flow (headless discovery, SMS and TOTP enrollment) for an AI email-triage tool used by pharmacy staff; traced false 401s to a mismatched Stytch session response field and fixed them; integrated Sentry across React and FastAPI with PII scrubbing; enforced per-user identity from authenticated sessions, covered by isolation tests.",
      "PrivyAI: Turned the open-source OpenClaw agent framework into Privy-Agent, a privacy-first AI assistant: built Dockerized per-user agent provisioning on RunPod, a web search tool (Parallel Search API), and real-time voice input via the Web Speech API, with privacy-safe observability, API rate limiting, and multi-tenant agent isolation.",
    ],
    techStack:
      "TypeScript, Python, Next.js, React, FastAPI, Sanity CMS, PostgreSQL, Docker, RunPod, Stytch, Sentry",
  },
  {
    company: "Fluid AI",
    role: "AI Engineer & Backend Developer",
    period: "Feb 2025 – Aug 2025",
    location: "Dubai (Remote)",
    bullets: [
      "Cut LLM API costs by 67% and response time from ~9s to ~3s by building a response interception system that bypasses LLM calls for known structured outputs from tools like Maps, Calendar, and Hotels.",
      "Refactored monolithic agents into a modular architecture by moving tools into reusable MCP-based microservices integrating 10+ third-party APIs, with LangGraph handling state.",
      "Integrated RAG pipelines with vector search for semantic queries across events, todos, images, documents, and attachments, replacing keyword-based retrieval.",
      "Replaced a top-down agent hierarchy with a swarm architecture, enabling dynamic task handoff and direct inter-agent communication.",
      "Built a browser automation service with FastAPI and browser-use for restaurant reservations across Google Maps, OpenTable, and SevenRooms, with parallel browser instances and Chrome profile management.",
    ],
    techStack:
      "LangGraph, LangChain, MCP, RAG, Express.js, FastAPI, Python, TypeScript, Cosmos DB, Azure, Firebase, Pinecone, Playwright, browser-use",
  },
  {
    company: "Eskalate",
    role: "Project Lead & Frontend Developer",
    period: "Aug 2024 – Jan 2025",
    location: "Remote",
    bullets: [
      "Led product direction for eskalate.io, planning roadmaps and running Agile sprints based on 90+ developer interviews.",
      "Boosted profile completion from 13% to 90%+ by adding contextual tooltips, simplifying editors for consistent formatting, and running targeted outreach.",
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
    location: "Remote",
    bullets: [
      "Architected the frontend from scratch: folder structure, Redux/RTK Query state layer, refresh-token system, coding guidelines, linters, CI/CD, and GitHub configuration.",
      "Built the complete profile system (20+ components): multi-step forms with validation, drag-and-drop resume upload, image cropping, and progress tracking for 800+ users.",
      "Led frontend contributions across a 5-developer frontend team within a 9-developer cross-functional team.",
    ],
    techStack: "Next.js, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, GCP",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jan 2024 – Apr 2024",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Designed and built three responsive websites, two for ministry organizations and one for a coffee export company, each tailored to its audience.",
      "Led the custom UI design process to keep layouts clear and accessible for non-technical audiences.",
      "Integrated Sanity CMS and MongoDB so clients can update content without code.",
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
    title: "IMS",
    description:
      "Multi-tenant inventory and sales SaaS for small retail shops in Ethiopia, live and used by 3 shops since July 2026, with a trilingual AI assistant.",
    bullets: [
      "Products with variants, sales and returns, stock receiving and corrections, reports, staff accounts, public product catalogs, and paid Basic/Pro plans.",
      "\"Ask IMS\": a LangGraph + Gemini assistant that answers shop owners' questions in English, Amharic, or Afaan Oromo using 8 read-only data tools, with every number traced to a tool result and an evaluation suite to check accuracy.",
      "Server-side tenant isolation and role-based access (owner/staff/admin); transactional stock changes with row locking to prevent overselling, plus a full audit log.",
      "258 integration tests and 79 Playwright end-to-end tests in CI, with automated migrations, 6-hourly backups, and Sentry monitoring.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Neon",
      "TypeORM",
      "LangGraph",
      "Gemini",
      "Playwright",
      "Vercel",
    ],
    liveUrl: "https://ims.aurorasolve.com",
    featured: true,
  },
  {
    title: "Divvy",
    description:
      "Expense-sharing and personal finance app used by 10 people to log 680+ expenses since April 2026, recently rebuilt as a mobile-first PWA.",
    bullets: [
      "Group and person-to-person expenses, loans, balances and settle-up, recurring bills, and monthly spending summaries.",
      "TypeScript monorepo (Turborepo) with a tested money domain using integer minor units, a validated REST API, PostgreSQL with Drizzle and transactional writes, and Better Auth with email verification and rate limiting.",
      "Covered by 399 automated tests plus Playwright end-to-end checks on phone viewports in CI.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Turborepo",
      "PostgreSQL",
      "Neon",
      "Drizzle",
      "Better Auth",
      "Zod",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    liveUrl: "https://divvy.aurorasolve.com",
    featured: true,
  },
  {
    title: "Intelligent Agents",
    description:
      "LangGraph agent system with MCP tool integrations, built at Fluid AI and open-sourced with permission.",
    bullets: [
      "Modular agents with tools served as MCP-based microservices and LangGraph-managed state.",
      "Swarm-style architecture with dynamic task handoff between agents.",
    ],
    techStack: ["Python", "TypeScript", "LangGraph", "LangChain", "MCP", "RAG"],
    githubUrl: "https://github.com/Naolt/intelligent-agents",
    featured: true,
  },
  {
    title: "Browser Automation Service",
    description:
      "FastAPI service running parallel browser agents for real-world restaurant reservations, built at Fluid AI and open-sourced with permission.",
    bullets: [
      "Automated reservations across Google Maps, OpenTable, and SevenRooms with browser-use.",
      "Parallel Chrome instances with persistent profile management.",
    ],
    techStack: ["Python", "FastAPI", "browser-use", "Playwright"],
    githubUrl: "https://github.com/Naolt/Browser-Automation-Service",
    featured: true,
  },
  {
    title: "Unsubscribe Agent",
    description:
      "AI-powered automation platform that processes forwarded emails, extracts unsubscribe links, and uses an LLM-controlled browser agent to unsubscribe automatically.",
    bullets: [
      "Dual extraction strategy: HTML parsing first, LLM fallback for complex emails, reducing API calls by 90%.",
      "Domain learning system that caches successful unsubscribe URLs for instant future processing.",
      "Celery + Redis task queue with a FastAPI webhook for async email processing.",
    ],
    techStack: ["Python", "FastAPI", "LangChain", "Celery", "Redis", "Playwright", "Docker"],
    githubUrl: "https://github.com/Naolt/Unsubscribe-Agent",
    featured: true,
  },
  {
    title: "Origin V2",
    description:
      "Full-stack career operating system for reusable profile content, tailored resume variants, and print-ready application documents.",
    bullets: [
      "Authenticated profile and resume-variant workflows with API-first editing endpoints.",
      "Reusable content model for canonical profile data, variant overrides, visibility rules, and template styling.",
      "Live template-backed resume previews with persisted style controls and print-ready rendering.",
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
    ],
    liveUrl: "https://origin-v2.vercel.app",
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
      "SEO-optimized, accessible design for non-technical audiences.",
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
      "Custom UI designed in Figma for non-technical audiences.",
    ],
    techStack: ["Next.js", "TypeScript", "Sanity", "Figma"],
    liveUrl: "https://isa60minethio.com",
    githubUrl: "https://github.com/Naolt/isa60-web",
  },
  {
    title: "Kebron Church",
    description:
      "Ministry website showcasing sermons, events, and outreach initiatives with content management.",
    bullets: [
      "Dynamic content features with a MongoDB backend.",
      "Responsive design tailored for community engagement.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://kebronchurch.org",
    githubUrl: "https://github.com/Naolt/kebron",
  },
];

export const education = [
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
    note: "Top 1% of applicants, Google-backed — 600+ LeetCode and Codeforces problems solved",
  },
];

export const achievements = [
  {
    title: "1st Place at Ethio-Health Hackathon",
    description:
      "Won 1st place and 50,000 ETB at the Ethio-Health Hackathon for PharmaHub, a pharmaceutical sales and delivery platform.",
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