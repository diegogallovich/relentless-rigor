// Root layout - Next.js requires this but locale-specific layout handles the actual rendering
// This should never be used since middleware always redirects to /[locale] routes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Return children directly - the [locale] layout will provide html/body tags
  return children
}
