import { Github, Linkedin, Mail, Globe, Twitter, type LucideIcon } from 'lucide-react'
import type { SocialLink } from '../types'

const iconMap: Record<SocialLink['icon'], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  gmail: Mail,
  twitter: Twitter,
  website: Globe,
}

export function getSocialIcon(icon: SocialLink['icon']): LucideIcon {
  return iconMap[icon] ?? Mail
}

export function getSocialHref(link: SocialLink): string {
  if (link.href.startsWith('http') || link.href.startsWith('mailto:')) {
    return link.href
  }
  if (link.icon === 'gmail') {
    return `mailto:${link.href}`
  }
  return link.href
}
