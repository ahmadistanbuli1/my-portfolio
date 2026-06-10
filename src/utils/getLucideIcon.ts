import * as LucideIcons from 'lucide-react'
import { Lightbulb, type LucideIcon } from 'lucide-react'

const icons = LucideIcons as unknown as Record<string, LucideIcon>

export function getLucideIcon(name?: string): LucideIcon {
  if (!name) return Lightbulb
  return icons[name] ?? Lightbulb
}
