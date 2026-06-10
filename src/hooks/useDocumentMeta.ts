import { useEffect } from 'react'
import { personalInfo } from '../data'

export function useDocumentMeta() {
  useEffect(() => {
    const { name, title, tagline } = personalInfo
    document.title = `${name} — ${title}`

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', tagline)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', `${name} — ${title}`)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', tagline)
    }
  }, [])
}
