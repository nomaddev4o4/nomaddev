import type { CSSProperties, ReactNode } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ProjectVideo } from '@/components/project-video'
import { cn } from '@/lib/utils'
import { WEBSITE_URL } from '@/lib/constants'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  SKILLS,
  type WorkExperience,
} from './data'

/*
 * This page is a Server Component: every section below is rendered to HTML on
 * the server and is visible before (or without) JavaScript. Only the small
 * interactive islands (Spotlight, Magnetic, AnimatedBackground, ProjectVideo)
 * hydrate on the client. The staggered entrance animation is pure CSS.
 */

const SECTION_STAGGER_MS = 150

function Section({
  index,
  className,
  children,
}: {
  index: number
  className?: string
  children: ReactNode
}) {
  const style: CSSProperties = {
    animationDelay: `${index * SECTION_STAGGER_MS}ms`,
  }
  return (
    <section
      className={cn('motion-safe:animate-enter', className)}
      style={style}
    >
      {children}
    </section>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
        fill="currentColor"
      />
    </svg>
  )
}

function WorkCard({ job }: { job: WorkExperience }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-px dark:bg-zinc-600/30">
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div className="relative h-full w-full rounded-[15px] bg-white p-5 dark:bg-zinc-950">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="font-medium dark:text-zinc-100">{job.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {job.company}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {job.start} - {job.end}
              </p>
            </div>
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Visit Company
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          </div>

          <div className="space-y-2">
            <h5 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Key Responsibilities
            </h5>
            <ul className="space-y-1.5">
              {job.description.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Technologies
            </h5>
            <ul className="flex flex-wrap gap-1.5">
              {job.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-px rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <ArrowUpRightIcon className="h-3 w-3" />
      </a>
    </Magnetic>
  )
}

/** Structured data so search engines can identify the portfolio owner. */
function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Krishnakanta Naik',
    jobTitle: 'Frontend Developer',
    url: WEBSITE_URL,
    email: `mailto:${EMAIL}`,
    worksFor: WORK_EXPERIENCE[0]
      ? { '@type': 'Organization', name: WORK_EXPERIENCE[0].company }
      : undefined,
    alumniOf: EDUCATION.map((e) => ({
      '@type': 'CollegeOrUniversity',
      name: e.school,
    })),
    sameAs: SOCIAL_LINKS.map((l) => l.link),
  }

  return (
    <script
      type="application/ld+json"
      // Escape `<` so the payload can never terminate the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default function Personal() {
  return (
    <main className="space-y-24">
      <PersonJsonLd />

      {/* About Section */}
      <Section index={0}>
        <p className="text-zinc-600 dark:text-zinc-400">
          Front-End Developer with 1.5+ years of experience building
          enterprise-grade Angular applications. Passionate about modern web
          technologies with hands-on experience in developing SaaS apps using
          Next.js. Focused on writing clean, scalable code and contributing to
          impactful products. Seeking remote or international opportunities to
          grow in a collaborative, fast-paced environment.
        </p>
      </Section>

      {/* Skills Section */}
      <Section index={1}>
        <h3 className="mb-5 text-lg font-medium">Skills</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="space-y-2">
              <h4 className="font-normal dark:text-zinc-100">
                {skill.category}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Work Experience Section */}
      <Section index={2}>
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <WorkCard key={job.id} job={job} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section index={3}>
        <h3 className="mb-3 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {EDUCATION.map((education) => (
              <a
                key={education.school}
                className="-mx-3 rounded-xl px-3 py-3"
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
                data-id={education.school}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {education.school}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {education.degree}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {education.start} - {education.end}
                  </p>
                </div>
              </a>
            ))}
          </AnimatedBackground>
        </div>
      </Section>

      {/* Projects Section */}
      <Section index={4}>
        <div className="mb-5">
          <h3 className="text-lg font-medium">Projects</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            These projects are built as a portfolio showcase to demonstrate my
            full-stack development skills and are not intended for actual SaaS
            business purposes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectVideo src={project.video} title={project.name} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-px w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-2xl bg-black px-2 py-1 text-xs text-white dark:bg-white dark:text-black"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                <GitHubIcon className="h-4 w-4" />
                View Source
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Connect Section */}
      <Section index={5}>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </Section>
    </main>
  )
}
