import { type Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { locales } from '@/../../i18n'

import '@/styles/tailwind.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
})

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

  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body
        className={`flex h-full bg-zinc-50 dark:bg-black ${ibmPlexMono.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

