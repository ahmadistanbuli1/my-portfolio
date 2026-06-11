import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "University Management System",
    description:
      "A full-stack platform for course registration, grading, and student analytics — built for a large-scale university deployment.",
    image: "/images/projects/university-system.jpg",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/university-system",
    liveUrl: "https://example.com/university-system",
    featured: true,
  },
  {
    id: "project-2",
    title: "E-Commerce App",
    description:
      "A modern e-commerce application with product browsing, shopping cart, and secure checkout — built for a mid-sized online retailer.",
    image: "./images/ecommerce.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "expressJs",
      "PostgreSQL",
      "Prisma",
    ],
    githubUrl: "https://github.com/ahmadistanbuli1/E-commerce-website",
    liveUrl: "https://e-commerce-website-sigma-lake.vercel.app/",
    featured: true,
  },
  {
    id: "project-3",
    title: "Simulation Challenges",
    description:
      "A Collection Of Quizzes And Solve Problems In Computer Science,To Test Your Problem-Solving Skills.",
    image: "./images/simulation-challenges.png",
    technologies: [
      "React",
      "TypeScript",
      "Framer Motion",
      "prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/ahmadistanbuli1/simunlation-challenges",
    liveUrl: "",
    featured: true,
  },
  {
    id: "project-4",
    title: "Weather Forecast CLI",
    description:
      "Command-line weather tool with geolocation support, caching layer, and clean modular architecture.",
    image: "/images/projects/weather-cli.jpg",
    technologies: ["Python", "Typer", "Redis", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-cli",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
