# Krishnakanta Naik - Personal Portfolio

This is my personal portfolio website showcasing my work experience, technical skills, projects, and educational background. Built as a modern web application, it features my journey as a Software Developer Engineer II, the technologies I work with, and the projects I've developed.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, statically prerendered)
- React 19, TypeScript
- Tailwind CSS v4 + `@tailwindcss/typography`
- [Motion](https://motion.dev) / Motion-Primitives for interactive animations
- MDX blog posts via `@next/mdx`, syntax highlighting with `sugar-high`

## Development

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev        # start the dev server at http://localhost:3000
npm run build      # production build
npm run lint       # ESLint (flat config)
npm run typecheck  # TypeScript
npm run format     # Prettier
```

## Rendering notes

Pages are React Server Components, so all content is present in the
server-rendered HTML (good for SEO and for visitors before JavaScript loads).
Entrance animations are pure CSS (`motion-safe:animate-enter` in
`app/globals.css`) and respect `prefers-reduced-motion`. Only the interactive
pieces (spotlight, magnetic links, video dialog, theme switch, copy button) are
client components.

Content lives in `app/data.ts`; blog posts are `app/blog/<slug>/page.mdx`.
