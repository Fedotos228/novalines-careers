import { SITE_URL } from '@/constants/site'
import { getJobs } from '@/lib/content'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...getJobs().map((job) => ({
      url: `${SITE_URL}/jobs/${job.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
