import { useId } from 'react'

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="border-t border-zinc-300 dark:border-zinc-700 pt-8 first:border-t-0 first:pt-0"
    >
      <div className="mb-6">
        <h2
          id={id}
          className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider font-mono"
        >
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  )
}
