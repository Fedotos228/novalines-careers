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

    return {
        title: `${job.title} | Cariere Novalines`,
        description: job.description,
        keywords: job.title,
    }
}

export default function JobsSingleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
