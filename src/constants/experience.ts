import {
  Briefcase,
  GraduationCap,
  HandHeart,
  FolderKanban,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import type { ExperienceType } from '../types'

export const experienceTypeConfig: Record<
  ExperienceType,
  { label: string; icon: LucideIcon }
> = {
  academic_milestone: { label: 'Academic Milestone', icon: GraduationCap },
  university_project: { label: 'University Project', icon: FolderKanban },
  internship: { label: 'Internship', icon: Briefcase },
  technical_volunteering: { label: 'Technical Volunteering', icon: HandHeart },
  hackathon: { label: 'Hackathon', icon: Trophy },
}
