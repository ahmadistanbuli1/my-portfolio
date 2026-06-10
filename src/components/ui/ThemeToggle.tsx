import { Moon, Sun } from 'lucide-react'
import { useThemeContext } from '../../context/ThemeContext'
import { cn } from '../../utils/cn'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-xl',
        'border border-surface-border bg-surface/50 text-text-secondary',
        'transition-all duration-200 hover:border-primary/40 hover:text-primary',
        className,
      )}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
