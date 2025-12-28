import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { founderProjects, collaboratorProjects, type Project } from '@/lib/projects'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="li" className="border-r border-b border-zinc-200 dark:border-zinc-700 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <a 
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          {project.name}
        </a>
      </h2>
      <Card.Description>{project.description}</Card.Description>
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
            As Collaborator
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
