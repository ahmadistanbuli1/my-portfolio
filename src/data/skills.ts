import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "HTML/CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Nest.js", "GraphQL"],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "SQL"],
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["Git", "Docker", "Figma", "VS Code"],
  },
];
