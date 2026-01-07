// Static imports for all articles - required for Vercel serverless deployment
// When adding a new article, add an import and entry to articlesModules below
import * as testSeoFundamentals from '../app/[locale]/articles/test-seo-fundamentals/page.mdx'
import * as testTypescriptBestPractices from '../app/[locale]/articles/test-typescript-best-practices/page.mdx'
import * as testWebflowAdvancedTechniques from '../app/[locale]/articles/test-webflow-advanced-techniques/page.mdx'

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

// Registry of all articles with their slugs
// Add new articles here after creating the MDX file
const articlesModules = [
  { slug: 'test-seo-fundamentals', module: testSeoFundamentals },
  { slug: 'test-typescript-best-practices', module: testTypescriptBestPractices },
  { slug: 'test-webflow-advanced-techniques', module: testWebflowAdvancedTechniques },
]

export async function getAllArticles(): Promise<ArticleWithSlug[]> {
  const articles = articlesModules.map(({ slug, module }) => ({
    slug,
    ...(module as { article: Article }).article,
  }))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export async function getAllCategories(): Promise<string[]> {
  const articles = await getAllArticles()
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
): Promise<ArticleWithSlug[]> {
  const articles = await getAllArticles()
  const normalizedCategory = category.toLowerCase()

  return articles.filter((article) =>
    article.categories?.some((cat) => cat.toLowerCase() === normalizedCategory),
  )
}
