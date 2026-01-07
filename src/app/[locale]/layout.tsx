import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { LocaleUpdater } from '@/components/LocaleUpdater'
import { locales } from '@/../../i18n'

export const metadata: Metadata = {
  title: {
    template: '%s - Diego Gallovich',
    default: 'Diego Gallovich - Personal Website',
  },
  description:
    "This site conglomerates Diego's projects, ideas, opinions, and recommendations.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleUpdater />
      <Providers>
        <div className="flex w-full">
          <Layout>{children}</Layout>
        </div>
      </Providers>
    </NextIntlClientProvider>
  )
}
