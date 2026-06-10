import type { PersonalInfo } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Ahmad Istanbuli",
  title: "Full-Stack Developer & ITE",
  tagline: "Building elegant, performant web experiences.",
  bio: "Passionate about crafting premium user interfaces with clean architecture and thoughtful engineering. I focus on reusable systems, accessible design, and production-ready code.",
  email: "hello@example.com",
  location: "Your City, Country",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ahmadistanbuli1",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmad-istanbuli-9607993a3",
      icon: "linkedin",
    },
    { label: "Email", href: "ahmadistanbuli179@gmail.com", icon: "gmail" },
  ],
  journey: [
    {
      id: "journey-1",
      year: "2022",
      title: "University Engineering Program",
      description:
        "Start Studying IT Engineering at the University of Aleppo, building a strong foundation in software development and engineering principles.",
    },
    {
      id: "journey-2",
      year: "2023",
      title:
        "First Search And Discover The World Of Internet And Web Development",
      description:
        "Started exploring the vast world of web development, learning HTML, CSS, and JavaScript through online resources and personal projects.",
    },
    {
      id: "journey-3",
      year: "2024",
      title: "Frontend Specialization",
      description:
        "Focused On JavaScript Vanilla And Learn Things Like High-Order Functions, Asynchronous Programming, And The Event Loop. Then I Started Learning React And TypeScript To Build More Complex And Scalable Web Applications.",
    },
    {
      id: "journey-4",
      year: "2025",
      title: "Start Learn Frontend Frameworks And Libraries",
      description:
        "Started Learning Frontend Frameworks And Libraries Like React, Tailwind CSS, And Vite To Build Modern And Responsive Web Applications. I Also Explored State Management Solutions Like Redux And Context API To Handle Complex Application State.",
    },
    {
      id: "journey-5",
      year: "2026",
      title: "Start Learning Backend Development",
      description:
        "Started exploring backend development, learning Node.js, Express, and database technologies to build full-stack applications.",
    }
  ],
};
