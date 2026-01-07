export interface Recommendation {
  name: string
  descriptionKey: string // Translation key for the description
  link?: string
  categories: string[]
}

export const recommendations: Recommendation[] = [
  // Workstation
  {
    name: '16" MacBook Pro, M1 Max, 64GB RAM (2021)',
    descriptionKey: 'macbookPro',
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'Apple Pro Display XDR (Standard Glass)',
    descriptionKey: 'proDisplayXDR',
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'IBM Model M SSK Industrial Keyboard',
    descriptionKey: 'ibmKeyboard',
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'Apple Magic Trackpad',
    descriptionKey: 'magicTrackpad',
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'Herman Miller Aeron Chair',
    descriptionKey: 'aeronChair',
    categories: ['Workstation', 'Hardware']
  },
  // Development tools
  {
    name: 'Sublime Text 4',
    descriptionKey: 'sublimeText',
    link: 'https://www.sublimetext.com/',
    categories: ['Development', 'Software']
  },
  {
    name: 'iTerm2',
    descriptionKey: 'iterm2',
    link: 'https://iterm2.com/',
    categories: ['Development', 'Software']
  },
  {
    name: 'TablePlus',
    descriptionKey: 'tablePlus',
    link: 'https://tableplus.com/',
    categories: ['Development', 'Software']
  },
  // Design
  {
    name: 'Figma',
    descriptionKey: 'figma',
    link: 'https://www.figma.com/',
    categories: ['Design', 'Software']
  },
  // Productivity
  {
    name: 'Alfred',
    descriptionKey: 'alfred',
    link: 'https://www.alfredapp.com/',
    categories: ['Productivity', 'Software']
  },
  {
    name: 'Reflect',
    descriptionKey: 'reflect',
    link: 'https://reflect.app/',
    categories: ['Productivity', 'Software']
  },
  {
    name: 'SavvyCal',
    descriptionKey: 'savvyCal',
    link: 'https://savvycal.com/',
    categories: ['Productivity', 'Software']
  },
  {
    name: 'Focus',
    descriptionKey: 'focus',
    link: 'https://heyfocus.com/',
    categories: ['Productivity', 'Software']
  }
]

export function getAllRecommendations(): Recommendation[] {
  return recommendations
}

export function getRecommendationsByCategory(category: string): Recommendation[] {
  const normalizedCategory = category.toLowerCase()
  return recommendations.filter(rec => 
    rec.categories.some(cat => cat.toLowerCase() === normalizedCategory)
  )
}

export function getAllRecommendationCategories(): string[] {
  const categories = new Set<string>()
  recommendations.forEach(rec => {
    rec.categories.forEach(cat => categories.add(cat))
  })
  return Array.from(categories).sort()
}
