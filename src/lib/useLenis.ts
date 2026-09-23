import { useEffect, useRef } from 'react'

export function useLenis() {
  const lenisRef = useRef<any>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      )
    }

    // Don't initialize Lenis on touch devices
    if (isTouchDevice()) {
      console.log('Touch device detected, using native scrolling')
      return
    }

    let mounted = true

    // Initialize Lenis asynchronously
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis')
        
        if (!mounted) return

        const lenis: any = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        } as any)

        lenisRef.current = lenis as any
        
        // Expose Lenis instance to window for use in other components
        (window as any).lenis = lenis

        // RAF animation loop
        const raf = (time: number) => {
          lenis.raf(time)
          rafRef.current = requestAnimationFrame(raf)
        }

        rafRef.current = requestAnimationFrame(raf)
      } catch (error) {
        console.error('Failed to initialize Lenis:', error)
      }
    }

    initLenis()

    return () => {
      mounted = false
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (lenisRef.current) {
        try {
          (lenisRef.current as any).destroy()
        } catch (e) {
          console.error('Error destroying Lenis:', e)
        }
      }
      lenisRef.current = null as any
      (window as any).lenis = null
    }
  }, [])

  return lenisRef.current
}

// Helper function to scroll to an element by ID
export function scrollToElement(lenis: any, elementId: string) {
  if (!lenis) {
    // Fallback for touch devices or if Lenis isn't initialized
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return
  }

  const element = document.getElementById(elementId)
  if (element) {
    try {
      lenis.scrollTo(element, {
        offset: 80, // Account for fixed navbar height
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } catch (e) {
      // Fallback to native scroll
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
