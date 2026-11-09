import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { lang } from 'sugar-high/lang'

type CoverProps = {
  src: string
  alt: string
  caption: string
}

function Cover({ src, alt, caption }: CoverProps) {
  return (
    <figure>
      {/* External CDN image with unknown dimensions; a plain <img> avoids
          having to allow-list every remote host for next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="rounded-xl" />
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  )
}

function Code({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'code'>) {
  // Fenced code blocks arrive as <code className="language-xyz">; inline
  // `code` has no class and is rendered as-is.
  const fence = className?.match(/language-(\S+)/)?.[1]
  if (!fence || typeof children !== 'string') {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  const html = highlight(children, { lang: lang(fence) ?? 'javascript' })
  return (
    <code
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  )
}

const components = {
  Cover,
  code: Code,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
