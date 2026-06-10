import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'University Management System',
    description:
      'A full-stack platform for course registration, grading, and student analytics — built for a large-scale university deployment.',
    image: '/images/projects/university-system.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/university-system',
    liveUrl: 'https://example.com/university-system',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'E-Commerce Dashboard',
    description:
      'Real-time analytics dashboard with glassmorphism UI, role-based access, and optimized data visualization.',
    image: '/images/projects/ecommerce-dashboard.jpg',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Task Collaboration App',
    description:
      'Kanban-style project management tool with drag-and-drop, team workspaces, and offline-first architecture.',
    image: '/images/projects/task-app.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/task-app',
    liveUrl: 'https://example.com/task-app',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Weather Forecast CLI',
    description:
      'Command-line weather tool with geolocation support, caching layer, and clean modular architecture.',
    image: '/images/projects/weather-cli.jpg',
    technologies: ['Python', 'Typer', 'Redis', 'OpenWeather API'],
    githubUrl: 'https://github.com/yourusername/weather-cli',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
