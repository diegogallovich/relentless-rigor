import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('articles')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ArticlesIndex() {
  const t = await getTranslations('articles')

  return (
    <SimpleLayout title={t('title')} intro={t('intro')}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            {t('noArticles')}
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}
