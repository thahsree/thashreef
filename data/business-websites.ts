export interface BusinessWebsite {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  icon: string;
  image: string;
  color: 'cyan' | 'violet' | 'pink' | 'green' | 'amber';
}

export const businessWebsites: BusinessWebsite[] = [
  {
    id: "site-1",
    title: "Corporate Law Firm",
    description: "A professional, fast-loading MERN stack website for a top-tier law firm, complete with consultation booking and case study CMS.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    url: "https://example.com/law", // Replace with real links
    icon: "⚖️",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    color: "cyan"
  },
  {
    id: "site-2",
    title: "Boutique E-commerce",
    description: "High-conversion online storefront for a boutique clothing brand featuring seamless checkout and dynamic inventory.",
    technologies: ["React", "Stripe", "Node.js"],
    url: "https://example.com/shop", // Replace with real links
    icon: "🛍️",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    color: "pink"
  },
  {
    id: "site-3",
    title: "Healthcare Clinic Portal",
    description: "Secure, HIPAA-compliant patient portal and public-facing website for a regional network of healthcare providers.",
    technologies: ["React", "Express", "TypeScript"],
    url: "https://example.com/health", // Replace with real links
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    color: "green"
  },
  {
    id: "site-4",
    title: "Real Estate Agency",
    description: "Visually stunning property listing platform with advanced filtering, map integration, and virtual tour capabilities.",
    technologies: ["Next.js", "Mapbox", "Framer Motion"],
    url: "https://example.com/realestate", // Replace with real links
    icon: "🏡",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    color: "violet"
  },
  {
    id: "site-5",
    title: "Creative Agency Portfolio",
    description: "Award-winning, highly animated digital portfolio designed to convert enterprise clients for a creative design agency.",
    technologies: ["Vue.js", "GSAP", "Tailwind"],
    url: "https://example.com/agency", // Replace with real links
    icon: "✨",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
    color: "amber"
  },
  {
    id: "site-6",
    title: "SaaS Landing Page",
    description: "Data-driven landing page optimized for high conversion rates with integrated A/B testing and analytics.",
    technologies: ["Next.js", "Vercel Analytics", "CSS Modules"],
    url: "https://example.com/saas", // Replace with real links
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "cyan"
  }
];
