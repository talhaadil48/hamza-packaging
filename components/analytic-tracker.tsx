'use client'

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}
