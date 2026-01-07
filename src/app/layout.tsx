import { IBM_Plex_Mono } from 'next/font/google'

import '@/styles/tailwind.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
})

// Root layout - Required by Next.js to have html and body tags
// The [locale] layout handles locale-specific rendering
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`flex h-full bg-zinc-50 dark:bg-black ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
