import type { Principle } from '../types'

export const principles: Principle[] = [
  {
    id: 'principle-1',
    title: 'SOLID Principles',
    description:
      'Every module should have a single responsibility, be open for extension but closed for modification, and depend on abstractions — not concretions.',
    category: 'methodology',
    keywords: ['SOLID', 'Single Responsibility', 'Dependency Inversion'],
    icon: 'Layers',
  },
  {
    id: 'principle-2',
    title: 'DRY — Don\'t Repeat Yourself',
    description:
      'Extract shared logic into reusable abstractions. Duplication is a liability — one change should happen in one place.',
    category: 'methodology',
    keywords: ['DRY', 'Reusability', 'Abstraction'],
    icon: 'Copy',
  },
  {
    id: 'principle-3',
    title: 'Separation of Concerns',
    description:
      'UI, business logic, and data layers stay independent. Components render; services compute; data files hold content.',
    category: 'methodology',
    keywords: ['SoC', 'Clean Code', 'Modularity'],
    icon: 'GitBranch',
  },
  {
    id: 'principle-4',
    title: 'Design Patterns',
    description:
      'Apply proven patterns — composition, factory, observer — where they reduce complexity, not where they add ceremony.',
    category: 'architecture',
    keywords: ['Composition', 'Factory', 'Observer'],
    icon: 'Puzzle',
  },
  {
    id: 'principle-5',
    title: 'Clean Architecture',
    description:
      'Dependencies point inward. The domain core knows nothing about frameworks, databases, or UI libraries.',
    category: 'architecture',
    keywords: ['Clean Architecture', 'Hexagonal', 'Ports & Adapters'],
    icon: 'Building2',
  },
  {
    id: 'principle-6',
    title: 'Test-Driven Mindset',
    description:
      'Write tests that describe behavior, not implementation. A passing test suite is a contract that the system works.',
    category: 'testing',
    keywords: ['TDD', 'Behavior-Driven', 'Regression Safety'],
    icon: 'FlaskConical',
  },
  {
    id: 'principle-7',
    title: 'Automated Testing Pyramid',
    description:
      'Unit tests for logic, integration tests for flows, and selective E2E tests for critical paths — fast feedback at every layer.',
    category: 'testing',
    keywords: ['Unit Tests', 'Integration', 'E2E', 'Vitest'],
    icon: 'TestTube2',
  },
]
