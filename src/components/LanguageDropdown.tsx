'use client'

import { useParams, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LanguageDropdown() {
  const params = useParams()
  const pathname = usePathname()
  const t = useTranslations('navigation')
  const currentLocale = params.locale as string

  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'

  const languages = [
    { code: 'en', label: t('english') },
    { code: 'es', label: t('spanish') },
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLocale)

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-zinc-800 ring-1 ring-zinc-900/5 backdrop-blur-sm transition hover:bg-white dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-800">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="10" className="stroke-zinc-500 dark:stroke-zinc-400" />
          <path
            d="M12 2c2.5 2.5 4 6.5 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6.5-4-10S9.5 4.5 12 2z"
            className="stroke-zinc-500 dark:stroke-zinc-400"
          />
          <path d="M2 12h20" className="stroke-zinc-500 dark:stroke-zinc-400" />
        </svg>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
        <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        <ChevronDownIcon className="h-auto w-2 stroke-zinc-500 dark:stroke-zinc-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-lg bg-white p-1 text-sm ring-1 ring-zinc-900/5 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-zinc-800 dark:ring-white/10"
      >
        {languages.map((language) => (
          <MenuItem key={language.code}>
            {({ active }) => (
              <Link
                href={`/${language.code}${pathWithoutLocale}`}
                className={`block rounded-md px-3 py-2 transition ${
                  active
                    ? 'bg-zinc-100 dark:bg-zinc-700'
                    : ''
                } ${
                  currentLocale === language.code
                    ? 'font-semibold text-teal-600 dark:text-teal-400'
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {language.label}
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

