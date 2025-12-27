import { type Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Diego Gallovich',
    default:
      'Diego Gallovich - Personal Website',
  },
  description:
    'This site conglomerates Diego\'s projects, ideas, opinions, and recommendations.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`flex h-full bg-zinc-50 dark:bg-black ${ibmPlexMono.variable}`}>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
