import type { ExperienceItem } from '../types'

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-1',
    type: 'academic_milestone',
    title: 'B.Sc. Software Engineering',
    organization: 'Your University',
    description:
      'Pursuing a degree in software engineering with focus on web systems, algorithms, and software architecture.',
    startDate: '2022-09',
    endDate: 'Present',
    highlights: [
      'Dean\'s List — 2023 & 2024',
      'GPA: 3.8 / 4.0',
    ],
  },
  {
    id: 'exp-2',
    type: 'university_project',
    title: 'Campus Event Management Platform',
    organization: 'University IT Department',
    description:
      'Led frontend development for a system handling 5,000+ student event registrations per semester.',
    startDate: '2024-01',
    endDate: '2024-06',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Reduced registration time by 60%',
      'Implemented role-based access control',
    ],
    link: 'https://github.com/yourusername/campus-events',
  },
  {
    id: 'exp-3',
    type: 'internship',
    title: 'Frontend Developer Intern',
    organization: 'Tech Company Inc.',
    description:
      'Built reusable UI components and contributed to a design system used across three product teams.',
    startDate: '2024-06',
    endDate: '2024-09',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest'],
    highlights: [
      'Shipped 12+ production components',
      'Improved Lighthouse accessibility score to 95+',
    ],
  },
  {
    id: 'exp-4',
    type: 'technical_volunteering',
    title: 'Open Source Contributor',
    organization: 'Community Projects',
    description:
      'Contributed bug fixes, documentation, and UI improvements to open-source React libraries.',
    startDate: '2023-06',
    technologies: ['React', 'TypeScript', 'Git'],
    highlights: [
      'Merged 8+ pull requests',
      'Maintained contributor documentation',
    ],
    link: 'https://github.com/yourusername',
  },
  {
    id: 'exp-5',
    type: 'hackathon',
    title: '1st Place — University Hackathon',
    organization: 'Annual CodeFest 2024',
    description:
      'Built an AI-assisted study planner in 48 hours, winning best UI/UX and technical innovation awards.',
    startDate: '2024-03',
    endDate: '2024-03',
    technologies: ['React', 'Python', 'OpenAI API', 'Tailwind CSS'],
    highlights: [
      '1st place out of 40 teams',
      'Best UI/UX award',
    ],
    link: 'https://github.com/yourusername/codefest-2024',
  },
]
