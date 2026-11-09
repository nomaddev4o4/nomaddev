import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { WEBSITE_URL } from '@/lib/constants'

const NAME = 'Krishnakanta Naik'
const DESCRIPTION =
  'Welcome to my portfolio — I’m Krishnakanta Naik, a frontend developer. Explore my projects, experience, and skills in building modern web apps.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: NAME,
    template: '%s | Krishnakanta',
  },
  description: DESCRIPTION,
  authors: [{ name: NAME, url: WEBSITE_URL }],
  creator: NAME,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: NAME,
    title: NAME,
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: NAME,
    description: DESCRIPTION,
    creator: '@krishnakanta04',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white font-sans tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
