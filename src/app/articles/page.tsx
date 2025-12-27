import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles and thoughts from Diego Gallovich.',
}

export default function ArticlesIndex() {
  return (
    <SimpleLayout
      title="Articles"
      intro="Coming soon - articles and thoughts on technology, entrepreneurship, and more."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            No articles yet. Check back soon!
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}

