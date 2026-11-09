import type { MetadataRoute } from 'next'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { WEBSITE_URL } from '@/lib/constants'

/** Every folder under app/blog with a page.mdx is a published post. */
function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  return readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) =>
      readdirSync(path.join(blogDir, entry.name)).includes('page.mdx'),
    )
    .map((entry) => entry.name)
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WEBSITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...getBlogSlugs().map((slug) => ({
      url: `${WEBSITE_URL}/blog/${slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ]
}
