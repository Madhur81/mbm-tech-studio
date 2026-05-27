export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  subtitle: string;
  desc: string;
  extendedDesc: string;
  features: string[];
  techStack: { layer: string; tech: string }[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "pnb-techno",
    title: "PNB Technologies",
    category: "CLIENT PROJECT",
    image: "/projects/pnb-cover.png",
    subtitle: "Corporate Website & Catalog",
    desc: "A modern, high-performance corporate platform for an industrial engineering company. Built with Next.js and integrated with a headless CMS to allow dynamic product catalog management.",
    extendedDesc: "PNB Technologies is a leading industrial engineering and gear manufacturing firm that required a visual and technical overhaul of their digital presence. MBM Tech Studio delivered a blazing fast, Next.js-based corporate platform. By pairing structural Next.js server components with Framer Motion, we achieved visual excellence without compromising speed. The site integrates Sanity CMS for direct, real-time catalog management.",
    features: [
      "Headless CMS Integration",
      "Industrial Catalog System",
      "SEO & Core Web Vitals Optimized",
      "Responsive Engineering Layouts",
      "Interactive Contact Forms"
    ],
    techStack: [
      { layer: "Frontend", tech: "Next.js, Tailwind CSS, Framer Motion" },
      { layer: "CMS", tech: "Sanity.io" },
      { layer: "Hosting", tech: "Vercel Edge Network" }
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity.io"],
    link: "https://www.pnbtechno.com/"
  },
  {
    slug: "madox",
    title: "MADOX",
    category: "CAPSTONE PROJECT",
    image: "/projects/MADOX.jpeg",
    subtitle: "Smart SQL IDE & Manager",
    desc: "A cross-database SQL IDE designed for database connectivity and AI-enhanced productivity. Empowers developers to intelligently query, analyze, and visualize data seamlessly.",
    extendedDesc: "MADOX is a premium, cross-database SQL IDE designed for seamless database connectivity and AI-powered operations. Modern developers struggle with slow, clunky database client tools. MADOX solves this by offering universal database connections, AI-enhanced query suggestions, and one-click CRUD generations directly in a smooth web interface. Built with Monaco Editor and high-performance server APIs, it provides an unparalleled tool for developer productivity.",
    features: [
      "Universal Database Connections",
      "AI-Powered Query Assistant",
      "Monaco Editor Integration",
      "Smart Data Visualizations",
      "One-Click CRUD Generation"
    ],
    techStack: [
      { layer: "Frontend", tech: "Next.js, Tailwind CSS, Zustand, Monaco Editor" },
      { layer: "Backend", tech: "Node.js, Express.js" },
      { layer: "Databases Service", tech: "PostgreSQL, MySQL, MongoDB" }
    ],
    tags: ["Next.js", "Zustand", "Monaco Editor", "Node.js"],
    link: "https://madx.vercel.app/projects/madox"
  },
  {
    slug: "aiblog",
    title: "AiBlog",
    category: "MERN STACK / AI",
    image: "/projects/AiBlog.png",
    subtitle: "AI-Powered Blog Platform",
    desc: "A full-stack MERN blogging application featuring Google Gemini API integration for automated content generation, drafting, moderation, and JWT-secured admin controls.",
    extendedDesc: "AiBlog is a state-of-the-art blogging application built using the classic MERN stack (MongoDB, Express, React, Node.js) paired with Google Gemini AI. The platform streamlines blog publishing for creators by integrating advanced AI assistants capable of suggesting catchy headlines, drafting full articles, improving syntax, and suggesting categories. Administrative tools are fully isolated with JWT authentication, featuring comment moderation, draft workflows, and direct ImageKit storage.",
    features: [
      "Google Gemini AI Content Assistant",
      "MERN Stack Architecture",
      "Secure JWT Admin Portal",
      "Draft/Publish Lifecycle Workflow",
      "ImageKit Direct Upload Integration",
      "Public Category Filtering & Pagination"
    ],
    techStack: [
      { layer: "Frontend", tech: "React 19, Vite, React Router, Tailwind CSS" },
      { layer: "Backend", tech: "Node.js, Express.js" },
      { layer: "Database", tech: "MongoDB, Mongoose" },
      { layer: "AI Engine", tech: "Google Gemini API" },
      { layer: "Image CDN", tech: "ImageKit API" },
      { layer: "Auth", tech: "JWT (JSON Web Tokens)" }
    ],
    tags: ["React 19", "Node.js", "MongoDB", "Gemini API"],
    link: "https://client-nine-kappa-79.vercel.app/"
  }
];
