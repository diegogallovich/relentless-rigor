import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="border border-zinc-300 dark:border-zinc-700 p-8">
        <header>
          <div className="border-b border-zinc-300 dark:border-zinc-700 pb-6 mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100 font-mono uppercase">
              {title}
            </h1>
          </div>
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {intro}
          </p>
        </header>
        {children && <div className="mt-8 border-t border-zinc-300 dark:border-zinc-700 pt-8">{children}</div>}
      </div>
    </Container>
  )
}
