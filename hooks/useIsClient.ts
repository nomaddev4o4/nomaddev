import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

/**
 * Returns `false` during SSR and the hydration render, `true` afterwards.
 * Use it to gate output that depends on browser-only state (e.g. portals,
 * localStorage) without the setState-in-effect pattern.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )
}
