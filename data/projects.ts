export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    category: 'fullstack' | 'frontend' | 'mobile' | 'backend';
    github?: string;
    live?: string;
    featured: boolean;
    color: string;
    icon: string;
}

export const projects: Project[] = [
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart, checkout, Stripe payments, admin dashboard, and real-time inventory.',
        longDescription: 'Built a complete e-commerce solution featuring product management, order tracking, Stripe payment gateway, JWT authentication, admin panel, and cloud image uploads via Cloudinary. Implemented real-time stock updates with Socket.io.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Cloudinary'],
        category: 'fullstack',
        github: 'https://github.com/thashreef',
        featured: true,
        color: 'cyan',
        icon: '🛒',
    },
    {
        id: 'task-manager-app',
        title: 'Task Manager Pro',
        description: 'A Kanban-style project management tool with drag-and-drop, team collaboration, and real-time updates.',
        longDescription: 'Developed a Trello-like task management app with real-time collaboration using Socket.io, drag-and-drop boards, task assignment, deadline tracking, and email notifications.',
        tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'Framer Motion'],
        category: 'fullstack',
        github: 'https://github.com/thashreef',
        featured: true,
        color: 'violet',
        icon: '📋',
    },
    {
        id: 'food-delivery-app',
        title: 'Food Delivery App',
        description: 'Cross-platform mobile app for food ordering with live tracking, OTP login, and Razorpay integration.',
        longDescription: 'React Native app with real-time order tracking, restaurant listings, cart management, OTP-based login, push notifications, and Razorpay payment gateway integration.',
        tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Firebase'],
        category: 'mobile',
        github: 'https://github.com/thashreef',
        featured: true,
        color: 'pink',
        icon: '🍔',
    },
    {
        id: 'ai-chat-saas',
        title: 'AI Chat SaaS',
        description: 'A SaaS platform integrating OpenAI GPT for business chatbots with subscription billing and analytics.',
        longDescription: 'Built a SaaS app where businesses can embed a custom AI chatbot on their site. Integrated OpenAI API for chat, Stripe for subscriptions, and React dashboard with usage analytics.',
        tech: ['Next.js', 'OpenAI API', 'Stripe', 'MongoDB', 'Tailwind'],
        category: 'fullstack',
        github: 'https://github.com/thashreef',
        featured: false,
        color: 'green',
        icon: '🤖',
    },
    {
        id: 'portfolio-cms',
        title: 'Developer Portfolio CMS',
        description: 'A customizable portfolio builder with a CMS backend, live-editable sections, and one-click deployment.',
        longDescription: 'Created a headless CMS-backed portfolio builder where developers can manage projects, blogs, and skills from an admin panel. Built with Next.js SSG for lightning-fast pages.',
        tech: ['Next.js', 'Sanity CMS', 'TypeScript', 'Tailwind', 'Vercel'],
        category: 'frontend',
        github: 'https://github.com/thashreef',
        featured: false,
        color: 'cyan',
        icon: '🎨',
    },
    {
        id: 'hr-management',
        title: 'HR Management System',
        description: 'An internal HRMS with employee profiles, leave management, payroll tracking, and role-based access.',
        longDescription: 'Developed an enterprise HR solution featuring employee onboarding, attendance tracking, leave requests, payroll calculation, and department management with role-based access control.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Chart.js'],
        category: 'fullstack',
        github: 'https://github.com/thashreef',
        featured: false,
        color: 'violet',
        icon: '👔',
    },
    {
        id: 'real-estate-app',
        title: 'Real Estate Listings',
        description: 'A property listing platform with map integration, advanced filters, and mortgage calculator.',
        longDescription: 'Built a modern real estate listing platform with Google Maps integration, advanced property filters, virtual tour links, mortgage calculator, and agent contact system.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Google Maps API', 'Tailwind'],
        category: 'fullstack',
        github: 'https://github.com/thashreef',
        live: '#',
        featured: false,
        color: 'pink',
        icon: '🏠',
    },
    {
        id: 'learning-platform',
        title: 'Online Learning Platform',
        description: 'An LMS with video courses, quizzes, progress tracking, certificates, and instructor dashboards.',
        longDescription: 'Full-featured learning management system with video streaming via Cloudinary, quiz engine, student progress tracking, certificate generation, and dual dashboards for students and instructors.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'Stripe'],
        category: 'fullstack',
        github: 'https://github.com/thashreef',
        featured: false,
        color: 'green',
        icon: '📚',
    },
];
