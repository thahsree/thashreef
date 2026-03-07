export interface SinglePageApp {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  icon: string;
  color: 'cyan' | 'violet' | 'pink' | 'green' | 'amber';
}

export const singlePageApps: SinglePageApp[] = [
  {
    id: "app-1",
    title: "AI Image Generator",
    description: "A single-page application utilizing DALL-E API for generating breathtaking images from simple text prompts.",
    technologies: ["React", "API", "Tailwind"],
    url: "https://example.com/ai-image", // Replace with real links
    icon: "🎨",
    color: "cyan"
  },
  {
    id: "app-2",
    title: "Crypto Dashboard",
    description: "Live cryptocurrency tracking dashboard featuring real-time charts and sentiment analysis.",
    technologies: ["Next.js", "Chart.js", "WebSockets"],
    url: "https://example.com/crypto", // Replace with real links
    icon: "📈",
    color: "violet"
  },
  {
    id: "app-3",
    title: "Task Master",
    description: "A beautifully designed Kanban board for personal productivity with drag-and-drop functionality.",
    technologies: ["Vue.js", "Firebase", "CSS Grid"],
    url: "https://example.com/task", // Replace with real links
    icon: "✅",
    color: "green"
  },
  {
    id: "app-4",
    title: "Weather Station",
    description: "Minimalist weather application providing hyper-local forecasts and beautiful dynamic backgrounds.",
    technologies: ["Vanilla JS", "OpenWeather", "SCSS"],
    url: "https://example.com/weather", // Replace with real links
    icon: "🌤️",
    color: "amber"
  },
  {
    id: "app-5",
    title: "Pomodoro Timer",
    description: "An elegant pomodoro timer to boost productivity with customizable work and break intervals.",
    technologies: ["React", "State Management", "Audio API"],
    url: "https://example.com/pomodoro", // Replace with real links
    icon: "🍅",
    color: "pink"
  },
  {
    id: "app-6",
    title: "Markdown Editor",
    description: "A distraction-free, live-preview markdown editor supporting GitHub flavored markdown.",
    technologies: ["React", "Markdown-it", "LocalStorage"],
    url: "https://example.com/markdown", // Replace with real links
    icon: "📝",
    color: "cyan"
  }
];
