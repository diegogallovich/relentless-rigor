import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from '../i18n'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true, // Detect locale from Accept-Language header
})

export const config = {
  // Match all pathnames except for API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
