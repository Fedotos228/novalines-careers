import { getJob } from '@/lib/content'

type JobbsSinglePropsType = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: JobbsSinglePropsType) {
    const { slug } = await params

    const job = getJob(slug)
    if (!job) return {}

    const title = `${job.title} – Chicago, IL`
    const description = `Non-driving job at Nova Lines in Chicago, IL. ${job.tagline} ${job.description}`

    return {
        title,
        description,
        keywords: [job.title, `${job.title} jobs Chicago`, 'non-driving jobs Chicago', 'Nova Lines careers'],
        alternates: { canonical: `/jobs/${job.slug}` },
        openGraph: { title, description, url: `/jobs/${job.slug}`, type: 'website' },
    }
}

export default function JobsSingleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
