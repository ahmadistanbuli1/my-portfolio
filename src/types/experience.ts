export type ExperienceType =
  | 'academic_milestone'
  | 'university_project'
  | 'internship'
  | 'technical_volunteering'
  | 'hackathon'

export interface ExperienceItem {
  id: string
  type: ExperienceType
  title: string
  organization: string
  description: string
  startDate: string
  endDate?: string
  technologies?: string[]
  highlights?: string[]
  link?: string
}
