import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getArticleBySlug, getArticleSlugs } from '@/lib/articles'
import { locales, type Locale } from '@/../../i18n'

// Static imports for MDX content - required for Vercel deployment
import TestSeoFundamentalsEn from '../test-seo-fundamentals/page.en.mdx'
import TestSeoFundamentalsEs from '../test-seo-fundamentals/page.es.mdx'
import TestTypescriptBestPracticesEn from '../test-typescript-best-practices/page.en.mdx'
import TestTypescriptBestPracticesEs from '../test-typescript-best-practices/page.es.mdx'
import TestWebflowAdvancedTechniquesEn from '../test-webflow-advanced-techniques/page.en.mdx'
import TestWebflowAdvancedTechniquesEs from '../test-webflow-advanced-techniques/page.es.mdx'

// Map of slug -> locale -> MDX component
const articleComponents: Record<string, Record<Locale, React.ComponentType>> = {
  'test-seo-fundamentals': {
    en: TestSeoFundamentalsEn,
    es: TestSeoFundamentalsEs,
  },
  'test-typescript-best-practices': {
    en: TestTypescriptBestPracticesEn,
    es: TestTypescriptBestPracticesEs,
  },
  'test-webflow-advanced-techniques': {
    en: TestWebflowAdvancedTechniquesEn,
    es: TestWebflowAdvancedTechniquesEs,
  },
}

interface ArticlePageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  const params: { locale: string; slug: string }[] = []

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const article = await getArticleBySlug(slug, locale as Locale)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params

  // Get the article component for this slug and locale
  const components = articleComponents[slug]
  if (!components) {
    notFound()
  }

  const ArticleContent = components[locale as Locale] || components['en']
  if (!ArticleContent) {
    notFound()
  }

  return <ArticleContent />
}

