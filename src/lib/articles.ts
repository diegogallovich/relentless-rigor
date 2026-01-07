import glob from 'fast-glob'

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

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/[locale]/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/[locale]/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export async function getAllCategories(): Promise<string[]> {
  const articles = await getAllArticles()
  const categories = new Set<string>()
  
  articles.forEach(article => {
    if (article.categories) {
      article.categories.forEach(cat => categories.add(cat))
    }
  })
  
  return Array.from(categories).sort()
}

export async function getArticlesByCategory(category: string): Promise<ArticleWithSlug[]> {
  const articles = await getAllArticles()
  const normalizedCategory = category.toLowerCase()
  
  return articles.filter(article => 
    article.categories?.some(cat => cat.toLowerCase() === normalizedCategory)
  )
}
