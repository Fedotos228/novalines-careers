import { getJobBySlug } from '@/utils/getJobBySlug'

type JobbsSinglePropsType = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: JobbsSinglePropsType) {
    const { slug } = params

    const jobsData = await getJobBySlug(slug)
    const job = jobsData.data.attributes

    return {
        title: `${job.title} | Cariere Novalines`,
        description: job.description,
        keywords: job.title,
    }
}

export default function JobsSingleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
