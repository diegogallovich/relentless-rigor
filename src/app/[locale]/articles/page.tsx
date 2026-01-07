import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('articles')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ArticlesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations('articles')
  const { locale } = await params
  const articles = await getAllArticles()

  return (
    <SimpleLayout title={t('title')} intro={t('intro')}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length === 0 ? (
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {t('noArticles')}
            </p>
          ) : (
            articles.map((article) => (
              <Card key={article.slug} as="article">
                <Card.Title href={`/${locale}/articles/${article.slug}`}>
                  {article.title}
                </Card.Title>
                <Card.Eyebrow as="time" dateTime={article.date} decorate>
                  {formatDate(article.date)}
                </Card.Eyebrow>
                <Card.Description>{article.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
              </Card>
            ))
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
