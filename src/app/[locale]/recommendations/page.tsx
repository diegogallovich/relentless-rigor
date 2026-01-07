import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllRecommendations, type Recommendation } from '@/lib/recommendations'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  recommendation,
  locale,
  description,
}: {
  recommendation: Recommendation
  locale: string
  description: string
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={recommendation.link}>
        {recommendation.name}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
      {recommendation.categories && recommendation.categories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {recommendation.categories.map((category) => (
            <Link
              key={category}
              href={`/${locale}/category/${encodeURIComponent(category.toLowerCase())}`}
              className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </Card>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('recommendations')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Recommendations({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations('recommendations')
  const tDescriptions = await getTranslations('recommendations.descriptions')
  const { locale } = await params
  const recommendations = getAllRecommendations()

  // Group recommendations by primary category (first category in the list)
  const groupedRecommendations: Record<string, Recommendation[]> = {}
  recommendations.forEach((rec) => {
    const primaryCategory = rec.categories[0]
    if (!groupedRecommendations[primaryCategory]) {
      groupedRecommendations[primaryCategory] = []
    }
    groupedRecommendations[primaryCategory].push(rec)
  })

  return (
    <SimpleLayout title={t('title')} intro={t('intro')}>
      <div className="space-y-20">
        {Object.entries(groupedRecommendations).map(([category, recs]) => (
          <ToolsSection key={category} title={category}>
            {recs.map((rec) => (
              <Tool
                key={rec.name}
                recommendation={rec}
                locale={locale}
                description={tDescriptions(rec.descriptionKey)}
              />
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
