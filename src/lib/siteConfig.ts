export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'remote-work-blog',
  name: 'Off-Grid',
  origin: 'https://remote-work-blog.oriz.in',
  tagline: 'Remote work & freelancing, from a desk that moves between time zones',
  description: 'Notes from a desk that moves between time zones — remote work and freelancing, written by someone who files the invoices.',
}
