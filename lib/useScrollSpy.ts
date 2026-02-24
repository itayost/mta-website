import { useState, useEffect, useRef, useCallback } from 'react'

const ROOT_MARGIN = '-160px 0px -60% 0px'

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Used by sticky nav components (services, calculators, FAQ) to highlight
 * the active tab as the user scrolls.
 *
 * @param ids - DOM element IDs to observe
 * @param prefix - optional prefix stripped from IDs before setting active
 *   (e.g. prefix "faq-" turns element id "faq-services" into active id "services")
 */
export function useScrollSpy(ids: string[], prefix = '') {
  const [activeId, setActiveId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setup = useCallback(() => {
    observerRef.current?.disconnect()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = prefix
              ? entry.target.id.replace(prefix, '')
              : entry.target.id
            setActiveId(id)
          }
        }
      },
      { rootMargin: ROOT_MARGIN },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    observerRef.current = observer
  }, [ids, prefix])

  useEffect(() => {
    setup()
    return () => observerRef.current?.disconnect()
  }, [setup])

  return activeId
}

export function scrollToElement(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
