import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getArticleBySlug, getArticleSlugs } from '@/lib/articles'
import { locales, type Locale } from '@/../../i18n'

// Static imports for MDX content - required for Vercel deployment
// When adding a new article, import both locale versions here and add to articleComponents below

// Map of slug -> locale -> MDX component
const articleComponents: Record<string, Record<Locale, React.ComponentType>> = {
  // Example:
  // 'my-article-slug': {
  //   en: MyArticleEn,
  //   es: MyArticleEs,
  // },
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
