export type PrincipleCategory =
  | 'methodology'
  | 'architecture'
  | 'testing'

export interface Principle {
  id: string
  title: string
  description: string
  category: PrincipleCategory
  keywords: string[]
  icon?: string
}
