'use client'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { useIsClient } from '@/hooks/useIsClient'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

export function ThemeSwitch() {
  const isClient = useIsClient()
  const { theme, setTheme } = useTheme()

  // The active theme is only known on the client (it lives in localStorage),
  // so render a same-size placeholder on the server to avoid layout shift.
  if (!isClient) {
    return <div className="h-7 w-21" aria-hidden="true" />
  }

  return (
    <div className="flex" role="group" aria-label="Color theme">
      <AnimatedBackground
        className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
        defaultValue={theme}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
        enableHover={false}
        onValueChange={(id) => {
          if (id) setTheme(id)
        }}
      >
        {THEMES_OPTIONS.map((option) => (
          <button
            key={option.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${option.label} theme`}
            aria-pressed={theme === option.id}
            data-id={option.id}
          >
            {option.icon}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  )
}
