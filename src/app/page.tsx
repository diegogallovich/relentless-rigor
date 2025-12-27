import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'


function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group border border-zinc-300 dark:border-zinc-700 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" {...props}>
      <Icon className="h-5 w-5 fill-zinc-700 dark:fill-zinc-400" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="border border-zinc-300 dark:border-zinc-700 p-8"
    >
      <div className="border-b border-zinc-300 dark:border-zinc-700 pb-4 mb-4">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono uppercase tracking-wider">
          <MailIcon className="h-5 w-5 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
      </div>
      <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-6">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="border-t border-zinc-300 dark:border-zinc-700 pt-4">
        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-2 block font-mono">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              required
              className="w-full appearance-none border border-zinc-300 dark:border-zinc-700 bg-white px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-zinc-600"
            />
          </div>
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </div>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4 py-3 first:pt-0">
      <div className="relative flex h-10 w-10 flex-none items-center justify-center border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-col gap-y-1">
        <dt className="sr-only">Company</dt>
        <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-700 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="text-[10px] text-zinc-500 dark:text-zinc-500 font-mono uppercase tracking-wider"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="border border-zinc-300 dark:border-zinc-700 p-8">
      <div className="border-b border-zinc-300 dark:border-zinc-700 pb-4 mb-6">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono uppercase tracking-wider">
          <BriefcaseIcon className="h-5 w-5 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
      </div>
      <ol className="space-y-1 divide-y divide-zinc-200 dark:divide-zinc-800">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <div className="border-t border-zinc-300 dark:border-zinc-700 mt-6 pt-6">
        <Button href="#" variant="secondary" className="group w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}



export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="border border-zinc-300 dark:border-zinc-700 p-8">
          <div className="border-b border-zinc-300 dark:border-zinc-700 pb-6 mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100 font-mono uppercase">
              Diego Gallovich's Personal Website
            </h1>
          </div>
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            This site conglomerates Diego's projects, ideas, opinions, and recommendations.
          </p>
          <div className="border-t border-zinc-300 dark:border-zinc-700 pt-6">
            <div className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-3 font-mono">
              Connect
            </div>
            <div className="flex gap-4">
              <SocialLink href="https://x.com/diego_gallovich" aria-label="Follow on X" icon={XIcon} />
              <SocialLink
                href="https://github.com/diegogallovich"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://linkedin.com/in/diegotech"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
