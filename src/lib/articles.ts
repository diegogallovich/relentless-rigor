// Static imports for all articles - required for Vercel serverless deployment
// When adding a new article, add imports for BOTH locale versions and entries to articlesModules below

import { type Locale } from '@/../../i18n'

interface Article {
  title: string
  description: string
  author: string
  date: string
  categories?: string[]
}

export interface ArticleWithSlug extends Article {
  slug: string
}

// Registry of all articles with their slugs and locale-specific modules
// Add new articles here after creating the MDX files for each locale
const articlesModules: Record<string, Record<Locale, unknown>> = {
  // Example:
  // 'my-article-slug': {
  //   en: myArticleEn,
  //   es: myArticleEs,
  // },
}

export async function getAllArticles(locale: Locale = 'en'): Promise<ArticleWithSlug[]> {
  const articles = Object.entries(articlesModules).map(([slug, modules]) => {
    const module = modules[locale] || modules['en'] // Fallback to English if locale not found
    return {
      slug,
      ...(module as unknown as { article: Article }).article,
    }
  })

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export async function getArticleBySlug(
  slug: string,
  locale: Locale = 'en',
): Promise<ArticleWithSlug | null> {
  const modules = articlesModules[slug]
  if (!modules) return null

  const module = modules[locale] || modules['en']
  return {
    slug,
    ...(module as unknown as { article: Article }).article,
  }
}

export async function getAllCategories(locale: Locale = 'en'): Promise<string[]> {
  const articles = await getAllArticles(locale)
  const categories = new Set<string>()

  articles.forEach((article) => {
    if (article.categories) {
      article.categories.forEach((cat) => categories.add(cat))
    }
  })

  return Array.from(categories).sort()
}

export async function getArticlesByCategory(
  category: string,
  locale: Locale = 'en',
): Promise<ArticleWithSlug[]> {
  const articles = await getAllArticles(locale)
  const normalizedCategory = category.toLowerCase()

  return articles.filter((article) =>
    article.categories?.some((cat) => cat.toLowerCase() === normalizedCategory),
  )
}

// Helper for generating static params for all article/locale combinations
export function getArticleSlugs(): string[] {
  return Object.keys(articlesModules)
}
