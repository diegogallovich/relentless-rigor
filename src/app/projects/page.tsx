import { type Metadata } from 'next'

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

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="li" className="border-r border-b border-zinc-300 dark:border-zinc-700 p-8 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50">
      {/* Header with title */}
      <div className="border-b border-zinc-300 dark:border-zinc-700 pb-4 mb-4">
        <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 font-mono uppercase">
          <a 
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            {project.name}
          </a>
        </h2>
      </div>

      {/* Description */}
      <p className="relative z-10 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Metadata grid */}
      <div className="border-t border-zinc-300 dark:border-zinc-700 pt-4 space-y-3">
        {/* Tags */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-2 font-mono">
            Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center border border-zinc-300 dark:border-zinc-700 px-2 py-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-400 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Industry */}
        {project.industry && (
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1 font-mono">
              Industry
            </div>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">
              {project.industry}
            </p>
          </div>
        )}

        {/* Dates */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1 font-mono">
            Period
          </div>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">
            {project.dates}
          </p>
        </div>

        {/* Link */}
        <div className="pt-1">
          <div className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1 font-mono">
            URL
          </div>
          <p className="flex items-center text-xs text-zinc-700 dark:text-zinc-300 font-mono">
            <LinkIcon className="h-3 w-3 flex-none mr-2" />
            <span className="truncate">{project.link.text}</span>
          </p>
        </div>
      </div>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects Diego has worked on as founder and collaborator.',
}

export default function Projects() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="space-y-20">
        {/* As Founder or Co-Founder Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-8">
            As Founder or Co-Founder
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-300 dark:border-zinc-700"
          >
            {founderProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </section>

        {/* As Collaborator Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-8">
            As Collaborator
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-300 dark:border-zinc-700"
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
