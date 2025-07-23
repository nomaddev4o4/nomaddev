type Project = {
  name: string
  description: string
  link: string
  githubLink: string
  video: string
  id: string
  tech: string[]
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description: string[]
  technologies: string[]
}

type Education = {
  school: string
  degree: string
  start: string
  end: string
  link: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const SKILLS = [
  {
    category: 'Frameworks & Libraries',
    items: ['Next.js', 'React', 'Angular'],
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'SCSS', 'ShadcnUI', 'HeroUI'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Bitbucket', 'JIRA', 'Vercel', 'NX'],
  },
  {
    category: 'Backend & APIs',
    items: ['Supabase', 'NodeJS'],
  },
  {
    category: 'Other Skills',
    items: ['Responsive Design', 'Clean Architecture'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Pariona',
    description:
      'Pariona is a sophisticated SaaS platform that enables businesses to implement Purchase Power Parity (PPP) based pricing strategies.',
    link: 'https://pariona.vercel.app/',
    githubLink: 'https://github.com/nomaddev4o4/pariona',
    tech: [
      'NextJS',
      'Neon',
      'Stripe',
      'Clerk Auth',
      'Drizzle',
      'ShadcnUI',
      'Tailwind',
    ],
    video:
      'https://res.cloudinary.com/dp1fryj2w/video/upload/v1753296742/pariona-project_zbizeg.mp4',
    id: 'project1',
  },
  {
    name: 'Converso',
    description:
      'Converso is an innovative Learning Management System (LMS) SaaS that revolutionizes education through AI-powered voice conversations.',
    link: 'https://learnit-sigma.vercel.app/',
    githubLink: 'https://github.com/nomaddev4o4/lms-saas',
    tech: [
      'Next JS',
      'Supabase',
      'Vapi AI',
      'Clerk Auth & Billing',
      'Drizzle',
      'ShadcnUI',
      'Tailwind',
    ],
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'AI Chat Landing Page',
    description: 'Built a landing page for AI chat app in a HeroUI hackathon',
    link: 'https://heroui-chat-five.vercel.app/',
    githubLink: 'https://github.com/nomaddev4o4/heroui-chat',
    tech: ['Next JS', 'HeroUI', 'Framer Motion', 'Tailwind'],
    video:
      'https://res.cloudinary.com/dp1fryj2w/video/upload/v1753285315/landing-page-project_l6rcwp.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Aquera',
    title: 'Software Developer Engineer II',
    start: '2024',
    end: 'Present',
    link: 'https://aquera.com/',
    id: 'work1',
    description: [
      'Started as an intern and promoted to SDE-II, contributing to enterprise-grade Angular applications',
      'Developing and maintaining Partner Identity Access Management (PIAM) systems used by Fortune 500 enterprises',
      'Successfully upgraded company-wide NX monorepo infrastructure from version 13 to version 17, improving build performance and developer experience',
      'Participating in comprehensive code review processes to ensure code quality and maintain development standards',
      'Collaborating with cross-functional teams including senior developers, designers, and product managers',
      'Contributing to scalable frontend solutions while working closely with backend teams',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'NX Monorepo',
      'Git',
      'Bitbucket',
      'JIRA',
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'GIET University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    start: '2019',
    end: '2023',
    link: 'https://www.giet.edu/',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/nomaddev4o4',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/krishnakanta04',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/krishnakanta-naik-913788209/',
  },
]

export const EMAIL = 'krishnakantanaik04@gmail.com'
