import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { founderProjects, collaboratorProjects, type Project } from '@/lib/projects'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

async function ProjectCard({ project }: { project: Project }) {
  const t = await getTranslations('projects')

  return (
    <Card as="li" className="border-r border-b border-zinc-200 dark:border-zinc-700 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={project.link.url} target="_blank" rel="noopener noreferrer">
          {project.name}
        </Card.Link>
      </h2>
      <Card.Description>{t(`descriptions.${project.descriptionKey}`)}</Card.Description>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.industry && (
        <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
          Industry: {project.industry}
        </p>
      )}
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
        {project.dates}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">{project.link.text}</span>
      </p>
    </Card>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('projects')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Projects() {
  const t = await getTranslations('projects')

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="space-y-20">
        {/* As Founder or Co-Founder Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-8">
            {t('founderProjects')}
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200 dark:border-zinc-700"
          >
            {founderProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </section>

        {/* As Collaborator Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-8">
            {t('collaboratorProjects')}
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200 dark:border-zinc-700"
          >
            {collaboratorProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </section>
      </div>
    </Container>
  )
}
