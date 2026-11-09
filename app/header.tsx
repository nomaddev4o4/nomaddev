import Link from 'next/link'

const SUBTITLE = 'Frontend Developer'

/**
 * Server Component: the name and subtitle are part of the initial HTML.
 * The per-character fade is a CSS animation, so it runs without hydration
 * and is skipped entirely for users who prefer reduced motion.
 */
export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Krishnakanta Naik
        </Link>
        <p className="text-zinc-600 dark:text-zinc-500">
          <span className="sr-only">{SUBTITLE}</span>
          {SUBTITLE.split('').map((char, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="inline-block whitespace-pre motion-safe:animate-fade-in"
              style={{ animationDelay: `${500 + i * 30}ms` }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </header>
  )
}
