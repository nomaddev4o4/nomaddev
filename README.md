# Personal Portfolio

A modern, animated personal portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Motion. This portfolio showcases my work experience, projects, skills, and education with smooth animations and a clean, minimal design.

🌐 **Live Demo**: [Add your deployed URL here]

## Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Smooth Animations**: Powered by Framer Motion and Motion-Primitives
- **Responsive Design**: Fully responsive and accessible design
- **Dark Mode**: Built-in dark mode support
- **Interactive Components**: Magnetic effects, morphing dialogs, and animated backgrounds
- **Project Showcase**: Video previews with expandable modal views
- **Blog Support**: MDX-powered blog (currently commented out)
- **Professional Sections**: Work experience, education, skills, and contact information

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, Motion-Primitives
- **Content**: MDX for blog posts
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:nomaddev4o4/nomaddev.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog posts (MDX)
│   ├── data.ts            # Portfolio data configuration
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable UI components
│   └── ui/               # Custom UI components
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions and constants
```

## Customization

### Personal Data

Update your personal information in `app/data.ts`:

- Projects with video previews
- Work experience
- Education background
- Skills and technologies
- Social links and contact information

### Styling

The project uses Tailwind CSS with custom components. Modify styles in:

- `app/globals.css` for global styles
- Individual component files for specific styling

### Adding Projects

Add new projects to the `PROJECTS` array in `app/data.ts` with:

- Project name and description
- Video preview URL
- Live demo or repository link

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnomaddev4o4%2Fnomaddev)

Or deploy to other platforms that support Next.js:

- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

This is a personal portfolio, but feel free to:

- Report bugs or issues
- Suggest improvements
- Fork for your own use

## License

Feel free to use this portfolio as inspiration for your own projects.

## Acknowledgments

Built with the amazing [Motion-Primitives](https://motion-primitives.com) component library and inspired by modern portfolio design patterns.
