'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales } from '@/../../i18n'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string

  // Remove the current locale from the pathname to get the base path
  const getLocalizedPath = (locale: string) => {
    if (!pathname) return `/${locale}`
    
    // Remove the current locale prefix if it exists
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '')
    
    // Return the new path with the new locale
    return `/${locale}${pathWithoutLocale || ''}`
  }

  return (
    <div className="pointer-events-auto">
      <div className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 text-sm font-medium ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            className={`px-2 py-1 rounded transition ${
              currentLocale === locale
                ? 'text-teal-500 dark:text-teal-400 font-semibold'
                : 'text-zinc-600 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400'
            }`}
            aria-label={`Switch to ${locale.toUpperCase()}`}
          >
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  )
}

