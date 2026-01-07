export interface Project {
  name: string
  descriptionKey: string // Translation key for the description
  link: {
    url: string
    text: string
  }
  faviconUrl: string
  tags: string[]
  industry?: string
  dates: string
}

export const founderProjects: Project[] = [
  {
    name: 'WebsiteFlows',
    descriptionKey: 'websiteflows',
    link: {
      url: 'https://www.websiteflows.com?ref=relentlessrigor',
      text: 'websiteflows.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/placeholder', // Will need actual URL
    tags: ['Webflow Development', 'Website Design'],
    dates: '2022 - Present'
  }
]

export const collaboratorProjects: Project[] = [
  {
    name: 'Acodei',
    descriptionKey: 'acodei',
    link: {
      url: 'https://www.acodei.com?ref=relentlessrigor',
      text: 'acodei.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/60c2731ad873180dd0cc9c0d/apple-touch-icon.png',
    tags: ['Workflow Automation', 'Marketing Automation', 'Email Marketing', 'Marketing Collateral Designs', 'Webflow Development', 'Website Design', 'Growth Analytics', 'SEO', 'AEO'],
    industry: 'FinTech',
    dates: '2023 - Present'
  },
  {
    name: 'alphaAI Capital',
    descriptionKey: 'alphaai',
    link: {
      url: 'https://www.alphaai.capital?ref=relentlessrigor',
      text: 'alphaai.capital'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/64d7b43c3365e9c6598e016e/64e7828456641883658f8287_AlphaAI%20Webclip%20256.png',
    tags: ['Marketing Automation', 'Webflow Development', 'Website Design', 'Growth Analytics', 'Email Marketing', 'Deck Design', 'SEO', 'AEO'],
    industry: 'FinTech, AI',
    dates: '2023 - Present'
  },
  {
    name: 'Rain Intelligence',
    descriptionKey: 'rainintelligence',
    link: {
      url: 'https://www.rainintelligence.com?ref=relentlessrigor',
      text: 'rainintelligence.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/66fab380536a1ee6dcfd4273/apple-touch-icon.png',
    tags: ['Workflow Automation', 'Webflow Development', 'Website Design', 'Deck Design'],
    industry: 'LegalTech, AI',
    dates: '2023 - Present'
  },
  {
    name: 'Rev',
    descriptionKey: 'rev',
    link: {
      url: 'https://www.rev.com?ref=relentlessrigor',
      text: 'rev.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/65dd0e80788a2f545d95cd65/apple-touch-icon.png',
    tags: ['Webflow Development', 'Workflow Automation'],
    industry: 'LegalTech, AI',
    dates: '2024 - 2025'
  },
  {
    name: 'Rox',
    descriptionKey: 'rox',
    link: {
      url: 'https://www.rox.com?ref=relentlessrigor',
      text: 'rox.com'
    },
    faviconUrl: 'https://www.rox.com/favicon.ico',
    tags: ['Webflow Development'],
    industry: 'RevTech, AI',
    dates: '2024'
  },
  {
    name: 'Lawsuit Review',
    descriptionKey: 'lawsuitreview',
    link: {
      url: 'https://www.lawsuitreview.com?ref=relentlessrigor',
      text: 'lawsuitreview.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/65db45602d52d8b9264ac3eb/65dba11645e9987d60541178_webclip-256.png',
    tags: ['Webflow Development', 'Website Design'],
    industry: 'LegalTech, Data',
    dates: '2024'
  },
  {
    name: 'FemGevity Health',
    descriptionKey: 'femgevity',
    link: {
      url: 'https://www.femgevityhealth.com?ref=relentlessrigor',
      text: 'femgevityhealth.com'
    },
    faviconUrl: 'https://www.femgevityhealth.com/favicon.ico',
    tags: ['Webflow Development', 'Marketing Automation', 'Website Design', 'SEO'],
    industry: 'HealthTech',
    dates: '2024 - 2025'
  },
  {
    name: 'Materna Healthcare',
    descriptionKey: 'materna',
    link: {
      url: 'https://www.maternahealthcare.com?ref=relentlessrigor.com',
      text: 'maternahealthcare.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/68cf8fac2924c725be044b08/68f681600f13f1e98d937082_webclip-256x256.png',
    tags: ['SEO', 'AEO', 'Webflow Development', 'Marketing Automation'],
    industry: 'Health',
    dates: '2025 - Present'
  },
  {
    name: 'Seminary Now',
    descriptionKey: 'seminarynow',
    link: {
      url: 'https://on.seminarynow.com?ref=relentlessrigor',
      text: 'seminarynow.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/67ae4e6286c0277b63234e36/apple-touch-icon.png',
    tags: ['Webflow Development', 'Website Design'],
    industry: 'Education',
    dates: '2024-2025'
  },
  {
    name: 'PrePad',
    descriptionKey: 'prepad',
    link: {
      url: 'https://www.prepad.io?ref=relentlessrigor',
      text: 'prepad.io'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/68b8f9a4b9060cfa750e0093/68b8f9a4b9060cfa750e01ca_PrePad-Favicon-256.png',
    tags: ['Webflow development', 'Website design'],
    industry: 'Energy',
    dates: '2025 - Present'
  },
  {
    name: 'Wieser',
    descriptionKey: 'wieser',
    link: {
      url: 'https://www.wieser.it?ref=relentlessrigor',
      text: 'wieser.it'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/676c56d85ede5269127c8f3a/678fb4d90f2307ef11739f50_favicon-wieser-256.png',
    tags: ['Webflow Development', 'Website Design'],
    industry: 'Construction',
    dates: '2024 - Present'
  },
  {
    name: 'Evolve Partners',
    descriptionKey: 'evolvepartners',
    link: {
      url: 'https://www.evolve.partners?ref=relentlessrigor',
      text: 'evolve.partners'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/6666d840d85ebf13240c61ac/67092e104e84b7f0821617c0_evolve-webclip.png',
    tags: ['Webflow Development', 'Website Design'],
    industry: 'Energy',
    dates: '2024'
  },
  {
    name: 'ColoColo Hostel',
    descriptionKey: 'colocolo',
    link: {
      url: 'https://www.colocolo.com?ref=relentlessrigor',
      text: 'colocolo.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/62cd98ce21ffcaff4edd746d/apple-touch-icon.png',
    tags: ['Webflow Development', 'Workflow Automation', 'Business Automation', 'IoT'],
    industry: 'Hospitality',
    dates: '2021 - 2023'
  },
  {
    name: 'Alohause',
    descriptionKey: 'alohause',
    link: {
      url: 'https://www.alohause.com?ref=relentlessrigor',
      text: 'alohause.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/677b4fa2d65e381428ceab36/apple-touch-icon.png',
    tags: ['Web App Development', 'Web App Design', 'Business Automation'],
    industry: 'Hospitality',
    dates: '2021 - 2023'
  },
  {
    name: 'Dr. George Beyloune',
    descriptionKey: 'drgeorgebeyloune',
    link: {
      url: 'https://www.drgeorgebeyloune.com?ref=relentlessrigor',
      text: 'drgeorgebeyloune.com'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/690a19a0adfea5b3a5f180ff/apple-touch-icon.png',
    tags: ['Marketing Automation', 'Growth Analytics', 'Webflow Development', 'Website Design', 'Business Automation', 'SEO'],
    industry: 'Health',
    dates: '2025'
  },
  {
    name: 'Ropa Investments',
    descriptionKey: 'ropainvestments',
    link: {
      url: 'https://www.ropa.gi?ref=relentlessrigor.com',
      text: 'ropa.gi'
    },
    faviconUrl: 'https://cdn.prod.website-files.com/67cff258c12491589b7d9b7b/apple-touch-icon.png',
    tags: ['Webflow development'],
    industry: 'Finance',
    dates: '2025'
  }
]

export function getProjectsByTag(tag: string): Project[] {
  const normalizedTag = tag.toLowerCase()
  const allProjects = [...founderProjects, ...collaboratorProjects]
  
  return allProjects.filter(project => 
    project.tags.some(t => t.toLowerCase() === normalizedTag)
  )
}

export function getAllProjectTags(): string[] {
  const allProjects = [...founderProjects, ...collaboratorProjects]
  const tags = new Set<string>()
  
  allProjects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}
