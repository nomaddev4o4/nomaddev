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
    category: 'AI Tools',
    items: ['Cursor', 'Claude Code', 'GitHub Copilot', 'v0'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Next.js', 'React', 'Angular'],
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'SCSS', 'ShadcnUI', 'HeroUI', 'Framer Motion'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Bitbucket', 'JIRA', 'Vercel', 'NX'],
  },
  {
    category: 'Backend & APIs',
    items: ['Supabase', 'Drizzle ORM', 'Stripe', 'VAPI', 'NodeJS'],
  },
  {
    category: 'Auth & IAM',
    items: ['AWS Cognito', 'AWS Amplify', 'Clerk', 'Okta', 'ForgeRock'],
  },
  {
    category: 'Other Skills',
    items: ['Responsive Design', 'Micro-frontend Architecture', 'CI/CD'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Pariona',
    description:
      'A full-stack SaaS platform enabling businesses to implement Purchase Power Parity (PPP) pricing globally. Automatically detects visitor location via Vercel edge functions and renders localized discount banners — with Stripe subscriptions, real-time analytics, and an embeddable JS widget.',
    link: 'https://pariona.vercel.app/',
    githubLink: 'https://github.com/nomaddev4o4/pariona',
    tech: [
      'Next.js 15',
      'Neon (PostgreSQL)',
      'Drizzle ORM',
      'Stripe',
      'Clerk Auth',
      'Recharts',
      'ShadcnUI',
      'Tailwind CSS',
    ],
    video:
      'https://res.cloudinary.com/dp1fryj2w/video/upload/v1753296742/pariona-project_zbizeg.mp4',
    id: 'project1',
  },
  {
    name: 'Converso',
    description:
      'An AI-powered LMS where students create personalized tutoring companions and conduct real-time voice sessions. Integrates VAPI for voice orchestration, ElevenLabs for voice synthesis, Deepgram for live transcription, and GPT-4 for tutoring responses.',
    link: 'https://learnit-sigma.vercel.app/',
    githubLink: 'https://github.com/nomaddev4o4/lms-saas',
    tech: [
      'Next.js 15',
      'React 19',
      'Supabase',
      'VAPI',
      'ElevenLabs',
      'OpenAI GPT-4',
      'Deepgram',
      'Clerk Auth & Billing',
      'Sentry',
      'ShadcnUI',
      'Tailwind CSS',
    ],
    video:
      'https://res.cloudinary.com/dp1fryj2w/video/upload/v1753298904/converso-project_r53yia.mp4',
    id: 'project2',
  },
  {
    name: 'AI Chat Landing Page',
    description:
      'A polished marketing landing page for HeroUI Chat (heroui.chat), built as an entry in the official HeroUI hackathon. Features an animated hero, live component previews for 5 AI features, an auto-scrolling community gallery, and a 3-tier pricing section.',
    link: 'https://heroui-chat-five.vercel.app/',
    githubLink: 'https://github.com/nomaddev4o4/heroui-chat',
    tech: ['Next.js', 'HeroUI', 'Framer Motion', 'Tailwind CSS'],
    video:
      'https://res.cloudinary.com/dp1fryj2w/video/upload/v1753285315/landing-page-project_l6rcwp.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Aquera',
    title: 'Software Development Engineer II',
    start: '2024',
    end: 'Present',
    link: 'https://aquera.com/',
    id: 'work1',
    description: [
      'Joined as a Software Engineering Intern and promoted to SDE-II within the same year based on performance and impact',
      'Sole frontend engineer on GAM — Aquera\'s core enterprise admin portal deployed for Toyota — owning 5+ major modules with 982 commits on Angular 21, TypeScript, RxJS, and NgRx',
      'Delivered key modules including Acknowledgements (PDF workflows), PIAM Audit Logs, Email Template migration, realm-based multi-org with OKTA, and dashboard migration from Chart.js to Highcharts',
      'Upgraded the company-wide Nx monorepo from v13 to v17, improving build performance and developer tooling across the frontend team',
      'Functioned as MTS-2 on the NEIM product team, mentoring 3 junior frontend engineers across risk profiling, Delegated Admin portal, and contractor management features',
      'Bootstrapped two greenfield Angular/Nx applications (NEI Contractor UI and NEI Control Center UI) end-to-end with AWS Cognito auth and Bitbucket CI/CD pipelines targeting AWS S3',
      '2,100+ commits across 7 production repositories spanning two major product lines (GAM and NEIM)',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'NX Monorepo',
      'Module Federation',
      'AWS Cognito',
      'Highcharts',
      'SCSS',
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
  // Add your real blog posts here — placeholder entries removed
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/nomaddev4o4',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/krishnakanta-naik-913788209/',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/krishnakanta04',
  },
]

export const EMAIL = 'krishnakantanaik04@gmail.com'