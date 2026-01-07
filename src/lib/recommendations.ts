export interface Recommendation {
  name: string
  description: string
  link?: string
  categories: string[]
}

export const recommendations: Recommendation[] = [
  // Workstation
  {
    name: '16" MacBook Pro, M1 Max, 64GB RAM (2021)',
    description: "I was using an Intel-based 16\" MacBook Pro prior to this and the difference is night and day. I've never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'Apple Pro Display XDR (Standard Glass)',
    description: "The only display on the market if you want something HiDPI and bigger than 27\". When you're working at planetary scale, every pixel you can get counts.",
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'IBM Model M SSK Industrial Keyboard',
    description: "They don't make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.",
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'Apple Magic Trackpad',
    description: 'Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.',
    categories: ['Workstation', 'Hardware']
  },
  {
    name: 'Herman Miller Aeron Chair',
    description: "If I'm going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.",
    categories: ['Workstation', 'Hardware']
  },
  // Development tools
  {
    name: 'Sublime Text 4',
    link: 'https://www.sublimetext.com/',
    description: "I don't care if it's missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.",
    categories: ['Development', 'Software']
  },
  {
    name: 'iTerm2',
    link: 'https://iterm2.com/',
    description: "I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.",
    categories: ['Development', 'Software']
  },
  {
    name: 'TablePlus',
    link: 'https://tableplus.com/',
    description: 'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.',
    categories: ['Development', 'Software']
  },
  // Design
  {
    name: 'Figma',
    link: 'https://www.figma.com/',
    description: "We started using Figma as just a design tool but now it's become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.",
    categories: ['Design', 'Software']
  },
  // Productivity
  {
    name: 'Alfred',
    link: 'https://www.alfredapp.com/',
    description: "It's not the newest kid on the block but it's still the fastest. The Sublime Text of the application launcher world.",
    categories: ['Productivity', 'Software']
  },
  {
    name: 'Reflect',
    link: 'https://reflect.app/',
    description: "Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it's still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.",
    categories: ['Productivity', 'Software']
  },
  {
    name: 'SavvyCal',
    link: 'https://savvycal.com/',
    description: 'Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.',
    categories: ['Productivity', 'Software']
  },
  {
    name: 'Focus',
    link: 'https://heyfocus.com/',
    description: 'Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.',
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

