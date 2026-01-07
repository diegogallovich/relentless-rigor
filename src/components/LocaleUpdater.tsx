'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export function LocaleUpdater() {
  const params = useParams()
  const locale = params.locale as string

  useEffect(() => {
    // Update the html lang attribute when the locale changes
    document.documentElement.lang = locale
  }, [locale])

  return null
}

