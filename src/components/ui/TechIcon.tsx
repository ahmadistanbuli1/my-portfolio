import type { IconType } from 'react-icons'
import { TECH_COLORS, TECH_ICON_MAP } from '../../constants/technologies'
import { cn } from '../../utils/cn'

interface TechIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
  iconClassName?: string
}

const sizeMap = {
  sm: { box: 'h-10 w-10', icon: 18, text: 'text-xs' },
  md: { box: 'h-12 w-12', icon: 22, text: 'text-sm' },
  lg: { box: 'h-14 w-14', icon: 26, text: 'text-sm' },
}

function getIcon(name: string): IconType | null {
  return TECH_ICON_MAP[name] ?? null
}

export function TechIcon({
  name,
  size = 'md',
  showLabel = true,
  className,
  iconClassName,
}: TechIconProps) {
  const Icon = getIcon(name)
  const s = sizeMap[size]
  const brandColor = TECH_COLORS[name]

  return (
    <div
      className={cn(
        'group flex flex-col items-center gap-2.5 text-center',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-2xl border border-surface-border',
          'bg-surface/80 shadow-card backdrop-blur-sm transition-all duration-300',
          'group-hover:border-primary/35 group-hover:shadow-glow',
          s.box,
          iconClassName,
        )}
      >
        {Icon ? (
          <Icon
            size={s.icon}
            style={brandColor ? { color: brandColor } : undefined}
            className={brandColor ? undefined : 'text-text-primary'}
            aria-hidden
          />
        ) : (
          <span className="font-heading text-sm font-bold text-primary">
            {name.charAt(0)}
          </span>
        )}
      </div>
      {showLabel && (
        <span
          className={cn(
            'font-medium text-text-secondary transition-colors group-hover:text-text-primary',
            s.text,
          )}
        >
          {name}
        </span>
      )}
    </div>
  )
}
