'use client'
import { useEffect, useState } from 'react'
import { TextMorph } from '@/components/ui/text-morph'

const RESET_DELAY_MS = 2000

export function CopyUrlButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), RESET_DELAY_MS)
    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      // Read the URL at click time (never during render) to avoid a
      // server/client hydration mismatch.
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
    } catch {
      // Clipboard access can be denied (e.g. insecure context); fail quietly.
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{copied ? 'Copied' : 'Copy'}</TextMorph>
      <span>URL</span>
    </button>
  )
}
